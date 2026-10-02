import { motion } from "framer-motion";
import { SiHtml5, SiCss3, SiTailwindcss, SiJavascript, SiReact, SiNodedotjs, SiExpress, SiDjango, SiMongodb, SiPostgresql, SiMysql, SiAmazon, SiCplusplus, SiPython, SiTypescript, SiGit, SiGithub, SiGitlab } from "react-icons/si";

const techStack = [
  {
    category: "Frontend",
    accent: "#FFD21C",
    techs: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
    ],
  },
  {
    category: "Backend",
    accent: "#FF3D83",
    techs: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#090909" },
      { name: "Django", icon: SiDjango, color: "#092E20" },
    ],
  },
  {
    category: "Databases",
    accent: "#7557F7",
    techs: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    ],
  },
  {
    category: "Languages",
    accent: "#35D04F",
    techs: [
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    ],
  },
  {
    category: "DevOps",
    accent: "#B7E83B",
    techs: [
      { name: "AWS", icon: SiAmazon, color: "#FF9900" },
    ],
  },
  {
    category: "Version Control",
    accent: "#FFD21C",
    techs: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#090909" },
      { name: "GitLab", icon: SiGitlab, color: "#FC6D26" },
    ],
  },
  {
    category: "Gen AI",
    accent: "#FF3D83",
    techs: [
      { name: "HuggingFace", icon: null, emoji: "🤗", color: "#FF9D00" },
      { name: "LangChain", icon: null, emoji: "🦜", color: "#1C3C3C" },
      { name: "LangGraph", icon: null, emoji: "📊", color: "#090909" },
    ],
  },
];

const TechTile = ({
  name,
  icon: Icon,
  emoji,
  color,
  delay,
  accent,
}: {
  name: string;
  icon: any;
  emoji?: string;
  color: string;
  delay: number;
  accent: string;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3, delay }}
    viewport={{ once: true }}
    className="group flex flex-col items-center gap-2 p-3 rounded-xl border-[2px] border-[#090909] shadow-[3px_3px_0_#090909] transition-all duration-200 hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0_#090909] cursor-default"
    style={{ background: "#FAF8F3" }}
  >
    <div
      className="w-10 h-10 rounded-lg flex items-center justify-center border-[2px] border-[#090909]"
      style={{ background: accent + "22" }}
    >
      {emoji ? (
        <span className="text-xl">{emoji}</span>
      ) : (
        <Icon className="w-6 h-6" style={{ color }} />
      )}
    </div>
    <span className="text-[10px] font-bold uppercase tracking-wide text-[#5B5B5B] group-hover:text-[#090909] transition-colors text-center">
      {name}
    </span>
  </motion.div>
);

export const TechStack = () => {
  return (
    <section id="tech-stack" className="py-24 px-4 sm:px-8" style={{ background: "#F3F0E8" }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="nsha-section-eyebrow">What I work with</p>
          <h2 className="nsha-section-title">
            Tech <span style={{ color: "#35D04F" }}>Stack</span>
          </h2>
          <div
            className="mt-4 h-1.5 w-20 rounded-full border-[2px] border-[#090909]"
            style={{ background: "#35D04F" }}
          />
        </motion.div>

        {/* Category Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: catIndex * 0.08 }}
              viewport={{ once: true }}
              className="rounded-2xl border-[3px] border-[#090909] overflow-hidden"
              style={{ boxShadow: `5px 5px 0 ${category.accent}` }}
            >
              {/* Category header */}
              <div
                className="px-5 py-3 border-b-[3px] border-[#090909] flex items-center gap-2"
                style={{ background: category.accent }}
              >
                <h3 className="font-bold text-sm uppercase tracking-wider text-[#090909]">
                  {category.category}
                </h3>
                <span className="ml-auto text-xs font-bold px-2 py-0.5 rounded-full border-[2px] border-[#090909] bg-[#FAF8F3] text-[#090909]">
                  {category.techs.length}
                </span>
              </div>

              {/* Tech tiles */}
              <div className="p-4" style={{ background: "#FAF8F3" }}>
                <div className="grid grid-cols-4 gap-2">
                  {category.techs.map((tech, techIndex) => (
                    <TechTile
                      key={tech.name + category.category}
                      {...(tech as any)}
                      delay={catIndex * 0.06 + techIndex * 0.04}
                      accent={category.accent}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
