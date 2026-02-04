import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Award, Calendar, Building, Ticket } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

// Badge/Pass images
import passArtemis from "@/assets/pass-artemis.jpg";
import passAiSummit from "@/assets/pass-ai-summit.jpg";
import passRektoff from "@/assets/pass-rektoff.jpg";
import passApertre from "@/assets/pass-apertre.jpg";

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
import passStellarMastery from "@/assets/pass-stellar-mastery.jpg";

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
];

interface Pass {
  id: number;
  title: string;
  issuer: string;
  image: string;
}

const passes: Pass[] = [
  {
    id: 1,
    title: "NASA Artemis II Boarding Pass",
    issuer: "NASA",
    image: passArtemis,
  },
  {
    id: 2,
    title: "Great Asia AI Summit 2026",
    issuer: "Salesforce",
    image: passAiSummit,
  },
  {
    id: 3,
    title: "Solana Rust Security Bootcamp",
    issuer: "Rektoff - Cohort 3",
    image: passRektoff,
  },
  {
    id: 4,
    title: "Apertre 3.0 Mentee",
    issuer: "Resourcio Community",
    image: passApertre,
  },
  {
    id: 5,
    title: "Stellar Journey to Mastery",
    issuer: "Stellar / Rise In",
    image: passStellarMastery,
  },
];

const CertificateCard = ({
  certificate, 
  onClick,
  isPaused 
}: { 
  certificate: Certificate; 
  onClick: () => void;
  isPaused: boolean;
}) => {
  return (
    <motion.div
      className="flex-shrink-0 w-[300px] md:w-[350px] mx-4 cursor-pointer group"
      whileHover={{ scale: 1.05, y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-2xl bg-background/40 backdrop-blur-xl border border-border/30 shadow-lg hover:shadow-primary/20 transition-all duration-300">
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
          <div className="flex items-center gap-2 text-muted-foreground text-xs">
            <Building className="w-3 h-3" />
            <span className="truncate">{certificate.issuer}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CertificateModal = ({ 
  certificate, 
  onClose 
}: { 
  certificate: Certificate; 
  onClose: () => void;
}) => {
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

        {/* Badges & Passes Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 mb-20"
        >
          <div className="text-center px-4 mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Ticket className="w-7 h-7 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Badges & Passes
              </h2>
            </div>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm">
              Event passes, program acceptances, and special badges I've earned
            </p>
          </div>

          {/* Passes Carousel - Right to Left */}
          <div className="relative overflow-hidden">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            {/* Scrolling Container - Reverse Direction */}
            <div className="flex gap-6 py-6 animate-marquee-reverse hover:[animation-play-state:paused]">
              {[...passes, ...passes].map((pass, index) => (
                <div
                  key={`${pass.title}-${index}`}
                  className="flex-shrink-0 w-[320px] md:w-[400px] group cursor-pointer"
                  onClick={() => setSelectedPass(pass)}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-background/40 backdrop-blur-xl border border-border/30 shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img
                        src={pass.image}
                        alt={pass.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground text-sm md:text-base line-clamp-1">
                        {pass.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1">{pass.issuer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
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
