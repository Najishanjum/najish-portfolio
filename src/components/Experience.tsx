import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MapPin, Calendar, Briefcase, ExternalLink, X, Play } from "lucide-react";

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
import stellarAmbassador from "@/assets/stellar-ambassador.jpeg.asset.json";
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

const experiences = [
  {
    title: "Team Lead",
    company: "Team ILM Tech",
    type: "Full-time",
    duration: "Sep 2025 – Present",
    length: "3 mos",
    location: "Jabalpur, Madhya Pradesh, India",
    description: "",
    skills: [],
    logo: ilmTechLogo,
    link: "https://www.linkedin.com/company/team-ilm-tech/",
    images: [ilmTechProfile],
  },
  {
    title: "Co-Founder",
    company: "Ajinava Edge",
    type: "Full-time",
    duration: "Sep 2025 – Present",
    length: "",
    location: "India",
    description: "",
    skills: [],
    logo: ajinavaEdgeLogo,
    link: "https://www.instagram.com/ajinava.edge?igsh=MXNrNXpoOWpqcDBnaQ==",
    images: [],
  },
  {
    title: "E-Summit 2025 Attendee",
    company: "E-Cell IIT Bombay",
    type: "Conference",
    duration: "11th - 14th Dec 2025",
    length: "4 days",
    location: "IIT Bombay, Mumbai",
    description: "Deciphering the Labyrinth of Entrepreneurship – Exposure to global business leaders, startup founders, and innovation-driven discussions shaping the future of entrepreneurship.",
    skills: ["Entrepreneurship", "Networking", "Innovation"],
    logo: techfestLogo,
    link: "",
    images: [esummitImg1, esummitImg2, esummitImg3, esummitImg4, esummitImg5, esummitImg6, esummitImg7, esummitImg8],
  },
  {
    title: "Campus Ambassador – Paranox 2.0 Hackathon 2025",
    company: "TechX Ninjas",
    type: "Part-time",
    duration: "Sep 2025 – Present",
    length: "3 mos",
    location: "",
    description: "Representing ParanoX 2.0 Hackathon, promoting registrations, engaging students, and fostering innovation while enhancing leadership.",
    skills: [],
    logo: paranoxLogo,
    link: "",
    images: [],
  },
  {
    title: "College Ambassador",
    company: "Techfest, IIT Bombay",
    type: "Part-time · Remote",
    duration: "Aug 2025 – Oct 2025",
    length: "3 mos",
    location: "Jabalpur, Madhya Pradesh, India",
    description: "College Ambassador for Asia's largest science & technology festival.",
    skills: ["Leadership", "Event Management"],
    logo: techfestLogo,
    link: "",
    images: [],
  },
  {
    title: "Open-Source Contributor",
    company: "GirlScript Summer of Code 2025 (GSSoC)",
    type: "",
    duration: "Jul 2025 – Sep 2025",
    length: "3 mos",
    location: "",
    description: "Worked on open-source projects, collaborating with mentors, fixing bugs, adding features, improving documentation, Git & GitHub proficiency.",
    skills: [],
    logo: gssocLogo,
    link: "",
    images: [],
  },
  {
    title: "Google Cloud Arcade Facilitator – Cohort 1 (2025)",
    company: "Google Cloud Arcade Program",
    type: "Training Cohort",
    duration: "2025",
    length: "",
    location: "",
    description: "Selected as a participant in the Google Cloud Arcade Facilitator Program. Completed the Arcade Trooper Tier – Campaign 2025 and achieved Milestone 3, including hands-on labs and cloud skill badges.",
    skills: ["Google Cloud", "Cloud Computing"],
    logo: googleCloudLogo,
    link: "",
    images: [googleCloudImg1, googleCloudImg2],
  },
  {
    title: "Contributor — Hacktoberfest 2025",
    company: "Powered by DigitalOcean & MLH",
    type: "Open-source Contribution Program",
    duration: "Oct 1, 2025 – Oct 30, 2025",
    length: "1 mo",
    location: "Global",
    description: "Participated in Hacktoberfest 2025 as an open-source contributor, submitting quality PRs, collaborating with maintainers, and contributing to community-driven projects.",
    skills: ["Open Source", "Git", "GitHub"],
    logo: hacktoberfestLogo,
    link: "",
    images: [hacktoberfestProfile, hacktoberfestBadges1, hacktoberfestBadges2, hacktoberfestSwag, hacktoberfestSelfie],
  },
  {
    title: "Stellar India Ambassador",
    company: "Stellar",
    type: "Ambassador",
    duration: "2025 – Present",
    length: "",
    location: "India",
    description: "Officially a @IND_stellar Ambassador! Grateful to be selected to represent Stellar in India. Thank you to @Sahitya Roy07 & @thebhupii for the support, and @riseinweb3 for the opportunity. Let's build & grow Stellar in India. #Web3 #Riseln #StellarAmbassador",
    skills: ["Web3", "Blockchain", "Community"],
    logo: stellarAmbassador.url,
    link: "",
    images: [stellarAmbassador.url],
    videos: ["https://youtube.com/shorts/u6eRMGO0oA8?si=nmrIaDSolKCz3qhD"],
  },
  {
    title: "Mentor | Campus Representative | Open-Source Contributor",
    company: "Elite Coders Winter of Code (ECWoC) 2026",
    type: "Open-Source Program",
    duration: "Jan 2026 – Mar 2026",
    length: "3 mos",
    location: "India",
    description: "As a Mentor, Campus Representative, and Contributor, my goal is to support students at every stage of their open-source journey—helping beginners get started, guiding contributors, and fostering a strong culture of learning and collaboration on campus.",
    skills: ["Open Source", "Git", "GitHub", "Leadership"],
    logo: ecwocLogo,
    link: "",
    images: [ecwocBadges, ecwocWork],
  },
  {
    title: "Indigo Squad Member",
    company: "Mood Indigo IIT Bombay",
    type: "Internship · Remote",
    duration: "Jul 2025 – Aug 2025",
    length: "2 mos",
    location: "",
    description: "",
    skills: ["Leadership", "Social Media Marketing"],
    logo: moodIndigoLogo,
    link: "",
    images: [],
  },
  {
    title: "Contributor 2025 | Core Team Member | Campus Lead 2026",
    company: "Open Source Connect Global",
    type: "Full-time",
    duration: "Jul 2025 – Aug 2025",
    length: "2 mos",
    location: "Jabalpur, Madhya Pradesh, India · Remote",
    description: "",
    skills: ["Open Source", "UI/UX Enhancement", "+2 skills"],
    logo: osciLogo,
    link: "",
    images: [osciProfile],
  },
];

