import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X } from "lucide-react";

import passMonadBlitz from "@/assets/pass-monad-blitz.jpg";
import passFrontierSuperteam from "@/assets/pass-frontier-superteam.png";
import passCryptoWorldsFair from "@/assets/pass-crypto-worlds-fair.jpg";
import passDev3pack from "@/assets/pass-dev3pack.png";
import techfestLogo from "@/assets/techfest-logo.png";
import techclasherBg from "@/assets/techclasher-bg.png";
import nasaBg from "@/assets/nasa-bg.png";
import paranoxBg from "@/assets/paranox-bg.png";
import kodekaleshBg from "@/assets/kodekalesh-bg.png";
import nextgenBg from "@/assets/nextgen-bg.png";

interface HackathonItem {
  id: string;
  title: string;
  organizer: string;
  description: string;
  status: "Completed" | "Winner / Lead" | "Finalist" | "Participated" | "Upcoming";
  date: string;
  badge?: string;
  slug: string;
  bgImage?: string;
}

const hackathons: HackathonItem[] = [
  {
    id: "monad-blitz-delhi",
    title: "Monad Blitz — New Delhi",
    organizer: "Monad · Blockchain · Web3 · AI",
    description:
      "Explored the Monad ecosystem and built Crypto Analyzer AI, combining AI capabilities with blockchain-related data, EVM-compatible development, and rapid collaborative prototyping.",
    status: "Participated",
    date: "New Delhi, India",
    badge: "Team Lead & Developer — Crypto Analyzer AI",
    slug: "monad-blitz-delhi",
    bgImage: passMonadBlitz,
  },
  {
    id: "monad-blitz-nagpur",
    title: "Monad Blitz — Nagpur",
    organizer: "Monad · Blockchain · Smart Contracts · Web3",
    description:
      "Engaged with the Monad developer ecosystem, exploring blockchain technologies, decentralised applications, and EVM-compatible application development through rapid building.",
    status: "Participated",
    date: "Nagpur, India",
    badge: "Team Lead & Developer",
    slug: "monad-blitz-nagpur",
    bgImage: passMonadBlitz,
  },
  {
    id: "ihacks-iit-bombay",
    title: "I-Hacks — IIT Bombay",
    organizer: "IIT Bombay · Innovation · Software Development",
    description:
      "Participated in I-Hacks at IIT Bombay, experiencing an innovation-driven environment exploring technology-driven solutions to real-world challenges, product ideation, and rapid teamwork.",
    status: "Participated",
    date: "Mumbai, India",
    badge: "Team Lead & Developer — IIT Bombay",
    slug: "ihacks-iit-bombay",
    bgImage: techfestLogo,
  },
  {
    id: "solana-frontier-bhopal",
    title: "Solana Frontier — Buildstation Bhopal",
    organizer: "Solana · Colosseum · SuperteamIN",
    description:
      "Built HoldMint (Tax Vault), a non-custodial financial management solution for freelancers to automatically organise incoming USDC payments into Spend, Tax, and Savings vaults.",
    status: "Participated",
    date: "Bhopal, India",
    badge: "Team Lead & Developer — HoldMint / Tax Vault",
    slug: "solana-frontier-bhopal",
    bgImage: passFrontierSuperteam,
  },
  {
    id: "cryptoworld-fair-bhopal",
    title: "CryptoWorld Fair — Bhopal",
    organizer: "Cryptocurrency · Blockchain · Web3",
    description:
      "Participated in CryptoWorld Fair Bhopal, engaging with the blockchain and cryptocurrency ecosystem, exploring emerging Web3 projects, and connecting with builders.",
    status: "Participated",
    date: "Bhopal, India",
    badge: "Team Lead & Developer",
    slug: "cryptoworld-fair-bhopal",
    bgImage: passCryptoWorldsFair,
  },
  {
    id: "dev3pack-global",
    title: "Dev3pack Global Hackathon",
    organizer: "Solana · ElevenLabs · Web3 · Voice AI",
    description:
      "Exploring the intersection of Solana blockchain development, AI-powered tools, intelligent applications, and ElevenLabs voice AI integrations.",
    status: "Upcoming",
    date: "Global · Remote",
    badge: "Team Lead & Developer — Upcoming Sprint",
    slug: "dev3pack-global",
    bgImage: passDev3pack,
  },
  {
    id: "claude-impact-lab",
    title: "Claude Impact Lab — Bhopal",
    organizer: "Claude · Cerebras · AI Engineering · Generative AI",
    description:
      "AI-focused innovation programme centred around using Claude and Claude Code, AI workflows, real-world problem statements, and model inference capabilities.",
    status: "Participated",
    date: "Bhopal, India",
    badge: "Team Lead & Developer — AI-Powered Solution",
    slug: "claude-impact-lab",
  },
  {
    id: "claude-build-day",
    title: "Claude Build Day — Bhopal",
    organizer: "Claude · Generative AI · AI Agents",
    description:
      "Hands-on opportunity to experiment with Claude's capabilities and transform ideas into functional AI-powered applications, AI agents, intelligent workflows, and rapid prototyping.",
    status: "Upcoming",
    date: "Bhopal, India",
    badge: "Team Lead & Developer — Upcoming Sprint",
    slug: "claude-build-day",
  },
  {
    id: "techclasher",
    title: "The TechClasher 2025",
    organizer: "Greater Noida Institute of Technology, Delhi NCR",
    description:
      "Innovate. Code. Transform. National technical hackathon building mission-critical defense and enterprise technology under intense timeline constraints.",
    status: "Winner / Lead",
    date: "October 06 – 09, 2025",
    badge: "Team Lead — Team ILM Tech",
    slug: "techclasher-2025",
    bgImage: techclasherBg,
  },
  {
    id: "nasa-space-apps",
    title: "NASA Space Apps Challenge — Jabalpur Edition",
    organizer: "NASA (National Aeronautics and Space Administration)",
    description:
      "Prestigious global hackathon solving space exploration challenges, Earth observation data synthesis, and orbital habitat solutions.",
    status: "Completed",
    date: "October 04 – 05, 2025",
    badge: "Galactic Problem Solver Recognition",
    slug: "nasa-space-app",
    bgImage: nasaBg,
  },
  {
    id: "paranox-2",
    title: "ParanoX 2.0 Hackathon",
    organizer: "TechXNinjas, Delhi NCR",
    description:
      "Competitive multi-track hackathon focused on applied AI, machine learning pipelines, and decentralized blockchain architecture.",
    status: "Completed",
    date: "August – November 2025",
    badge: "Campus Ambassador & Builder",
    slug: "paranox-2",
    bgImage: paranoxBg,
  },
  {
    id: "hack-with-up",
    title: "0 to 1 — Hack with Uttar Pradesh",
    organizer: "Chandigarh University (TBI & IEDC)",
    description:
      "Founders-focused agentic AI hackathon building autonomous co-pilots, intelligent agents, and real-world workflow automation.",
    status: "Participated",
    date: "November 02 – 03, 2025",
    badge: "Official Certificate of Participation",
    slug: "hack-with-up",
  },
  {
    id: "codematrix-genesis",
    title: "CodeMatrix: Genesis Hackathon",
    organizer: "Dr. Ambedkar Institute of Technology, Kanpur",
    description:
      "Multi-day competitive innovation sprint solving algorithmic engineering, web architecture, and automated system challenges.",
    status: "Participated",
    date: "December 06 – 08, 2025",
    badge: "Official Participant",
    slug: "codematrix-genesis",
  },
  {
    id: "error-404",
    title: "Error 404: Beyond the Limit",
    organizer: "Jai Hind College, Mumbai",
    description:
      "48-hour semi-offline innovation sprint tackling real-world challenges in software engineering, debugging, and cybersecurity.",
    status: "Participated",
    date: "December 10, 2025",
    badge: "Mumbai Sprint Participant",
    slug: "error-404",
  },
  {
    id: "cbit-hacktoberfest",
    title: "CBIT Hacktoberfest Hackathon 2025",
    organizer: "CBIT Open Source Community",
    description:
      "Open-source hackathon focused on shipping live GitHub contributions and building community-driven open web tools.",
    status: "Completed",
    date: "October 25 – 26, 2025",
    badge: "Verified Open-Source Milestone",
    slug: "cbit-hacktoberfest",
  },
  {
    id: "gen-ai-academy",
    title: "Gen AI Academy 2.0 — Google Cloud Gen AI",
    organizer: "Google Cloud",
    description:
      "Hands-on generative AI sprint building with Google Cloud's Vertex AI, Gemini model APIs, and prompt engineering architectures.",
    status: "Completed",
    date: "November 2025",
    badge: "Completed & Certified",
    slug: "gen-ai-academy",
  },
  {
    id: "pixel-riot",
    title: "Pixel Riot Hackathon",
    organizer: "Design & Creative Tech Hackathon",
    description:
      "Creativity-first hackathon themed around visual interface engineering, interaction design, and visually striking digital experiences.",
    status: "Participated",
    date: "November 2025",
    badge: "Qualified Participant",
    slug: "pixel-riot",
  },
  {
    id: "codespark-72h",
    title: "CodeSpark — 72 Hours Coding Challenge",
    organizer: "Siwan Engineering College",
    description:
      "Intense 72-hour continuous build challenge developing functional software prototypes under non-stop execution conditions.",
    status: "Completed",
    date: "2025",
    badge: "72-Hour Finisher",
    slug: "codespark-72h",
  },
  {
    id: "kodekalesh",
    title: "Kodekalesh Hackathon",
    organizer: "Kanpur Institute of Technology, Kanpur",
    description:
      "Competitive hackathon involving rapid algorithmic problem solving and functional software prototype creation.",
    status: "Completed",
    date: "2025",
    badge: "Verified Participant",
    slug: "kodekalesh",
    bgImage: kodekaleshBg,
  },
  {
    id: "nextgen",
    title: "Next Gen Hackathon",
    organizer: "Soft Computing Research Society, New Delhi",
    description:
      "Next-generation challenge focused on artificial intelligence solutions for real-world optimization problems.",
    status: "Completed",
    date: "2025",
    badge: "Participant",
    slug: "nextgen",
    bgImage: nextgenBg,
  },
];

