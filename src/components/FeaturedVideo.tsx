import { motion } from "framer-motion";

export const FeaturedVideo = () => {
  return (
    <section className="py-20 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">&lt;</span>
            <span className="text-gradient">Featured Video</span>
            <span className="text-primary">/&gt;</span>
          </h2>
          <p className="text-muted-foreground font-mono">A glimpse into my journey</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="mx-auto max-w-sm aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl shadow-primary/30 border-2 border-primary/30 bg-black"
        >
          <iframe
            src="https://www.youtube.com/embed/z0LZUorkQeU?autoplay=1&mute=1&loop=1&playlist=z0LZUorkQeU&controls=1&playsinline=1"
            title="Featured Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </motion.div>
      </div>
    </section>
  );
};
