import type { Message, User } from "../types/chat";

interface ReceivedMessageProps {
  message: Message;
  sender: User;
}

export function ReceivedMessage({
  message,
  sender,
}: ReceivedMessageProps) {
  return (
    <div className="flex items-end justify-start gap-2.5">
      <img
        src={sender.avatar}
        alt={sender.name}
        className="w-7 h-7 rounded-full object-cover shrink-0 mb-1 ring-1 ring-slate-200"
      />

      <div className="group relative max-w-[78%] sm:max-w-[70%] flex flex-col items-start">
        <div className="px-4 py-2.5 text-sm rounded-2xl shadow-xs bg-white text-slate-800 border border-slate-200/70 rounded-bl-xs">
          <p className="leading-relaxed break-words whitespace-pre-wrap">
            {message.text}
          </p>
        </div>

        <div className="flex items-center gap-1 mt-1 px-1">
          <span className="text-[11px] text-slate-400">
            {message.timestamp}
          </span>
        </div>
      </div>
    </div>
  );
}
