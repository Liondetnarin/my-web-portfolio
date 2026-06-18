import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { personalInfo } from "@/lib/data";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#experience", label: "Experience" },
  { href: "/#education", label: "Education" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header
      id="site-header"
      className="sticky top-0 z-50 border-b border-emerald-400/25 bg-[#020617] shadow-[0_10px_40px_rgba(2,6,23,0.35)] transition-all duration-300 data-[scrolled=true]:border-emerald-400/40 data-[scrolled=true]:bg-[#020617]/92 data-[scrolled=true]:shadow-[0_16px_48px_rgba(2,6,23,0.5)] data-[scrolled=true]:backdrop-blur-md"
    >
      <div className="relative mx-auto flex h-14 max-w-6xl min-w-0 items-center justify-between px-4 sm:h-16 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="rounded-md px-1 py-1 text-xs font-black tracking-tight text-white transition-colors hover:bg-white/10 hover:text-emerald-300 sm:px-2 sm:text-sm"
        >
          <span className="sm:hidden">DETNARIN<span className="text-[var(--color-accent)]">.</span></span>
          <span className="hidden sm:inline">
            DETNARIN CHAIAKSORN<span className="text-[var(--color-accent)]">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Main navigation" className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-300 transition-colors hover:bg-emerald-400/12 hover:text-emerald-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile */}
        <div className="flex items-center gap-3">
          {personalInfo.resumeUrl ? (
            <a
              href={personalInfo.resumeUrl}
              download
              className="hidden items-center gap-2 rounded-md border border-emerald-300/40 bg-emerald-400 px-4 py-2.5 text-[11px] font-black uppercase tracking-[0.14em] text-slate-950 shadow-[0_0_24px_rgba(52,211,153,0.22)] transition-colors hover:border-emerald-200 hover:bg-emerald-300 md:inline-flex"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3v12" />
                <path d="m7 10 5 5 5-5" />
                <path d="M5 19h14" />
              </svg>
              Resume
            </a>
          ) : null}
          <MobileMenu links={navLinks} />
        </div>
      </div>
    </header>
  );
}
