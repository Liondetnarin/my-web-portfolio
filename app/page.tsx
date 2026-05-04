import type { Metadata } from "next";
import Link from "next/link";
import ProjectSlider from "@/components/ProjectSlider";
import { experiences, personalInfo, projects, skillCategories } from "@/lib/data";

export const metadata: Metadata = {
  title: "Detnarin Chaiaksorn - Full-Stack Developer",
  description:
    "Full-Stack Developer building practical web apps, AI-backed tools, mobile interfaces, and interactive game projects.",
  openGraph: {
    title: "Detnarin Chaiaksorn - Full-Stack Developer",
    description:
      "Full-Stack Developer building practical web apps, AI-backed tools, mobile interfaces, and interactive game projects.",
  },
};

const remainingProjects = projects;

const heroTechTags = [
  { name: "Next.js", icon: "/images/icon-svg/nextjs-fill-svgrepo-com.svg" },
  { name: "TypeScript", icon: "/images/icon-svg/typescript-svgrepo-com.svg" },
  { name: "React", icon: "/images/icon-svg/react-svgrepo-com.svg" },
  { name: "Python", icon: "/images/icon-svg/python-svgrepo-com.svg" },
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
  "Spring Boot": "/images/skills/springboot.svg",
  MongoDB: "/images/icon-svg/mongodb-svgrepo-com.svg",
  Git: "/images/icon-svg/git-svgrepo-com.svg",
  "C#": "/images/icon-svg/csharp-svgrepo-com.svg",
  MySQL: "/images/icon-svg/mysql-logo-svgrepo-com.svg",
  Supabase: "/images/icon-svg/supabase-icon.svg",
  Figma: "/images/icon-svg/figma-svgrepo-com.svg",
  "Google ADK": "/images/skills/google-adk.svg",
  Docker: "/images/icon-svg/docker-svgrepo-com.svg",
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

export default function HomePage() {
  return (
    <>
      {/* Section Hero */}
      <section className="overflow-hidden border-b border-slate-200 bg-[radial-gradient(circle_at_75%_20%,rgba(16,185,129,0.12),transparent_28%),linear-gradient(180deg,#ffffff_0%,#f6f8fb_100%)]">
        <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-20">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-emerald-700">
              Full-Stack Developer
            </p>
            <h1 className="max-w-3xl text-5xl font-black tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Hi there!<br></br> <span className="text-emerald-500">I&apos;m Detnarin.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Full-stack developer with hands-on experience building end-to-end web applications.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-500">
              {personalInfo.bio}
            </p>
            
            <div className="mt-5 flex flex-wrap gap-2">
              {heroTechTags.map((tech) => (
                <span
                  key={tech.name}
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-700 shadow-sm hover:scale-[1.09] transition-transform"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-slate-50 p-1">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={tech.icon} alt="" className="h-full w-full object-contain" aria-hidden="true" />
                  </span>
                  {tech.name}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                id="cta-view-work"
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md border border-slate-950 bg-slate-950 px-6 py-3 text-sm font-black text-white shadow-sm transition-colors hover:border-emerald-500 hover:bg-emerald-400 hover:text-slate-950"
              >
                View Work
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
              <a
                id="cta-contact"
                href="#contact"
                className="inline-flex rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-black text-slate-950 shadow-sm transition-colors hover:border-slate-950 hover:bg-slate-950 hover:text-white"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:justify-self-end hover:scale-[1.02] transition-transform">
            <div className="absolute -right-8 top-8 h-40 w-40 rounded-full bg-emerald-200/50 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-2xl">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/img-profile.webp"
                  alt={`${personalInfo.name} profile photo`}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/20 bg-slate-950/90 p-4 text-white shadow-xl backdrop-blur">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-300">
                  Recent focus
                </p>
                <p className="mt-2 text-sm font-semibold">
                  Web development, AI Automation systems, IoT, and interactive software prototypes.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section Projects */}
      <section id="projects" className="border-b border-slate-200 bg-[var(--color-cream)]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <ProjectSlider projects={remainingProjects} />
        </div>
      </section>

      {/* Section Skills */}
      <section id="skills" className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-[var(--color-accent-hover)]">
              Skills and tools
            </p>
            <h2 className="text-4xl font-black tracking-tight text-slate-950">
              The stack behind the work.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-500">
              A practical toolkit for shipping interfaces, APIs, databases, prototypes, and interactive projects.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {skillCategories.map((category) => (
              <section key={category.name} className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5">
                <h3 className="mb-5 text-sm font-black uppercase tracking-[0.16em] text-slate-700">
                  {category.name}
                </h3>
                <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
                  {category.skills.map((skill) => (
                    <div key={skill} className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm hover:scale-[1.1] transition-transform">
                      <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-lg bg-slate-50 p-2">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={getSkillIcon(skill)}
                          alt={skill}
                          width={32}
                          height={32}
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <p className="mt-3 text-center text-[11px] font-bold leading-tight text-slate-600">
                        {skill}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* Section Experience */}
      <section id="experience" className="border-y border-emerald-400/20 bg-[#030712] text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.75fr_1fr] lg:py-24">
          <div>
            <p className="mb-3 inline-flex rounded-full border border-emerald-300/25 bg-emerald-300/10 px-3 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-emerald-300">
              Experience
            </p>
            <h2 className="mt-5 text-4xl font-black tracking-tight text-white">
              Built with feedback, testing, and real constraints.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-400">
              My strongest work combines UI implementation, backend thinking, and careful testing with the people who will actually use the product.
            </p>
          </div>

          <div className="space-y-4">
            {experiences.map((exp) => (
              <article key={`${exp.company}-${exp.role}`} className="rounded-2xl border border-emerald-300/20 bg-slate-900 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.25)] hover:scale-[1.02] transition-transform">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-black">{exp.role}</h3>
                    <p className="mt-1 text-sm font-bold text-emerald-300">{exp.company}</p>
                  </div>
                  <time className="rounded-full border border-white/10 px-3 py-1 text-xs font-bold text-slate-300">
                    {exp.period}
                  </time>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {exp.description}
                </p>
              </article>
            ))}
            <article className="rounded-2xl border border-emerald-300/30 bg-emerald-400/12 p-6 shadow-[0_18px_60px_rgba(16,185,129,0.12)] hover:scale-[1.02] transition-transform">
              <h3 className="text-xl font-black">Award-winning interactive project</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Coding is Magic earned 2nd place in a 2026 showcase for turning Python learning into a playable Unity experience.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Section About */}
      <section id="about" className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-[var(--color-accent-hover)]">
              About
            </p>
            <h2 className="text-4xl font-black tracking-tight text-slate-950">
              I like software that feels useful on the first click.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-slate-600">
            <p>
              I work across frontend and backend, with a strong interest in practical AI features, clean product interfaces, and systems that are easy to test and improve.
            </p>
            <p>
              My projects range from production websites and review platforms to Unity and Unreal Engine prototypes. That mix helps me think about interaction, performance, and user feedback from more than one angle.
            </p>
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section id="contact" className="bg-[var(--color-cream)]">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
          <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-2xl sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
              <div>
                <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-emerald-300">
                  Contact
                </p>
                <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                  Let&apos;s contact and build something together.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
                  Open to full-stack, frontend, and AI-assisted product roles. Send a message and I&apos;ll get back with context, links, or next steps.
                </p>
              </div>

              <div className="grid gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-4 transition-colors hover:bg-white/[0.08] hover:scale-[1.02] transition-transform"
                    aria-label={link.label}
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-300 text-slate-950">
                      {link.icon}
                    </span>
                    <span>
                      <span className="block text-sm font-black">{link.label}</span>
                      <span className="mt-0.5 block text-sm text-slate-400">{link.value}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
