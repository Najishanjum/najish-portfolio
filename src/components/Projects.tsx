import { motion } from "framer-motion";
import { ExternalLink, Github, Rocket, Minus, Square, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import shopGenieBg from "@/assets/shopgenie-bg.webp";
import routinexBg from "@/assets/routinex-bg.jpg";
import nastackBg from "@/assets/nastack-bg.jpg";
import spacehabitatxBg from "@/assets/spacehabitatx-bg.jpg";

const projects = [
  {
    title: "Space HabitatX",
    description: "Concept-based futuristic project focused on space living and sustainable habitats with innovation and advanced technology.",
    tags: ["Innovation", "Future Tech", "Research", "Systems"],
    bgImage: spacehabitatxBg,
    demoUrl: "https://space-habitatx.netlify.app/",
  },
  {
    title: "Routine X",
    description: "Productivity & routine management system helping users build daily habits, track tasks, and optimize routines.",
    tags: ["Productivity", "React", "User-Centric", "Design"],
    bgImage: routinexBg,
  },
  {
    title: "NAStack",
    description: "Tech-focused stack/project related to development and systems, representing developer mindset and technical foundation.",
    tags: ["Development", "DSA", "Algorithms", "Tech Stack"],
    bgImage: nastackBg,
  },
  {
    title: "CareCall24on",
    description: "24/7 healthcare emergency response with AI triage and instant assistance.",
    tags: ["React", "Node.js", "Firebase", "AI"],
  },
  {
    title: "ShopGenie",
    description: "Smart e-commerce platform with AI recommendations and personalized shopping experience.",
    tags: ["Django", "React", "PostgreSQL", "Machine Learning"],
    bgImage: shopGenieBg,
  },
  {
    title: "Mental Health AI Detector",
    description: "NLP-powered mental health screening system with early detection and AI-driven support.",
    tags: ["NLP", "TensorFlow", "React", "Express"],
  },
  {
    title: "One Nation One Service",
    description: "Innovation-driven Digital India initiative unifying public, social, and smart services into one national platform.",
    tags: ["Innovation", "AI Systems", "Public Services", "National Impact"],
    demoUrl: "https://allinoneilm.netlify.app/",
  },
];

const BrowserCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
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
          {/* Browser controls */}
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
              projects.dir/{project.title.toLowerCase().replace(/\s+/g, "-")}
            </span>
          </div>
        </div>

        {/* Card body */}
        <div className="p-5 space-y-4">
          {/* Project preview image */}
          {project.bgImage && (
            <div className="w-full h-36 rounded-lg overflow-hidden border-2 border-[hsl(220,15%,20%)]">
              <img
                src={project.bgImage}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          )}

          {/* No image placeholder */}
          {!project.bgImage && (
            <div className="w-full h-36 rounded-lg overflow-hidden border-2 border-[hsl(220,15%,20%)] bg-gradient-to-br from-[hsl(320,100%,65%/0.15)] to-[hsl(50,100%,60%/0.1)] flex items-center justify-center">
              <span className="text-4xl font-mono font-bold text-[hsl(50,100%,60%/0.4)]">
                {"</>"}
              </span>
            </div>
          )}

          {/* Title */}
          <h3 className="text-xl font-bold font-mono text-[hsl(50,100%,60%)] group-hover:text-[hsl(320,100%,65%)] transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-[10px] font-mono font-semibold uppercase tracking-wider bg-[hsl(320,100%,65%/0.15)] text-[hsl(320,100%,70%)] border border-[hsl(320,100%,65%/0.3)] rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-1">
            <Button
              size="sm"
              className="bg-[hsl(220,25%,6%)] text-[hsl(50,100%,60%)] border-2 border-[hsl(50,100%,60%)] hover:bg-[hsl(50,100%,60%)] hover:text-[hsl(220,25%,6%)] font-mono font-bold text-xs transition-all duration-200 active:scale-95"
            >
              <Github className="mr-1.5 h-3.5 w-3.5" />
              Code
            </Button>
            <Button
              size="sm"
              asChild={!!project.demoUrl}
              disabled={!project.demoUrl}
              className="bg-[hsl(320,100%,55%)] text-[hsl(220,25%,6%)] border-2 border-[hsl(220,25%,6%)] hover:bg-[hsl(320,100%,70%)] font-mono font-bold text-xs transition-all duration-200 active:scale-95"
            >
              {project.demoUrl ? (
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                  Demo
                </a>
              ) : (
                <>
                  <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                  Demo
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-4 relative overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(hsl(320 100% 40% / 0.08) 1px, transparent 1px), linear-gradient(90deg, hsl(320 100% 40% / 0.08) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    >
      {/* Decorative floating elements */}
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
        💻
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
              <Rocket className="w-9 h-9 text-[hsl(50,100%,60%)]" />
              <span
                className="text-foreground"
                style={{
                  textShadow:
                    "0 0 10px hsl(50 100% 60% / 0.4), 0 0 20px hsl(320 100% 65% / 0.2)",
                }}
              >
                PROJECTS
              </span>
              <span className="text-[hsl(320,100%,65%)]">.DIR</span>
            </h2>
          </motion.div>
          <div className="mt-3 h-1 w-24 mx-auto bg-gradient-to-r from-[hsl(50,100%,60%)] to-[hsl(320,100%,65%)] rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <BrowserCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
