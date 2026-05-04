import type { Metadata } from "next";
import ProjectFilter from "@/components/ProjectFilter";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse Detnarin Chaiaksorn's portfolio of web, AI, mobile, game, and full-stack projects.",
  openGraph: {
    title: "Projects | Detnarin Chaiaksorn",
    description:
      "Browse Detnarin Chaiaksorn's portfolio of practical software projects.",
  },
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <header className="mb-10 max-w-3xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-accent-hover)]">
          Project archive
        </p>
        <h1 className="text-4xl font-black tracking-tight text-[var(--color-text)] sm:text-5xl">
          Projects
        </h1>
        <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
          A focused collection of web apps, AI work, mobile interfaces, and game projects. Filter by category to see how each build fits the stack.
        </p>
      </header>

      {/* ProjectFilter is a Client Component that renders ProjectCards */}
      <ProjectFilter projects={projects} />
    </div>
  );
}
