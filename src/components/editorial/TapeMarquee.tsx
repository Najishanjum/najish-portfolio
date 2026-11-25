interface TapeMarqueeProps {
  angled?: boolean;
}

export const TapeMarquee = ({ angled = true }: TapeMarqueeProps) => {
  const tapeItems = [
    "OPEN TO FREELANCE",
    "FULL STACK",
    "NO FLUFF",
    "REAL SHIP",
    "AI/ML DEVELOPER",
    "WEB3 BUILDER",
    "MONAD BLITZ WINNER",
    "NASA SPACE APPS NOMINEE",
    "NEXT.JS 15",
    "TYPESCRIPT",
    "PYTHON",
    "PYTORCH",
    "DOCKER",
    "SOLIDITY",
    "FASTAPI",
    "LANGCHAIN",
  ];

  return (
    <div
      className={`relative w-full overflow-hidden select-none pointer-events-none z-20 ${
        angled ? "my-14 -mx-4 md:-mx-8 scale-105" : "my-8 border-y border-[#C9C5BC]"
      }`}
    >
      {/* Top Tape — Dark Ink ribbon angling slightly down */}
      <div
        className={`w-full overflow-hidden bg-[#141414] text-[#F0EDE5] py-2.5 border-y border-[#2E2E2E] shadow-md transition-transform ${
          angled ? "-rotate-1 md:-rotate-2 translate-y-2" : ""
        }`}
      >
        <div className="animate-tape-left flex items-center whitespace-nowrap">
          {[...tapeItems, ...tapeItems].map((item, idx) => (
            <div key={idx} className="flex items-center">
              <span className="font-anton text-lg md:text-xl tracking-wider px-4">
                {item}
              </span>
              <span className="text-[#D12626] text-xs">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Tape — Paper ribbon angling slightly up overlapping the top */}
      <div
        className={`w-full overflow-hidden bg-[#EDEAE2] text-[#191919] py-2.5 border-y-2 border-[#191919] shadow-lg transition-transform ${
          angled ? "rotate-1 md:rotate-1.5 -translate-y-2" : ""
        }`}
      >
        <div className="animate-tape-right flex items-center whitespace-nowrap">
          {[...tapeItems, ...tapeItems].reverse().map((item, idx) => (
            <div key={idx} className="flex items-center">
              <span className="font-anton text-lg md:text-xl tracking-wider px-4">
                {item}
              </span>
              <span className="text-[#D12626] text-xs">✦</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
