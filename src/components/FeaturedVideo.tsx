import { motion } from "framer-motion";
import { Play } from "lucide-react";

const videos = [
  { id: "z0LZUorkQeU", title: "Featured Hackathon & Build Journey" },
  { id: "u6eRMGO0oA8", title: "Stellar Ambassador Journey in Web3" },
  { id: "Se5xXgulP3E", title: "Engineering Highlights & Sprints" },
  { id: "EcJa-VfsOe4", title: "Rapid Build Highlight 01" },
  { id: "2F-ILgNP-kE", title: "Rapid Build Highlight 02" },
  { id: "kx1gchhQ-Fs", title: "Rapid Build Highlight 03" },
  { id: "6Xvdv1AN1gk", title: "Rapid Build Highlight 04" },
];

export const FeaturedVideo = () => {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0B0D10] text-white border-t border-[#252830] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Marker */}
        <div className="flex items-center justify-between pb-6 border-b border-[#252830] mb-12 sm:mb-16">
          <span className="editorial-eyebrow">[ 07 // MEDIA &amp; JOURNEY ]</span>
          <span className="font-mono text-xs text-[#9A9CA3] uppercase tracking-widest hidden sm:inline-block">
            RECORDED SPRINT DOCUMENTATION
          </span>
        </div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 sm:mb-20"
        >
          <h2 className="editorial-section-title text-white">
            <span>FEATURED</span>
            <br />
            <span className="text-[#246BFD]">VIDEOS.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#9A9CA3] max-w-xl font-sans">
            Capturing hackathon pitches, Stellar Web3 ambassadorship milestones, and developer highlights on screen.
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-start">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              viewport={{ once: true, margin: "-50px" }}
              className="rounded-[24px] bg-[#12151B] border border-[#252830] overflow-hidden hover:border-[#246BFD]/60 transition-all duration-300 group"
            >
              {/* Card Header Bar */}
              <div className="px-4 py-3 border-b border-[#252830] flex items-center justify-between bg-[#050505]/70">
                <span className="font-mono text-xs text-white truncate max-w-[200px]">{video.title}</span>
                <span className="font-mono text-[10px] text-[#246BFD] flex items-center gap-1 font-bold">
                  <Play className="w-2.5 h-2.5 fill-current" />
                  YT
                </span>
              </div>

              {/* Video Iframe Container */}
              <div className="aspect-[9/16] bg-[#050505]">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&loop=1&playlist=${video.id}&controls=1&playsinline=1`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
