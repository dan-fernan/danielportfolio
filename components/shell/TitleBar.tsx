import { Menu } from "lucide-react";

export default function TitleBar({ onToggleSidebar }: { onToggleSidebar: () => void }) {
    return (
      <div className="flex h-[30px] shrink-0 items-center bg-titlebar px-3">
        <div className="flex gap-1.5">
          <div className="h-[11px] w-[11px] rounded-full bg-[#FF5F56]" />
          <div className="h-[11px] w-[11px] rounded-full bg-[#FFBD2E]" />
          <div className="h-[11px] w-[11px] rounded-full bg-[#27C93F]" />
        </div>
        <p className="flex-1 text-center text-xs text-muted">
          daniel-fernandez — portfolio
        </p>
        <button
          onClick={onToggleSidebar}
          aria-label="Toggle sidebar"
          className="flex w-[52px] items-center justify-end md:hidden"
        >
          <Menu size={16} color="var(--color-muted)" />
        </button>
        <div className="hidden w-[52px] md:block" />
      </div>
    );
}