export const Hackathons = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section
      id="hackathons"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#050505] text-white border-t border-[#252830] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Marker */}
        <div className="flex items-center justify-between pb-6 border-b border-[#252830] mb-12 sm:mb-16">
          <span className="editorial-eyebrow">[ 05 // SPRINT RECORD ]</span>
          <span className="font-mono text-xs text-[#9A9CA3] uppercase tracking-widest hidden sm:inline-block">
            HACKATHONS &amp; BUILDER EXPERIENCES
          </span>
        </div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <h1 className="editorial-section-title text-white">
            <span>Hackathons &amp;</span>
            <br />
            <span className="italic font-normal text-[#246BFD]">Builder</span>{" "}
            <span className="text-white">Experiences</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#A4A7AF] max-w-3xl font-sans leading-relaxed">
            Participating in hackathons, builder events, and innovation programmes across AI, Web3,
            Blockchain, and emerging technologies. I enjoy turning ideas into working prototypes,
            collaborating with developers, exploring new ecosystems, and solving real-world problems
            through technology.
          </p>

          {/* Role & Domains Info Strip */}
          <div className="mt-6 pt-5 border-t border-[#252830] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-xs text-[#9A9CA3] uppercase tracking-wider">
                ROLE:
              </span>
              <span className="font-mono text-xs font-bold text-white bg-[#12151B] border border-[#252830] px-3 py-1 rounded-full text-[#4D8DFF]">
                Team Lead &amp; Developer
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="font-mono text-xs text-[#9A9CA3] uppercase tracking-wider mr-1">
                DOMAINS:
              </span>
              {[
                "Artificial Intelligence",
                "Machine Learning",
                "Web3",
                "Blockchain",
                "Full-Stack Development",
              ].map((domain) => (
                <span
                  key={domain}
                  className="font-mono text-[11px] text-[#A4A7AF] bg-[#0B0D10] border border-[#252830] px-2.5 py-0.5 rounded-md"
                >
                  {domain}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Hackathon Editorial Grid: EXACT previous card style for every single card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {hackathons.map((hackathon, index) => (
            <motion.div
              key={hackathon.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: (index % 6) * 0.05 }}
              viewport={{ once: true, margin: "-60px" }}
              className="rounded-[24px] bg-[#0B0D10] border border-[#252830] overflow-hidden hover:border-[#246BFD]/60 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Media Artwork preview if available */}
                {hackathon.bgImage ? (
                  <div className="relative h-44 w-full bg-[#12151B] overflow-hidden border-b border-[#252830]">
                    <img
                      src={hackathon.bgImage}
                      alt={hackathon.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter grayscale contrast-125 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-transparent to-transparent" />
                    <button
                      onClick={() => setActiveImage(hackathon.bgImage!)}
                      className="absolute top-3 right-3 p-1.5 rounded-full bg-[#050505]/80 backdrop-blur-md border border-[#252830] text-white hover:text-[#4D8DFF] transition-colors"
                      title="Enlarge preview"
                      type="button"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : (
                  <div className="h-28 w-full bg-[#12151B] p-5 flex items-center justify-between border-b border-[#252830]">
                    <span className="font-display text-4xl text-white/10 uppercase select-none">
                      #{index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </span>
                    <span className="font-mono text-xs text-[#246BFD] uppercase">
                      [ SPRINT ]
                    </span>
                  </div>
                )}

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Status & Date */}
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span
                      className={`px-2.5 py-0.5 rounded-full font-semibold uppercase tracking-wider border ${
                        hackathon.status === "Winner / Lead"
                          ? "bg-amber-500/15 border-amber-500/30 text-amber-400"
                          : hackathon.status === "Upcoming"
                          ? "bg-purple-500/15 border-purple-500/30 text-purple-400"
                          : "bg-[#246BFD]/15 border border-[#246BFD]/30 text-[#4D8DFF]"
                      }`}
                    >
                      {hackathon.status}
                    </span>
                    <span className="text-[#A4A7AF]">{hackathon.date}</span>
                  </div>

                  {/* Title & Organizer */}
                  <div>
                    <h3 className="font-display text-2xl text-white tracking-tight group-hover:text-[#4D8DFF] transition-colors">
                      {hackathon.title}
                    </h3>
                    <p className="font-mono text-xs text-[#A4A7AF] mt-1 leading-snug">
                      {hackathon.organizer}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#A4A7AF] font-sans leading-relaxed">
                    {hackathon.description}
                  </p>
                </div>
              </div>

              {/* Bottom Badge strip */}
              {hackathon.badge && (
                <div className="px-6 py-3 bg-[#12151B] border-t border-[#252830] font-mono text-[11px] text-[#F7F7F7] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#246BFD]" />
                  <span className="truncate">{hackathon.badge}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* What These Experiences Mean to Me Callout */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 sm:mt-24 p-8 sm:p-12 rounded-3xl bg-[#0B0D10] border border-[#252830] relative overflow-hidden"
        >
          <div className="relative z-10 max-w-4xl">
            <span className="editorial-eyebrow">[ BUILDER PHILOSOPHY ]</span>
            <h2 className="font-display text-3xl sm:text-4xl text-white tracking-tight mt-3 mb-6">
              What These Experiences Mean to Me
            </h2>

            <p className="text-base sm:text-lg text-[#A4A7AF] font-sans leading-relaxed mb-6">
              Every hackathon and builder experience has been an opportunity to explore something new,
              work with different people, experiment with emerging technologies, and become a better
              developer.
            </p>

            <p className="text-base sm:text-lg text-[#A4A7AF] font-sans leading-relaxed mb-8">
              From building AI-powered applications to exploring blockchain ecosystems like Monad and
              Solana, my focus remains on learning by building, collaborating with communities, and
              creating technology that solves meaningful problems.
            </p>

            <div className="pt-6 border-t border-[#252830] flex items-center justify-between flex-wrap gap-4">
              <span className="font-mono text-sm sm:text-base font-bold tracking-wider text-[#246BFD] uppercase">
                Explore. Build. Experiment. Repeat.
              </span>
              <span className="font-mono text-xs text-[#9A9CA3]">
                Najish Anjum &middot; Builder Portfolio
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#050505]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setActiveImage(null)}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-6 right-6 p-2 rounded-full border border-[#252830] text-white hover:border-[#246BFD] transition-colors"
              aria-label="Close modal"
              type="button"
            >
              <X className="w-6 h-6" />
            </button>
            <div
              className="max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden border border-[#252830] bg-[#0B0D10]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeImage}
                alt="Hackathon visual preview"
                className="w-full h-full max-h-[80vh] object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
