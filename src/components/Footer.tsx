import { Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Certificates", href: "/certificates", isRoute: true },
  { label: "Hackathons", href: "/hackathons", isRoute: true },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/Najishanjum", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/md-najish-anjum-044078328", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/Najish_anjum?s=09", label: "X / Twitter" },
];

export const Footer = () => {
  return (
    <footer
      className="border-t-[3px] border-[#090909] py-16 px-4 sm:px-8"
      style={{ background: "#090909" }}
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full rounded-2xl overflow-hidden border-[3px] border-[#FAF8F3]"
          style={{ boxShadow: "6px 6px 0 #FFD21C" }}
        >
          <img
            src="/images/linkedin-banner.png"
            alt="Md Najish Anjum - A Builder at Heart and a Leader by Choice"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Middle: Logo + Nav + Social */}
        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/* Logo & tagline */}
          <div className="space-y-4">
            <div
              className="inline-flex items-center gap-1 px-4 py-2 rounded-xl border-[2px] border-[#FAF8F3] shadow-[3px_3px_0_#FFD21C]"
              style={{ background: "#FAF8F3" }}
            >
              <span className="font-black text-xl text-[#090909]">&lt;NA /&gt;</span>
            </div>
            <p className="text-sm font-medium leading-relaxed" style={{ color: "#F3F0E8" }}>
              B.Tech AI/ML · Full Stack Developer ·<br />
              Hackathon Enthusiast · Team ILM Tech
            </p>
          </div>

          {/* Nav links */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#5B5B5B" }}>
              Navigate
            </p>
            <ul className="space-y-2">
              {navLinks.map((item) => (
                <li key={item.label}>
                  {item.isRoute ? (
                    <Link
                      to={item.href}
                      className="text-sm font-semibold hover:text-[#FFD21C] transition-colors"
                      style={{ color: "#F3F0E8" }}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className="text-sm font-semibold hover:text-[#FFD21C] transition-colors"
                      style={{ color: "#F3F0E8" }}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#5B5B5B" }}>
              Connect
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-11 h-11 rounded-xl border-[2px] border-[#FAF8F3] flex items-center justify-center shadow-[2px_2px_0_#FFD21C] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all"
                  style={{ background: "#FAF8F3" }}
                >
                  <social.icon className="w-5 h-5 text-[#090909]" />
                </a>
              ))}
            </div>
            <a
              href="/resume/Najish_Anjum_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm border-[2px] border-[#FAF8F3] shadow-[3px_3px_0_#FFD21C] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all"
              style={{ background: "#FFD21C", color: "#090909" }}
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Bottom copyright */}
        <div
          className="pt-6 border-t-[2px] border-[#FAF8F3]/10 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs font-bold" style={{ color: "#5B5B5B" }}>
            © 2025 Najish Anjum. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
