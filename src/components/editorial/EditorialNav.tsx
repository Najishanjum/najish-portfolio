import { useState, useEffect } from "react";

const CHAPTERS = [
  { id: "chapter-01", num: "01", label: "OPENING" },
  { id: "chapter-02", num: "02", label: "WORK" },
  { id: "chapter-03", num: "03", label: "STACK" },
  { id: "chapter-04", num: "04", label: "STORY" },
  { id: "chapter-05", num: "05", label: "EXPERIENCE" },
  { id: "chapter-06", num: "06", label: "RECEIPTS" },
  { id: "chapter-07", num: "07", label: "BUILD" },
  { id: "chapter-08", num: "08", label: "CONTACT" },
];

export const EditorialNav = () => {
  const [activeChapter, setActiveChapter] = useState("01");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Detect which chapter is in viewport
      for (const ch of [...CHAPTERS].reverse()) {
        const el = document.getElementById(ch.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250) {
            setActiveChapter(ch.num);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? "bg-[#F0EDE5]/90 backdrop-blur-md border-[#C9C5BC] py-2.5 shadow-sm"
            : "bg-[#F0EDE5]/60 backdrop-blur-sm border-[#C9C5BC]/60 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Identity & Status */}
          <div className="flex items-center gap-4">
            <a
              href="#chapter-01"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("chapter-01");
              }}
              className="group flex items-center gap-2 text-xs font-mono-tech tracking-wider text-[#191919] uppercase font-bold"
            >
              <span className="w-2.5 h-2.5 bg-[#D12626] inline-block"></span>
              <span className="group-hover:text-[#D12626] transition-colors">
                NAJISH ANJUM
              </span>
              <span className="text-[#77736C]">/ VOL. 01</span>
            </a>

            <div className="hidden sm:flex items-center gap-1.5 pl-3 border-l border-[#C9C5BC] text-[11px] font-mono-tech text-[#77736C]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D12626] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D12626]"></span>
              </span>
              <span>OPEN TO SHIP</span>
            </div>
          </div>

          {/* Desktop Chapter Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 text-[11px] font-mono-tech tracking-wider">
            {CHAPTERS.map((ch) => {
              const isActive = activeChapter === ch.num;
              return (
                <button
                  key={ch.id}
                  onClick={() => scrollTo(ch.id)}
                  className={`px-2.5 py-1 transition-all ${
                    isActive
                      ? "text-[#F0EDE5] bg-[#191919] font-semibold"
                      : "text-[#77736C] hover:text-[#191919] hover:bg-[#DCD8D0]/60"
                  }`}
                >
                  <span className={isActive ? "text-[#D12626] mr-1" : "text-[#77736C] mr-1"}>
                    {ch.num}
                  </span>
                  {ch.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs & Mobile toggle */}
          <div className="flex items-center gap-2.5">
            <a
              href="/Najish_Anjum_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono-tech uppercase px-3 py-1.5 border border-[#191919] text-[#191919] hover:bg-[#191919] hover:text-[#F0EDE5] transition-colors"
            >
              RESUME ↗
            </a>

            <button
              onClick={() => scrollTo("chapter-08")}
              className="hidden sm:inline-flex items-center text-xs font-mono-tech uppercase px-3 py-1.5 bg-[#D12626] text-[#F0EDE5] hover:bg-[#191919] transition-colors font-semibold"
            >
              LET'S TALK →
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 border border-[#C9C5BC] text-[#191919] hover:bg-[#DCD8D0]"
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[53px] z-40 bg-[#F0EDE5] border-b border-[#C9C5BC] p-6 shadow-xl">
          <div className="grid grid-cols-2 gap-2 text-xs font-mono-tech">
            {CHAPTERS.map((ch) => (
              <button
                key={ch.id}
                onClick={() => scrollTo(ch.id)}
                className={`p-3 text-left border ${
                  activeChapter === ch.num
                    ? "border-[#191919] bg-[#191919] text-[#F0EDE5]"
                    : "border-[#C9C5BC] bg-[#EDEAE2] text-[#191919]"
                }`}
              >
                <div className="text-[10px] text-[#D12626] font-bold">{ch.num} // CHAPTER</div>
                <div className="font-anton text-base tracking-normal mt-0.5">{ch.label}</div>
              </button>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-[#C9C5BC] flex gap-2">
            <a
              href="/Najish_Anjum_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 text-center text-xs font-mono-tech border border-[#191919] uppercase"
            >
              Resume ↗
            </a>
            <button
              onClick={() => scrollTo("chapter-08")}
              className="flex-1 py-2 text-center text-xs font-mono-tech bg-[#D12626] text-white uppercase font-bold"
            >
              Contact →
            </button>
          </div>
        </div>
      )}
    </>
  );
};
