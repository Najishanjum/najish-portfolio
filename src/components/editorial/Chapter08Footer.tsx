import { useState } from "react";

export const Chapter08Footer = () => {
  const [copied, setCopied] = useState(false);
  const email = "najishanjum01@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="chapter-08" className="relative bg-[#141414] text-[#F0EDE5] pt-20 md:pt-28 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Chapter Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[#2E2E2E] text-xs font-mono-tech text-[#9E9A92]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D12626]"></span>
            <span className="font-mincho text-[#D12626] font-semibold">第八章</span>
            <span>// CHAPTER 08 — NEXT CHAPTER</span>
          </div>
          <span>COLOPHON & TRANSMISSION</span>
        </div>

        {/* Massive Call to Action Title */}
        <div className="pt-12 pb-16">
          <p className="text-xs font-mono-tech text-[#D12626] uppercase tracking-widest font-bold">
            READY TO COLLABORATE?
          </p>
          <h2 className="font-anton text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tight leading-[0.88] mt-3">
            LET'S BUILD <br />
            <span className="text-[#D12626] hover:text-[#F0EDE5] transition-colors">
              SOMETHING REAL.
            </span>
          </h2>

          <p className="font-serif-editorial text-2xl sm:text-3xl text-[#9E9A92] italic mt-6 max-w-2xl">
            "Got an ambitious product, a high-stakes hackathon, or a team that needs an engineer who ships? My inbox is always open."
          </p>
        </div>

        {/* Contact Actions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-16 border-b border-[#2E2E2E]">
          {/* Email Copy Card */}
          <div className="lg:col-span-6 bg-[#1F1F1F] border border-[#2E2E2E] p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono-tech text-[#9E9A92] uppercase">
                DIRECT TRANSMISSION
              </span>
              <div className="font-mono-tech text-lg sm:text-2xl text-[#F0EDE5] break-all">
                {email}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={copyEmail}
                className="px-4 py-2 bg-[#D12626] text-[#F0EDE5] text-xs font-mono-tech uppercase font-bold hover:bg-[#F0EDE5] hover:text-[#191919] transition-colors"
              >
                {copied ? "COPIED TO CLIPBOARD ✓" : "COPY EMAIL ADDRESS"}
              </button>

              <a
                href={`mailto:${email}`}
                className="px-4 py-2 border border-[#2E2E2E] text-[#F0EDE5] text-xs font-mono-tech uppercase hover:border-[#F0EDE5] transition-colors"
              >
                OPEN MAIL CLIENT ↗
              </a>
            </div>
          </div>

          {/* Social Network Directory */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <a
              href="https://github.com/Najishanjum"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 bg-[#1F1F1F] border border-[#2E2E2E] hover:border-[#D12626] hover:bg-[#252525] transition-colors group flex flex-col justify-between"
            >
              <div className="text-[10px] font-mono-tech text-[#9E9A92] uppercase">CODE REPOSITORY</div>
              <div className="font-anton text-xl sm:text-2xl text-[#F0EDE5] group-hover:text-[#D12626] transition-colors mt-2">
                GITHUB ↗
              </div>
              <div className="text-[11px] font-mono-tech text-[#9E9A92] mt-1">@Najishanjum</div>
            </a>

            <a
              href="https://linkedin.com/in/najish-anjum"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 bg-[#1F1F1F] border border-[#2E2E2E] hover:border-[#D12626] hover:bg-[#252525] transition-colors group flex flex-col justify-between"
            >
              <div className="text-[10px] font-mono-tech text-[#9E9A92] uppercase">PROFESSIONAL</div>
              <div className="font-anton text-xl sm:text-2xl text-[#F0EDE5] group-hover:text-[#D12626] transition-colors mt-2">
                LINKEDIN ↗
              </div>
              <div className="text-[11px] font-mono-tech text-[#9E9A92] mt-1">/in/najish-anjum</div>
            </a>

            <a
              href="https://x.com/Najish_anjum"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 bg-[#1F1F1F] border border-[#2E2E2E] hover:border-[#D12626] hover:bg-[#252525] transition-colors group flex flex-col justify-between"
            >
              <div className="text-[10px] font-mono-tech text-[#9E9A92] uppercase">THOUGHTS & SHIP</div>
              <div className="font-anton text-xl sm:text-2xl text-[#F0EDE5] group-hover:text-[#D12626] transition-colors mt-2">
                X / TWITTER ↗
              </div>
              <div className="text-[11px] font-mono-tech text-[#9E9A92] mt-1">@Najish_anjum</div>
            </a>

            <a
              href="/Najish_Anjum_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 bg-[#1F1F1F] border border-[#2E2E2E] hover:border-[#D12626] hover:bg-[#252525] transition-colors group flex flex-col justify-between"
            >
              <div className="text-[10px] font-mono-tech text-[#9E9A92] uppercase">CREDENTIALS</div>
              <div className="font-anton text-xl sm:text-2xl text-[#D12626] group-hover:text-[#F0EDE5] transition-colors mt-2">
                RESUME PDF ↗
              </div>
              <div className="text-[11px] font-mono-tech text-[#9E9A92] mt-1">UPDATED 2026</div>
            </a>
          </div>
        </div>

        {/* Editorial Colophon / Metadata Footer */}
        <div className="pt-12 grid grid-cols-1 md:grid-cols-12 gap-8 text-xs font-mono-tech text-[#9E9A92]">
          <div className="md:col-span-5 space-y-2">
            <div className="text-[#F0EDE5] font-bold">NAJISH ANJUM // VOL. 01</div>
            <p className="text-[11px] text-[#9E9A92] leading-relaxed">
              An archival developer portfolio designed with editorial conviction. Built with Next.js, React, Tailwind CSS, and zero template fluff.
            </p>
          </div>

          <div className="md:col-span-4 space-y-1 text-[11px]">
            <div className="text-[#F0EDE5] font-bold">TYPOGRAPHY SYSTEM</div>
            <div>Anton · Display Headings</div>
            <div>Archivo · Body & Editorial Content</div>
            <div>Instrument Serif · Italic Prose</div>
            <div>JetBrains Mono · Technical Ledger</div>
            <div>Shippori Mincho · Japanese Chapter Badges</div>
          </div>

          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end space-y-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#2E2E2E] text-[#F0EDE5] hover:border-[#D12626] hover:text-[#D12626] transition-colors text-xs font-bold"
            >
              <span>BACK TO TOP</span>
              <span>↑</span>
            </button>

            <div className="text-[10px] text-left md:text-right text-[#9E9A92]">
              <div>COORDINATES: BHOPAL, INDIA</div>
              <div>LAT 23.2599° N · LONG 77.4126° E</div>
              <div className="text-[#F0EDE5] mt-1">© 2026 NAJISH ANJUM</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
