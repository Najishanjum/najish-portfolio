import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Play } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Certificates", href: "/certificates" },
  { label: "Hackathons", href: "/hackathons" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/Najishanjum", label: "GitHub" },
  { icon: Linkedin, href: "http://www.linkedin.com/in/md-najish-anjum-044078328", label: "LinkedIn" },
];

interface NavigationProps {
  onReplayIntro?: () => void;
}

export const Navigation = ({ onReplayIntro }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href.startsWith('/')) {
      setIsMobileMenuOpen(false);
      return;
    }
    if (location.pathname !== '/') {
      navigate('/' + href);
      setIsMobileMenuOpen(false);
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 rounded-2xl ${
          isScrolled
            ? "bg-[#FAF8F3] border-[3px] border-[#090909] shadow-[4px_4px_0_#090909]"
            : "bg-[#FAF8F3]/90 border-[3px] border-[#090909] shadow-[4px_4px_0_#090909]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                if (location.pathname !== '/') {
                  navigate('/');
                } else {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="flex items-center gap-2 group"
              aria-label="Najish Anjum - Home"
            >
              <span
                className="font-display text-xl font-800 tracking-tight text-[#090909]"
                style={{ fontWeight: 800 }}
              >
                &lt;NA /&gt;
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) =>
                item.href.startsWith('/') ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="relative px-4 py-2 text-sm font-semibold text-[#5B5B5B] hover:text-[#090909] transition-colors duration-200 rounded-lg hover:bg-[#FFD21C]/20 group"
                  >
                    {item.label}
                    <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-[#FFD21C] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full" />
                  </Link>
                ) : (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="relative px-4 py-2 text-sm font-semibold text-[#5B5B5B] hover:text-[#090909] transition-colors duration-200 rounded-lg hover:bg-[#FFD21C]/20 group"
                  >
                    {item.label}
                    <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-[#FFD21C] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full" />
                  </button>
                )
              )}
            </div>

            {/* Right: social + play intro */}
            <div className="hidden md:flex items-center gap-3">
              {onReplayIntro && (
                <button
                  onClick={onReplayIntro}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-[#090909] bg-[#FFD21C] border-[2px] border-[#090909] rounded-xl shadow-[3px_3px_0_#090909] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_#090909] transition-all duration-150 active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
                  title="Play Intro"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Intro</span>
                </button>
              )}
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 flex items-center justify-center border-[2px] border-[#090909] rounded-lg bg-[#FAF8F3] shadow-[2px_2px_0_#090909] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all duration-150 hover:bg-[#090909] group"
                >
                  <social.icon className="h-4 w-4 text-[#090909] group-hover:text-[#FAF8F3] transition-colors" />
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden w-10 h-10 flex items-center justify-center border-[2px] border-[#090909] rounded-xl bg-[#FAF8F3] shadow-[2px_2px_0_#090909] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 text-[#090909]" />
              ) : (
                <Menu className="h-5 w-5 text-[#090909]" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 md:hidden"
            style={{ background: "#FAF8F3" }}
          >
            {/* Close overlay */}
            <div className="flex flex-col h-full px-6 pt-24 pb-10">
              {/* Nav Items */}
              <div className="space-y-2 flex-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.06 }}
                  >
                    {item.href.startsWith('/') ? (
                      <Link
                        to={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center justify-between py-4 border-b-[2px] border-[#090909] text-2xl font-bold text-[#090909] hover:text-[#7557F7] transition-colors"
                      >
                        <span>{item.label}</span>
                        <span className="text-sm font-normal text-[#5B5B5B]">→</span>
                      </Link>
                    ) : (
                      <button
                        onClick={() => scrollToSection(item.href)}
                        className="w-full flex items-center justify-between py-4 border-b-[2px] border-[#090909] text-2xl font-bold text-[#090909] hover:text-[#7557F7] transition-colors text-left"
                      >
                        <span>{item.label}</span>
                        <span className="text-sm font-normal text-[#5B5B5B]">→</span>
                      </button>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Bottom social links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-4 pt-8"
              >
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center border-[2px] border-[#090909] rounded-xl bg-[#090909] shadow-[3px_3px_0_#5B5B5B]"
                  >
                    <social.icon className="h-5 w-5 text-[#FAF8F3]" />
                  </a>
                ))}
                {onReplayIntro && (
                  <button
                    onClick={() => { setIsMobileMenuOpen(false); onReplayIntro(); }}
                    className="flex-1 flex items-center justify-center gap-2 py-3 font-bold bg-[#FFD21C] border-[2px] border-[#090909] rounded-xl shadow-[3px_3px_0_#090909] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
                  >
                    <Play className="w-4 h-4 fill-current" />
                    Play Intro
                  </button>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
