import { useState } from "react";

interface FeaturedProject {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  description: string;
  achievement: string;
  tags: string[];
  github?: string;
  live?: string;
  image: string;
  year: string;
}

interface ShelfProject {
  code: string;
  title: string;
  description: string;
  tag: string;
  status: "live" | "award" | "wip";
  link?: string;
  stack: string;
}

const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: "holdmint",
    num: "01",
    title: "HOLDMINT",
    subtitle: "Decentralized Time-Locked DeFi Vault Protocol",
    description:
      "A trustless crypto vault platform designed for discipline and asset preservation. Users lock tokens into verifiable smart contracts with customized unlocks, multi-sig recovery, and real-time yield compounding.",
    achievement: "WINNER · MONAD BLITZ HACKATHON 2026",
    tags: ["Solidity", "Foundry", "Next.js", "Wagmi", "Tailwind CSS"],
    github: "https://github.com/Najishanjum",
    live: "https://github.com/Najishanjum",
    image: "/images/na-3d-logo.jpg",
    year: "2026",
  },
  {
    id: "reposync",
    num: "02",
    title: "REPOSYNC",
    subtitle: "Autonomous AI Codebase Intelligence & Agentic Summarizer",
    description:
      "Ingests massive GitHub repositories, parses AST hierarchies, and generates semantic vector indices. Developers can query architecture, trace call graphs, and get instant explanations through an interactive chat interface.",
    achievement: "FEATURED PRODUCTION TOOL · 1,200+ REPOS INDEXED",
    tags: ["Next.js", "FastAPI", "LangChain", "Pinecone", "OpenAI"],
    github: "https://github.com/Najishanjum/RepoSync",
    live: "https://github.com/Najishanjum/RepoSync",
    image: "/images/najish-profile.jpeg",
    year: "2025",
  },
  {
    id: "space-habitatx",
    num: "03",
    title: "SPACE HABITATX",
    subtitle: "Autonomous Space Colony Life Support Simulation",
    description:
      "A real-time 3D simulation of closed-loop ecological life support systems on Mars. Models atmospheric scrubbers, hydro-crop yields, and power distribution with telemetry visualization.",
    achievement: "GLOBAL NOMINEE · NASA SPACE APPS CHALLENGE",
    tags: ["Three.js", "React", "WebGL", "Python", "Docker"],
    github: "https://github.com/Najishanjum",
    live: "https://github.com/Najishanjum",
    image: "/images/devcon8-india.jpg",
    year: "2024",
  },
];

const SHELF_PROJECTS: ShelfProject[] = [
  {
    code: "A1",
    title: "CAMPUSMART",
    description: "Reel-based campus marketplace with real-time peer-to-peer buying and selling.",
    tag: "2ND RUNNER-UP · TIT SRIJAN",
    status: "award",
    link: "https://github.com/Najishanjum",
    stack: "REACT · NODE.JS · MONGODB",
  },
  {
    code: "A2",
    title: "FINNEXT",
    description: "Multi-agent AI finance platform built on seven collaborative specialist agents.",
    tag: "TOP 6 FINALIST · BUILDATHON LNCT",
    status: "award",
    link: "https://github.com/Najishanjum",
    stack: "LANGGRAPH · FASTAPI · NEXT.JS",
  },
  {
    code: "A3",
    title: "DEVCON 8 APP",
    description: "Official community builder passport and volunteer logistics suite for Devcon 8 India.",
    tag: "VOLUNTEER LEAD BUILD",
    status: "live",
    link: "https://github.com/Najishanjum",
    stack: "TYPESCRIPT · NEXT.JS · TAILWIND",
  },
  {
    code: "A4",
    title: "CI/CD RUNNER",
    description: "A self-hosted lightweight GitHub Actions worker, built to master Go and Linux containers.",
    tag: "IN PROGRESS",
    status: "wip",
    link: "https://github.com/Najishanjum",
    stack: "GOLANG · DOCKER · BASH",
  },
  {
    code: "A5",
    title: "SOLANA ESCROW",
    description: "Non-custodial milestone-based multi-sig escrow protocol deployed on Solana devnet.",
    tag: "SOLANA FRONTIER HACKATHON",
    status: "award",
    link: "https://github.com/Najishanjum",
    stack: "ANCHOR · RUST · WEB3.JS",
  },
  {
    code: "A6",
    title: "MEDISYNC AI",
    description: "Edge-quantized clinical diagnostics assistant for rural healthcare triage.",
    tag: "IIT BOMBAY FINALIST",
    status: "award",
    link: "https://github.com/Najishanjum",
    stack: "PYTORCH · FASTAPI · REACT",
  },
];

