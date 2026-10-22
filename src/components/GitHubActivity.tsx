import React, { useState } from "react";
import { motion } from "framer-motion";
import { RotateCw, ExternalLink, Flame, Trophy, Code, AlertCircle } from "lucide-react";
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

  // Black & Electric Blue Heatmap Levels
  const getLevelStyle = (level: number) => {
    switch (level) {
      case 1:
        return { background: "rgba(36, 107, 253, 0.3)", border: "rgba(36, 107, 253, 0.5)" };
      case 2:
        return { background: "rgba(36, 107, 253, 0.6)", border: "rgba(77, 141, 255, 0.75)" };
      case 3:
        return { background: "#246BFD", border: "#4D8DFF" };
      case 4:
        return { background: "#4D8DFF", border: "#FFFFFF" };
      default:
        return { background: "#12151B", border: "#252830" };
    }
  };

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  return (
    <section id="github-matrix" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#050505] text-white border-t border-[#252830] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Marker */}
        <div className="flex items-center justify-between pb-6 border-b border-[#252830] mb-12 sm:mb-16">
          <span className="editorial-eyebrow">[ OPEN-SOURCE PULSE ]</span>
          <span className="font-mono text-xs text-[#9A9CA3] uppercase tracking-widest hidden sm:inline-block">
            LIVE GITHUB TELEMETRY
          </span>
        </div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 sm:mb-20"
        >
          <h2 className="editorial-section-title text-white">
            <span>GITHUB</span>
            <br />
            <span className="text-[#246BFD]">CONTRIBUTIONS.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#9A9CA3] max-w-xl font-sans">
            Consistent code commits across repositories, open-source initiatives, and live deployments.
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-[28px] bg-[#0B0D10] border border-[#252830] overflow-hidden"
        >
          {/* Card Header */}
          <div className="p-6 sm:p-8 border-b border-[#252830] flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#12151B]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#050505] border border-[#252830] flex items-center justify-center text-[#246BFD]">
                <Code className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-xl sm:text-2xl text-white uppercase tracking-tight">
                  {data
                    ? `${data.totalCommits.toLocaleString()} CONTRIBUTIONS IN THE LAST YEAR`
                    : "GITHUB CONTRIBUTIONS"}
                </h3>
                {data?.lastSync && (
                  <p className="font-mono text-xs text-[#9A9CA3] mt-0.5">
                    Synced: {data.lastSync}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={GITHUB_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-full font-mono text-xs font-semibold text-white bg-[#050505] border border-[#252830] hover:border-[#246BFD] transition-colors"
              >
                <span>@{GITHUB_USERNAME}</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#246BFD]" />
              </a>
              <button
                onClick={sync}
                disabled={loading}
                className="flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs font-bold text-[#246BFD] border border-[#246BFD]/40 hover:bg-[#246BFD]/10 transition-colors disabled:opacity-50"
              >
                <RotateCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
                <span>{loading ? "SYNCING..." : "SYNC"}</span>
              </button>
            </div>
          </div>

          {/* Heatmap Area */}
          <div className="p-6 sm:p-8 bg-[#0B0D10]">
            {error ? (
              <div className="py-10 text-center space-y-3">
                <AlertCircle className="w-8 h-8 text-[#4D8DFF] mx-auto" />
                <p className="text-sm font-mono text-white">{error}</p>
                <button
                  onClick={sync}
                  className="editorial-btn-secondary py-2 px-4 text-xs font-mono"
                >
                  RETRY SYNC
                </button>
              </div>
            ) : loading && !data ? (
              <div className="py-14 text-center space-y-4">
                <RotateCw className="w-8 h-8 text-[#246BFD] animate-spin mx-auto" />
                <p className="font-mono text-xs uppercase tracking-widest text-[#9A9CA3] animate-pulse">
                  Querying live GitHub GraphQL pipeline...
                </p>
              </div>
            ) : data ? (
              <div>
                <div className="overflow-x-auto pb-4">
                  <div className="min-w-[720px]">
                    {/* Month labels */}
                    <div className="flex font-mono text-[11px] text-[#9A9CA3] mb-3 pl-8">
                      {data.months.map((m, idx) => (
                        <div
                          key={`${m.name}-${idx}`}
                          style={{
                            width: `${(100 / (data.weeks.length || 52)) * 4.2}%`,
                            minWidth: "42px",
                          }}
                        >
                          {m.name}
                        </div>
                      ))}
                    </div>

                    {/* Grid */}
                    <div className="flex gap-2">
                      {/* Weekday labels */}
                      <div className="flex flex-col gap-1 pr-2 justify-between font-mono text-[10px] text-[#9A9CA3] py-0.5">
                        {WEEKDAYS.map((w, i) => (
                          <div key={i} className="h-3 flex items-center">{w.label}</div>
                        ))}
                      </div>

                      {/* Heatmap Matrix */}
                      <div className="flex gap-1 flex-1">
                        {data.weeks.map((week, wIdx) => (
                          <div key={wIdx} className="flex flex-col gap-1">
                            {week.map((day, dIdx) => {
                              const style = getLevelStyle(day.level);
                              return (
                                <div
                                  key={`${wIdx}-${dIdx}`}
                                  onMouseEnter={(e) => {
                                    const rect = e.currentTarget.getBoundingClientRect();
                                    setActiveHover({ day, x: rect.left + rect.width / 2, y: rect.top });
                                  }}
                                  onMouseLeave={() => setActiveHover(null)}
                                  className="w-3 h-3 rounded-[3px] border transition-transform duration-100 hover:scale-150 cursor-pointer"
                                  style={{ background: style.background, borderColor: style.border }}
                                />
                              );
                            })}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Tooltip */}
                {activeHover && (
                  <div
                    className="fixed z-50 pointer-events-none transform -translate-x-1/2 -translate-y-full px-3 py-1.5 rounded-lg border border-[#252830] font-mono text-xs shadow-xl"
                    style={{
                      left: `${activeHover.x}px`,
                      top: `${activeHover.y - 8}px`,
                      background: "#050505",
                      color: "#FFFFFF",
                    }}
                  >
                    <span className="text-[#246BFD] font-bold">{activeHover.day.count} contributions</span> on{" "}
                    {formatDate(activeHover.day.date)}
                  </div>
                )}

                {/* Footer Streak Statistics Strip */}
                <div className="mt-8 pt-6 border-t border-[#252830] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#12151B] border border-[#252830]">
                      <div className="w-8 h-8 rounded-lg bg-[#050505] border border-[#252830] flex items-center justify-center text-[#246BFD]">
                        <Flame className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-mono text-[10px] uppercase text-[#9A9CA3]">CURRENT STREAK</div>
                        <div className="font-display text-lg text-white">
                          {data.currentStreak} <span className="font-mono text-xs text-[#9A9CA3]">DAYS</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#12151B] border border-[#252830]">
                      <div className="w-8 h-8 rounded-lg bg-[#050505] border border-[#252830] flex items-center justify-center text-[#246BFD]">
                        <Trophy className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-mono text-[10px] uppercase text-[#9A9CA3]">LONGEST STREAK</div>
                        <div className="font-display text-lg text-white">
                          {data.longestStreak} <span className="font-mono text-xs text-[#9A9CA3]">DAYS</span>
                        </div>
                      </div>
                    </div>

                    <a
                      href={GITHUB_PROFILE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="col-span-2 sm:col-span-1 flex items-center gap-3 p-3.5 rounded-xl bg-[#12151B] border border-[#252830] hover:border-[#246BFD] transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#050505] border border-[#252830] flex items-center justify-center text-white group-hover:text-[#246BFD]">
                        <Code className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-mono text-[10px] uppercase text-[#9A9CA3] flex items-center gap-1">
                          PROFILE <ExternalLink className="w-2.5 h-2.5" />
                        </div>
                        <div className="font-mono text-xs text-white truncate max-w-[90px]">
                          @{GITHUB_USERNAME}
                        </div>
                      </div>
                    </a>
                  </div>

                  {/* Legend */}
                  <div className="flex items-center gap-2 font-mono text-xs text-[#9A9CA3]">
                    <span>LESS</span>
                    <div className="flex gap-1 items-center">
                      {[0, 1, 2, 3, 4].map((l) => {
                        const s = getLevelStyle(l);
                        return (
                          <div
                            key={l}
                            className="w-3 h-3 rounded-[2px] border"
                            style={{ background: s.background, borderColor: s.border }}
                          />
                        );
                      })}
                    </div>
                    <span>MORE</span>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
