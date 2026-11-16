<div align="center">

# 💬 Convex Chat

**A minimalist, high-craft 2-user chat interface designed for modern web apps and workshops.**  
_Built with React 19, Tailwind CSS v4, TypeScript, and Convex._

<br/>

[![React](https://img.shields.io/badge/React-19.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Convex](https://img.shields.io/badge/Convex-1.50-EE342F?style=for-the-badge&logo=convex&logoColor=white)](https://convex.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

<br/>

</div>

---

## ✨ Features

- ☀️ **Curated Light Mode** — Engineered with subtle slate tones (`slate-50` to `slate-100`), vibrant brand blue accents, and high-legibility system typography.
- 🔄 **Live Perspective Switcher** — Instant preview bar lets you toggle perspective between **Alex** (User 1) and **Sarah** (User 2) with zero reloads.
- 🧩 **Workshop-Grade Architecture** — Follows strict separation of concerns:
  - 📏 **Strict Line Cap**: Every component file is strictly under 70 lines (well below the 80-line workshop ceiling).
  - 📂 **Kebab-Case File Structure**: Clean, beginner-readable file tree.
  - 🚫 **No Layout Booleans**: Separate, dedicated [`SentMessage`](src/components/sent-message.tsx) and [`ReceivedMessage`](src/components/received-message.tsx) components.
- ⚡ **Zero-Lag Custom Hook** — All business logic and UI state encapsulated neatly inside [`use-chat.ts`](src/hooks/use-chat.ts).
- 🔌 **Convex Plug-and-Play** — Pre-annotated with `// TODO(workshop):` tags ready for live-coding real-time queries and mutations.

---

## 🏗️ Architecture & Folder Structure

```text
convex-chat/
├── LOGIC.md                       # Workshop lesson map & logic guide
├── src/
│   ├── App.tsx                    # Clean page orchestrator (< 40 lines)
│   ├── main.tsx                   # ConvexProvider & React 19 entry
│   ├── index.css                  # Tailwind CSS v4 imports
│   ├── components/                # Modular, single-responsibility UI (< 70 lines)
│   │   ├── chat-container.tsx     # Framing card composing Header, Feed, & Input
│   │   ├── chat-header.tsx        # Partner status, avatar badge & actions
│   │   ├── chat-input.tsx         # Text field, attachments, emoji & send button
│   │   ├── message-list.tsx       # Auto-scrolling feed & date dividers
│   │   ├── received-message.tsx   # Left-aligned partner bubble
│   │   ├── sent-message.tsx       # Right-aligned sender bubble with read receipts
│   │   └── user-switcher.tsx      # Top dev preview toolbar
│   ├── data/
│   │   └── mock-chat.ts           # Predefined users & seed messages
│   ├── hooks/
│   │   └── use-chat.ts            # State machine & action handlers
│   ├── lib/
│   │   ├── convex.ts              # Convex React client
│   │   └── format-time.ts         # Timestamp formatting utility
│   └── types/
│       └── chat.ts                # Strict TypeScript contracts (User, Message)
└── convex/                        # Backend real-time database functions
```

---

## 🚀 Quick Start

### 1. Clone & Install

```bash
# Clone the repository
git clone https://github.com/your-username/convex-chat.git
cd convex-chat

# Install dependencies with pnpm
pnpm install
```

### 2. Configure Environment

Create a `.env.local` file at the root:

```env
VITE_CONVEX_URL=https://your-deployment-url.convex.cloud
```

### 3. Run Development Server

```bash
pnpm run dev
```

> [!TIP]
> `pnpm run dev` starts both the Convex backend watcher and Vite dev server concurrently.

---

## 🛠️ Workshop Guide: Wiring the Backend

The UI is ready out of the box with zero runtime dependencies on mock servers. To wire up real-time sync with Convex:

### Step 1: Define Database Schema

In `convex/schema.ts`:

```typescript
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  messages: defineTable({
    senderId: v.string(),
    text: v.string(),
    timestamp: v.string(),
    status: v.optional(v.string()),
  }),
});
```

### Step 2: Add Convex Query & Mutation

In `convex/messages.ts`:

```typescript
import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  handler: async (ctx) => {
    return await ctx.db.query("messages").order("asc").collect();
  },
});

export const send = mutation({
  args: {
    senderId: v.string(),
    text: v.string(),
    timestamp: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("messages", { ...args, status: "sent" });
  },
});
```

### Step 3: Connect Hook

Open [`src/hooks/use-chat.ts`](src/hooks/use-chat.ts) and locate the `// TODO(workshop):` tags:

```typescript
// 1. Replace state with live subscription
const messages = useQuery(api.messages.list) ?? [];

// 2. Replace local state update with mutation
const sendMessageMutation = useMutation(api.messages.send);
await sendMessageMutation({
  senderId: currentUserId,
  text: inputText.trim(),
  timestamp: formatCurrentTime(),
});
```

See [`LOGIC.md`](LOGIC.md) for full instructor notes and file mappings.

---

## 📋 Quality Scripts

```bash
pnpm run build     # Type-check (tsc -b) & produce production bundle
pnpm run lint      # Run ESLint validation
pnpm run preview   # Preview production build locally
```

---

<div align="center">
Made with craft for developers & learners.
</div>
