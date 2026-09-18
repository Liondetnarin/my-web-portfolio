import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types";
import { projectImages } from "@/lib/project-images";

export default function ProjectDetails({ project, modal = false }: { project: Project; modal?: boolean }) {
  return <article className="mx-auto w-full max-w-[760px]">
    <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-2xl">
      {project.imageUrl ? (
        <Image
          src={projectImages[project.imageUrl] ?? project.imageUrl}
          alt={`${project.title} preview`}
          width={projectImages[project.imageUrl]?.width ?? 760}
          height={projectImages[project.imageUrl]?.height ?? 400}
          className="block h-auto w-full"
          sizes="(max-width: 800px) calc(100vw - 24px), 760px"
          priority
        />
      ) : null}
      <div className="flex min-h-0 flex-col p-4 sm:p-5">
        <div className="space-y-2"><p className="text-[10px] font-black uppercase tracking-[0.16em] text-[var(--color-accent-hover)]">{project.badge ?? "Project"}</p><h1 className="text-2xl font-black tracking-tight text-[var(--color-text)] sm:text-[28px]">{project.title}</h1><p className="text-sm leading-6 text-[var(--color-muted)]">{project.description}</p></div>
        <div className="my-3 grid gap-3"><section><h2 className="text-xs font-black uppercase tracking-[0.13em] text-[var(--color-subtle)]">My contribution</h2><p className="mt-1.5 text-sm leading-6 text-[var(--color-muted)]">{project.contribution}</p></section><section><h2 className="text-xs font-black uppercase tracking-[0.13em] text-[var(--color-subtle)]">Technologies</h2><ul className="mt-2 flex flex-wrap gap-1.5">{project.techStack.map((tech) => <li key={tech} className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface-soft)] px-2.5 py-1 text-[11px] font-semibold text-[var(--color-muted)]">{tech}</li>)}</ul></section></div>
        <div className="mt-auto flex flex-wrap gap-2 border-t border-[var(--color-border)] pt-4">{project.demoUrl ? <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="rounded-md bg-emerald-400 px-3 py-2 text-xs font-black text-emerald-950 hover:bg-emerald-300">{project.category === "game" ? "Play demo" : "Visit website"}</a> : null}{project.youtubeUrl ? <a href={project.youtubeUrl} target="_blank" rel="noopener noreferrer" className="rounded-md border border-red-300/50 px-3 py-2 text-xs font-bold text-red-600 dark:text-red-300">Watch video</a> : null}{project.canvaUrl ? <a href={project.canvaUrl} target="_blank" rel="noopener noreferrer" className="rounded-md border border-violet-300/50 px-3 py-2 text-xs font-bold text-violet-700 dark:text-violet-300">Presentation</a> : null}{project.githubUrl ? <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="rounded-md border border-[var(--color-border-strong)] px-3 py-2 text-xs font-bold text-[var(--color-subtle)]">Source code</a> : null}</div>
        {!modal ? <Link href="/projects" className="mt-3 inline-block text-xs font-bold text-[var(--color-accent-hover)] underline underline-offset-4">Back to all projects</Link> : null}
      </div>
    </div>
  </article>;
}
