import { useState, useRef, useEffect } from "react";
import type { Message, User } from "../types/chat";
import { USERS, INITIAL_MESSAGES } from "../data/mock-chat";
import { formatCurrentTime } from "../lib/format-time";

export function useChat() {
  // Current active preview user perspective
  const [currentUserId, setCurrentUserId] = useState<string>("user1");

  // TODO(workshop): Replace mock messages state with Convex query:
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);

  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const currentUser: User = USERS[currentUserId];
  const otherUser: User =
    currentUserId === "user1" ? USERS["user2"] : USERS["user1"];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // TODO(workshop): Replace this with useSyncExternalStore
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const switchPerspective = () => {
    setCurrentUserId((prev) => (prev === "user1" ? "user2" : "user1"));
  };

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputText.trim()) return;

    // TODO(workshop): Replace with Convex mutation:
    const newMessage: Message = {
      id: `m-${Date.now()}`,
      senderId: currentUserId,
      text: inputText.trim(),
      timestamp: formatCurrentTime(),
      status: "delivered",
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputText("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return {
    currentUserId,
    currentUser,
    otherUser,
    messages,
    inputText,
    messagesEndRef,
    setInputText,
    switchPerspective,
    handleSendMessage,
    handleKeyDown,
  };
}
