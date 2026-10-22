import { motion } from "framer-motion";
import { Cpu, Globe, Blocks, Users, ArrowUpRight, Terminal, Award } from "lucide-react";

const pillars = [
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    description: "Developing intelligent algorithms, NLP models, and computer vision systems. Leveraging PyTorch, TensorFlow, and agentic workflows to build practical AI tools.",
    tag: "INTELLIGENCE",
  },
  {
    icon: Globe,
    title: "Full-Stack Engineering",
    description: "Building responsive, resilient web applications using React, TypeScript, Node.js, and Django with clean architecture, robust state management, and fast API integration.",
    tag: "APPLICATIONS",
  },
  {
    icon: Blocks,
    title: "Web3 & Blockchain",
    description: "Active builder in decentralized ecosystems. Officially selected as Stellar India Ambassador, contributing to decentralized applications, Solana smart protocols, and payments.",
    tag: "DECENTRALIZED",
  },
  {
    icon: Users,
    title: "Community & Open Source",
    description: "Team Lead of Team ILM Tech and Co-Founder at Ajinava Edge. Active contributor to Hacktoberfest, GSSOC, and university builder networks across India.",
    tag: "LEADERSHIP",
  },
];

const focusAreas = [
  "Artificial Intelligence",
  "Machine Learning",
  "Full-Stack Web Dev",
  "Solana & Stellar Web3",
  "Agentic AI Systems",
  "Open Source",
  "Developer Communities",
  "Hackathon Building",
];

export const About = () => {
  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0B0D10] text-white border-t border-[#252830] relative overflow-hidden">
      {/* Background Subtle Linear Grid */}
      <div className="absolute inset-0 bg-grid-editorial opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Marker */}
        <div className="flex items-center justify-between pb-6 border-b border-[#252830] mb-12 sm:mb-16">
          <span className="editorial-eyebrow">[ 01 // ABOUT NAJISH ANJUM ]</span>
          <span className="font-mono text-xs text-[#9A9CA3] uppercase tracking-widest hidden sm:inline-block">
            PHILOSOPHY &amp; BACKGROUND
          </span>
        </div>

        {/* Editorial Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 sm:mb-20"
        >
          <h2 className="editorial-section-title text-white">
            <span>NOT JUST WRITING CODE.</span>
            <br />
            <span className="text-[#246BFD]">BUILDING WHAT'S NEXT.</span>
          </h2>
        </motion.div>

        {/* Editorial Spread: 2-Column Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Portrait & Identity Metadata */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Editorial Portrait Frame */}
            <div className="relative rounded-[28px] overflow-hidden border border-[#252830] bg-[#12151B] p-2">
              <div className="relative rounded-[22px] overflow-hidden aspect-[4/5] bg-[#050505]">
                <img
                  src="/images/najish-profile.jpeg"
                  alt="Najish Anjum — AI/ML Developer & Web3 Builder"
                  className="w-full h-full object-cover object-top filter grayscale contrast-110 hover:grayscale-0 transition-all duration-700"
                />
                {/* Tech Badge Overlay */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-[#050505]/80 backdrop-blur-md border border-[#252830] font-mono text-[10px] text-white uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#246BFD]" />
                  <span>FOUNDER &middot; TEAM ILM TECH</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#050505]/85 backdrop-blur-md border border-[#252830]">
                  <p className="font-display text-xl text-white uppercase tracking-wide">Najish Anjum</p>
                  <p className="font-mono text-xs text-[#4D8DFF] mt-0.5">B.Tech CSE (AI &amp; ML)</p>
                </div>
              </div>
            </div>

            {/* Quick Summary Pill Card */}
            <div className="p-6 rounded-[24px] bg-[#12151B] border border-[#252830] space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-[#9A9CA3]">
                <span>CORE SPECIALIZATION</span>
                <span className="text-[#246BFD]">01 // TECH</span>
              </div>
              <p className="text-sm font-sans text-[#F7F7F7] leading-relaxed">
                Focused on applied machine learning, neural architectures, Web3 integration on Solana &amp; Stellar, and production-grade full-stack systems.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Narrative + 4 Core Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-10"
          >
            {/* Authentic Narrative Bio */}
            <div className="space-y-5 text-base sm:text-lg text-[#9A9CA3] font-sans leading-relaxed">
              <p>
                I am a computer science engineer specializing in <strong className="text-white font-semibold">Artificial Intelligence &amp; Machine Learning</strong> with an obsessive drive for engineering real, impact-driven software. Rather than treating theory and application as separate disciplines, I build practical tools that solve real problems.
              </p>
              <p>
                As the <strong className="text-white font-semibold">Team Lead of Team ILM Tech</strong>, I spearhead a passionate collective of developers building AI prototypes, competing in national hackathons, and developing decentralized products. In parallel, I serve as a <strong className="text-white font-semibold">Stellar India Ambassador</strong>, championing decentralized finance and developer education.
              </p>
              <p>
                Whether it's designing repository intelligence engines like <span className="text-white font-medium">RepoSync</span>, participating in 48-hour sprint challenges, or mentoring newcomers in open-source programs like GSSOC and ECWOC, my work is guided by one principle: <span className="text-[#246BFD] font-medium">shipping code that matters.</span>
              </p>
            </div>

            {/* Focus Area Tags */}
            <div className="pt-2">
              <p className="font-mono text-xs text-[#9A9CA3] uppercase tracking-wider mb-3">
                AREAS OF ACTIVE EXPLORATION
              </p>
              <div className="flex flex-wrap gap-2">
                {focusAreas.map((area) => (
                  <span
                    key={area}
                    className="editorial-tag hover:border-[#246BFD] hover:text-white transition-colors cursor-default"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {pillars.map((pillar, idx) => (
                <div
                  key={pillar.title}
                  className="p-5 rounded-2xl bg-[#12151B] border border-[#252830] hover:border-[#246BFD]/50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#246BFD]/10 border border-[#246BFD]/20 flex items-center justify-center text-[#4D8DFF] group-hover:bg-[#246BFD] group-hover:text-white transition-colors">
                      <pillar.icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#9A9CA3]">
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="font-sans font-bold text-base text-white mb-2 group-hover:text-[#4D8DFF] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#9A9CA3] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
