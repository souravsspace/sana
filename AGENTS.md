# AGENTS.md

This file outlines the development guidelines and commands for agentic coding agents operating within this repository.

## 1. Build, Lint, and Test Commands

- **Build:** `vite build`
- **Lint:** `biome lint`
- **Test:** `vitest run`
- **Single Test:** `vitest run <path/to/test/file>`

## 2. Code Style Guidelines

- **Imports:** Organize imports alphabetically.
- **Formatting:** Use Biome for code formatting.
- **Types:** Utilize TypeScript for static typing.
- **Naming Conventions:**
  - Variables and functions: camelCase
  - Components: PascalCase
  - Constants: SCREAMING_SNAKE_CASE
- **Error Handling:** Implement robust error handling using try-catch blocks and appropriate error types.
- **General:** Follow the existing patterns and conventions established in the codebase.
