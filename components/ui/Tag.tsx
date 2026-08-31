import type { ReactNode } from "react";

export default function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="mr-1.5 mb-1 inline-block rounded border border-border-light px-1.5 py-0.5 text-[11px] text-string">
      {children}
    </span>
  );
}
