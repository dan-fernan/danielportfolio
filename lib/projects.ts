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
      "Built a real-time collaborative code editor (React, TypeScript, Monaco, Yjs) supporting simultaneous multi-user editing without conflicts or lost changes.",
      "Architected a Java backend that orchestrates Docker containers for sandboxed code execution, using multithreading, concurrent process management, and timeout handling to safely run untrusted code via a Spring Boot REST API.",
      "Designed a Spring Boot WebSocket service to relay real-time collaborative edits across all connected users, using a lightweight architecture that kept the system self-contained without adding extra backend infrastructure.",
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
    stack: ["React", "Node.js", "PostgreSQL", "Firebase", "D3.js"],
    points: [
      "Live course data scraped directly from CUNY Global Search powers a custom professor rating system and a Course Picker that ranks professors highest to lowest.",
      "Schedule Builder with automatic conflict checks, plus a D3-driven major progress map visualizing prerequisites and completed courses.",
      "Firebase Authentication secures user-scoped login across a custom pixel-art UI; led backend architecture and auth on a 4-person team.",
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
      "Built and packaged a pip-installable hybrid code search CLI, fusing BM25 keyword search with Voyage AI semantic embeddings via Reciprocal Rank Fusion to improve retrieval relevance over keyword or vector search alone.",
      "Designed a multi-language AST chunking pipeline with tree-sitter (Python, JavaScript, TypeScript/TSX), parsing source files into function- and class-level chunks for higher-precision embedding and retrieval.",
      "Implemented git-aware incremental indexing via a self-installing post-commit hook, re-embedding only changed files and safely extending a repo's existing hook interpreter (shell, Python, Node, Ruby).",
    ],
    github: "https://github.com/dan-fernan/codeburrow",
  },
];

export function getProject(id: string): Project | undefined {
  return PROJECTS.find((project) => project.id === id);
}
