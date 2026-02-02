"use client";

import { useState, useMemo } from "react";
import { hooks, CATEGORIES, type Category } from "@/data/hooks";

const CATEGORY_COLORS: Record<string, string> = {
  Security: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
  Formatting:
    "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  Testing:
    "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  Notifications:
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
  Workflow:
    "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
  Other: "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300",
};

export default function Home() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category>("All");

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
    <div className="min-h-screen bg-background font-sans">
      <header className="border-b border-gray-200 dark:border-gray-800">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            HookHub
          </h1>
          <p className="mt-1 text-lg text-gray-500 dark:text-gray-400">
            Discover Claude Code Hooks
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        {/* Search */}
        <input
          type="text"
          placeholder="Search hooks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-foreground placeholder-gray-400 focus:border-gray-500 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:placeholder-gray-500"
        />

        {/* Category pills */}
        <div className="mt-4 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-foreground text-background"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Hook grid */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((hook) => (
            <div
              key={hook.id}
              className="flex flex-col rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="flex items-start justify-between gap-2">
                <h2 className="text-base font-semibold text-foreground">
                  {hook.name}
                </h2>
                <span
                  className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${CATEGORY_COLORS[hook.category]}`}
                >
                  {hook.category}
                </span>
              </div>
              <p className="mt-2 line-clamp-3 flex-1 text-sm text-gray-600 dark:text-gray-400">
                {hook.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-500">
                  {hook.author}
                </span>
                <a
                  href={hook.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-gray-900 hover:underline dark:text-gray-100"
                >
                  View on GitHub &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-gray-500">
            No hooks found. Try a different search or category.
          </p>
        )}
      </main>
    </div>
  );
}
