# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-page personal portfolio site for Alejandro Chávez (SAS), built with Next.js App Router. Spanish-language content. No backend, no database, no API routes — it's a static marketing/portfolio page with scroll-triggered animation.

## Commands

Package manager is Yarn (`packageManager: yarn@4.5.1`, `.yarnrc.yml` present) — prefer `yarn` over `npm`.

- `yarn dev` — start dev server (http://localhost:3000)
- `yarn build` — production build (output to `.next`, set via `next.config.mjs`)
- `yarn start` — run the production build
- `yarn lint` — ESLint via `eslint-config-next/core-web-vitals` (flat config in `eslint.config.mjs`)

There is no test suite configured in this repo.

## Architecture

- **App Router, single route.** `app/page.tsx` is the only real page: it composes section components in a fixed vertical order (`Header`, `HeroSection`, `WorkSection`, `CraftSection`, `OriginSection`, `ContactSection`, `Footer`). To add/reorder page content, edit this file and add a matching component in `components/`.
- **Content is centralized in `lib/content.ts`.** All copy, nav links, work/project entries, craft/skills groups, and contact info live here as typed `const` objects/arrays (`identity`, `nav`, `hero`, `work`, `craft`, `origin`, `contact`). Section components import from this file rather than hardcoding text — when changing site copy, edit `lib/content.ts`, not the component JSX.
- **`SiteFrame` (`components/site-frame.tsx`) wraps the whole app** inside `app/layout.tsx`. It sets the base background/text color and renders a fixed full-viewport `.grain` overlay (CSS noise texture, see `app/globals.css`). It wraps everything in `SmoothScroll`.
- **`SmoothScroll` (`components/smooth-scroll.tsx`)** uses `lenis/react`'s `ReactLenis` for inertial scrolling, and falls back to plain children when `useReducedMotion()` is true — respect this reduced-motion opt-out when adding new scroll/animation effects.
- **Fonts and theme tokens**: `app/layout.tsx` loads three Google fonts (`Inter` → `--font-inter`/`font-sans`, `Barlow_Condensed` → `--font-barlow`/`font-display`, `Anton` → `--font-anton`, used only by the `.sas-mark` wordmark class in `globals.css`). Color tokens (`--cream`, `--brick`, `--brick-alt`, `--ink`, `--ink-soft`) are defined in `app/globals.css` under `:root` and re-exposed as Tailwind colors via `@theme inline` (Tailwind v4 CSS-based config). Use these semantic tokens (`bg-cream`, `text-ink`, `text-brick`, etc.) instead of raw hex values.
- **Styling conventions**: Tailwind v4 utility classes everywhere; `font-display` applies the condensed poster display font (uppercase, tight leading) for headings and nav; the big "SAS" hero wordmark instead uses the one-off `.sas-mark`/`.sas-mark-wrap` classes (Anton font, `-webkit-text-stroke` outline treatment) defined directly in `globals.css`. `cn()` in `lib/utils.ts` (clsx + tailwind-merge) is the standard way to merge conditional class names. `components/poster-link.tsx` (`solid`/`outline`/`invert` variants) and `components/star-mark.tsx` (inline SVG sparkle icon) are small reusable pieces of this poster-style visual language — reach for them instead of one-off links/icons.
- **`components/ui/`** holds shadcn-style primitives (`button.tsx` via `class-variance-authority` + Radix `Slot`, `card.tsx`). Follow this cva + `asChild`/`Slot` pattern if adding more primitives.
- **Path alias**: `@/*` maps to the repo root (configured in both `tsconfig.json` and `jsconfig.json`) — use `@/components/...`, `@/lib/...` imports.
- **Client components**: anything using state, hooks, or browser-only libs (`Header`, `SiteFrame`, `SmoothScroll`) is marked `"use client"`. Keep this boundary in mind — most section components are server components unless they need interactivity.
- **Assets**: site images live in `public/images/`. The `diseño e identidad/` and `manual de indentidad/` directories contain brand/design reference material (mood images, a design book), not code — not part of the app bundle.
