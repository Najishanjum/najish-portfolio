import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface IntroAnimationProps {
  onComplete: () => void;
}

export const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const duration = 1600;
    const interval = 20;
    const increment = (100 / duration) * interval;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return Math.min(prev + increment, 100);
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        setIsComplete(true);
        setTimeout(onComplete, 400);
      }, 250);
    }
  }, [progress, onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Brand Mark */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-8"
          >
            <div className="font-display text-5xl sm:text-7xl tracking-tight text-white mb-2">
              &lt;NA <span className="text-[#246BFD]">/&gt;</span>
            </div>
            <p className="font-mono text-xs uppercase tracking-widest text-[#9A9CA3]">
              NAJISH ANJUM &middot; PORTFOLIO 2026
            </p>
          </motion.div>

          {/* Progress Bar Container */}
          <div className="w-64 sm:w-80 space-y-2">
            <div className="h-1 w-full bg-[#12151B] rounded-full overflow-hidden border border-[#252830]">
              <motion.div
                className="h-full bg-[#246BFD]"
                style={{
                  width: `${progress}%`,
                  transition: "width 0.05s linear",
                }}
              />
            </div>

            <div className="flex items-center justify-between font-mono text-[11px] text-[#9A9CA3]">
              <span className="text-[#246BFD] font-bold">{Math.round(progress)}%</span>
              <span>INITIALIZING SYSTEM...</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
