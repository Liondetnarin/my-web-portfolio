import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import ProjectList from "@/components/ProjectList";
import RevealOnScroll from "@/components/RevealOnScroll";
import {
  education,
  experienceAward,
  experiences,
  heroStats,
  languages,
  personalInfo,
  projects,
  skillCategories,
} from "@/lib/data";
import type { ExperienceImage } from "@/types";

export const metadata: Metadata = {
  title: "Detnarin Chaiaksorn - Software Developer",
  description:
    "Software Developer specializing in AI voice systems, vector databases, full-stack web apps, and interactive software projects.",
  openGraph: {
    title: "Detnarin Chaiaksorn - Software Developer",
    description:
      "Software Developer specializing in AI voice systems, vector databases, full-stack web apps, and interactive software projects.",
  },
};

const heroTechTags = [
  { name: "Next.js", icon: "/images/icon-svg/nextjs-fill-svgrepo-com.svg" },
  { name: "Python", icon: "/images/icon-svg/python-svgrepo-com.svg" },
  { name: "Spring Boot", icon: "/images/icon-svg/spring-boot-com.svg" },
  { name: "AI Agents", icon: "/images/skills/google-adk.svg" },
];

const skillIconPathMap: Record<string, string> = {
  HTML: "/images/icon-svg/html-5-svgrepo-com.svg",
  CSS: "/images/icon-svg/css-3-svgrepo-com.svg",
  JavaScript: "/images/icon-svg/javascript-svgrepo-com.svg",
  TypeScript: "/images/icon-svg/typescript-svgrepo-com.svg",
  React: "/images/icon-svg/react-svgrepo-com.svg",
  "Next.js": "/images/icon-svg/nextjs-fill-svgrepo-com.svg",
  "Tailwind CSS": "/images/icon-svg/tailwind-svgrepo-com.svg",
  "Node.js": "/images/icon-svg/node-svgrepo-com.svg",
  Python: "/images/icon-svg/python-svgrepo-com.svg",
  Java: "/images/icon-svg/java-svgrepo-com.svg",
  "Spring Boot": "/images/icon-svg/spring-boot-com.svg",
  "Next.js API Routes": "/images/icon-svg/nextjs-fill-svgrepo-com.svg",
  MongoDB: "/images/icon-svg/mongodb-svgrepo-com.svg",
  Git: "/images/icon-svg/git-svgrepo-com.svg",
  "C#": "/images/icon-svg/csharp-svgrepo-com.svg",
  MySQL: "/images/icon-svg/mysql-logo-svgrepo-com.svg",
  Supabase: "/images/icon-svg/supabase-icon.svg",
  Figma: "/images/icon-svg/figma-svgrepo-com.svg",
  "Google ADK": "/images/skills/google-adk.svg",
  Docker: "/images/icon-svg/docker-svgrepo-com.svg",
  Vercel: "/images/icon-svg/nextjs-fill-svgrepo-com.svg",
  "CI/CD": "/images/icon-svg/git-svgrepo-com.svg",
  "AI Agents": "/images/skills/google-adk.svg",
  "Prompt Engineering": "/images/skills/google-adk.svg",
  "Machine Learning": "/images/icon-svg/python-svgrepo-com.svg",
};

const socialLinks = [
  {
    label: "Email",
    href: `mailto:${personalInfo.email}`,
    value: personalInfo.email,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .5A11.5 11.5 0 0 0 8.36 22.9c.58.1.79-.25.79-.56v-2c-3.22.7-3.9-1.38-3.9-1.38-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.78 1.2 1.78 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.57-.3-5.27-1.29-5.27-5.72 0-1.27.45-2.3 1.2-3.11-.12-.3-.52-1.47.11-3.06 0 0 .98-.31 3.19 1.19A11 11 0 0 1 12 6.08c.98 0 1.97.13 2.9.39 2.2-1.5 3.18-1.19 3.18-1.19.63 1.59.23 2.76.11 3.06.75.81 1.2 1.84 1.2 3.11 0 4.45-2.71 5.42-5.29 5.71.42.36.79 1.06.79 2.15v3.03c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: personalInfo.linkedin,
    value: "linkedin.com/in/detnarin-chaiaksorn",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

function getSkillIcon(skill: string) {
  return skillIconPathMap[skill] ?? `/images/skills/${skill.toLowerCase().replace(/[^a-z0-9]/g, "-")}.svg`;
}

function ExperiencePhotos({ images }: { images: ExperienceImage[] }) {
  const captionOverlay = (caption?: string) =>
    caption ? (
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent px-3 py-3 sm:px-4 sm:py-3.5">
        <p className="text-[11px] font-semibold leading-5 text-white/90 sm:text-xs">
          {caption}
        </p>
      </div>
    ) : null;

  if (images.length === 1) {
    const image = images[0];
    return (
      <figure className="group relative overflow-hidden rounded-xl border border-white/10 bg-slate-950/50">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image.src}
          alt={image.alt}
          className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {captionOverlay(image.caption)}
      </figure>
    );
  }

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {images.map((image) => (
        <figure
          key={image.src}
          className="group relative overflow-hidden rounded-xl border border-white/10 bg-slate-950/50"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image.src}
            alt={image.alt}
            className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          {captionOverlay(image.caption)}
        </figure>
      ))}
    </div>
  );
}

