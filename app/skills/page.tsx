import type { Metadata } from "next";
import { skillCategories } from "@/lib/data";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Alex Chen's technical skills — frontend, backend, database, and developer tools.",
  openGraph: {
    title: "Skills | Alex Chen",
    description: "Technical skills and technologies I work with.",
  },
};

const categoryIcons: Record<string, string> = {
  Frontend: "◈",
  Backend: "◉",
  Database: "◫",
  Tools: "◎",
};

export default function SkillsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <header className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-[var(--color-text)]">
          Skills
        </h1>
        <p className="mt-2 text-base text-[var(--color-muted)]">
          Technologies and tools I use day-to-day.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2">
        {skillCategories.map((cat) => (
          <section
            key={cat.name}
            className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm"
          >
            <div className="mb-4 flex items-center gap-2">
              <span
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-accent-light)] text-base text-[var(--color-accent)]"
                aria-hidden="true"
              >
                {categoryIcons[cat.name] ?? "◆"}
              </span>
              <h2 className="text-base font-semibold text-[var(--color-text)]">
                {cat.name}
              </h2>
            </div>

            <ul className="flex flex-wrap gap-2" aria-label={`${cat.name} skills`}>
              {cat.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-lg border border-[var(--color-border)] bg-[var(--color-cream)] px-3 py-1.5 text-sm font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
