import { motion } from "framer-motion";
import { ExternalLink, Github, Minus, Square, X } from "lucide-react";
import shopGenieBg from "@/assets/shopgenie-bg.webp";
import routinexBg from "@/assets/routinex-bg.jpg";
import spacehabitatxBg from "@/assets/spacehabitatx-bg.jpg";

const projects = [
  {
    title: "RepoSync",
    description: "A developer-blueprint dashboard for analyzing public GitHub repositories — featuring AI-powered project overviews, health scores, blueprint generation, file exploration, dependency analysis, and security scanning.",
    tags: ["React", "AI-Powered", "GitHub API", "Developer Tools"],
    videoUrl: "/Reposync.mp4",
    demoUrl: "https://reposync-beryl.vercel.app",
    accent: "#FFD21C",
    featured: true,
  },
  {
    title: "Space HabitatX",
    description: "Concept-based futuristic project focused on space living and sustainable habitats with innovation and advanced technology.",
    tags: ["Innovation", "Future Tech", "Research", "Systems"],
    bgImage: spacehabitatxBg,
    demoUrl: "https://space-habitatx.netlify.app/",
    accent: "#7557F7",
  },
  {
    title: "Routine X",
    description: "Productivity & routine management system helping users build daily habits, track tasks, and optimize routines.",
    tags: ["Productivity", "React", "User-Centric", "Design"],
    bgImage: routinexBg,
    accent: "#FF3D83",
  },
  {
    title: "NAStack",
    description: "Tech-focused stack/project related to development and systems, representing developer mindset and technical foundation.",
    tags: ["Development", "DSA", "Algorithms", "Tech Stack"],
    videoUrl: "/Nastackdemo.mp4",
    demoUrl: "https://nastackmain.vercel.app/",
    accent: "#35D04F",
  },
  {
    title: "CareCall24on",
    description: "24/7 healthcare emergency response with AI triage and instant assistance.",
    tags: ["React", "Node.js", "Firebase", "AI"],
    accent: "#B7E83B",
  },
  {
    title: "ShopGenie",
    description: "Smart e-commerce platform with AI recommendations and personalized shopping experience.",
    tags: ["Django", "React", "PostgreSQL", "Machine Learning"],
    bgImage: shopGenieBg,
    accent: "#FFD21C",
  },
  {
    title: "Mental Health AI Detector",
    description: "NLP-powered mental health screening system with early detection and AI-driven support.",
    tags: ["NLP", "TensorFlow", "React", "Express"],
    accent: "#7557F7",
  },
  {
    title: "One Nation One Service",
    description: "Innovation-driven Digital India initiative unifying public, social, and smart services into one national platform.",
    tags: ["Innovation", "AI Systems", "Public Services", "National Impact"],
    demoUrl: "https://allinoneilm.netlify.app/",
    accent: "#FF3D83",
  },
  {
    title: "Bitezy",
    description: "A Solana-based restaurant booking ecosystem powered by blockchain — enabling decentralized table reservations, loyalty rewards, and transparent restaurant operations.",
    tags: ["Solana", "Blockchain", "Web3", "Restaurant Tech"],
    githubUrl: "https://github.com/Najishanjum/Dinerchain-main",
    accent: "#35D04F",
  },
];

const tagColors = [
  { bg: "#FFD21C", text: "#090909" },
  { bg: "#FF3D83", text: "#fff" },
  { bg: "#7557F7", text: "#fff" },
  { bg: "#35D04F", text: "#090909" },
  { bg: "#B7E83B", text: "#090909" },
  { bg: "#090909", text: "#FAF8F3" },
];

