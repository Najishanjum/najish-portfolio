import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  Layers,
  Server,
  Database,
  Settings,
} from "lucide-react";
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiAmazon,
  SiCplusplus,
  SiPython,
  SiTypescript,
  SiGit,
  SiGithub,
  SiTensorflow,
  SiPytorch,
  SiLinux,
  SiDocker,
  SiPostman,
  SiHuggingface,
  SiLangchain,
} from "react-icons/si";

// Custom LangGraph Icon component matching official nodes logo
const LangGraphIcon = ({ className = "w-7 h-7" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="6" cy="12" r="3" stroke="#38BDF8" strokeWidth="2" fill="#0E121D" />
    <circle cx="18" cy="6" r="3" stroke="#818CF8" strokeWidth="2" fill="#0E121D" />
    <circle cx="18" cy="18" r="3" stroke="#C084FC" strokeWidth="2" fill="#0E121D" />
    <path d="M8.5 10.5L15.5 7.5" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="2 2" />
    <path d="M8.5 13.5L15.5 16.5" stroke="#C084FC" strokeWidth="1.5" strokeDasharray="2 2" />
  </svg>
);

interface TechItem {
  name: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
}

interface TechCategory {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  iconColor: string;
  techs: TechItem[];
}

const categories: TechCategory[] = [
  {
    title: "AI & MACHINE LEARNING",
    icon: Brain,
    iconBg: "bg-purple-500/15 border-purple-500/30",
    iconColor: "text-purple-400",
    techs: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
      { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
      { name: "Hugging Face", icon: SiHuggingface, color: "#FFD21E" },
      { name: "LangChain", icon: SiLangchain, color: "#2E7D32" },
      { name: "LangGraph", icon: LangGraphIcon, color: "#38BDF8" },
    ],
  },
  {
    title: "LANGUAGES & RUNTIMES",
    icon: Code2,
    iconBg: "bg-blue-500/15 border-blue-500/30",
    iconColor: "text-blue-400",
    techs: [
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    ],
  },
  {
    title: "FRONTEND ENGINEERING",
    icon: Layers,
    iconBg: "bg-cyan-500/15 border-cyan-500/30",
    iconColor: "text-cyan-400",
    techs: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
    ],
  },
  {
    title: "BACKEND ARCHITECTURE",
    icon: Server,
    iconBg: "bg-indigo-500/15 border-indigo-500/30",
    iconColor: "text-indigo-400",
    techs: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#FFFFFF" },
      { name: "Django", icon: SiDjango, color: "#092E20" },
    ],
  },
  {
    title: "DATA & PERSISTENCE",
    icon: Database,
    iconBg: "bg-violet-500/15 border-violet-500/30",
    iconColor: "text-violet-400",
    techs: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    ],
  },
  {
    title: "DEVOPS, CLOUD & TOOLS",
    icon: Settings,
    iconBg: "bg-blue-500/15 border-blue-500/30",
    iconColor: "text-blue-400",
    techs: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      { name: "AWS", icon: SiAmazon, color: "#FF9900" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    ],
  },
];

