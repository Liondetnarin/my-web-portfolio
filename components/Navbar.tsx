import Link from "next/link";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#projects", label: "Work" },
  { href: "/#skills", label: "Skills" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[var(--color-dark)]/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-sm font-black tracking-tight text-white transition-opacity hover:opacity-75"
        >
          DET_PORTFOLIO<span className="text-[var(--color-accent)]">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Main navigation" className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-md bg-[var(--color-accent)] px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.14em] text-[#06130f] transition-colors hover:bg-[var(--color-accent-hover)] md:inline-flex"
          >
            Hire Me
          </a>
          <MobileMenu links={navLinks} />
        </div>
      </div>
    </header>
  );
}
