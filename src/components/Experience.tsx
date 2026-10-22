import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Calendar, MapPin, Maximize2, X, ChevronRight } from "lucide-react";

import ilmTechLogo from "@/assets/ilm-tech-logo.jpg";
import ilmTechProfile from "@/assets/ilm-tech-profile.jpg";
import ajinavaEdgeLogo from "@/assets/ajinava-edge-logo.jpg";
import paranoxLogo from "@/assets/paranox-logo.png";
import techfestLogo from "@/assets/techfest-logo.png";
import gssocLogo from "@/assets/gssoc-logo.png";
import moodIndigoLogo from "@/assets/mood-indigo-logo.png";
import osciLogo from "@/assets/osci-logo.png";
import googleCloudLogo from "@/assets/google-cloud-logo.png";
import googleCloudImg1 from "@/assets/google-cloud-img1.jpg";
import googleCloudImg2 from "@/assets/google-cloud-img2.jpg";
import hacktoberfestLogo from "@/assets/hacktoberfest-logo.png";
import hacktoberfestBadges1 from "@/assets/hacktoberfest-badges1.png";
import hacktoberfestBadges2 from "@/assets/hacktoberfest-badges2.png";
import hacktoberfestSwag from "@/assets/hacktoberfest-swag.jpg";
import hacktoberfestSelfie from "@/assets/hacktoberfest-selfie.jpg";
import hacktoberfestProfile from "@/assets/hacktoberfest-profile.jpg";
const stellarAmbassador = "/images/stellar-ambassador.jpeg";
import ecwocLogo from "@/assets/ecwoc-logo.png";
import ecwocBadges from "@/assets/ecwoc-badges.jpg";
import ecwocWork from "@/assets/ecwoc-work.jpg";
import esummitImg1 from "@/assets/esummit-iitb-1.jpg";
import esummitImg2 from "@/assets/esummit-iitb-2.jpg";
import esummitImg3 from "@/assets/esummit-iitb-3.jpg";
import esummitImg4 from "@/assets/esummit-iitb-4.jpg";

