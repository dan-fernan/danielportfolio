const EDUCATION = {
  title: "Queens College, CUNY",
  meta: "B.S. Computer Science · expected Dec 2027",
  detail:
    "Coursework in Cloud Computing, Operating Systems, Databases, Data Structures & Algorithms, Software Engineering, and Object-Oriented Programming.",
};

const EXPERIENCE = [
  {
    company: "Dow Jones & Company",
    role: "Software Engineer Intern — Wall Street Journal Web Brand",
    meta: "Jun 2026 – Aug 2026 · New York, NY",
    points: [
      "Lead a cross-functional intern team building an AI-powered testing harness, packaged as a Claude Skill, that maps cross-repo code dependencies and auto-generates self-healing Playwright e2e tests informed by Jira context.",
      "Merged production code to dynamically swap news buckets on the WSJ homepage, improving content delivery for millions of users.",
      "Patched a structural rendering issue within a shared component library, resolving a bug that injected duplicate HTML tags and ensuring correct semantic and SEO baseline compliance across multiple consuming products.",
    ],
  },
  {
    company: "CUNY Tech Prep",
    role: "Software Engineer Fellow — Web Dev Track",
    meta: "Jul 2025 – Jun 2026 · New York, NY",
    points: [
      "Developed an educational web app with React, Next.js, and Node.js tailored to boost college student productivity.",
      "Leveraged 15+ REST API endpoints to fetch and manage data for user-facing features.",
      "Worked in agile team workflows using Git/GitHub, code reviews, Scrum routines, and CI/CD practices.",
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
        full-stack products and real-time systems, most recently as an intern on the
        Wall Street Journal Web Brand team.
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
          <ul className="list-disc space-y-1.5 pl-[18px]">
            {job.points.map((point, i) => (
              <li key={i} className="font-sans text-[13px] leading-relaxed text-muted">
                {point}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
