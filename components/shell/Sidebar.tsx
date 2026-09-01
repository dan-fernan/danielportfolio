"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight, Folder, FolderOpen } from "lucide-react"
import { ROOT_FILES, PROJECT_FILES, RESUME_FILE, type FileEntry } from "@/lib/files";

 export default function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
    const pathname = usePathname();
    const [projectsOpen, setProjectsOpen] = useState(true);

    const [prevPathname, setPrevPathname] = useState(pathname);
    if (pathname !== prevPathname) {
      setPrevPathname(pathname);
      onClose();
    }

    return (
      <>
        {open && (
          <div
            onClick={onClose}
            className="fixed inset-0 z-30 bg-black/50 md:hidden"
          />
        )}
        <div
          className={`${open ? "fixed" : "hidden"} inset-y-0 left-0 z-40 w-[220px] shrink-0 overflow-y-auto border-r border-border bg-sidebar py-3.5 md:static md:z-auto md:block`}
        >
          <p className="px-4 pb-2.5 text-[11px] tracking-widest text-muted">EXPLORER</p>

          <div className="px-2">
            <p className="px-2 py-1 text-xs font-semibold text-primary">portfolio</p>

            {ROOT_FILES.map((file) => (
              <FileRow key={file.id} file={file} active={pathname === file.path} onNavigate={onClose} />
            ))}

            <button
              onClick={() => setProjectsOpen((o) => !o)}
              className="flex w-full items-center gap-1 rounded px-1.5 py-1 hover:bg-[#2A2D2E]"
            >
              {projectsOpen ? (
                <ChevronDown size={13} color="var(--color-muted)" />
              ) : (
                <ChevronRight size={13} color="var(--color-muted)" />
              )}
              {projectsOpen ? (
                <FolderOpen size={13} color="var(--color-fn)" />
              ) : (
                <Folder size={13} color="var(--color-fn)" />
              )}
              <span className="text-xs text-primary">projects</span>
            </button>

            {projectsOpen &&
              PROJECT_FILES.map((file) => (
                <FileRow key={file.id} file={file} active={pathname === file.path} indent onNavigate={onClose} />
              ))}

            <FileRow file={RESUME_FILE} active={pathname === RESUME_FILE.path} onNavigate={onClose} />
          </div>
        </div>
      </>
    );
}

function FileRow({
  file,
  active,
  indent = false,
  onNavigate,
}: {
  file: FileEntry;
  active: boolean;
  indent?: boolean;
  onNavigate: () => void;
}) {
    const Icon = file.icon;
    return (
        <Link
            href={file.path}
            onClick={onNavigate}
            className={`flex items-center gap-1.5 rounded py-1 pr-2 hover:bg-[#2A2D2E] ${
                indent ? "pl-9" : "pl-5"
            } ${active ? "bg-[#2A2D2E]" : ""}`}
        >
            <Icon size={13} color={file.color} />
            <span className="text-xs text-primary">{file.label}</span>
        </Link>
    )
}