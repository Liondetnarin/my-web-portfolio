import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  compact?: boolean;
}

function getProjectInitials(title: string) {
  return title
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export default function ProjectCard({ project, compact = false }: ProjectCardProps) {
  const visibleTech = project.techStack.slice(0, compact ? 3 : 4);
  const hiddenTechCount = project.techStack.length - visibleTech.length;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl">
      <div className="relative aspect-[16/10] overflow-hidden bg-[var(--color-dark)]">
        {project.imageUrl ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={project.imageUrl}
            alt={`${project.title} preview`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_25%_20%,rgba(16,185,129,0.35),transparent_35%),linear-gradient(135deg,#0b1117,#1f2937)]">
            <span className="text-5xl font-black tracking-tight text-white/90">
              {getProjectInitials(project.title)}
            </span>
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/55 to-transparent" />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {project.badge && (
            <span className="rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-slate-900 shadow-sm">
              {project.badge}
            </span>
          )}
          <span className="rounded-full bg-emerald-400 px-3 py-1 text-[11px] font-black capitalize text-emerald-950 shadow-sm">
            {project.category}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3">
          <h3 className="text-lg font-bold tracking-tight text-slate-950 transition-colors group-hover:text-[var(--color-accent-hover)]">
            {project.title}
          </h3>
          <p className="mt-2 min-h-[3rem] text-sm leading-6 text-slate-600">
            {project.summary}
          </p>
        </div>

        {!compact && (
          <p className="mb-4 text-sm leading-6 text-slate-500">
            {project.contribution}
          </p>
        )}

        <div className="mt-auto flex flex-wrap gap-2">
          {visibleTech.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-600"
            >
              {tech}
            </span>
          ))}
          {hiddenTechCount > 0 && (
            <span className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-500">
              +{hiddenTechCount}
            </span>
          )}
        </div>

        <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 text-xs font-bold text-slate-700 transition-colors hover:border-slate-900 hover:text-slate-950"
            aria-label={`View ${project.title} source code on GitHub`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 .5A11.5 11.5 0 0 0 8.36 22.9c.58.1.79-.25.79-.56v-2c-3.22.7-3.9-1.38-3.9-1.38-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.78 1.2 1.78 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.57-.3-5.27-1.29-5.27-5.72 0-1.27.45-2.3 1.2-3.11-.12-.3-.52-1.47.11-3.06 0 0 .98-.31 3.19 1.19A11 11 0 0 1 12 6.08c.98 0 1.97.13 2.9.39 2.2-1.5 3.18-1.19 3.18-1.19.63 1.59.23 2.76.11 3.06.75.81 1.2 1.84 1.2 3.11 0 4.45-2.71 5.42-5.29 5.71.42.36.79 1.06.79 2.15v3.03c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
            </svg>
            Code
          </a>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-slate-950 px-3 py-2 text-xs font-bold text-white transition-colors hover:bg-[var(--color-accent-hover)]"
              aria-label={`View ${project.title} live demo`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M7 17 17 7" />
                <path d="M7 7h10v10" />
              </svg>
              Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
