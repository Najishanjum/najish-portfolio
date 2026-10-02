import { motion } from "framer-motion";

const videos = [
  { id: "z0LZUorkQeU", title: "Featured Video" },
  { id: "u6eRMGO0oA8", title: "Stellar Ambassador Journey" },
  { id: "Se5xXgulP3E", title: "Journey Highlight" },
  { id: "EcJa-VfsOe4", title: "Short Highlight 1" },
  { id: "2F-ILgNP-kE", title: "Short Highlight 2" },
  { id: "kx1gchhQ-Fs", title: "Short Highlight 3" },
  { id: "6Xvdv1AN1gk", title: "Short Highlight 4" },
];

const accentColors = ["#FFD21C", "#FF3D83", "#7557F7", "#35D04F", "#B7E83B", "#FFD21C", "#FF3D83"];

export const FeaturedVideo = () => {
  return (
    <section className="py-24 px-4 sm:px-8" style={{ background: "#FAF8F3" }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="nsha-section-eyebrow">My journey on screen</p>
          <h2 className="nsha-section-title">
            Featured{" "}
            <span style={{ color: "#FF3D83" }}>Videos</span>
          </h2>
          <div
            className="mt-4 h-1.5 w-20 rounded-full border-[2px] border-[#090909]"
            style={{ background: "#FF3D83" }}
          />
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-start">
          {videos.map((video, index) => {
            const accent = accentColors[index % accentColors.length];
            return (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Shadow */}
                <div
                  className="absolute inset-0 translate-x-[5px] translate-y-[5px] rounded-2xl border-[3px] border-[#090909]"
                  style={{ background: accent }}
                />
                {/* Card */}
                <div
                  className="relative rounded-2xl border-[3px] border-[#090909] overflow-hidden transition-transform duration-200 group-hover:translate-x-[-2px] group-hover:translate-y-[-2px]"
                  style={{ background: "#090909" }}
                >
                  {/* Title bar */}
                  <div
                    className="px-4 py-2.5 border-b-[3px] border-[#090909] flex items-center justify-between"
                    style={{ background: accent }}
                  >
                    <span className="text-xs font-bold text-[#090909] truncate">{video.title}</span>
                    <span className="text-xs font-bold text-[#090909]/60 ml-2 flex-shrink-0">YT</span>
                  </div>
                  {/* Iframe */}
                  <div className="aspect-[9/16]">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&loop=1&playlist=${video.id}&controls=1&playsinline=1`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
