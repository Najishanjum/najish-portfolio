import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, Play, Sparkles } from "lucide-react";
import shopGenieBg from "@/assets/shopgenie-bg.webp";
import routinexBg from "@/assets/routinex-bg.jpg";
import spacehabitatxBg from "@/assets/spacehabitatx-bg.jpg";

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  tags: string[];
  videoUrl?: string;
  bgImage?: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  accentSurface?: "dark" | "light";
}

const projects: ProjectItem[] = [
  {
    id: "reposync",
    title: "RepoSync",
    category: "AI / DEVELOPER INTELLIGENCE",
    tagline: "AI-Powered GitHub Repository Intelligence & Architecture Blueprinting",
    description: "An automated developer-blueprint dashboard for analyzing public GitHub repositories. Features AI-powered project health scores, system architecture visualization, file explorer with dependency graphs, and automated security vulnerability checks.",
    tags: ["React", "AI-Powered", "GitHub API", "TypeScript", "TailwindCSS"],
    videoUrl: "/Reposync.mp4",
    demoUrl: "https://reposync-beryl.vercel.app",
    githubUrl: "https://github.com/Najishanjum",
    featured: true,
    accentSurface: "dark",
  },
  {
    id: "nastack",
    title: "NAStack",
    category: "SYSTEMS / EDUCATION",
    tagline: "Developer Roadmap, Data Structures & Algorithms Tracker",
    description: "A comprehensive developer-centric learning platform built to help engineers master Data Structures, Algorithms, and Core Computer Science concepts with visual progression, code playgrounds, and structured revision paths.",
    tags: ["React", "DSA", "Algorithms", "Web Performance", "TypeScript"],
    videoUrl: "/Nastackdemo.mp4",
    demoUrl: "https://nastackmain.vercel.app/",
    githubUrl: "https://github.com/Najishanjum",
    featured: true,
    accentSurface: "light",
  },
  {
    id: "bitezy",
    title: "Bitezy / DinerChain",
    category: "WEB3 / SOLANA PROTOCOL",
    tagline: "Decentralized Restaurant Booking & On-Chain Loyalty Ecosystem",
    description: "A Solana-based dining infrastructure enabling decentralized table reservations, trustless loyalty tokens, and verifiable transparent booking payments without predatory middleman platform fees.",
    tags: ["Solana", "Rust", "Web3", "Smart Contracts", "React"],
    githubUrl: "https://github.com/Najishanjum/Dinerchain-main",
    featured: false,
    accentSurface: "dark",
  },
  {
    id: "spacehabitatx",
    title: "Space HabitatX",
    category: "FRONTIER TECH / RESEARCH",
    tagline: "Sustainable Orbital Habitats & Life Support Systems Concept",
    description: "Award-nominated futuristic concept developed for hackathon challenges exploring sustainable extraterrestrial living architectures, renewable life-support loops, and orbital space ecosystem monitoring.",
    tags: ["Concept Engineering", "Systems Design", "React", "3D / UI"],
    bgImage: spacehabitatxBg,
    demoUrl: "https://space-habitatx.netlify.app/",
    githubUrl: "https://github.com/Najishanjum",
    featured: false,
    accentSurface: "dark",
  },
  {
    id: "routinex",
    title: "Routine X",
    category: "PRODUCTIVITY / SYSTEMS",
    tagline: "Intelligent Habit Orchestration & Daily Optimization Engine",
    description: "High-focus productivity system engineered to help students and developers break down complex objectives into quantifiable daily execution rituals with seamless task scheduling.",
    tags: ["React", "State Architecture", "UX Engineering", "TailwindCSS"],
    bgImage: routinexBg,
    githubUrl: "https://github.com/Najishanjum",
    featured: false,
    accentSurface: "light",
  },
  {
    id: "shopgenie",
    title: "ShopGenie",
    category: "AI / E-COMMERCE",
    tagline: "Intelligent Recommendation & Conversational Retail Platform",
    description: "Smart e-commerce system leveraging machine learning recommenders and natural language product discovery to deliver personalized consumer shopping journeys.",
    tags: ["Django", "Python", "React", "PostgreSQL", "ML Recommender"],
    bgImage: shopGenieBg,
    githubUrl: "https://github.com/Najishanjum",
    featured: false,
    accentSurface: "dark",
  },
  {
    id: "onenation",
    title: "One Nation One Service",
    category: "NATIONAL IMPACT / CIVIC TECH",
    tagline: "Unified Digital India Public & Citizen Services Portal",
    description: "A team innovation initiative unifying essential citizen resources, emergency assistance protocols, and civic grievance resolution into a single intuitive portal.",
    tags: ["Civic Tech", "React", "Full Stack", "Public Infrastructure"],
    demoUrl: "https://allinoneilm.netlify.app/",
    githubUrl: "https://github.com/Najishanjum",
    featured: false,
    accentSurface: "dark",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#050505] text-white border-t border-[#252830] relative overflow-hidden">
      {/* Background Subtle Ambience */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#246BFD]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Marker */}
        <div className="flex items-center justify-between pb-6 border-b border-[#252830] mb-12 sm:mb-16">
          <span className="editorial-eyebrow">[ 02 // SELECTED WORK ]</span>
          <span className="font-mono text-xs text-[#9A9CA3] uppercase tracking-widest hidden sm:inline-block">
            REAL-WORLD PRODUCTS &amp; REPOSITORIES
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
            <span>IDEAS INTO</span>
            <br />
            <span className="text-[#246BFD]">REAL PRODUCTS.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#9A9CA3] max-w-xl font-sans">
            A curated selection of shipped applications, developer tools, and Web3 protocols built with performance, usability, and scale in mind.
          </p>
        </motion.div>

        {/* Large Alternating Feature Panels */}
        <div className="space-y-12 sm:space-y-16">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            const isLightCard = project.accentSurface === "light";

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`rounded-[28px] sm:rounded-[36px] overflow-hidden border transition-all duration-300 ${
                  isLightCard
                    ? "bg-[#FFFFFF] text-[#08090B] border-[#E2E4E9] shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
                    : "bg-[#0B0D10] text-white border-[#252830] hover:border-[#246BFD]/50 shadow-[0_15px_40px_rgba(0,0,0,0.4)]"
                }`}
              >
                <div className="p-6 sm:p-10 lg:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Media Column (Left if even, Right if odd on large screens) */}
                    <div
                      className={`lg:col-span-7 ${
                        isEven ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#252830] bg-[#050505] aspect-video group">
                        {project.videoUrl ? (
                          <div className="relative w-full h-full">
                            <video
                              src={project.videoUrl}
                              autoPlay
                              loop
                              muted
                              playsInline
                              preload="metadata"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#050505]/80 backdrop-blur-md border border-[#252830] font-mono text-[10px] text-white uppercase tracking-wider flex items-center gap-1.5">
                              <Play className="w-2.5 h-2.5 text-[#246BFD] fill-current" />
                              <span>LIVE PREVIEW</span>
                            </div>
                          </div>
                        ) : project.bgImage ? (
                          <img
                            src={project.bgImage}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#12151B] to-[#050505] text-center">
                            <span className="font-display text-7xl text-white/10 uppercase tracking-widest select-none">
                              {project.title.slice(0, 4)}
                            </span>
                            <span className="font-mono text-xs uppercase tracking-widest text-[#246BFD] mt-2">
                              {project.category}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Content Column */}
                    <div
                      className={`lg:col-span-5 space-y-6 ${
                        isEven ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      {/* Eyebrow Category */}
                      <div className="flex items-center justify-between">
                        <span
                          className={`font-mono text-xs font-semibold uppercase tracking-widest ${
                            isLightCard ? "text-[#246BFD]" : "text-[#4D8DFF]"
                          }`}
                        >
                          [ {project.category} ]
                        </span>
                        <span
                          className={`font-mono text-xs ${
                            isLightCard ? "text-[#6B7280]" : "text-[#9A9CA3]"
                          }`}
                        >
                          0{index + 1}
                        </span>
                      </div>

                      {/* Project Name & Tagline */}
                      <div>
                        <h3
                          className={`font-display text-3xl sm:text-4xl uppercase tracking-tight ${
                            isLightCard ? "text-[#08090B]" : "text-white"
                          }`}
                        >
                          {project.title}
                        </h3>
                        <p
                          className={`font-sans font-medium text-sm sm:text-base mt-2 leading-snug ${
                            isLightCard ? "text-[#1F2937]" : "text-[#F7F7F7]"
                          }`}
                        >
                          {project.tagline}
                        </p>
                      </div>

                      {/* Outcome Description */}
                      <p
                        className={`text-sm leading-relaxed ${
                          isLightCard ? "text-[#4B5563]" : "text-[#9A9CA3]"
                        }`}
                      >
                        {project.description}
                      </p>

                      {/* Technology Chips */}
                      <div className="flex flex-wrap gap-2 pt-1">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-md border ${
                              isLightCard
                                ? "bg-[#F3F4F6] border-[#E5E7EB] text-[#374151]"
                                : "bg-[#12151B] border-[#252830] text-[#9A9CA3]"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Interactive Buttons */}
                      <div className="flex flex-wrap items-center gap-3 pt-3">
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="editorial-btn-primary text-xs py-3 px-5 group"
                          >
                            <span>LIVE DEMO</span>
                            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </a>
                        )}

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider py-3 px-5 rounded-[14px] border transition-all ${
                              isLightCard
                                ? "bg-[#08090B] text-white border-[#08090B] hover:bg-[#246BFD] hover:border-[#246BFD]"
                                : "bg-[#12151B] text-white border-[#252830] hover:border-[#246BFD] hover:text-[#4D8DFF]"
                            }`}
                          >
                            <Github className="w-3.5 h-3.5" />
                            <span>CODE</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
