---
name: workshop-structure
description: Use when building or refactoring React/Next.js UI for the workshop. Keeps components small, split into separate files, and beginner-readable.
---

# Workshop code structure

- One component per file, named after the component (ChatMessage.tsx).
- A component over ~80 lines must be split into smaller components.
- Folder layout: components/ (UI pieces), hooks/ (logic), lib/ (helpers), data/ (mock data).
- Put state and logic in custom hooks (useMessages.ts), not inside UI components.
- Never use a boolean prop to switch between two layouts; make two components.
- No giant page files: a page only composes components.
- Simple code with short comments. No clever abstractions.
- Mark logic for students with // TODO(workshop): comments.
