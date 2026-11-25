import { useState } from "react";

interface StackCategory {
  id: string;
  num: string;
  name: string;
  label: string;
  subtitle: string;
  tools: string[];
  usedIn: string[];
}

const STACK_CATEGORIES: StackCategory[] = [
  {
    id: "languages",
    num: "00",
    name: "LANGUAGES",
    label: "WHAT I WRITE IN",
    subtitle: "Core syntax, paradigms, and compilation targets.",
    tools: ["TypeScript", "Python", "C++", "JavaScript (ESNext)", "Solidity", "Go", "SQL"],
    usedIn: ["EVERY REPOSITORY", "HOLDMINT", "REPOSYNC", "NASTACK", "DEVCON 8"],
  },
  {
    id: "interface",
    num: "01",
    name: "INTERFACE",
    label: "WHAT PEOPLE TOUCH",
    subtitle: "Fluid layouts, editorial typography, micro-interactions, and visual performance.",
    tools: ["React 19", "Next.js 15", "Tailwind CSS", "Framer Motion", "Three.js", "HTML5", "CSS3 / Canvas"],
    usedIn: ["PORTFOLIO VOL. 01", "HOLDMINT", "REPOSYNC", "SPACE HABITATX", "CAMPUSMART"],
  },
  {
    id: "api",
    num: "02",
    name: "API & BACKEND",
    label: "WHAT ANSWERS",
    subtitle: "Scalable endpoints, streaming sockets, and reliable serverless infrastructure.",
    tools: ["Node.js", "Express.js", "FastAPI", "Hono.js", "Django", "REST", "WebRTC", "Socket.io"],
    usedIn: ["HOLDMINT", "REPOSYNC", "BITEZY", "FINNEXT", "CI/CD RUNNER"],
  },
  {
    id: "data",
    num: "03",
    name: "DATA & PERSISTENCE",
    label: "WHERE IT LIVES",
    subtitle: "Relational tables, vector embeddings, memory caching, and distributed stores.",
    tools: ["PostgreSQL", "MongoDB", "Supabase", "Redis", "MySQL", "Pinecone Vector DB", "Prisma"],
    usedIn: ["REPOSYNC", "CAMPUSMART", "BITEZY", "HOLDMINT VAULTS"],
  },
  {
    id: "ai",
    num: "04",
    name: "AI & AGENTIC",
    label: "WHAT REASONS",
    subtitle: "Multi-agent workflows, neural embeddings, model fine-tuning, and edge inference.",
    tools: ["PyTorch", "TensorFlow", "Hugging Face", "LangChain", "LangGraph", "Ollama", "Whisper"],
    usedIn: ["REPOSYNC", "FINNEXT", "SHOPGENIE", "MEDISYNC AI"],
  },
  {
    id: "web3",
    num: "05",
    name: "WEB3 & PROTOCOLS",
    label: "WHAT IS TRUSTLESS",
    subtitle: "Smart contract vaults, EVM bytecode, cryptographic signatures, and token mechanics.",
    tools: ["Solidity", "Foundry", "Ethers.js", "Wagmi", "Viem", "Solana Anchor", "IPFS"],
    usedIn: ["HOLDMINT (MONAD BLITZ)", "SOLANA ESCROW", "DEVCON 8 PORTAL"],
  },
  {
    id: "ship",
    num: "06",
    name: "SHIP & DEVOPS",
    label: "HOW IT REACHES USERS",
    subtitle: "Containerization, automated test runners, cloud distribution, and monitoring.",
    tools: ["Docker", "Git", "GitHub Actions", "AWS (EC2/S3)", "Linux / Bash", "Vercel", "Postman"],
    usedIn: ["ALL PRODUCTION DEPLOYS", "NASTACK BOILERPLATE", "CI/CD RUNNER"],
  },
];

