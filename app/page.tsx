import type { Metadata } from "next";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { personalInfo, projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Detnarin Chaiaksorn — Full-Stack Developer",
  description:
    "Computer Science student & Full-Stack Developer. Experienced in React, Next.js, Python, and IoT systems.",
  openGraph: {
    title: "Detnarin Chaiaksorn — Full-Stack Developer",
    description:
      "Computer Science student & Full-Stack Developer. Experienced in React, Next.js, Python, and IoT systems.",
  },
};

const featuredProjects = projects.filter((p) => p.featured);

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
          <p className="mb-4 text-sm font-medium tracking-widest text-[var(--color-accent)] uppercase">
            CS Student @ UTCC
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-[var(--color-text)] sm:text-5xl lg:text-6xl">
            Hi, I&apos;m{" "}
            <span className="text-[var(--color-accent)]">
              {personalInfo.name}
            </span>
          </h1>
          <p className="mt-3 text-xl font-medium text-[var(--color-muted)] sm:text-2xl">
            {personalInfo.role}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--color-muted)]">
            {personalInfo.bio}
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              id="cta-view-projects"
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-80"
            >
              View Projects
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              id="cta-contact"
              href="/contact"
              className="inline-flex rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-3 text-sm font-semibold text-[var(--color-text)] shadow-sm transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              Contact Me
            </Link>
          </div>

          {/* Quick stats */}
          <div className="mt-14 flex flex-wrap gap-8">
            {[
              { label: "Internship", value: "1" },
              { label: "Projects", value: "6+" },
              { label: "Award Won", value: "1" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-[var(--color-text)]">
                  {stat.value}
                </p>
                <p className="text-sm text-[var(--color-muted)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-[var(--color-text)]">
              Featured Projects
            </h2>
            <p className="mt-1 text-sm text-[var(--color-muted)]">
              A selection of my recent work
            </p>
          </div>
          <Link
            href="/projects"
            className="text-sm font-medium text-[var(--color-accent)] transition-opacity hover:opacity-70"
          >
            View all →
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* ── CTA Strip ── */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center">
          <h2 className="text-2xl font-bold text-[var(--color-text)]">
            Let&apos;s build something together
          </h2>
          <p className="mt-3 text-sm text-[var(--color-muted)]">
            Have a project in mind? I&apos;d love to hear about it.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-lg bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-80"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
