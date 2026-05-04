import Link from "next/link";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-emerald-400/25 bg-[#020617] shadow-[0_10px_40px_rgba(2,6,23,0.35)]">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="rounded-md px-2 py-1 text-sm font-black tracking-tight text-white transition-colors hover:bg-white/10 hover:text-emerald-300"
        >
          DETNARIN CHAIAKSORN<span className="text-[var(--color-accent)]">.</span>
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
          <a
            href="#contact"
            className="hidden rounded-md border border-emerald-300/40 bg-emerald-400 px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.14em] text-slate-950 shadow-[0_0_24px_rgba(52,211,153,0.22)] transition-colors hover:border-emerald-200 hover:bg-emerald-300 md:inline-flex"
          >
            Hire Me
          </a>
          <MobileMenu links={navLinks} />
        </div>
      </div>
    </header>
  );
}