function ExperienceTimelineItem({
  children,
  isLast = false,
}: {
  children: ReactNode;
  isLast?: boolean;
}) {
  return (
    <div className="relative sm:pl-10">
      {!isLast ? (
        <div
          className="absolute left-[5px] top-8 hidden h-[calc(100%+1.5rem)] w-px bg-gradient-to-b from-emerald-400/50 to-emerald-400/10 sm:block"
          aria-hidden="true"
        />
      ) : null}
      <div
        className="absolute left-0 top-6 hidden h-3 w-3 rounded-full border-2 border-emerald-400 bg-[#030712] shadow-[0_0_12px_rgba(52,211,153,0.45)] sm:block"
        aria-hidden="true"
      />
      {children}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Section Hero - image first on mobile, text left on desktop */}
      <section className="relative border-b border-[var(--color-border)] bg-[radial-gradient(circle_at_75%_20%,rgba(16,185,129,0.12),transparent_28%),linear-gradient(180deg,#ffffff_0%,#f6f8fb_100%)] dark:bg-[radial-gradient(circle_at_75%_20%,rgba(52,211,153,0.10),transparent_28%),linear-gradient(180deg,#0f172a_0%,#070b12_100%)]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden bg-[linear-gradient(to_right,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" aria-hidden="true" />
        <div className="relative mx-auto grid w-full max-w-6xl min-w-0 gap-8 px-4 py-10 sm:gap-10 sm:px-6 sm:py-14 lg:min-h-[calc(100vh-4rem)] lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12 lg:py-20">
          {/* Profile image - order 1 on mobile, right column on desktop */}
          <div className="hero-animate-float hero-delay-1 relative order-1 mx-auto w-full min-w-0 max-w-[260px] sm:max-w-xs lg:order-2 lg:mx-0 lg:max-w-md lg:justify-self-end lg:transition-transform lg:hover:scale-[1.02]">
            <div className="absolute -right-4 top-6 h-28 w-28 rounded-full bg-emerald-200/50 blur-3xl dark:bg-emerald-500/20 sm:-right-8 sm:top-8 sm:h-40 sm:w-40" />
            <div className="relative overflow-hidden rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-2 shadow-2xl sm:rounded-[2rem] sm:p-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] bg-[var(--color-surface-muted)] sm:rounded-[1.5rem]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/img-profile.webp"
                  alt={`${personalInfo.name} profile photo`}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/20 bg-slate-950/90 p-3 text-white shadow-xl backdrop-blur sm:bottom-8 sm:left-8 sm:right-8 sm:rounded-2xl sm:p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-300 sm:text-xs">
                  Recent focus
                </p>
                <p className="mt-1.5 text-xs font-semibold leading-snug sm:mt-2 sm:text-sm">
                  {personalInfo.focus}
                </p>
              </div>
            </div>
          </div>

          {/* Text content - centered on mobile, left column on desktop */}
          <div className="order-2 min-w-0 w-full text-center lg:order-1 lg:text-left">
            <p className="hero-animate hero-delay-2 mb-4 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-emerald-700 dark:border-emerald-400/30 dark:bg-emerald-400/10 dark:text-emerald-300 sm:mb-5 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.18em]">
              {personalInfo.role}
            </p>
            <p className="hero-animate hero-delay-2 mb-3 text-sm font-bold leading-6 text-emerald-600 dark:text-emerald-300 sm:mb-4 sm:text-base">
              {personalInfo.heroHighlight}
            </p>
            <h1 className="hero-animate hero-delay-3 mx-auto max-w-3xl text-3xl font-black tracking-tight text-[var(--color-text)] sm:text-5xl lg:mx-0 lg:text-6xl xl:text-7xl">
              Hi, I&apos;m{" "}
              <span className="text-emerald-600 dark:text-emerald-300">
                Detnarin.
              </span>
            </h1>
            <p className="hero-animate hero-delay-4 mx-auto mt-4 max-w-2xl text-base leading-7 text-[var(--color-subtle)] sm:mt-6 sm:text-lg sm:leading-8 lg:mx-0">
              {personalInfo.heroLead}
            </p>
            <p className="hero-animate hero-delay-4 mx-auto mt-3 max-w-2xl text-sm leading-7 text-[var(--color-muted)] sm:text-base lg:mx-0">
              {personalInfo.bio}
            </p>

            <div className="hero-animate hero-delay-5 mx-auto mt-6 grid max-w-md grid-cols-2 gap-2 sm:mt-8 sm:max-w-none sm:gap-3 sm:grid-cols-4 lg:mx-0">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="card-hover rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/90 px-3 py-2.5 shadow-sm backdrop-blur-sm sm:px-4 sm:py-3"
                >
                  <p className="text-lg font-black text-[var(--color-text)] sm:text-xl">{stat.value}</p>
                  <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--color-muted)] sm:text-[11px] sm:tracking-[0.12em]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="hero-animate hero-delay-5 mt-4 flex flex-wrap justify-center gap-2 sm:mt-5 lg:justify-start">
              {heroTechTags.map((tech) => (
                <span
                  key={tech.name}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-2.5 py-1.5 text-xs font-bold text-[var(--color-subtle)] shadow-sm sm:gap-2 sm:px-3 sm:py-2 sm:text-sm lg:transition-transform lg:hover:scale-[1.09]"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-md bg-[var(--color-surface-soft)] p-0.5 sm:h-6 sm:w-6 sm:p-1">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={tech.icon} alt="" className="h-full w-full object-contain" aria-hidden="true" />
                  </span>
                  {tech.name}
                </span>
              ))}
            </div>

            <div className="hero-animate hero-delay-6 mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
              <Link
                id="cta-view-work"
                href="#projects"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-slate-950 bg-slate-950 px-6 py-3 text-sm font-black text-white shadow-sm transition-colors hover:border-emerald-500 hover:bg-emerald-400 hover:text-emerald-950 sm:w-auto"
              >
                View Projects
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
              {personalInfo.resumeUrl ? (
                <a
                  id="cta-resume"
                  href={personalInfo.resumeUrl}
                  download
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-emerald-500 bg-emerald-400 px-6 py-3 text-sm font-black text-emerald-950 shadow-sm transition-colors hover:border-slate-950 hover:bg-slate-950 hover:text-white sm:w-auto"
                >
                  Download Resume
                </a>
              ) : null}
              <a
                id="cta-contact"
                href="#contact"
                className="inline-flex w-full items-center justify-center rounded-md border border-[var(--color-border-strong)] bg-[var(--color-surface)] px-6 py-3 text-sm font-black text-[var(--color-text)] shadow-sm transition-colors hover:border-emerald-500 hover:bg-emerald-400 hover:text-emerald-950 sm:w-auto"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section Projects */}
      <section id="projects" className="relative border-b border-[var(--color-border)] bg-[var(--color-cream)]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
          <RevealOnScroll>
            <ProjectList projects={projects} />
          </RevealOnScroll>
        </div>
      </section>

      {/* Section Skills */}
      <section id="skills" className="relative border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/40 to-transparent" aria-hidden="true" />
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-24">
          <RevealOnScroll className="mb-8 max-w-2xl sm:mb-12">
            <p className="section-label mb-3 text-xs font-black uppercase tracking-[0.18em] text-[var(--color-accent-hover)]">
              Skills and tools
            </p>
            <h2 className="text-3xl font-black tracking-tight text-[var(--color-text)] sm:text-4xl">
              The stack behind the work.
            </h2>
            <p className="mt-3 text-sm leading-7 text-[var(--color-muted)] sm:mt-4 sm:text-base">
              Frontend to backend, databases, REST APIs, AI integration, and deployment workflows.
            </p>
          </RevealOnScroll>

          <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, index) => (
              <RevealOnScroll key={category.name} delay={index * 90}>
                <section className="card-hover h-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-soft)] p-4 sm:p-5">
                <h3 className="mb-4 text-xs font-black uppercase tracking-[0.16em] text-[var(--color-subtle)] sm:mb-5 sm:text-sm">
                  {category.name}
                </h3>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {category.skills.map((skill) => (
                    <div key={skill} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-2 shadow-sm transition-colors hover:border-emerald-400/50 hover:bg-[var(--color-accent-light)] sm:p-3 lg:transition-transform lg:hover:scale-[1.06]">
                      <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-surface-soft)] p-1.5 sm:h-11 sm:w-11 sm:p-2">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={getSkillIcon(skill)}
                          alt={skill}
                          width={32}
                          height={32}
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <p className="mt-3 text-center text-[10px] font-bold leading-tight text-[var(--color-muted)]">
                        {skill}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Section Experience */}
      <section id="experience" className="relative border-y border-emerald-400/20 bg-[#030712] text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(16,185,129,0.08),transparent_40%),radial-gradient(circle_at_80%_100%,rgba(16,185,129,0.05),transparent_35%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-24">
          <RevealOnScroll className="mb-10 max-w-2xl sm:mb-12">
            <p className="mb-3 inline-flex rounded-full border border-emerald-300/25 bg-emerald-300/10 px-3 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-emerald-300">
              Experience
            </p>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              Built with feedback, testing, and real constraints.
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-400 sm:mt-4 sm:text-base">
              From internship delivery to award-winning coursework - real teams, real deadlines, and products people actually use.
            </p>
          </RevealOnScroll>

          <div className="space-y-6">
            <RevealOnScroll delay={0}>
              <ExperienceTimelineItem isLast={false}>
                <article className="overflow-hidden rounded-2xl border border-emerald-300/35 bg-gradient-to-br from-emerald-400/15 via-emerald-400/8 to-slate-900/80 shadow-[0_18px_60px_rgba(16,185,129,0.14)]">
                  <div className="border-b border-emerald-300/15 px-4 py-4 sm:px-6 sm:py-5">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="min-w-0">
                        <span className="inline-flex rounded-full border border-amber-300/30 bg-amber-300/15 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-amber-200">
                          2nd Place Award
                        </span>
                        <h3 className="mt-3 text-xl font-black sm:text-2xl">{experienceAward.title}</h3>
                      </div>
                      <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-slate-300">
                        UTCC Showcase 2026
                      </span>
                    </div>
                  </div>

                  <div className="grid gap-6 p-4 sm:p-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-8">
                    <p className="text-sm leading-7 text-slate-300">
                      {experienceAward.description}
                    </p>
                    {experienceAward.images && experienceAward.images.length > 0 ? (
                      <ExperiencePhotos images={experienceAward.images} />
                    ) : null}
                  </div>
                </article>
              </ExperienceTimelineItem>
            </RevealOnScroll>

            {experiences.map((exp, index) => (
              <RevealOnScroll key={`${exp.company}-${exp.role}`} delay={(index + 1) * 100}>
                <ExperienceTimelineItem isLast>
                  <article className="card-hover overflow-hidden rounded-2xl border border-emerald-300/20 bg-slate-900/90 shadow-[0_18px_60px_rgba(0,0,0,0.25)]">
                    <div className="border-b border-white/5 px-4 py-4 sm:px-6 sm:py-5">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div className="min-w-0">
                          <span className="inline-flex rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-emerald-300">
                            Internship
                          </span>
                          <h3 className="mt-3 text-xl font-black sm:text-2xl">{exp.role}</h3>
                          <p className="mt-1 text-sm font-bold text-emerald-300">{exp.company}</p>
                        </div>
                        <time className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-slate-300">
                          {exp.period}
                        </time>
                      </div>
                    </div>

                    <div className="grid gap-6 p-4 sm:p-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-8">
                      <div>
                        <p className="text-sm leading-7 text-slate-400">
                          {exp.description}
                        </p>
                        {exp.highlights && (
                          <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                            {exp.highlights.map((item) => (
                              <li key={item} className="flex gap-2 rounded-lg border border-white/5 bg-white/[0.03] px-3 py-2.5 text-sm leading-6 text-slate-300">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" aria-hidden="true" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

                      {exp.images && exp.images.length > 0 ? (
                        <ExperiencePhotos images={exp.images} />
                      ) : null}
                    </div>
                  </article>
                </ExperienceTimelineItem>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Section Education & Languages */}
      <section id="education" className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-24">
          <RevealOnScroll className="mb-8 max-w-2xl sm:mb-12">
            <p className="section-label mb-3 text-xs font-black uppercase tracking-[0.18em] text-[var(--color-accent-hover)]">
              Education & Languages
            </p>
            <h2 className="text-3xl font-black tracking-tight text-[var(--color-text)] sm:text-4xl">
              Background and communication.
            </h2>
          </RevealOnScroll>

          <div className="grid gap-4 sm:gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-4">
              {education.map((item, index) => (
                <RevealOnScroll key={item.institution} delay={index * 90}>
                <article
                  className="card-hover rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-soft)] p-4 sm:p-6"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between sm:gap-4">
                    <div>
                      <h3 className="text-lg font-black text-[var(--color-text)] sm:text-xl">{item.degree}</h3>
                      <p className="mt-1 text-sm font-bold text-[var(--color-accent-hover)]">
                        {item.institution}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.gpa && (
                        <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700">
                          GPAX {item.gpa}
                        </span>
                      )}
                      <time className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-xs font-bold text-[var(--color-muted)]">
                        {item.period}
                      </time>
                    </div>
                  </div>
                  {item.activities && (
                    <ul className="mt-4 space-y-2">
                      {item.activities.map((activity) => (
                        <li key={activity} className="flex gap-2 text-sm leading-6 text-[var(--color-muted)]">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" aria-hidden="true" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
                </RevealOnScroll>
              ))}
            </div>

            <RevealOnScroll delay={120} direction="right">
            <div className="card-hover h-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-soft)] p-4 sm:p-6">
              <h3 className="text-sm font-black uppercase tracking-[0.16em] text-[var(--color-subtle)]">
                Languages
              </h3>
              <div className="mt-5 space-y-4">
                {languages.map((lang) => (
                  <div key={lang.name} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
                    <p className="text-base font-black text-[var(--color-text)]">{lang.name}</p>
                    <p className="mt-1 text-sm leading-6 text-[var(--color-muted)]">{lang.level}</p>
                  </div>
                ))}
              </div>
            </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Section About */}
      <section id="about" className="border-b border-[var(--color-border)] bg-[var(--color-cream)]">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-12 sm:gap-10 sm:px-6 sm:py-16 lg:grid-cols-[0.85fr_1.15fr] lg:py-20">
          <RevealOnScroll direction="left">
          <div>
            <p className="section-label mb-3 text-xs font-black uppercase tracking-[0.18em] text-[var(--color-accent-hover)]">
              About
            </p>
            <h2 className="text-3xl font-black tracking-tight text-[var(--color-text)] sm:text-4xl">
              I like software that feels useful on the first click.
            </h2>
          </div>
          </RevealOnScroll>
          <RevealOnScroll delay={100} direction="right">
          <div className="space-y-4 text-sm leading-7 text-[var(--color-muted)] sm:space-y-5 sm:text-base sm:leading-8">
            <p>
              I work across frontend and backend, with a strong interest in AI integration, vector databases, clean product interfaces, and systems that are easy to test and improve.
            </p>
            <p>
              My projects range from production CMS websites and review platforms to Unity and Unreal Engine prototypes. That mix helps me think about interaction, performance, and user feedback from more than one angle.
            </p>
            <p>
              Programming languages I use regularly include JavaScript, TypeScript, Java, C#, and Python - with experience in Git/GitHub workflows, Docker, and team collaboration.
            </p>
          </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Section Contact */}
      <section id="contact" className="bg-[var(--color-surface)]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-24">
          <RevealOnScroll direction="scale">
          <div className="rounded-2xl bg-gradient-to-br from-emerald-400/40 via-emerald-500/10 to-slate-900/20 p-px shadow-2xl sm:rounded-3xl">
          <div className="rounded-2xl bg-slate-950 p-5 text-white sm:rounded-3xl sm:p-8 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end lg:gap-10">
              <div>
                <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-emerald-300">
                  Contact
                </p>
                <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                  Let&apos;s contact and build something together.
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-400 sm:mt-4 sm:text-base">
                  Open to software developer, full-stack, and AI-assisted product roles. Send a message and I&apos;ll get back with context, links, or next steps.
                </p>
              </div>

              <div className="grid gap-3">
                {socialLinks.map((link, index) => (
                  <RevealOnScroll key={link.label} delay={index * 80}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className="card-hover flex min-w-0 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3 sm:gap-4 sm:p-4"
                    aria-label={link.label}
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-300 text-emerald-950 sm:h-11 sm:w-11">
                      {link.icon}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-black">{link.label}</span>
                      <span className="mt-0.5 block truncate text-xs text-slate-400 sm:text-sm">{link.value}</span>
                    </span>
                  </a>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          </div>
          </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
