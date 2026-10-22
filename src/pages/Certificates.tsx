import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Award, Calendar, Building, Handshake, Heart, Star, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import collaborateCard from "@/assets/collaborate-card.jpg";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BadgesCarousel3D } from "@/components/BadgesCarousel3D";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

interface CertStats {
  likes: number;
  rating_sum: number;
  rating_count: number;
}
type StatsMap = Record<number, CertStats>;

// Badge/Pass images
import passArtemis from "@/assets/pass-artemis.jpg";
import passAiSummit from "@/assets/pass-ai-summit.jpg";
import passRektoff from "@/assets/pass-rektoff.jpg";
import passApertre from "@/assets/pass-apertre.jpg";
import passAcehack from "@/assets/pass-acehack.jpg";
import passGwyPreconf from "@/assets/pass-gwy-preconf.jpg";
import passEliteHack from "@/assets/pass-elite-hack.jpg";
// Certificate images
import certHackUp from "@/assets/cert-hack-up.png";
import certCbitHacktoberfest from "@/assets/cert-cbit-hacktoberfest.png";
import certParanox from "@/assets/cert-paranox.png";
import certKodekalesh from "@/assets/cert-kodekalesh.png";
import certNasa from "@/assets/cert-nasa.jpg";
import certTechclasher from "@/assets/cert-techclasher.jpg";
import certGdgGithub from "@/assets/cert-gdg-github.jpg";
import certGdgIntro from "@/assets/cert-gdg-intro.jpg";
import certPixelRiot from "@/assets/cert-pixel-riot.png";
import certGemini from "@/assets/cert-gemini.jpg";
import certOsci from "@/assets/cert-osci.jpg";
import certTataCrucible from "@/assets/cert-tata-crucible.png";
import certInfosys from "@/assets/cert-infosys.jpg";
import certAwsForage from "@/assets/cert-aws-forage.jpg";
import certCodespark from "@/assets/cert-codespark.jpg";
import certCodematrixGenesis from "@/assets/cert-codematrix-genesis.jpg";
import certAwsGenai from "@/assets/cert-aws-genai.jpg";
import certCiscoCpp from "@/assets/cert-cisco-cpp.png";
import certError404 from "@/assets/cert-error404.png";
import certNeo4j from "@/assets/cert-neo4j.png";
import certEcwocAssessment from "@/assets/cert-ecwoc-assessment.jpg";
import certNasaSpaceAppsJabalpur from "@/assets/cert-nasa-space-apps-jabalpur.png";
import certEncodeIitg from "@/assets/cert-encode-iitg.png";
import certAiqrew from "@/assets/cert-aiqrew.png";
import certHackshastra from "@/assets/cert-hackshastra.png";
import certTechsprintGdg from "@/assets/cert-techsprint-gdg.png";
import certCodefront from "@/assets/cert-codefront.png";
import certEcwocCampusRep from "@/assets/cert-ecwoc-campus-rep.jpg";
import certTechfestIitb from "@/assets/cert-techfest-iitb.png";
import passStellarMastery from "@/assets/pass-stellar-mastery.jpg";
import passApertreMentor from "@/assets/pass-apertre-mentor.jpg";
import passOpenSourceDay from "@/assets/pass-open-source-day.jpg";
import passMonadBlitz from "@/assets/pass-monad-blitz.jpg";
import passDev3pack from "@/assets/pass-dev3pack.png";
import passFrontierSuperteam from "@/assets/pass-frontier-superteam.png";
import passHhGoaBanner from "@/assets/pass-hh-goa-banner.jpg";
import passHhGoaBuilder from "@/assets/pass-hh-goa-builder.jpg";
import passSyndicateHackathon from "@/assets/pass-syndicate-hackathon.png";
import passCryptoWorldsFair from "@/assets/pass-crypto-worlds-fair.jpg";
import passDevconIndia from "@/assets/pass-devcon-india.png";

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  verificationLink?: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Hack with UttarPradesh 2025",
    issuer: "Chandigarh University TBI",
    date: "November 5, 2025",
    image: certHackUp,
  },
  {
    id: 2,
    title: "CBIT Hacktoberfest Hackathon 2025",
    issuer: "CBIT Open Source Community",
    date: "October 25-26, 2025",
    image: certCbitHacktoberfest,
  },
  {
    id: 3,
    title: "Paranox 2.0 Participation",
    issuer: "TechXNinjas",
    date: "August 20 - November 16, 2025",
    image: certParanox,
  },
  {
    id: 4,
    title: "KodeKalesh Recognition",
    issuer: "IDEAKODE",
    date: "2025",
    image: certKodekalesh,
  },
  {
    id: 5,
    title: "NASA Space Apps Challenge - Galactic Problem Solver",
    issuer: "NASA",
    date: "October 4-5, 2025",
    image: certNasa,
  },
  {
    id: 6,
    title: "Techclasher Hackathon",
    issuer: "GNIOT Engineering College",
    date: "October 6-9, 2025",
    image: certTechclasher,
  },
  {
    id: 7,
    title: "Mastering GitHub & Open Source",
    issuer: "Google Developer Groups On Campus GGITS",
    date: "November 3, 2024",
    image: certGdgGithub,
  },
  {
    id: 8,
    title: "GDGC Introductory Session",
    issuer: "GDGC GGITS",
    date: "September 17, 2025",
    image: certGdgIntro,
  },
  {
    id: 9,
    title: "Pixel Riot Hackathon Qualification",
    issuer: "Pixel Riot",
    date: "November 6-16, 2025",
    image: certPixelRiot,
  },
  {
    id: 10,
    title: "Gemini Certified Student",
    issuer: "Google for Education",
    date: "October 17, 2025",
    image: certGemini,
  },
  {
    id: 11,
    title: "Open Source Connect India 2025",
    issuer: "NexFellow & Julep",
    date: "August 15-30, 2025",
    image: certOsci,
  },
  {
    id: 12,
    title: "TATA Crucible Campus Quiz 2025",
    issuer: "Tata Group / Unstop",
    date: "2025",
    image: certTataCrucible,
  },
  {
    id: 13,
    title: "Cloud Technologies Course Completion",
    issuer: "Infosys Springboard",
    date: "March 3, 2025",
    image: certInfosys,
  },
  {
    id: 14,
    title: "AWS Solutions Architecture Job Simulation",
    issuer: "Forage / AWS",
    date: "August 30, 2025",
    image: certAwsForage,
  },
  {
    id: 15,
    title: "CodeSpark – 72 Hour Build Challenge",
    issuer: "Developer Community, GEC Siwan",
    date: "2025",
    image: certCodespark,
  },
  {
    id: 16,
    title: "CodeMatrix: Genesis Hackathon",
    issuer: "GDG DR AITD, Kanpur & AITD-Events Community",
    date: "December 6-8, 2025",
    image: certCodematrixGenesis,
  },
  {
    id: 17,
    title: "AWS Academy Graduate - Generative AI Foundations",
    issuer: "AWS Academy",
    date: "September 25, 2025",
    image: certAwsGenai,
    verificationLink: "https://www.credly.com/badges/b7ae1e6b-9228-4610-a7a8-bbfa92b4d1f4",
  },
  {
    id: 18,
    title: "C++ Essentials 1 - Statement of Achievement",
    issuer: "Cisco Networking Academy & OpenEDG C++ Institute",
    date: "March 25, 2025",
    image: certCiscoCpp,
  },
  {
    id: 19,
    title: "Error 404: Beyond the Limit",
    issuer: "Jai Hind College, Mumbai",
    date: "December 10, 2025",
    image: certError404,
  },
  {
    id: 20,
    title: "Neo4j Certified Professional",
    issuer: "Neo4j GraphAcademy",
    date: "December 26, 2025",
    image: certNeo4j,
  },
  {
    id: 21,
    title: "ECWoC Assessment - Certificate of Participation",
    issuer: "Elite Coders",
    date: "January 2026",
    image: certEcwocAssessment,
  },
  {
    id: 22,
    title: "NASA Space Apps Challenge 2025 - Jabalpur Edition",
    issuer: "GGITS / Unstop",
    date: "October 2025",
    image: certNasaSpaceAppsJabalpur,
  },
  {
    id: 23,
    title: "EnCode 2026: Code To Innovate - Udgam 2026",
    issuer: "IIT Guwahati",
    date: "January 2026",
    image: certEncodeIitg,
  },
  {
    id: 24,
    title: "AIQrew Participation",
    issuer: "Google Student Ambassador Program",
    date: "January 26, 2026",
    image: certAiqrew,
  },
  {
    id: 25,
    title: "HackShastra SnowHackIPEC - Round 1 Participation",
    issuer: "HackShastra / IPEC",
    date: "February 2026",
    image: certHackshastra,
  },
  {
    id: 26,
    title: "TechSprint Hackathon Participation",
    issuer: "Google Developer Groups On Campus GGITS",
    date: "December 27, 2025",
    image: certTechsprintGdg,
  },
  {
    id: 27,
    title: "Codefront 2.0 Hackathon Participation",
    issuer: "Google Developer Groups On Campus - J.K Institute of Applied Physics and Technology",
    date: "2026",
    image: certCodefront,
  },
  {
    id: 28,
    title: "ECWoC Campus Representative - Certificate of Appreciation",
    issuer: "Elite Coders",
    date: "2026",
    image: certEcwocCampusRep,
  },
  {
    id: 29,
    title: "Techfest IIT Bombay - College Ambassador",
    issuer: "Techfest, IIT Bombay",
    date: "2025-2026",
    image: certTechfestIitb,
  },
];

