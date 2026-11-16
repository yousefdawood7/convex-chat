import { Loader2 } from "lucide-react";
import type { Doc } from "../../convex/_generated/dataModel";

interface ChatHeaderProps {
  recieverUser: Doc<"users"> | undefined;
}

export function ChatHeader({ recieverUser: user }: ChatHeaderProps) {
  return (
    <header className="px-5 py-3.5 border-b border-slate-100 bg-white/95 backdrop-blur-sm flex items-center justify-between z-10">
      <div className="flex items-center gap-3">
        {user ? (
          <>
            <div className="relative">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-10 h-10 rounded-full object-cover object-top ring-2 ring-slate-100"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full" />
            </div>

            <div>
              <h1 className="text-sm font-semibold text-slate-900 leading-tight">
                {user.name}
              </h1>
              <p className="text-xs text-slate-500 flex items-center gap-1">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Active now
              </p>
            </div>
          </>
        ) : (
          <Loader2 className="animate-spin" />
        )}
      </div>
    </header>
  );
}
