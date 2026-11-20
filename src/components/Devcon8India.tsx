import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Maximize2,
  X,
  Sparkles,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Camera,
  Folder,
  FolderOpen,
  Image as ImageIcon,
  Layers,
  ArrowRight,
  Eye,
} from "lucide-react";
import devconHeroImg from "@/assets/devcon8-india.jpg";

// All 39 authentic Devcon images in public/images/devcon/
const devconPhotos = [
  "photo_2026-11-01_23-42-16.jpg",
  "photo_2026-11-01_23-42-18 (2).jpg",
  "photo_2026-11-02_00-13-19.jpg",
  "photo_2026-11-02_06-50-49.jpg",
  "photo_2026-11-02_11-46-56.jpg",
  "photo_2026-11-02_22-15-49.jpg",
  "photo_2026-11-03_10-50-24.jpg",
  "photo_2026-11-03_10-50-28.jpg",
  "photo_2026-11-03_10-53-12 (2).jpg",
  "photo_2026-11-03_10-53-12.jpg",
  "photo_2026-11-03_10-53-13.jpg",
  "photo_2026-11-03_10-53-16.jpg",
  "photo_2026-11-03_10-53-17.jpg",
  "photo_2026-11-03_10-53-19 (2).jpg",
  "photo_2026-11-03_10-53-20 (2).jpg",
  "photo_2026-11-03_10-53-20.jpg",
  "photo_2026-11-03_10-53-21.jpg",
  "photo_2026-11-03_10-54-41.jpg",
  "photo_2026-11-03_17-28-03 (2).jpg",
  "photo_2026-11-03_17-28-11 (2).jpg",
  "photo_2026-11-03_17-28-11.jpg",
  "photo_2026-11-03_17-28-13 (2).jpg",
  "photo_2026-11-03_17-28-16 (2).jpg",
  "photo_2026-11-03_17-28-16.jpg",
  "photo_2026-11-03_17-28-19.jpg",
  "photo_2026-11-03_18-19-10.jpg",
  "photo_2026-11-03_18-20-27.jpg",
  "photo_2026-11-03_18-21-10.jpg",
  "photo_2026-11-03_18-21-12.jpg",
  "photo_2026-11-03_18-21-22.jpg",
  "photo_2026-11-03_18-22-17.jpg",
  "photo_2026-11-03_18-22-23.jpg",
  "photo_2026-11-03_18-22-31.jpg",
  "photo_2026-11-03_18-22-38.jpg",
  "photo_2026-11-03_18-23-21.jpg",
  "photo_2026-11-03_18-23-34.jpg",
  "photo_2026-11-03_18-23-57.jpg",
  "photo_2026-11-03_18-23-59.jpg",
  "photo_2026-11-03_18-24-15.jpg",
];

