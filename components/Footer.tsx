import Link from "next/link";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-base font-semibold tracking-tight text-[var(--color-text)] hover:opacity-70 transition-opacity"
            >
              Alex<span className="text-[var(--color-accent)]">.</span>
            </Link>
            <p className="mt-1 text-sm text-[var(--color-muted)]">
              Full-Stack Developer
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Footer navigation" className="flex items-center gap-6">
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)]"
            >
              Email
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)]"
            >
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)]"
            >
              LinkedIn
            </a>
          </nav>
        </div>

        <div className="mt-8 border-t border-[var(--color-border)] pt-6 text-center text-xs text-[var(--color-muted)]">
          © {year} {personalInfo.name}. Built with Next.js & Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}
