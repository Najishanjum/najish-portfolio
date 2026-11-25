import { TapeMarquee } from "./TapeMarquee";

export const Chapter01Hero = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="chapter-01"
      className="relative min-h-[92vh] pt-24 md:pt-28 pb-6 flex flex-col justify-between overflow-hidden border-b border-[#C9C5BC]"
    >
      {/* Editorial Watermark Number */}
      <div className="absolute right-4 md:right-12 top-20 text-[18vw] font-anton text-[#191919]/[0.035] select-none pointer-events-none leading-none z-0">
        01
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Top Chapter Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[#C9C5BC]/70 text-xs font-mono-tech text-[#77736C]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D12626]"></span>
            <span className="font-mincho text-[#D12626] font-semibold">第一章</span>
            <span>// CHAPTER 01 — OPENING</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">COORDINATES: 23.2599° N, 77.4126° E</span>
            <span className="text-[#191919] font-bold">2026 TECHNICAL ARCHIVE</span>
          </div>
        </div>

        {/* Hero Main Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 lg:pt-12 items-end">
          {/* Left Column: Dominant Anton Typography & Statement */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            {/* Small Monospace Kicker */}
            <div className="inline-flex items-center gap-2 mb-3 text-xs font-mono-tech uppercase tracking-widest text-[#77736C]">
              <span>AI/ML DEVELOPER</span>
              <span className="text-[#D12626]">✦</span>
              <span>FULL-STACK</span>
              <span className="text-[#D12626]">✦</span>
              <span>WEB3 BUILDER</span>
            </div>

            {/* Massive Anton Name */}
            <h1 className="font-anton text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-[#191919] uppercase leading-[0.88] select-none">
              NAJISH <br />
              <span className="text-[#191919] hover:text-[#D12626] transition-colors">
                ANJUM
              </span>
            </h1>

            {/* Editorial Statement */}
            <div className="mt-6 sm:mt-8 max-w-2xl">
              <p className="font-serif-editorial text-2xl sm:text-3xl md:text-4xl leading-tight text-[#191919]">
                I build every layer of a product,{" "}
                <span className="text-[#D12626] italic font-normal">
                  and I ship it.
                </span>
              </p>
              <p className="mt-3 text-sm sm:text-base text-[#77736C] font-archivo leading-relaxed max-w-xl">
                Turning ambitious ideas into robust, deployed software. Specializing in autonomous AI systems, resilient full-stack architectures, and on-chain protocols.
              </p>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollTo("chapter-02")}
                className="group inline-flex items-center gap-2 px-6 py-3.5 bg-[#191919] text-[#F0EDE5] font-mono-tech text-xs uppercase tracking-wider font-semibold hover:bg-[#D12626] transition-all duration-200"
              >
                <span>VIEW THE WORK</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>

              <button
                onClick={() => scrollTo("chapter-08")}
                className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-[#191919] text-[#191919] font-mono-tech text-xs uppercase tracking-wider font-semibold hover:bg-[#191919] hover:text-[#F0EDE5] transition-all duration-200"
              >
                <span>START A PROJECT</span>
              </button>
            </div>
          </div>

          {/* Right Column: Editorial Status & Metadata Block */}
          <div className="lg:col-span-4 flex flex-col justify-end space-y-6 pt-4 lg:pt-0">
            {/* Visual Portrait / Halftone Badge */}
            <div className="relative border border-[#C9C5BC] p-2 bg-[#EDEAE2] max-w-[280px] sm:max-w-[320px]">
              <div className="relative overflow-hidden aspect-[4/5] bg-[#141414]">
                <img
                  src="/images/najish-profile.jpeg"
                  alt="Najish Anjum"
                  className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-[#191919]/80 backdrop-blur-sm text-[#F0EDE5] text-[10px] font-mono-tech py-1 px-2 flex justify-between items-center">
                  <span>NA // FIG. 01</span>
                  <span className="text-[#D12626]">ARCHIVAL PHOTO</span>
                </div>
              </div>
            </div>

            {/* Metadata Table */}
            <div className="border-t border-[#C9C5BC] pt-4 space-y-3 font-mono-tech text-xs">
              <div className="flex justify-between items-baseline gap-4">
                <span className="text-[#77736C] uppercase min-w-[70px]">NOW</span>
                <span className="text-[#191919] text-right font-medium">
                  Full Stack Intern · Ajinava Edge / ILM Tech
                </span>
              </div>

              <div className="flex justify-between items-baseline gap-4">
                <span className="text-[#77736C] uppercase min-w-[70px]">STACK</span>
                <span className="text-[#191919] text-right">
                  Next.js · TypeScript · Python · Docker · PyTorch
                </span>
              </div>

              <div className="flex justify-between items-baseline gap-4">
                <span className="text-[#77736C] uppercase min-w-[70px]">STATUS</span>
                <span className="text-[#191919] text-right flex items-center justify-end gap-1.5 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#D12626] animate-pulse"></span>
                  Open to freelance & ship
                </span>
              </div>

              <div className="flex justify-between items-baseline gap-4">
                <span className="text-[#77736C] uppercase min-w-[70px]">AWARDS</span>
                <span className="text-[#191919] text-right font-bold text-[#D12626]">
                  Monad Blitz Winner · NASA Nominee
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlapping Angled Tape Marquee cutting directly across bottom into next chapter */}
      <TapeMarquee angled={true} />
    </section>
  );
};
