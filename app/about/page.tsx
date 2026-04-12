import type { Metadata } from "next";
import { experiences, personalInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Alex Chen — a full-stack developer with 4+ years of experience building scalable web applications.",
  openGraph: {
    title: "About | Alex Chen",
    description:
      "Learn more about Alex Chen — a full-stack developer with 4+ years of experience.",
  },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      {/* Header */}
      <header className="mb-14">
        <h1 className="text-3xl font-bold tracking-tight text-[var(--color-text)]">
          About Me
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-[var(--color-muted)]">
          {personalInfo.bio} I&apos;m deeply passionate about clean code,
          developer experience, and shipping products that people love to use.
        </p>
      </header>

      <div className="grid gap-12 lg:grid-cols-3">
        {/* Experience Timeline */}
        <section className="lg:col-span-2">
          <h2 className="mb-6 text-lg font-semibold text-[var(--color-text)]">
            Experience
          </h2>
          <ol className="relative space-y-8 border-l border-[var(--color-border)] pl-6">
            {experiences.map((exp, i) => (
              <li key={i} className="relative">
                {/* Timeline dot */}
                <span className="absolute -left-[25px] flex h-4 w-4 items-center justify-center rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-cream)]" />

                <article>
                  <div className="flex flex-wrap items-baseline gap-2">
                    <h3 className="text-base font-semibold text-[var(--color-text)]">
                      {exp.role}
                    </h3>
                    <span className="text-sm text-[var(--color-accent)]">
                      @ {exp.company}
                    </span>
                  </div>
                  <time className="mt-0.5 block text-xs text-[var(--color-muted)]">
                    {exp.period}
                  </time>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                    {exp.description}
                  </p>
                </article>
              </li>
            ))}
          </ol>
        </section>

        {/* Info Sidebar */}
        <aside>
          <h2 className="mb-6 text-lg font-semibold text-[var(--color-text)]">
            Quick Info
          </h2>
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 space-y-5">
            {[
              { label: "Role", value: personalInfo.role },
              { label: "Location", value: "Bangkok, Thailand" },
              { label: "Availability", value: "Open to work" },
              { label: "Email", value: personalInfo.email },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-xs font-medium uppercase tracking-wider text-[var(--color-muted)]">
                  {item.label}
                </p>
                <p className="mt-0.5 text-sm text-[var(--color-text)]">
                  {item.value}
                </p>
              </div>
            ))}

            <div className="border-t border-[var(--color-border)] pt-5">
              <p className="text-xs font-medium uppercase tracking-wider text-[var(--color-muted)]">
                Connect
              </p>
              <div className="mt-2 flex gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-[var(--color-accent)] transition-opacity hover:opacity-70"
                >
                  GitHub
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-[var(--color-accent)] transition-opacity hover:opacity-70"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
