import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types";

export default function ProjectCard({ project, compact = false }: { project: Project; compact?: boolean }) {
  const visibleTech = project.techStack.slice(0, compact ? 3 : 4);
  const hiddenTechCount = project.techStack.length - visibleTech.length;
  const category = project.category === "fullstack" ? "Full-Stack" : project.category[0].toUpperCase() + project.category.slice(1);
  return <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] transition-all duration-200 hover:-translate-y-1 hover:border-[var(--color-border-strong)] hover:shadow-xl max-sm:hover:translate-y-0">
    <Link href={`/projects/${project.slug}`} data-project-slug={project.slug} className="relative block aspect-[16/9] overflow-hidden bg-[var(--color-dark)]" aria-label={`View details for ${project.title}`}>
      {project.imageUrl ? <Image src={project.imageUrl} alt={`${project.title} preview`} fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" /> : <div className="flex h-full items-center justify-center text-5xl font-black text-white">{project.title.slice(0, 2).toUpperCase()}</div>}
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/55 to-transparent" />
      <div className="absolute left-3 top-3 flex flex-wrap gap-1.5"><span className="rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold text-slate-900">{project.badge ?? "Project"}</span><span className="rounded-full bg-emerald-400 px-2.5 py-1 text-[10px] font-black text-emerald-950">{category}</span></div>
    </Link>
    <div className="flex flex-1 flex-col p-4 sm:p-5">
      <div className="mb-4"><Link href={`/projects/${project.slug}`} data-project-slug={project.slug} className="text-lg font-bold tracking-tight text-[var(--color-text)] hover:text-[var(--color-accent-hover)]">{project.title}</Link><p className={`mt-2 text-sm leading-6 text-[var(--color-muted)] ${compact ? "line-clamp-2" : "min-h-[3rem]"}`}>{project.summary}</p></div>
      {!compact ? <p className="mb-4 text-sm leading-6 text-[var(--color-muted)]">{project.contribution}</p> : null}
      <div className="mt-auto flex flex-wrap gap-2">{visibleTech.map((tech) => <span key={tech} className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface-soft)] px-2.5 py-1 text-[11px] font-semibold text-[var(--color-muted)]">{tech}</span>)}{hiddenTechCount > 0 ? <span className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface-soft)] px-2.5 py-1 text-[11px] font-semibold text-[var(--color-muted)]">+{hiddenTechCount}</span> : null}</div>
      <div className="mt-5 flex items-center border-t border-[var(--color-border)] pt-4"><Link href={`/projects/${project.slug}`} data-project-slug={project.slug} className="inline-flex items-center rounded-md border border-emerald-500 bg-emerald-400 px-3 py-2 text-xs font-black text-emerald-950 hover:bg-emerald-300">View details</Link>{project.demoUrl ? <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="ml-auto text-xs font-bold text-[var(--color-accent-hover)] hover:underline">{project.category === "game" ? "Play demo" : "Visit website"} ↗</a> : null}</div>
    </div>
  </article>;
}
