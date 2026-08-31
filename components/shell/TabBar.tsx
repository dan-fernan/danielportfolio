"use client";

import { useState, type MouseEvent } from "react";
import { useRouter, usePathname } from "next/navigation";
import { X, FileText } from "lucide-react";
import { getFileByPath, type FileEntry } from "@/lib/files";

function resolveTabFile(path: string): FileEntry {
  const file = getFileByPath(path);
  if (file) return file;
  const segment = path.split("/").filter(Boolean).pop() ?? "index";
  return { id: path, label: segment, path, icon: FileText, color: "var(--color-muted)" };
}

export default function TabBar() {
  const pathname = usePathname();
  const router = useRouter();
  const [openTabs, setOpenTabs] = useState<string[]>(() => [pathname]);
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    if (!openTabs.includes(pathname)) {
      setOpenTabs((tabs) => [...tabs, pathname]);
    }
  }

  function closeTab(path: string, e: MouseEvent) {
    e.stopPropagation();
    const next = openTabs.filter((tab) => tab !== path);
    const remaining = next.length ? next : ["/"];
    setOpenTabs(remaining);
    if (pathname === path) {
      router.push(remaining[remaining.length - 1]);
    }
  }

  return (
    <div className="flex shrink-0 overflow-x-auto border-b border-border bg-tabs">
      {openTabs.map((path) => (
        <Tab
          key={path}
          file={resolveTabFile(path)}
          active={pathname === path}
          onClose={(e) => closeTab(path, e)}
        />
      ))}
    </div>
  );
}

function Tab({
  file,
  active,
  onClose,
}: {
  file: FileEntry;
  active: boolean;
  onClose: (e: MouseEvent) => void;
}) {
  const router = useRouter();
  const Icon = file.icon;

  return (
    <div
      onClick={() => router.push(file.path)}
      className={`group flex shrink-0 cursor-pointer items-center gap-1.5 border-r border-border border-t-2 py-2 pr-2.5 pl-3 ${
        active ? "border-t-keyword bg-editor" : "border-t-transparent"
      }`}
    >
      <Icon size={13} color={file.color} />
      <span className={`whitespace-nowrap text-xs ${active ? "text-heading" : "text-muted"}`}>
        {file.label}
      </span>
      <button
        onClick={onClose}
        className={`ml-0.5 flex ${active ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
      >
        <X size={12} color="var(--color-muted)" />
      </button>
    </div>
  );
}