interface ExperienceItem {
  id: string;
  num: string;
  role: string;
  organization: string;
  period: string;
  category: string;
  location: string;
  description: string;
  responsibilities: string[];
  skills: string[];
  logo?: string;
  link?: string;
  images?: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: "ilm-tech",
    num: "01",
    role: "Team Lead",
    organization: "Team ILM Tech",
    period: "Sep 2025 — Present",
    category: "AI / ML • FULL STACK • WEB3",
    location: "Jabalpur, Madhya Pradesh, India",
    description: "Leading Team ILM Tech, a developer collective engineering production AI/ML prototypes, full-stack systems, and Web3 architectures.",
    responsibilities: [],
    skills: ["Team Leadership", "AI/ML Systems", "Full-Stack Web", "Web3 Architecture"],
    logo: ilmTechLogo,
    link: "https://www.linkedin.com/company/team-ilm-tech/",
    images: [ilmTechProfile],
  },
  {
    id: "ajinava-edge",
    num: "02",
    role: "Co-Founder / Community Lead",
    organization: "Ajinava Edge",
    period: "Sep 2025 — Present",
    category: "AI • WEB3 • COMMUNITY",
    location: "India",
    description: "Co-founding an emerging ecosystem uniting developers and student researchers to build practical AI & Web3 products.",
    responsibilities: [],
    skills: ["Community Building", "Developer Relations", "AI", "Web3"],
    logo: ajinavaEdgeLogo,
    link: "https://www.instagram.com/ajinava.edge",
    images: [],
  },
  {
    id: "stellar-india",
    num: "03",
    role: "India Ambassador",
    organization: "Stellar",
    period: "2025 — Present",
    category: "WEB3 • BLOCKCHAIN • ECOSYSTEM",
    location: "India · Regional",
    description: "Officially selected Stellar India Ambassador driving Soroban smart contract adoption and Web3 developer education.",
    responsibilities: [],
    skills: ["Web3", "Blockchain", "Stellar Network", "Soroban", "Ecosystem Growth"],
    logo: stellarAmbassador,
    images: [stellarAmbassador],
  },
  {
    id: "esummit-iitb",
    num: "04",
    role: "Conference Delegate",
    organization: "E-Cell IIT Bombay (E-Summit 2025)",
    period: "Dec 11–14, 2025",
    category: "ENTREPRENEURSHIP • INNOVATION",
    location: "IIT Bombay, Mumbai, India",
    description: "Engaged with founders, venture capitalists, and technology pioneers discussing the next wave of AI and deeptech startups.",
    responsibilities: [],
    skills: ["Entrepreneurship", "Tech Innovation", "Networking"],
    logo: techfestLogo,
    images: [esummitImg1, esummitImg2, esummitImg3, esummitImg4],
  },
  {
    id: "ecwoc",
    num: "05",
    role: "Mentor / Campus Rep / Contributor",
    organization: "Elite Coders Winter of Code (ECWOC)",
    period: "Jan 2026 — Mar 2026",
    category: "OPEN SOURCE • MENTORSHIP",
    location: "India · Remote",
    description: "Mentoring student contributors through Git workflows, PR etiquette, and submitting direct open-source pull requests.",
    responsibilities: [],
    skills: ["Open Source", "Mentoring", "Git & GitHub", "Code Reviews"],
    logo: ecwocLogo,
    images: [ecwocBadges, ecwocWork],
  },
  {
    id: "google-cloud-arcade",
    num: "06",
    role: "Facilitator — Cohort 1",
    organization: "Google Cloud Arcade Program",
    period: "2025",
    category: "CLOUD INFRASTRUCTURE • GCP",
    location: "Remote",
    description: "Facilitator in Google Cloud Arcade Program. Achieved Milestone 3 and completed Arcade Trooper Tier cloud labs.",
    responsibilities: [],
    skills: ["Google Cloud Platform", "Cloud Architecture", "IAM & Security"],
    logo: googleCloudLogo,
    images: [googleCloudImg1, googleCloudImg2],
  },
  {
    id: "hacktoberfest",
    num: "07",
    role: "Open-Source Contributor",
    organization: "Hacktoberfest (DigitalOcean & MLH)",
    period: "Oct 2025",
    category: "GLOBAL OPEN SOURCE",
    location: "Global · Remote",
    description: "Contributed pull requests to global open-source codebases, squashing bugs and collaborating with international maintainers.",
    responsibilities: [],
    skills: ["Open Source", "Git", "GitHub Workflow", "Collaboration"],
    logo: hacktoberfestLogo,
    images: [hacktoberfestProfile, hacktoberfestBadges1, hacktoberfestBadges2, hacktoberfestSwag, hacktoberfestSelfie],
  },
  {
    id: "gssoc",
    num: "08",
    role: "Open-Source Contributor",
    organization: "GirlScript Summer of Code",
    period: "Jul 2025 — Sep 2025",
    category: "OPEN SOURCE PROGRAM",
    location: "Remote, India",
    description: "Resolved live repository issues, built responsive components, and completed milestones under open-source mentorship.",
    responsibilities: [],
    skills: ["Open Source", "TypeScript", "React", "Git"],
    logo: gssocLogo,
    images: [],
  },
  {
    id: "osci",
    num: "09",
    role: "Contributor '25 · Core Team · Campus Lead '26",
    organization: "Open Source Connect Global (OSCI)",
    period: "Jul 2025 — Present",
    category: "COMMUNITY & OPEN SOURCE",
    location: "Jabalpur, India · Remote",
    description: "Progressed to Core Team Member and Campus Lead for 2026, driving student developer engagement.",
    responsibilities: [],
    skills: ["Leadership", "Community Growth", "Open Source"],
    logo: osciLogo,
    images: [],
  },
  {
    id: "paranox",
    num: "10",
    role: "Campus Ambassador",
    organization: "TechX Ninjas (ParanoX 2.0)",
    period: "Sep 2025 — Present",
    category: "LEADERSHIP & EVENTS",
    location: "India",
    description: "Promoted national hackathon participation, driving registrations and coordinating student builder teams for ParanoX 2.0.",
    responsibilities: [],
    skills: ["Leadership", "Community Engagement"],
    logo: paranoxLogo,
    images: [],
  },
  {
    id: "techfest",
    num: "11",
    role: "College Ambassador",
    organization: "Techfest, IIT Bombay",
    period: "Aug 2025 — Oct 2025",
    category: "TECH EVENTS & OUTREACH",
    location: "Remote · Jabalpur",
    description: "Represented Asia's largest science and technology festival at campus level, inspiring student participation in competitions.",
    responsibilities: [],
    skills: ["Event Outreach", "Leadership"],
    logo: techfestLogo,
    images: [],
  },
];

