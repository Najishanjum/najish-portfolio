interface ReceiptItem {
  id: string;
  year: string;
  tier: "WINNER" | "FINALIST" | "NOMINEE" | "LEAD";
  event: string;
  project: string;
  organization: string;
  summary: string;
  tags: string[];
}

const RECEIPTS: ReceiptItem[] = [
  {
    id: "REC-01",
    year: "2026",
    tier: "WINNER",
    event: "MONAD BLITZ HACKATHON",
    project: "HoldMint (Time-Locked Vault Protocol)",
    organization: "Monad Foundation",
    summary:
      "Awarded 1st Place for building decentralized, disciplined token vault primitives with high-throughput EVM performance and custom timelocks.",
    tags: ["SOLIDITY", "FOUNDRY", "NEXT.JS", "WAGMI"],
  },
  {
    id: "REC-02",
    year: "2024",
    tier: "NOMINEE",
    event: "NASA SPACE APPS CHALLENGE",
    project: "Space HabitatX (Closed-Loop Life Support)",
    organization: "NASA Space Apps Global",
    summary:
      "Selected as Global Nominee among thousands of international teams for mathematical simulation of Martian life-support dynamics.",
    tags: ["THREE.JS", "REACT", "PYTHON", "WEBGL"],
  },
  {
    id: "REC-03",
    year: "2025",
    tier: "FINALIST",
    event: "IIT BOMBAY EUREKA / TECHFEST",
    project: "MediSync AI (Edge Healthcare)",
    organization: "IIT Bombay",
    summary:
      "National Finalist for edge-quantized diagnostic inference models designed for offline primary healthcare centers.",
    tags: ["PYTORCH", "FASTAPI", "EDGE AI"],
  },
  {
    id: "REC-04",
    year: "2025",
    tier: "WINNER",
    event: "TIT SRIJAN NATIONAL HACKATHON",
    project: "CampuSmart (Reel Marketplace)",
    organization: "TIT Group of Institutions",
    summary:
      "Secured 2nd Runner-Up position for creating video-first hyper-local campus commerce platform with zero platform fee.",
    tags: ["REACT", "NODE.JS", "MONGODB"],
  },
  {
    id: "REC-05",
    year: "2025",
    tier: "FINALIST",
    event: "BUILDATHON LNCT",
    project: "FinNext (Multi-Agent Swarm)",
    organization: "LNCT Group",
    summary:
      "Ranked Top 6 Finalist out of 100+ competing software teams for deploying seven specialized financial analysis agents in LangGraph.",
    tags: ["LANGGRAPH", "PYTHON", "OPENAI"],
  },
  {
    id: "REC-06",
    year: "2026",
    tier: "LEAD",
    event: "DEVCON 8 INDIA",
    project: "Volunteer Operations & Hacker Onboarding",
    organization: "Ethereum Foundation Community",
    summary:
      "Recognized for volunteer leadership, stage operations, and supporting 150+ hackathon builders at India's flagship Ethereum gathering.",
    tags: ["WEB3", "COMMUNITY LEADERSHIP", "ETHEREUM"],
  },
];

export const Chapter06Receipts = () => {
  return (
    <section id="chapter-06" className="relative py-20 md:py-28 border-b border-[#C9C5BC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Chapter Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[#C9C5BC] text-xs font-mono-tech text-[#77736C]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D12626]"></span>
            <span className="font-mincho text-[#D12626] font-semibold">第六章</span>
            <span>// CHAPTER 06 — THE RECEIPTS</span>
          </div>
          <span>PROOF OF WORK // AUDITED MILESTONES</span>
        </div>

        {/* Title */}
        <div className="pt-10 pb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="text-xs font-mono-tech text-[#D12626] uppercase tracking-widest font-bold">
              VERIFIABLE COMPETITIVE RECORD
            </div>
            <h2 className="font-anton text-5xl sm:text-6xl md:text-7xl text-[#191919] uppercase leading-none mt-2">
              THE RECEIPTS
            </h2>
          </div>
          <p className="font-serif-editorial text-xl sm:text-2xl text-[#77736C] italic max-w-md">
            "Proof over promises. Hackathons, awards, and technical milestones backed by real results."
          </p>
        </div>

        {/* Archival Ledger Table */}
        <div className="border-t-2 border-[#191919] border-x border-b divide-y divide-[#C9C5BC] bg-[#EDEAE2]">
          {RECEIPTS.map((rec) => {
            const isWinner = rec.tier === "WINNER";
            return (
              <div
                key={rec.id}
                className="p-5 sm:p-6 transition-colors hover:bg-[#F0EDE5] grid grid-cols-1 lg:grid-cols-12 gap-4 items-center group"
              >
                {/* Column 1: ID, Year & Tier Badge */}
                <div className="lg:col-span-3 flex items-center gap-3">
                  <span className="font-mono-tech text-xs text-[#77736C]">{rec.id}</span>
                  <span
                    className={`px-2.5 py-1 text-[10px] font-mono-tech font-bold uppercase tracking-wider ${
                      isWinner
                        ? "bg-[#D12626] text-[#F0EDE5]"
                        : "bg-[#191919] text-[#F0EDE5]"
                    }`}
                  >
                    {rec.tier}
                  </span>
                  <span className="font-mono-tech text-xs text-[#191919] font-bold">
                    {rec.year}
                  </span>
                </div>

                {/* Column 2: Event Name & Project */}
                <div className="lg:col-span-4 space-y-0.5">
                  <h3 className="font-anton text-xl sm:text-2xl text-[#191919] uppercase group-hover:text-[#D12626] transition-colors">
                    {rec.event}
                  </h3>
                  <div className="text-xs font-mono-tech text-[#77736C]">
                    PROJECT: <span className="text-[#191919] font-semibold">{rec.project}</span>
                  </div>
                  <div className="text-[11px] font-mono-tech text-[#77736C]">
                    HOST: {rec.organization}
                  </div>
                </div>

                {/* Column 3: Summary Description */}
                <div className="lg:col-span-3 text-xs font-archivo text-[#191919]/90 leading-relaxed">
                  {rec.summary}
                </div>

                {/* Column 4: Tech Badges */}
                <div className="lg:col-span-2 flex flex-wrap gap-1 justify-start lg:justify-end">
                  {rec.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[9px] font-mono-tech bg-[#DCD8D0] text-[#191919] border border-[#C9C5BC]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Ledger Bottom Note */}
        <div className="mt-4 flex flex-wrap items-center justify-between text-[11px] font-mono-tech text-[#77736C]">
          <span>ALL CREDENTIALS AND CITATIONS ARCHIVED FOR PUBLIC RECORD</span>
          <span className="text-[#191919] font-bold">RECORD INTEGRITY: 100%</span>
        </div>
      </div>
    </section>
  );
};
