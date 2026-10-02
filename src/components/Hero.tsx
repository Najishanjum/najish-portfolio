import { motion } from "framer-motion";
import { Download, Clock, CalendarDays, Timer, CloudSun, RefreshCw, Send, Volume2, VolumeX, Play } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";

const roles = [
  "Tech Innovator",
  "AI/ML Developer",
  "Full Stack Enthusiast",
  "Hackathon Winner",
  "Team Lead Team ILM Tech",
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
  return date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });
}

function formatDate(date: Date) {
  return date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
}

interface HeroProps {
  onReplayIntro?: () => void;
}

export const Hero = ({ onReplayIntro }: HeroProps) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [now, setNow] = useState(new Date());
  const [seconds, setSeconds] = useState(0);
  const [weather, setWeather] = useState<{ temp: number; condition: string; icon: string } | null>(null);
  const [locationName, setLocationName] = useState("");
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(false);

  const [hasPlayedOnce, setHasPlayedOnce] = useState(() => {
    if (typeof window !== "undefined") {
      return !!sessionStorage.getItem("na_hero_video_played");
    }
    return false;
  });

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleVideoEnded = () => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("na_hero_video_played", "true");
    }
    setHasPlayedOnce(true);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handlePlayIntroVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.muted = false;
      setIsMuted(false);
      videoRef.current.play().catch(() => {
        if (videoRef.current) {
          videoRef.current.muted = true;
          setIsMuted(true);
          videoRef.current.play();
        }
      });
    }
    if (onReplayIntro) {
      onReplayIntro();
    }
  };

  useEffect(() => {
    if (hasPlayedOnce && videoRef.current) {
      videoRef.current.pause();
    }
  }, [hasPlayedOnce]);

  useEffect(() => {
    const enableSoundOnInteraction = () => {
      if (videoRef.current && !isMuted && !hasPlayedOnce) {
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
  }, [isMuted, hasPlayedOnce]);

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
        } catch { /* silent */ }
      },
      () => { /* denied */ }
    );
  }, []);

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
  const timeSpentText = mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;

  return (
    <section
      className="min-h-screen w-full relative overflow-hidden flex items-center"
      style={{ background: "#FAF8F3" }}
    >
      {/* Background Video (hero intro) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video
          ref={videoRef}
          autoPlay={!hasPlayedOnce}
          onEnded={handleVideoEnded}
          playsInline
          preload="auto"
          aria-hidden="true"
          className="w-full h-full object-cover opacity-20"
          style={{ objectPosition: "70% 50%" }}
        >
          <source src="/videos/intro2.mp4" type="video/mp4" />
          <source src="/videos/into.mp4" type="video/mp4" />
          <source src="/videos/intro.mp4" type="video/mp4" />
        </video>
        {/* warm overlay */}
        <div className="absolute inset-0" style={{ background: "rgba(250,248,243,0.75)" }} />
      </div>

      {/* Accent shapes */}
      <div
        className="absolute top-20 right-16 w-64 h-64 rounded-full pointer-events-none opacity-60 hidden lg:block"
        style={{ background: "#FFD21C", zIndex: 1 }}
      />
      <div
        className="absolute bottom-32 right-8 w-32 h-48 rounded-2xl pointer-events-none opacity-40 hidden lg:block"
        style={{ background: "#FF3D83", zIndex: 1 }}
      />
      <div
        className="absolute top-1/2 right-40 w-20 h-20 rounded-full pointer-events-none opacity-50 hidden lg:block"
        style={{ background: "#7557F7", zIndex: 1, transform: "translateY(-50%)" }}
      />

      {/* Sound Control Badge */}
      <button
        onClick={toggleMute}
        type="button"
        className="absolute top-24 right-4 sm:right-6 z-30 flex items-center gap-2 px-3 py-2 rounded-xl font-bold text-xs border-[2px] border-[#090909] shadow-[3px_3px_0_#090909] transition-all duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none pointer-events-auto"
        style={{ background: "#FAF8F3" }}
        title={isMuted ? "Click to Unmute" : "Click to Mute"}
      >
        {isMuted ? (
          <>
            <VolumeX className="w-3.5 h-3.5 text-[#FF3D83]" />
            <span className="hidden sm:inline text-[#090909]">Muted</span>
          </>
        ) : (
          <>
            <Volume2 className="w-3.5 h-3.5 text-[#35D04F]" />
            <span className="text-[#090909]">Sound On</span>
          </>
        )}
      </button>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-28 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3"
            >
              <span
                className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-widest border-[2px] border-[#090909] rounded-lg shadow-[3px_3px_0_#090909]"
                style={{ background: "#FFD21C", color: "#090909" }}
              >
                Hello, I'm
              </span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1
                className="font-display leading-none"
                style={{
                  fontSize: "clamp(3.5rem, 9vw, 7rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  color: "#090909",
                  lineHeight: 1,
                }}
              >
                Najish
                <br />
                <span style={{ color: "#7557F7" }}>Anjum</span>
              </h1>
            </motion.div>

            {/* Typing role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="h-10 flex items-center"
            >
              <p
                className="font-display font-bold"
                style={{
                  fontSize: "clamp(1.1rem, 3vw, 1.75rem)",
                  color: "#FF3D83",
                  letterSpacing: "-0.01em",
                }}
              >
                {displayText}
                <span className="typing-cursor">|</span>
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-base sm:text-lg leading-relaxed max-w-lg"
              style={{ color: "#5B5B5B", fontWeight: 500 }}
            >
              B.Tech AI/ML Student passionate about building innovative tech solutions.
              Hackathon enthusiast and full-stack developer crafting the future with code.
            </motion.p>

            {/* Live Status Badges */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-2"
            >
              <div
                className="flex items-center gap-1.5 px-3 py-1.5 border-[2px] border-[#090909] rounded-lg font-bold text-xs shadow-[2px_2px_0_#090909]"
                style={{ background: "#FAF8F3", color: "#090909" }}
              >
                <Clock className="w-3 h-3" />
                {formatTime(now)}
              </div>
              <div
                className="flex items-center gap-1.5 px-3 py-1.5 border-[2px] border-[#090909] rounded-lg font-bold text-xs shadow-[2px_2px_0_#090909]"
                style={{ background: "#FAF8F3", color: "#090909" }}
              >
                <CalendarDays className="w-3 h-3" />
                {formatDate(now)}
              </div>
              {weather && (
                <div
                  className="flex items-center gap-1.5 px-3 py-1.5 border-[2px] border-[#090909] rounded-lg font-bold text-xs shadow-[2px_2px_0_#090909]"
                  style={{ background: "#FAF8F3", color: "#090909" }}
                >
                  <CloudSun className="w-3 h-3" />
                  {weather.temp}°C {weather.condition}{locationName ? ` · ${locationName}` : ""}
                </div>
              )}
              <div
                className="flex items-center gap-1.5 px-3 py-1.5 border-[2px] border-[#090909] rounded-lg font-bold text-xs shadow-[2px_2px_0_#090909]"
                style={{ background: "#FFD21C", color: "#090909" }}
              >
                <Timer className="w-3 h-3" />
                {timeSpentText} on site
              </div>
              <div
                className="flex items-center gap-1.5 px-3 py-1.5 border-[2px] border-[#090909] rounded-lg font-bold text-xs shadow-[2px_2px_0_#090909]"
                style={{ background: "#FAF8F3", color: "#090909" }}
              >
                <RefreshCw className="w-3 h-3" />
                Updated {getLastUpdatedText()}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              {onReplayIntro && (
                <button
                  onClick={handlePlayIntroVideo}
                  className="flex items-center gap-2 px-6 py-3 font-bold text-sm border-[3px] border-[#090909] rounded-xl shadow-[5px_5px_0_#090909] transition-all duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0_#090909] active:translate-x-[5px] active:translate-y-[5px] active:shadow-none"
                  style={{ background: "#090909", color: "#FFD21C" }}
                >
                  <Play className="w-4 h-4 fill-current" />
                  Play Intro
                </button>
              )}
              <a href="/resume/Najish_Anjum_Resume.pdf" target="_blank" rel="noopener noreferrer" download>
                <button
                  className="flex items-center gap-2 px-6 py-3 font-bold text-sm border-[3px] border-[#090909] rounded-xl shadow-[5px_5px_0_#090909] transition-all duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0_#090909] active:translate-x-[5px] active:translate-y-[5px] active:shadow-none"
                  style={{ background: "#FFD21C", color: "#090909" }}
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </button>
              </a>
              <a href="https://connect-with-najish.vercel.app/" target="_blank" rel="noopener noreferrer">
                <button
                  className="flex items-center gap-2 px-6 py-3 font-bold text-sm border-[3px] border-[#090909] rounded-xl shadow-[5px_5px_0_#090909] transition-all duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0_#090909] active:translate-x-[5px] active:translate-y-[5px] active:shadow-none"
                  style={{ background: "#FAF8F3", color: "#090909" }}
                >
                  <Send className="w-4 h-4" />
                  Contact Me
                </button>
              </a>
            </motion.div>
          </div>

          {/* Right: Profile Image Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Accent shape behind card */}
              <div
                className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl border-[3px] border-[#090909]"
                style={{ background: "#FFD21C", zIndex: 0 }}
              />
              <div
                className="absolute -top-4 -left-4 w-20 h-20 rounded-full"
                style={{ background: "#FF3D83", zIndex: 0 }}
              />
              {/* Main profile card */}
              <div
                className="relative rounded-3xl border-[3px] border-[#090909] overflow-hidden"
                style={{
                  width: "clamp(240px, 35vw, 380px)",
                  height: "clamp(280px, 45vw, 460px)",
                  zIndex: 2,
                  boxShadow: "8px 8px 0 #090909",
                }}
              >
                <img
                  src="/images/najish-profile.jpeg"
                  alt="Najish Anjum"
                  className="w-full h-full object-cover object-top"
                />
                {/* Bottom info bar */}
                <div
                  className="absolute bottom-0 left-0 right-0 px-4 py-3 border-t-[3px] border-[#090909]"
                  style={{ background: "#FFD21C" }}
                >
                  <p className="font-bold text-sm text-[#090909]" style={{ letterSpacing: "-0.01em" }}>
                    Najish Anjum
                  </p>
                  <p className="text-xs font-semibold text-[#090909]/70">AI/ML Developer · Full Stack</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
