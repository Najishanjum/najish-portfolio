import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, User, Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { NajishAI } from "./NajishAI";
import naChatbotLogo from "@/assets/na-chatbot-logo.png";

type Message = { role: "user" | "assistant"; content: string };

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/na-chatbot`;

const QUICK_PROMPTS = [
  "Who is Najish?",
  "Show me projects",
  "Tech stack?",
  "Why hire Najish?",
];

async function streamChat({
  messages,
  onDelta,
  onDone,
  onError,
}: {
  messages: Message[];
  onDelta: (text: string) => void;
  onDone: () => void;
  onError: (err: string) => void;
}) {
  try {
    const resp = await fetch(CHAT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
      },
      body: JSON.stringify({ messages }),
    });

    if (!resp.ok) {
      const data = await resp.json().catch(() => ({}));
      onError(data.error || "Something went wrong. Please try again.");
      return;
    }

    if (!resp.body) { onError("No response body"); return; }

    const reader = resp.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";
    let streamDone = false;

    while (!streamDone) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });

      let idx: number;
      while ((idx = buffer.indexOf("\n")) !== -1) {
        let line = buffer.slice(0, idx);
        buffer = buffer.slice(idx + 1);
        if (line.endsWith("\r")) line = line.slice(0, -1);
        if (line.startsWith(":") || line.trim() === "") continue;
        if (!line.startsWith("data: ")) continue;
        const json = line.slice(6).trim();
        if (json === "[DONE]") { streamDone = true; break; }
        try {
          const parsed = JSON.parse(json);
          const content = parsed.choices?.[0]?.delta?.content;
          if (content) onDelta(content);
        } catch {
          buffer = line + "\n" + buffer;
          break;
        }
      }
    }

    if (buffer.trim()) {
      for (let raw of buffer.split("\n")) {
        if (!raw) continue;
        if (raw.endsWith("\r")) raw = raw.slice(0, -1);
        if (!raw.startsWith("data: ")) continue;
        const json = raw.slice(6).trim();
        if (json === "[DONE]") continue;
        try {
          const p = JSON.parse(json);
          const c = p.choices?.[0]?.delta?.content;
          if (c) onDelta(c);
        } catch { /* ignore */ }
      }
    }

    onDone();
  } catch (e) {
    onError(e instanceof Error ? e.message : "Network error");
  }
}

export const NAChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => { scrollToBottom(); }, [messages, scrollToBottom]);
  useEffect(() => { if (isOpen) inputRef.current?.focus(); }, [isOpen]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;
    const userMsg: Message = { role: "user", content: text.trim() };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    let assistantSoFar = "";
    const upsertAssistant = (chunk: string) => {
      assistantSoFar += chunk;
      setMessages(prev => {
        const last = prev[prev.length - 1];
        if (last?.role === "assistant") {
          return prev.map((m, i) => i === prev.length - 1 ? { ...m, content: assistantSoFar } : m);
        }
        return [...prev, { role: "assistant", content: assistantSoFar }];
      });
    };

    await streamChat({
      messages: [...messages, userMsg],
      onDelta: upsertAssistant,
      onDone: () => setIsLoading(false),
      onError: (err) => {
        setMessages(prev => [...prev, { role: "assistant", content: `⚠️ ${err}` }]);
        setIsLoading(false);
      },
    });
  };

  return (
    <>
      {/* Floating Button with Logo */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-24 right-6 z-50 w-14 h-14 rounded-full bg-[#0B0D10] border-2 border-[#246BFD] flex items-center justify-center shadow-[0_4px_25px_rgba(36,107,253,0.35)] overflow-hidden"
            aria-label="Open AI Assistant"
          >
            <img src={naChatbotLogo} alt="NA ChatBot" className="w-10 h-10 rounded-full object-cover" />
            <span className="absolute inset-0 rounded-full border-2 border-[#246BFD] animate-ping opacity-30 pointer-events-none" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] h-[550px] max-h-[calc(100vh-4rem)] flex flex-col rounded-[24px] overflow-hidden border border-[#252830] shadow-2xl bg-[#0B0D10]/95 backdrop-blur-xl text-white"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-[#12151B] border-b border-[#252830]">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img src={naChatbotLogo} alt="NA" className="w-9 h-9 rounded-full object-cover border border-[#246BFD]/40" />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#246BFD] rounded-full border-2 border-[#0B0D10]" />
                </div>
                <div>
                  <h3 className="font-display text-base uppercase tracking-tight text-white">NA CHATBOT</h3>
                  <p className="font-mono text-[10px] text-[#9A9CA3]">AI ASSISTANT &middot; ONLINE</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#252830] transition-colors"
              >
                <X className="w-4 h-4 text-[#9A9CA3]" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 && (
                <div className="text-center pt-6">
                  <img src={naChatbotLogo} alt="NA ChatBot" className="w-16 h-16 mx-auto mb-4 rounded-full object-cover border-2 border-[#246BFD]/30" />
                  <h4 className="font-display text-xl text-white uppercase tracking-tight mb-1">HELLO THERE</h4>
                  <p className="text-xs text-[#9A9CA3] mb-5 font-sans">
                    I'm NA ChatBot. Ask me about Najish's skills, projects, or background!
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {QUICK_PROMPTS.map((q) => (
                      <button
                        key={q}
                        onClick={() => sendMessage(q)}
                        className="px-3 py-1.5 text-xs font-mono rounded-full border border-[#252830] bg-[#12151B] text-[#9A9CA3] hover:text-white hover:border-[#246BFD] transition-colors"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                  <div className="mt-4">
                    <NajishAI />
                  </div>
                </div>
              )}

              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.role === "assistant" && (
                    <img src={naChatbotLogo} alt="NA" className="w-7 h-7 rounded-full object-cover flex-shrink-0 mt-0.5 border border-[#246BFD]/30" />
                  )}
                  <div
                    className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-[#246BFD] text-white rounded-br-md font-sans"
                        : "bg-[#12151B] text-[#F7F7F7] rounded-bl-md border border-[#252830]"
                    }`}
                  >
                    {msg.role === "assistant" ? (
                      <div className="prose prose-sm prose-invert max-w-none [&>p]:m-0 [&>ul]:my-1 [&>ol]:my-1 [&>p+p]:mt-2">
                        <ReactMarkdown>{msg.content}</ReactMarkdown>
                      </div>
                    ) : (
                      msg.content
                    )}
                  </div>
                  {msg.role === "user" && (
                    <div className="w-7 h-7 rounded-full bg-[#12151B] border border-[#252830] flex-shrink-0 flex items-center justify-center mt-0.5">
                      <User className="w-3.5 h-3.5 text-[#9A9CA3]" />
                    </div>
                  )}
                </div>
              ))}

              {isLoading && messages[messages.length - 1]?.role !== "assistant" && (
                <div className="flex gap-2 items-start">
                  <img src={naChatbotLogo} alt="NA" className="w-7 h-7 rounded-full object-cover flex-shrink-0 border border-[#246BFD]/30" />
                  <div className="bg-[#12151B] rounded-2xl rounded-bl-md px-4 py-3 border border-[#252830]">
                    <Loader2 className="w-4 h-4 animate-spin text-[#246BFD]" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-[#252830] bg-[#12151B]">
              <form
                onSubmit={(e) => { e.preventDefault(); sendMessage(input); }}
                className="flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about Najish..."
                  disabled={isLoading}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-[#050505] text-sm text-white placeholder-[#9A9CA3]/50 border border-[#252830] focus:outline-none focus:border-[#246BFD] transition-colors disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="w-10 h-10 rounded-xl bg-[#246BFD] flex items-center justify-center text-white disabled:opacity-40 hover:bg-[#4D8DFF] transition-all"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
