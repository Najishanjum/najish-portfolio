import { motion } from "framer-motion";
import { Trophy, Calendar, MapPin, Users, Minus, Square, X } from "lucide-react";
import techclasherBg from "@/assets/techclasher-bg.png";
import nasaBg from "@/assets/nasa-bg.png";
import paranoxBg from "@/assets/paranox-bg.png";
import kodekaleshBg from "@/assets/kodekalesh-bg.png";
import nextgenBg from "@/assets/nextgen-bg.png";

const hackathons = [
  {
    title: "The TechClasher 2025",
    organizer: "Greater Noida Institute of Technology, Delhi NCR",
    description: "Innovate. Code. Transform. Shape the Future of Technology & Defence 🚀",
    status: "Completed",
    date: "October 06 – 09, 2025",
    badge: "Team Lead Team ILM Tech",
    slug: "techclasher-2025",
    color: "from-[hsl(320,100%,50%)] to-[hsl(270,80%,50%)]",
    bgImage: techclasherBg,
  },
  {
    title: "NASA Space App Challenge – Jabalpur Edition",
    organizer: "NASA",
    description: "A prestigious global hackathon hosted locally in Jabalpur, where innovators develop solutions for space exploration and Earth science.",
    status: "Completed",
    badge: "Local Event",
    slug: "nasa-space-app",
    color: "from-[hsl(220,100%,50%)] to-[hsl(270,80%,50%)]",
    bgImage: nasaBg,
  },
  {
    title: "Paranox 2.0 Hackathon",
    organizer: "TechXNinjas, Delhi NCR",
    description: "A challenging hackathon focused on solving cutting-edge technology problems using AI, ML, and blockchain.",
    status: "Completed",
    badge: "Recent",
    slug: "paranox-2",
    color: "from-[hsl(270,80%,50%)] to-[hsl(320,100%,50%)]",
    bgImage: paranoxBg,
  },
  {
    title: "0 to 1 – Hack with Uttar Pradesh",
    organizer: "Chandigarh University, Uttar Pradesh (TBI & IEDC)",
    description: "A flagship founders-focused hackathon centered on agentic AI startups, where participants build AI-powered products, co-pilots, and autonomous workflows for real-world problems.",
    status: "Completed",
    date: "2–3 November 2025",
    badge: "Participated",
    slug: "hack-with-up",
    color: "from-[hsl(320,100%,50%)] to-[hsl(50,100%,50%)]",
  },
  {
    title: "CodeMatrix: Genesis Hackathon",
    organizer: "Dr. Ambedkar Institute of Technology, Kanpur",
    description: "A multi-day coding and innovation hackathon for student developers to build solutions across web development, AI/ML, automation, and problem-solving challenges.",
    status: "Completed",
    date: "6–8 December 2025",
    badge: "Participated",
    slug: "codematrix-genesis",
    color: "from-[hsl(50,100%,50%)] to-[hsl(270,80%,50%)]",
  },
  {
    title: "Error 404: Beyond the Limit",
    organizer: "Jai Hind College, Mumbai",
    description: "A 48-hour semi-offline innovation sprint tackling real-world challenges in software engineering, debugging, cybersecurity, and product design.",
    status: "Completed",
    date: "10 December 2025",
    badge: "Participated",
    slug: "error-404",
    color: "from-[hsl(220,100%,50%)] to-[hsl(320,100%,50%)]",
  },
  {
    title: "CBIT Hacktoberfest Hackathon 2025",
    organizer: "CBIT Open Source Community",
    description: "An open-source hackathon aligned with Hacktoberfest, encouraging participants to contribute to real GitHub repositories and build community-driven projects.",
    status: "Completed",
    date: "25 October 2025",
    badge: "Participated",
    slug: "cbit-hacktoberfest",
    color: "from-[hsl(270,80%,50%)] to-[hsl(50,100%,50%)]",
  },
  {
    title: "Gen AI Academy 2.0 – Google Cloud Gen AI",
    organizer: "Google Cloud",
    description: "A hands-on generative AI learning program focused on building with Google Cloud's Gen AI stack, including model APIs, prompt engineering, and end-to-end app development.",
    status: "Completed",
    date: "November 2025",
    badge: "Completed",
    slug: "gen-ai-academy",
    color: "from-[hsl(50,100%,50%)] to-[hsl(140,100%,40%)]",
  },
  {
    title: "Pixel Riot Hackathon",
    organizer: "Online Design & Creative Tech Hackathon",
    description: "A creativity-first hackathon themed around UI/UX, visual design, graphics, and interactive experiences for building visually striking digital products.",
    status: "Completed",
    date: "2025",
    badge: "Participated",
    slug: "pixel-riot",
    color: "from-[hsl(320,100%,50%)] to-[hsl(270,80%,50%)]",
  },
  {
    title: "CodeSpark – 72 Hours Coding Challenge",
    organizer: "Siwan Engineering College, Siwan",
    description: "A high-energy coding competition where participants work for 72 hours to develop innovative software solutions.",
    status: "Completed",
    badge: "Recent",
    slug: "codespark-72h",
    color: "from-[hsl(320,100%,50%)] to-[hsl(50,100%,50%)]",
  },
  {
    title: "Kodekalesh Hackathon",
    organizer: "Kanpur Institute of Technology, Kanpur",
    description: "A competitive hackathon involving intense problem-solving and innovative product creation.",
    status: "Ongoing",
    slug: "kodekalesh",
    color: "from-[hsl(50,100%,50%)] to-[hsl(270,80%,50%)]",
    bgImage: kodekaleshBg,
  },
  {
    title: "Next Gen Hackathon",
    organizer: "Soft Computing Research Society, New Delhi",
    description: "A hackathon focused on building the next generation of AI-based solutions for real-world problems.",
    status: "Ongoing",
    slug: "nextgen",
    color: "from-[hsl(220,100%,50%)] to-[hsl(320,100%,50%)]",
    bgImage: nextgenBg,
  },
];

