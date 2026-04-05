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
          className="fixed bottom-6 right-6 z-50 group cursor-default"
        >
          <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-card/80 backdrop-blur-xl border border-primary/20 shadow-lg shadow-primary/5 transition-all duration-300 group-hover:scale-105 group-hover:shadow-primary/20 group-hover:border-primary/40">
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Eye className="w-4 h-4 md:w-5 md:h-5 text-primary" />
            </motion.div>
            <span className="font-mono text-sm md:text-base font-semibold text-foreground">
              {count.toLocaleString()}
            </span>
            <span className="font-mono text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider">
              views
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
