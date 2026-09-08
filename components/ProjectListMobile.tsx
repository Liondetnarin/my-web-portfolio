"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import type { Project } from "@/types";

interface ProjectListMobileProps {
  projects: Project[];
}

export default function ProjectListMobile({ projects }: ProjectListMobileProps) {
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToCard = useCallback((index: number) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const slide = scroller.children.item(index) as HTMLElement | null;
    slide?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller || projects.length === 0) return;

    const slides = Array.from(scroller.children) as HTMLElement[];
    const ratios = new Map<number, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = slides.indexOf(entry.target as HTMLElement);
          if (index >= 0) ratios.set(index, entry.intersectionRatio);
        });

        let bestIndex = 0;
        let bestRatio = 0;
        ratios.forEach((ratio, index) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestIndex = index;
          }
        });

        if (bestRatio > 0) setActiveIndex(bestIndex);
      },
      { root: scroller, threshold: 0.6 },
    );

    slides.forEach((slide) => observer.observe(slide));
    return () => observer.disconnect();
  }, [projects.length]);

  return (
    <div className="md:hidden">
      <ul
        ref={scrollerRef}
        aria-label="Project slides"
        className="list-none flex snap-x snap-mandatory overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((project, index) => (
          <li
            key={project.id}
            id={`project-slide-${project.id}`}
            className="h-full w-full shrink-0 basis-full snap-center snap-always"
            aria-label={`${index + 1} of ${projects.length}: ${project.title}`}
          >
            <ProjectCard project={project} compact />
          </li>
        ))}
      </ul>

      <div
        className="mt-4 flex items-center justify-center gap-2"
        role="tablist"
        aria-label="Project slide indicators"
      >
        {projects.map((project, index) => (
          <button
            key={project.id}
            type="button"
            role="tab"
            aria-selected={activeIndex === index}
            aria-controls={`project-slide-${project.id}`}
            onClick={() => scrollToCard(index)}
            className={`rounded-full transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] ${
              activeIndex === index
                ? "h-2 w-8 bg-[var(--color-accent)]"
                : "h-2 w-2 bg-[var(--color-border-strong)] hover:bg-[var(--color-muted)]"
            }`}
            aria-label={`Go to ${project.title}`}
          />
        ))}
      </div>
    </div>
  );
}
