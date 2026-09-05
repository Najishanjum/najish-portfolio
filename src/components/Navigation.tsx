import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Menu, X, Github, Linkedin, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
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

// Magnetic Button Component
const MagneticNavItem = ({ 
  children, 
  onClick, 
  isRoute = false,
  to = ""
}: { 
  children: React.ReactNode; 
  onClick?: () => void;
  isRoute?: boolean;
  to?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    x.set(distanceX * 0.3);
    y.set(distanceY * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const content = (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative group cursor-pointer"
    >
      <motion.span
        className="font-mono text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300 inline-block"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {children}
      </motion.span>
      {/* Liquid underline */}
      <motion.div
        className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-cyan-400 to-primary rounded-full origin-center"
        initial={{ scaleX: 0, opacity: 0 }}
        whileHover={{ 
          scaleX: 1, 
          opacity: 1,
          transition: { duration: 0.3, ease: "easeOut" }
        }}
        style={{
          filter: "blur(0.5px)",
          boxShadow: "0 0 8px hsl(var(--primary))"
        }}
      />
    </motion.div>
  );

  if (isRoute) {
    return (
      <Link to={to} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return <div onClick={onClick}>{content}</div>;
};

// Magnetic Social Icon
const MagneticSocialIcon = ({ 
  icon: Icon, 
  href, 
  label 
}: { 
  icon: typeof Github; 
  href: string; 
  label: string;
}) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    x.set(distanceX * 0.4);
    y.set(distanceY * 0.4);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative p-2 rounded-full hover:bg-primary/10 transition-colors duration-300 group"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
      <motion.div
        className="absolute inset-0 rounded-full bg-primary/20 blur-md"
        initial={{ opacity: 0, scale: 0.8 }}
        whileHover={{ opacity: 1, scale: 1.2 }}
      />
    </motion.a>
  );
};

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
    
    // If not on homepage, navigate to homepage first then scroll
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
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 rounded-2xl ${
          isScrolled 
            ? "bg-background/40 backdrop-blur-xl border border-border/30 shadow-lg shadow-primary/5" 
            : "bg-background/20 backdrop-blur-md border border-border/20"
        }`}
        style={{
          boxShadow: isScrolled 
            ? "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)" 
            : "0 4px 16px rgba(0, 0, 0, 0.1)"
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                if (location.pathname !== '/') {
                  navigate('/');
                } else {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="font-mono text-xl font-bold relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-primary">&lt;</span>
              <span className="text-gradient">NA</span>
              <span className="text-primary">/&gt;</span>
              <motion.div
                className="absolute -inset-2 bg-primary/10 rounded-lg blur-md"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <MagneticNavItem
                  key={item.label}
                  isRoute={item.href.startsWith('/')}
                  to={item.href}
                  onClick={() => !item.href.startsWith('/') && scrollToSection(item.href)}
                >
                  {item.label}
                </MagneticNavItem>
              ))}
              
              {/* Play Intro Button & Social Links */}
              <div className="flex items-center gap-3 ml-4 pl-4 border-l border-border/30">
                {onReplayIntro && (
                  <Button
                    onClick={onReplayIntro}
                    variant="ghost"
                    size="sm"
                    className="font-mono text-xs flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-primary/40 bg-primary/10 hover:bg-primary/20 text-neon-cyan transition-all shadow-[0_0_10px_rgba(0,255,255,0.15)]"
                    title="Play Intro Video"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Intro</span>
                  </Button>
                )}
                {socialLinks.map((social) => (
                  <MagneticSocialIcon
                    key={social.label}
                    icon={social.icon}
                    href={social.href}
                    label={social.label}
                  />
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden relative"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6 text-primary" />
                ) : (
                  <Menu className="h-6 w-6 text-primary" />
                )}
              </motion.div>
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
          animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
          exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 bg-background/80 md:hidden"
        >
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {item.href.startsWith('/') ? (
                  <Link
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-mono text-2xl text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="font-mono text-2xl text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </button>
                )}
              </motion.div>
            ))}
            
            {/* Mobile Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
              className="flex items-center gap-6 mt-8"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  <social.icon className="h-6 w-6 text-primary" />
                </a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </>
  );
};
