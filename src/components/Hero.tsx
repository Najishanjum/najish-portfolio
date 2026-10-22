import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Clock, CalendarDays, Timer, CloudSun, RefreshCw, Volume2, VolumeX, Sparkles } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";

const PORTFOLIO_LAST_UPDATED = "2026-04-05";

function getLastUpdatedText() {
  const updated = new Date(PORTFOLIO_LAST_UPDATED);
  const now = new Date();
  const diffMs = now.getTime() - updated.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (diffDays <= 0) return "today";
  if (diffDays === 1) return "yesterday";
  return `${diffDays}d ago`;
}

function formatTime(date: Date) {
  return date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });
}

function formatDate(date: Date) {
  return date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
}

interface HeroProps {
  onReplayIntro?: () => void;
}

export const Hero = ({ onReplayIntro }: HeroProps) => {
  const [now, setNow] = useState(new Date());
  const [seconds, setSeconds] = useState(0);
  const [weather, setWeather] = useState<{ temp: number; condition: string; icon: string } | null>(null);
  const [locationName, setLocationName] = useState("");
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const { latitude, longitude } = pos.coords;
          const { data, error } = await supabase.functions.invoke("weather", {
            body: { lat: latitude, lon: longitude },
          });
          if (error || !data || typeof data.temp !== "number") return;
          setWeather({ temp: data.temp, condition: data.condition, icon: data.icon });
          setLocationName(data.name);
        } catch {
          // silent fallback
        }
      },
      () => {
        // denied
      }
    );
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const [hasPlayedVideo, setHasPlayedVideo] = useState(() => {
    return typeof window !== "undefined" && sessionStorage.getItem("na_hero_video_played") === "true";
  });

  useEffect(() => {
    if (hasPlayedVideo && videoRef.current) {
      videoRef.current.pause();
    }
  }, [hasPlayedVideo]);

  const handleVideoEnded = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    try {
      sessionStorage.setItem("na_hero_video_played", "true");
    } catch {
      // ignore storage errors
    }
    setHasPlayedVideo(true);
  };

  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const timeSpentText = mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;

  // Animation variants for headline kinetic reveal on opening
  const headlineWords = [
    { text: "I", highlight: false },
    { text: "BUILD", highlight: false },
    { text: "THE", highlight: false },
    { text: "FUTURE", highlight: true },
    { text: "WITH", highlight: false },
    { text: "AI", highlight: true },
    { text: "&", highlight: false },
    { text: "CODE.", highlight: false },
  ];

  return (
    <section className="relative min-h-screen w-full bg-[#050505] text-white overflow-hidden flex flex-col justify-between pt-28 pb-12 sm:pt-32 sm:pb-16">
      {/* Background Subtle Video + Monochrome Texture - Plays once only */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {!hasPlayedVideo && (
          <video
            ref={videoRef}
            autoPlay
            muted={isMuted}
            playsInline
            preload="auto"
            onEnded={handleVideoEnded}
            aria-hidden="true"
            className="w-full h-full object-cover opacity-[0.14] scale-105 filter grayscale contrast-125"
          >
            <source src="/videos/intro2.mp4" type="video/mp4" />
            <source src="/videos/into.mp4" type="video/mp4" />
            <source src="/videos/intro.mp4" type="video/mp4" />
          </video>
        )}
        {/* Radial Dark Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]" />
        <div className="absolute -top-40 right-[-10%] w-[600px] h-[600px] bg-[#246BFD]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-40 left-[-10%] w-[500px] h-[500px] bg-[#246BFD]/8 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Decorative Technical Crosshairs & Subtle Lines */}
      <div className="absolute top-28 left-6 sm:left-12 font-mono text-[11px] text-[#9A9CA3]/40 select-none hidden md:block">
        + 19.0760° N, 72.8777° E
      </div>
      <div className="absolute top-28 right-6 sm:right-12 font-mono text-[11px] text-[#9A9CA3]/40 select-none hidden md:block">
        [ SYS: ONLINE / 2026 ]
      </div>

      {/* Audio Ambient Control */}
      {!hasPlayedVideo && (
        <button
          onClick={toggleMute}
          type="button"
          className="absolute top-24 right-4 sm:top-28 sm:right-8 z-30 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0B0D10]/80 border border-[#252830] font-mono text-xs text-[#9A9CA3] hover:text-white hover:border-[#246BFD] backdrop-blur-md transition-colors"
          title={isMuted ? "Unmute Ambient Intro" : "Mute Intro"}
        >
          {isMuted ? (
            <>
              <VolumeX className="w-3.5 h-3.5 text-[#9A9CA3]" />
              <span className="hidden sm:inline">SOUND OFF</span>
            </>
          ) : (
            <>
              <Volume2 className="w-3.5 h-3.5 text-[#246BFD]" />
              <span className="text-[#246BFD] font-bold">SOUND ON</span>
            </>
          )}
        </button>
      )}

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        {/* Eyebrow Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-3 mb-6"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#246BFD]/30 bg-[#246BFD]/10 font-mono text-xs font-semibold tracking-wider text-[#4D8DFF] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#246BFD] animate-ping" />
            [ NAJISH ANJUM — PORTFOLIO '26 ]
          </span>
        </motion.div>

        {/* Oversized Ultra-Bold Condensed Headline with Kinetic Opening Reveal Animation */}
        <div className="w-full">
          <h1 className="editorial-hero-title text-white tracking-[-0.03em] select-none flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-1 sm:gap-y-2">
            {headlineWords.map((item, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.6,
                  delay: 0.1 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`inline-block ${item.highlight ? "text-[#246BFD]" : "text-white"}`}
              >
                {item.text}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* Narrative & Profile Overview Spread */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end"
        >
          {/* Supporting Statement & Bio */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-base sm:text-xl text-[#F7F7F7] font-sans font-normal leading-relaxed max-w-2xl">
              Hello, I'm <strong className="text-white font-bold">Najish Anjum</strong> — a B.Tech Computer Science student specializing in Artificial Intelligence &amp; Machine Learning, Team Lead at <span className="text-[#4D8DFF] font-medium">Team ILM Tech</span>, and <span className="text-[#4D8DFF] font-medium">Stellar India Ambassador</span>.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="editorial-btn-primary group"
              >
                <span>EXPLORE PROJECTS</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="editorial-btn-secondary group"
              >
                <span>LET'S CONNECT</span>
                <ArrowUpRight className="w-4 h-4 text-[#9A9CA3] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="/resume/Najish_Anjum_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="px-4 py-3 font-mono text-xs font-semibold tracking-wider text-[#9A9CA3] hover:text-white transition-colors underline underline-offset-4"
              >
                DOWNLOAD CV
              </a>
            </div>
          </div>

          {/* Quick Technical Telemetry Card */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="p-5 rounded-2xl bg-[#0B0D10] border border-[#252830] backdrop-blur-md">
              <div className="flex items-center justify-between pb-3 border-b border-[#252830]/80">
                <span className="font-mono text-xs uppercase tracking-widest text-[#246BFD] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#246BFD] inline-block" />
                  LIVE TELEMETRY
                </span>
                <span className="font-mono text-[11px] text-[#9A9CA3]">
                  INDIA
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#F7F7F7]">
                  <Clock className="w-3.5 h-3.5 text-[#246BFD]" />
                  <span>{formatTime(now)}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#F7F7F7]">
                  <CalendarDays className="w-3.5 h-3.5 text-[#246BFD]" />
                  <span>{formatDate(now)}</span>
                </div>
                {weather && (
                  <div className="flex items-center gap-2 text-xs font-mono text-[#F7F7F7] col-span-2">
                    <CloudSun className="w-3.5 h-3.5 text-[#4D8DFF]" />
                    <span>{weather.temp}°C {weather.condition}{locationName ? ` · ${locationName}` : ""}</span>
                  </div>
                )}
                <div className="flex items-center gap-2 text-xs font-mono text-[#9A9CA3]">
                  <Timer className="w-3.5 h-3.5 text-[#246BFD]" />
                  <span>{timeSpentText} session</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#9A9CA3]">
                  <RefreshCw className="w-3.5 h-3.5 text-[#246BFD]" />
                  <span>Upd: {getLastUpdatedText()}</span>
                </div>
              </div>
            </div>

            {/* Verified Credentials Monospace Banner */}
            <div className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#0B0D10]/60 border border-[#252830] font-mono text-[11px] text-[#9A9CA3]">
              <span className="text-[#F7F7F7]">ROLES:</span>
              <span>AI/ML · FULL-STACK · WEB3 · OPEN SOURCE</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Hero Bottom Ticker & Metrics Strip */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12 pt-6 border-t border-[#252830]/80">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="border-l-2 border-[#246BFD] pl-4">
            <div className="font-display text-3xl sm:text-4xl text-white tracking-tight">12+</div>
            <div className="font-mono text-xs uppercase tracking-wider text-[#9A9CA3] mt-0.5">
              Hackathons &amp; Sprints
            </div>
          </div>

          <div className="border-l-2 border-[#246BFD] pl-4">
            <div className="font-display text-3xl sm:text-4xl text-white tracking-tight">10+</div>
            <div className="font-mono text-xs uppercase tracking-wider text-[#9A9CA3] mt-0.5">
              Shipped Projects
            </div>
          </div>

          <div className="border-l-2 border-[#246BFD] pl-4">
            <div className="font-display text-3xl sm:text-4xl text-white tracking-tight">1.2K+</div>
            <div className="font-mono text-xs uppercase tracking-wider text-[#9A9CA3] mt-0.5">
              Open-Source Commits
            </div>
          </div>

          <div className="border-l-2 border-[#246BFD] pl-4">
            <div className="font-display text-3xl sm:text-4xl text-white tracking-tight">STELLAR</div>
            <div className="font-mono text-xs uppercase tracking-wider text-[#9A9CA3] mt-0.5">
              India Ambassador
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