export const Experience = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="experience" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0B0D10] text-white border-t border-[#252830] relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Marker */}
        <div className="flex items-center justify-between pb-6 border-b border-[#252830] mb-12 sm:mb-16">
          <span className="editorial-eyebrow">[ 03 // TRACK RECORD ]</span>
          <span className="font-mono text-xs text-[#9A9CA3] uppercase tracking-widest hidden sm:inline-block">
            STACKING EXPERIENCE CARDS
          </span>
        </div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 sm:mb-20"
        >
          <h2 className="editorial-section-title text-white">
            <span>BUILDING.</span>
            <br />
            <span>LEADING.</span>
            <br />
            <span className="text-[#246BFD]">SHIPPING.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#9A9CA3] max-w-xl font-sans">
            A chronological timeline of official leadership roles, global ambassador programs, open-source initiatives, and verified tech experiences.
          </p>
        </motion.div>

        {/* Stacking Overlapping Cards Container */}
        <div className="relative pb-24 space-y-8 sm:space-y-12">
          {experiences.map((exp, index) => {
            // Progressive top offset for stacking overlap on scroll
            const topOffset = `calc(5rem + ${index * 16}px)`;

            return (
              <div
                key={exp.id}
                style={{
                  top: topOffset,
                  zIndex: index + 1,
                }}
                className="sticky rounded-[26px] sm:rounded-[32px] bg-[#12151B] border border-[#252830] p-6 sm:p-8 hover:border-[#246BFD]/60 transition-all duration-300 shadow-[0_-16px_36px_rgba(0,0,0,0.85)] group backdrop-blur-md"
              >
                {/* Top Metadata Strip */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#252830]">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[#246BFD]">
                      {exp.num} //
                    </span>
                    <span className="font-mono text-[11px] sm:text-xs text-[#9A9CA3] uppercase tracking-wider">
                      {exp.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 font-mono text-xs text-[#9A9CA3]">
                    <Calendar className="w-3.5 h-3.5 text-[#246BFD]" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Role, Visit Link & Organization */}
                <div className="pt-4 pb-2">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-2xl sm:text-3xl text-white uppercase tracking-tight group-hover:text-[#4D8DFF] transition-colors">
                      {exp.role}
                    </h3>

                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-xs text-[#9A9CA3] hover:text-[#246BFD] transition-colors border border-[#252830] px-3 py-1 rounded-full bg-[#0B0D10]"
                      >
                        <span>VISIT</span>
                        <ArrowUpRight className="w-3 h-3 text-[#246BFD]" />
                      </a>
                    )}
                  </div>

                  <p className="font-sans font-semibold text-sm sm:text-base text-[#F7F7F7] mt-1">
                    {exp.organization}
                    <span className="text-[#9A9CA3] font-normal text-xs sm:text-sm font-mono ml-3">
                      &middot; {exp.location}
                    </span>
                  </p>
                </div>

                {/* Shortened Description */}
                <p className="text-xs sm:text-sm text-[#9A9CA3] font-sans leading-relaxed my-2">
                  {exp.description}
                </p>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="editorial-tag text-[10px]">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Large Shape Verified Attachments */}
                {exp.images && exp.images.length > 0 && (
                  <div className="pt-4 border-t border-[#252830]/80 mt-4">
                    <p className="font-mono text-[10px] sm:text-[11px] text-[#246BFD] uppercase tracking-wider mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#246BFD]" />
                      <span>VERIFIED ATTACHMENTS &middot; {exp.images.length} {exp.images.length === 1 ? "FILE" : "FILES"}</span>
                    </p>
                    {/* Large Photo Gallery Preview */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                      {exp.images.map((img, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setSelectedImage(img)}
                          className="relative h-40 sm:h-48 rounded-xl overflow-hidden border border-[#252830] bg-[#050505] hover:border-[#246BFD] transition-all group/thumb text-left"
                        >
                          <img
                            src={img}
                            alt={`${exp.organization} document ${i + 1}`}
                            className="w-full h-full object-cover filter contrast-110 group-hover/thumb:scale-105 transition-all duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent flex items-end p-2.5">
                            <span className="font-mono text-[10px] text-white flex items-center gap-1.5 bg-[#050505]/80 px-2 py-0.5 rounded-md border border-[#252830]">
                              <Maximize2 className="w-3 h-3 text-[#246BFD]" />
                              <span>VIEW ATTACHMENT</span>
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Image Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#050505]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-2 rounded-full border border-[#252830] text-white hover:border-[#246BFD] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div
              className="max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden border border-[#252830] bg-[#0B0D10]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Experience verification preview"
                className="w-full h-full max-h-[80vh] object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
