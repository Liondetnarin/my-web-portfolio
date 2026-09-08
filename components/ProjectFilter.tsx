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
      <div className="mb-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-2 shadow-sm">
        <div
          role="group"
          aria-label="Filter projects by category"
          className="flex flex-wrap gap-2"
        >
          {FILTERS.map((filter) => {
            const count =
              filter.value === "all"
                ? projects.length
                : projects.filter((project) => project.category === filter.value).length;

            return (
              <button
                key={filter.value}
                id={`filter-${filter.value}`}
                type="button"
                onClick={() => setActive(filter.value)}
                className={`rounded-lg px-4 py-2 text-sm font-bold transition-all ${
                  active === filter.value
                    ? "bg-[var(--color-text)] text-[var(--color-surface)] shadow-sm"
                    : "text-[var(--color-muted)] hover:bg-[var(--color-surface-soft)] hover:text-[var(--color-text)]"
                }`}
              >
                {filter.label}
                <span className={active === filter.value ? "ml-2 opacity-70" : "ml-2 text-[var(--color-muted)]"}>
                  {count}
                </span>
              </button>
            );
          })}
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