export const Experience = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [videoModal, setVideoModal] = useState<string | null>(null);
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">&lt;</span>
            <span className="text-gradient">Experience</span>
            <span className="text-primary">/&gt;</span>
          </h2>
          <p className="text-muted-foreground font-mono">My professional journey</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-cyan-400/30 to-transparent" />

          {/* Experience Cards */}
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08, type: "spring", stiffness: 80 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative pl-20 md:pl-28"
              >
                {/* Timeline Dot with Logo */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="absolute left-4 md:left-8 w-8 h-8 md:w-10 md:h-10 rounded-full bg-card border-2 border-primary/30 overflow-hidden flex items-center justify-center shadow-lg shadow-primary/20 z-10"
                >
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.015, y: -4, boxShadow: "0 20px 40px -10px hsl(var(--primary) / 0.25)" }}
                  transition={{ type: "spring", stiffness: 250, damping: 20 }}
                  className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-5 md:p-6 shadow-lg hover:border-primary/40 transition-colors duration-300"
                >
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <p className="text-primary font-medium">
                          {exp.company}
                          {exp.type && (
                            <span className="text-muted-foreground text-sm ml-2">
                              · {exp.type}
                            </span>
                          )}
                        </p>
                        {exp.link && (
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                      {exp.length && (
                        <span className="text-xs">({exp.length})</span>
                      )}
                    </div>
                    {exp.location && (
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  {exp.description && (
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      {exp.description}
                    </p>
                  )}

                  {/* Skills */}
                  {exp.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-border/30">
                      <Briefcase className="w-4 h-4 text-muted-foreground" />
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Images Gallery */}
                  {exp.images && exp.images.length > 0 && (
                    <div className={`mt-4 pt-4 border-t border-border/30 grid gap-3 ${
                      exp.images.length === 1 ? 'grid-cols-1 max-w-[200px]' : 
                      exp.images.length === 2 ? 'grid-cols-2' : 
                      exp.images.length === 3 ? 'grid-cols-3' : 
                      'grid-cols-2 md:grid-cols-4'
                    }`}>
                      {exp.images.map((img, imgIndex) => (
                        <motion.div
                          key={imgIndex}
                          whileHover={{ scale: 1.05, rotate: -1 }}
                          whileTap={{ scale: 0.97 }}
                          onClick={() => setLightbox(img)}
                          className="rounded-lg overflow-hidden border border-border/30 cursor-zoom-in"
                        >
                          <img
                            src={img}
                            alt={`${exp.company} - ${imgIndex + 1}`}
                            className="w-full h-auto object-cover"
                          />
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Videos */}
                  {(exp as { videos?: string[] }).videos && (exp as { videos?: string[] }).videos!.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-border/30 flex flex-wrap gap-3">
                      {(exp as { videos?: string[] }).videos!.map((vid, vIdx) => (
                        <motion.button
                          key={vIdx}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setVideoModal(vid)}
                          className="group relative flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-colors"
                        >
                          <span className="relative flex items-center justify-center w-7 h-7 rounded-full bg-primary/20 group-hover:bg-primary/30">
                            <Play className="w-3.5 h-3.5 fill-primary" />
                          </span>
                          <span className="text-sm font-medium">Watch video {(exp as { videos?: string[] }).videos!.length > 1 ? vIdx + 1 : ""}</span>
                        </motion.button>
                      ))}
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-card/80 border border-border/50 text-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.1, rotate: 90 }}
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </motion.button>
            <motion.img
              key={lightbox}
              src={lightbox}
              alt="Enlarged view"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 22 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-[92vw] max-h-[88vh] object-contain rounded-xl shadow-2xl shadow-primary/30 border border-primary/20"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {videoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setVideoModal(null)}
            className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.button
              onClick={() => setVideoModal(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-card/80 border border-border/50 text-foreground hover:text-primary transition-colors z-10"
              whileHover={{ scale: 1.1, rotate: 90 }}
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </motion.button>
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 22 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-2xl shadow-primary/30 border border-primary/20 bg-black"
            >
              {/youtube\.com|youtu\.be|vimeo\.com/.test(videoModal) ? (
                <iframe
                  src={videoModal}
                  title="Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              ) : (
                <video
                  src={videoModal}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
