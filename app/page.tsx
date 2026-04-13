import type { Metadata } from "next";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";
import { personalInfo, projects, experiences, skillCategories } from "@/lib/data";

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

const socialLinks = [
  {
    label: "Email",
    href: `mailto:${personalInfo.email}`,
    value: personalInfo.email,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: personalInfo.github,
    value: "github.com/Liondetnarin",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: personalInfo.linkedin,
    value: "linkedin.com/in/detnarin-chaiaksorn",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

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
            <a
              id="cta-contact"
              href="#contact"
              className="inline-flex rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-3 text-sm font-semibold text-[var(--color-text)] shadow-sm transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              Contact Me
            </a>
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

      {/* ── About & Experience ── */}
      <section id="about" className="border-b border-[var(--color-border)] bg-[var(--color-cream)]">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-[var(--color-text)]">About Me</h2>
              <p className="text-base leading-relaxed text-[var(--color-muted)]">
                I am deeply passionate about building scalable, maintainable, and user-friendly software. 
                Whether creating seamless web applications or optimizing back-end systems, I focus on delivering clean code and solving real-world problems. 
                Constantly learning and adapting to new technologies.
              </p>
            </div>
            
            {/* Experience Timeline */}
            <div>
              <h3 className="mb-6 text-xl font-bold text-[var(--color-text)]">Experience</h3>
              <ol className="relative space-y-8 border-l border-[var(--color-border)] pl-6">
                {experiences.map((exp, i) => (
                  <li key={i} className="relative">
                    {/* Timeline dot */}
                    <span className="absolute -left-[25px] flex h-4 w-4 items-center justify-center rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-cream)]" />

                    <article>
                      <div className="flex flex-wrap items-baseline gap-2">
                        <h4 className="text-base font-semibold text-[var(--color-text)]">
                          {exp.role}
                        </h4>
                        <span className="text-sm text-[var(--color-accent)]">
                          @ {exp.company}
                        </span>
                      </div>
                      <time className="mt-0.5 block text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">
                        {exp.period}
                      </time>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                        {exp.description}
                      </p>
                    </article>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold text-[var(--color-text)]">
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

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section id="skills" className="border-b border-[var(--color-border)] bg-[var(--color-cream)]">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text)]">
              Core Skills & Tools
            </h2>
            <p className="mt-2 text-base text-[var(--color-muted)]">
              Technologies I regularly work with to bring ideas to life.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {skillCategories.map((category) => (
              <div
                key={category.name}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-cream)] text-[var(--color-accent)]">
                  {/* Standard generic icon depending on string matches */}
                  {category.name === "Frontend" && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 22 22 22"></polygon></svg>
                  )}
                  {category.name === "Backend" && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
                  )}
                  {category.name === "Database" && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a9 9 0 0 0 9 9 9 9 0 0 0-9 9 9 9 0 0 0-9-9 9 9 0 0 0 9-9Z"></path></svg>
                  )}
                  {category.name === "Tools" && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                  )}
                </div>
                <h3 className="mb-4 text-base font-semibold text-[var(--color-text)]">
                  {category.name}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm font-medium text-[var(--color-muted)]"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="bg-[var(--color-surface)]">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <header className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text)]">
              Get In Touch
            </h2>
            <p className="mt-2 max-w-xl text-base text-[var(--color-muted)]">
              Have a project in mind or want to collaborate? Send me a message and
              I&apos;ll get back to you within 24 hours.
            </p>
          </header>

          <div className="grid gap-12 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Social Links */}
            <aside className="lg:col-span-2">
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-[var(--color-muted)]">
                Other ways to reach me
              </h3>
              <ul className="space-y-4">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("mailto") ? undefined : "_blank"}
                      rel={
                        link.href.startsWith("mailto")
                          ? undefined
                          : "noopener noreferrer"
                      }
                      className="flex items-center gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-cream)] p-4 shadow-sm transition-shadow hover:shadow-md"
                      aria-label={link.label}
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-accent-light)] text-[var(--color-accent)]">
                        {link.icon}
                      </span>
                      <div>
                        <p className="text-sm font-medium text-[var(--color-text)]">
                          {link.label}
                        </p>
                        <p className="text-xs text-[var(--color-muted)]">
                          {link.value}
                        </p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
