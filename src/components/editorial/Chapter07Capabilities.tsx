interface Capability {
  num: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  proof: string;
}

const CAPABILITIES: Capability[] = [
  {
    num: "01",
    title: "FULL-STACK WEB SYSTEMS",
    tagline: "From empty git repository to resilient, production-ready applications.",
    description:
      "I engineer complete software solutions where interface speed meets backend reliability. Zero bloated libraries, clean component boundaries, database index tuning, and battle-tested API design.",
    deliverables: [
      "Next.js 15 & React 19 Frontend Architecture",
      "Node.js, Express & FastAPI REST / WebSocket Backends",
      "PostgreSQL & MongoDB Schema Design & Optimizations",
      "Containerization & Automated CI/CD Pipelines (Docker)",
    ],
    proof: "SHIPPED: HOLDMINT · BITEZY · CAMPUSMART · NASTACK",
  },
  {
    num: "02",
    title: "AI & AGENTIC ARCHITECTURES",
    tagline: "Autonomous multi-agent workflows and real-time semantic intelligence.",
    description:
      "Beyond basic API calls. I build deterministic multi-agent graphs, AST code parsers, semantic vector retrievers, and edge quantized inference pipelines that solve complex, multi-step user problems.",
    deliverables: [
      "Multi-Agent Graph Orchestration (LangGraph / LangChain)",
      "High-Accuracy Vector Search & RAG (Pinecone / Chroma)",
      "Local LLM Quantization & Triage (PyTorch / Ollama)",
      "Real-Time Voice & Multi-Modal Streaming (Whisper / WebRTC)",
    ],
    proof: "SHIPPED: REPOSYNC · FINNEXT · MEDISYNC AI · SHOPGENIE",
  },
  {
    num: "03",
    title: "WEB3 & SMART CONTRACTS",
    tagline: "Trustless decentralized protocols, timelocks, and high-throughput on-chain apps.",
    description:
      "Secure smart contract development for EVM and Solana ecosystems. Rigorous unit testing with Foundry, formal security checks, non-custodial asset custody, and intuitive web3 wallet UX.",
    deliverables: [
      "Solidity Smart Contracts & DeFi Vault Primitives",
      "Foundry Testing, Invariant Fuzzing & Gas Optimization",
      "EVM DApp Integration (Wagmi, Viem, Ethers.js)",
      "Solana Anchor Milestone & Escrow Protocols",
    ],
    proof: "SHIPPED: HOLDMINT (MONAD BLITZ WINNER) · SOLANA ESCROW",
  },
];

export const Chapter07Capabilities = () => {
  return (
    <section id="chapter-07" className="relative py-20 md:py-28 border-b border-[#C9C5BC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Chapter Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[#C9C5BC] text-xs font-mono-tech text-[#77736C]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D12626]"></span>
            <span className="font-mincho text-[#D12626] font-semibold">第七章</span>
            <span>// CHAPTER 07 — WHAT I BUILD</span>
          </div>
          <span>SYSTEM CAPABILITIES</span>
        </div>

        {/* Section Heading */}
        <div className="pt-10 pb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="text-xs font-mono-tech text-[#D12626] uppercase tracking-widest font-bold">
              ENGINEERING DISCIPLINES
            </div>
            <h2 className="font-anton text-5xl sm:text-6xl md:text-7xl text-[#191919] uppercase leading-none mt-2">
              WHAT I BUILD
            </h2>
          </div>
          <p className="font-serif-editorial text-xl sm:text-2xl text-[#77736C] italic max-w-md">
            "End-to-end execution. From napkin sketches to high-availability production clusters."
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {CAPABILITIES.map((cap) => (
            <div
              key={cap.num}
              className="border-2 border-[#191919] bg-[#EDEAE2] p-6 sm:p-8 flex flex-col justify-between hover:bg-[#F0EDE5] hover:border-[#D12626] hover:shadow-[6px_6px_0px_0px_#191919] transition-all duration-200 group"
            >
              <div>
                {/* Top Number */}
                <div className="flex items-center justify-between pb-4 border-b border-[#C9C5BC]">
                  <span className="font-anton text-3xl text-[#191919] group-hover:text-[#D12626] transition-colors">
                    {cap.num}
                  </span>
                  <span className="text-[10px] font-mono-tech uppercase text-[#77736C]">
                    DISCIPLINE
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="font-anton text-2xl sm:text-3xl text-[#191919] uppercase mt-4 tracking-tight">
                  {cap.title}
                </h3>
                <p className="font-serif-editorial text-base text-[#D12626] italic mt-1">
                  "{cap.tagline}"
                </p>

                {/* Description */}
                <p className="mt-4 text-xs font-archivo text-[#191919]/90 leading-relaxed">
                  {cap.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="mt-6 pt-4 border-t border-[#C9C5BC] space-y-2">
                  <div className="text-[10px] font-mono-tech uppercase font-bold text-[#77736C]">
                    CORE DELIVERABLES:
                  </div>
                  {cap.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs font-archivo text-[#191919]">
                      <span className="text-[#D12626] font-bold">✦</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Proof Tag */}
              <div className="mt-6 pt-4 border-t border-[#C9C5BC] text-[10px] font-mono-tech text-[#77736C]">
                {cap.proof}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
