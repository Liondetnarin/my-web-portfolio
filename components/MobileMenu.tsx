"use client";

import Link from "next/link";
import { useState } from "react";

interface NavLink {
  href: string;
  label: string;
}

export default function MobileMenu({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        id="mobile-menu-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        aria-expanded={open}
        className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-md transition-colors hover:bg-[var(--color-cream)]"
      >
        <span
          className={`block h-0.5 w-5 bg-[var(--color-text)] transition-transform duration-200 ${open ? "translate-y-2 rotate-45" : ""}`}
        />
        <span
          className={`block h-0.5 w-5 bg-[var(--color-text)] transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
        />
        <span
          className={`block h-0.5 w-5 bg-[var(--color-text)] transition-transform duration-200 ${open ? "-translate-y-2 -rotate-45" : ""}`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute left-0 right-0 top-full border-b border-[var(--color-border)] bg-[var(--color-surface)] shadow-lg">
          <nav className="mx-auto max-w-5xl flex flex-col px-6 py-4 gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-[var(--color-muted)] transition-colors hover:bg-[var(--color-cream)] hover:text-[var(--color-text)]"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-[var(--color-accent)] px-4 py-2.5 text-center text-sm font-medium text-white transition-opacity hover:opacity-80"
            >
              Resume PDF
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
