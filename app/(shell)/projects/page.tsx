import ProjectCard from "@/components/ui/ProjectCard";
import { PROJECTS } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <div className="max-w-3xl px-4 py-6">
      <p className="mb-4 text-xs text-comment">{"// projects/ — expand a file for details"}</p>
      {PROJECTS.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
