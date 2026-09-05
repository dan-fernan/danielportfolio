"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, ChevronRight, TerminalSquare } from "lucide-react";

const WELCOME = ["daniel@portfolio ~ % welcome", "Type 'help' to see available commands."];

export default function Terminal() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [lines, setLines] = useState<string[]>(WELCOME);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "nearest" });
  }, [lines]);

  function runCommand(raw: string) {
    const cmd = raw.trim();
    if (!cmd) return;
    const echo = (output: string[]) =>
      setLines((prev) => [...prev, `daniel@portfolio ~ % ${cmd}`, ...output]);
    const lower = cmd.toLowerCase();

    if (lower === "help") {
      echo([
        "Available commands:",
        "  help        show this list",
        "  experience  open experience.md",
        "  projects    open projects",
        "  resume      open resume.pdf",
        "  contact     open contact.tsx",
        "  whoami      print current user",
        "  clear       clear the terminal",
      ]);
    } else if (lower === "experience") {
      router.push("/experience");
      echo(["Opening experience.md ..."]);
    } else if (lower === "projects" || lower === "ls" || lower === "ls projects") {
      router.push("/projects");
      echo(["codejam.tsx   codeburrow.py"]);
    } else if (lower === "resume") {
      router.push("/resume");
      echo(["Opening resume.pdf ..."]);
    } else if (lower === "contact") {
      router.push("/contact");
      echo(["Opening contact.tsx ..."]);
    } else if (lower === "whoami") {
      echo(["daniel — CS junior @ Queens College, CUNY. Building full-stack products and real-time systems."]);
    } else if (lower === "clear") {
      setLines([]);
      setInput("");
      return;
    } else if (lower === "sudo make me a sandwich" || lower === "sudo make-me-a-sandwich") {
      echo(["Nice try. Permission denied — this terminal only serves portfolios."]);
    } else {
      echo([`command not found: ${cmd}`, "type 'help' for a list of commands"]);
    }
    setInput("");
  }

  return (
    <div className="shrink-0 border-t border-border bg-terminal">
      <div
        onClick={() => setOpen((o) => !o)}
        className={`flex cursor-pointer items-center gap-1.5 px-3 py-1.5 ${
          open ? "border-b border-border" : ""
        }`}
      >
        <TerminalSquare size={13} color="var(--color-muted)" />
        <span className="text-[11px] tracking-widest text-muted">TERMINAL</span>
        <span className="ml-auto">
          {open ? (
            <ChevronDown size={13} color="var(--color-muted)" />
          ) : (
            <ChevronRight size={13} color="var(--color-muted)" />
          )}
        </span>
      </div>

      {open && (
        <div
          onClick={() => inputRef.current?.focus()}
          className="h-40 cursor-text overflow-y-auto px-3 py-2"
        >
          {lines.map((line, i) => (
            <div
              key={i}
              className={`whitespace-pre-wrap text-xs leading-6 ${
                line.startsWith("daniel@portfolio") ? "text-type" : "text-primary"
              }`}
            >
              {line}
            </div>
          ))}
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-type">daniel@portfolio ~ %</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") runCommand(input);
              }}
              autoFocus
              className="flex-1 border-none bg-transparent text-xs text-primary outline-none"
            />
          </div>
          <div ref={endRef} />
        </div>
      )}
    </div>
  );
}
