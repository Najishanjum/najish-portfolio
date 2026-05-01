import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, RotateCcw, RotateCw, Ticket } from "lucide-react";

export interface BadgePass {
  id: number;
  title: string;
  issuer: string;
  description: string;
  image: string;
}

interface Props {
  passes: BadgePass[];
  onCardClick?: (pass: BadgePass) => void;
}

const SWIPE_THRESHOLD = 60;
const AUTO_SLIDE_MS = 3000;

export const BadgesCarousel3D = ({ passes, onCardClick }: Props) => {
  const [active, setActive] = useState(0);
  const [history, setHistory] = useState<number[]>([0]);
  const [future, setFuture] = useState<number[]>([]);
  const [isPaused, setIsPaused] = useState(false);
  const total = passes.length;

  const goTo = useCallback(
    (idx: number, fromUserAction = true) => {
      const next = ((idx % total) + total) % total;
      setActive((prev) => {
        if (next === prev) return prev;
        if (fromUserAction) {
          setHistory((h) => [...h, next].slice(-25));
          setFuture([]);
        }
        return next;
      });
    },
    [total]
  );

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  const undo = () => {
    setHistory((h) => {
      if (h.length < 2) return h;
      const newHist = h.slice(0, -1);
      const target = newHist[newHist.length - 1];
      setFuture((f) => [h[h.length - 1], ...f]);
      setActive(target);
      return newHist;
    });
  };

  const redo = () => {
    setFuture((f) => {
      if (f.length === 0) return f;
      const [target, ...rest] = f;
      setHistory((h) => [...h, target]);
      setActive(target);
      return rest;
    });
  };

  // Auto-slide
  useEffect(() => {
    if (isPaused) return;
    const t = setInterval(() => {
      goTo(active + 1, false);
    }, AUTO_SLIDE_MS);
    return () => clearInterval(t);
  }, [active, isPaused, goTo]);

  // Drag/swipe
  const dragStart = useRef<number | null>(null);
  const onPointerDown = (e: React.PointerEvent) => {
    dragStart.current = e.clientX;
    setIsPaused(true);
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (dragStart.current == null) return;
    const dx = e.clientX - dragStart.current;
    if (dx > SWIPE_THRESHOLD) prev();
    else if (dx < -SWIPE_THRESHOLD) next();
    dragStart.current = null;
  };

  // Keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const getRelative = (i: number) => {
    let d = i - active;
    if (d > total / 2) d -= total;
    if (d < -total / 2) d += total;
    return d;
  };

  const activePass = passes[active];

  return (
    <section
      className="relative py-20 px-4 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at center, hsl(40 60% 12% / 0.6) 0%, hsl(220 25% 6%) 70%)",
      }}
    >
      {/* Decorative golden glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, #F5D7A133 0%, transparent 55%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Ticket className="w-7 h-7" style={{ color: "#F5D7A1" }} />
            <h2
              className="text-4xl md:text-5xl font-bold tracking-tight"
              style={{
                background:
                  "linear-gradient(135deg, #F5D7A1 0%, #FFF1C9 50%, #C9A24E 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Badges & Passes
            </h2>
          </div>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            Event passes, program acceptances, and special badges I've earned
          </p>
        </motion.div>

        {/* Carousel stage */}
        <div
          className="relative h-[460px] md:h-[520px] flex items-center justify-center select-none"
          style={{ perspective: "1600px" }}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerLeave={() => (dragStart.current = null)}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {passes.map((pass, i) => {
            const rel = getRelative(i);
            const abs = Math.abs(rel);
            if (abs > 2) return null;

            const isActive = rel === 0;
            const x = rel * 220;
            const rotateY = rel * -28;
            const scale = isActive ? 1.1 : 1 - abs * 0.12;
            const z = -abs * 200;
            const blur = isActive ? 0 : abs * 3;
            const opacity = isActive ? 1 : 1 - abs * 0.35;

            return (
              <motion.div
                key={pass.id}
                className="absolute cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
                animate={{
                  x,
                  scale,
                  rotateY,
                  z,
                  opacity,
                  filter: `blur(${blur}px)`,
                  zIndex: 10 - abs,
                }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                whileHover={
                  isActive
                    ? { y: -10, scale: 1.13 }
                    : { scale: scale + 0.03 }
                }
                onClick={() => {
                  if (isActive) onCardClick?.(pass);
                  else goTo(i);
                }}
              >
                <motion.div
                  animate={isActive ? { y: [0, -8, 0] } : { y: 0 }}
                  transition={
                    isActive
                      ? { duration: 4, repeat: Infinity, ease: "easeInOut" }
                      : { duration: 0.3 }
                  }
                  className="relative w-[280px] md:w-[340px] h-[400px] md:h-[460px] rounded-[24px] overflow-hidden group"
                  style={{
                    background:
                      "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(245,215,161,0.04))",
                    border: "1px solid rgba(245,215,161,0.35)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    boxShadow: isActive
                      ? "0 30px 80px -20px rgba(245,215,161,0.45), 0 0 60px rgba(245,215,161,0.2), inset 0 1px 0 rgba(255,255,255,0.15)"
                      : "0 20px 60px -20px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)",
                  }}
                >
                  {/* Image */}
                  <div className="relative h-[60%] overflow-hidden">
                    <img
                      src={pass.image}
                      alt={pass.title}
                      draggable={false}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gold to black gradient overlay */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(245,215,161,0.15) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.85) 100%)",
                      }}
                    />
                    {/* Glow ring on active */}
                    {isActive && (
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          boxShadow:
                            "inset 0 0 40px rgba(245,215,161,0.3)",
                        }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                    <h3
                      className="font-bold text-lg md:text-xl mb-1 leading-tight"
                      style={{ color: "#F5D7A1" }}
                    >
                      {pass.title}
                    </h3>
                    <p className="text-xs md:text-sm text-white/70 mb-3 font-medium">
                      {pass.issuer}
                    </p>

                    {/* Description reveal */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4 }}
                          className="text-xs md:text-sm text-white/80 leading-relaxed line-clamp-3"
                        >
                          {pass.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Top shine */}
                  <div
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(245,215,161,0.8), transparent)",
                    }}
                  />
                </motion.div>
              </motion.div>
            );
          })}

          {/* Arrows */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
            style={{
              background: "rgba(255,255,255,0.06)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(245,215,161,0.4)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
              color: "#F5D7A1",
            }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
            style={{
              background: "rgba(255,255,255,0.06)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(245,215,161,0.4)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
              color: "#F5D7A1",
            }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Bottom controls */}
        <div className="mt-8 flex flex-col items-center gap-5">
          {/* Dots */}
          <div className="flex items-center gap-2">
            {passes.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="transition-all rounded-full"
                style={{
                  width: i === active ? 28 : 8,
                  height: 8,
                  background:
                    i === active
                      ? "linear-gradient(90deg, #F5D7A1, #C9A24E)"
                      : "rgba(245,215,161,0.25)",
                  boxShadow:
                    i === active ? "0 0 12px rgba(245,215,161,0.6)" : "none",
                }}
              />
            ))}
          </div>

          {/* Undo / Redo */}
          <div className="flex items-center gap-3">
            <button
              onClick={undo}
              disabled={history.length < 2}
              aria-label="Undo"
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
              style={{
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(245,215,161,0.3)",
                color: "#F5D7A1",
              }}
            >
              <RotateCcw className="w-5 h-5" />
            </button>
            <button
              onClick={redo}
              disabled={future.length === 0}
              aria-label="Redo"
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
              style={{
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(245,215,161,0.3)",
                color: "#F5D7A1",
              }}
            >
              <RotateCw className="w-5 h-5" />
            </button>
          </div>

          {/* Active title (mobile assist) */}
          <p className="text-xs text-white/50 font-mono">
            {active + 1} / {total} — drag, swipe or use arrows
          </p>
        </div>
      </div>
    </section>
  );
};
