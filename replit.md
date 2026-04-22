# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Frontend-only project — no backend, no database, no API.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **Frontend**: React 19 + Vite

## Artifacts

### ARMO Wine (`artifacts/armo-wine`)
- **Type**: React + Vite (frontend-only, static site)
- **Preview path**: `/`
- **Description**: Premium, minimal single-page website for ARMO boutique wine brand
- **Sections**: Hero, About, Story, Product Specs, Gallery, Journal, Footer
- **Features**: Framer Motion scroll animations, Google Fonts (Cormorant Garamond, DM Sans, Great Vibes), warm parchment theme with burgundy + gold accents, user-provided bottle photography only
- **Colors**: Parchment background (`hsl(40 33% 94%)`), Burgundy primary (`hsl(353 42% 32%)`), Gold secondary (`hsl(40 47% 56%)`)

### Canvas (`artifacts/mockup-sandbox`)
- Local design prototyping sandbox.

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm --filter @workspace/armo-wine run dev` — run ARMO wine site locally
- `pnpm --filter @workspace/armo-wine run build` — build static site for production

See the `pnpm-workspace` skill for workspace structure.
