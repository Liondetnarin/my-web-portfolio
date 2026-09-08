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

function getCategoryLabel(category: Project["category"]) {
  const labels: Record<Project["category"], string> = {
    ai: "AI",
    web: "Web",
    mobile: "Mobile",
    game: "Game",
    fullstack: "Full-Stack",
  };

  return labels[category];
}

export default function ProjectCard({ project, compact = false }: ProjectCardProps) {
  const visibleTech = project.techStack.slice(0, compact ? 3 : 4);
  const hiddenTechCount = project.techStack.length - visibleTech.length;

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] transition-all duration-200 ${
        compact
          ? "hover:border-emerald-200"
          : "shadow-sm hover:-translate-y-1 hover:border-[var(--color-border-strong)] hover:shadow-xl max-sm:hover:translate-y-0"
      }`}
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-[var(--color-dark)]">
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
        <div className="absolute left-3 top-3 flex max-w-[calc(100%-1.5rem)] flex-wrap gap-1.5 sm:left-4 sm:top-4 sm:gap-2">
          {project.badge && (
            <span className="rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold text-slate-900 shadow-sm sm:px-3 sm:text-[11px]">
              {project.badge}
            </span>
          )}
          <span className="rounded-full bg-emerald-400 px-2.5 py-1 text-[10px] font-black text-emerald-950 shadow-sm sm:px-3 sm:text-[11px]">
            {getCategoryLabel(project.category)}
          </span>
        </div>
      </div>

      <div className={`flex flex-1 flex-col ${compact ? "p-4 sm:p-5" : "p-4 sm:p-5"}`}>
        <div className={compact ? "mb-4" : "mb-3"}>
          <h3 className="text-lg font-bold tracking-tight text-[var(--color-text)] transition-colors group-hover:text-[var(--color-accent-hover)]">
            {project.title}
          </h3>
          <p
            className={`mt-2 text-sm leading-6 text-[var(--color-muted)] ${
              compact ? "line-clamp-2" : "min-h-[3rem]"
            }`}
          >
            {project.summary}
          </p>
        </div>

        {!compact && (
          <p className="mb-4 text-sm leading-6 text-[var(--color-muted)]">
            {project.contribution}
          </p>
        )}

        <div className="mt-auto flex flex-wrap gap-2">
          {visibleTech.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface-soft)] px-2.5 py-1 text-[11px] font-semibold text-[var(--color-muted)]"
            >
              {tech}
            </span>
          ))}
          {hiddenTechCount > 0 && (
            <span className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface-soft)] px-2.5 py-1 text-[11px] font-semibold text-[var(--color-muted)]">
              +{hiddenTechCount}
            </span>
          )}
        </div>

        <div className={`flex items-center gap-2 border-t border-[var(--color-border)] pt-4 sm:gap-3 ${compact ? "mt-4" : "mt-5"}`}>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-[var(--color-border)] px-3 py-2 text-xs font-bold text-[var(--color-subtle)] transition-colors hover:border-[var(--color-text)] hover:text-[var(--color-text)]"
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
              className="inline-flex items-center gap-2 rounded-md border border-emerald-500 bg-emerald-400 px-3 py-2 text-xs font-black text-emerald-950 shadow-sm transition-colors hover:border-slate-950 hover:bg-slate-950 hover:text-white"
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
              View
            </a>
          )}
          {project.canvaUrl && (
            <a
              href={project.canvaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-violet-200 bg-violet-50 px-3 py-2 text-xs font-bold text-violet-700 transition-colors hover:border-violet-600 hover:bg-violet-600 hover:text-white dark:border-violet-400/30 dark:bg-violet-400/10 dark:text-violet-300"
              aria-label={`View ${project.title} presentation on Canva`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 50 50"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M25,2C12.317,2,2,12.317,2,25s10.317,23,23,23s23-10.317,23-23S37.683,2,25,2z M24.109,39.954 c-6.781,0-11.176-5.086-11.176-12.782c0-9.942,6.888-17.128,14.639-17.128c4.69,0,7.486,2.361,7.486,5.573 c0,3.313-2.395,5.658-4.436,5.658c-0.508,0-0.764-0.249-0.764-0.661c0-0.917,1.478-2.295,1.478-4.896 c0-2.192-1.338-3.569-3.53-3.569c-4.69,0-10.029,5.541-10.029,15.124c0,5.657,2.809,9.753,7.346,9.753 c3.924,0,7.314-2.816,9.277-6.797c0.174-0.35,0.341-0.51,0.531-0.51c0.275,0,0.538,0.236,0.538,0.75 C35.467,32.793,31.306,39.954,24.109,39.954z" />
              </svg>
              Canva
            </a>
          )}
          {project.youtubeUrl && (
            <a
              href={project.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-xs font-bold text-red-700 transition-colors hover:border-red-600 hover:bg-red-600 hover:text-white dark:border-red-400/30 dark:bg-red-400/10 dark:text-red-300"
              aria-label={`Watch ${project.title} on YouTube`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.75 15.02V8.98L15.5 12l-5.75 3.02Z" />
              </svg>
              YouTube
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
