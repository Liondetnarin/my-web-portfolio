import type { Metadata } from "next";
import ProjectFilter from "@/components/ProjectFilter";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse Alex Chen's portfolio of full-stack, frontend, and backend projects built with React, Next.js, Node.js, and more.",
  openGraph: {
    title: "Projects | Alex Chen",
    description: "Browse Alex Chen's portfolio of web development projects.",
  },
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-[var(--color-text)]">
          Projects
        </h1>
        <p className="mt-2 text-base text-[var(--color-muted)]">
          A collection of things I&apos;ve built — filter by category.
        </p>
      </header>

      {/* ProjectFilter is a Client Component that renders ProjectCards */}
      <ProjectFilter projects={projects} />
    </div>
  );
}
