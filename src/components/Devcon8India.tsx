import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Maximize2,
  X,
  Sparkles,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Camera,
  Image as ImageIcon,
} from "lucide-react";
import devconHeroImg from "@/assets/devcon8-india.jpg";

// All 39 authentic Devcon images copied from C:\Users\Lenovo\Pictures\Devcon
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
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  // Gallery view: show initial 12 or all 39
  const visiblePhotos = showAllPhotos ? devconPhotos : devconPhotos.slice(0, 12);

  const openLightbox = (index: number) => {
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
      setActivePhotoIndex((activePhotoIndex - 1 + devconPhotos.length) % devconPhotos.length);
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

                {/* Bottom Overlay Pill on Image */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="font-mono text-xs text-white bg-[#050505]/80 backdrop-blur-md border border-[#252830] px-3 py-1 rounded-full">
                    DEVCON VIII INDIA &middot; OFFICIAL STAGE
                  </span>
                  <span className="font-mono text-xs text-[#4D8DFF] bg-[#050505]/80 backdrop-blur-md border border-[#252830] px-3 py-1 rounded-full hidden sm:inline-block">
                    MUMBAI, INDIA
                  </span>
                </div>
              </div>

              {/* Caption Footer */}
              <div className="p-5 sm:p-6 bg-[#0E1116] border-t border-[#252830] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <div className="flex items-center gap-2 text-[#C5C8D0]">
                  <span className="w-2 h-2 rounded-full bg-[#246BFD]" />
                  <span>Najish Anjum &middot; Volunteer Lead at Devcon 8</span>
                </div>
                <span className="text-[#9A9CA3]">
                  ETHEREUM FOUNDATION &middot; NOV 2026
                </span>
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
                <span className="font-mono text-[11px] text-[#246BFD]">
                  L1 &amp; L2 Protocols
                </span>
              </div>

              <div className="p-4 rounded-xl bg-[#0B0D10] border border-[#252830]">
                <span className="font-mono text-[10px] text-[#9A9CA3] uppercase block">
                  COMMUNITY IMPACT
                </span>
                <span className="font-display text-lg text-white font-bold block mt-1">
                  130+ Side Events
                </span>
                <span className="font-mono text-[11px] text-[#246BFD]">
                  30+ Partners
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Comprehensive Photo Gallery: All 39 Photos from C:\Users\Lenovo\Pictures\Devcon */}
        <div className="pt-10 border-t border-[#252830]/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Camera className="w-4 h-4 text-[#246BFD]" />
                <span className="font-mono text-xs text-[#246BFD] font-bold uppercase tracking-wider">
                  DEVCON 8 MUMBAI &middot; PHOTO ARCHIVE
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl text-white">
                Moments &amp; On-Ground Activations
              </h3>
              <p className="font-mono text-xs text-[#9A9CA3] mt-1">
                Showing {visiblePhotos.length} of {devconPhotos.length} authentic photos from the conference &amp; builder side events.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowAllPhotos(!showAllPhotos)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#252830] bg-[#0B0D10] font-mono text-xs font-semibold text-[#C5C8D0] hover:text-white hover:border-[#246BFD] transition-colors self-start sm:self-auto shadow-md"
            >
              <ImageIcon className="w-3.5 h-3.5 text-[#246BFD]" />
              <span>
                {showAllPhotos ? "SHOW LESS" : `VIEW ALL ${devconPhotos.length} PHOTOS`}
              </span>
            </button>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {visiblePhotos.map((photoName, index) => {
              const photoUrl = `/images/devcon/${photoName}`;
              return (
                <motion.div
                  key={photoName}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.35, delay: (index % 12) * 0.03 }}
                  onClick={() => openLightbox(index)}
                  className="group/photo relative h-36 sm:h-44 rounded-2xl overflow-hidden border border-[#252830] bg-[#0A0D14] cursor-pointer hover:border-[#246BFD] hover:shadow-[0_0_20px_rgba(36,107,253,0.3)] transition-all duration-300 flex items-center justify-center p-1.5"
                >
                  <img
                    src={photoUrl}
                    alt={`Devcon 8 Mumbai moment ${index + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover rounded-xl filter contrast-105 group-hover/photo:scale-105 transition-transform duration-300 select-none"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#050505]/85 via-transparent to-transparent opacity-0 group-hover/photo:opacity-100 transition-opacity duration-200 flex items-end justify-between p-2.5 pointer-events-none">
                    <span className="font-mono text-[10px] text-white flex items-center gap-1 bg-[#050505]/80 px-2 py-0.5 rounded border border-[#252830]">
                      <Maximize2 className="w-3 h-3 text-[#246BFD]" />
                      EXPAND
                    </span>
                    <span className="font-mono text-[10px] text-[#9A9CA3]">
                      #{index + 1}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Expand Toggle button if not already expanded */}
          {!showAllPhotos && devconPhotos.length > 12 && (
            <div className="mt-8 text-center">
              <button
                type="button"
                onClick={() => setShowAllPhotos(true)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#252830] bg-[#0E121B] font-mono text-xs font-bold uppercase tracking-wider text-[#93C5FD] hover:text-white hover:border-[#246BFD] hover:bg-[#121625] transition-all shadow-lg"
              >
                <span>EXPLORE ALL {devconPhotos.length} DEVCON 8 MOMENTS</span>
                <ChevronRight className="w-4 h-4 text-[#246BFD]" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal with Next / Prev */}
      <AnimatePresence>
        {activePhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#050505]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 select-none"
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
