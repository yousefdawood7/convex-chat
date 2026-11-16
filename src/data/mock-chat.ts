import type { User, Message } from "../types/chat";

export const USERS: Record<string, User> = {
  user1: {
    id: "user1",
    name: "Alex Rivera",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    status: "online",
    role: "Product Designer",
  },
  user2: {
    id: "user2",
    name: "Sarah Chen",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    status: "online",
    role: "Frontend Engineer",
  },
};

export const INITIAL_MESSAGES: Message[] = [
  {
    id: "m-1",
    senderId: "user2",
    text: "Hey Alex! Did you get a chance to review the new UI specs?",
    timestamp: "10:14 AM",
    status: "read",
  },
  {
    id: "m-2",
    senderId: "user1",
    text: "Hey Sarah! Yes, just looked through them. The light mode palette and spacing feel super clean.",
    timestamp: "10:15 AM",
    status: "read",
  },
  {
    id: "m-3",
    senderId: "user2",
    text: "Awesome! I'm starting to wire up the real-time logic now. Keep this UI layout handy.",
    timestamp: "10:16 AM",
    status: "read",
  },
  {
    id: "m-4",
    senderId: "user1",
    text: "Sounds great! Ready whenever you are 🚀",
    timestamp: "10:17 AM",
    status: "read",
  },
];
