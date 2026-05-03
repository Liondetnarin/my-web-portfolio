import type { Metadata } from "next";
import Link from "next/link";
import ProjectSlider from "@/components/ProjectSlider";
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

// Main target for featured layout
const featuredProject = projects.find((p) => p.title === "AI Voice Assistant");
const otherProjects = projects.filter((p) => p.title !== "AI Voice Assistant");

const heroTechTags = [
  { name: "Next.js", icon: "/images/icon-svg/nextjs-fill-svgrepo-com.svg" },
  { name: "React", icon: "/images/icon-svg/react-svgrepo-com.svg" },
  { name: "TypeScript", icon: "/images/icon-svg/typescript-svgrepo-com.svg" },
  { name: "Python", icon: "/images/icon-svg/python-svgrepo-com.svg" },
  { name: "Node.js", icon: "/images/icon-svg/node-svgrepo-com.svg" },
];

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
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">
            {/* Left: Text Content */}
            <div>
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

              {/* Tech Tags with Icons */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                {heroTechTags.map((tech) => (
                  <span
                    key={tech.name}
                    className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-sm font-medium text-[var(--color-text)] shadow-sm"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[var(--color-cream)] p-1">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={tech.icon}
                        alt=""
                        className="h-full w-full object-contain"
                        aria-hidden="true"
                      />
                    </span>
                    {tech.name}
                  </span>
                ))}
              </div>

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
                  { label: "Award", value: "1" },
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

            {/* Right: Profile Image Placeholder */}
            <div className="relative mx-auto lg:mx-0">
              <div className="relative h-64 w-64 sm:h-80 sm:w-80 overflow-hidden rounded-full border-4 border-[var(--color-border)] shadow-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/img-profile.png"
                  alt={`${personalInfo.name} profile photo`}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-2 -z-10 rounded-full border-2 border-[var(--color-accent)]/20" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Project ── */}
      {featuredProject && (
        <section id="projects" className="border-b border-[var(--color-border)] bg-[var(--color-cream)]">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <h2 className="mb-10 text-3xl font-bold tracking-tight text-[var(--color-text)]">
              Featured Work
            </h2>
            <article className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-md transition-shadow hover:shadow-lg">
              <div className="flex flex-col md:grid md:grid-cols-2">
                {/* Image Placeholder */}
                <div className="relative aspect-video md:aspect-[4/3] w-full bg-[#f4f2ec] border-b md:border-b-0 md:border-r border-[var(--color-border)]">
                  {featuredProject.imageUrl ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={featuredProject.imageUrl}
                      alt={`${featuredProject.title} preview`}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <span className="text-sm font-medium text-[var(--color-muted)]">
                        No Preview Available
                      </span>
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <div className="flex flex-col justify-center p-8 lg:p-12">
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-[var(--color-accent)]/10 px-3 py-1 text-xs font-semibold text-[var(--color-accent)]">
                      Featured
                    </span>
                    <span className="rounded-full bg-[var(--color-border)] px-3 py-1 text-xs font-medium text-[var(--color-text)]">
                      Internship Project
                    </span>
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-[var(--color-text)]">
                    {featuredProject.title}
                  </h3>
                  <p className="mb-6 text-base leading-relaxed text-[var(--color-muted)]">
                    {featuredProject.description}
                  </p>
                  
                  <div className="mb-8 flex flex-wrap gap-2">
                    {featuredProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-[var(--color-cream)] border border-[var(--color-border)] px-2.5 py-1 text-xs font-medium text-[var(--color-muted)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className="flex items-center gap-6 mt-auto">
                    <a
                      href={featuredProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)]"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
                      GitHub Repo
                    </a>
                    {featuredProject.demoUrl && (
                      <a
                        href={featuredProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] transition-opacity hover:opacity-70"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
      )}

      {/* ── Other Projects ── */}
      <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="text-2xl font-bold text-[var(--color-text)]">
              Other Projects
            </h2>
            <Link
              href="/projects"
              className="text-sm font-medium text-[var(--color-accent)] transition-opacity hover:opacity-70"
            >
              View all →
            </Link>
          </div>

          {/* Slider showing 2 projects at a time */}
          <ProjectSlider projects={otherProjects} visibleCount={2} />
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

          <div className="grid gap-8 sm:grid-cols-2">
            {skillCategories.map((category) => {
              const iconPathMap: Record<string, string> = {
                "HTML":           "/images/icon-svg/html-5-svgrepo-com.svg",
                "CSS":            "/images/icon-svg/css-3-svgrepo-com.svg",
                "JavaScript":     "/images/icon-svg/javascript-svgrepo-com.svg",
                "TypeScript":     "/images/icon-svg/typescript-svgrepo-com.svg",
                "React":          "/images/icon-svg/react-svgrepo-com.svg",
                "Next.js":        "/images/icon-svg/nextjs-fill-svgrepo-com.svg",
                "Tailwind CSS":   "/images/icon-svg/tailwind-svgrepo-com.svg",
                "Node.js":        "/images/icon-svg/node-svgrepo-com.svg",
                "Python":         "/images/icon-svg/python-svgrepo-com.svg",
                "Java":           "/images/icon-svg/java-svgrepo-com.svg",
                "MongoDB":        "/images/icon-svg/mongodb-svgrepo-com.svg",
                "Git":            "/images/icon-svg/git-svgrepo-com.svg",
                "C#":             "/images/icon-svg/csharp-svgrepo-com.svg",
                "MySQL":          "/images/icon-svg/mysql-logo-svgrepo-com.svg",
                "Supabase":       "/images/icon-svg/supabase-icon.svg",
                "Figma":          "/images/icon-svg/figma-svgrepo-com.svg",
              };
              return (
                <div
                  key={category.name}
                  className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm"
                >
                  <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-[var(--color-muted)]">
                    {category.name}
                  </h3>
                  <div className="grid grid-cols-4 gap-4">
                    {category.skills.map((skill) => {
                      const src = iconPathMap[skill] ?? `/images/skills/${skill.toLowerCase().replace(/[^a-z0-9]/g, "-")}.svg`;
                      return (
                        <div key={skill} className="flex flex-col items-center gap-2">
                          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-cream)] p-1.5">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={src}
                              alt={skill}
                              width={36}
                              height={36}
                              className="h-full w-full object-contain"
                            />
                          </div>
                          <span className="text-center text-[10px] font-medium leading-tight text-[var(--color-muted)]">
                            {skill}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── About & Experience ── */}
      <section id="about" className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
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
                    <span className="absolute -left-[25px] flex h-4 w-4 items-center justify-center rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-surface)]" />

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

      {/* ── Contact ── */}
      <section id="contact" className="bg-[var(--color-cream)]">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <header className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text)]">
              Get In Touch
            </h2>
            <p className="mt-2 max-w-xl mx-auto text-base text-[var(--color-muted)]">
              Have a project in mind or want to collaborate? Reach out through any of these channels.
            </p>
          </header>

          {/* Social Links Grid */}
          <div className="grid gap-4 sm:grid-cols-3 max-w-3xl mx-auto">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={
                  link.href.startsWith("mailto")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="flex flex-col items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
                aria-label={link.label}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-accent-light)] text-[var(--color-accent)]">
                  {link.icon}
                </span>
                <div className="text-center">
                  <p className="text-sm font-semibold text-[var(--color-text)]">
                    {link.label}
                  </p>
                  <p className="mt-0.5 text-xs text-[var(--color-muted)]">
                    {link.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Additional Note */}
          <p className="mt-10 text-center text-sm text-[var(--color-muted)]">
            I typically respond within 24 hours.
          </p>
        </div>
      </section>
    </>
  );
}
