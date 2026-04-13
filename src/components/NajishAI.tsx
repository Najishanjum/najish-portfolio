import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, MicOff, X, Volume2, Loader2 } from "lucide-react";
import naChatbotLogo from "@/assets/na-chatbot-logo.png";

const AI_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/najish-ai`;

type Message = { role: "user" | "assistant"; content: string };

interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
  resultIndex: number;
}

export const NajishAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [response, setResponse] = useState("");
  const [status, setStatus] = useState<"idle" | "listening" | "thinking" | "speaking">("idle");
  const [messages, setMessages] = useState<Message[]>([]);

  const recognitionRef = useRef<any>(null);
  const synthRef = useRef(window.speechSynthesis);

  useEffect(() => {
    return () => {
      recognitionRef.current?.stop();
      synthRef.current.cancel();
    };
  }, []);

  const speak = useCallback((text: string) => {
    synthRef.current.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 1;

    const voices = synthRef.current.getVoices();
    const preferred = voices.find(v =>
      v.name.includes("Google") && v.lang.startsWith("en")
    ) || voices.find(v => v.lang.startsWith("en"));
    if (preferred) utterance.voice = preferred;

    utterance.onstart = () => { setIsSpeaking(true); setStatus("speaking"); };
    utterance.onend = () => { setIsSpeaking(false); setStatus("idle"); };
    utterance.onerror = () => { setIsSpeaking(false); setStatus("idle"); };

    synthRef.current.speak(utterance);
  }, []);

  const fetchAI = useCallback(async (userText: string) => {
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

      setResponse(reply);
      setMessages(prev => [...prev, { role: "assistant", content: reply }]);
      speak(reply);
    } catch {
      const err = "Sorry, I'm having trouble connecting. Please try again.";
      setResponse(err);
      speak(err);
    } finally {
      setIsProcessing(false);
    }
  }, [messages, speak]);

  const startListening = useCallback(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setResponse("Speech recognition is not supported in your browser. Please use Chrome.");
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
      setResponse("");
    };

    recognition.onresult = (e: SpeechRecognitionEvent) => {
      const result = e.results[e.resultIndex];
      const text = result[0].transcript;
      setTranscript(text);

      if (result.isFinal) {
        setIsListening(false);
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
    setResponse("");
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
    thinking: "Processing...",
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
            className="fixed inset-0 z-[60] flex items-center justify-center bg-background/80 backdrop-blur-xl"
          >
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center hover:bg-muted/50 transition-colors z-10"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>

            <div className="flex flex-col items-center gap-8 max-w-md px-6 text-center">
              {/* Logo & Title */}
              <div className="flex flex-col items-center gap-2">
                <img src={naChatbotLogo} alt="Najish AI" className="w-16 h-16 rounded-full object-cover" />
                <h2 className="text-2xl font-bold text-foreground">Najish AI</h2>
                <p className="text-xs text-muted-foreground">JARVIS-like Voice Assistant</p>
              </div>

              {/* Orb / Mic Button */}
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
                  className={`relative w-28 h-28 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl disabled:opacity-50 ${
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
                    <Loader2 className="w-10 h-10 text-white animate-spin" />
                  ) : isSpeaking ? (
                    <Volume2 className="w-10 h-10 text-white" />
                  ) : isListening ? (
                    <MicOff className="w-10 h-10 text-white" />
                  ) : (
                    <Mic className="w-10 h-10 text-white" />
                  )}
                </motion.button>
              </div>

              {/* Status */}
              <p className="text-sm text-muted-foreground">{statusText}</p>

              {/* Transcript */}
              {transcript && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-primary/10"
                >
                  <p className="text-xs text-muted-foreground mb-1">You said:</p>
                  <p className="text-sm text-foreground">{transcript}</p>
                </motion.div>
              )}

              {/* Response */}
              {response && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="w-full px-4 py-3 rounded-xl bg-cyan-500/5 border border-cyan-500/10"
                >
                  <p className="text-xs text-cyan-400 mb-1">Najish AI:</p>
                  <p className="text-sm text-foreground">{response}</p>
                </motion.div>
              )}
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
