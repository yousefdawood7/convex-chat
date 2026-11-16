import type { RefObject } from "react";
import type { Message, User } from "../types/chat";
import { SentMessage } from "./sent-message";
import { ReceivedMessage } from "./received-message";

interface MessageListProps {
  messages: Message[];
  currentUserId: string;
  users: Record<string, User>;
  fallbackUser: User;
  messagesEndRef: RefObject<HTMLDivElement | null>;
}

export function MessageList({
  messages,
  currentUserId,
  users,
  fallbackUser,
  messagesEndRef,
}: MessageListProps) {
  return (
    <main className="flex-1 overflow-y-auto px-5 py-4 space-y-4 bg-slate-50/50">
      <div className="flex items-center justify-center my-2">
        <span className="px-3 py-1 rounded-full text-[11px] font-medium text-slate-400 bg-white border border-slate-200/60 shadow-2xs">
          Today
        </span>
      </div>

      {messages.map((message) => {
        const isMe = message.senderId === currentUserId;
        const sender = users[message.senderId] || fallbackUser;

        if (isMe) {
          return <SentMessage key={message.id} message={message} />;
        }

        return (
          <ReceivedMessage
            key={message.id}
            message={message}
            sender={sender}
          />
        );
      })}

      <div ref={messagesEndRef} />
    </main>
  );
}
