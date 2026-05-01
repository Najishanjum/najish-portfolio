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

// White / silver palette
const ACCENT = "#FFFFFF";
const ACCENT_SOFT = "#E8ECF2";
const ACCENT_DIM = "#B8BFCC";

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

  useEffect(() => {
    if (isPaused) return;
    const t = setInterval(() => {
      goTo(active + 1, false);
    }, AUTO_SLIDE_MS);
    return () => clearInterval(t);
  }, [active, isPaused, goTo]);

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

  return (
    <section
      className="relative py-20 px-4 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at center, hsl(220 20% 14% / 0.7) 0%, hsl(220 25% 6%) 70%)",
      }}
    >
      {/* Decorative white glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, rgba(255,255,255,0.15) 0%, transparent 55%)",
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
            <Ticket className="w-7 h-7" style={{ color: ACCENT }} />
            <h2
              className="text-4xl md:text-5xl font-bold tracking-tight"
              style={{
                background:
                  "linear-gradient(135deg, #FFFFFF 0%, #E8ECF2 50%, #B8BFCC 100%)",
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

        {/* Carousel stage — taller for full pass visibility */}
        <div
          className="relative h-[640px] md:h-[720px] flex items-center justify-center select-none"
          style={{ perspective: "1800px" }}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerLeave={() => (dragStart.current = null)}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {passes.map((pass, i) => {
            const rel = getRelative(i);
            const abs = Math.abs(rel);
            // Show more side cards so all are visible
            if (abs > 3) return null;

            const isActive = rel === 0;
            const x = rel * 240;
            const rotateY = rel * -22;
            const scale = isActive ? 1.05 : 1 - abs * 0.1;
            const z = -abs * 220;
            const blur = isActive ? 0 : abs * 2;
            const opacity = isActive ? 1 : Math.max(0.35, 1 - abs * 0.25);

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
                  zIndex: 20 - abs,
                }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                whileHover={
                  isActive
                    ? { y: -10, scale: 1.08 }
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
                  className="relative w-[300px] md:w-[360px] h-[560px] md:h-[640px] rounded-[24px] overflow-hidden group flex flex-col"
                  style={{
                    background:
                      "linear-gradient(145deg, rgba(255,255,255,0.10), rgba(255,255,255,0.03))",
                    border: "1px solid rgba(255,255,255,0.28)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    boxShadow: isActive
                      ? "0 30px 80px -20px rgba(255,255,255,0.35), 0 0 60px rgba(255,255,255,0.15), inset 0 1px 0 rgba(255,255,255,0.2)"
                      : "0 20px 60px -20px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1)",
                  }}
                >
                  {/* Image — full visibility, no crop */}
                  <div
                    className="relative w-full flex-1 flex items-center justify-center p-4"
                    style={{
                      background:
                        "radial-gradient(ellipse at center, rgba(255,255,255,0.06), rgba(0,0,0,0.4))",
                    }}
                  >
                    <img
                      src={pass.image}
                      alt={pass.title}
                      draggable={false}
                      className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg transition-transform duration-700 group-hover:scale-105"
                      style={{
                        filter: isActive
                          ? "drop-shadow(0 8px 24px rgba(255,255,255,0.15))"
                          : "none",
                      }}
                    />
                    {isActive && (
                      <div
                        className="absolute inset-0 pointer-events-none rounded-[24px]"
                        style={{
                          boxShadow:
                            "inset 0 0 50px rgba(255,255,255,0.12)",
                        }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div
                    className="p-4 md:p-5 border-t"
                    style={{ borderColor: "rgba(255,255,255,0.12)" }}
                  >
                    <h3
                      className="font-bold text-base md:text-lg mb-1 leading-tight"
                      style={{ color: ACCENT }}
                    >
                      {pass.title}
                    </h3>
                    <p
                      className="text-xs md:text-sm mb-2 font-medium"
                      style={{ color: ACCENT_DIM }}
                    >
                      {pass.issuer}
                    </p>

                    <AnimatePresence>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4 }}
                          className="text-xs md:text-sm text-white/75 leading-relaxed line-clamp-2"
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
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent)",
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
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.35)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
              color: ACCENT,
            }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
            style={{
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.35)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
              color: ACCENT,
            }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Bottom controls */}
        <div className="mt-8 flex flex-col items-center gap-5">
          <div className="flex items-center gap-2 flex-wrap justify-center">
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
                      ? "linear-gradient(90deg, #FFFFFF, #B8BFCC)"
                      : "rgba(255,255,255,0.25)",
                  boxShadow:
                    i === active ? "0 0 12px rgba(255,255,255,0.5)" : "none",
                }}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={undo}
              disabled={history.length < 2}
              aria-label="Undo"
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
              style={{
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.25)",
                color: ACCENT,
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
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.25)",
                color: ACCENT,
              }}
            >
              <RotateCw className="w-5 h-5" />
            </button>
          </div>

          <p className="text-xs text-white/50 font-mono">
            {active + 1} / {total} — drag, swipe or use arrows
          </p>
        </div>
      </div>
    </section>
  );
};
