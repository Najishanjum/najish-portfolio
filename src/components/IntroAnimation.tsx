import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import logoNA from "@/assets/logo-na.png";

interface IntroAnimationProps {
  onComplete: () => void;
}

export const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const duration = 2000;
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
        setTimeout(onComplete, 600);
      }, 300);
    }
  }, [progress, onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center"
          style={{ background: "#FAF8F3" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Accent shapes */}
          <div
            className="absolute top-16 left-16 w-20 h-20 rounded-full"
            style={{ background: "#FFD21C", border: "3px solid #090909" }}
          />
          <div
            className="absolute bottom-16 right-16 w-14 h-28 rounded-2xl"
            style={{ background: "#FF3D83", border: "3px solid #090909" }}
          />
          <div
            className="absolute top-1/3 right-24 w-10 h-10 rounded-full"
            style={{ background: "#7557F7", border: "2px solid #090909" }}
          />

          {/* Logo */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative mb-10"
          >
            {/* Offset shadow */}
            <div
              className="absolute inset-[-6px] rounded-full"
              style={{
                background: "#FFD21C",
                transform: "translate(6px, 6px)",
                border: "3px solid #090909",
                zIndex: 0,
              }}
            />
            {/* Logo circle */}
            <div
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-[4px] border-[#090909]"
              style={{ zIndex: 1 }}
            >
              <img
                src={logoNA}
                alt="NA Logo"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.4 }}
            className="text-center mb-8"
          >
            <h1
              className="font-black"
              style={{
                fontSize: "clamp(2rem, 8vw, 4rem)",
                letterSpacing: "-0.03em",
                color: "#090909",
                lineHeight: 1,
              }}
            >
              Najish <span style={{ color: "#7557F7" }}>Anjum</span>
            </h1>
            <p className="mt-2 text-sm font-semibold" style={{ color: "#5B5B5B" }}>
              AI/ML Developer · Full Stack Enthusiast
            </p>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.4 }}
            className="w-64 md:w-80 space-y-2"
          >
            {/* Bar container */}
            <div
              className="h-2 rounded-full border-[2px] border-[#090909] overflow-hidden"
              style={{ background: "#F3F0E8" }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{
                  width: `${progress}%`,
                  background: "linear-gradient(90deg, #FFD21C, #FF3D83, #7557F7)",
                  transition: "width 0.05s linear",
                }}
              />
            </div>
            {/* Percentage */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold" style={{ color: "#090909" }}>
                {Math.round(progress)}%
              </span>
              <span className="text-xs font-medium" style={{ color: "#5B5B5B" }}>
                Loading portfolio...
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
