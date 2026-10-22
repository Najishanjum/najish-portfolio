import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Calendar, MapPin, Users, ArrowUpRight, X, Maximize2 } from "lucide-react";
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
  status: "Completed" | "Winner / Lead" | "Finalist" | "Participated";
  date: string;
  badge?: string;
  slug: string;
  bgImage?: string;
}

const hackathons: HackathonItem[] = [
  {
    id: "techclasher",
    title: "The TechClasher 2025",
    organizer: "Greater Noida Institute of Technology, Delhi NCR",
    description: "Innovate. Code. Transform. National technical hackathon building mission-critical defense and enterprise technology under intense timeline constraints.",
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
    description: "Prestigious global hackathon solving space exploration challenges, Earth observation data synthesis, and orbital habitat solutions.",
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
    description: "Competitive multi-track hackathon focused on applied AI, machine learning pipelines, and decentralized blockchain architecture.",
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
    description: "Founders-focused agentic AI hackathon building autonomous co-pilots, intelligent agents, and real-world workflow automation.",
    status: "Participated",
    date: "November 02 – 03, 2025",
    badge: "Official Certificate of Participation",
    slug: "hack-with-up",
  },
  {
    id: "codematrix-genesis",
    title: "CodeMatrix: Genesis Hackathon",
    organizer: "Dr. Ambedkar Institute of Technology, Kanpur",
    description: "Multi-day competitive innovation sprint solving algorithmic engineering, web architecture, and automated system challenges.",
    status: "Participated",
    date: "December 06 – 08, 2025",
    badge: "Official Participant",
    slug: "codematrix-genesis",
  },
  {
    id: "error-404",
    title: "Error 404: Beyond the Limit",
    organizer: "Jai Hind College, Mumbai",
    description: "48-hour semi-offline innovation sprint tackling real-world challenges in software engineering, debugging, and cybersecurity.",
    status: "Participated",
    date: "December 10, 2025",
    badge: "Mumbai Sprint Participant",
    slug: "error-404",
  },
  {
    id: "cbit-hacktoberfest",
    title: "CBIT Hacktoberfest Hackathon 2025",
    organizer: "CBIT Open Source Community",
    description: "Open-source hackathon focused on shipping live GitHub contributions and building community-driven open web tools.",
    status: "Completed",
    date: "October 25 – 26, 2025",
    badge: "Verified Open-Source Milestone",
    slug: "cbit-hacktoberfest",
  },
  {
    id: "gen-ai-academy",
    title: "Gen AI Academy 2.0 — Google Cloud Gen AI",
    organizer: "Google Cloud",
    description: "Hands-on generative AI sprint building with Google Cloud's Vertex AI, Gemini model APIs, and prompt engineering architectures.",
    status: "Completed",
    date: "November 2025",
    badge: "Completed & Certified",
    slug: "gen-ai-academy",
  },
  {
    id: "pixel-riot",
    title: "Pixel Riot Hackathon",
    organizer: "Design & Creative Tech Hackathon",
    description: "Creativity-first hackathon themed around visual interface engineering, interaction design, and visually striking digital experiences.",
    status: "Participated",
    date: "November 2025",
    badge: "Qualified Participant",
    slug: "pixel-riot",
  },
  {
    id: "codespark-72h",
    title: "CodeSpark — 72 Hours Coding Challenge",
    organizer: "Siwan Engineering College",
    description: "Intense 72-hour continuous build challenge developing functional software prototypes under non-stop execution conditions.",
    status: "Completed",
    date: "2025",
    badge: "72-Hour Finisher",
    slug: "codespark-72h",
  },
  {
    id: "kodekalesh",
    title: "Kodekalesh Hackathon",
    organizer: "Kanpur Institute of Technology, Kanpur",
    description: "Competitive hackathon involving rapid algorithmic problem solving and functional software prototype creation.",
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
    description: "Next-generation challenge focused on artificial intelligence solutions for real-world optimization problems.",
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
    <section id="hackathons" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#050505] text-white border-t border-[#252830] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Marker */}
        <div className="flex items-center justify-between pb-6 border-b border-[#252830] mb-12 sm:mb-16">
          <span className="editorial-eyebrow">[ 05 // SPRINT RECORD ]</span>
          <span className="font-mono text-xs text-[#9A9CA3] uppercase tracking-widest hidden sm:inline-block">
            TIME-CRITICAL ENGINEERING &amp; HACKATHONS
          </span>
        </div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-24"
        >
          <h2 className="editorial-section-title text-white">
            <span>BUILT UNDER</span>
            <br />
            <span className="text-[#246BFD]">PRESSURE.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#9A9CA3] max-w-xl font-sans">
            A comprehensive record of 24 to 72-hour national and global hackathons where ideas were stress-tested, coded, and demonstrated live before juries.
          </p>
        </motion.div>

        {/* Hackathon Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {hackathons.map((hackathon, index) => (
            <motion.div
              key={hackathon.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
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
                    <span className="px-2.5 py-0.5 rounded-full bg-[#246BFD]/15 border border-[#246BFD]/30 text-[#4D8DFF] font-semibold uppercase tracking-wider">
                      {hackathon.status}
                    </span>
                    <span className="text-[#9A9CA3]">{hackathon.date}</span>
                  </div>

                  {/* Title & Organizer */}
                  <div>
                    <h3 className="font-display text-2xl text-white uppercase tracking-tight group-hover:text-[#4D8DFF] transition-colors">
                      {hackathon.title}
                    </h3>
                    <p className="font-mono text-xs text-[#9A9CA3] mt-1 leading-snug">
                      {hackathon.organizer}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#9A9CA3] font-sans leading-relaxed">
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
