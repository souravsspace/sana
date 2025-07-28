# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Commands

- **Development server**: `pnpm dev` (runs on port 3000)
- **Build**: `pnpm build`
- **Production preview**: `pnpm serve`
- **Test**: `pnpm test` (uses Vitest)

### Code Quality

- **Lint**: `pnpm lint` (Biome)
- **Format**: `pnpm format` (Biome)
- **Check**: `pnpm check` (Biome lint + format)

### Database Commands

- **Generate migrations**: `pnpm db:generate`
- **Push schema changes**: `pnpm db:push`
- **Database studio**: `pnpm db:studio`
- **Run migrations**: `pnpm db:migrate`

## Architecture Overview

This is a modern full-stack React application built with the TanStack ecosystem:

### Core Stack

- **Framework**: TanStack Start (React meta-framework with SSR)
- **Routing**: TanStack Router (file-based routing in `src/routes/`)
- **State Management**: TanStack Query for server state
- **Database**: SQLite with Drizzle ORM
- **Authentication**: better-auth with GitHub/Google OAuth
- **Styling**: Tailwind CSS v4 with shadcn/ui components
- **Type Safety**: TypeScript with T3 Env for environment variables

### Key Integrations

- **tRPC**: Type-safe API layer (`src/integrations/trpc/`)
- **Auth**: better-auth setup in `src/integrations/better-auth/`
- **Query**: TanStack Query provider in `src/integrations/tanstack-query/`

### Project Structure

- **Routes**: File-based routing in `src/routes/` with `__root.tsx` as layout
- **Components**: UI components in `src/components/` (marketing, auth, ui)
- **Database**: Schema and migrations in `src/db/`
- **Environment**: Type-safe env vars in `src/env.ts`
- **Theming**: Dark/light mode with `src/providers/ThemeProvider.tsx`

### Authentication Flow

- Uses better-auth with Drizzle adapter
- OAuth providers: GitHub and Google
- Database tables: user, session, account, verification
- Auth routes handled via `src/routes/api.auth.$.ts`

### Development Patterns

- File-based routing with route groups (`_authed/`, `_non_authed/`)
- Component composition with Radix UI primitives
- Type-safe environment variables with T3 Env
- Database-first development with Drizzle schema
- Route-level data loading with TanStack Router loaders

## Code Style

- Uses Biome for linting and formatting (tab indentation, double quotes)
- Import organization enabled
- Path aliases configured (`@/*` maps to `src/*`)
- Follows existing component patterns and shadcn/ui conventions

