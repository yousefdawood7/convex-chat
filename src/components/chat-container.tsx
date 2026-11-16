import type { KeyboardEvent, RefObject } from "react";
import type { Doc } from "../../convex/_generated/dataModel";
import { ChatHeader } from "./chat-header";
import { ChatInput } from "./chat-input";
import { MessageList } from "./message-list";

interface ChatContainerProps {
  senderUser: Doc<"users"> | undefined;
  recieverUser: Doc<"users"> | undefined;
  messages: Doc<"messages">[] | undefined;
  messagesEndRef: RefObject<HTMLDivElement | null>;
  inputText: string;
  onInputTextChange: (text: string) => void;
  onSendMessage: (e?: React.SubmitEvent) => void;
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
}

export function ChatContainer({
  senderUser,
  recieverUser,
  messages,
  messagesEndRef,
  inputText,
  onInputTextChange,
  onSendMessage,
  onKeyDown,
}: ChatContainerProps) {
  return (
    <div className="w-full max-w-2xl h-[650px] bg-white rounded-2xl shadow-sm border border-slate-200/80 flex flex-col overflow-hidden">
      <ChatHeader recieverUser={recieverUser} />
      <MessageList
        senderUser={senderUser}
        recieverUser={recieverUser}
        messages={messages}
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
