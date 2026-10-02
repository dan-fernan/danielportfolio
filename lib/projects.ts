export type Project = {
  id: string;
  filename: string;
  title: string;
  description: string;
  why: string;
  stack: string[];
  points: string[];
  github: string;
};

export const PROJECTS: Project[] = [
  {
    id: "codejam",
    filename: "codejam.tsx",
    title: "real-time collaborative code editor",
    description:
      "A self-hosted, real-time collaborative code editor with sandboxed code execution — built to explore CRDT-based sync and container orchestration end to end.",
    why:
      "I started this while helping a friend prep for technical interviews. We couldn't find an environment where we could actually collaborate on code and compile it together in the same editor, so I built one.",
    stack: ["React", "TypeScript", "Monaco", "Spring Boot", "Docker", "Yjs (CRDT)"],
    points: [
      "Engineering a real-time collaborative code editor with zero document conflicts by architecting a split backend, utilizing Node for native JavaScript Yjs CRDT synchronization and Spring Boot (Java) for durable persistence.",
      "Optimized PostgreSQL database load for live documents by designing a write-back persistence model that uses shared in-flight promises to deduplicate cache misses and debounce timers for state flushing.",
      "Secured untrusted code execution while capping worst-case server compute by orchestrating network-isolated, memory-capped Docker sandboxes managed through a bounded Java thread pool.",
      "Delivered anonymous session tracking for collaborative code workspaces using server-issued HttpOnly cookies and idempotent database upserts, allowing users to retain history without forced authentication.",
    ],
    github: "https://github.com/dan-fernan/codejam",
  },
  {
    id: "maps",
    filename: "maps.tsx",
    title: "academic planning platform for CUNY students",
    description:
      "A full-stack academic planning platform built to scale for roughly 2,000 Queens College CS undergraduates, centralizing course mapping, professor ratings, and schedule creation around live CUNY course data.",
    why:
      "I got tired of bouncing between three different sources to plan a semester: CUNYfirst for building a schedule, RateMyProfessors for professor ratings, and the Queens College CS site for a course map. MAPS combines all three into one platform, built as a personal project with a small team.",
    stack: ["React", "Node.js", "Express", "PostgreSQL", "Firebase", "Puppeteer", "D3.js"],
    points: [
      "Live course data, ingested via a Puppeteer pipeline against CUNY Global Search and served through 10+ Express REST endpoints, powers a custom professor rating system and a Course Picker that ranks professors highest to lowest.",
      "Schedule Builder with automatic conflict checks, plus a D3-driven major progress map visualizing prerequisites and completed courses, backed by a PostgreSQL schema using SQL joins and transactions.",
      "Firebase Authentication secures user-scoped login across a custom pixel-art UI; led development across the 4-person team, from data modeling and code reviews to deployment.",
    ],
    github: "https://github.com/Wilson1009/MAPS",
  },
  {
    id: "codeburrow",
    filename: "codeburrow.py",
    title: "hybrid code search CLI",
    description:
      "A pip-installable CLI that fuses classic keyword search with semantic embeddings to find code the way you actually think about it.",
    why:
      "I kept hunting for small pieces of code across large codebases and keyword search alone wasn't cutting it. AI tools could find it, but at a real cost in tokens for something a cheaper, purpose-built tool could do instead. So I built my own: chunking code, indexing it as vector embeddings, and combining semantic search with keyword matching to find what I was actually looking for.",
    stack: ["Python", "tree-sitter", "Voyage AI", "ChromaDB", "Git"],
    points: [
      "Built a pip-installable hybrid code search CLI that improves retrieval relevance over standard baselines by fusing BM25 keyword search and Voyage AI embeddings via Reciprocal Rank Fusion.",
      "Increased embedding precision by designing a tree-sitter AST parsing pipeline that chunks multi-language source code (Python, JavaScript, TypeScript) strictly at the function and class levels.",
      "Eliminated redundant indexing overhead by implementing a git-aware post-commit hook that incrementally re-embeds only modified files while safely extending existing repository hooks.",
    ],
    github: "https://github.com/dan-fernan/codeburrow",
  },
];

export function getProject(id: string): Project | undefined {
  return PROJECTS.find((project) => project.id === id);
}
