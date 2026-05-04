"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import type { Project, ProjectCategory } from "@/types";

type FilterOption = "all" | ProjectCategory;

const FILTERS: { label: string; value: FilterOption }[] = [
  { label: "All", value: "all" },
  { label: "Web", value: "web" },
  { label: "AI", value: "ai" },
  { label: "Full-Stack", value: "fullstack" },
  { label: "Mobile", value: "mobile" },
  { label: "Game", value: "game" },
];

interface ProjectFilterProps {
  projects: Project[];
}

export default function ProjectFilter({ projects }: ProjectFilterProps) {
  const [active, setActive] = useState<FilterOption>("all");

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      {/* Filter Buttons */}
      <div className="mb-8 rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
      <div
          role="group"
          aria-label="Filter projects by category"
          className="flex flex-wrap gap-2"
        >
        {FILTERS.map((f) => (
          <button
            key={f.value}
            id={`filter-${f.value}`}
            onClick={() => setActive(f.value)}
            className={`rounded-lg px-4 py-2 text-sm font-bold capitalize transition-all ${
              active === f.value
                ? "bg-slate-950 text-white shadow-sm"
                : "text-slate-500 hover:bg-slate-100 hover:text-slate-950"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>
      </div>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-12 text-center text-sm text-[var(--color-muted)]">
          No projects in this category yet.
        </p>
      )}
    </div>
  );
}
