import { motion } from "framer-motion";
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
  SiGitlab,
  SiTensorflow,
  SiPytorch,
  SiLinux,
  SiDocker,
  SiPostman,
} from "react-icons/si";

interface TechItem {
  name: string;
  icon?: React.ComponentType<{ className?: string }>;
  emoji?: string;
  role?: string;
}

interface TechCategory {
  title: string;
  eyebrow: string;
  description: string;
  techs: TechItem[];
}

const techCategories: TechCategory[] = [
  {
    title: "AI & MACHINE LEARNING",
    eyebrow: "01 // INTELLIGENCE",
    description: "Neural network architectures, computer vision, natural language processing, and generative AI agents.",
    techs: [
      { name: "Python", icon: SiPython, role: "Core Language" },
      { name: "TensorFlow", icon: SiTensorflow, role: "Deep Learning" },
      { name: "PyTorch", icon: SiPytorch, role: "Models & Training" },
      { name: "HuggingFace", emoji: "🤗", role: "Transformers" },
      { name: "LangChain", emoji: "🦜", role: "LLM Orchestration" },
      { name: "LangGraph", emoji: "📊", role: "Agent Workflows" },
    ],
  },
  {
    title: "LANGUAGES & RUNTIMES",
    eyebrow: "02 // SYNTAX",
    description: "Multi-paradigm programming languages for low-level performance, scripting, and typed application logic.",
    techs: [
      { name: "TypeScript", icon: SiTypescript, role: "Typed JS" },
      { name: "Python", icon: SiPython, role: "AI & Backend" },
      { name: "C++", icon: SiCplusplus, role: "DSA & Systems" },
      { name: "JavaScript", icon: SiJavascript, role: "Web Engine" },
    ],
  },
  {
    title: "FRONTEND ENGINEERING",
    eyebrow: "03 // CLIENT INTERFACES",
    description: "Component-driven user interfaces, responsive design systems, animations, and state architectures.",
    techs: [
      { name: "React", icon: SiReact, role: "UI Framework" },
      { name: "Tailwind CSS", icon: SiTailwindcss, role: "Design Tokens" },
      { name: "HTML5", icon: SiHtml5, role: "Semantic Markup" },
      { name: "CSS3", icon: SiCss3, role: "Styling & Motion" },
    ],
  },
  {
    title: "BACKEND ARCHITECTURE",
    eyebrow: "04 // SERVICES & APIS",
    description: "RESTful microservices, asynchronous request pipelines, server-side frameworks, and middleware.",
    techs: [
      { name: "Node.js", icon: SiNodedotjs, role: "JS Runtime" },
      { name: "Express", icon: SiExpress, role: "API Framework" },
      { name: "Django", icon: SiDjango, role: "Python Web" },
    ],
  },
  {
    title: "DATA & PERSISTENCE",
    eyebrow: "05 // STORAGE",
    description: "Relational modeling, document data stores, vector search, and transactional integrity.",
    techs: [
      { name: "PostgreSQL", icon: SiPostgresql, role: "Relational SQL" },
      { name: "MongoDB", icon: SiMongodb, role: "NoSQL Docs" },
      { name: "MySQL", icon: SiMysql, role: "Relational DB" },
    ],
  },
  {
    title: "DEVOPS, CLOUD & TOOLS",
    eyebrow: "06 // WORKFLOW",
    description: "Version control systems, cloud hosting, containerization, and API development toolchains.",
    techs: [
      { name: "Git", icon: SiGit, role: "Version Control" },
      { name: "GitHub", icon: SiGithub, role: "CI/CD & Repo" },
      { name: "GitLab", icon: SiGitlab, role: "Pipelines" },
      { name: "AWS", icon: SiAmazon, role: "Cloud Services" },
      { name: "Linux", icon: SiLinux, role: "Servers & CLI" },
      { name: "Docker", icon: SiDocker, role: "Containers" },
      { name: "Postman", icon: SiPostman, role: "API Testing" },
    ],
  },
];

export const TechStack = () => {
  return (
    <section id="tech-stack" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#050505] text-white border-t border-[#252830] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Marker */}
        <div className="flex items-center justify-between pb-5 border-b border-[#252830] mb-10 sm:mb-14">
          <span className="editorial-eyebrow">[ 04 // TECHNICAL SYSTEM ]</span>
          <span className="font-mono text-xs text-[#9A9CA3] uppercase tracking-widest hidden sm:inline-block">
            LANGUAGES, FRAMEWORKS &amp; INFRASTRUCTURE
          </span>
        </div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-14"
        >
          <h2 className="editorial-section-title text-white">
            <span>Technologies that</span>
            <br />
            <span>power the <span className="italic font-normal text-[#246BFD]">vision.</span></span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A4A7AF] max-w-xl font-sans">
            A structured breakdown of technologies verified through shipped products, hackathon victories, and production repositories.
          </p>
        </motion.div>

        {/* Structured Category Panels: Short & Compact Box Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 items-stretch">
          {techCategories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true, margin: "-40px" }}
              className="rounded-2xl bg-[#0B0D10] border border-[#252830] p-4 sm:p-5 hover:border-[#246BFD]/50 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Header Strip */}
                <div className="flex items-center justify-between pb-2.5 border-b border-[#252830]">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#246BFD] font-bold">
                    {cat.eyebrow}
                  </span>
                  <span className="font-mono text-[10px] text-[#A4A7AF] px-2 py-0.5 rounded bg-[#12151B] border border-[#252830]">
                    {cat.techs.length}
                  </span>
                </div>

                <h3 className="font-sans font-bold text-sm sm:text-base text-white tracking-wide mt-3 mb-1.5 group-hover:text-[#4D8DFF] transition-colors">
                  {cat.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-[#A4A7AF] font-sans leading-relaxed mb-3.5">
                  {cat.description}
                </p>
              </div>

              {/* Technologies Compact Grid */}
              <div className="grid grid-cols-2 gap-1.5 pt-2.5 border-t border-[#252830]/80">
                {cat.techs.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2 p-1.5 rounded-lg bg-[#12151B] border border-[#252830] hover:border-[#246BFD]/60 hover:bg-[#12151B]/90 transition-all"
                  >
                    <div className="w-5 h-5 rounded bg-[#0B0D10] border border-[#252830] flex items-center justify-center text-[#F7F7F7] flex-shrink-0 group-hover:text-[#4D8DFF] transition-colors">
                      {tech.emoji ? (
                        <span className="text-[11px]">{tech.emoji}</span>
                      ) : tech.icon ? (
                        <tech.icon className="w-3 h-3" />
                      ) : null}
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="font-sans font-semibold text-[11px] sm:text-xs text-white truncate block">
                        {tech.name}
                      </span>
                      {tech.role && (
                        <span className="font-mono text-[9px] text-[#9A9CA3] truncate block leading-tight">
                          {tech.role}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
