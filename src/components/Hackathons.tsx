import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  Calendar,
  MapPin,
  ArrowUpRight,
  X,
  Maximize2,
  ChevronRight,
  Sparkles,
  Layers,
  Code2,
  Rocket,
  ShieldCheck,
  Cpu,
  Flame,
} from "lucide-react";

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

interface BuilderExperience {
  id: string;
  num: string;
  title: string;
  status: "Participated" | "Upcoming";
  ecosystem?: string;
  organiser?: string;
  location?: string;
  domain: string;
  description: string;
  project?: {
    name: string;
    description?: string;
    points?: string[];
    concepts?: { title: string; desc: string }[];
  };
  experienceLearning?: string[];
  areasOfExploration?: string[];
  role: string;
  projectStatus?: string;
  projectLinks?: string;
  bgImage?: string;
}

const builderExperiences: BuilderExperience[] = [
  {
    id: "monad-blitz-delhi",
    num: "01",
    title: "Monad Blitz — New Delhi",
    status: "Participated",
    ecosystem: "Monad",
    domain: "Blockchain · Web3 · AI",
    description:
      "Participated in Monad Blitz New Delhi, exploring the Monad ecosystem and building Crypto Analyzer AI, an AI-powered project focused on cryptocurrency analysis.",
    project: {
      name: "Crypto Analyzer AI",
      points: [
        "Explored AI-powered cryptocurrency analysis and insights.",
        "Worked on combining AI capabilities with blockchain-related data.",
        "Explored the Monad ecosystem and EVM-compatible development.",
        "Gained hands-on experience in rapid prototyping and collaborative development.",
      ],
    },
    role: "Team Lead & Developer",
    projectLinks: "Coming Soon",
    bgImage: passMonadBlitz,
  },
  {
    id: "monad-blitz-nagpur",
    num: "02",
    title: "Monad Blitz — Nagpur",
    status: "Participated",
    ecosystem: "Monad",
    domain: "Blockchain · Smart Contracts · Web3",
    description:
      "Participated in Monad Blitz Nagpur, engaging with the Monad developer ecosystem and exploring blockchain technologies, decentralised applications, and Web3 development.",
    experienceLearning: [
      "Explored the Monad blockchain ecosystem.",
      "Engaged with blockchain developers and builders.",
      "Strengthened understanding of EVM-compatible application development.",
      "Experienced collaborative problem-solving and rapid building.",
    ],
    role: "Team Lead & Developer",
    projectStatus: "To Be Updated",
    projectLinks: "Coming Soon",
    bgImage: passMonadBlitz,
  },
  {
    id: "ihacks-iit-bombay",
    num: "03",
    title: "I-Hacks — IIT Bombay",
    status: "Participated",
    organiser: "IIT Bombay",
    location: "Mumbai, India",
    domain: "Innovation · Software Development · Problem Solving",
    description:
      "Participated in I-Hacks at IIT Bombay, experiencing an innovation-driven environment with developers, student innovators, and technology enthusiasts.",
    experienceLearning: [
      "Explored technology-driven solutions to real-world challenges.",
      "Engaged in product ideation and technical problem-solving.",
      "Collaborated and connected with fellow builders.",
      "Strengthened rapid development and teamwork skills.",
    ],
    role: "Team Lead & Developer",
    projectStatus: "To Be Updated",
    projectLinks: "Coming Soon",
    bgImage: techfestLogo,
  },
  {
    id: "solana-frontier-bhopal",
    num: "04",
    title: "Solana Frontier — Buildstation Bhopal",
    status: "Participated",
    ecosystem: "Solana · Colosseum · SuperteamIN",
    location: "Bhopal, India",
    domain: "Web3 · Blockchain · DeFi",
    description:
      "Participated in Solana Frontier at Buildstation Bhopal, exploring the Solana ecosystem and building within the decentralised finance and Web3 space.",
    project: {
      name: "HoldMint — Tax Vault",
      description:
        "A non-custodial financial management solution designed for freelancers to automatically organise incoming USDC payments into separate financial vaults.",
      concepts: [
        { title: "Spend Vault", desc: "Manage available spending funds." },
        { title: "Tax Vault", desc: "Separate funds for tax obligations." },
        { title: "Savings Vault", desc: "Allocate money towards future financial goals." },
        { title: "Non-custodial Architecture", desc: "Designed around user-controlled funds." },
      ],
    },
    experienceLearning: [
      "Explored Solana-based application development.",
      "Worked on blockchain-powered financial use cases.",
      "Explored smart contracts and decentralised finance.",
      "Connected with the Solana builder community.",
    ],
    role: "Team Lead & Developer",
    projectStatus: "HoldMint / Tax Vault",
    projectLinks: "GitHub & Demo: Coming Soon",
    bgImage: passFrontierSuperteam,
  },
  {
    id: "cryptoworld-fair-bhopal",
    num: "05",
    title: "CryptoWorld Fair — Bhopal",
    status: "Participated",
    location: "Bhopal, India",
    domain: "Cryptocurrency · Blockchain · Web3",
    description:
      "Participated in CryptoWorld Fair Bhopal, engaging with the blockchain and cryptocurrency ecosystem and connecting with developers, innovators, and Web3 enthusiasts.",
    experienceLearning: [
      "Explored emerging blockchain technologies and Web3 projects.",
      "Interacted with the crypto and developer community.",
      "Learned about ecosystem developments and industry opportunities.",
      "Expanded connections with people building in Web3.",
    ],
    role: "Team Lead & Developer",
    projectStatus: "To Be Updated",
    projectLinks: "Coming Soon",
    bgImage: passCryptoWorldsFair,
  },
  {
    id: "dev3pack-global",
    num: "06",
    title: "Dev3pack Global Hackathon",
    status: "Upcoming",
    ecosystem: "Solana · ElevenLabs",
    domain: "Web3 · Artificial Intelligence · Voice AI",
    description:
      "Looking forward to participating in Dev3pack, exploring the intersection of blockchain development, AI-powered applications, and voice technology.",
    areasOfExploration: [
      "Solana-based application development.",
      "AI-powered tools and intelligent applications.",
      "ElevenLabs voice AI integrations.",
      "Building innovative products combining AI and Web3.",
    ],
    role: "Team Lead & Developer",
    projectStatus: "To Be Announced",
    bgImage: passDev3pack,
  },
  {
    id: "claude-impact-lab",
    num: "07",
    title: "Claude Impact Lab — Bhopal",
    status: "Participated",
    ecosystem: "Claude · Cerebras",
    location: "Bhopal, India",
    domain: "Artificial Intelligence · AI Engineering · Generative AI",
    description:
      "Participated in Claude Impact Lab Bhopal, an AI-focused innovation programme centred around using modern AI tools and models to approach real-world challenges.",
    areasOfExploration: [
      "Working with Claude and Claude Code.",
      "Exploring AI-powered application development.",
      "Building solutions around real-world problem statements.",
      "Experimenting with AI-assisted development workflows.",
      "Exploring AI model integrations and inference capabilities.",
    ],
    role: "Team Lead & Developer",
    projectStatus: "AI-Powered Solution — Problem Statement to Be Updated",
    projectLinks: "Coming Soon",
  },
  {
    id: "claude-build-day",
    num: "08",
    title: "Claude Build Day — Bhopal",
    status: "Upcoming",
    ecosystem: "Claude",
    location: "Bhopal, India",
    domain: "Generative AI · AI Agents · AI Development",
    description:
      "Looking forward to Claude Build Day, a hands-on opportunity to experiment with Claude's capabilities and transform ideas into functional AI-powered applications.",
    areasOfExploration: [
      "Claude and Claude Code.",
      "AI-assisted software engineering.",
      "AI agents and intelligent workflows.",
      "Rapid prototyping and product development.",
      "Building practical AI-powered applications.",
    ],
    role: "Team Lead & Developer",
    projectStatus: "To Be Announced",
  },
];