interface Pass {
  id: number;
  title: string;
  issuer: string;
  description: string;
  image: string;
}

const passes: Pass[] = [
  {
    id: 1,
    title: "NASA Artemis II Boarding Pass",
    issuer: "NASA",
    description: "Exclusive participation badge representing involvement in the NASA Artemis II initiative — humanity's return to the Moon.",
    image: passArtemis,
  },
  {
    id: 2,
    title: "Great Asia AI Summit 2026",
    issuer: "Salesforce",
    description: "Attendee pass for one of Asia's leading AI innovation summits, bringing together founders, researchers and engineers.",
    image: passAiSummit,
  },
  {
    id: 3,
    title: "Solana Rust Security Bootcamp",
    issuer: "Rektoff - Cohort 3",
    description: "Completed advanced Web3 security training focused on Solana programs, Rust auditing and on-chain attack vectors.",
    image: passRektoff,
  },
  {
    id: 4,
    title: "Apertre 3.0 Mentee",
    issuer: "Resourcio Community",
    description: "Selected mentee in a competitive growth and innovation program guiding builders through real-world open-source projects.",
    image: passApertre,
  },
  {
    id: 5,
    title: "Stellar Journey to Mastery",
    issuer: "Stellar / Rise In",
    description: "Successfully completed the structured learning journey in blockchain development on the Stellar ecosystem.",
    image: passStellarMastery,
  },
  {
    id: 6,
    title: "Apertre 3.0 Mentor",
    issuer: "Resourcio Community",
    description: "Recognized as a mentor in Apertre 3.0 — guiding upcoming developers through open-source contributions and product thinking.",
    image: passApertreMentor,
  },
  {
    id: 7,
    title: "Ace Hack 5.0 - Hacker Pass",
    issuer: "UEM Jaipur",
    description: "Official hacker pass for Ace Hack 5.0, a flagship national-level hackathon for student innovators and builders.",
    image: passAcehack,
  },
  {
    id: 8,
    title: "GWY PreConf - Virtual Attendee",
    issuer: "DoraDAO / Bevy",
    description: "Virtual attendee credential for the GWY PreConf — a global Web3 gathering of builders, designers and protocol teams.",
    image: passGwyPreconf,
  },
  {
    id: 9,
    title: "Elite Hack 1.0 - Participant",
    issuer: "Elite Coders / Team ILM Tech",
    description: "Participant badge for Elite Hack 1.0, building production-ready solutions under tight deadlines as Team ILM Tech.",
    image: passEliteHack,
  },
  {
    id: 10,
    title: "Open Source Day 2026 - Community Leader",
    issuer: "Open Source Day",
    description: "Recognized as a Community Leader at Open Source Day 2026 — a flagship gathering of open-source contributors and maintainers in Gandhinagar.",
    image: passOpenSourceDay,
  },
  {
    id: 11,
    title: "Monad Blitz - Builder Pass",
    issuer: "Monad",
    description: "Official builder pass for Monad Blitz — an exclusive on-site hacker event exploring the Monad high-performance EVM.",
    image: passMonadBlitz,
  },
  {
    id: 12,
    title: "Dev3Pack Hackathon - Hacker",
    issuer: "Solana × v0 × ElevenLabs",
    description: "Selected hacker for the Dev3Pack Hackathon (8–10 May), building Web3 + AI products powered by Solana, v0 and ElevenLabs.",
    image: passDev3pack,
  },
  {
    id: 13,
    title: "Colosseum Frontier - Just Signed Up",
    issuer: "Superteam India",
    description: "Signed up for the Colosseum Frontier Hackathon (Apr 6 – May 11) under Superteam India — competing in the global Solana builders arena.",
    image: passFrontierSuperteam,
  },
  {
    id: 14,
    title: "Hacker House Goa — Builder Badge",
    issuer: "2:47 PM Studio",
    description: "Official builder badge for Hacker House Goa (Oct 28–31, 2026) — an exclusive residential hacker event bringing together top builders in India.",
    image: passHhGoaBanner,
  },
  {
    id: 15,
    title: "Hacker House Goa — Builder Pass",
    issuer: "2:47 PM Studio",
    description: "Personal builder pass for HH Goa 2026 — selected as a Full-Stack builder under the alias 'Feral Deploy Goblin'.",
    image: passHhGoaBuilder,
  },
  {
    id: 16,
    title: "AO Syndicate Hackathon — Participant Pass",
    issuer: "Maximor",
    description: "Admit-one participant pass for the AO Syndicate Hackathon by Maximor (Sep 5–7, Online), sponsored by Dodo Payments, Neatlogs, Tensormux & AI Grants India.",
    image: passSyndicateHackathon,
  },
  {
    id: 17,
    title: "Crypto World's Fair — Exhibitor Pass",
    issuer: "Colosseum",
    description: "Exhibitor pass for the Crypto World's Fair online hackathon (Sep 14 – Oct 12, 2026) by Colosseum — a global Solana builder competition.",
    image: passCryptoWorldsFair,
  },
  {
    id: 18,
    title: "Devcon India — Attendee Pass",
    issuer: "Devcon VIII",
    description: "Confirmed attendee pass for Devcon India (Devcon VIII) — the premier Ethereum developer conference.",
    image: passDevconIndia,
  },
];

