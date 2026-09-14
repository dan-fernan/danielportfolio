import Link from "next/link";

const EDUCATION = {
  title: "Queens College, CUNY",
  meta: "B.S. Computer Science · expected Dec 2027",
  detail:
    "Coursework in Cloud Computing, Operating Systems, Databases, Data Structures & Algorithms, Software Engineering, and Object-Oriented Programming.",
};

const EXPERIENCE = [
  {
    company: "Crcle",
    role: "Software Engineer Intern",
    meta: "Sep 2026 – Present · Remote",
    points: [],
  },
  {
    company: "Dow Jones & Company",
    role: "Software Engineer Intern — Wall Street Journal Web Brand",
    meta: "Jun 2026 – Aug 2026 · New York, NY",
    points: [
      "Led a cross-functional intern team to build an AI-powered testing harness — packaged as a Claude Skill — that maps cross-repo code dependencies and auto-generates Jest unit tests and Playwright e2e tests informed by Jira context.",
      "Patched a structural rendering issue within a shared component library, resolving a bug that injected duplicate HTML tags and ensuring correct semantic and SEO baseline compliance across 3 site sections.",
      "Root-caused a rendering bug in a WSJ content module, tracing missing props in Next.js SSR data-fetching to broken visual output and broken hyperlink behavior, and documented findings for senior engineering handoff.",
      "Merged production code to dynamically swap news buckets on the WSJ homepage, improving content delivery for 4.1M+ subscribers.",
    ],
  },
  {
    company: "CUNY Tech Prep",
    role: "Software Engineer Fellow — Web Dev Track",
    meta: "Jul 2025 – Jun 2026 · New York, NY",
    points: [
      <>
        Designed the relational data model and Figma wireframes for{" "}
        <Link href="/projects/maps" className="text-fn hover:underline">
          M.A.P.S.
        </Link>
        , a full-stack academic planning platform (React, Node.js, Express,
        PostgreSQL) built to scale for 2,000+ Queens College undergraduates,
        centralizing course mapping, professor metrics, and schedule creation.
      </>,
      "Built a Puppeteer-based scraping pipeline to source real-time course data and implemented 10+ REST API endpoints — including database transactions and fallback logic — alongside Firebase Authentication and core React frontend pages.",
      "Led development for a 4-person team, assigning tasks, reviewing team members' work, and directing key technical decisions within an Agile fellowship structured around Scrum routines, sprint cycles, and Git/GitHub workflows.",
    ],
  },
  {
    company: "Google x BASTA",
    role: "Software Engineer Mentee",
    meta: "Feb 2026 – May 2026 · Remote",
    points: [
      "Selected for the Google Software Engineering Mentorship Program through BASTA, participating in weekly 1:1 mentorship with a Google engineer.",
      "Strengthened data structures, algorithms, and technical interview problem-solving skills through guided practice and technical workshops.",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <div className="max-w-2xl px-4 py-6">
      <p className="mb-5 text-xs text-comment">{"// experience.md — background & work history"}</p>

      <p className="mb-6 font-sans text-[14px] leading-relaxed text-primary">
        Full-stack developer and CS junior at Queens College, CUNY — building
        full-stack products and real-time systems, most recently as a Software
        Engineer Intern at Crcle, an AI startup, after previously interning on the
        Wall Street Journal Web Brand team at Dow Jones.
      </p>

      <div className="mb-6 border-l-2 border-border-light pl-3.5">
        <div className="font-sans text-[15px] font-semibold text-heading">{EDUCATION.title}</div>
        <div className="my-1.5 text-[11.5px] text-type">{EDUCATION.meta}</div>
        <p className="font-sans text-[13px] leading-relaxed text-muted">{EDUCATION.detail}</p>
      </div>

      {EXPERIENCE.map((job) => (
        <div key={job.company} className="mb-6 border-l-2 border-border-light pl-3.5">
          <div className="font-sans text-[15px] font-semibold text-heading">{job.company}</div>
          <div className="font-sans text-[13px] text-primary">{job.role}</div>
          <div className="my-1.5 text-[11.5px] text-type">{job.meta}</div>
          {job.points.length > 0 && (
            <ul className="list-disc space-y-1.5 pl-[18px]">
              {job.points.map((point, i) => (
                <li key={i} className="font-sans text-[13px] leading-relaxed text-muted">
                  {point}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
