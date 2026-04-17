import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, MicOff, X, Volume2, Loader2, ChevronDown } from "lucide-react";
import naChatbotLogo from "@/assets/na-chatbot-logo.png";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";

const AI_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/najish-ai`;

type Message = { role: "user" | "assistant"; content: string };

type VoiceMode = "ai" | "male" | "female";

interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
  resultIndex: number;
}

const VOICE_OPTIONS: { value: VoiceMode; label: string; description: string }[] = [
  { value: "ai", label: "AI Assistant", description: "Neutral, futuristic" },
  { value: "male", label: "Professional Male", description: "Formal, recruiter-focused" },
  { value: "female", label: "Friendly Female", description: "Warm, conversational" },
];

export const NajishAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [status, setStatus] = useState<"idle" | "listening" | "thinking" | "speaking">("idle");
  const [messages, setMessages] = useState<Message[]>([]);
  const [voiceMode, setVoiceMode] = useState<VoiceMode>("ai");
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);

  const recognitionRef = useRef<any>(null);
  const synthRef = useRef(window.speechSynthesis);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Load voices (async in some browsers)
  useEffect(() => {
    const loadVoices = () => {
      const voices = synthRef.current.getVoices();
      if (voices.length) setAvailableVoices(voices);
    };
    loadVoices();
    synthRef.current.onvoiceschanged = loadVoices;
    return () => {
      recognitionRef.current?.stop();
      synthRef.current.cancel();
    };
  }, []);

  // Auto-scroll to bottom on new message
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, transcript]);

  const pickVoice = useCallback(
    (mode: VoiceMode): SpeechSynthesisVoice | undefined => {
      const voices = availableVoices.length ? availableVoices : synthRef.current.getVoices();
      const en = voices.filter((v) => v.lang.startsWith("en"));

      if (mode === "female") {
        return (
          en.find((v) => /female|samantha|zira|google uk english female|karen|tessa|moira/i.test(v.name)) ||
          en.find((v) => /google/i.test(v.name)) ||
          en[0]
        );
      }
      if (mode === "male") {
        return (
          en.find((v) => /male|daniel|david|google uk english male|alex|fred|oliver/i.test(v.name)) ||
          en.find((v) => /google uk/i.test(v.name)) ||
          en[0]
        );
      }
      // ai (default) - prefer Google neutral
      return en.find((v) => /google/i.test(v.name)) || en[0];
    },
    [availableVoices]
  );

  const speak = useCallback(
    (text: string) => {
      synthRef.current.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = voiceMode === "ai" ? 1.0 : voiceMode === "male" ? 0.95 : 1.05;
      utterance.pitch = voiceMode === "female" ? 1.15 : voiceMode === "male" ? 0.85 : 1;
      utterance.volume = 1;

      const v = pickVoice(voiceMode);
      if (v) utterance.voice = v;

      utterance.onstart = () => {
        setIsSpeaking(true);
        setStatus("speaking");
      };
      utterance.onend = () => {
        setIsSpeaking(false);
        setStatus("idle");
      };
      utterance.onerror = () => {
        setIsSpeaking(false);
        setStatus("idle");
      };

      synthRef.current.speak(utterance);
    },
    [voiceMode, pickVoice]
  );

  const fetchAI = useCallback(
    async (userText: string) => {
      const userMsg: Message = { role: "user", content: userText };
      const updatedMessages = [...messages, userMsg];
      setMessages(updatedMessages);
      setIsProcessing(true);
      setStatus("thinking");

      try {
        const resp = await fetch(AI_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({ messages: updatedMessages }),
        });

        const data = await resp.json();
        const reply = data.reply || data.error || "Sorry, I couldn't process that.";

        setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
        speak(reply);
      } catch {
        const err = "Sorry, I'm having trouble connecting. Please try again.";
        setMessages((prev) => [...prev, { role: "assistant", content: err }]);
        speak(err);
      } finally {
        setIsProcessing(false);
      }
    },
    [messages, speak]
  );

  const startListening = useCallback(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Speech recognition is not supported in your browser. Please use Chrome.",
        },
      ]);
      return;
    }

    synthRef.current.cancel();

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = true;
    recognition.continuous = false;

    recognition.onstart = () => {
      setIsListening(true);
      setStatus("listening");
      setTranscript("");
    };

    recognition.onresult = (e: SpeechRecognitionEvent) => {
      const result = e.results[e.resultIndex];
      const text = result[0].transcript;
      setTranscript(text);

      if (result.isFinal) {
        setIsListening(false);
        setTranscript("");
        fetchAI(text);
      }
    };

    recognition.onerror = () => {
      setIsListening(false);
      setStatus("idle");
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;
    recognition.start();
  }, [fetchAI]);

  const stopListening = useCallback(() => {
    recognitionRef.current?.stop();
    setIsListening(false);
    setStatus("idle");
  }, []);

  const handleClose = () => {
    stopListening();
    synthRef.current.cancel();
    setIsOpen(false);
    setStatus("idle");
    setTranscript("");
  };

  const handleVoiceChange = (value: VoiceMode) => {
    setVoiceMode(value);
    synthRef.current.cancel();
    // Speak a quick confirmation in the new voice
    setTimeout(() => {
      const utter = new SpeechSynthesisUtterance("Voice updated.");
      const v = pickVoice(value);
      if (v) utter.voice = v;
      utter.rate = value === "ai" ? 1.0 : value === "male" ? 0.95 : 1.05;
      utter.pitch = value === "female" ? 1.15 : value === "male" ? 0.85 : 1;
      synthRef.current.speak(utter);
    }, 100);
  };

  const pulseColor = {
    idle: "from-cyan-400/40 to-blue-500/40",
    listening: "from-green-500/60 to-emerald-500/60",
    thinking: "from-yellow-500/60 to-amber-500/60",
    speaking: "from-cyan-400/60 to-blue-500/60",
  }[status];

  const statusText = {
    idle: 'Say "Hey Najish" or tap the mic',
    listening: "Listening...",
    thinking: "Thinking...",
    speaking: "Speaking...",
  }[status];

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[60] flex flex-col bg-background/90 backdrop-blur-xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-border/40 shrink-0">
              <div className="flex items-center gap-3">
                <img
                  src={naChatbotLogo}
                  alt="Najish AI"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h2 className="text-base font-bold text-foreground leading-tight">Najish AI</h2>
                  <p className="text-[10px] text-muted-foreground">JARVIS-like Voice Assistant</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {/* Voice Selector */}
                <Select value={voiceMode} onValueChange={(v) => handleVoiceChange(v as VoiceMode)}>
                  <SelectTrigger className="h-9 w-[140px] sm:w-[180px] text-xs border-cyan-500/20 bg-cyan-500/5">
                    <Volume2 className="w-3.5 h-3.5 text-cyan-400 mr-1" />
                    <SelectValue placeholder="Voice" />
                  </SelectTrigger>
                  <SelectContent>
                    {VOICE_OPTIONS.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        <div className="flex flex-col">
                          <span className="text-sm font-medium">{opt.label}</span>
                          <span className="text-[10px] text-muted-foreground">
                            {opt.description}
                          </span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <button
                  onClick={handleClose}
                  className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-muted/50 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>
            </div>

            {/* Conversation Scroll Area */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-4 sm:px-6 py-6 scroll-smooth"
            >
              <div className="max-w-2xl mx-auto flex flex-col gap-4">
                {messages.length === 0 && (
                  <div className="text-center py-8">
                    <p className="text-sm text-muted-foreground">
                      Start a conversation by tapping the mic below.
                    </p>
                    <p className="text-xs text-muted-foreground/70 mt-2">
                      Try: "Tell me about Najish" or "What's his best project?"
                    </p>
                  </div>
                )}

                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] px-4 py-3 rounded-2xl ${
                        msg.role === "user"
                          ? "bg-primary/10 border border-primary/20 rounded-br-sm"
                          : "bg-cyan-500/5 border border-cyan-500/20 rounded-bl-sm"
                      }`}
                    >
                      <p
                        className={`text-[10px] font-semibold mb-1 ${
                          msg.role === "user" ? "text-primary" : "text-cyan-400"
                        }`}
                      >
                        {msg.role === "user" ? "You" : "Najish AI"}
                      </p>
                      <p className="text-sm text-foreground whitespace-pre-wrap leading-relaxed">
                        {msg.content}
                      </p>
                    </div>
                  </motion.div>
                ))}

                {/* Live transcript while listening */}
                {transcript && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-end"
                  >
                    <div className="max-w-[85%] px-4 py-3 rounded-2xl bg-muted/30 border border-dashed border-primary/30 rounded-br-sm">
                      <p className="text-[10px] font-semibold mb-1 text-muted-foreground">
                        You (speaking...)
                      </p>
                      <p className="text-sm text-foreground italic">{transcript}</p>
                    </div>
                  </motion.div>
                )}

                {/* Thinking indicator */}
                {isProcessing && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="px-4 py-3 rounded-2xl bg-cyan-500/5 border border-cyan-500/20 rounded-bl-sm flex items-center gap-2">
                      <Loader2 className="w-4 h-4 text-cyan-400 animate-spin" />
                      <p className="text-sm text-muted-foreground">Thinking...</p>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Mic Control Footer */}
            <div className="shrink-0 px-4 sm:px-6 py-6 border-t border-border/40 bg-background/50">
              <div className="flex flex-col items-center gap-3">
                <div className="relative">
                  {(isListening || isSpeaking) && (
                    <>
                      <motion.div
                        animate={{ scale: [1, 1.5], opacity: [0.4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className={`absolute inset-0 rounded-full bg-gradient-to-br ${pulseColor}`}
                      />
                      <motion.div
                        animate={{ scale: [1, 1.8], opacity: [0.3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                        className={`absolute inset-0 rounded-full bg-gradient-to-br ${pulseColor}`}
                      />
                    </>
                  )}

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={isListening ? stopListening : startListening}
                    disabled={isProcessing || isSpeaking}
                    className={`relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl disabled:opacity-50 ${
                      isListening
                        ? "bg-gradient-to-br from-green-500 to-emerald-600 shadow-green-500/30"
                        : isSpeaking
                          ? "bg-gradient-to-br from-cyan-400 to-blue-600 shadow-cyan-500/30"
                          : isProcessing
                            ? "bg-gradient-to-br from-yellow-500 to-amber-600 shadow-yellow-500/30"
                            : "bg-gradient-to-br from-cyan-400 to-blue-600 shadow-cyan-500/30 hover:shadow-cyan-500/50"
                    }`}
                  >
                    {isProcessing ? (
                      <Loader2 className="w-8 h-8 text-white animate-spin" />
                    ) : isSpeaking ? (
                      <Volume2 className="w-8 h-8 text-white" />
                    ) : isListening ? (
                      <MicOff className="w-8 h-8 text-white" />
                    ) : (
                      <Mic className="w-8 h-8 text-white" />
                    )}
                  </motion.button>
                </div>

                <p className="text-xs text-muted-foreground">{statusText}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger button */}
      <button
        onClick={() => setIsOpen(true)}
        className="w-full px-3 py-2 text-xs rounded-full border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-400 hover:from-cyan-500/20 hover:to-blue-500/20 transition-all flex items-center justify-center gap-2 font-medium"
      >
        <img src={naChatbotLogo} alt="" className="w-4 h-4 rounded-full" />
        Talk to Najish AI
      </button>
    </>
  );
};
