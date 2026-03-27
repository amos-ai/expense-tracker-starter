# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install      # install dependencies
npm run dev      # start dev server at http://localhost:5173
npm run build    # production build
npm run preview  # preview production build
npm run lint     # run ESLint
```

No test runner is configured.

## Architecture

This is a single-component React app (Vite + React 19). All state and logic live in [src/App.jsx](src/App.jsx) — there are no sub-components, custom hooks, or external state management.

**Known intentional issues (part of a course exercise):**
- Bug: `amount` is stored as a string, so `totalIncome` and `totalExpenses` use string concatenation instead of numeric addition.
- Transaction item 4 ("Freelance Work") is typed as `"expense"` but categorized as `"salary"` — inconsistent seed data.
- No delete functionality on transactions.
- All logic is monolithic inside `App`.
