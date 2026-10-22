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
  SiSolana,
  SiTensorflow,
  SiPytorch,
  SiLinux,
  SiDocker,
  SiPostman,
} from "react-icons/si";

interface TechItem {
  name: string;
  icon?: any;
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
      { name: "LangGraph", emoji: "📊", role: "Agentic Workflows" },
    ],
  },
  {
    title: "LANGUAGES & RUNTIMES",
    eyebrow: "02 // SYNTAX",
    description: "Multi-paradigm programming languages for low-level performance, scripting, and typed application logic.",
    techs: [
      { name: "TypeScript", icon: SiTypescript, role: "Typed JavaScript" },
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
      { name: "Django", icon: SiDjango, role: "Python Web Framework" },
    ],
  },
  {
    title: "WEB3 & BLOCKCHAIN",
    eyebrow: "05 // DECENTRALIZED",
    description: "Smart contract deployment, blockchain wallets, on-chain transactions, and decentralized apps.",
    techs: [
      { name: "Stellar", emoji: "🚀", role: "Payment Network" },
      { name: "Soroban", emoji: "✨", role: "Smart Contracts" },
      { name: "Solana", icon: SiSolana, role: "High-Throughput Chain" },
    ],
  },
  {
    title: "DATA & PERSISTENCE",
    eyebrow: "06 // STORAGE",
    description: "Relational modeling, document data stores, vector search, and transactional integrity.",
    techs: [
      { name: "PostgreSQL", icon: SiPostgresql, role: "Relational SQL" },
      { name: "MongoDB", icon: SiMongodb, role: "NoSQL Documents" },
      { name: "MySQL", icon: SiMysql, role: "Relational DB" },
    ],
  },
  {
    title: "DEVOPS, CLOUD & TOOLS",
    eyebrow: "07 // WORKFLOW",
    description: "Version control systems, cloud hosting, containerization, and API development toolchains.",
    techs: [
      { name: "Git", icon: SiGit, role: "Version Control" },
      { name: "GitHub", icon: SiGithub, role: "Collaboration & CI" },
      { name: "GitLab", icon: SiGitlab, role: "CI/CD" },
      { name: "AWS", icon: SiAmazon, role: "Cloud Services" },
      { name: "Linux", icon: SiLinux, role: "CLI & Servers" },
      { name: "Docker", icon: SiDocker, role: "Containers" },
      { name: "Postman", icon: SiPostman, role: "API Testing" },
    ],
  },
];

export const TechStack = () => {
  return (
    <section id="tech-stack" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#050505] text-white border-t border-[#252830] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Marker */}
        <div className="flex items-center justify-between pb-6 border-b border-[#252830] mb-12 sm:mb-16">
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
          className="mb-16 sm:mb-24"
        >
          <h2 className="editorial-section-title text-white">
            <span>TOOLS I USE TO</span>
            <br />
            <span className="text-[#246BFD]">BUILD THE FUTURE.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#9A9CA3] max-w-xl font-sans">
            A structured breakdown of technologies verified through shipped products, hackathon victories, and production repositories.
          </p>
        </motion.div>

        {/* Structured Category Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          {techCategories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              viewport={{ once: true, margin: "-60px" }}
              className="rounded-[24px] bg-[#0B0D10] border border-[#252830] p-6 hover:border-[#246BFD]/50 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-3 border-b border-[#252830]">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#246BFD]">
                    {cat.eyebrow}
                  </span>
                  <span className="font-mono text-xs text-[#9A9CA3] px-2 py-0.5 rounded bg-[#12151B] border border-[#252830]">
                    {cat.techs.length}
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl text-white uppercase tracking-tight mt-4 mb-2 group-hover:text-[#4D8DFF] transition-colors">
                  {cat.title}
                </h3>
                <p className="text-xs text-[#9A9CA3] font-sans leading-relaxed mb-6">
                  {cat.description}
                </p>
              </div>

              {/* Technologies List */}
              <div className="space-y-2 pt-2 border-t border-[#252830]/80">
                {cat.techs.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-[#12151B] border border-[#252830] hover:border-[#246BFD] hover:bg-[#12151B]/80 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-[#0B0D10] border border-[#252830] flex items-center justify-center text-[#F7F7F7] group-hover:text-[#4D8DFF] transition-colors">
                        {tech.emoji ? (
                          <span className="text-sm">{tech.emoji}</span>
                        ) : tech.icon ? (
                          <tech.icon className="w-3.5 h-3.5" />
                        ) : null}
                      </div>
                      <span className="font-sans font-bold text-xs sm:text-sm text-white">
                        {tech.name}
                      </span>
                    </div>

                    {tech.role && (
                      <span className="font-mono text-[10px] text-[#9A9CA3] uppercase tracking-wider">
                        {tech.role}
                      </span>
                    )}
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
