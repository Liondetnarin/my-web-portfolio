import Link from "next/link";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a]">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-base font-semibold tracking-tight text-white hover:opacity-70 transition-opacity"
            >
              {personalInfo.name}<span className="text-[var(--color-accent)]">.</span>
            </Link>
            <p className="mt-1 text-sm text-slate-400">
              {personalInfo.role}
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Footer navigation" className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              Email
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              LinkedIn
            </a>
          </nav>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
          © {year} {personalInfo.name}.
        </div>
      </div>
    </footer>
  );
}
