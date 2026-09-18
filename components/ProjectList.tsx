import ProjectCard from "./ProjectCard";
import ProjectListMobile from "./ProjectListMobile";
import type { Project } from "@/types";

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  if (projects.length === 0) {
    return null;
  }

  return (
    <section aria-label="Project list">
      <div className="mb-8 sm:mb-10">
        <div className="max-w-xl">
          <p className="section-label mb-3 text-xs font-black uppercase tracking-[0.18em] text-[var(--color-accent-hover)]">
            Project showcase
          </p>
          <h2 className="text-3xl font-black tracking-tight text-[var(--color-text)] sm:text-4xl">
            Projects
          </h2>
          <p className="mt-3 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
            Web, AI, full-stack, and interactive projects.
          </p>
        </div>

      </div>

      <ProjectListMobile projects={projects} />

      <ul className="hidden list-none gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li key={project.id} className="h-full">
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
}
