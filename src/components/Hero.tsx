import { motion } from "framer-motion";
import { Download, Terminal, Clock, CalendarDays, Timer, CloudSun, RefreshCw, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const roles = [
  "AI/ML Developer",
  "Full Stack Enthusiast",
  "Tech Innovator",
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
            method: "GET",
            headers: {},
            body: undefined as never,
          } as never).catch(() => ({ data: null, error: true } as never)) as { data: any; error: any };
          // Fallback: use direct fetch to the function URL with query params
          const url = `https://fodqjynqnlynyuzvkikm.supabase.co/functions/v1/weather?lat=${latitude}&lon=${longitude}`;
          const res = await fetch(url, {
            headers: {
              apikey: (supabase as any).supabaseKey ?? "",
              Authorization: `Bearer ${(supabase as any).supabaseKey ?? ""}`,
            },
          });
          const w = await res.json();
          if (w && typeof w.temp === "number") {
            setWeather({ temp: w.temp, condition: w.condition, icon: w.icon });
            setLocationName(w.name);
          }
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
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Terminal Header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 text-muted-foreground font-mono text-sm"
          >
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-primary">najishanjumportfolio.tech</span>
          </motion.div>

          {/* Main Content */}
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-foreground/80 text-xl md:text-2xl font-mono"
            >
              Hello, I'm
            </motion.h2>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-5xl md:text-7xl font-bold font-mono"
            >
              <span className="text-gradient glow-text">Najish Anjum</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="h-12 md:h-16"
            >
              <p className="text-2xl md:text-4xl font-mono text-primary">
                {displayText}
                <span className="animate-pulse">|</span>
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl font-sans"
            >
              B.Tech AI/ML Student passionate about building innovative tech solutions. 
              Hackathon enthusiast and full-stack developer crafting the future with code.
            </motion.p>
          </div>

          {/* Real-Time Info Bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-wrap gap-3"
          >
            {/* Clock */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-primary/10 border border-primary/20 font-mono text-xs md:text-sm text-primary">
              <Clock className="w-3.5 h-3.5" />
              <span>{formatTime(now)}</span>
            </div>

            {/* Date */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-primary/10 border border-primary/20 font-mono text-xs md:text-sm text-muted-foreground">
              <CalendarDays className="w-3.5 h-3.5 text-primary" />
              <span>{formatDate(now)}</span>
            </div>


            {/* Weather */}
            {weather && (
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-primary/10 border border-primary/20 font-mono text-xs md:text-sm text-muted-foreground">
                <CloudSun className="w-3.5 h-3.5 text-primary" />
                <span>🌤️ {weather.temp}°C {weather.condition}{locationName ? ` in ${locationName}` : ""}</span>
              </div>
            )}

            {/* Time Spent */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-accent/30 border border-accent/40 font-mono text-xs md:text-sm text-muted-foreground">
              <Timer className="w-3.5 h-3.5 text-primary" />
              <span>⏳ Here for {timeSpentText}</span>
            </div>

            {/* Last Updated */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-accent/30 border border-accent/40 font-mono text-xs md:text-sm text-muted-foreground">
              <RefreshCw className="w-3.5 h-3.5 text-primary" />
              <span>🔄 Updated {getLastUpdatedText()}</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap gap-4"
          >
            <a href="/resume/Najish_Anjum_Resume.pdf" target="_blank" rel="noopener noreferrer" download>
              <Button size="lg" className="border-glow bg-primary/10 hover:bg-primary/20 text-primary font-mono group">
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </a>
            <a href="https://connect-with-najish.vercel.app/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="border-glow bg-primary/10 hover:bg-primary/20 text-primary font-mono group">
                <Send className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Contact Me
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
