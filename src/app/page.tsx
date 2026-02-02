"use client";

import { useState, useMemo, useEffect } from "react";
import { hooks, CATEGORIES, type Category } from "@/data/hooks";

const CATEGORY_COLORS: Record<string, string> = {
  Security: "bg-red-500/20 text-red-300 border-red-500/30",
  Formatting: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  Testing: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  Notifications: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  Workflow: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  Other: "bg-slate-500/20 text-slate-300 border-slate-500/30",
};

export default function Home() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return hooks.filter((hook) => {
      const matchesCategory =
        activeCategory === "All" || hook.category === activeCategory;
      const matchesSearch =
        !q ||
        hook.name.toLowerCase().includes(q) ||
        hook.description.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-900 font-sans">
      {/* Animated starfield background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="stars-small"></div>
        <div className="stars-medium"></div>
        <div className="stars-large"></div>
      </div>

      {/* Cosmic glow effects */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/4 top-0 h-96 w-96 animate-pulse rounded-full bg-purple-500/10 blur-3xl"></div>
        <div className="absolute right-1/4 top-1/3 h-96 w-96 animate-pulse rounded-full bg-cyan-500/10 blur-3xl" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-0 left-1/2 h-96 w-96 animate-pulse rounded-full bg-indigo-500/10 blur-3xl" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <header className="border-b border-indigo-500/20 backdrop-blur-sm">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
            <h1 className="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-5xl font-bold tracking-tight text-transparent">
              HookHub
            </h1>
            <p className="mt-2 text-xl text-indigo-200/80">
              Discover Claude Code Hooks Across the Universe
            </p>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search the cosmos..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-2xl border border-indigo-500/30 bg-slate-900/50 px-6 py-4 text-base text-white placeholder-indigo-300/40 shadow-lg shadow-indigo-500/10 backdrop-blur-md transition-all focus:border-cyan-500/50 focus:shadow-cyan-500/20 focus:outline-none"
            />
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/5 to-cyan-500/5"></div>
          </div>

          {/* Category pills */}
          <div className="mt-6 flex flex-wrap gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`group relative overflow-hidden rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-purple-500/50"
                    : "border border-indigo-400/30 bg-slate-800/40 text-indigo-200 backdrop-blur-sm hover:border-cyan-400/50 hover:bg-slate-700/60 hover:shadow-lg hover:shadow-cyan-500/20"
                }`}
              >
                <span className="relative z-10">{cat}</span>
                {activeCategory === cat && (
                  <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-purple-500/20 to-cyan-500/20"></div>
                )}
              </button>
            ))}
          </div>

          {/* Hook grid */}
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((hook) => (
              <div
                key={hook.id}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-indigo-500/20 bg-slate-900/40 p-6 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                {/* Card glow effect */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 to-cyan-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                <div className="relative z-10 flex items-start justify-between gap-3">
                  <h2 className="text-lg font-bold text-cyan-100 group-hover:text-cyan-300 transition-colors">
                    {hook.name}
                  </h2>
                  <span
                    className={`shrink-0 rounded-full border px-3 py-1 text-xs font-medium ${CATEGORY_COLORS[hook.category]}`}
                  >
                    {hook.category}
                  </span>
                </div>

                <p className="relative z-10 mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-indigo-200/70">
                  {hook.description}
                </p>

                <div className="relative z-10 mt-5 flex items-center justify-between border-t border-indigo-500/10 pt-4">
                  <span className="text-sm text-indigo-300/60">
                    @{hook.author}
                  </span>
                  <a
                    href={hook.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm font-medium text-cyan-300 transition-all hover:gap-2 hover:text-cyan-200"
                  >
                    View on GitHub
                    <span className="text-lg">→</span>
                  </a>
                </div>

                {/* Corner accent */}
                <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 bg-gradient-to-bl from-purple-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="mt-20 text-center">
              <p className="text-xl text-indigo-300/60">
                No hooks found in this sector of space...
              </p>
              <p className="mt-2 text-sm text-indigo-400/40">
                Try adjusting your search parameters
              </p>
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="relative mt-20 border-t border-indigo-500/20 backdrop-blur-sm">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* About */}
              <div>
                <h3 className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-lg font-bold text-transparent">
                  HookHub
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-indigo-200/60">
                  A curated directory of Claude Code hooks from across the developer universe.
                  Extend your AI coding experience with community-built integrations.
                </p>
              </div>

              {/* Links */}
              <div>
                <h4 className="text-sm font-semibold text-cyan-300">Resources</h4>
                <ul className="mt-3 space-y-2">
                  <li>
                    <a
                      href="https://docs.anthropic.com/claude/docs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-indigo-200/60 transition-colors hover:text-cyan-300"
                    >
                      Claude Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/anthropics/claude-code"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-indigo-200/60 transition-colors hover:text-cyan-300"
                    >
                      Claude Code GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://claude.ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-indigo-200/60 transition-colors hover:text-cyan-300"
                    >
                      Claude.ai
                    </a>
                  </li>
                </ul>
              </div>

              {/* Community */}
              <div>
                <h4 className="text-sm font-semibold text-cyan-300">Community</h4>
                <ul className="mt-3 space-y-2">
                  <li>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-indigo-200/60 transition-colors hover:text-cyan-300"
                    >
                      Submit Your Hook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-indigo-200/60 transition-colors hover:text-cyan-300"
                    >
                      Report an Issue
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-indigo-200/60 transition-colors hover:text-cyan-300"
                    >
                      Contribute
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-indigo-500/10 pt-8 sm:flex-row">
              <p className="text-sm text-indigo-300/50">
                Built with Next.js, React, and Tailwind CSS
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-300/50 transition-colors hover:text-cyan-300"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <span className="text-indigo-300/30">•</span>
                <p className="text-sm text-indigo-300/50">
                  {year || "2026"} HookHub
                </p>
              </div>
            </div>
          </div>

          {/* Footer glow effect */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
        </footer>
      </div>
    </div>
  );
}