const StatusBadge = ({ status }: { status: string }) => {
  if (status === "Completed") {
    return (
      <span className="px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider bg-[hsl(150,100%,40%)] text-[hsl(220,25%,6%)] rounded-md border-2 border-[hsl(220,25%,6%)]"
        style={{ boxShadow: "0 0 12px hsl(150 100% 40% / 0.5)" }}>
        ● Completed
      </span>
    );
  }
  if (status === "Ongoing") {
    return (
      <span className="px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider bg-[hsl(50,100%,50%)] text-[hsl(220,25%,6%)] rounded-md border-2 border-[hsl(220,25%,6%)] animate-pulse">
        ● Ongoing
      </span>
    );
  }
  return (
    <span className="px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider bg-transparent text-[hsl(320,100%,65%)] rounded-md border-2 border-[hsl(320,100%,65%)]">
      ● {status}
    </span>
  );
};

const HackathonCard = ({ hackathon, index }: { hackathon: typeof hackathons[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
        rotate: index % 2 === 0 ? 1 : -1,
        transition: { duration: 0.3 },
      }}
      className="group relative"
    >
      {/* Offset shadow layer */}
      <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-xl bg-[hsl(320,100%,40%)] border-[3px] border-[hsl(220,25%,6%)]" />

      {/* Main card */}
      <div className="relative rounded-xl border-[3px] border-[hsl(220,25%,6%)] overflow-hidden bg-[hsl(220,20%,10%)] group-hover:shadow-[0_0_25px_hsl(50,100%,60%/0.3)] transition-shadow duration-300">
        {/* Browser top bar */}
        <div className="bg-[hsl(50,100%,55%)] px-4 py-2.5 flex items-center gap-2 border-b-[3px] border-[hsl(220,25%,6%)]">
          <div className="flex items-center gap-1.5">
            <span className="w-3.5 h-3.5 rounded-full bg-[hsl(0,85%,55%)] border-2 border-[hsl(220,25%,6%)] flex items-center justify-center">
              <X className="w-2 h-2 text-[hsl(220,25%,6%)]" />
            </span>
            <span className="w-3.5 h-3.5 rounded-full bg-[hsl(50,100%,50%)] border-2 border-[hsl(220,25%,6%)] flex items-center justify-center">
              <Minus className="w-2 h-2 text-[hsl(220,25%,6%)]" />
            </span>
            <span className="w-3.5 h-3.5 rounded-full bg-[hsl(140,70%,45%)] border-2 border-[hsl(220,25%,6%)] flex items-center justify-center">
              <Square className="w-1.5 h-1.5 text-[hsl(220,25%,6%)]" />
            </span>
          </div>

          {/* Address bar */}
          <div className="flex-1 mx-2 bg-[hsl(220,25%,6%)] rounded-md px-3 py-1 flex items-center gap-2">
            <span className="text-[hsl(320,100%,65%)] text-xs font-mono">🔒</span>
            <span className="text-[hsl(50,100%,60%)] text-xs font-mono truncate">
              /{hackathon.slug}.log
            </span>
          </div>
        </div>

        {/* Card body */}
        <div
          className="p-5 space-y-3"
          style={hackathon.bgImage ? {
            backgroundImage: `linear-gradient(to bottom right, hsl(220 20% 10% / 0.92), hsl(220 20% 10% / 0.96)), url(${hackathon.bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          } : {}}
        >
          {/* Status + Badge row */}
          <div className="flex items-center justify-between flex-wrap gap-2">
            <StatusBadge status={hackathon.status} />
            {hackathon.badge && hackathon.badge !== hackathon.status && (
              hackathon.badge === "Team Lead Team ILM Tech" ? (
                <div className="flex items-center gap-1 px-2 py-1 bg-[hsl(50,100%,60%/0.15)] border-2 border-[hsl(50,100%,60%)] rounded-md text-[10px] font-mono font-bold text-[hsl(50,100%,60%)] uppercase tracking-wider">
                  <Users className="w-3 h-3" />
                  Team Lead
                </div>
              ) : (
                <span className="px-2 py-1 bg-[hsl(270,80%,50%/0.15)] border border-[hsl(270,80%,50%/0.4)] rounded-md text-[10px] font-mono text-[hsl(270,80%,60%)] uppercase tracking-wider">
                  {hackathon.badge}
                </span>
              )
            )}
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold font-mono text-[hsl(50,100%,60%)] group-hover:text-[hsl(320,100%,65%)] transition-colors leading-tight">
            {hackathon.title}
          </h3>

          {/* Organizer */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
            <MapPin className="w-3.5 h-3.5 text-[hsl(320,100%,65%)]" />
            <span>{hackathon.organizer}</span>
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed">
            {hackathon.description}
          </p>

          {/* Date */}
          {hackathon.date && (
            <div className="flex items-center gap-2 text-xs font-mono text-[hsl(50,100%,60%/0.7)] pt-2 border-t border-[hsl(220,15%,20%)]">
              <Calendar className="w-3.5 h-3.5" />
              {hackathon.date}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const Hackathons = () => {
  const completedCount = hackathons.filter(h => h.status === "Completed").length;
  const ongoingCount = hackathons.filter(h => h.status === "Ongoing").length;

  return (
    <section
      id="hackathons"
      className="py-20 px-4 relative overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(hsl(320 100% 40% / 0.08) 1px, transparent 1px), linear-gradient(90deg, hsl(320 100% 40% / 0.08) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    >
      {/* Floating decorations */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-10 text-4xl opacity-30 pointer-events-none select-none hidden md:block"
      >
        🥷
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 left-8 text-3xl opacity-25 pointer-events-none select-none hidden md:block"
      >
        &lt;/&gt;
      </motion.div>
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 left-16 text-2xl opacity-20 pointer-events-none select-none hidden lg:block"
      >
        🏆
      </motion.div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-mono inline-flex items-center gap-3">
              <Trophy className="w-9 h-9 text-[hsl(50,100%,60%)]" />
              <span
                className="text-foreground"
                style={{
                  textShadow: "0 0 10px hsl(50 100% 60% / 0.4), 0 0 20px hsl(320 100% 65% / 0.2)",
                }}
              >
                HACKATHON
              </span>
              <span className="text-[hsl(320,100%,65%)]">.LOG</span>
            </h2>
          </motion.div>
          <div className="mt-3 h-1 w-24 mx-auto bg-gradient-to-r from-[hsl(50,100%,60%)] to-[hsl(320,100%,65%)] rounded-full" />

          {/* Stats counter */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-6 inline-flex items-center gap-4 px-6 py-2.5 rounded-lg bg-[hsl(220,20%,10%)] border-2 border-[hsl(50,100%,60%/0.4)] font-mono text-sm"
          >
            <span className="text-[hsl(150,100%,50%)]">🟢 {completedCount} Completed</span>
            <span className="text-[hsl(50,100%,60%/0.3)]">•</span>
            <span className="text-[hsl(50,100%,60%)]">🟡 {ongoingCount} Ongoing</span>
            <span className="animate-pulse text-[hsl(50,100%,60%)]">▌</span>
          </motion.div>
        </motion.div>

        {/* Hackathons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {hackathons.map((hackathon, index) => (
            <HackathonCard key={hackathon.slug} hackathon={hackathon} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