export const TechStack = () => {
  return (
    <section
      id="tech-stack"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#04060B] text-white border-t border-[#1C2333] relative overflow-hidden"
    >
      {/* Background ambient cosmic glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-[#3B82F6]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-[#818CF8]/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-[#38BDF8]/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-4 mb-4"
        >
          <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#252E42]" />
          <span className="px-4 py-1 rounded-full border border-[#252E42] bg-[#0E121B]/90 font-mono text-xs font-semibold tracking-widest text-[#4D8DFF] uppercase shadow-[0_0_15px_rgba(59,130,246,0.15)]">
            TECH STACK
          </span>
          <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#252E42]" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="text-center mb-14 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display">
            <span className="text-white">My </span>
            <span className="bg-gradient-to-r from-[#60A5FA] via-[#818CF8] to-[#38BDF8] bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#94A3B8] max-w-xl mx-auto font-sans leading-relaxed">
            Technologies I use to build, innovate and bring ideas to life.
          </p>
        </motion.div>

        {/* 6 Glowing Capsule Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="relative rounded-[26px] sm:rounded-[30px] bg-[#0A0D15]/90 border border-[#1E2638] p-5 sm:p-6 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.06)] hover:border-[#3B82F6]/60 hover:shadow-[0_0_30px_rgba(59,130,246,0.22)] transition-all duration-300 flex flex-col justify-between group/card"
            >
              {/* Subtle top rim light */}
              <div className="absolute top-0 inset-x-8 h-[1px] bg-gradient-to-r from-transparent via-[#60A5FA]/40 to-transparent pointer-events-none" />

              {/* Category Header Badge */}
              <div className="flex items-center justify-between mb-5">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111625] border border-[#232F47] shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                  <div
                    className={`w-5 h-5 rounded-full ${cat.iconBg} border flex items-center justify-center`}
                  >
                    <cat.icon className={`w-3 h-3 ${cat.iconColor}`} />
                  </div>
                  <span className="font-mono text-[11px] sm:text-xs font-bold text-white tracking-wider">
                    {cat.title}
                  </span>
                </div>

                {/* Count Badge */}
                <span className="px-2 py-0.5 rounded-full bg-[#151B28] border border-[#252E42] font-mono text-[11px] text-[#93C5FD] font-semibold">
                  {cat.techs.length}
                </span>
              </div>

              {/* Horizontal Row of Rounded Square Tech Buttons */}
              <div className="flex items-center justify-center gap-3.5 sm:gap-4 flex-wrap pt-1">
                {cat.techs.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center gap-2 group/tech"
                  >
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-b from-[#161D2B] to-[#0D121D] border border-[#232D42] flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.08)] group-hover/tech:scale-110 group-hover/tech:border-[#38BDF8] group-hover/tech:shadow-[0_0_20px_rgba(56,189,248,0.35)] transition-all duration-200 cursor-pointer p-2.5">
                      <tech.icon
                        className="w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-200"
                        style={{ color: tech.color }}
                      />
                    </div>
                    <span className="font-sans text-[10px] sm:text-[11px] font-medium text-[#94A3B8] group-hover/tech:text-white transition-colors text-center tracking-tight max-w-[68px] truncate">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cosmic Celestial Arc & Slogan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mt-20 sm:mt-24 pt-4 flex flex-col items-center justify-center"
        >
          {/* Curved glowing horizon line */}
          <div className="relative w-full max-w-4xl h-14 flex items-center justify-center overflow-visible">
            {/* The curved arc border */}
            <div className="absolute top-0 w-[110%] sm:w-[100%] h-44 border-t-2 border-[#818CF8]/70 rounded-[100%] shadow-[0_-8px_25px_rgba(129,140,248,0.45)] pointer-events-none" />

            {/* Center Glowing 4-Point Star Sparkle */}
            <div className="absolute top-0 -translate-y-1/2 flex items-center justify-center z-10">
              <div className="w-6 h-6 rounded-full bg-[#818CF8]/30 blur-md absolute" />
              <div className="w-3.5 h-3.5 bg-gradient-to-tr from-[#38BDF8] via-[#818CF8] to-[#C084FC] rotate-45 rounded-[2px] shadow-[0_0_15px_#38BDF8,0_0_30px_#818CF8] flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-white rounded-full" />
              </div>
            </div>
          </div>

          {/* Slogan with hairline borders */}
          <div className="flex items-center justify-center gap-4 w-full max-w-lg text-center mt-3 z-10">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#252E42]" />
            <span className="font-mono text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#94A3B8]">
              BUILD &nbsp;&bull;&nbsp; DEPLOY &nbsp;&bull;&nbsp; SCALE
            </span>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#252E42]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
