"use client";

import { useRef, useState } from "react";
import type { Project } from "@/types";
import ProjectCard from "./ProjectCard";

interface ProjectSliderProps {
  projects: Project[];
}

export default function ProjectSlider({ projects }: ProjectSliderProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToCard = (index: number) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const card = scroller.children.item(index) as HTMLElement | null;
    card?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    setActiveIndex(index);
  };

  const scrollByDirection = (direction: "previous" | "next") => {
    const nextIndex =
      direction === "next"
        ? Math.min(activeIndex + 1, projects.length - 1)
        : Math.max(activeIndex - 1, 0);

    scrollToCard(nextIndex);
  };

  if (projects.length === 0) {
    return null;
  }

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-accent-hover)]">
            Project showcase
          </p>
          <p className="mt-1 text-sm text-slate-500">
            Browse selected web, AI, full-stack, and interactive projects.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-bold tabular-nums text-slate-500">
            {String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </span>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollByDirection("previous")}
              disabled={activeIndex === 0}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-colors hover:border-slate-900 hover:text-slate-950 disabled:cursor-not-allowed disabled:opacity-35"
              aria-label="Previous project"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollByDirection("next")}
              disabled={activeIndex === projects.length - 1}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-colors hover:border-slate-900 hover:text-slate-950 disabled:cursor-not-allowed disabled:opacity-35"
              aria-label="Next project"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="-mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-[82vw] shrink-0 snap-start sm:w-[430px] lg:w-[460px]"
          >
            <ProjectCard project={project} compact />
          </div>
        ))}
      </div>

      <div className="mt-3 flex gap-2">
        {projects.map((project, index) => (
          <button
            key={project.id}
            type="button"
            onClick={() => scrollToCard(index)}
            className={`h-1.5 rounded-full transition-all ${
              activeIndex === index ? "w-10 bg-[var(--color-accent)]" : "w-4 bg-slate-200 hover:bg-slate-300"
            }`}
            aria-label={`Go to ${project.title}`}
          />
        ))}
      </div>
    </div>
  );
}
