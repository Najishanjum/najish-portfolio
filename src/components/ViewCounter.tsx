import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye } from "lucide-react";

const STORAGE_KEY = "portfolio_view_counted";
const COUNT_KEY = "portfolio_view_count";

function getStoredCount(): number {
  try {
    const stored = localStorage.getItem(COUNT_KEY);
    return stored ? parseInt(stored, 10) : 1042;
  } catch {
    return 1042;
  }
}

function incrementCount(): number {
  const current = getStoredCount();
  const hasVisited = sessionStorage.getItem(STORAGE_KEY);
  if (!hasVisited) {
    const newCount = current + 1;
    localStorage.setItem(COUNT_KEY, String(newCount));
    sessionStorage.setItem(STORAGE_KEY, "true");
    return newCount;
  }
  return current;
}

export const ViewCounter = () => {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const total = incrementCount();
    setCount(total);
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-6 left-6 z-40 group cursor-default"
        >
          <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-[#0B0D10]/90 backdrop-blur-md border border-[#252830] shadow-lg transition-all duration-300 hover:border-[#246BFD]/50">
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Eye className="w-3.5 h-3.5 text-[#246BFD]" />
            </motion.div>
            <span className="font-mono text-xs font-semibold text-white">
              {count.toLocaleString()}
            </span>
            <span className="font-mono text-[10px] text-[#9A9CA3] uppercase tracking-wider">
              VIEWS
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
