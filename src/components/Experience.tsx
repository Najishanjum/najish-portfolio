import { useRef, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, MapPin, Maximize2, X } from "lucide-react";

/* ─────────────────────────────────────────
   EXPERIENCE DATA
───────────────────────────────────────── */
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
import osciProfile from "@/assets/osci-profile.jpg";
import esummitImg1 from "@/assets/esummit-iitb-1.jpg";
import esummitImg2 from "@/assets/esummit-iitb-2.jpg";
import esummitImg3 from "@/assets/esummit-iitb-3.jpg";
import esummitImg4 from "@/assets/esummit-iitb-4.jpg";
import esummitImg5 from "@/assets/esummit-iitb-5.jpg";
import esummitImg6 from "@/assets/esummit-iitb-6.jpg";
import esummitImg7 from "@/assets/esummit-iitb-7.jpg";
import esummitImg8 from "@/assets/esummit-iitb-8.jpg";

interface Experience {
  num: string;
  title: string;
  company: string;
  role: string;
  period: string;
  category: string;
  location: string;
  description: string;
  skills: string[];
  logo: string;
  link?: string;
  images?: string[];
}

const experiences: Experience[] = [
  {
    num: "01",
    title: "TEAM ILM TECH",
    company: "Team ILM Tech",
    role: "Team Lead",
    period: "Sep 2025 — Present",
    category: "AI / ML • Full Stack • Web3",
    location: "Jabalpur, Madhya Pradesh, India",
    description:
      "Leading Team ILM Tech, a student-led technology team focused on AI/ML, full-stack development and Web3. Coordinating developers and creative contributors while building projects, participating in hackathons and exploring emerging technologies.",
    skills: ["Team Leadership", "AI/ML", "Full Stack", "Web3"],
    logo: ilmTechLogo,
    link: "https://www.linkedin.com/company/team-ilm-tech/",
    images: [ilmTechProfile],
  },
  {
    num: "02",
    title: "AJINAVA EDGE",
    company: "Ajinava Edge",
    role: "Co-Founder / Community Lead",
    period: "Sep 2025 — Present",
    category: "AI • Web3 • Community",
    location: "India",
    description:
      "Co-building Ajinava Edge, an AI and Web3 community focused on helping developers, builders and student innovators learn, collaborate and build real-world technology.",
    skills: ["Community Building", "AI", "Web3"],
    logo: ajinavaEdgeLogo,
    link: "https://www.instagram.com/ajinava.edge",
    images: [],
  },
  {
    num: "03",
    title: "E-SUMMIT 2025",
    company: "E-Cell IIT Bombay",
    role: "Conference Attendee",
    period: "11–14 Dec 2025",
    category: "Entrepreneurship • Innovation",
    location: "IIT Bombay, Mumbai",
    description:
      "Deciphering the Labyrinth of Entrepreneurship — Exposure to global business leaders, startup founders, and innovation-driven discussions shaping the future of entrepreneurship.",
    skills: ["Entrepreneurship", "Networking", "Innovation"],
    logo: techfestLogo,
    images: [esummitImg1, esummitImg2, esummitImg3, esummitImg4, esummitImg5, esummitImg6, esummitImg7, esummitImg8],
  },
  {
    num: "04",
    title: "PARANOX 2.0",
    company: "TechX Ninjas",
    role: "Campus Ambassador",
    period: "Sep 2025 — Present",
    category: "Leadership • Events",
    location: "India",
    description:
      "Representing ParanoX 2.0 Hackathon, promoting registrations, engaging students, and fostering innovation while enhancing leadership.",
    skills: ["Leadership", "Event Management"],
    logo: paranoxLogo,
    images: [],
  },
  {
    num: "05",
    title: "TECHFEST IIT BOMBAY",
    company: "Techfest, IIT Bombay",
    role: "College Ambassador",
    period: "Aug 2025 — Oct 2025",
    category: "Tech Events • Leadership",
    location: "Jabalpur, India · Remote",
    description:
      "College Ambassador for Asia's largest science & technology festival — representing Techfest at the campus level and driving student participation.",
    skills: ["Leadership", "Event Management"],
    logo: techfestLogo,
    images: [],
  },
  {
    num: "06",
    title: "GSSOC 2025",
    company: "GirlScript Summer of Code",
    role: "Open-Source Contributor",
    period: "Jul 2025 — Sep 2025",
    category: "Open Source • Git • GitHub",
    location: "Remote, India",
    description:
      "Worked on open-source projects, collaborating with mentors, fixing bugs, adding features, improving documentation — building Git & GitHub proficiency.",
    skills: ["Open Source", "Git", "GitHub"],
    logo: gssocLogo,
    images: [],
  },
  {
    num: "07",
    title: "GOOGLE CLOUD ARCADE",
    company: "Google Cloud Arcade Program",
    role: "Facilitator — Cohort 1 (2025)",
    period: "2025",
    category: "Cloud • GCP • Labs",
    location: "Remote",
    description:
      "Selected as a participant in the Google Cloud Arcade Facilitator Program. Completed Arcade Trooper Tier — Campaign 2025 and achieved Milestone 3, including hands-on labs and cloud skill badges.",
    skills: ["Google Cloud", "Cloud Computing"],
    logo: googleCloudLogo,
    images: [googleCloudImg1, googleCloudImg2],
  },
  {
    num: "08",
    title: "HACKTOBERFEST 2025",
    company: "Powered by DigitalOcean & MLH",
    role: "Open-Source Contributor",
    period: "Oct 1 — Oct 30, 2025",
    category: "Open Source • Global",
    location: "Global · Remote",
    description:
      "Participated in Hacktoberfest 2025 as an open-source contributor, submitting quality PRs, collaborating with maintainers, and contributing to community-driven projects.",
    skills: ["Open Source", "Git", "GitHub"],
    logo: hacktoberfestLogo,
    images: [hacktoberfestProfile, hacktoberfestBadges1, hacktoberfestBadges2, hacktoberfestSwag, hacktoberfestSelfie],
  },
  {
    num: "09",
    title: "STELLAR INDIA",
    company: "Stellar",
    role: "India Ambassador",
    period: "2025 — Present",
    category: "Web3 • Blockchain • Community",
    location: "India",
    description:
      "Officially selected as a @IND_stellar Ambassador. Representing Stellar in India — building, growing and promoting the Stellar ecosystem to developers and student innovators across the country.",
    skills: ["Web3", "Blockchain", "Community"],
    logo: stellarAmbassador,
    images: [stellarAmbassador],
  },
  {
    num: "10",
    title: "ECWOC 2026",
    company: "Elite Coders Winter of Code",
    role: "Mentor / Campus Rep / Contributor",
    period: "Jan 2026 — Mar 2026",
    category: "Open Source • Mentoring",
    location: "India",
    description:
      "Serving as Mentor, Campus Representative, and Contributor — supporting students at every stage of their open-source journey, from beginner onboarding to collaborative contributions.",
    skills: ["Open Source", "Mentoring", "Leadership"],
    logo: ecwocLogo,
    images: [ecwocBadges, ecwocWork],
  },
  {
    num: "11",
    title: "MOOD INDIGO",
    company: "Mood Indigo, IIT Bombay",
    role: "Indigo Squad Member",
    period: "Jul 2025 — Aug 2025",
    category: "Culture • Leadership",
    location: "Remote",
    description:
      "Active member of the Indigo Squad — contributing to social media marketing and leadership efforts for one of Asia's largest college cultural festivals.",
    skills: ["Leadership", "Social Media Marketing"],
    logo: moodIndigoLogo,
    images: [],
  },
  {
    num: "12",
    title: "OSCI GLOBAL",
    company: "Open Source Connect Global",
    role: "Contributor '25 · Core Team · Campus Lead '26",
    period: "Jul 2025 — Present",
    category: "Open Source • Community",
    location: "Jabalpur, India · Remote",
    description:
      "Multi-role involvement: Contributor in 2025, promoted to Core Team Member, and Campus Lead for 2026 — driving open-source adoption and community building on campus.",
    skills: ["Open Source", "UI/UX", "Community"],
    logo: osciLogo,
    images: [osciProfile],
  },
];

