import type { FormEvent, KeyboardEvent, RefObject } from "react";
import type { Message, User } from "../types/chat";
import { ChatHeader } from "./chat-header";
import { MessageList } from "./message-list";
import { ChatInput } from "./chat-input";

interface ChatContainerProps {
  otherUser: User;
  currentUser: User;
  currentUserId: string;
  users: Record<string, User>;
  messages: Message[];
  messagesEndRef: RefObject<HTMLDivElement | null>;
  inputText: string;
  onInputTextChange: (text: string) => void;
  onSendMessage: (e?: FormEvent) => void;
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
}

export function ChatContainer({
  otherUser,
  currentUser,
  currentUserId,
  users,
  messages,
  messagesEndRef,
  inputText,
  onInputTextChange,
  onSendMessage,
  onKeyDown,
}: ChatContainerProps) {
  return (
    <div className="w-full max-w-2xl h-[650px] bg-white rounded-2xl shadow-sm border border-slate-200/80 flex flex-col overflow-hidden">
      <ChatHeader user={otherUser} />
      <MessageList
        messages={messages}
        currentUserId={currentUserId}
        users={users}
        fallbackUser={currentUser}
        messagesEndRef={messagesEndRef}
      />
      <ChatInput
        value={inputText}
        onChange={onInputTextChange}
        onSubmit={onSendMessage}
        onKeyDown={onKeyDown}
      />
    </div>
  );
}
