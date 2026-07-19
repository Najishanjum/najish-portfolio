import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "na_voice_intro_played_v1";

export const VoiceIntro = () => {
  const [muted, setMuted] = useState(false);
  const [visible, setVisible] = useState(false);
  const triggeredRef = useRef(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const utterancesRef = useRef<SpeechSynthesisUtterance[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem(STORAGE_KEY)) return;
    if (!("speechSynthesis" in window)) return;

    const pickFemaleVoice = (): SpeechSynthesisVoice | null => {
      const voices = window.speechSynthesis.getVoices();
      if (!voices.length) return null;
      const preferred = [
        "Google UK English Female",
        "Samantha",
        "Google US English",
        "Microsoft Zira",
        "Microsoft Aria",
        "Karen",
        "Victoria",
      ];
      for (const name of preferred) {
        const v = voices.find((x) => x.name === name);
        if (v) return v;
      }
      const female = voices.find((v) => /female|zira|samantha|aria|karen|victoria|susan|linda/i.test(v.name));
      return female || voices.find((v) => /en[-_]/i.test(v.lang)) || voices[0];
    };

    const speak = (text: string, voice: SpeechSynthesisVoice | null, delay = 0) => {
      const u = new SpeechSynthesisUtterance(text);
      u.rate = 0.9;
      u.pitch = 1.1;
      u.volume = 1;
      if (voice) u.voice = voice;
      utterancesRef.current.push(u);
      setTimeout(() => window.speechSynthesis.speak(u), delay);
    };

    const trigger = () => {
      if (triggeredRef.current) return;
      triggeredRef.current = true;
      localStorage.setItem(STORAGE_KEY, "1");
      cleanup();

      const startSpeech = () => {
        const voice = pickFemaleVoice();

        // Ambient background tone via WebAudio (soft pad)
        try {
          const AC = (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext);
          const ctx = new AC();
          const gain = ctx.createGain();
          gain.gain.value = 0.12;
          const osc1 = ctx.createOscillator();
          osc1.type = "sine";
          osc1.frequency.value = 220;
          const osc2 = ctx.createOscillator();
          osc2.type = "sine";
          osc2.frequency.value = 277;
          const filter = ctx.createBiquadFilter();
          filter.type = "lowpass";
          filter.frequency.value = 600;
          osc1.connect(filter);
          osc2.connect(filter);
          filter.connect(gain);
          gain.connect(ctx.destination);
          osc1.start();
          osc2.start();
          const stopAt = ctx.currentTime + 10;
          gain.gain.setValueAtTime(0.12, stopAt - 1);
          gain.gain.linearRampToValueAtTime(0, stopAt);
          osc1.stop(stopAt);
          osc2.stop(stopAt);
          audioRef.current = { pause: () => { try { ctx.close(); } catch { /* noop */ } } } as unknown as HTMLAudioElement;
        } catch { /* ambient optional */ }

        speak("Gm gm everyone… this is Najish's portfolio. Feel free to explore my work, skills, and projects.", voice, 0);
        speak("Enjoy your experience.", voice, 6500);

        setVisible(true);
      };

      if (window.speechSynthesis.getVoices().length === 0) {
        const handler = () => {
          window.speechSynthesis.removeEventListener("voiceschanged", handler);
          startSpeech();
        };
        window.speechSynthesis.addEventListener("voiceschanged", handler);
        setTimeout(startSpeech, 400);
      } else {
        startSpeech();
      }
    };

    const cleanup = () => {
      window.removeEventListener("click", trigger);
      window.removeEventListener("scroll", trigger);
      window.removeEventListener("keydown", trigger);
    };

    window.addEventListener("click", trigger, { once: true });
    window.addEventListener("scroll", trigger, { once: true, passive: true });
    window.addEventListener("keydown", trigger, { once: true });

    return () => {
      cleanup();
      try { window.speechSynthesis.cancel(); } catch { /* noop */ }
      try { audioRef.current?.pause(); } catch { /* noop */ }
    };
  }, []);

  const toggleMute = () => {
    setMuted((m) => {
      const next = !m;
      if (next) {
        try { window.speechSynthesis.cancel(); } catch { /* noop */ }
        try { audioRef.current?.pause(); } catch { /* noop */ }
      }
      return next;
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          onClick={toggleMute}
          aria-label={muted ? "Unmute intro" : "Mute intro"}
          className="fixed bottom-24 right-6 z-40 p-3 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/40 backdrop-blur-md text-primary shadow-lg shadow-primary/20 transition-all"
        >
          {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </motion.button>
      )}
    </AnimatePresence>
  );
};
