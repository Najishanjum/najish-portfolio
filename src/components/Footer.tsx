import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";
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
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050505] text-white border-t border-[#252830] pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Banner if available, sleekly framed in dark border */}
        <div className="w-full rounded-2xl overflow-hidden border border-[#252830] bg-[#0B0D10]">
          <img
            src="/images/linkedin-banner.png"
            alt="Md Najish Anjum - A Builder at Heart and a Leader by Choice"
            className="w-full h-auto object-cover opacity-85 hover:opacity-100 transition-opacity"
          />
        </div>

        {/* Top/Middle Row: Brand + Navigation + Socials */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-display text-2xl tracking-tight text-white">
                &lt;NA <span className="text-[#246BFD]">/&gt;</span>
              </span>
            </div>
            <p className="font-sans text-sm text-[#9A9CA3] max-w-sm leading-relaxed">
              Najish Anjum &middot; AI/ML Developer, Full-Stack Engineer &amp; Web3 Builder. Leading Team ILM Tech and serving as Stellar India Ambassador.
            </p>
          </div>

          {/* Nav links */}
          <div className="md:col-span-4 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#246BFD]">
              NAVIGATION
            </span>
            <div className="grid grid-cols-2 gap-2 pt-1">
              {navLinks.map((item) => (
                <div key={item.label}>
                  {item.isRoute ? (
                    <Link
                      to={item.href}
                      className="text-xs font-mono text-[#9A9CA3] hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className="text-xs font-mono text-[#9A9CA3] hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Connect Column */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#246BFD]">
              CONNECT
            </span>
            <div className="flex items-center gap-2 pt-1">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full border border-[#252830] bg-[#0B0D10] flex items-center justify-center text-[#9A9CA3] hover:text-white hover:border-[#246BFD] transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Row: Copyright + Back to Top */}
        <div className="pt-8 border-t border-[#252830] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#9A9CA3]">
          <div>
            &copy; 2026 NAJISH ANJUM. ALL RIGHTS RESERVED.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#9A9CA3] hover:text-[#246BFD] transition-colors"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#246BFD]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
