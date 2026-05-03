"use client";

import { useState, useCallback } from "react";
import type { Project } from "@/types";
import ProjectCard from "./ProjectCard";

interface ProjectSliderProps {
  projects: Project[];
  visibleCount?: number;
}

export default function ProjectSlider({ projects, visibleCount = 2 }: ProjectSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const totalProjects = projects.length;

  const goTo = useCallback((index: number) => {
    setVisible(false);
    setTimeout(() => {
      setCurrentIndex(index);
      setVisible(true);
    }, 180);
  }, []);

  const nextSlide = () => goTo((currentIndex + 1) % totalProjects);
  const prevSlide = () => goTo((currentIndex - 1 + totalProjects) % totalProjects);

  const getVisibleProjects = () => {
    const result = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % totalProjects;
      result.push({ project: projects[index], key: `${projects[index].id}-${index}` });
    }
    return result;
  };

  if (totalProjects <= visibleCount) {
    return (
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    );
  }

  const endIndex = Math.min(currentIndex + visibleCount, totalProjects);

  return (
    <div className="relative">
      {/* Slide counter */}
      <p className="mb-4 text-xs font-medium text-[var(--color-muted)]">
        Showing {currentIndex + 1}–{endIndex} of {totalProjects}
      </p>

      {/* Cards with fade transition */}
      <div
        className="grid gap-6 md:grid-cols-2"
        style={{ opacity: visible ? 1 : 0, transition: "opacity 180ms ease" }}
      >
        {getVisibleProjects().map(({ project, key }) => (
          <ProjectCard key={key} project={project} />
        ))}
      </div>

      {/* Navigation */}
      <div className="mt-6 flex items-center justify-between">
        {/* Dots */}
        <div className="flex gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`h-2 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? "w-6 bg-[var(--color-accent)]"
                  : "w-2 bg-[var(--color-border)] hover:bg-[var(--color-muted)]"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        {/* Arrow buttons */}
        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            aria-label="Previous projects"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            aria-label="Next projects"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