export const Devcon8India = () => {
  const [isFolderOpen, setIsFolderOpen] = useState(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  // Keyboard navigation for Lightbox and Folder modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activePhotoIndex !== null) {
        if (e.key === "Escape") {
          setActivePhotoIndex(null);
        } else if (e.key === "ArrowRight") {
          setActivePhotoIndex((prev) =>
            prev !== null ? (prev + 1) % devconPhotos.length : null
          );
        } else if (e.key === "ArrowLeft") {
          setActivePhotoIndex((prev) =>
            prev !== null
              ? (prev - 1 + devconPhotos.length) % devconPhotos.length
              : null
          );
        }
      } else if (isFolderOpen && e.key === "Escape") {
        setIsFolderOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePhotoIndex, isFolderOpen]);

  const openLightbox = (index: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActivePhotoIndex(index);
  };

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex + 1) % devconPhotos.length);
    }
  };

  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIndex !== null) {
      setActivePhotoIndex(
        (activePhotoIndex - 1 + devconPhotos.length) % devconPhotos.length
      );
    }
  };

  return (
    <section
      id="devcon-8"
      className="py-24 sm:py-32 relative overflow-hidden bg-[#07090D] text-white border-t border-[#252830]"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#246BFD]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Marker */}
        <div className="flex items-center justify-between pb-6 border-b border-[#252830] mb-12 sm:mb-16">
          <span className="editorial-eyebrow">[ DEVCON 8 // ETHEREUM FOUNDATION ]</span>
          <span className="font-mono text-xs text-[#9A9CA3] uppercase tracking-widest hidden sm:inline-block">
            MUMBAI, INDIA &middot; GLOBAL WEB3 SUMMIT
          </span>
        </div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-16"
        >
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-[#246BFD]/15 border border-[#246BFD]/40 font-mono text-xs font-semibold text-[#4D8DFF] uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#246BFD] animate-pulse" />
              GLOBAL ECOSYSTEM MILESTONE
            </span>
            <span className="font-mono text-xs text-[#9A9CA3]">
              VOLUNTEER LEAD &middot; ETHEREUM FOUNDATION
            </span>
          </div>

          <h2 className="editorial-section-title text-white">
            <span>Devcon 8</span>{" "}
            <span className="italic font-normal text-[#246BFD]">India</span>
            <br />
            <span className="text-white text-3xl sm:text-4xl md:text-5xl font-light">
              Mumbai Gathering &middot; World Web3 Stage
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A4A7AF] font-sans max-w-2xl leading-relaxed">
            Representing the Indian developer ecosystem at the Ethereum Foundation's flagship global conference in Mumbai. Coordinating volunteer operations, developer activations, and building critical community infrastructure.
          </p>
        </motion.div>

        {/* Showcase Grid: Hero Stage Photo + Context Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16 sm:mb-20">
          {/* Left Column: Official Stage Photo Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="relative rounded-3xl bg-[#0B0D10] border border-[#252830] overflow-hidden group hover:border-[#246BFD]/60 transition-all duration-300 shadow-[0_10px_40px_rgba(0,0,0,0.8)] h-full flex flex-col justify-between">
              {/* Image Preview Container */}
              <div className="relative w-full h-[380px] sm:h-[460px] md:h-[500px] overflow-hidden bg-[#050505] flex items-center justify-center p-2 sm:p-3">
                <img
                  src={devconHeroImg}
                  alt="Md Najish Anjum at Devcon 8 India, Mumbai"
                  className="w-full h-full object-cover sm:object-contain rounded-2xl filter contrast-105 group-hover:scale-[1.02] transition-transform duration-500 select-none"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-transparent to-transparent opacity-60 pointer-events-none" />

                {/* Fullscreen Expand Button */}
                <button
                  type="button"
                  onClick={() => openLightbox(0)}
                  className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#050505]/85 backdrop-blur-md border border-[#252830] text-xs font-mono text-white hover:text-[#4D8DFF] hover:border-[#246BFD] transition-all shadow-lg"
                  title="Expand to Fullscreen"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-[#246BFD]" />
                  <span>FULLSCREEN</span>
                </button>

                {/* Badge Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-xl bg-[#050505]/80 backdrop-blur-md border border-[#252830]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#246BFD] animate-ping" />
                    <span className="font-mono text-xs text-white font-medium">
                      Official Stage Installation &middot; Devcon 8 India
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-[#A4A7AF]">
                    Mumbai, 2026
                  </span>
                </div>
              </div>

              {/* Photo Caption Strip */}
              <div className="p-5 sm:p-6 border-t border-[#252830] bg-[#0E1117]/80">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="font-sans font-bold text-base text-white">
                      Ethereum Foundation &mdash; Devcon VIII
                    </h3>
                    <p className="font-mono text-xs text-[#9A9CA3] mt-0.5">
                      Main Conference &middot; Mumbai Exhibition Centre
                    </p>
                  </div>
                  <span className="font-mono text-xs text-[#246BFD] px-2.5 py-1 rounded-md bg-[#246BFD]/10 border border-[#246BFD]/30 self-start sm:self-auto">
                    STAGE PRESENCE
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Roles, Impact & Initiatives */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-4"
          >
            {/* Lead Role Card */}
            <div className="p-6 rounded-2xl bg-[#0B0D10] border border-[#252830] hover:border-[#246BFD]/40 transition-colors">
              <div className="flex items-center justify-between pb-3 border-b border-[#252830] mb-4">
                <span className="font-mono text-xs uppercase tracking-wider text-[#246BFD] font-bold">
                  OFFICIAL LEADERSHIP ROLE
                </span>
                <span className="px-2 py-0.5 rounded bg-[#12151B] border border-[#252830] font-mono text-[11px] text-[#A4A7AF]">
                  NOV 2026
                </span>
              </div>

              <h3 className="font-display text-2xl text-white">
                Volunteer Lead &middot; Devcon 8
              </h3>
              <p className="font-mono text-xs text-[#4D8DFF] mt-1 mb-3">
                Ethereum Foundation &middot; Mumbai, India
              </p>
              <p className="text-xs sm:text-sm text-[#A4A7AF] font-sans leading-relaxed">
                Supported volunteer operations and event coordination at Devcon 8 Mumbai, collaborating directly with Ethereum Foundation organizers, international speakers, core developers, and Web3 ecosystem participants.
              </p>
            </div>

            {/* Key Project Built: Mumbai Onchain */}
            <div className="p-6 rounded-2xl bg-[#0B0D10] border border-[#252830] hover:border-[#246BFD]/40 transition-colors">
              <div className="flex items-center justify-between pb-3 border-b border-[#252830] mb-3">
                <span className="font-mono text-xs uppercase tracking-wider text-[#4D8DFF] font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  KEY INITIATIVE SHIPPED
                </span>
                <a
                  href="https://mumbaionchain.site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-[#246BFD] hover:underline flex items-center gap-1"
                >
                  <span>mumbaionchain.site</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <h4 className="font-sans font-bold text-base text-white">
                Mumbai Onchain &mdash; Discovery &amp; Networking Platform
              </h4>
              <p className="text-xs sm:text-sm text-[#A4A7AF] font-sans leading-relaxed mt-2">
                Built an all-in-one discovery and networking platform for Mumbai Web3 Week during Devcon 8, supporting an active ecosystem of <strong>130+ side events</strong> and <strong>30+ community partners</strong>.
              </p>
            </div>

            {/* Telemetry / Impact Strip */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-[#0B0D10] border border-[#252830]">
                <span className="font-mono text-[10px] text-[#9A9CA3] uppercase block">
                  ECOSYSTEM
                </span>
                <span className="font-display text-lg text-white font-bold block mt-1">
                  Ethereum Global
                </span>
                <span className="font-mono text-[11px] text-[#4D8DFF] block mt-0.5">
                  Main Conference
                </span>
              </div>

              <div className="p-4 rounded-xl bg-[#0B0D10] border border-[#252830]">
                <span className="font-mono text-[10px] text-[#9A9CA3] uppercase block">
                  COMMUNITY IMPACT
                </span>
                <span className="font-display text-lg text-white font-bold block mt-1">
                  130+ Side Events
                </span>
                <span className="font-mono text-[11px] text-[#246BFD] block mt-0.5">
                  30+ Partners
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ======================================================== */}
        {/* INTERACTIVE FOLDER: Devcon 8 Mumbai Image Vault           */}
        {/* Photos are cleanly stored inside this single folder!     */}
        {/* ======================================================== */}
        <div className="pt-10 border-t border-[#252830]/80">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onClick={() => setIsFolderOpen(true)}
            className="group relative rounded-3xl bg-gradient-to-br from-[#0D111A] via-[#090C12] to-[#06080C] border border-[#252830] hover:border-[#246BFD]/70 p-6 sm:p-10 cursor-pointer transition-all duration-300 shadow-[0_15px_45px_rgba(0,0,0,0.7)] hover:shadow-[0_20px_60px_rgba(36,107,253,0.18)] overflow-hidden"
          >
            {/* Ambient folder back glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#246BFD]/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-[#246BFD]/20 transition-all duration-500" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-[#4D8DFF]/10 rounded-full blur-[90px] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Folder Info & Action */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  {/* Top Folder Pill & Badges */}
                  <div className="flex flex-wrap items-center gap-2.5 mb-4">
                    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#246BFD]/15 border border-[#246BFD]/40 font-mono text-xs font-semibold text-[#4D8DFF] uppercase tracking-wider">
                      <Folder className="w-3.5 h-3.5 text-[#246BFD]" />
                      OFFICIAL EVENT VAULT
                    </span>
                    <span className="px-3 py-1.5 rounded-full bg-[#121622] border border-[#252830] font-mono text-xs text-[#C5C8D0] flex items-center gap-1.5">
                      <Layers className="w-3 h-3 text-[#246BFD]" />
                      39 IMAGES INSIDE
                    </span>
                  </div>

                  {/* Folder Main Title */}
                  <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-white group-hover:text-[#93C5FD] transition-colors">
                    Devcon 8 Mumbai &middot; Photo Archive
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-[#9A9CA3] font-sans leading-relaxed max-w-xl">
                    Archived collection of 39 on-ground photographs capturing stage moments, Ethereum Foundation volunteer leadership, international developer summits, and community activations across Mumbai Web3 Week.
                  </p>
                </div>

                {/* Folder Action Trigger Button */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <div className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-[#246BFD] text-white font-mono text-xs font-bold uppercase tracking-wider group-hover:bg-[#3B82F6] transition-all duration-200 shadow-[0_0_25px_rgba(36,107,253,0.4)] group-hover:shadow-[0_0_35px_rgba(36,107,253,0.6)]">
                    <FolderOpen className="w-4 h-4" />
                    <span>OPEN FOLDER &middot; 39 PHOTOS</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <span className="font-mono text-xs text-[#9A9CA3] hidden sm:inline-block">
                    Tap to explore full high-res album
                  </span>
                </div>
              </div>

              {/* Right Column: Visual 3D Stacked Folder Pocket Effect */}
              <div className="lg:col-span-5 flex items-center justify-center py-4">
                <div className="relative w-64 h-48 sm:w-72 sm:h-52 flex items-center justify-center select-none">
                  {/* Photo 1: Left Tilted Preview */}
                  <div className="absolute w-36 h-44 sm:w-40 sm:h-48 rounded-xl overflow-hidden border-2 border-[#252830] bg-[#0A0D14] shadow-2xl transform -rotate-12 -translate-x-12 translate-y-2 group-hover:-rotate-[16deg] group-hover:-translate-x-16 transition-all duration-300">
                    <img
                      src={`/images/devcon/${devconPhotos[2]}`}
                      alt="Devcon moment preview left"
                      className="w-full h-full object-cover filter contrast-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                  </div>

                  {/* Photo 2: Right Tilted Preview */}
                  <div className="absolute w-36 h-44 sm:w-40 sm:h-48 rounded-xl overflow-hidden border-2 border-[#252830] bg-[#0A0D14] shadow-2xl transform rotate-12 translate-x-12 translate-y-2 group-hover:rotate-[16deg] group-hover:translate-x-16 transition-all duration-300">
                    <img
                      src={`/images/devcon/${devconPhotos[5]}`}
                      alt="Devcon moment preview right"
                      className="w-full h-full object-cover filter contrast-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                  </div>

                  {/* Photo 3: Center Highlight Card */}
                  <div className="relative z-10 w-40 h-48 sm:w-44 sm:h-52 rounded-2xl overflow-hidden border-2 border-[#246BFD]/60 bg-[#0B0E17] shadow-[0_15px_35px_rgba(0,0,0,0.9)] transform group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-300">
                    <img
                      src={`/images/devcon/${devconPhotos[0]}`}
                      alt="Devcon moment preview center"
                      className="w-full h-full object-cover filter contrast-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-transparent to-transparent flex items-end justify-between p-3">
                      <span className="font-mono text-[10px] text-white flex items-center gap-1 bg-[#050505]/80 px-2 py-0.5 rounded border border-[#252830]">
                        <Eye className="w-3 h-3 text-[#246BFD]" />
                        PREVIEW
                      </span>
                      <span className="font-mono text-[11px] text-[#4D8DFF] font-bold">
                        39 Photos
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* FOLDER EXPLORER MODAL: Opens when user taps the folder    */}
      {/* ======================================================== */}
      <AnimatePresence>
        {isFolderOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#050505]/90 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 lg:p-8"
            onClick={() => setIsFolderOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.94, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl max-h-[92vh] flex flex-col rounded-3xl bg-[#090C12] border border-[#252830] shadow-[0_25px_80px_rgba(0,0,0,0.95)] overflow-hidden"
            >
              {/* Modal Header */}
              <div className="p-5 sm:p-6 border-b border-[#252830] bg-[#0E121B] flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#246BFD]/15 border border-[#246BFD]/40 flex items-center justify-center">
                    <FolderOpen className="w-5 h-5 text-[#246BFD]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-display text-lg sm:text-xl text-white">
                        Devcon 8 Mumbai &middot; Photo Archive
                      </h3>
                      <span className="px-2 py-0.5 rounded-full bg-[#246BFD]/20 border border-[#246BFD]/40 font-mono text-[11px] text-[#93C5FD] font-semibold">
                        39 Items
                      </span>
                    </div>
                    <p className="font-mono text-xs text-[#9A9CA3] mt-0.5">
                      /gallery/devcon-8-india/mumbai-2026/ &middot; Click any photo to enlarge
                    </p>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setIsFolderOpen(false)}
                  className="p-2.5 rounded-2xl bg-[#141824] border border-[#252830] text-[#9A9CA3] hover:text-white hover:border-[#246BFD] transition-colors flex items-center gap-1.5"
                  aria-label="Close folder"
                >
                  <span className="font-mono text-xs hidden sm:inline-block">CLOSE [ESC]</span>
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body: Scrollable Grid of All 39 Photos */}
              <div className="p-4 sm:p-6 overflow-y-auto flex-1 custom-scrollbar">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
                  {devconPhotos.map((photoName, index) => {
                    const photoUrl = `/images/devcon/${photoName}`;
                    return (
                      <div
                        key={photoName}
                        onClick={(e) => openLightbox(index, e)}
                        className="group/photo relative h-36 sm:h-44 rounded-2xl overflow-hidden border border-[#252830] bg-[#0A0D14] cursor-pointer hover:border-[#246BFD] hover:shadow-[0_0_20px_rgba(36,107,253,0.35)] transition-all duration-200 flex items-center justify-center p-1.5"
                      >
                        <img
                          src={photoUrl}
                          alt={`Devcon 8 Mumbai photo ${index + 1}`}
                          loading="lazy"
                          className="w-full h-full object-cover rounded-xl filter contrast-105 group-hover/photo:scale-105 transition-transform duration-200 select-none"
                        />

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#050505]/90 via-transparent to-transparent opacity-0 group-hover/photo:opacity-100 transition-opacity duration-150 flex items-end justify-between p-2.5 pointer-events-none">
                          <span className="font-mono text-[10px] text-white flex items-center gap-1 bg-[#050505]/80 px-2 py-0.5 rounded border border-[#252830]">
                            <Maximize2 className="w-3 h-3 text-[#246BFD]" />
                            EXPAND
                          </span>
                          <span className="font-mono text-[10px] text-[#9A9CA3]">
                            #{index + 1}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-5 border-t border-[#252830] bg-[#0E121B] flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-[#9A9CA3]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>39 of 39 photos loaded &middot; Ethereum Foundation &amp; Mumbai Web3 Week</span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsFolderOpen(false)}
                  className="px-4 py-2 rounded-xl bg-[#141824] border border-[#252830] text-white hover:border-[#246BFD] transition-colors"
                >
                  DONE BROWSING
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ======================================================== */}
      {/* FULLSCREEN LIGHTBOX MODAL: Next / Prev Navigation        */}
      {/* ======================================================== */}
      <AnimatePresence>
        {activePhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#050505]/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8 select-none"
            onClick={() => setActivePhotoIndex(null)}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActivePhotoIndex(null)}
              className="absolute top-6 right-6 p-2 rounded-full border border-[#252830] text-white hover:border-[#246BFD] transition-colors z-20 bg-[#0B0D10]/80"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Top Indicator */}
            <div className="absolute top-6 left-6 font-mono text-xs text-[#9A9CA3] bg-[#0B0D10]/80 px-3 py-1 rounded-full border border-[#252830]">
              Devcon 8 India &middot; Photo {activePhotoIndex + 1} of {devconPhotos.length}
            </div>

            {/* Previous Photo Button */}
            <button
              type="button"
              onClick={prevPhoto}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#0B0D10]/85 border border-[#252830] text-white hover:border-[#246BFD] hover:text-[#4D8DFF] transition-all z-20 backdrop-blur-md"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Photo Button */}
            <button
              type="button"
              onClick={nextPhoto}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#0B0D10]/85 border border-[#252830] text-white hover:border-[#246BFD] hover:text-[#4D8DFF] transition-all z-20 backdrop-blur-md"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Preview Container */}
            <div
              className="max-w-5xl max-h-[85vh] rounded-2xl overflow-hidden border border-[#252830] bg-[#0B0D10] p-2 flex items-center justify-center shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={`/images/devcon/${devconPhotos[activePhotoIndex]}`}
                alt={`Devcon 8 preview ${activePhotoIndex + 1}`}
                className="w-full h-full max-h-[80vh] object-contain select-none"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
