import type { FormEvent, KeyboardEvent } from "react";
import { Send, Paperclip, Smile } from "lucide-react";

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (e?: FormEvent) => void;
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
}

export function ChatInput({
  value,
  onChange,
  onSubmit,
  onKeyDown,
}: ChatInputProps) {
  const hasContent = value.trim().length > 0;

  return (
    <footer className="p-3 sm:p-4 bg-white border-t border-slate-100">
      <form
        onSubmit={onSubmit}
        className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition-all"
      >
        <button
          type="button"
          className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-200/50 transition-colors cursor-pointer"
          title="Attach file"
        >
          <Paperclip className="w-4 h-4" />
        </button>
        <button
          type="button"
          className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-200/50 transition-colors cursor-pointer"
          title="Insert emoji"
        >
          <Smile className="w-4 h-4" />
        </button>

        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Type a message..."
          className="flex-1 bg-transparent border-none text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden py-1.5"
        />

        <button
          type="submit"
          disabled={!hasContent}
          className={`p-2 rounded-lg flex items-center justify-center transition-all cursor-pointer ${
            hasContent
              ? "bg-blue-600 hover:bg-blue-700 text-white shadow-xs active:scale-95"
              : "bg-slate-200 text-slate-400 cursor-not-allowed"
          }`}
          title="Send message"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>

      <div className="flex justify-between items-center mt-2 px-1 text-[11px] text-slate-400">
        <span>
          Press{" "}
          <kbd className="font-sans px-1 py-0.5 bg-slate-100 border border-slate-200 rounded text-[10px]">
            Enter ↵
          </kbd>{" "}
          to send
        </span>
      </div>
    </footer>
  );
}
