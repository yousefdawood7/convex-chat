import { Loader2 } from "lucide-react";
import type { RefObject } from "react";
import type { Doc } from "../../convex/_generated/dataModel";
import { ReceivedMessage } from "./received-message";
import { SentMessage } from "./sent-message";

interface MessageListProps {
  senderUser: Doc<"users"> | undefined;
  recieverUser: Doc<"users"> | undefined;
  messages: Doc<"messages">[] | undefined;
  messagesEndRef: RefObject<HTMLDivElement | null>;
}

export function MessageList({
  senderUser,
  recieverUser,
  messages,
  messagesEndRef,
}: MessageListProps) {
  return (
    <main className="flex-1 overflow-y-auto px-5 py-4 space-y-4 bg-slate-50/50">
      <div className="flex items-center justify-center my-2">
        <span className="px-3 py-1 rounded-full text-[11px] font-medium text-slate-400 bg-white border border-slate-200/60 shadow-2xs">
          Today
        </span>
      </div>

      {!senderUser || !recieverUser || !messages ? (
        <Loader2 size={15} className="animate-spin" />
      ) : (
        <>
          {messages.map((message) => {
            const isMe = message.sender_id === senderUser._id;

            if (isMe) {
              return <SentMessage key={message._id} message={message} />;
            }

            return (
              <ReceivedMessage
                key={message._id}
                message={message}
                sender={senderUser}
              />
            );
          })}

          <div ref={messagesEndRef} />
        </>
      )}
    </main>
  );
}
