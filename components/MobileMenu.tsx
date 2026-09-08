"use client";

import Link from "next/link";
import { useState } from "react";
import { personalInfo } from "@/lib/data";

interface NavLink {
  href: string;
  label: string;
}

export default function MobileMenu({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        id="mobile-menu-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        aria-expanded={open}
        className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md border border-emerald-300/25 text-slate-100 transition-colors hover:bg-emerald-400/12 hover:text-emerald-300"
      >
        <span
          className={`block h-0.5 w-5 bg-current transition-transform duration-200 ${open ? "translate-y-2 rotate-45" : ""}`}
        />
        <span
          className={`block h-0.5 w-5 bg-current transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
        />
        <span
          className={`block h-0.5 w-5 bg-current transition-transform duration-200 ${open ? "-translate-y-2 -rotate-45" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full border-b border-emerald-400/25 bg-[#020617] shadow-2xl">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4" aria-label="Mobile navigation">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-bold uppercase tracking-[0.14em] text-slate-300 transition-colors hover:bg-emerald-400/12 hover:text-emerald-300"
              >
                {link.label}
              </Link>
            ))}
            {personalInfo.resumeUrl ? (
              <a
                href={personalInfo.resumeUrl}
                download
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-md border border-emerald-300/40 bg-emerald-400 px-4 py-3 text-center text-xs font-black uppercase tracking-[0.14em] text-emerald-950 transition-colors hover:bg-emerald-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 3v12" />
                  <path d="m7 10 5 5 5-5" />
                  <path d="M5 19h14" />
                </svg>
                Download Resume
              </a>
            ) : null}
          </nav>
        </div>
      )}
    </div>
  );
}
