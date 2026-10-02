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

  // NSHA contribution levels (uses green palette on off-white)
  const getLevelStyle = (level: number) => {
    switch (level) {
      case 1: return { background: "#B7E83B", border: "#090909" };
      case 2: return { background: "#35D04F", border: "#090909" };
      case 3: return { background: "#22a63c", border: "#090909" };
      case 4: return { background: "#FFD21C", border: "#090909" };
      default: return { background: "#F3F0E8", border: "#d0ccc2" };
    }
  };

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  return (
    <section id="github-matrix" className="py-24 px-4 sm:px-8" style={{ background: "#FAF8F3" }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="nsha-section-eyebrow">Open source activity</p>
          <h2 className="nsha-section-title">
            GitHub <span style={{ color: "#35D04F" }}>Contributions</span>
          </h2>
          <div
            className="mt-4 h-1.5 w-20 rounded-full border-[2px] border-[#090909]"
            style={{ background: "#35D04F" }}
          />
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl border-[3px] border-[#090909] overflow-hidden"
          style={{ boxShadow: "7px 7px 0 #35D04F" }}
        >
          {/* Card header */}
          <div
            className="px-6 py-4 border-b-[3px] border-[#090909] flex flex-col md:flex-row md:items-center justify-between gap-4"
            style={{ background: "#090909" }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl border-[2px] border-[#FAF8F3] flex items-center justify-center"
                style={{ background: "#35D04F" }}
              >
                <Code className="w-5 h-5 text-[#090909]" />
              </div>
              <div>
                <h3 className="font-bold text-white">
                  {data
                    ? `${data.totalCommits.toLocaleString()} contributions in the last year`
                    : "GitHub Contributions"}
                </h3>
                {data?.lastSync && (
                  <p className="text-xs font-mono" style={{ color: "#5B5B5B" }}>
                    Last sync: {data.lastSync}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={GITHUB_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border-[2px] border-[#FAF8F3] text-[#FAF8F3] hover:bg-[#FAF8F3] hover:text-[#090909] transition-all group"
              >
                <span>@{GITHUB_USERNAME}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={sync}
                disabled={loading}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold border-[2px] border-[#35D04F] text-[#35D04F] hover:bg-[#35D04F] hover:text-[#090909] transition-all disabled:opacity-50"
              >
                <RotateCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
                {loading ? "SYNCING..." : "SYNC"}
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6" style={{ background: "#FAF8F3" }}>
            {error ? (
              <div className="py-10 text-center space-y-3">
                <AlertCircle className="w-8 h-8 text-[#FF3D83] mx-auto" />
                <p className="text-sm font-bold" style={{ color: "#FF3D83" }}>{error}</p>
                <button
                  onClick={sync}
                  className="px-4 py-2 text-xs font-bold rounded-lg border-[2px] border-[#090909] shadow-[2px_2px_0_#090909] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all"
                  style={{ background: "#FAF8F3" }}
                >
                  RETRY SYNC
                </button>
              </div>
            ) : loading && !data ? (
              <div className="py-14 text-center space-y-4">
                <RotateCw className="w-8 h-8 text-[#35D04F] animate-spin mx-auto" />
                <p className="text-xs font-bold uppercase tracking-widest animate-pulse" style={{ color: "#5B5B5B" }}>
                  Fetching contribution data from GitHub...
                </p>
              </div>
            ) : data ? (
              <div>
                {/* Contribution matrix */}
                <div className="overflow-x-auto pb-2">
                  <div className="min-w-[720px]">
                    {/* Month labels */}
                    <div className="flex text-[11px] font-bold text-[#5B5B5B] mb-2 pl-8">
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
                      <div className="flex flex-col gap-1 pr-1 justify-between text-[10px] font-bold text-[#5B5B5B] py-0.5">
                        {WEEKDAYS.map((w, i) => (
                          <div key={i} className="h-3 flex items-center">{w.label}</div>
                        ))}
                      </div>

                      {/* Heatmap */}
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
                                  className="w-3 h-3 rounded-[2px] border transition-transform duration-100 hover:scale-125 cursor-pointer"
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

                {/* Tooltip */}
                {activeHover && (
                  <div
                    className="fixed z-50 pointer-events-none transform -translate-x-1/2 -translate-y-full px-3 py-1.5 rounded-lg border-[2px] border-[#090909] text-xs font-bold shadow-[2px_2px_0_#090909]"
                    style={{
                      left: `${activeHover.x}px`,
                      top: `${activeHover.y - 8}px`,
                      background: "#090909",
                      color: "#FFD21C",
                    }}
                  >
                    {activeHover.day.count} contribution{activeHover.day.count !== 1 ? "s" : ""} on{" "}
                    {formatDate(activeHover.day.date)}
                  </div>
                )}

                {/* Footer stats */}
                <div
                  className="mt-6 pt-5 border-t-[2px] border-[#090909] flex flex-col md:flex-row items-start md:items-center justify-between gap-5"
                >
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <div
                      className="flex items-center gap-2.5 px-4 py-3 rounded-xl border-[2px] border-[#090909] shadow-[3px_3px_0_#35D04F]"
                      style={{ background: "#FAF8F3" }}
                    >
                      <div
                        className="w-8 h-8 rounded-lg border-[2px] border-[#090909] flex items-center justify-center"
                        style={{ background: "#35D04F" }}
                      >
                        <Flame className="w-4 h-4 text-[#090909]" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-wider text-[#5B5B5B]">STREAK</div>
                        <div className="text-sm font-black text-[#090909]">
                          {data.currentStreak}{" "}
                          <span className="text-xs font-bold text-[#5B5B5B]">DAYS</span>
                        </div>
                      </div>
                    </div>

                    <div
                      className="flex items-center gap-2.5 px-4 py-3 rounded-xl border-[2px] border-[#090909] shadow-[3px_3px_0_#FFD21C]"
                      style={{ background: "#FAF8F3" }}
                    >
                      <div
                        className="w-8 h-8 rounded-lg border-[2px] border-[#090909] flex items-center justify-center"
                        style={{ background: "#FFD21C" }}
                      >
                        <Trophy className="w-4 h-4 text-[#090909]" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-wider text-[#5B5B5B]">LONGEST</div>
                        <div className="text-sm font-black text-[#090909]">
                          {data.longestStreak}{" "}
                          <span className="text-xs font-bold text-[#5B5B5B]">DAYS</span>
                        </div>
                      </div>
                    </div>

                    <a
                      href={GITHUB_PROFILE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 px-4 py-3 rounded-xl border-[2px] border-[#090909] shadow-[3px_3px_0_#7557F7] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all"
                      style={{ background: "#FAF8F3" }}
                    >
                      <div
                        className="w-8 h-8 rounded-lg border-[2px] border-[#090909] flex items-center justify-center"
                        style={{ background: "#7557F7" }}
                      >
                        <Code className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-wider text-[#5B5B5B] flex items-center gap-1">
                          GITHUB <ExternalLink className="w-2.5 h-2.5" />
                        </div>
                        <div className="text-xs font-black text-[#090909] truncate max-w-[80px]">
                          @{GITHUB_USERNAME}
                        </div>
                      </div>
                    </a>
                  </div>

                  {/* Legend */}
                  <div className="flex items-center gap-2 text-xs font-bold text-[#5B5B5B]">
                    <span>Less</span>
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
                    <span>More</span>
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