interface ArchiveHackathon {
  id: string;
  title: string;
  organizer: string;
  description: string;
  status: "Completed" | "Winner / Lead" | "Finalist" | "Participated";
  date: string;
  badge?: string;
  bgImage?: string;
}

const archiveHackathons: ArchiveHackathon[] = [
  {
    id: "techclasher",
    title: "The TechClasher 2025",
    organizer: "Greater Noida Institute of Technology, Delhi NCR",
    description:
      "National technical hackathon building mission-critical defense and enterprise technology under intense timeline constraints.",
    status: "Winner / Lead",
    date: "October 06 – 09, 2025",
    badge: "Team Lead — Team ILM Tech",
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
    bgImage: nextgenBg,
  },
];

export const Hackathons = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [showArchive, setShowArchive] = useState(false);

  return (
    <section
      id="hackathons"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#050505] text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header: Starting from # Hackathons & Builder Experiences */}
        <div className="mb-14 sm:mb-20">
          <div className="flex items-center justify-between pb-5 border-b border-[#252830] mb-8 sm:mb-10">
            <span className="editorial-eyebrow">[ 05 // SPRINT RECORD ]</span>
            <span className="font-mono text-xs text-[#9A9CA3] uppercase tracking-widest hidden sm:inline-block">
              HACKATHONS &amp; BUILDER EVENTS
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="editorial-section-title text-white">
              <span>Hackathons &amp;</span>
              <br />
              <span className="italic font-normal text-[#246BFD]">Builder</span>{" "}
              <span className="text-white">Experiences</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-[#C5C8D0] max-w-3xl font-sans leading-relaxed">
              Participating in hackathons, builder events, and innovation programmes across AI,
              Web3, Blockchain, and emerging technologies. I enjoy turning ideas into working
              prototypes, collaborating with developers, exploring new ecosystems, and solving
              real-world problems through technology.
            </p>

            {/* Role & Domains Info Banner */}
            <div className="mt-8 p-5 rounded-2xl bg-[#0B0D10] border border-[#252830] flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-[#9A9CA3] uppercase tracking-wider">
                  ROLE:
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#246BFD]/15 border border-[#246BFD]/40 font-mono text-xs font-semibold text-[#4D8DFF]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#246BFD]" />
                  Team Lead &amp; Developer
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs text-[#9A9CA3] uppercase tracking-wider mr-1">
                  DOMAINS:
                </span>
                {[
                  "Artificial Intelligence",
                  "Machine Learning",
                  "Web3",
                  "Blockchain",
                  "Full-Stack Development",
                ].map((dom) => (
                  <span
                    key={dom}
                    className="editorial-tag text-[11px] text-[#C5C8D0] bg-[#12151B]"
                  >
                    {dom}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Builder Experiences List (Line by line, high-impact cards) */}
        <div className="space-y-8 sm:space-y-10">
          {builderExperiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              viewport={{ once: true, margin: "-40px" }}
              className="rounded-2xl sm:rounded-3xl bg-[#0B0D10] border border-[#252830] p-6 sm:p-8 hover:border-[#246BFD]/50 transition-all duration-300 shadow-xl group flex flex-col justify-between"
            >
              <div>
                {/* Top Strip: Num, Status, Ecosystem/Location, Domain */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#252830]">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-bold text-[#246BFD]">
                      {exp.num} //
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider border ${
                        exp.status === "Participated"
                          ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                          : "bg-amber-500/10 border-amber-500/30 text-amber-400"
                      }`}
                    >
                      {exp.status}
                    </span>
                    {exp.ecosystem && (
                      <span className="font-mono text-xs text-[#C5C8D0] bg-[#12151B] border border-[#252830] px-2.5 py-0.5 rounded-full">
                        Ecosystem: {exp.ecosystem}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#9A9CA3]">
                    {exp.location && (
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#246BFD]" />
                        {exp.location}
                      </span>
                    )}
                    {exp.organiser && (
                      <span className="px-2 py-0.5 rounded bg-[#12151B] border border-[#252830]">
                        {exp.organiser}
                      </span>
                    )}
                  </div>
                </div>

                {/* Title & Domain */}
                <div className="pt-5 pb-3">
                  <h2 className="font-display text-2xl sm:text-3xl text-white tracking-tight group-hover:text-[#4D8DFF] transition-colors">
                    {exp.title}
                  </h2>
                  <p className="font-mono text-xs text-[#246BFD] mt-1.5 tracking-wide">
                    {exp.domain}
                  </p>
                </div>

                {/* Narrative Description */}
                <p className="text-sm sm:text-base text-[#C5C8D0] font-sans leading-relaxed mb-5">
                  {exp.description}
                </p>

                {/* Project Details if Present */}
                {exp.project && (
                  <div className="p-4 sm:p-5 rounded-xl bg-[#12151B] border border-[#252830] my-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                        <Code2 className="w-4 h-4 text-[#246BFD]" />
                        PROJECT: {exp.project.name}
                      </span>
                    </div>

                    {exp.project.description && (
                      <p className="text-xs sm:text-sm text-[#A4A7AF] font-sans leading-relaxed">
                        {exp.project.description}
                      </p>
                    )}

                    {/* Bullet Points */}
                    {exp.project.points && (
                      <ul className="space-y-1.5 pt-1">
                        {exp.project.points.map((pt, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-xs sm:text-sm text-[#C5C8D0]"
                          >
                            <span className="text-[#246BFD] mt-1 text-xs">•</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Key Project Concepts (e.g. for HoldMint Tax Vault) */}
                    {exp.project.concepts && (
                      <div className="pt-2">
                        <span className="font-mono text-xs text-[#4D8DFF] uppercase tracking-wider block mb-2">
                          Key Project Concepts:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {exp.project.concepts.map((concept, i) => (
                            <div
                              key={i}
                              className="p-2.5 rounded-lg bg-[#0B0D10] border border-[#252830]/80 text-xs"
                            >
                              <span className="font-bold text-white block">
                                {concept.title}
                              </span>
                              <span className="text-[#9A9CA3] text-[11px] block mt-0.5">
                                {concept.desc}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Experience & Learning points */}
                {exp.experienceLearning && (
                  <div className="p-4 rounded-xl bg-[#12151B]/60 border border-[#252830]/80 my-3">
                    <span className="font-mono text-xs text-[#246BFD] font-bold uppercase tracking-wider block mb-2 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      Experience &amp; Learning
                    </span>
                    <ul className="space-y-1.5">
                      {exp.experienceLearning.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs sm:text-sm text-[#C5C8D0]"
                        >
                          <span className="text-[#246BFD] mt-1 text-xs">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Areas of Exploration */}
                {exp.areasOfExploration && (
                  <div className="p-4 rounded-xl bg-[#12151B]/60 border border-[#252830]/80 my-3">
                    <span className="font-mono text-xs text-[#4D8DFF] font-bold uppercase tracking-wider block mb-2 flex items-center gap-1.5">
                      <Rocket className="w-3.5 h-3.5" />
                      Areas of Exploration
                    </span>
                    <ul className="space-y-1.5">
                      {exp.areasOfExploration.map((area, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs sm:text-sm text-[#C5C8D0]"
                        >
                          <span className="text-[#246BFD] mt-1 text-xs">•</span>
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Media Artwork / Badge Pass preview if available */}
                {exp.bgImage && (
                  <div className="mt-4 pt-3 border-t border-[#252830]/60">
                    <div className="flex items-center justify-between pb-2">
                      <span className="font-mono text-[11px] text-[#246BFD] font-semibold uppercase tracking-wider">
                        VERIFIED BADGE / ATTACHMENT
                      </span>
                    </div>
                    <div
                      onClick={() => setActiveImage(exp.bgImage!)}
                      className="group/img relative h-40 sm:h-48 w-full rounded-xl overflow-hidden border border-[#252830] bg-[#060709] p-2 flex items-center justify-center cursor-pointer hover:border-[#246BFD] transition-colors"
                    >
                      <img
                        src={exp.bgImage}
                        alt={`${exp.title} preview`}
                        className="max-h-full max-w-full object-contain filter contrast-105 group-hover/img:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end p-2.5">
                        <span className="font-mono text-[10px] text-white flex items-center gap-1 bg-[#050505]/80 px-2 py-0.5 rounded border border-[#252830]">
                          <Maximize2 className="w-3 h-3 text-[#246BFD]" />
                          EXPAND PASS
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Card Footer: Role, Project info, Project Links */}
              <div className="mt-6 pt-4 border-t border-[#252830] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-[#9A9CA3]">
                    ROLE: <strong className="text-white font-semibold">{exp.role}</strong>
                  </span>
                  {exp.projectStatus && (
                    <span className="text-[#9A9CA3]">
                      PROJECT:{" "}
                      <span className="text-[#4D8DFF]">{exp.projectStatus}</span>
                    </span>
                  )}
                </div>

                {exp.projectLinks && (
                  <span className="px-3 py-1 rounded-full bg-[#12151B] border border-[#252830] text-[#9A9CA3] text-[11px] font-semibold">
                    {exp.projectLinks}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section: What These Experiences Mean to Me */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 sm:mt-24 p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#0E1116] to-[#07090C] border border-[#252830] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#246BFD]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl">
            <span className="editorial-eyebrow">[ BUILDER PHILOSOPHY ]</span>
            <h2 className="font-display text-3xl sm:text-4xl text-white tracking-tight mt-3 mb-6">
              What These Experiences Mean to Me
            </h2>

            <p className="text-base sm:text-lg text-[#C5C8D0] font-sans leading-relaxed mb-6">
              Every hackathon and builder experience has been an opportunity to explore something
              new, work with different people, experiment with emerging technologies, and become a
              better developer.
            </p>

            <p className="text-base sm:text-lg text-[#C5C8D0] font-sans leading-relaxed mb-8">
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

        {/* Optional Toggle to View Past Hackathons Archive */}
        <div className="mt-16 text-center">
          <button
            type="button"
            onClick={() => setShowArchive(!showArchive)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#252830] bg-[#0B0D10] text-xs font-mono font-bold uppercase tracking-wider text-[#9A9CA3] hover:text-white hover:border-[#246BFD] hover:bg-[#12151B] transition-all"
          >
            <span>
              {showArchive
                ? "HIDE ADDITIONAL HACKATHONS ARCHIVE"
                : "VIEW COMPLETE HACKATHON ARCHIVE (12+ SPRINTS)"}
            </span>
            <ChevronRight
              className={`w-4 h-4 text-[#246BFD] transition-transform duration-300 ${
                showArchive ? "rotate-90" : ""
              }`}
            />
          </button>
        </div>

        {/* Collapsible Archive Section */}
        <AnimatePresence>
          {showArchive && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-10 overflow-hidden"
            >
              <div className="pb-6 mb-8 border-b border-[#252830]">
                <h3 className="font-display text-2xl text-white">
                  Additional National &amp; Global Hackathons
                </h3>
                <p className="font-mono text-xs text-[#9A9CA3] mt-1">
                  Historical archive of time-critical sprints, certificates, and recognition.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {archiveHackathons.map((hackathon) => (
                  <div
                    key={hackathon.id}
                    className="rounded-2xl bg-[#0B0D10] border border-[#252830] p-5 flex flex-col justify-between hover:border-[#246BFD]/50 transition-colors"
                  >
                    <div>
                      {hackathon.bgImage && (
                        <div
                          onClick={() => setActiveImage(hackathon.bgImage!)}
                          className="h-32 w-full rounded-xl bg-[#060709] border border-[#252830] mb-4 overflow-hidden flex items-center justify-center p-2 cursor-pointer"
                        >
                          <img
                            src={hackathon.bgImage}
                            alt={hackathon.title}
                            className="max-h-full max-w-full object-contain filter contrast-105"
                          />
                        </div>
                      )}

                      <div className="flex items-center justify-between text-xs font-mono mb-2">
                        <span className="px-2 py-0.5 rounded bg-[#246BFD]/15 text-[#4D8DFF] font-semibold">
                          {hackathon.status}
                        </span>
                        <span className="text-[#9A9CA3]">{hackathon.date}</span>
                      </div>

                      <h4 className="font-sans font-bold text-base text-white mt-1">
                        {hackathon.title}
                      </h4>
                      <p className="font-mono text-[11px] text-[#9A9CA3] mt-0.5">
                        {hackathon.organizer}
                      </p>
                      <p className="text-xs text-[#A4A7AF] font-sans mt-2.5 leading-relaxed">
                        {hackathon.description}
                      </p>
                    </div>

                    {hackathon.badge && (
                      <div className="mt-4 pt-3 border-t border-[#252830] font-mono text-[10px] text-[#4D8DFF] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#246BFD]" />
                        <span>{hackathon.badge}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
