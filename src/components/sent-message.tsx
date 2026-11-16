import { CheckCheck } from "lucide-react";
import type { Message } from "../types/chat";

interface SentMessageProps {
  message: Message;
}

export function SentMessage({ message }: SentMessageProps) {
  return (
    <div className="flex items-end justify-end gap-2.5">
      <div className="group relative max-w-[78%] sm:max-w-[70%] flex flex-col items-end">
        <div className="px-4 py-2.5 text-sm rounded-2xl shadow-xs bg-blue-600 text-white rounded-br-xs selection:bg-blue-800">
          <p className="leading-relaxed wrap-break-word whitespace-pre-wrap">
            {message.text}
          </p>
        </div>

        <div className="flex items-center gap-1 mt-1 px-1">
          <span className="text-[11px] text-slate-400">
            {message.timestamp}
          </span>
          <CheckCheck className="w-3.5 h-3.5 text-blue-500" />
        </div>
      </div>
    </div>
  );
}
