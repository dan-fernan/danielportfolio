import Link from "next/link";
import { Code2, Link2, Mail } from "lucide-react";

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
        <span className="text-fn">focus</span>: <span className="text-string">&quot;full-stack, real-time systems, dev tooling, UX/UI&quot;</span>,
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
          what I build lives at that intersection: real-time systems, dev tooling, and
          full-stack apps that are reliable to run and genuinely enjoyable to use.
        </p>
        <p className="mt-3 font-sans text-[15px] leading-relaxed text-primary">
          I&apos;m always looking to grow as a developer. Open a file on the left, type{" "}
          <code className="text-fn">help</code> in the terminal below, or{" "}
          <Link href="/contact" className="text-fn hover:underline">
            reach out
          </Link>
          .
        </p>
      </div>

      <div className="mt-5 flex gap-4">
        <a
          href="mailto:danielfernandez.ny@gmail.com"
          className="flex items-center gap-1.5 text-xs text-muted"
        >
          <Mail size={14} /> contact
        </a>
        <a
          href="https://github.com/dan-fernan"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 text-xs text-muted"
        >
          <Code2 size={14} /> github
        </a>
        <a
          href="https://linkedin.com/in/dan-fernan"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 text-xs text-muted"
        >
          <Link2 size={14} /> linkedin
        </a>
      </div>
    </div>
  );
}
