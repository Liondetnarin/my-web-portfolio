import Link from "next/link";
import ProjectCard from "./ProjectCard";
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
      <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-xl">
          <p className="section-label mb-3 text-xs font-black uppercase tracking-[0.18em] text-[var(--color-accent-hover)]">
            Project showcase
          </p>
          <h2 className="text-3xl font-black tracking-tight text-[var(--color-text)] sm:text-4xl">
            Selected work
          </h2>
          <p className="mt-3 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
            Web, AI, full-stack, and interactive projects.
          </p>
        </div>

        <Link
          href="/projects"
          className="inline-flex w-fit rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2.5 text-xs font-bold text-[var(--color-subtle)] transition-colors duration-200 hover:border-[var(--color-text)] hover:text-[var(--color-text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
        >
          View all projects
        </Link>
      </div>

      <ul className="grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li key={project.id} className="h-full">
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
}
