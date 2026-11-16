import { UserCheck } from "lucide-react";

interface UserSwitcherProps {
  currentUserName: string;
  onSwitch: () => void;
}

export function UserSwitcher({ currentUserName, onSwitch }: UserSwitcherProps) {
  return (
    <div className="w-full max-w-2xl mb-3 flex items-center justify-between px-2 text-xs text-slate-500">
      <div className="flex items-center gap-1.5 font-medium">
        <UserCheck className="w-3.5 h-3.5 text-blue-600" />
        <span>Previewing as:</span>
        <button
          onClick={onSwitch}
          className="ml-1 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700 font-semibold shadow-xs hover:border-blue-400 hover:text-blue-600 transition-all cursor-pointer"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          {currentUserName} (Switch perspective)
        </button>
      </div>
    </div>
  );
}