export const Chapter03Stack = () => {
  const [activeTab, setActiveTab] = useState<string>("01");

  const current =
    STACK_CATEGORIES.find((cat) => cat.num === activeTab) || STACK_CATEGORIES[1];

  return (
    <section
      id="chapter-03"
      className="relative bg-[#141414] text-[#F0EDE5] py-20 md:py-28 border-b border-[#2E2E2E] overflow-hidden"
    >
      {/* Editorial Chapter Badge Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[#2E2E2E] text-xs font-mono-tech text-[#9E9A92]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D12626]"></span>
            <span className="font-mincho text-[#D12626] font-semibold">第三章</span>
            <span>// CHAPTER 03 — THE STACK</span>
          </div>
          <span className="text-[#F0EDE5]">03 / 08 — THE STACK</span>
        </div>

        {/* Category Accordion / Pill Tabs (Screenshot 3 Replica) */}
        <div className="pt-8 border-b border-[#2E2E2E] overflow-x-auto pb-4 scrollbar-none">
          <div className="flex items-center gap-2 min-w-max">
            {STACK_CATEGORIES.map((cat) => {
              const isActive = activeTab === cat.num;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.num)}
                  className={`group flex items-center gap-2 px-3.5 py-2 text-xs font-mono-tech uppercase transition-all duration-150 border ${
                    isActive
                      ? "bg-[#1F1F1F] text-[#F0EDE5] border-[#F0EDE5]/40"
                      : "bg-[#141414] text-[#9E9A92] border-[#2E2E2E] hover:border-[#9E9A92]/40 hover:text-[#F0EDE5]"
                  }`}
                >
                  <span
                    className={`px-1.5 py-0.5 text-[10px] font-bold ${
                      isActive ? "bg-[#D12626] text-[#F0EDE5]" : "bg-[#2E2E2E] text-[#9E9A92]"
                    }`}
                  >
                    {cat.num}
                  </span>
                  <span className="font-semibold">{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Category Display (Screenshot 3 Visual Hierarchy) */}
        <div className="py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Dominant Anton Section Title */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono-tech text-[#D12626] font-bold uppercase tracking-widest">
                <span>{current.num} // {current.label}</span>
              </div>

              <h3 className="font-anton text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight uppercase leading-none text-[#F0EDE5]">
                {current.name}
              </h3>

              <p className="font-serif-editorial text-2xl sm:text-3xl text-[#9E9A92] italic pt-2">
                "{current.subtitle}"
              </p>
            </div>

            {/* Right Tools List & Used In Badge Strip */}
            <div className="lg:col-span-6 space-y-8 lg:pt-6">
              {/* Tools Pill Matrix */}
              <div>
                <div className="text-xs font-mono-tech uppercase tracking-wider text-[#9E9A92] mb-3">
                  TECHNOLOGIES & FRAMEWORKS
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {current.tools.map((tool) => (
                    <div
                      key={tool}
                      className="px-4 py-2 bg-[#1F1F1F] border border-[#2E2E2E] text-sm font-mono-tech text-[#F0EDE5] hover:border-[#D12626] hover:bg-[#191919] transition-colors"
                    >
                      {tool}
                    </div>
                  ))}
                </div>
              </div>

              {/* "USED IN" Row (Screenshot 3 Replica) */}
              <div className="pt-6 border-t border-[#2E2E2E] space-y-3">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-[#D12626] text-[#F0EDE5] text-[10px] font-mono-tech font-bold uppercase">
                    USED IN
                  </span>
                  <span className="text-xs font-mono-tech text-[#9E9A92]">
                    PRODUCTION & PRIZE-WINNING CODEBASES
                  </span>
                </div>

                <div className="text-xs font-mono-tech text-[#F0EDE5] tracking-wider uppercase leading-relaxed">
                  {current.usedIn.join(" · ")}
                </div>
              </div>

              {/* Philosophy Quote */}
              <div className="p-4 bg-[#1F1F1F]/60 border-l-2 border-[#D12626] text-xs font-archivo text-[#9E9A92] leading-relaxed">
                "No tech stack loyalty for the sake of dogma. I choose tools based on latency, developer ergonomics, cryptographic guarantees, and the speed at which it solves the user's actual pain."
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
