import { notFound } from "next/navigation";
import ProjectCard from "@/components/ui/ProjectCard";
import { getProject } from "@/lib/projects";

export default function CodejamPage() {
  const project = getProject("codejam");
  if (!project) notFound();

  return (
    <div className="max-w-3xl px-4 py-6">
      <ProjectCard project={project} defaultExpanded />
    </div>
  );
}
