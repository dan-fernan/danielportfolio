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
      "Built an AI testing harness using dependency graphs to evaluate PR blast radiuses, automatically authoring Jest unit tests for modified components and executing targeted Playwright E2E runs via MCP on affected routes to prevent visual regressions.",
      "Diagnosed a visual and behavioral regression in a core WSJ module caused by missing props in Next.js SSR data-fetching, delivering a working code fix and technical RFC for senior engineering integration into platform infrastructure.",
      "Resolved an SEO compliance defect across 3 site sections serving 4.1M+ subscribers by fixing a shared component library bug that injected duplicate h1 tags into the semantic DOM hierarchy.",
      "Delivered time-sensitive homepage and news bucket configuration changes on WSJ's production site, partnering with product to turn around layout updates on tight deadlines.",
    ],
  },
  {
    company: "CUNY Tech Prep",
    role: "Software Engineer Fellow — Web Dev Track",
    meta: "Jul 2025 – Jun 2026 · New York, NY",
    points: [
      <>
        Architected the PostgreSQL database for{" "}
        <Link href="/projects/maps" className="text-fn hover:underline">
          M.A.P.S.
        </Link>
        , a full-stack academic planning platform built for 2,000+ students,
        writing complex SQL joins and transactions to structure how course
        schedules and professor metrics were stored and accessed.
      </>,
      "Unblocked full-stack development for the 4-person team by engineering a Puppeteer scraping pipeline to ingest real-time course catalogs, exposing the data via 10+ Express REST API endpoints secured with Firebase Authentication.",
      "Directed the technical execution of the platform (React, Node.js), leading critical architectural decisions for data modification workflows and conducting code reviews to ensure scalable delivery of the core application.",
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
