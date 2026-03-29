"use client";

import { useEffect, useState } from "react";

const NEW_SUGGESTIONS = [
  "Create account",
  "Get started for free",
  "Join CopyWise",
  "Start writing",
  "Sign up — it's free",
];

const REUSE_SUGGESTIONS = [
  "Register",
  "Create your account",
  "New account",
  "Open an account",
];

function CopyIcon({ copied }: { copied: boolean }) {
  if (copied) {
    return (
      <svg className="w-3.5 h-3.5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
      </svg>
    );
  }
  return (
    <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M7 3.5A1.5 1.5 0 018.5 2h3.879a1.5 1.5 0 011.06.44l3.122 3.12A1.5 1.5 0 0117 6.622V12.5a1.5 1.5 0 01-1.5 1.5h-1v-3.379a3 3 0 00-.879-2.121L10.5 5.379A3 3 0 008.379 4.5H7v-1z" />
      <path d="M4.5 6A1.5 1.5 0 003 7.5v9A1.5 1.5 0 004.5 18h7a1.5 1.5 0 001.5-1.5v-5.879a1.5 1.5 0 00-.44-1.06L9.44 6.439A1.5 1.5 0 008.378 6H4.5z" />
    </svg>
  );
}

export default function PluginMockup() {
  const [activeTab, setActiveTab] = useState<"new" | "reuse">("new");
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(0);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  // Initial load animation
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(t);
  }, []);

  // Stagger suggestions in after loading
  useEffect(() => {
    if (loading) return;
    setVisibleCount(0);
    let n = 0;
    const iv = setInterval(() => {
      n += 1;
      setVisibleCount(n);
      if (n >= NEW_SUGGESTIONS.length) clearInterval(iv);
    }, 140);
    return () => clearInterval(iv);
  }, [loading, activeTab]);

  // Reset count when tab changes
  const switchTab = (tab: "new" | "reuse") => {
    setActiveTab(tab);
    setVisibleCount(0);
  };

  const handleCopy = (i: number) => {
    setCopiedIdx(i);
    setTimeout(() => setCopiedIdx(null), 1400);
  };

  const items = activeTab === "new" ? NEW_SUGGESTIONS : REUSE_SUGGESTIONS;

  return (
    <div className="relative w-[300px] flex-shrink-0 select-none animate-float">
      {/* Background glow */}
      <div className="absolute -inset-8 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Plugin panel */}
      <div className="relative bg-[#1e1e1e] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">

        {/* ── Header ── */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#2c2c2c] border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-[#4A90E2] rounded-md flex items-center justify-center">
              <span className="text-white text-[8px] font-extrabold">CW</span>
            </div>
            <span className="text-white text-[13px] font-semibold tracking-tight">CopyWise</span>
            <span className="text-[10px] font-medium bg-[#4A90E2]/20 text-[#4A90E2] px-1.5 py-0.5 rounded-full ml-1">
              Pro
            </span>
          </div>
          {/* Window controls */}
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          </div>
        </div>

        {/* ── Body ── */}
        <div className="p-4 space-y-3">

          {/* Selected text */}
          <div>
            <p className="text-white/30 text-[10px] font-semibold uppercase tracking-widest mb-1.5">
              Selected text
            </p>
            <div className="flex items-center justify-between bg-white/5 border border-white/8 rounded-lg px-3 py-2">
              <span className="text-white/90 text-[13px] font-medium">&ldquo;Sign up&rdquo;</span>
              <span className="text-[#4A90E2] text-[10px] font-semibold bg-[#4A90E2]/10 px-2 py-0.5 rounded-full">
                Button
              </span>
            </div>
          </div>

          {/* Context input */}
          <div>
            <p className="text-white/30 text-[10px] font-semibold uppercase tracking-widest mb-1.5">
              Extra context
            </p>
            <div className="bg-white/5 border border-white/8 rounded-lg px-3 py-2">
              <span className="text-white/25 text-[12px] italic">hero section CTA button…</span>
            </div>
          </div>

          {/* Tab switcher */}
          <div className="flex bg-white/5 rounded-xl p-1 gap-1">
            {(["new", "reuse"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => switchTab(tab)}
                className={`flex-1 text-[11px] font-semibold py-1.5 rounded-lg transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-[#4A90E2] text-white shadow-sm"
                    : "text-white/35 hover:text-white/60"
                }`}
              >
                {tab === "new" ? "✨ New" : "♻️ Reuse"}
              </button>
            ))}
          </div>

          {/* Suggestions list */}
          <div className="space-y-1.5 min-h-[148px]">
            {loading ? (
              [1, 0.75, 0.5].map((opacity, i) => (
                <div
                  key={i}
                  className="shimmer-dark h-9 rounded-lg"
                  style={{ opacity }}
                />
              ))
            ) : (
              items.map((text, i) => (
                <div
                  key={`${activeTab}-${i}`}
                  className={`flex items-center justify-between bg-white/5 hover:bg-white/10 border border-transparent hover:border-white/10 rounded-lg px-3 py-2 cursor-pointer group transition-all duration-300`}
                  style={{
                    opacity: i < visibleCount ? 1 : 0,
                    transform: i < visibleCount ? "translateX(0)" : "translateX(-8px)",
                    transitionDelay: `${i * 40}ms`,
                  }}
                  onClick={() => handleCopy(i)}
                >
                  <span className="text-white/75 text-[12px] group-hover:text-white transition-colors leading-snug">
                    {text}
                  </span>
                  <button
                    className="text-white/20 hover:text-[#4A90E2] transition-colors ml-2 flex-shrink-0"
                    onClick={(e) => { e.stopPropagation(); handleCopy(i); }}
                  >
                    <CopyIcon copied={copiedIdx === i} />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        {/* ── Footer CTA ── */}
        <div className="px-4 pb-4">
          <button className="w-full bg-[#4A90E2] hover:bg-[#357ABD] active:bg-[#2d6aa0] text-white text-[13px] font-semibold py-2.5 rounded-xl transition-colors">
            Get suggestions
          </button>
        </div>
      </div>

      {/* Floating stat badge */}
      <div
        className="absolute -bottom-4 -left-6 bg-white rounded-xl px-3 py-2 shadow-xl border border-slate-100 text-xs font-semibold text-slate-700 flex items-center gap-2"
        style={{ animation: "float 6s ease-in-out 1s infinite" }}
      >
        <span className="animate-pulse-dot w-2 h-2 bg-green-400 rounded-full flex-shrink-0" />
        Style guide active
      </div>

      {/* Floating suggestion count badge */}
      <div
        className="absolute -top-3 -right-5 bg-white rounded-xl px-3 py-2 shadow-xl border border-slate-100 text-xs font-semibold text-slate-700"
        style={{ animation: "float 5s ease-in-out 0.5s infinite" }}
      >
        ✨ 5 suggestions
      </div>
    </div>
  );
}
