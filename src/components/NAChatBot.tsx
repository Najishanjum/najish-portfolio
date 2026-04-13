import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { NajishAI } from "./NajishAI";

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

    // flush
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
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-24 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/30 border-2 border-primary/30"
          >
            <MessageCircle className="w-6 h-6 text-primary-foreground" />
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full border-2 border-primary animate-ping opacity-30" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] h-[550px] max-h-[calc(100vh-4rem)] flex flex-col rounded-2xl overflow-hidden border border-primary/20 shadow-2xl shadow-primary/10 bg-card/95 backdrop-blur-xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-primary/15 to-secondary/15 border-b border-primary/10">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Bot className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-card" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground">NA ChatBot</h3>
                  <p className="text-[10px] text-muted-foreground">Najish's AI Assistant • Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-muted/50 transition-colors"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin">
              {messages.length === 0 && (
                <div className="text-center pt-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <Bot className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-foreground font-semibold mb-1">Hey there! 👋</h4>
                  <p className="text-xs text-muted-foreground mb-5">
                    I'm NA ChatBot. Ask me anything about Najish's skills, projects, or experience!
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {QUICK_PROMPTS.map((q) => (
                      <button
                        key={q}
                        onClick={() => sendMessage(q)}
                        className="px-3 py-1.5 text-xs rounded-full border border-primary/20 bg-primary/5 text-primary hover:bg-primary/10 transition-colors"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                  <div className="mt-3">
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
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-secondary flex-shrink-0 flex items-center justify-center mt-0.5">
                      <Bot className="w-3.5 h-3.5 text-primary-foreground" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-md"
                        : "bg-muted/50 text-foreground rounded-bl-md border border-primary/5"
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
                    <div className="w-7 h-7 rounded-full bg-muted flex-shrink-0 flex items-center justify-center mt-0.5">
                      <User className="w-3.5 h-3.5 text-muted-foreground" />
                    </div>
                  )}
                </div>
              ))}

              {isLoading && messages[messages.length - 1]?.role !== "assistant" && (
                <div className="flex gap-2 items-start">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-secondary flex-shrink-0 flex items-center justify-center">
                    <Bot className="w-3.5 h-3.5 text-primary-foreground" />
                  </div>
                  <div className="bg-muted/50 rounded-2xl rounded-bl-md px-4 py-3 border border-primary/5">
                    <Loader2 className="w-4 h-4 animate-spin text-primary" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-primary/10 bg-card/80">
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
                  className="flex-1 px-4 py-2.5 rounded-xl bg-muted/50 text-sm text-foreground placeholder:text-muted-foreground border border-primary/10 focus:outline-none focus:border-primary/30 transition-colors disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-primary-foreground disabled:opacity-30 hover:shadow-lg hover:shadow-primary/20 transition-all"
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
