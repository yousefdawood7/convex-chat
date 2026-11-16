---
name: teaching-moments
description: Use when building or reviewing workshop projects. Finds advanced components, hooks and patterns worth teaching, leaves them unimplemented for the instructor to live-code, and writes TEACHING.md.
---

# Teaching moments

The instructor wants to implement the interesting parts live. Your job
is to build everything else and protect those parts.

## What counts as a teaching moment
- Custom hooks that hold real logic (useDebounce, useMessages)
- Compound components and context (Tabs, Select, Modal)
- Optimistic updates, real-time subscriptions, loading/error states
- Forms with validation, search with debounce, pagination, infinite scroll
- Drag and drop, virtualized lists, keyboard shortcuts, focus management
- Anything a beginner would ask "how does that work?" about

## Rules
1. Do NOT implement teaching moments. Create the file with the exact
   props/signature, a stub body, and a // TODO(instructor): comment
   explaining what it should do.
2. The UI must still render with the stub (return mock or empty values).
3. Keep everything else fully built.
4. Create TEACHING.md listing each teaching moment with:
   - file path
   - why it is worth teaching (one sentence)
   - estimated live-coding time
   - difficulty: easy / medium / hard
   - the key concept students should leave with
5. Order the list so each moment builds on the previous one.
6. Aim for 3-5 teaching moments per project. If you find more, keep the
   top ones and implement the rest.
