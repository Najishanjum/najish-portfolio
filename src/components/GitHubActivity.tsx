import React, { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, RotateCw, ExternalLink, Flame, Trophy, AlertCircle, Code } from "lucide-react";
import { useGitHubContributions, ContributionDay } from "@/hooks/useGitHubContributions";

const GITHUB_USERNAME = "Najishanjum";
const GITHUB_PROFILE_URL = `https://github.com/${GITHUB_USERNAME}`;

const WEEKDAYS = [
  { label: "", index: 0 },
  { label: "Mon", index: 1 },
  { label: "", index: 2 },
  { label: "Wed", index: 3 },
  { label: "", index: 4 },
  { label: "Fri", index: 5 },
  { label: "", index: 6 },
];

export const GitHubActivity: React.FC = () => {
  const { data, loading, error, sync } = useGitHubContributions();
  const [activeHover, setActiveHover] = useState<{ day: ContributionDay; x: number; y: number } | null>(null);

  // GitHub Dark Mode Official Contribution Colors: White & Green
  const getLevelStyle = (level: number) => {
    switch (level) {
      case 1:
        return "bg-[#0e4429] border-[#0e4429] hover:border-[#26a641] hover:scale-125";
      case 2:
        return "bg-[#006d32] border-[#006d32] hover:border-[#39d353] hover:scale-125";
      case 3:
        return "bg-[#26a641] border-[#26a641] hover:border-white hover:scale-125 shadow-[0_0_6px_rgba(38,166,65,0.4)]";
      case 4:
        return "bg-[#39d353] border-[#39d353] hover:border-white hover:scale-125 shadow-[0_0_10px_rgba(57,211,83,0.8)]";
      default:
        return "bg-[#161b22] border-[#21262d] hover:border-[#8b949e]/50 hover:bg-[#1c2128]";
    }
  };

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <section id="github-matrix" className="py-16 px-4 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#26a641]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Card Container with GitHub Dark Mode Theme (#0d1117) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="p-6 md:p-8 rounded-2xl bg-[#0d1117] border border-[#30363d] shadow-2xl hover:border-[#39d353]/40 transition-all duration-500 text-[#c9d1d9]"
        >
          {/* HEADER */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#21262d]">
            {/* Left: Title + Contributions Counter */}
            <div className="flex items-center gap-3 flex-wrap">
              <div className="w-10 h-10 rounded-xl bg-[#161b22] border border-[#30363d] flex items-center justify-center text-[#39d353] shadow-[0_0_12px_rgba(57,211,83,0.15)]">
                <Terminal className="w-5 h-5 text-[#39d353]" />
              </div>
              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white font-sans">
                    {data ? `${data.totalCommits.toLocaleString()} contributions in the last year` : "GitHub Contributions"}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-[#26a641]/20 border border-[#26a641]/40 text-[#39d353]">
                    MATRIX
                  </span>
                </div>
                {data?.lastSync && (
                  <span className="text-[11px] font-mono text-[#8b949e]">
                    LAST SYNC: {data.lastSync}
                  </span>
                )}
              </div>
            </div>

            {/* Right: User Handle + Sync Button */}
            <div className="flex items-center gap-3">
              <a
                href={GITHUB_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#161b22] border border-[#30363d] text-xs font-mono text-[#8b949e] hover:text-white hover:border-[#39d353] transition-all group"
              >
                <span>@{GITHUB_USERNAME}</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:text-[#39d353] transition-colors" />
              </a>

              <button
                onClick={sync}
                disabled={loading}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#26a641]/10 hover:bg-[#26a641]/20 border border-[#26a641]/40 text-[#39d353] text-xs font-mono font-semibold transition-all disabled:opacity-50 active:scale-95 shadow-[0_0_10px_rgba(57,211,83,0.1)]"
                title="Sync GitHub Data"
              >
                <RotateCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
                <span>{loading ? "SYNCING..." : "SYNC"}</span>
              </button>
            </div>
          </div>

          {/* CONTENT / MATRIX BODY */}
          {error ? (
            <div className="py-12 text-center space-y-3">
              <AlertCircle className="w-8 h-8 text-rose-500 mx-auto" />
              <p className="font-mono text-sm text-rose-400">{error}</p>
              <button
                onClick={sync}
                className="px-4 py-1.5 text-xs font-mono rounded-md bg-[#161b22] border border-[#30363d] hover:border-[#39d353] text-white"
              >
                RETRY SYNC
              </button>
            </div>
          ) : loading && !data ? (
            <div className="py-16 text-center space-y-4">
              <RotateCw className="w-8 h-8 text-[#39d353] animate-spin mx-auto" />
              <p className="font-mono text-xs text-[#8b949e] tracking-widest animate-pulse">
                FETCHING REAL CONTRIBUTION DATA FROM GITHUB...
              </p>
            </div>
          ) : data ? (
            <div>
              {/* Matrix Scroll Container for Mobile Responsiveness */}
              <div className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-[#30363d] scrollbar-track-transparent">
                <div className="min-w-[720px]">
                  {/* Month Labels Header */}
                  <div className="flex text-[11px] font-sans text-[#8b949e] mb-2 pl-8">
                    {data.months.map((m, idx) => (
                      <div
                        key={`${m.name}-${idx}`}
                        style={{
                          width: `${(100 / (data.weeks.length || 52)) * 4.2}%`,
                          minWidth: "42px",
                        }}
                        className="text-left font-medium"
                      >
                        {m.name}
                      </div>
                    ))}
                  </div>

                  {/* Grid Layout: Weekday labels on left + 52 Columns */}
                  <div className="flex gap-2">
                    {/* Weekday Labels Column */}
                    <div className="flex flex-col gap-1 pr-1 justify-between text-[10px] font-sans text-[#8b949e] py-0.5">
                      {WEEKDAYS.map((w, i) => (
                        <div key={i} className="h-3 flex items-center">
                          {w.label}
                        </div>
                      ))}
                    </div>

                    {/* Heatmap Columns (52 Weeks x 7 Days) */}
                    <div className="flex gap-1 flex-1">
                      {data.weeks.map((week, wIdx) => (
                        <div key={wIdx} className="flex flex-col gap-1">
                          {week.map((day, dIdx) => (
                            <div
                              key={`${wIdx}-${dIdx}`}
                              onMouseEnter={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                setActiveHover({
                                  day,
                                  x: rect.left + rect.width / 2,
                                  y: rect.top,
                                });
                              }}
                              onMouseLeave={() => setActiveHover(null)}
                              className={`w-3 h-3 rounded-[2px] border transition-all duration-150 cursor-pointer ${getLevelStyle(
                                day.level
                              )}`}
                            />
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Tooltip Render */}
              {activeHover && (
                <div
                  className="fixed z-50 pointer-events-none transform -translate-x-1/2 -translate-y-full mb-2 px-3 py-1.5 rounded-md bg-[#161b22] border border-[#30363d] backdrop-blur-md text-xs font-sans text-white shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                  style={{
                    left: `${activeHover.x}px`,
                    top: `${activeHover.y - 6}px`,
                  }}
                >
                  <span className="text-[#39d353] font-bold">
                    {activeHover.day.count} contribution{activeHover.day.count !== 1 ? "s" : ""}
                  </span>{" "}
                  on {formatDate(activeHover.day.date)}
                </div>
              )}

              {/* FOOTER ANALYTICS & LEGEND */}
              <div className="mt-6 pt-6 border-t border-[#21262d] flex flex-col md:flex-row items-center justify-between gap-6">
                {/* 3 Key Stats: Streak, Longest, GitHub ID */}
                <div className="grid grid-cols-3 gap-4 md:gap-8 w-full md:w-auto">
                  {/* Current Streak */}
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#26a641]/10 border border-[#26a641]/30 flex items-center justify-center text-[#39d353]">
                      <Flame className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-[#8b949e] uppercase tracking-wider">
                        STREAK
                      </div>
                      <div className="text-sm md:text-base font-mono font-bold text-white">
                        {data.currentStreak} <span className="text-xs text-[#8b949e] font-normal">DAYS</span>
                      </div>
                    </div>
                  </div>

                  {/* Longest Streak */}
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                      <Trophy className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-[#8b949e] uppercase tracking-wider">
                        LONGEST
                      </div>
                      <div className="text-sm md:text-base font-mono font-bold text-white">
                        {data.longestStreak} <span className="text-xs text-[#8b949e] font-normal">DAYS</span>
                      </div>
                    </div>
                  </div>

                  {/* GitHub ID */}
                  <a
                    href={GITHUB_PROFILE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#161b22] border border-[#30363d] flex items-center justify-center text-[#39d353] group-hover:border-[#39d353] transition-colors">
                      <Code className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-[#8b949e] uppercase tracking-wider flex items-center gap-1 group-hover:text-[#39d353] transition-colors">
                        GITHUB ID <ExternalLink className="w-2.5 h-2.5 inline" />
                      </div>
                      <div className="text-xs md:text-sm font-mono font-bold text-white group-hover:text-[#39d353] transition-colors truncate max-w-[100px] md:max-w-none">
                        @{GITHUB_USERNAME}
                      </div>
                    </div>
                  </a>
                </div>

                {/* Contribution Intensity Legend matching image */}
                <div className="flex items-center gap-2 text-xs font-sans text-[#8b949e]">
                  <span>Less</span>
                  <div className="flex gap-1 items-center">
                    <div className="w-3 h-3 rounded-[2px] bg-[#161b22] border border-[#21262d]" title="No contributions" />
                    <div className="w-3 h-3 rounded-[2px] bg-[#0e4429] border border-[#0e4429]" title="1-2 contributions" />
                    <div className="w-3 h-3 rounded-[2px] bg-[#006d32] border border-[#006d32]" title="3-5 contributions" />
                    <div className="w-3 h-3 rounded-[2px] bg-[#26a641] border border-[#26a641]" title="6-9 contributions" />
                    <div className="w-3 h-3 rounded-[2px] bg-[#39d353] border border-[#39d353]" title="10+ contributions" />
                  </div>
                  <span>More</span>
                </div>
              </div>
            </div>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
};
