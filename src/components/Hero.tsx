import { motion } from "framer-motion";
import { Download, Terminal, Clock, CalendarDays, Timer, CloudSun, RefreshCw, Send, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";

const roles = [
  "Tech Innovator",
  "AI/ML Developer",
  "Full Stack Enthusiast",
  "Hackathon Winner",
  "Team Lead Team ILM Tech"
];

const PORTFOLIO_LAST_UPDATED = "2026-04-05";


function getLastUpdatedText() {
  const updated = new Date(PORTFOLIO_LAST_UPDATED);
  const now = new Date();
  const diffMs = now.getTime() - updated.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (diffDays === 0) return "today";
  if (diffDays === 1) return "yesterday";
  return `${diffDays} days ago`;
}

function formatTime(date: Date) {
  return date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true });
}

function formatDate(date: Date) {
  return date.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
}

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [now, setNow] = useState(new Date());
  const [seconds, setSeconds] = useState(0);
  const [weather, setWeather] = useState<{ temp: number; condition: string; icon: string } | null>(null);
  const [locationName, setLocationName] = useState("");
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  // Automatically attempt audio playback on first interaction if autoplay policy triggers
  useEffect(() => {
    const enableSoundOnInteraction = () => {
      if (videoRef.current && !isMuted) {
        videoRef.current.muted = false;
        videoRef.current.play().catch(() => {
          if (videoRef.current) {
            videoRef.current.muted = true;
            setIsMuted(true);
            videoRef.current.play();
          }
        });
      }
    };
    window.addEventListener("click", enableSoundOnInteraction, { once: true });
    return () => window.removeEventListener("click", enableSoundOnInteraction);
  }, [isMuted]);

  // Real-time clock + time spent
  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Weather
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
        } catch { /* silent */ }
      },
      () => { /* denied */ }
    );
  }, []);

  // Typing effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const timeSpentText = mins > 0 ? `${mins} min ${secs} sec` : `${secs} sec`;

  return (
    <section className="min-h-screen min-h-[100dvh] w-full flex items-center justify-center px-4 sm:px-8 md:px-12 py-16 sm:py-24 relative overflow-hidden bg-background">
      {/* Background Intro Video (Landing / Home Page Only - Full 16:9 Widescreen & Mobile Desktop Site Safe) */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden pointer-events-none z-0 bg-black/90">
        <video
          ref={videoRef}
          autoPlay
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          className="w-full h-full object-cover min-w-full min-h-full opacity-95 filter brightness-110 contrast-105 saturate-105 transition-all duration-700"
          style={{ minWidth: "100%", minHeight: "100%" }}
        >
          <source src="/videos/intro2.mp4" type="video/mp4" />
          <source src="/videos/into.mp4" type="video/mp4" />
          <source src="/videos/intro.mp4" type="video/mp4" />
          <source src="/videos/intro2.webm" type="video/webm" />
          <source src="/videos/into.webm" type="video/webm" />
          <source src="/videos/intro.webm" type="video/webm" />
        </video>
        {/* Responsive, clear overlay ensuring video remains ultra bright while keeping text readable on Chrome Mobile Desktop Site & Laptops */}
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-background/90" />
      </div>

      {/* Floating Interactive Sound Control Button (Mobile & Desktop Safe Position) */}
      <button
        onClick={toggleMute}
        type="button"
        className="absolute top-16 sm:top-24 right-4 sm:right-8 z-30 flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/85 hover:bg-background border border-primary/50 text-primary font-mono text-xs shadow-xl backdrop-blur-md transition-all duration-300 pointer-events-auto hover:scale-105"
        title={isMuted ? "Click to Unmute Sound" : "Click to Mute Sound"}
      >
        {isMuted ? (
          <>
            <VolumeX className="w-4 h-4 text-red-400 animate-pulse" />
            <span className="hidden sm:inline">Sound Muted (Click to Enable)</span>
            <span className="sm:hidden">Muted</span>
          </>
        ) : (
          <>
            <Volume2 className="w-4 h-4 text-emerald-400 animate-bounce" />
            <span>Sound On</span>
          </>
        )}
      </button>

      {/* Responsive Content Container */}
      <div className="max-w-5xl w-full mx-auto relative z-10 pt-10 sm:pt-0">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Main Hero Details (Center-Left aligned within safe margins) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-8 space-y-6 text-center sm:text-left px-2 sm:px-4"
          >
            {/* Terminal Header */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center sm:justify-start gap-2 text-muted-foreground font-mono text-xs sm:text-sm"
            >
              <Terminal className="w-4 h-4 text-primary" />
              <span className="text-primary font-semibold">najishanjumportfolio.tech</span>
            </motion.div>

            {/* Greetings & Name (Center-left, padded away from edges) */}
            <div className="space-y-2">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-foreground/90 text-lg sm:text-xl md:text-2xl font-mono drop-shadow-md"
              >
                Hello, I'm
              </motion.h2>

              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-4xl sm:text-6xl md:text-7xl font-bold font-mono tracking-tight"
              >
                <span className="text-gradient glow-text drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
                  Najish Anjum
                </span>
              </motion.h1>

              {/* Subtitle / Typing Role ("Tech Innovator" & Roles below name) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="h-10 sm:h-14 mt-1 flex items-center justify-center sm:justify-start"
              >
                <p className="text-xl sm:text-3xl md:text-4xl font-mono text-primary drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] font-semibold">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </p>
              </motion.div>
            </div>

            {/* Short Centered Description with Backdrop Card for Legibility */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-sm sm:text-base md:text-lg text-foreground/90 max-w-xl mx-auto sm:mx-0 font-sans leading-relaxed bg-black/30 backdrop-blur-sm p-4 rounded-xl border border-white/10 shadow-lg drop-shadow-md"
            >
              B.Tech AI/ML Student passionate about building innovative tech solutions. 
              Hackathon enthusiast and full-stack developer crafting the future with code.
            </motion.p>

            {/* Real-Time Stats & Clock Bar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 pt-1"
            >
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/40 border border-primary/30 font-mono text-xs text-primary backdrop-blur-md">
                <Clock className="w-3.5 h-3.5" />
                <span>{formatTime(now)}</span>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/40 border border-primary/30 font-mono text-xs text-muted-foreground backdrop-blur-md">
                <CalendarDays className="w-3.5 h-3.5 text-primary" />
                <span>{formatDate(now)}</span>
              </div>

              {weather && (
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/40 border border-primary/30 font-mono text-xs text-muted-foreground backdrop-blur-md">
                  <CloudSun className="w-3.5 h-3.5 text-primary" />
                  <span>🌤️ {weather.temp}°C {weather.condition}{locationName ? ` in ${locationName}` : ""}</span>
                </div>
              )}

              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/40 border border-accent/40 font-mono text-xs text-muted-foreground backdrop-blur-md">
                <Timer className="w-3.5 h-3.5 text-primary" />
                <span>⏳ {timeSpentText}</span>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/40 border border-accent/40 font-mono text-xs text-muted-foreground backdrop-blur-md">
                <RefreshCw className="w-3.5 h-3.5 text-primary" />
                <span>🔄 {getLastUpdatedText()}</span>
              </div>
            </motion.div>

            {/* CTA Buttons - Center area (not stretched full-width) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-row flex-wrap items-center justify-center sm:justify-start gap-4 pt-2"
            >
              <a href="/resume/Najish_Anjum_Resume.pdf" target="_blank" rel="noopener noreferrer" download className="w-auto">
                <Button size="lg" className="border-glow bg-primary/20 hover:bg-primary/30 text-primary font-mono group px-6 py-2.5 w-auto min-w-[160px] shadow-lg backdrop-blur-md">
                  <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                  Download Resume
                </Button>
              </a>
              <a href="https://connect-with-najish.vercel.app/" target="_blank" rel="noopener noreferrer" className="w-auto">
                <Button size="lg" className="border-glow bg-primary/20 hover:bg-primary/30 text-primary font-mono group px-6 py-2.5 w-auto min-w-[160px] shadow-lg backdrop-blur-md">
                  <Send className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                  Contact Me
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Reserved Center-Right Safe Area for Video Subject / Laptop View on Desktop */}
          <div className="hidden md:block md:col-span-4" />
        </div>
      </div>
    </section>
  );
};
