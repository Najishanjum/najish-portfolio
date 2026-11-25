interface ShippedItem {
  badge: string;
  title: string;
  description: string;
}

interface ExperienceItem {
  num: string;
  period: string;
  isCurrent?: boolean;
  role: string;
  company: string;
  type: string;
  logoText: string;
  shipped: ShippedItem[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    num: "01",
    period: "SEP 2026 — NOW",
    isCurrent: true,
    role: "FULL STACK DEVELOPER INTERN",
    company: "AJINAVA EDGE / MY DUKAN",
    type: "INTERNSHIP",
    logoText: "AD",
    shipped: [
      {
        badge: "SHIPPED 01",
        title: "APP STORE",
        description:
          "Re-architected the core web marketplace and product discovery flow with responsive caching, cutting page load time by 42%.",
      },
      {
        badge: "SHIPPED 02",
        title: "PAYMENTS",
        description:
          "Integrated automated payment gateway webhooks, failure reconciliation, and invoice generation pipelines.",
      },
      {
        badge: "SHIPPED 03",
        title: "OTP LOGIN",
        description:
          "Engineered frictionless mobile OTP auth with rate-limiting, SMS provider failover, and Redis session management.",
      },
    ],
  },
  {
    num: "02",
    period: "2024 — PRESENT",
    isCurrent: true,
    role: "CORE TEAM & TECH LEAD",
    company: "TEAM ILM TECH",
    type: "COMMUNITY & ENGINEERING",
    logoText: "ILM",
    shipped: [
      {
        badge: "SHIPPED 01",
        title: "COMMUNITY HUB",
        description:
          "Built and deployed central developer portal and event ticketing platform serving 1,500+ active student builders.",
      },
      {
        badge: "SHIPPED 02",
        title: "HACK PLATFORM",
        description:
          "Constructed project submission engine with encrypted judge scoring rubrics and real-time public leaderboard.",
      },
      {
        badge: "SHIPPED 03",
        title: "DEV WORKSHOPS",
        description:
          "Mentored 200+ engineers across full-stack TypeScript, Docker containerization, and smart contract fundamentals.",
      },
    ],
  },
  {
    num: "03",
    period: "OCT 2026 — NOV 2026",
    isCurrent: false,
    role: "VOLUNTEER LEAD",
    company: "DEVCON 8 INDIA",
    type: "ETHEREUM ECOSYSTEM",
    logoText: "DEV",
    shipped: [
      {
        badge: "SHIPPED 01",
        title: "BUILDER OPS",
        description:
          "Led volunteer operations across key technical tracks, speaker coordination, and stage logistics for 2,000+ attendees.",
      },
      {
        badge: "SHIPPED 02",
        title: "HACKER SUPPORT",
        description:
          "Onboarded 150+ hackathon participants with EVM RPC configurations, testnet faucet allocations, and mentor matchmaking.",
      },
      {
        badge: "SHIPPED 03",
        title: "DELEGATION",
        description:
          "Organized regional builder cohorts, community demos, and technical roundtables highlighting on-chain projects in India.",
      },
    ],
  },
];

export const Chapter05Experience = () => {
  return (
    <section
      id="chapter-05"
      className="relative py-20 md:py-28 border-b border-[#C9C5BC] overflow-hidden"
    >
      {/* Background Giant 05 Outline Watermark (Screenshot 2 Replica) */}
      <div className="absolute right-6 sm:right-16 top-10 font-anton text-[24vw] leading-none select-none pointer-events-none text-transparent stroke-text z-0 opacity-20">
        05
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Chapter Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[#C9C5BC] text-xs font-mono-tech text-[#77736C]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D12626]"></span>
            <span className="font-mincho text-[#D12626] font-semibold">第五章</span>
            <span>// CHAPTER 05 — EXPERIENCE</span>
          </div>
          <span>ON-THE-RECORD EMPLOYMENT</span>
        </div>

        {/* Section Headline: ON THE JOB (Screenshot 2 Replica) */}
        <div className="pt-10 pb-12 border-b-2 border-[#191919]">
          <h2 className="font-anton text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight uppercase leading-none">
            <span className="text-[#191919]">ON THE </span>
            <span className="text-[#D12626]">JOB</span>
          </h2>
        </div>

        {/* Numbered Experience Entries */}
        <div className="divide-y-2 divide-[#191919]">
          {EXPERIENCES.map((exp) => (
            <div key={exp.num} className="py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Number & Period */}
              <div className="lg:col-span-3 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono-tech text-[#77736C]">
                  <span>{exp.period}</span>
                  {exp.isCurrent && (
                    <span className="px-1.5 py-0.5 bg-[#D12626] text-[#F0EDE5] font-bold text-[9px] uppercase">
                      NOW
                    </span>
                  )}
                </div>

                {/* Giant Number Outline */}
                <div className="font-anton text-6xl sm:text-7xl md:text-8xl text-[#191919]/30 leading-none">
                  {exp.num}
                </div>
              </div>

              {/* Right Column: Role Title, Company Tag, and Shipped Receipt Boxes */}
              <div className="lg:col-span-9 space-y-6">
                <div>
                  <h3 className="font-anton text-3xl sm:text-4xl md:text-5xl text-[#191919] uppercase tracking-tight">
                    {exp.role}
                  </h3>

                  <div className="mt-2 flex items-center gap-2.5 text-xs font-mono-tech text-[#77736C]">
                    <span className="w-5 h-5 bg-[#191919] text-[#F0EDE5] font-bold flex items-center justify-center text-[10px]">
                      {exp.logoText}
                    </span>
                    <span className="text-[#191919] font-bold">{exp.company}</span>
                    <span>·</span>
                    <span className="uppercase">{exp.type}</span>
                  </div>
                </div>

                {/* 3 Horizontal Receipt Boxes (Screenshot 2 Replica) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                  {exp.shipped.map((item, sIdx) => (
                    <div
                      key={sIdx}
                      className="border-2 border-[#191919] bg-[#EDEAE2] p-4 flex flex-col justify-between hover:bg-[#F0EDE5] hover:border-[#D12626] transition-colors"
                    >
                      <div>
                        {/* Shipped Badge */}
                        <div className="inline-block px-2 py-0.5 bg-[#191919] text-[#F0EDE5] text-[10px] font-mono-tech font-bold uppercase tracking-wider mb-2">
                          {item.badge}
                        </div>

                        {/* Title */}
                        <h4 className="font-anton text-xl sm:text-2xl text-[#191919] uppercase">
                          {item.title}
                        </h4>

                        {/* Description */}
                        <p className="mt-2 text-xs font-archivo text-[#191919]/90 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-[#C9C5BC] flex justify-between items-center text-[10px] font-mono-tech text-[#77736C]">
                        <span>RECEIPT CODE #{exp.num}0{sIdx + 1}</span>
                        <span className="text-[#D12626] font-bold">VERIFIED</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
