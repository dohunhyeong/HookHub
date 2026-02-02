# HookHub MVP Spec

## Overview

HookHub is a browsable directory of open-source Claude Code hooks. The MVP focuses solely on **displaying and browsing** hooks in a grid layout.

## What Are Claude Code Hooks?

Claude Code hooks are user-defined shell commands or LLM prompts that execute automatically at specific points in Claude Code's lifecycle (e.g., before/after tool use, on session start, on prompt submit). They enable deterministic automation like auto-formatting, security validation, test enforcement, and more.

## Data Model

Each hook entry has:

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique identifier (slug) |
| `name` | string | Display name (e.g., "Auto Prettier") |
| `description` | string | Short description of what the hook does |
| `category` | string | One of the predefined categories below |
| `repoUrl` | string | GitHub repository URL |
| `author` | string | GitHub username or org |

### Categories

Based on common hook use cases:

- **Security** - Block dangerous commands, validate paths, protect files
- **Formatting** - Auto-format code after edits (Prettier, linters)
- **Testing** - Run tests before stopping, validate changes
- **Notifications** - Desktop alerts, Slack messages on events
- **Workflow** - Environment setup, context injection, async tasks
- **Other** - Everything else

## Pages & Components

### Main Page (`/`)

- **Header** - App name "HookHub", tagline "Discover Claude Code Hooks"
- **Category filter bar** - Horizontal row of category pills/chips to filter hooks (includes "All" option)
- **Search bar** - Simple text search filtering by name and description
- **Hook grid** - Responsive card grid displaying hooks
  - Mobile: 1 column
  - Tablet: 2 columns
  - Desktop: 3 columns

### Hook Card

Each card displays:
- Hook name (bold, prominent)
- Category badge (colored pill)
- Description (2-3 line clamp)
- Author name
- "View on GitHub" link/button pointing to `repoUrl`

## Technical Approach

### Data Source

For the MVP, hooks are stored as a **static JSON array** in `src/data/hooks.ts`. No database or API needed. This keeps the MVP simple and allows easy contribution via PRs.

### File Changes

| File | Action | Purpose |
|------|--------|---------|
| `src/data/hooks.ts` | Create | Hook data array + TypeScript types |
| `src/app/page.tsx` | Replace | Main page with search, filter, and grid |
| `src/app/globals.css` | Edit | Add any needed custom styles |
| `src/app/layout.tsx` | Edit | Update metadata (title, description) |

### Key Decisions

- **No routing needed** - Single page MVP, no individual hook detail pages
- **Client-side filtering** - Search and category filter run in the browser (`"use client"` component)
- **No database** - Static data in code
- **No authentication** - Read-only public site
- **Tailwind only** - No component library, just utility classes

### Seed Data

Include 8-12 real hooks from known repositories:
- `karanb192/claude-code-hooks` (safety, automation hooks)
- `johnlindquist/claude-hooks` (TypeScript hook system)
- `decider/claude-hooks` (Python validation hooks)
- `disler/claude-code-hooks-mastery` (educational hooks)
- `carlrannaberg/claudekit` (toolkit with hooks)

## Verification

1. Run `npm run dev` and open `localhost:3000`
2. Verify grid displays all seed hooks
3. Verify category filter pills work (clicking filters the grid)
4. Verify search bar filters by name/description
5. Verify "View on GitHub" links open correct repos
6. Verify responsive layout (1/2/3 columns)
7. Run `npm run build` to confirm no build errors
8. Run `npm run lint` to confirm no lint errors
