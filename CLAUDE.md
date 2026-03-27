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

React 19 app (Vite). Component tree:

- `App` — holds the `transactions` array state and `categories` list; passes data and callbacks down
  - `Summary` — receives `transactions`, computes `totalIncome`, `totalExpenses`, and `balance` internally
  - `TransactionForm` — owns its own form field state; calls `onAdd(transaction)` on submit
  - `TransactionList` — owns filter state (`filterType`, `filterCategory`); renders filtered rows; passes `onDelete` to each row
    - `Transaction` — stateless row component rendering a single `<tr>` with a delete button

No routing, no global state management, no custom hooks.
