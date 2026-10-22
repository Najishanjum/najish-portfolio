import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, Play, ArrowLeft, ArrowRight, RotateCcw, RotateCw } from "lucide-react";
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
}

const projects: ProjectItem[] = [
  {
    id: "reposync",
    title: "RepoSync",
    category: "AI / DEVELOPER INTELLIGENCE",
    tagline: "AI-Powered GitHub Repository Intelligence & Architecture Blueprinting",
    description: "An automated developer-blueprint dashboard for analyzing public GitHub repositories with health scores, architecture diagrams, and security checks.",
    tags: ["React", "AI-Powered", "GitHub API", "TypeScript"],
    videoUrl: "/Reposync.mp4",
    demoUrl: "https://reposync-beryl.vercel.app",
    githubUrl: "https://github.com/Najishanjum",
  },
  {
    id: "nastack",
    title: "NAStack",
    category: "SYSTEMS / EDUCATION",
    tagline: "Developer Roadmap, Data Structures & Algorithms Tracker",
    description: "A comprehensive developer-centric learning platform built to help engineers master Data Structures, Algorithms, and Core CS with visual progression.",
    tags: ["React", "DSA", "Algorithms", "TypeScript"],
    videoUrl: "/Nastackdemo.mp4",
    demoUrl: "https://nastackmain.vercel.app/",
    githubUrl: "https://github.com/Najishanjum",
  },
  {
    id: "bitezy",
    title: "Bitezy / DinerChain",
    category: "WEB3 / SOLANA PROTOCOL",
    tagline: "Decentralized Restaurant Booking & On-Chain Loyalty Ecosystem",
    description: "A Solana-based dining infrastructure enabling decentralized table reservations, trustless loyalty tokens, and transparent booking payments.",
    tags: ["Solana", "Rust", "Web3", "Smart Contracts"],
    githubUrl: "https://github.com/Najishanjum/Dinerchain-main",
  },
  {
    id: "spacehabitatx",
    title: "Space HabitatX",
    category: "FRONTIER TECH / RESEARCH",
    tagline: "Sustainable Orbital Habitats & Life Support Systems Concept",
    description: "Award-nominated futuristic concept developed for hackathon challenges exploring sustainable extraterrestrial living architectures.",
    tags: ["Concept Engineering", "Systems Design", "React"],
    bgImage: spacehabitatxBg,
    demoUrl: "https://space-habitatx.netlify.app/",
    githubUrl: "https://github.com/Najishanjum",
  },
  {
    id: "routinex",
    title: "Routine X",
    category: "PRODUCTIVITY / SYSTEMS",
    tagline: "Intelligent Habit Orchestration & Daily Optimization Engine",
    description: "High-focus productivity system engineered to break down complex objectives into quantifiable daily execution rituals.",
    tags: ["React", "State Architecture", "UX Engineering"],
    bgImage: routinexBg,
    githubUrl: "https://github.com/Najishanjum",
  },
  {
    id: "shopgenie",
    title: "ShopGenie",
    category: "AI / E-COMMERCE",
    tagline: "Intelligent Recommendation & Conversational Retail Platform",
    description: "Smart e-commerce system leveraging machine learning recommenders and natural language product discovery.",
    tags: ["Django", "Python", "React", "PostgreSQL"],
    bgImage: shopGenieBg,
    githubUrl: "https://github.com/Najishanjum",
  },
  {
    id: "onenation",
    title: "One Nation One Service",
    category: "NATIONAL IMPACT / CIVIC TECH",
    tagline: "Unified Digital India Public & Citizen Services Portal",
    description: "A team innovation initiative unifying essential citizen resources, emergency assistance protocols, and civic grievance resolution.",
    tags: ["Civic Tech", "React", "Full Stack", "Public Infrastructure"],
    demoUrl: "https://allinoneilm.netlify.app/",
    githubUrl: "https://github.com/Najishanjum",
  },
];

