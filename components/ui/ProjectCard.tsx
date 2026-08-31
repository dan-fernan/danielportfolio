"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight, Code2, FileCode2 } from "lucide-react";
import Tag from "@/components/ui/Tag";
import type { Project } from "@/lib/projects";

export default function ProjectCard({
  project,
  defaultExpanded = false,
}: {
  project: Project;
  defaultExpanded?: boolean;
}) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <div className="mb-4 overflow-hidden rounded border border-border">
      <div className="flex items-center gap-2 bg-tabs px-3.5 py-2.5">
        <button
          onClick={() => setExpanded((e) => !e)}
          className="flex min-w-0 flex-1 items-center gap-2 text-left"
        >
          {expanded ? (
            <ChevronDown size={14} color="var(--color-muted)" />
          ) : (
            <ChevronRight size={14} color="var(--color-muted)" />
          )}
          <FileCode2 size={14} color="var(--color-blue)" />
          <span className="text-xs text-fn">{project.filename}</span>
          <span className="ml-auto truncate text-xs text-muted">{project.title}</span>
        </button>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="flex shrink-0 items-center gap-1 text-xs text-muted hover:text-primary"
        >
          <Code2 size={13} /> github
        </a>
      </div>

      {expanded && (
        <div className="bg-editor px-3.5 py-4">
          <p className="mb-3 font-sans text-[13.5px] leading-relaxed text-primary">
            {project.description}
          </p>
          <div className="mb-3">
            {project.stack.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>
          <ul className="list-disc space-y-1.5 pl-[18px]">
            {project.points.map((point, i) => (
              <li key={i} className="font-sans text-[13px] leading-relaxed text-muted">
                {point}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
