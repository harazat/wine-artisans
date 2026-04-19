# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### ARMO Wine (`artifacts/armo-wine`)
- **Type**: React + Vite (frontend-only, no backend)
- **Preview path**: `/`
- **Description**: Premium, minimal single-page website for ARMO boutique wine brand
- **Sections**: Hero, About, Story, Product Specs, Gallery, Journal, Footer
- **Features**: Framer Motion scroll animations, Google Fonts (Cormorant Garamond, DM Sans, Great Vibes), AI-generated wine bottle images, warm parchment theme with burgundy + gold accents
- **Colors**: Parchment background (`hsl(40 33% 94%)`), Burgundy primary (`hsl(353 42% 32%)`), Gold secondary (`hsl(40 47% 56%)`)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally
- `pnpm --filter @workspace/armo-wine run dev` — run ARMO wine site locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