export const Chapter02Projects = () => {
  const [activeShelf, setActiveShelf] = useState<string>("A3");

  return (
    <section id="chapter-02" className="relative py-20 md:py-28 border-b border-[#C9C5BC]">
      {/* Chapter Index Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[#C9C5BC] text-xs font-mono-tech text-[#77736C]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D12626]"></span>
            <span className="font-mincho text-[#D12626] font-semibold">第二章</span>
            <span>// CHAPTER 02 — SELECTED WORK</span>
          </div>
          <span>ARCHIVE INDEX // 06 VOLUMES</span>
        </div>

        {/* Section Heading */}
        <div className="pt-10 pb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="text-xs font-mono-tech text-[#D12626] uppercase tracking-widest font-bold">
              PORTFOLIO OF RECORD
            </div>
            <h2 className="font-anton text-5xl sm:text-6xl md:text-7xl text-[#191919] uppercase leading-none mt-2">
              SELECTED WORK
            </h2>
          </div>
          <p className="font-serif-editorial text-xl sm:text-2xl text-[#77736C] italic max-w-md">
            "Code that lives in production, solves real problems, and handles real human users."
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="space-y-16 lg:space-y-24">
          {FEATURED_PROJECTS.map((proj, idx) => (
            <div
              key={proj.id}
              className="border-t-2 border-[#191919] pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group"
            >
              {/* Left Column: Number, Title, Achievement */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono-tech text-[#77736C]">
                  <span className="text-3xl sm:text-4xl font-anton text-[#191919] group-hover:text-[#D12626] transition-colors">
                    {proj.num}
                  </span>
                  <span>RELEASED {proj.year}</span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-anton text-3xl sm:text-4xl md:text-5xl text-[#191919] uppercase tracking-tight">
                    {proj.title}
                  </h3>
                  <p className="font-serif-editorial text-lg text-[#77736C] italic">
                    {proj.subtitle}
                  </p>
                </div>

                {/* Achievement Badge */}
                <div className="inline-block px-3 py-1 bg-[#D12626] text-[#F0EDE5] text-[11px] font-mono-tech font-bold uppercase tracking-wider">
                  {proj.achievement}
                </div>

                {/* Description */}
                <p className="text-sm font-archivo text-[#191919]/90 leading-relaxed pt-2">
                  {proj.description}
                </p>

                {/* Tech Pills */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[11px] font-mono-tech bg-[#EDEAE2] border border-[#C9C5BC] text-[#191919]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="pt-4 flex items-center gap-4 text-xs font-mono-tech uppercase font-bold">
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[#191919] hover:text-[#D12626] underline decoration-1 underline-offset-4"
                    >
                      <span>SOURCE CODE</span>
                      <span>↗</span>
                    </a>
                  )}
                  {proj.live && (
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[#D12626] hover:text-[#191919] underline decoration-1 underline-offset-4"
                    >
                      <span>LIVE DEMO</span>
                      <span>→</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column: Visual Frame */}
              <div className="lg:col-span-7">
                <div className="relative border-2 border-[#191919] bg-[#141414] overflow-hidden shadow-[6px_6px_0px_0px_#191919] group-hover:shadow-[10px_10px_0px_0px_#D12626] transition-all duration-300">
                  <div className="aspect-[16/10] relative overflow-hidden bg-[#1F1F1F]">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover object-center grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-102 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-60"></div>
                  </div>

                  {/* Frame caption */}
                  <div className="p-3 bg-[#141414] border-t border-[#2E2E2E] flex items-center justify-between text-[11px] font-mono-tech text-[#F0EDE5]">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D12626]"></span>
                      FIGURE 0{idx + 1} // ARCHIVAL SYSTEM CAPTURE
                    </span>
                    <span className="text-[#9E9A92]">STATUS: VERIFIED</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ============================================================
            ALSO ON THE SHELF — BOOK DRAWER ARCHIVE (Screenshot 4 replica)
            ============================================================ */}
        <div className="mt-24 pt-16 border-t-2 border-[#191919]">
          {/* Shelf Section Title & Book Spines Graphic */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8">
            <div>
              <div className="text-[11px] font-mono-tech uppercase tracking-widest text-[#77736C]">
                ALSO ON THE SHELF
              </div>
              <h3 className="font-serif-editorial text-3xl sm:text-4xl text-[#191919] mt-1">
                Every project as a volume.{" "}
                <span className="italic text-[#D12626]">Pull one out.</span>
              </h3>
            </div>

            {/* Stylized Book Spines Graphic (Top Right of Screenshot 4) */}
            <div className="flex items-end gap-1 select-none pointer-events-none self-start lg:self-end">
              {[
                { id: "01", label: "REPOSYNC", color: "bg-[#F0EDE5] text-[#191919]" },
                { id: "02", label: "HOLDMINT", color: "bg-[#D12626] text-[#F0EDE5]" },
                { id: "03", label: "SPACE HABITAT", color: "bg-[#141414] text-[#F0EDE5]" },
                { id: "04", label: "CAMPUSMART", color: "bg-[#EDEAE2] text-[#191919]" },
                { id: "05", label: "FINNEXT", color: "bg-[#D12626] text-[#F0EDE5]" },
                { id: "06", label: "DEVCON 8", color: "bg-[#141414] text-[#F0EDE5]" },
                { id: "A3", label: "SIDE STORY", color: "bg-[#F0EDE5] text-[#191919] border border-[#191919]" },
              ].map((book) => (
                <div
                  key={book.id}
                  className={`w-7 sm:w-8 h-24 sm:h-28 ${book.color} border-t-2 border-x-2 border-[#191919] flex flex-col justify-between items-center py-2 text-[9px] font-mono-tech shadow-sm`}
                >
                  <span className="font-bold">{book.id}</span>
                  <span className="book-spine tracking-wider uppercase font-semibold text-[8px]">
                    {book.label}
                  </span>
                  <div className="w-2 h-0.5 bg-current opacity-40"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Shelf Rows (Replica of Screenshot 4) */}
          <div className="border-t border-[#191919]">
            {SHELF_PROJECTS.map((item) => {
              const isSelected = activeShelf === item.code;
              return (
                <div
                  key={item.code}
                  onMouseEnter={() => setActiveShelf(item.code)}
                  onClick={() => {
                    setActiveShelf(item.code);
                    if (item.link) window.open(item.link, "_blank");
                  }}
                  className={`cursor-pointer border-b border-[#C9C5BC] px-4 sm:px-6 py-5 transition-all duration-200 flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                    isSelected
                      ? "bg-[#141414] text-[#F0EDE5] border-[#141414]"
                      : "bg-[#F0EDE5] hover:bg-[#EDEAE2] text-[#191919]"
                  }`}
                >
                  {/* Left: Code & Title */}
                  <div className="flex items-baseline gap-6 sm:gap-10">
                    <span
                      className={`text-xs font-mono-tech tracking-wider uppercase ${
                        isSelected ? "text-[#9E9A92]" : "text-[#77736C]"
                      }`}
                    >
                      {item.code}
                    </span>
                    <h4
                      className={`font-anton text-2xl sm:text-3xl uppercase tracking-normal transition-colors ${
                        isSelected ? "text-[#F0EDE5]" : "text-[#191919]"
                      }`}
                    >
                      {item.title}
                    </h4>
                  </div>

                  {/* Center: Description */}
                  <div
                    className={`text-xs sm:text-sm font-archivo max-w-md ${
                      isSelected ? "text-[#EDEAE2]/90" : "text-[#77736C]"
                    }`}
                  >
                    {item.description}
                  </div>

                  {/* Right: Tag, Stack, Circle Indicator & Arrow */}
                  <div className="flex items-center gap-4 text-xs font-mono-tech self-end md:self-center">
                    {/* Red indicator ring when selected */}
                    {isSelected && (
                      <span className="w-3.5 h-3.5 rounded-full border-2 border-[#D12626] animate-pulse"></span>
                    )}

                    <span
                      className={`uppercase tracking-wider text-[11px] ${
                        isSelected ? "text-[#D12626] font-bold" : "text-[#77736C]"
                      }`}
                    >
                      {isSelected ? item.stack : item.tag}
                    </span>

                    <span
                      className={`text-base font-bold ${
                        isSelected ? "text-[#F0EDE5]" : "text-[#77736C]"
                      }`}
                    >
                      {item.link ? "↗" : "—"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