/* ─────────────────────────────────────────
   LIGHTBOX
───────────────────────────────────────── */
const Lightbox = ({
  images,
  initialIndex,
  onClose,
}: {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}) => {
  const [currentIdx, setCurrentIdx] = useState(initialIndex);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") {
        setCurrentIdx((prev) => (prev + 1) % images.length);
      }
      if (e.key === "ArrowLeft") {
        setCurrentIdx((prev) => (prev - 1 + images.length) % images.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [images.length, onClose]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev + 1) % images.length);
  };

  return (
    <AnimatePresence>
      <motion.div
        key="lb"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[200] flex items-center justify-center p-4 backdrop-blur-md"
        style={{ background: "rgba(9,9,9,0.94)" }}
      >
        <div className="absolute top-5 inset-x-6 flex items-center justify-between pointer-events-none">
          <span className="font-mono text-xs text-white/70 tracking-widest uppercase">
            {String(currentIdx + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </span>
          <button
            onClick={onClose}
            aria-label="Close"
            className="pointer-events-auto w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              aria-label="Previous image"
              className="absolute left-4 sm:left-8 z-10 w-12 h-12 rounded-full border border-white/20 bg-black/60 backdrop-blur flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-105"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next image"
              className="absolute right-4 sm:right-8 z-10 w-12 h-12 rounded-full border border-white/20 bg-black/60 backdrop-blur flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-105"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        <AnimatePresence mode="wait">
          <motion.img
            key={currentIdx}
            src={images[currentIdx]}
            alt=""
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.94, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="max-w-[92vw] max-h-[86vh] object-contain rounded-xl shadow-2xl"
          />
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};

/* ─────────────────────────────────────────
   EXPERIENCE CARD
───────────────────────────────────────── */
interface CardProps {
  exp: Experience;
  index: number;
  total: number;
}

const ExperienceCard = ({ exp, index, total }: CardProps) => {
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);

  /* Subtle top offset so stacked cards peek underneath cleanly */
  const peekOffset = Math.min(index * 3, 24);
  const isLast = index === total - 1;

  const galleryGridClass = !exp.images?.length
    ? ""
    : exp.images.length === 1
    ? "exp-gallery-grid-1"
    : exp.images.length === 2
    ? "exp-gallery-grid-2"
    : exp.images.length === 3
    ? "exp-gallery-grid-3"
    : exp.images.length === 4
    ? "exp-gallery-grid-4"
    : exp.images.length === 5
    ? "exp-gallery-grid-5"
    : "exp-gallery-grid-many";

  return (
    <>
      <div
        className="exp-card sticky"
        style={{
          top: `${72 + peekOffset}px`,
          zIndex: 10 + index * 10,
          marginBottom: isLast ? "0px" : "40vh",
        }}
      >
        {/* ── CARD SHELL ── */}
        <div
          className="exp-card-inner"
          style={{
            background: index % 2 === 0 ? "#FAFAF8" : "#F4F3EF",
          }}
        >
          {/* ── TOP META ROW ── */}
          <div className="exp-top-row">
            <span className="exp-meta-text">{exp.period}</span>
            <span className="exp-meta-divider" />
            <span className="exp-meta-text exp-category">{exp.category}</span>
            <span className="exp-card-count">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
          </div>

          {/* ── BODY ── */}
          <div className="exp-body">
            {/* LEFT: large number */}
            <div className="exp-left" aria-hidden="true">
              <span className="exp-eyebrow">EXPERIENCE</span>
              <span className="exp-big-num">{exp.num}</span>
              {exp.logo && (
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="exp-logo"
                  loading="lazy"
                />
              )}
            </div>

            {/* RIGHT: content */}
            <div className="exp-right">
              {/* Company title */}
              <h3 className="exp-company-title">{exp.title}</h3>

              {/* Role */}
              <p className="exp-role">{exp.role}</p>

              {/* Divider */}
              <div className="exp-divider" />

              {/* Location */}
              <div className="exp-location">
                <MapPin className="exp-location-icon" />
                <span>{exp.location}</span>
              </div>

              {/* Description */}
              <p className="exp-desc">{exp.description}</p>

              {/* Skills */}
              {exp.skills.length > 0 && (
                <div className="exp-skills">
                  {exp.skills.map((s) => (
                    <span key={s} className="exp-skill-chip">{s}</span>
                  ))}
                </div>
              )}

              {/* Images — Bold Gallery Showcase */}
              {exp.images && exp.images.length > 0 && (
                <div className="exp-gallery-box">
                  <div className="exp-gallery-header">
                    <span className="exp-gallery-badge">
                      <span className="exp-gallery-dot" />
                      EVENT ARCHIVE &amp; MOMENTS
                    </span>
                    <span className="exp-gallery-count">
                      {String(exp.images.length).padStart(2, "0")} {exp.images.length === 1 ? "PHOTO" : "PHOTOS"}
                    </span>
                  </div>

                  <div className={`exp-gallery-grid ${galleryGridClass}`}>
                    {exp.images.map((img, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setLightbox({ images: exp.images!, index: i })}
                        className="exp-img-card"
                        aria-label={`View photo ${i + 1} of ${exp.images!.length}`}
                      >
                        <img src={img} alt={`${exp.title} moment ${i + 1}`} loading="lazy" />
                        <div className="exp-img-overlay">
                          <span className="exp-img-zoom-btn">
                            <Maximize2 className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Arrow icon */}
            {exp.link ? (
              <a
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="exp-arrow"
                aria-label={`Visit ${exp.company}`}
              >
                <ArrowUpRight />
              </a>
            ) : (
              <span className="exp-arrow exp-arrow-static" aria-hidden="true">
                <ArrowUpRight />
              </span>
            )}
          </div>
        </div>
      </div>

      {lightbox && (
        <Lightbox
          images={lightbox.images}
          initialIndex={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
};

/* ─────────────────────────────────────────
   EXPERIENCE SECTION
───────────────────────────────────────── */
export const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  /* Reveal section header once it enters viewport */
  useEffect(() => {
    if (!sectionRef.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeaderVisible(true); },
      { threshold: 0.05 }
    );
    obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* ── Scoped styles injected as a style tag ── */}
      <style>{`
        /* ============================================================
           EXPERIENCE SECTION — EDITORIAL STACKED SCROLL
           ============================================================ */

        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Space+Mono:wght@400;700&display=swap');

        /* Section wrapper */
        #experience {
          background: #FAF8F3;
          padding-bottom: 120px;
        }

        /* ── SECTION HEADER ── */
        .exp-section-header {
          max-width: 1320px;
          margin: 0 auto;
          padding: 96px 32px 56px;
          border-bottom: 1.5px solid #090909;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }

        .exp-section-eyebrow {
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #5B5B5B;
          margin-bottom: 12px;
        }

        .exp-section-title {
          font-family: 'Anton', 'Archivo Black', 'Space Grotesk', sans-serif;
          font-size: clamp(3.5rem, 8vw, 7rem);
          font-weight: 900;
          line-height: 0.93;
          letter-spacing: -0.02em;
          color: #090909;
          text-transform: uppercase;
        }

        .exp-section-count {
          font-family: 'Space Mono', monospace;
          font-size: 0.7rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #5B5B5B;
          white-space: nowrap;
          padding-bottom: 8px;
        }

        /* ── STACK CONTAINER ── */
        .exp-stack {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 24px;
          /* Height allows scroll-stacking: each card ~90vh + sticky range */
          padding-bottom: 40px;
        }

        /* ── SINGLE STICKY CARD ── */
        .exp-card {
          position: sticky;
          will-change: transform;
        }

        .exp-card-inner {
          border: 1.5px solid #090909;
          border-radius: 8px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 20px rgba(9,9,9,0.06);
          transition: box-shadow 200ms ease;
        }

        .exp-card-inner:hover {
          box-shadow: 0 10px 40px rgba(9,9,9,0.12);
        }

        /* ── TOP META ROW ── */
        .exp-top-row {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 11px 24px;
          border-bottom: 1.5px solid rgba(9,9,9,0.1);
          background: rgba(9,9,9,0.025);
        }

        .exp-meta-text {
          font-family: 'Space Mono', monospace;
          font-size: 0.62rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #5B5B5B;
        }

        .exp-meta-divider {
          width: 1px;
          height: 12px;
          background: rgba(9,9,9,0.2);
        }

        .exp-category {
          flex: 1;
        }

        .exp-card-count {
          font-family: 'Space Mono', monospace;
          font-size: 0.58rem;
          letter-spacing: 0.16em;
          color: rgba(9,9,9,0.3);
          margin-left: auto;
        }

        /* ── BODY (LEFT + RIGHT) ── */
        .exp-body {
          flex: 1;
          display: grid;
          grid-template-columns: 210px 1fr auto;
          gap: 0;
        }

        /* ── LEFT COLUMN ── */
        .exp-left {
          border-right: 1.5px solid rgba(9,9,9,0.1);
          padding: 24px 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          justify-content: space-between;
        }

        .exp-eyebrow {
          font-family: 'Space Mono', monospace;
          font-size: 0.58rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(9,9,9,0.35);
        }

        .exp-big-num {
          font-family: 'Anton', 'Archivo Black', sans-serif;
          font-size: clamp(3.5rem, 6vw, 5.5rem);
          font-weight: 900;
          line-height: 0.9;
          letter-spacing: -0.04em;
          color: #090909;
          display: block;
        }

        .exp-logo {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          object-fit: cover;
          border: 1.5px solid rgba(9,9,9,0.12);
          margin-top: auto;
        }

        /* ── RIGHT COLUMN ── */
        .exp-right {
          padding: 24px 28px 24px 32px;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .exp-company-title {
          font-family: 'Anton', 'Archivo Black', sans-serif;
          font-size: clamp(1.6rem, 3vw, 2.4rem);
          font-weight: 900;
          line-height: 0.95;
          letter-spacing: -0.015em;
          text-transform: uppercase;
          color: #090909;
          margin-bottom: 6px;
        }

        .exp-role {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.92rem;
          font-weight: 600;
          color: #5B5B5B;
          margin-bottom: 12px;
        }

        .exp-divider {
          height: 1px;
          background: rgba(9,9,9,0.1);
          margin-bottom: 12px;
        }

        .exp-location {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #5B5B5B;
          margin-bottom: 12px;
        }

        .exp-location-icon {
          width: 12px;
          height: 12px;
          flex-shrink: 0;
        }

        .exp-desc {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.85rem;
          line-height: 1.6;
          color: #3a3a3a;
          max-width: 600px;
          margin-bottom: 14px;
        }

        /* Skills */
        .exp-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 14px;
        }

        .exp-skill-chip {
          font-family: 'Space Mono', monospace;
          font-size: 0.56rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 3px 8px;
          border: 1px solid rgba(9,9,9,0.2);
          border-radius: 3px;
          color: #090909;
          background: rgba(9,9,9,0.02);
        }

        /* ── BOLD GALLERY BOX ── */
        .exp-gallery-box {
          margin-top: 8px;
          background: #0C0D10;
          border: 1.5px solid #090909;
          border-radius: 12px;
          padding: 12px 14px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
        }

        .exp-gallery-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 8px;
          margin-bottom: 10px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .exp-gallery-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #EDEDED;
        }

        .exp-gallery-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10B981;
          box-shadow: 0 0 8px rgba(16, 185, 129, 0.7);
        }

        .exp-gallery-count {
          font-family: 'Space Mono', monospace;
          font-size: 0.58rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.5);
        }

        /* Responsive Grid Formats */
        .exp-gallery-grid {
          display: grid;
          gap: 10px;
          width: 100%;
        }

        .exp-gallery-grid-1 {
          grid-template-columns: minmax(180px, 260px);
        }

        .exp-gallery-grid-2 {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .exp-gallery-grid-3 {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .exp-gallery-grid-4 {
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .exp-gallery-grid-5 {
          grid-template-columns: repeat(5, minmax(0, 1fr));
        }

        .exp-gallery-grid-many {
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        /* Image Card (Full view - NO clipping, letterboxed on dark frame) */
        .exp-img-card {
          position: relative;
          width: 100%;
          height: 90px;
          border-radius: 8px;
          overflow: hidden;
          background: #14151B;
          border: 1px solid rgba(255, 255, 255, 0.12);
          cursor: zoom-in;
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          outline: none;
          transition: transform 200ms ease, border-color 200ms ease, box-shadow 200ms ease;
        }

        .exp-gallery-grid-1 .exp-img-card {
          height: 125px;
        }

        .exp-gallery-grid-2 .exp-img-card {
          height: 110px;
        }

        .exp-gallery-grid-3 .exp-img-card,
        .exp-gallery-grid-4 .exp-img-card {
          height: 95px;
        }

        .exp-gallery-grid-5 .exp-img-card,
        .exp-gallery-grid-many .exp-img-card {
          height: 85px;
        }

        .exp-img-card:hover {
          transform: translateY(-2px) scale(1.02);
          border-color: #FFD21C;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);
          z-index: 2;
        }

        .exp-img-card img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 5px;
          display: block;
          transition: transform 220ms ease;
        }

        .exp-img-card:hover img {
          transform: scale(1.04);
        }

        .exp-img-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.35);
          opacity: 0;
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          padding: 6px;
          transition: opacity 180ms ease;
          pointer-events: none;
        }

        .exp-img-card:hover .exp-img-overlay {
          opacity: 1;
        }

        .exp-img-zoom-btn {
          width: 24px;
          height: 24px;
          border-radius: 6px;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(255, 255, 255, 0.4);
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ── ARROW ── */
        .exp-arrow {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 24px 18px;
          border-left: 1.5px solid rgba(9,9,9,0.1);
          color: rgba(9,9,9,0.3);
          transition: color 200ms ease;
          text-decoration: none;
        }

        .exp-arrow svg {
          width: 18px;
          height: 18px;
          transition: transform 200ms ease;
        }

        a.exp-arrow:hover {
          color: #090909;
        }

        a.exp-arrow:hover svg {
          transform: translate(2px, -2px);
        }

        .exp-arrow-static {
          cursor: default;
        }

        /* ── SCROLL SPACER ── */
        .exp-scroll-spacer {
          height: 30vh;
          pointer-events: none;
        }

        /* ── REDUCED MOTION ── */
        @media (prefers-reduced-motion: reduce) {
          .exp-card {
            position: relative !important;
            top: 0 !important;
            margin-bottom: 32px !important;
          }
        }

        /* ── RESPONSIVE: TABLET ── */
        @media (max-width: 1024px) {
          .exp-body {
            grid-template-columns: 160px 1fr auto;
          }
          .exp-left {
            padding: 20px 16px;
          }
          .exp-right {
            padding: 20px 20px 20px 24px;
          }
          .exp-big-num {
            font-size: clamp(2.8rem, 6vw, 4.5rem);
          }
          .exp-company-title {
            font-size: clamp(1.4rem, 3vw, 2rem);
          }
          .exp-gallery-grid-4,
          .exp-gallery-grid-5,
          .exp-gallery-grid-many {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        /* ── RESPONSIVE: MOBILE ── */
        @media (max-width: 680px) {
          .exp-section-header {
            padding: 64px 20px 32px;
          }
          .exp-card {
            position: relative !important;
            top: 0 !important;
            margin-bottom: 24px !important;
          }
          .exp-card-inner {
            min-height: auto;
          }
          .exp-body {
            grid-template-columns: 1fr;
            grid-template-rows: auto 1fr;
          }
          .exp-left {
            border-right: none;
            border-bottom: 1.5px solid rgba(9,9,9,0.1);
            flex-direction: row;
            align-items: center;
            padding: 16px 18px;
            gap: 16px;
          }
          .exp-big-num {
            font-size: 2.8rem;
          }
          .exp-eyebrow {
            display: none;
          }
          .exp-logo {
            margin-top: 0;
            margin-left: auto;
          }
          .exp-right {
            padding: 20px 18px 22px;
          }
          .exp-company-title {
            font-size: 1.5rem;
          }
          .exp-arrow {
            display: none;
          }
          .exp-scroll-spacer {
            display: none;
          }
          .exp-gallery-box {
            padding: 10px;
            margin-top: 14px;
            border-radius: 10px;
          }
          .exp-gallery-grid-1,
          .exp-gallery-grid-2,
          .exp-gallery-grid-3,
          .exp-gallery-grid-4,
          .exp-gallery-grid-5,
          .exp-gallery-grid-many {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 8px;
          }
          .exp-img-card {
            height: 80px !important;
            border-radius: 6px;
          }
        }
      `}</style>

      <section id="experience" ref={sectionRef}>
        {/* ── SECTION HEADER ── */}
        <motion.div
          className="exp-section-header"
          initial={{ opacity: 0, y: 32 }}
          animate={headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <p className="exp-section-eyebrow">Career &amp; Community</p>
            <h2 className="exp-section-title">
              Experience
            </h2>
          </div>
          <span className="exp-section-count">
            {String(experiences.length).padStart(2, "0")} entries
          </span>
        </motion.div>

        {/* ── STACKED CARDS ── */}
        <div className="exp-stack">
          {experiences.map((exp, i) => (
            <ExperienceCard
              key={exp.num}
              exp={exp}
              index={i}
              total={experiences.length}
            />
          ))}
          {/* Final spacer so last card fully scrolls into view */}
          <div className="exp-scroll-spacer" aria-hidden="true" />
        </div>
      </section>
    </>
  );
};
