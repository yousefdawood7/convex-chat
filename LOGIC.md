# Workshop Architecture & Logic Guide

This project follows the **workshop-structure** guidelines:
- Every component is in kebab-case, in its own file, and under 80 lines.
- Logic and state live exclusively inside custom hooks under `src/hooks/`.
- Mock data lives under `src/data/`.
- Helpers live under `src/lib/`.
- Distinct message bubble layouts (`SentMessage` vs `ReceivedMessage`) are separate components, avoiding boolean prop branching.

---

## Folder Map

```text
src/
├── components/
│   ├── chat-container.tsx    # Frame composing header, message feed, and input
│   ├── chat-header.tsx       # Conversation partner status & actions
│   ├── chat-input.tsx        # Input bar, buttons, and send triggers
│   ├── message-list.tsx      # Scrollable feed composing sent & received messages
│   ├── received-message.tsx  # Left-aligned message bubble with avatar
│   ├── sent-message.tsx      # Right-aligned message bubble with delivery checks
│   └── user-switcher.tsx     # Dev toolbar for switching preview perspective
├── data/
│   └── mock-chat.ts          # Sample users and initial messages
├── hooks/
│   └── use-chat.ts           # State, perspective switching, and message handlers
├── lib/
│   ├── convex.ts             # Convex client initialization
│   └── format-time.ts        # Time string helper
├── types/
│   └── chat.ts               # User and Message TypeScript interfaces
└── App.tsx                   # Top-level composition page
```

---

## Workshop Logic TODOs

Logic insertion points for students/instructors:

1. **[`src/hooks/use-chat.ts`](file:///G:/Projects_To_Deploy/convex-chat/src/hooks/use-chat.ts)**:
   * `// TODO(workshop): Replace mock messages state with Convex query:`
     Connect real-time subscription using `useQuery(api.messages.list)`.
   * `// TODO(workshop): Replace with Convex mutation:`
     Connect message dispatch using `useMutation(api.messages.send)`.
