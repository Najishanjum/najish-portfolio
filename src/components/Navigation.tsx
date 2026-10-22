import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Github, Linkedin, Play } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const navItems = [
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
];

interface NavigationProps {
  onReplayIntro?: () => void;
}

export const Navigation = ({ onReplayIntro }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Track active section for anchor links
      const sections = ["about", "projects", "experience", "tech-stack", "contact"];
      const current = sections.find((sec) => {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(`#${current}`);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href.startsWith("/")) {
      setIsMobileMenuOpen(false);
      return;
    }
    if (location.pathname !== "/") {
      navigate("/" + href);
      setIsMobileMenuOpen(false);
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
      setActiveSection(href);
    }
  };

  return (
    <>
      {/* Desktop Sticky Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#050505]/90 backdrop-blur-xl border-b border-[#252830] py-3.5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Brand Mark */}
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                if (location.pathname !== "/") {
                  navigate("/");
                } else {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="flex items-center gap-2 group cursor-pointer"
              aria-label="Najish Anjum - Home"
            >
              <div className="flex items-center font-display tracking-tight text-2xl text-white group-hover:text-[#246BFD] transition-colors">
                <span>&lt;NA</span>
                <span className="text-[#246BFD] ml-0.5">/&gt;</span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-[#0B0D10]/80 border border-[#252830] rounded-full px-3 py-1.5 backdrop-blur-md">
              {navItems.map((item) => {
                const isActive = item.isRoute
                  ? location.pathname === item.href
                  : activeSection === item.href;

                return item.isRoute ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`relative px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-200 ${
                      isActive
                        ? "text-white bg-[#246BFD]"
                        : "text-[#9A9CA3] hover:text-white hover:bg-[#12151B]"
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className={`relative px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-200 ${
                      isActive
                        ? "text-white bg-[#246BFD]"
                        : "text-[#9A9CA3] hover:text-white hover:bg-[#12151B]"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Header Right CTAs */}
            <div className="hidden md:flex items-center gap-3">
              {onReplayIntro && (
                <button
                  onClick={onReplayIntro}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#252830] text-xs font-mono font-medium text-[#9A9CA3] hover:text-white hover:border-[#246BFD] transition-colors"
                  title="Replay intro animation"
                >
                  <Play className="w-3 h-3 text-[#246BFD] fill-current" />
                  <span>INTRO</span>
                </button>
              )}

              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-[#252830] bg-[#0B0D10] text-[#9A9CA3] hover:text-white hover:border-[#246BFD] hover:bg-[#12151B] transition-all"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#contact");
                }}
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider bg-[#246BFD] text-white rounded-full hover:bg-[#4D8DFF] transition-all shadow-[0_2px_15px_rgba(36,107,253,0.35)] hover:shadow-[0_4px_25px_rgba(36,107,253,0.55)] cursor-pointer"
              >
                <span>LET'S TALK</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#contact");
                }}
                className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider bg-[#246BFD] text-white rounded-full"
              >
                CONTACT
              </a>
              <button
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[#252830] bg-[#0B0D10] text-white hover:border-[#246BFD] transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5 text-white" />
                ) : (
                  <Menu className="h-5 w-5 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 lg:hidden bg-[#050505] pt-24 pb-8 px-6 flex flex-col justify-between overflow-y-auto"
          >
            <div className="space-y-1">
              <p className="font-mono text-xs uppercase tracking-widest text-[#246BFD] mb-4">
                [ NAVIGATION ]
              </p>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {item.isRoute ? (
                    <Link
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between py-3.5 border-b border-[#252830] font-display text-2xl uppercase tracking-wide text-white hover:text-[#246BFD] transition-colors"
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="w-5 h-5 text-[#9A9CA3]" />
                    </Link>
                  ) : (
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className="w-full flex items-center justify-between py-3.5 border-b border-[#252830] font-display text-2xl uppercase tracking-wide text-white hover:text-[#246BFD] transition-colors text-left"
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="w-5 h-5 text-[#9A9CA3]" />
                    </button>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="pt-8 border-t border-[#252830] space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#9A9CA3]">CONNECT WITH ME</span>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-[#252830] bg-[#0B0D10] flex items-center justify-center text-white hover:border-[#246BFD] transition-colors"
                    >
                      <social.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>

              {onReplayIntro && (
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onReplayIntro();
                  }}
                  className="w-full py-3 text-xs font-mono font-bold uppercase tracking-wider rounded-xl border border-[#252830] bg-[#0B0D10] text-[#9A9CA3] hover:text-white hover:border-[#246BFD] flex items-center justify-center gap-2"
                >
                  <Play className="w-3.5 h-3.5 text-[#246BFD] fill-current" />
                  <span>REPLAY INTRO</span>
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
