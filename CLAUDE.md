# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm start        # Start production server
npm run lint     # Run ESLint
```

No test framework is configured yet.

## Architecture

- **Next.js 16** with App Router, **React 19**, **TypeScript 5**, **Tailwind CSS 4**
- React Compiler is enabled in `next.config.ts`
- Source code lives in `src/app/` using the App Router filesystem routing convention
- Path alias: `@/*` maps to `./src/*`
- Styling uses Tailwind utility classes with CSS variables for theming (`--background`, `--foreground`) and dark mode via `prefers-color-scheme`
- Fonts: Geist and Geist Mono loaded via `next/font/google`, applied as CSS variables
- ESLint uses flat config (`eslint.config.mjs`) with Next.js Core Web Vitals and TypeScript rules
