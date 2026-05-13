import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Award, Calendar, Building, Ticket, Handshake, Heart, Star } from "lucide-react";
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
    description:
      "Exclusive participation badge representing involvement in the NASA Artemis II initiative — humanity's return to the Moon.",
    image: passArtemis,
  },
  {
    id: 2,
    title: "Great Asia AI Summit 2026",
    issuer: "Salesforce",
    description:
      "Attendee pass for one of Asia's leading AI innovation summits, bringing together founders, researchers and engineers.",
    image: passAiSummit,
  },
  {
    id: 3,
    title: "Solana Rust Security Bootcamp",
    issuer: "Rektoff - Cohort 3",
    description:
      "Completed advanced Web3 security training focused on Solana programs, Rust auditing and on-chain attack vectors.",
    image: passRektoff,
  },
  {
    id: 4,
    title: "Apertre 3.0 Mentee",
    issuer: "Resourcio Community",
    description:
      "Selected mentee in a competitive growth and innovation program guiding builders through real-world open-source projects.",
    image: passApertre,
  },
  {
    id: 5,
    title: "Stellar Journey to Mastery",
    issuer: "Stellar / Rise In",
    description:
      "Successfully completed the structured learning journey in blockchain development on the Stellar ecosystem.",
    image: passStellarMastery,
  },
  {
    id: 6,
    title: "Apertre 3.0 Mentor",
    issuer: "Resourcio Community",
    description:
      "Recognized as a mentor in Apertre 3.0 — guiding upcoming developers through open-source contributions and product thinking.",
    image: passApertreMentor,
  },
  {
    id: 7,
    title: "Ace Hack 5.0 - Hacker Pass",
    issuer: "UEM Jaipur",
    description:
      "Official hacker pass for Ace Hack 5.0, a flagship national-level hackathon for student innovators and builders.",
    image: passAcehack,
  },
  {
    id: 8,
    title: "GWY PreConf - Virtual Attendee",
    issuer: "DoraDAO / Bevy",
    description:
      "Virtual attendee credential for the GWY PreConf — a global Web3 gathering of builders, designers and protocol teams.",
    image: passGwyPreconf,
  },
  {
    id: 9,
    title: "Elite Hack 1.0 - Participant",
    issuer: "Elite Coders / Team ILM Tech",
    description:
      "Participant badge for Elite Hack 1.0, building production-ready solutions under tight deadlines as Team ILM Tech.",
    image: passEliteHack,
  },
  {
    id: 10,
    title: "Open Source Day 2026 - Community Leader",
    issuer: "Open Source Day",
    description:
      "Recognized as a Community Leader at Open Source Day 2026 — a flagship gathering of open-source contributors and maintainers in Gandhinagar.",
    image: passOpenSourceDay,
  },
  {
    id: 11,
    title: "Monad Blitz - Builder Pass",
    issuer: "Monad",
    description:
      "Official builder pass for Monad Blitz — an exclusive on-site hacker event exploring the Monad high-performance EVM.",
    image: passMonadBlitz,
  },
  {
    id: 12,
    title: "Dev3Pack Hackathon - Hacker",
    issuer: "Solana × v0 × ElevenLabs",
    description:
      "Selected hacker for the Dev3Pack Hackathon (8–10 May), building Web3 + AI products powered by Solana, v0 and ElevenLabs.",
    image: passDev3pack,
  },
  {
    id: 13,
    title: "Colosseum Frontier - Just Signed Up",
    issuer: "Superteam India",
    description:
      "Signed up for the Colosseum Frontier Hackathon (Apr 6 – May 11) under Superteam India — competing in the global Solana builders arena.",
    image: passFrontierSuperteam,
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
      whileHover={{ scale: 1.05, y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-2xl bg-background/40 backdrop-blur-xl border border-border/30 shadow-lg hover:shadow-primary/20 transition-all duration-300">
        {/* Like button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            if (!liked) onLike();
          }}
          className="absolute top-3 right-3 z-20 flex items-center gap-1 px-2.5 py-1 rounded-full bg-background/80 backdrop-blur-md border border-border/40 hover:bg-background transition-colors"
          aria-label="Like certificate"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${liked ? "fill-red-500 text-red-500" : "text-foreground"}`}
          />
          <span className="text-xs font-medium text-foreground">{stats?.likes ?? 0}</span>
        </button>

        {/* Certificate Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={certificate.image}
            alt={certificate.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

          {/* Hover overlay */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-primary/20 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <span className="px-4 py-2 bg-primary text-primary-foreground rounded-full font-medium text-sm">
              View Certificate
            </span>
          </motion.div>
        </div>

        {/* Card Content */}
        <div className="p-4">
          <h3 className="font-semibold text-foreground text-sm md:text-base line-clamp-2 mb-2">
            {certificate.title}
          </h3>
          <div className="flex items-center justify-between gap-2 text-muted-foreground text-xs">
            <div className="flex items-center gap-2 min-w-0">
              <Building className="w-3 h-3 shrink-0" />
              <span className="truncate">{certificate.issuer}</span>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              <span className="text-foreground font-medium">{avg ? avg.toFixed(1) : "—"}</span>
              <span className="text-muted-foreground/70">({stats?.rating_count ?? 0})</span>
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/90 backdrop-blur-xl" />
      
      {/* Modal Content */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="relative max-w-4xl w-full max-h-[90vh] overflow-auto bg-background/60 backdrop-blur-2xl rounded-3xl border border-border/30 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 hover:bg-background border border-border/30 transition-colors"
        >
          <X className="w-5 h-5 text-foreground" />
        </button>

        {/* Certificate Image */}
        <div className="p-4 md:p-6">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={certificate.image}
              alt={certificate.title}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Certificate Details */}
        <div className="p-6 pt-0 space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-foreground">
            {certificate.title}
          </h2>
          
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Building className="w-4 h-4 text-primary" />
              <span>{certificate.issuer}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="w-4 h-4 text-primary" />
              <span>{certificate.date}</span>
            </div>
          </div>

          {/* Likes & Rating */}
          <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-border/30">
            <button
              onClick={onLike}
              disabled={liked}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background/60 border border-border/40 hover:bg-background disabled:opacity-70 transition-colors"
            >
              <Heart className={`w-4 h-4 ${liked ? "fill-red-500 text-red-500" : ""}`} />
              <span className="text-sm font-medium">{stats?.likes ?? 0}</span>
              <span className="text-xs text-muted-foreground">{liked ? "Liked" : "Like"}</span>
            </button>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5" onMouseLeave={() => setHover(0)}>
                {[1, 2, 3, 4, 5].map((n) => {
                  const active = (hover || userRating || Math.round(avg)) >= n;
                  return (
                    <button
                      key={n}
                      onMouseEnter={() => !userRating && setHover(n)}
                      onClick={() => !userRating && onRate(n)}
                      disabled={!!userRating}
                      className="p-0.5 disabled:cursor-not-allowed"
                      aria-label={`Rate ${n} stars`}
                    >
                      <Star
                        className={`w-5 h-5 transition-colors ${
                          active ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
              <span className="text-xs text-muted-foreground">
                {avg ? `${avg.toFixed(1)} (${stats?.rating_count})` : "No ratings yet"}
                {userRating ? ` • You: ${userRating}★` : ""}
              </span>
            </div>
          </div>

          {certificate.verificationLink && (
            <a
              href={certificate.verificationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Verify Certificate
            </a>
          )}
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
    } catch { return new Set(); }
  });
  const [ratedMap, setRatedMap] = useState<Record<number, number>>(() => {
    try {
      return JSON.parse(localStorage.getItem("cert_rated") || "{}");
    } catch { return {}; }
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
    const { data, error } = await supabase.rpc("increment_certificate_like", { _cert_id: certId });
    if (error) {
      toast({ title: "Couldn't like", description: error.message, variant: "destructive" });
      return;
    }
    if (data) {
      setStats((s) => ({ ...s, [certId]: { likes: data.likes, rating_sum: data.rating_sum, rating_count: data.rating_count } }));
    }
  };

  const handleRate = async (certId: number, rating: number) => {
    if (ratedMap[certId]) return;
    const nextRated = { ...ratedMap, [certId]: rating };
    setRatedMap(nextRated);
    localStorage.setItem("cert_rated", JSON.stringify(nextRated));
    const { data, error } = await supabase.rpc("add_certificate_rating", { _cert_id: certId, _rating: rating });
    if (error) {
      toast({ title: "Couldn't rate", description: error.message, variant: "destructive" });
      return;
    }
    if (data) {
      setStats((s) => ({ ...s, [certId]: { likes: data.likes, rating_sum: data.rating_sum, rating_count: data.rating_count } }));
      toast({ title: "Thanks for rating!", description: `You rated ${rating}★` });
    }
  };

  // Auto-scroll animation
  useEffect(() => {
    if (isPaused || selectedCertificate) return;

    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth / 2;
    let animationFrameId: number;
    let currentPosition = scrollPosition;

    const animate = () => {
      currentPosition += 2.5; // Speed: 2.5px per frame (~150px/sec at 60fps) - faster scroll
      
      if (currentPosition >= scrollWidth) {
        currentPosition = 0;
      }
      
      scrollContainer.scrollLeft = currentPosition;
      setScrollPosition(currentPosition);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused, selectedCertificate, scrollPosition]);

  // Double the certificates for infinite scroll effect
  const duplicatedCertificates = [...certificates, ...certificates];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center px-4 mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="w-8 h-8 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Certificates
            </h1>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my achievements, certifications, and recognitions from various hackathons, workshops, and programs.
          </p>
          <p className="text-sm text-muted-foreground/60 mt-4">
            Hover to pause • Click to view details
          </p>
        </motion.div>

        {/* Certificate Carousel */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling Container */}
          <div
            ref={scrollRef}
            className="flex py-8 overflow-x-hidden"
            style={{ scrollBehavior: isPaused ? 'smooth' : 'auto' }}
          >
            {duplicatedCertificates.map((cert, index) => (
              <CertificateCard
                key={`${cert.id}-${index}`}
                certificate={cert}
                onClick={() => setSelectedCertificate(cert)}
                isPaused={isPaused}
              />
            ))}
          </div>
        </div>

        {/* Badges & Passes Section - Premium 3D Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 mb-20"
        >
          <BadgesCarousel3D
            passes={passes}
            onCardClick={(pass) => setSelectedPass(pass)}
          />
        </motion.div>

        {/* Collaborate Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-16 mb-20 px-4"
        >
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Handshake className="w-7 h-7 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Collaborate
              </h2>
            </div>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm">
              Open to collaborate on hackathons, open source, and impactful projects
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="rounded-2xl overflow-hidden bg-background/40 backdrop-blur-xl border border-border/30 shadow-lg hover:shadow-primary/20 transition-all duration-300">
              <img
                src={collaborateCard}
                alt="Najish Anjum - Open to Collaborate"
                className="w-full h-auto"
              />
            </div>
          </div>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto mt-10 px-4"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Hackathons", value: "10+" },
              { label: "Certifications", value: "15+" },
              { label: "Workshops", value: "8+" },
              { label: "Competitions", value: "12+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-background/40 backdrop-blur-xl border border-border/30"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPass(null)}
          >
            <div className="absolute inset-0 bg-background/90 backdrop-blur-xl" />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-4xl w-full max-h-[90vh] overflow-auto bg-background/60 backdrop-blur-2xl rounded-3xl border border-border/30 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPass(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 hover:bg-background border border-border/30 transition-colors"
              >
                <X className="w-5 h-5 text-foreground" />
              </button>
              <div className="p-4 md:p-6">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={selectedPass.image}
                    alt={selectedPass.title}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="p-6 pt-0 space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-foreground">
                  {selectedPass.title}
                </h2>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Building className="w-4 h-4 text-primary" />
                  <span>{selectedPass.issuer}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Certificates;