const CertificateCard = ({
  certificate,
  onClick,
  isPaused,
  stats,
  liked,
  onLike,
}: {
  certificate: Certificate;
  onClick: () => void;
  isPaused: boolean;
  stats?: CertStats;
  liked: boolean;
  onLike: () => void;
}) => {
  const avg = stats && stats.rating_count > 0 ? stats.rating_sum / stats.rating_count : 0;

  return (
    <motion.div
      className="flex-shrink-0 w-[300px] md:w-[350px] mx-4 cursor-pointer group"
      whileHover={{ scale: 1.03, y: -6 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-[24px] bg-[#0B0D10] border border-[#252830] hover:border-[#246BFD]/60 transition-all duration-300">
        {/* Like Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            if (!liked) onLike();
          }}
          className="absolute top-3 right-3 z-20 flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#050505]/80 backdrop-blur-md border border-[#252830] hover:border-[#246BFD] transition-colors"
          aria-label="Like certificate"
        >
          <Heart
            className={`w-3.5 h-3.5 transition-colors ${liked ? "fill-[#246BFD] text-[#246BFD]" : "text-white"}`}
          />
          <span className="text-xs font-mono font-medium text-white">{stats?.likes ?? 0}</span>
        </button>

        {/* Certificate Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-[#12151B]">
          <img
            src={certificate.image}
            alt={certificate.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale contrast-110 group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-transparent to-transparent" />

          {/* Hover View Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-[#050505]/40 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="px-4 py-2 bg-[#246BFD] text-white rounded-full font-mono text-xs font-bold uppercase tracking-wider">
              VIEW DOCUMENT
            </span>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-5 space-y-2">
          <h3 className="font-sans font-bold text-white text-sm md:text-base line-clamp-2 group-hover:text-[#4D8DFF] transition-colors">
            {certificate.title}
          </h3>

          <div className="flex items-center justify-between gap-2 font-mono text-xs text-[#9A9CA3] pt-1 border-t border-[#252830]">
            <div className="flex items-center gap-1.5 min-w-0">
              <Building className="w-3.5 h-3.5 text-[#246BFD] shrink-0" />
              <span className="truncate">{certificate.issuer}</span>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <Star className="w-3.5 h-3.5 fill-[#246BFD] text-[#246BFD]" />
              <span className="text-white font-medium">{avg ? avg.toFixed(1) : "—"}</span>
              <span className="text-[#9A9CA3]">({stats?.rating_count ?? 0})</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CertificateModal = ({
  certificate,
  onClose,
  stats,
  liked,
  userRating,
  onLike,
  onRate,
}: {
  certificate: Certificate;
  onClose: () => void;
  stats?: CertStats;
  liked: boolean;
  userRating: number;
  onLike: () => void;
  onRate: (rating: number) => void;
}) => {
  const [hover, setHover] = useState(0);
  const avg = stats && stats.rating_count > 0 ? stats.rating_sum / stats.rating_count : 0;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-[#050505]/95 backdrop-blur-xl" />

      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ duration: 0.25 }}
        className="relative max-w-4xl w-full max-h-[90vh] overflow-auto bg-[#0B0D10] rounded-[28px] border border-[#252830] shadow-2xl p-6 sm:p-8 text-white space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full border border-[#252830] hover:border-[#246BFD] text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Certificate Image Frame */}
        <div className="rounded-2xl overflow-hidden border border-[#252830] bg-[#050505]">
          <img
            src={certificate.image}
            alt={certificate.title}
            className="w-full h-auto max-h-[60vh] object-contain mx-auto"
          />
        </div>

        {/* Certificate Details */}
        <div className="space-y-4">
          <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-white">
            {certificate.title}
          </h2>

          <div className="flex flex-wrap gap-4 text-xs font-mono text-[#9A9CA3]">
            <div className="flex items-center gap-1.5">
              <Building className="w-4 h-4 text-[#246BFD]" />
              <span>{certificate.issuer}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#246BFD]" />
              <span>{certificate.date}</span>
            </div>
          </div>

          {/* Likes & Rating Interaction */}
          <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-[#252830]">
            <button
              onClick={onLike}
              disabled={liked}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#12151B] border border-[#252830] hover:border-[#246BFD] transition-colors disabled:opacity-60"
            >
              <Heart className={`w-4 h-4 ${liked ? "fill-[#246BFD] text-[#246BFD]" : "text-white"}`} />
              <span className="font-mono text-xs font-semibold text-white">{stats?.likes ?? 0}</span>
              <span className="font-mono text-xs text-[#9A9CA3]">{liked ? "LIKED" : "LIKE"}</span>
            </button>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1" onMouseLeave={() => setHover(0)}>
                {[1, 2, 3, 4, 5].map((n) => {
                  const active = (hover || userRating || Math.round(avg)) >= n;
                  return (
                    <button
                      key={n}
                      onMouseEnter={() => !userRating && setHover(n)}
                      onClick={() => !userRating && onRate(n)}
                      disabled={!!userRating}
                      className="p-1 disabled:cursor-not-allowed"
                      aria-label={`Rate ${n} stars`}
                    >
                      <Star
                        className={`w-4 h-4 transition-colors ${
                          active ? "fill-[#246BFD] text-[#246BFD]" : "text-[#9A9CA3]/40"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
              <span className="font-mono text-xs text-[#9A9CA3]">
                {avg ? `${avg.toFixed(1)}/5 (${stats?.rating_count} ratings)` : "No ratings"}
                {userRating ? ` · Your rating: ${userRating}★` : ""}
              </span>
            </div>

            {certificate.verificationLink && (
              <a
                href={certificate.verificationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-btn-primary py-2 px-4 text-xs font-mono ml-auto"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>VERIFY CREDENTIAL</span>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [selectedPass, setSelectedPass] = useState<Pass | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [stats, setStats] = useState<StatsMap>({});
  const [likedIds, setLikedIds] = useState<Set<number>>(() => {
    try {
      return new Set<number>(JSON.parse(localStorage.getItem("cert_liked") || "[]"));
    } catch {
      return new Set();
    }
  });
  const [ratedMap, setRatedMap] = useState<Record<number, number>>(() => {
    try {
      return JSON.parse(localStorage.getItem("cert_rated") || "{}");
    } catch {
      return {};
    }
  });

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from("certificate_stats")
        .select("certificate_id, likes, rating_sum, rating_count");
      if (error || !data) return;
      const map: StatsMap = {};
      data.forEach((r: any) => {
        map[r.certificate_id] = { likes: r.likes, rating_sum: r.rating_sum, rating_count: r.rating_count };
      });
      setStats(map);
    })();
  }, []);

  const handleLike = async (certId: number) => {
    if (likedIds.has(certId)) return;
    const next = new Set(likedIds);
    next.add(certId);
    setLikedIds(next);
    localStorage.setItem("cert_liked", JSON.stringify([...next]));
    setStats((s) => ({
      ...s,
      [certId]: {
        likes: (s[certId]?.likes ?? 0) + 1,
        rating_sum: s[certId]?.rating_sum ?? 0,
        rating_count: s[certId]?.rating_count ?? 0,
      },
    }));
    const { data: res, error } = await supabase.functions.invoke("certificate-action", {
      body: { action: "like", certId },
    });
    const data = res?.data;
    if (error) {
      toast({ title: "Couldn't like", description: error.message, variant: "destructive" });
      return;
    }
    if (data) {
      setStats((s) => ({
        ...s,
        [certId]: { likes: data.likes, rating_sum: data.rating_sum, rating_count: data.rating_count },
      }));
    }
  };

  const handleRate = async (certId: number, rating: number) => {
    if (ratedMap[certId]) return;
    const nextRated = { ...ratedMap, [certId]: rating };
    setRatedMap(nextRated);
    localStorage.setItem("cert_rated", JSON.stringify(nextRated));
    const { data: res, error } = await supabase.functions.invoke("certificate-action", {
      body: { action: "rate", certId, rating },
    });
    const data = res?.data;
    if (error) {
      toast({ title: "Couldn't rate", description: error.message, variant: "destructive" });
      return;
    }
    if (data) {
      setStats((s) => ({
        ...s,
        [certId]: { likes: data.likes, rating_sum: data.rating_sum, rating_count: data.rating_count },
      }));
      toast({ title: "Thanks for rating!", description: `You rated ${rating}★` });
    }
  };

  // Auto-scroll animation for infinite carousel
  useEffect(() => {
    if (isPaused || selectedCertificate) return;

    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth / 2;
    let animationFrameId: number;
    let currentPosition = scrollPosition;

    const animate = () => {
      currentPosition += 2.0;
      if (currentPosition >= scrollWidth) {
        currentPosition = 0;
      }
      scrollContainer.scrollLeft = currentPosition;
      setScrollPosition(currentPosition);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, selectedCertificate, scrollPosition]);

  const duplicatedCertificates = [...certificates, ...certificates];

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navigation />

      <main className="pt-28 sm:pt-36 pb-24">
        {/* Back Link */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 font-mono text-xs uppercase tracking-wider text-[#9A9CA3] border border-[#252830] rounded-full bg-[#0B0D10] hover:text-white hover:border-[#246BFD] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO HOME</span>
          </Link>
        </div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
        >
          <div className="flex items-center justify-between pb-6 border-b border-[#252830] mb-8">
            <span className="editorial-eyebrow">[ CERTIFICATIONS &amp; CREDENTIALS ]</span>
            <span className="font-mono text-xs text-[#9A9CA3] uppercase tracking-widest hidden sm:inline-block">
              VERIFIED MILESTONES
            </span>
          </div>

          <h1 className="editorial-section-title text-white">
            <span>LEARNING.</span>
            <br />
            <span>BUILDING.</span>
            <br />
            <span className="text-[#246BFD]">LEVELING UP.</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#9A9CA3] max-w-2xl font-sans">
            A comprehensive catalog of academic achievements, program certifications, and competitive recognitions spanning AI/ML, cloud, and systems.
          </p>
        </motion.div>

        {/* Infinite Certificate Scrolling Strip */}
        <div
          className="relative overflow-hidden py-4 border-y border-[#252830] bg-[#0B0D10]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#0B0D10] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#0B0D10] to-transparent z-10 pointer-events-none" />

          <div
            ref={scrollRef}
            className="flex py-4 overflow-x-hidden"
            style={{ scrollBehavior: isPaused ? "smooth" : "auto" }}
          >
            {duplicatedCertificates.map((cert, index) => (
              <CertificateCard
                key={`${cert.id}-${index}`}
                certificate={cert}
                onClick={() => setSelectedCertificate(cert)}
                isPaused={isPaused}
                stats={stats[cert.id]}
                liked={likedIds.has(cert.id)}
                onLike={() => handleLike(cert.id)}
              />
            ))}
          </div>
        </div>

        {/* 3D Badges & Passes Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 sm:mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="pb-6 border-b border-[#252830] mb-12">
            <span className="editorial-eyebrow">[ HACKER PASSES &amp; BADGES ]</span>
            <h2 className="font-display text-3xl sm:text-4xl text-white uppercase tracking-tight mt-2">
              BUILDER <span className="text-[#246BFD]">PASSES &amp; CREDENTIALS</span>
            </h2>
          </div>

          <BadgesCarousel3D
            passes={passes}
            onCardClick={(pass) => setSelectedPass(pass)}
          />
        </motion.div>

        {/* Collaborate Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 sm:mt-32 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="rounded-[28px] overflow-hidden border border-[#252830] bg-[#0B0D10] p-6 sm:p-10 text-center space-y-6">
            <span className="editorial-eyebrow">[ OPEN TO COLLABORATE ]</span>
            <h3 className="font-display text-3xl sm:text-4xl text-white uppercase tracking-tight">
              LOOKING FOR A <span className="text-[#246BFD]">HACKATHON TEAMMATE</span> OR AI BUILDER?
            </h3>
            <p className="text-sm sm:text-base text-[#9A9CA3] max-w-xl mx-auto">
              Open to partner on competitive hackathons, innovative Web3 prototypes, or AI applications. Let's combine forces and ship.
            </p>
            <div className="rounded-2xl overflow-hidden border border-[#252830] max-w-xl mx-auto">
              <img
                src={collaborateCard}
                alt="Najish Anjum — Open to Collaborate"
                className="w-full h-auto filter grayscale contrast-110 hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div>
              <a
                href="mailto:najishanjum058@gmail.com"
                className="editorial-btn-primary"
              >
                <span>REACH OUT VIA EMAIL</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Measurable Milestones Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto mt-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Hackathons", value: "12+" },
              { label: "Certifications", value: "29+" },
              { label: "Workshops & Meets", value: "10+" },
              { label: "Global Programs", value: "6+" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="p-6 rounded-2xl bg-[#0B0D10] border border-[#252830] text-center"
              >
                <div className="font-display text-3xl sm:text-4xl text-[#246BFD] mb-1">
                  {stat.value}
                </div>
                <div className="font-mono text-xs uppercase tracking-wider text-[#9A9CA3]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </main>

      <Footer />

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <CertificateModal
            certificate={selectedCertificate}
            onClose={() => setSelectedCertificate(null)}
            stats={stats[selectedCertificate.id]}
            liked={likedIds.has(selectedCertificate.id)}
            userRating={ratedMap[selectedCertificate.id] ?? 0}
            onLike={() => handleLike(selectedCertificate.id)}
            onRate={(r) => handleRate(selectedCertificate.id, r)}
          />
        )}
      </AnimatePresence>

      {/* Pass Modal */}
      <AnimatePresence>
        {selectedPass && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedPass(null)}
          >
            <div className="absolute inset-0 bg-[#050505]/95 backdrop-blur-xl" />
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-3xl w-full max-h-[90vh] overflow-auto bg-[#0B0D10] rounded-[28px] border border-[#252830] shadow-2xl p-6 sm:p-8 text-white space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPass(null)}
                className="absolute top-6 right-6 p-2 rounded-full border border-[#252830] hover:border-[#246BFD] text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="rounded-2xl overflow-hidden border border-[#252830] bg-[#050505]">
                <img
                  src={selectedPass.image}
                  alt={selectedPass.title}
                  className="w-full h-auto max-h-[60vh] object-contain mx-auto"
                />
              </div>
              <h2 className="font-display text-2xl uppercase tracking-tight text-white pt-2">
                {selectedPass.title}
              </h2>
              <p className="font-mono text-xs text-[#246BFD]">{selectedPass.issuer}</p>
              <p className="font-sans text-sm text-[#9A9CA3]">{selectedPass.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Certificates;