function getTagColor(tag: string) {
  let hash = 0;
  for (let i = 0; i < tag.length; i++) hash = (hash + tag.charCodeAt(i)) % tagColors.length;
  return tagColors[hash];
}

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      viewport={{ once: true }}
      className="group relative"
    >
      {/* Offset shadow */}
      <div
        className="absolute inset-0 translate-x-[6px] translate-y-[6px] rounded-2xl border-[3px] border-[#090909]"
        style={{ background: project.accent }}
      />
      {/* Main card */}
      <div
        className="relative rounded-2xl border-[3px] border-[#090909] overflow-hidden transition-transform duration-200 group-hover:translate-x-[-2px] group-hover:translate-y-[-2px]"
        style={{ background: "#FAF8F3" }}
      >
        {/* Browser top bar */}
        <div
          className="px-4 py-2.5 flex items-center gap-2 border-b-[3px] border-[#090909]"
          style={{ background: project.accent }}
        >
          <div className="flex items-center gap-1.5">
            <span className="w-3.5 h-3.5 rounded-full bg-[#FF5F57] border-2 border-[#090909] flex items-center justify-center">
              <X className="w-2 h-2 text-[#090909]" />
            </span>
            <span className="w-3.5 h-3.5 rounded-full bg-[#FFBD44] border-2 border-[#090909] flex items-center justify-center">
              <Minus className="w-2 h-2 text-[#090909]" />
            </span>
            <span className="w-3.5 h-3.5 rounded-full bg-[#28CA41] border-2 border-[#090909] flex items-center justify-center">
              <Square className="w-1.5 h-1.5 text-[#090909]" />
            </span>
          </div>
          <div
            className="flex-1 mx-2 rounded-md px-3 py-0.5 border-[2px] border-[#090909]"
            style={{ background: "#FAF8F3" }}
          >
            <span className="text-[10px] font-bold text-[#090909] truncate block font-mono">
              najish.dev/{project.title.toLowerCase().replace(/\s+/g, "-")}
            </span>
          </div>
        </div>

        {/* Card body */}
        <div className="p-5 space-y-3">
          {/* Media preview */}
          {project.videoUrl && (
            <div className="w-full h-36 rounded-xl overflow-hidden border-[2px] border-[#090909]">
              <video
                src={project.videoUrl}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          )}
          {!project.videoUrl && project.bgImage && (
            <div className="w-full h-36 rounded-xl overflow-hidden border-[2px] border-[#090909]">
              <img
                src={project.bgImage}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          )}
          {!project.videoUrl && !project.bgImage && (
            <div
              className="w-full h-36 rounded-xl overflow-hidden border-[2px] border-[#090909] flex items-center justify-center"
              style={{ background: project.accent + "22" }}
            >
              <span
                className="text-5xl font-display font-black opacity-30"
                style={{ color: project.accent }}
              >
                {project.title.charAt(0)}
              </span>
            </div>
          )}

          {/* Title */}
          <h3
            className="text-lg font-bold leading-tight"
            style={{ color: "#090909", letterSpacing: "-0.01em" }}
          >
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm leading-relaxed line-clamp-3" style={{ color: "#5B5B5B" }}>
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => {
              const c = getTagColor(tag);
              return (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-md border-[2px] border-[#090909]"
                  style={{ background: c.bg, color: c.text }}
                >
                  {tag}
                </span>
              );
            })}
          </div>

          {/* Action buttons */}
          <div className="flex gap-2 pt-1">
            <a
              href={project.githubUrl || undefined}
              target="_blank"
              rel="noopener noreferrer"
              aria-disabled={!project.githubUrl}
              tabIndex={project.githubUrl ? 0 : -1}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg border-[2px] border-[#090909] shadow-[2px_2px_0_#090909] transition-all duration-150 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none ${
                !project.githubUrl ? "opacity-40 pointer-events-none" : ""
              }`}
              style={{ background: "#090909", color: "#FFD21C" }}
            >
              <Github className="w-3.5 h-3.5" />
              Code
            </a>
            <a
              href={project.demoUrl || undefined}
              target="_blank"
              rel="noopener noreferrer"
              aria-disabled={!project.demoUrl}
              tabIndex={project.demoUrl ? 0 : -1}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg border-[2px] border-[#090909] shadow-[2px_2px_0_#090909] transition-all duration-150 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none ${
                !project.demoUrl ? "opacity-40 pointer-events-none" : ""
              }`}
              style={{ background: project.accent, color: "#090909" }}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Demo
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 sm:px-8" style={{ background: "#F3F0E8" }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="nsha-section-eyebrow">What I've built</p>
          <h2 className="nsha-section-title">
            My <span style={{ color: "#FF3D83" }}>Projects</span>
          </h2>
          <div
            className="mt-4 h-1.5 w-20 rounded-full border-[2px] border-[#090909]"
            style={{ background: "#FF3D83" }}
          />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
