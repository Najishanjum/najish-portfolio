import { motion } from "framer-motion";
import { SiHtml5, SiCss3, SiTailwindcss, SiJavascript, SiReact, SiNodedotjs, SiExpress, SiDjango, SiMongodb, SiPostgresql, SiMysql, SiAmazon, SiCplusplus, SiPython, SiTypescript, SiGit, SiGithub, SiGitlab } from "react-icons/si";

const techStack = {
  frontend: [
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS3", icon: SiCss3, color: "#1572B6" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "React", icon: SiReact, color: "#61DAFB" }
  ],
  backend: [
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Express", icon: SiExpress, color: "#FFFFFF" },
    { name: "Django", icon: SiDjango, color: "#092E20" }
  ],
  databases: [
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" }
  ],
  devops: [
    { name: "AWS", icon: SiAmazon, color: "#FF9900" }
  ],
  versionControl: [
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
    { name: "GitLab", icon: SiGitlab, color: "#FC6D26" }
  ],
  languages: [
    { name: "C++", icon: SiCplusplus, color: "#00599C" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" }
  ]
};

const TechItem = ({ name, icon: Icon, color, delay }: { name: string; icon: any; color: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3, delay }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.1, y: -5 }}
    className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card/30 border border-border/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 group cursor-default"
  >
    <Icon className="w-10 h-10 transition-colors duration-300" style={{ color }} />
    <span className="text-xs font-mono text-muted-foreground group-hover:text-foreground transition-colors">
      {name}
    </span>
  </motion.div>
);

export const TechStack = () => {
  return (
    <section id="techstack" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Section Header */}
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-gradient font-mono">Tech stack.</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan rounded-full" />
          </div>

          {/* Grid Layout */}
          <div className="grid md:grid-cols-2 gap-8 border-t border-border/50 pt-8">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Frontend */}
              <div>
                <h3 className="text-xl font-semibold font-mono mb-4 text-foreground">Frontend</h3>
                <div className="grid grid-cols-4 gap-3">
                  {techStack.frontend.map((tech, index) => (
                    <TechItem key={tech.name} {...tech} delay={index * 0.05} />
                  ))}
                </div>
              </div>

              {/* Databases */}
              <div>
                <h3 className="text-xl font-semibold font-mono mb-4 text-foreground">Databases</h3>
                <div className="grid grid-cols-4 gap-3">
                  {techStack.databases.map((tech, index) => (
                    <TechItem key={tech.name} {...tech} delay={0.35 + index * 0.05} />
                  ))}
                </div>
              </div>

              {/* DevOps */}
              <div>
                <h3 className="text-xl font-semibold font-mono mb-4 text-foreground">DevOps</h3>
                <div className="grid grid-cols-4 gap-3">
                  {techStack.devops.map((tech, index) => (
                    <TechItem key={tech.name} {...tech} delay={0.55 + index * 0.05} />
                  ))}
                </div>
              </div>

              {/* Version Control */}
              <div>
                <h3 className="text-xl font-semibold font-mono mb-4 text-foreground">Version Control</h3>
                <div className="grid grid-cols-4 gap-3">
                  {techStack.versionControl.map((tech, index) => (
                    <TechItem key={tech.name} {...tech} delay={0.6 + index * 0.05} />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Backend */}
              <div>
                <h3 className="text-xl font-semibold font-mono mb-4 text-foreground">Backend</h3>
                <div className="grid grid-cols-4 gap-3">
                  {techStack.backend.map((tech, index) => (
                    <TechItem key={tech.name + 'backend'} {...tech} delay={0.2 + index * 0.05} />
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div>
                <h3 className="text-xl font-semibold font-mono mb-4 text-foreground">Languages</h3>
                <div className="grid grid-cols-4 gap-3">
                  {techStack.languages.map((tech, index) => (
                    <TechItem key={tech.name + 'lang'} {...tech} delay={0.45 + index * 0.05} />
                  ))}
                </div>
              </div>

              {/* Gen AI */}
              <div>
                <h3 className="text-xl font-semibold font-mono mb-4 text-foreground">Gen AI</h3>
                <div className="grid grid-cols-4 gap-3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.65 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card/30 border border-border/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 group cursor-default"
                  >
                    <span className="text-2xl">🤗</span>
                    <span className="text-xs font-mono text-muted-foreground group-hover:text-foreground transition-colors">
                      HuggingFace
                    </span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.7 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card/30 border border-border/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 group cursor-default"
                  >
                    <span className="text-2xl">🦜</span>
                    <span className="text-xs font-mono text-muted-foreground group-hover:text-foreground transition-colors">
                      LangChain
                    </span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.75 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card/30 border border-border/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 group cursor-default"
                  >
                    <span className="text-2xl">📊</span>
                    <span className="text-xs font-mono text-muted-foreground group-hover:text-foreground transition-colors">
                      LangGraph
                    </span>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
