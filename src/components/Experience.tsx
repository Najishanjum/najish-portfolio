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
    description: "Leading Team ILM Tech, a developer collective focused on engineering production AI/ML prototypes, full-stack systems, and decentralized applications.",
    responsibilities: [
      "Orchestrate project architectures and sprint roadmaps for competitive hackathons.",
      "Lead cross-functional teams across machine learning, frontend engineering, and smart contract integration.",
      "Manage repository standards, code reviews, and automated deployment pipelines.",
    ],
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
    description: "Co-founding Ajinava Edge, an emerging ecosystem uniting developers, student researchers, and Web3 builders to collaborate on real-world technology.",
    responsibilities: [
      "Host technical workshops and developer onboarding sessions into AI and decentralized protocols.",
      "Cultivate collaborative hackathon squads and mentor junior student builders.",
    ],
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
    description: "Officially selected as a Stellar India Ambassador. Representing the Stellar blockchain ecosystem in India to drive adoption of Soroban smart contracts and decentralized payment rails.",
    responsibilities: [
      "Educate developers on the Stellar network and Soroban Rust-based smart contract environment.",
      "Organize community engagements and guide student builders into Web3 hackathon opportunities.",
    ],
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
    description: "Participated in Asia's premier entrepreneurship conference, engaging with founders, venture capitalists, and technology pioneers discussing the next wave of AI and deeptech startups.",
    responsibilities: [
      "Engaged in technical keynotes and venture discussions on scaling digital products.",
      "Networked with national innovators and startup operators across collegiate incubators.",
    ],
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
    description: "Serving in a multi-faceted leadership role: mentoring student contributors, representing the program on campus, and submitting direct open-source pull requests.",
    responsibilities: [
      "Guide junior contributors through Git, PR etiquette, and codebase navigation.",
      "Review issues and support students resolving their first open-source features.",
    ],
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
    description: "Selected participant and facilitator in the Google Cloud Arcade Program. Achieved Milestone 3, completed Arcade Trooper Tier (Campaign 2025), and completed hands-on cloud labs.",
    responsibilities: [
      "Completed hands-on GCP compute, IAM, storage, and networking labs.",
      "Earned official Google Cloud skill badges and guided peers through cloud deployments.",
    ],
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
    description: "Active contributor to global open-source repositories throughout Hacktoberfest 2025, submitting quality pull requests and collaborating with international maintainers.",
    responsibilities: [
      "Resolved bugs, improved test coverage, and refined documentation across multiple open-source codebases.",
    ],
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
    description: "Collaborated in one of India's largest student open-source programs, resolving live repository issues under mentorship.",
    responsibilities: [
      "Implemented features and squashed frontend bugs across community-maintained projects.",
    ],
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
    description: "Progressed from open-source contributor in 2025 to Core Team Member and Campus Lead for 2026, driving student technical engagement.",
    responsibilities: [
      "Lead campus developer chapters and promote open-source collaboration among peers.",
    ],
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
    description: "Promoted national hackathon participation, driving registrations and coordinating student teams for ParanoX 2.0.",
    responsibilities: [
      "Coordinated campus builder teams for hackathon submissions.",
    ],
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
    responsibilities: [
      "Drove student awareness for robotics, AI, and coding challenges.",
    ],
    skills: ["Event Outreach", "Leadership"],
    logo: techfestLogo,
    images: [],
  },
];

export const Experience = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="experience" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0B0D10] text-white border-t border-[#252830] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Marker */}
        <div className="flex items-center justify-between pb-6 border-b border-[#252830] mb-12 sm:mb-16">
          <span className="editorial-eyebrow">[ 03 // TRACK RECORD ]</span>
          <span className="font-mono text-xs text-[#9A9CA3] uppercase tracking-widest hidden sm:inline-block">
            LEADERSHIP, AMBASSADORSHIPS &amp; CONTRIBUTIONS
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

        {/* Editorial Timeline / Cards */}
        <div className="relative border-l border-[#252830] ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true, margin: "-80px" }}
              className="relative group"
            >
              {/* Electric Blue Timeline Indicator Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-6 w-3.5 h-3.5 rounded-full bg-[#050505] border-2 border-[#246BFD] group-hover:scale-125 group-hover:bg-[#246BFD] transition-all" />

              {/* Panel Container */}
              <div className="rounded-[24px] bg-[#12151B] border border-[#252830] p-6 sm:p-8 hover:border-[#246BFD]/50 transition-all duration-300">
                {/* Top Metadata Strip */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#252830]">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[#246BFD]">
                      {exp.num} //
                    </span>
                    <span className="font-mono text-xs text-[#9A9CA3] uppercase tracking-wider">
                      {exp.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 font-mono text-xs text-[#9A9CA3]">
                    <Calendar className="w-3.5 h-3.5 text-[#246BFD]" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Role & Organization */}
                <div className="pt-5 pb-3">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-2xl sm:text-3xl text-white uppercase tracking-tight group-hover:text-[#4D8DFF] transition-colors">
                      {exp.role}
                    </h3>

                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-xs text-[#9A9CA3] hover:text-[#246BFD] transition-colors"
                      >
                        <span>VISIT</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  <p className="font-sans font-semibold text-base sm:text-lg text-[#F7F7F7] mt-1">
                    {exp.organization}
                    <span className="text-[#9A9CA3] font-normal text-sm font-mono ml-3">
                      &middot; {exp.location}
                    </span>
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-[#9A9CA3] font-sans leading-relaxed my-3">
                  {exp.description}
                </p>

                {/* Responsibilities list if present */}
                {exp.responsibilities && exp.responsibilities.length > 0 && (
                  <ul className="space-y-1.5 my-4">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#F7F7F7]/80">
                        <ChevronRight className="w-3.5 h-3.5 text-[#246BFD] flex-shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="editorial-tag">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Attached Media / Photos Preview */}
                {exp.images && exp.images.length > 0 && (
                  <div className="pt-6 border-t border-[#252830] mt-5">
                    <p className="font-mono text-[11px] text-[#9A9CA3] uppercase tracking-wider mb-3">
                      VERIFIED ATTACHMENTS &middot; {exp.images.length} {exp.images.length === 1 ? "FILE" : "FILES"}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {exp.images.map((img, i) => (
                        <button
                          key={i}
                          onClick={() => setSelectedImage(img)}
                          className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border border-[#252830] hover:border-[#246BFD] transition-all group/thumb"
                        >
                          <img
                            src={img}
                            alt={`${exp.organization} preview ${i + 1}`}
                            className="w-full h-full object-cover filter grayscale contrast-125 group-hover/thumb:grayscale-0 transition-all"
                          />
                          <div className="absolute inset-0 bg-[#050505]/40 opacity-0 group-hover/thumb:opacity-100 flex items-center justify-center transition-opacity">
                            <Maximize2 className="w-4 h-4 text-white" />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
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
