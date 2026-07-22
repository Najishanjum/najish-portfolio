import { Github, Linkedin, Twitter, Code2 } from "lucide-react";
import bannerAsset from "@/assets/linkedin-banner.png.asset.json";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Banner Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full rounded-2xl overflow-hidden border border-border/50 shadow-2xl"
        >
          <img
            src={bannerAsset.url}
            alt="Md Najish Anjum - A Builder at Heart and a Leader by Choice"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="font-mono text-lg font-bold">
              <span className="text-primary">&lt;</span>
              <span className="text-gradient">NA</span>
              <span className="text-primary">/&gt;</span>
            </div>
            <p className="text-sm text-muted-foreground font-mono flex items-center gap-1">
              <Code2 className="w-4 h-4 text-primary" /> Developed by Najish Anjum © 2025
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/Najishanjum"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-card/50 border border-border/50 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/md-najish-anjum-044078328"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-card/50 border border-border/50 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://x.com/Najish_anjum?s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-card/50 border border-border/50 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
            >
              <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};