export const Projects = () => {
  const [currentPairIndex, setCurrentPairIndex] = useState(0);
  const totalPairs = Math.ceil(projects.length / 2);

  const handlePrev = () => {
    if (currentPairIndex > 0) {
      setCurrentPairIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPairIndex < totalPairs - 1) {
      setCurrentPairIndex((prev) => prev + 1);
    }
  };

  const currentProjects = projects.slice(currentPairIndex * 2, currentPairIndex * 2 + 2);

  return (
    <section id="projects" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#050505] text-white border-t border-[#252830] relative overflow-hidden">
      {/* Background Subtle Ambience */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#246BFD]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Marker */}
        <div className="flex items-center justify-between pb-6 border-b border-[#252830] mb-12 sm:mb-16">
          <span className="editorial-eyebrow">[ 02 // SELECTED WORK ]</span>
          <span className="font-mono text-xs text-[#9A9CA3] uppercase tracking-widest hidden sm:inline-block">
            2 PROJECTS PER SLIDE
          </span>
        </div>

        {/* Section Headline & Navigation Controls Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="editorial-section-title text-white">
              <span>IDEAS INTO</span>
              <br />
              <span className="text-[#246BFD]">REAL PRODUCTS.</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#9A9CA3] max-w-lg font-sans">
              Shipped applications, AI intelligence tools, and Web3 infrastructure displayed in dual-project slides.
            </p>
          </motion.div>

          {/* Undo / Redo / Forward / Backward Navigation Buttons */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs tracking-wider text-[#9A9CA3] mr-2">
              PAIR <strong className="text-white">0{currentPairIndex + 1}</strong> / 0{totalPairs}
            </span>

            {/* Undo / Prev Pair Button */}
            <button
              onClick={handlePrev}
              disabled={currentPairIndex === 0}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl border font-mono text-xs font-semibold tracking-wider transition-all duration-300 ${
                currentPairIndex === 0
                  ? "border-[#252830]/40 text-[#9A9CA3]/30 cursor-not-allowed bg-[#0B0D10]/40"
                  : "border-[#252830] text-white bg-[#0B0D10] hover:border-[#246BFD] hover:bg-[#246BFD]/10 hover:text-[#4D8DFF]"
              }`}
              title="Previous Pair (Undo)"
              aria-label="Previous Pair"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">UNDO / PREV</span>
            </button>

            {/* Redo / Next Pair Button */}
            <button
              onClick={handleNext}
              disabled={currentPairIndex >= totalPairs - 1}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl border font-mono text-xs font-semibold tracking-wider transition-all duration-300 ${
                currentPairIndex >= totalPairs - 1
                  ? "border-[#252830]/40 text-[#9A9CA3]/30 cursor-not-allowed bg-[#0B0D10]/40"
                  : "border-[#246BFD] text-white bg-[#246BFD] hover:bg-[#1D56D1] shadow-[0_0_20px_rgba(36,107,253,0.35)]"
              }`}
              title="Next Pair (Forward)"
              aria-label="Next Pair"
            >
              <span className="hidden sm:inline">NEXT / REDO</span>
              <RotateCw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 2-Project Combination Slide with Compact Boxes */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPairIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          >
            {currentProjects.map((project, idx) => {
              const globalIndex = currentPairIndex * 2 + idx + 1;

              return (
                <article
                  key={project.id}
                  className="rounded-2xl sm:rounded-3xl overflow-hidden border border-[#252830] bg-[#0B0D10] hover:border-[#246BFD]/50 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col group"
                >
                  {/* Reduced Media Box */}
                  <div className="relative rounded-t-2xl sm:rounded-t-3xl overflow-hidden bg-[#050505] aspect-[16/10] border-b border-[#252830]">
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
                        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#050505]/80 backdrop-blur-md border border-[#252830] font-mono text-[9px] text-white uppercase tracking-wider flex items-center gap-1.5">
                          <Play className="w-2.5 h-2.5 text-[#246BFD] fill-current" />
                          <span>PREVIEW</span>
                        </div>
                      </div>
                    ) : project.bgImage ? (
                      <img
                        src={project.bgImage}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#12151B] to-[#050505] text-center">
                        <span className="font-display text-5xl text-white/10 uppercase tracking-widest select-none">
                          {project.title.slice(0, 4)}
                        </span>
                        <span className="font-mono text-[11px] uppercase tracking-widest text-[#246BFD] mt-2">
                          {project.category}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Reduced Card Body */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#4D8DFF]">
                          [ {project.category} ]
                        </span>
                        <span className="font-mono text-xs text-[#9A9CA3]">
                          0{globalIndex}
                        </span>
                      </div>

                      <h3 className="font-display text-2xl sm:text-3xl text-white uppercase tracking-tight group-hover:text-[#4D8DFF] transition-colors">
                        {project.title}
                      </h3>

                      <p className="font-sans font-medium text-xs sm:text-sm text-[#F7F7F7] leading-snug">
                        {project.tagline}
                      </p>

                      <p className="text-xs text-[#9A9CA3] leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#252830]/60 space-y-3">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md border bg-[#12151B] border-[#252830] text-[#9A9CA3]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="flex items-center gap-2 pt-1">
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="editorial-btn-primary text-xs py-2 px-3.5 group/btn"
                          >
                            <span>LIVE DEMO</span>
                            <ArrowUpRight className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                          </a>
                        )}

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider py-2 px-3.5 rounded-[12px] border bg-[#12151B] text-white border-[#252830] hover:border-[#246BFD] hover:text-[#4D8DFF] transition-all"
                          >
                            <Github className="w-3.5 h-3.5" />
                            <span>CODE</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Pair Quick Selector Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: totalPairs }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPairIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentPairIndex === i ? "w-8 bg-[#246BFD]" : "w-2 bg-[#252830] hover:bg-[#9A9CA3]"
              }`}
              aria-label={`Jump to Pair ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
