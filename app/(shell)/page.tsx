import Link from "next/link";
import { Code2, FileText, Link2, Mail } from "lucide-react";

const CODE_LINES: { n: number; content: React.ReactNode }[] = [
  { n: 1, content: <span className="text-comment">{"// portfolio/home.md"}</span> },
  { n: 2, content: null },
  {
    n: 3,
    content: (
      <>
        <span className="text-keyword">const</span> <span className="text-blue">developer</span> = {"{"}
      </>
    ),
  },
  {
    n: 4,
    content: (
      <>
        {"  "}
        <span className="text-fn">name</span>: <span className="text-string">&quot;Daniel Fernandez&quot;</span>,
      </>
    ),
  },
  {
    n: 5,
    content: (
      <>
        {"  "}
        <span className="text-fn">role</span>:{" "}
        <span className="text-string">&quot;CS Junior @ Queens College, CUNY&quot;</span>,
      </>
    ),
  },
  {
    n: 6,
    content: (
      <>
        {"  "}
        <span className="text-fn">focus</span>: <span className="text-string">&quot;full-stack development, real-time systems&quot;</span>,
      </>
    ),
  },
  { n: 7, content: "};" },
];

export default function HomePage() {
  return (
    <div className="px-4 py-6">
      <div className="mb-2">
        {CODE_LINES.map(({ n, content }) => (
          <div key={n} className="flex min-h-[22px]">
            <span className="w-10 shrink-0 select-none pr-4 text-right text-xs text-[#4B4B4B]">
              {n}
            </span>
            <div className="flex-1 text-[13px]">{content}</div>
          </div>
        ))}
      </div>

      <div className="max-w-xl py-4">
        <p className="mb-4 font-sans text-[13px] text-muted">
          Prev SWE Intern @ Dow Jones · Computer Science Junior @ Queens College · CUNY
          Tech Prep Fellow · Full-Stack Developer
        </p>
        <p className="font-sans text-[15px] leading-relaxed text-primary">
          I&apos;m a junior studying Computer Science at Queens College, CUNY.
          I&apos;m drawn to the creative side of development — finding solutions that
          are efficient under the hood, but also intuitive and user-focused. Most of
          what I build sits at the intersection of full-stack product work and
          real-time systems: a CRDT-based collaborative code editor and a hybrid
          code search CLI.
        </p>

        <div className="mt-4 rounded border-l-2 border-fn/60 bg-tabs/40 py-2 pl-3.5">
          <p className="font-sans text-[13px] leading-relaxed text-primary">
            <span className="font-semibold text-heading">Most recently:</span>{" "}
            Software Engineer Intern on the Wall Street Journal Web Brand team at
            Dow Jones, shipping production code read by millions. More in{" "}
            <Link href="/experience" className="text-fn hover:underline">
              experience.md
            </Link>
            .
          </p>
        </div>

        <p className="mt-3 font-sans text-[15px] leading-relaxed text-primary">
          I&apos;m always looking to grow as a developer. Open a file on the left, type{" "}
          <code className="text-fn">help</code> in the terminal below, or{" "}
          <Link href="/contact" className="text-fn hover:underline">
            reach out
          </Link>
          .
        </p>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-4">
        <Link
          href="/resume"
          className="flex items-center gap-1.5 rounded border border-border-light px-3 py-1.5 text-xs font-medium text-primary hover:bg-tabs"
        >
          <FileText size={14} /> view résumé
        </Link>
        <a
          href="mailto:danielfernandez.ny@gmail.com"
          className="flex items-center gap-1.5 text-xs text-fn hover:underline"
        >
          <Mail size={14} /> contact
        </a>
        <a
          href="https://github.com/dan-fernan"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 text-xs text-fn hover:underline"
        >
          <Code2 size={14} /> github
        </a>
        <a
          href="https://linkedin.com/in/dan-fernan"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 text-xs text-fn hover:underline"
        >
          <Link2 size={14} /> linkedin
        </a>
      </div>
    </div>
  );
}
