export const Chapter04Story = () => {
  return (
    <section id="chapter-04" className="relative py-20 md:py-28 border-b border-[#C9C5BC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Chapter Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[#C9C5BC] text-xs font-mono-tech text-[#77736C]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D12626]"></span>
            <span className="font-mincho text-[#D12626] font-semibold">第四章</span>
            <span>// CHAPTER 04 — THE STORY</span>
          </div>
          <span>ORIGIN & ARCHIVE</span>
        </div>

        {/* Section Title */}
        <div className="pt-10 pb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="text-xs font-mono-tech text-[#D12626] uppercase tracking-widest font-bold">
              ESSAY & TIMELINE
            </div>
            <h2 className="font-anton text-5xl sm:text-6xl md:text-7xl text-[#191919] uppercase leading-none mt-2">
              THE STORY
            </h2>
          </div>
          <p className="font-serif-editorial text-xl sm:text-2xl text-[#77736C] italic max-w-md">
            "I didn't start coding to write syntax — I started because I wanted to see ideas exist in the real world."
          </p>
        </div>

        {/* Editorial Magazine Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Editorial Text (2 Columns on large screens) */}
          <div className="lg:col-span-7 space-y-6 text-[#191919]">
            <p className="font-serif-editorial text-2xl sm:text-3xl text-[#191919] leading-snug">
              It begins with curiosity, and ends with{" "}
              <span className="text-[#D12626] italic font-normal">
                running containers at 3:00 AM before a national demo.
              </span>
            </p>

            <div className="space-y-4 font-archivo text-sm sm:text-base leading-relaxed text-[#191919]/90">
              <p>
                My journey into software engineering wasn't shaped by following passive tutorials. It was shaped by the adrenaline of weekend hackathons, shipping full-stack systems under intense deadlines, and breaking production environments until I understood every layer from kernel sockets to browser paint cycles.
              </p>

              <p>
                From winning the <strong>Monad Blitz Hackathon</strong> with <em>HoldMint</em> to being nominated globally in the <strong>NASA Space Apps Challenge</strong> and competing at <strong>IIT Bombay</strong>, every competition reinforced one conviction: <em>code is cheap; shipping clean, resilient architectures that people actually rely on is what matters.</em>
              </p>

              <p>
                When Ethereum selected India for <strong>Devcon 8</strong>, I stepped up as Volunteer Lead. Organizing builder workshops, helping hundreds of hackers navigate testnets, and orchestrating community operations taught me that true leadership in engineering is about serving the team, removing friction, and maintaining calm under chaos.
              </p>
            </div>

            {/* Pull Quote Box */}
            <div className="p-6 bg-[#EDEAE2] border-l-4 border-[#D12626] my-6">
              <blockquote className="font-serif-editorial text-xl sm:text-2xl text-[#191919] italic leading-tight">
                "True engineering isn't about the tools you memorize — it's about having the conviction to ship when it's midnight and the demo is in five hours."
              </blockquote>
              <div className="mt-3 text-xs font-mono-tech text-[#77736C] uppercase">
                — NAJISH ANJUM, PERSONAL LOG
              </div>
            </div>

            {/* Quick Milestones Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-[#C9C5BC]">
              <div className="p-3 bg-[#EDEAE2] border border-[#C9C5BC]">
                <div className="font-anton text-2xl text-[#D12626]">15+</div>
                <div className="text-[11px] font-mono-tech text-[#77736C] uppercase mt-1">
                  PROJECTS SHIPPED
                </div>
              </div>
              <div className="p-3 bg-[#EDEAE2] border border-[#C9C5BC]">
                <div className="font-anton text-2xl text-[#191919]">07</div>
                <div className="text-[11px] font-mono-tech text-[#77736C] uppercase mt-1">
                  HACKATHON WINS & FINALS
                </div>
              </div>
              <div className="p-3 bg-[#EDEAE2] border border-[#C9C5BC] col-span-2 sm:col-span-1">
                <div className="font-anton text-2xl text-[#191919]">2,000+</div>
                <div className="text-[11px] font-mono-tech text-[#77736C] uppercase mt-1">
                  BUILDERS SERVED
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Photograph Frames (Devcon 8 India & Event captures) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Devcon 8 Photo Frame */}
            <div className="border-2 border-[#191919] bg-[#EDEAE2] p-2 shadow-[6px_6px_0px_0px_#191919]">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#141414]">
                <img
                  src="/images/devcon8-india.jpg"
                  alt="Najish Anjum at Devcon 8 India"
                  className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute top-2 right-2 px-2 py-1 bg-[#D12626] text-[#F0EDE5] font-mono-tech text-[10px] font-bold">
                  DEVCON VIII INDIA
                </div>
              </div>
              <div className="p-3 text-xs font-mono-tech text-[#191919] space-y-1">
                <div className="font-bold flex justify-between">
                  <span>FIG 02. // DEVCON 8 VOLUNTEER LEAD</span>
                  <span className="text-[#D12626]">2026</span>
                </div>
                <p className="text-[11px] text-[#77736C] font-archivo">
                  On-ground builder operations, Ethereum technical tracks, and hacker onboarding at Devcon 8 India.
                </p>
              </div>
            </div>

            {/* Second Supporting Card */}
            <div className="border border-[#C9C5BC] p-4 bg-[#EDEAE2] space-y-3 font-mono-tech text-xs">
              <div className="text-[11px] text-[#D12626] font-bold uppercase tracking-wider">
                COMMUNITY & MENTORSHIP
              </div>
              <p className="font-archivo text-[#191919] text-xs leading-relaxed">
                As a Core Team Lead at <strong>Team ILM Tech</strong>, I run workshops on AI agent architectures, smart contract security, and full-stack engineering, guiding over 200+ active student builders.
              </p>
              <div className="pt-2 border-t border-[#C9C5BC] flex justify-between items-center text-[10px] text-[#77736C]">
                <span>LOCATION: BHOPAL & NATIONAL CIRCUIT</span>
                <span className="font-bold text-[#191919]">ACTIVE LEAD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
