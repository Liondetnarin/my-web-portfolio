"use client";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function ProjectModal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const closeRef = useRef<HTMLButtonElement>(null);
  const pointerStartedOnBackdrop = useRef(false);
  useEffect(() => { const previous = document.body.style.overflow; const slug = window.location.pathname.split("/").pop(); document.body.style.overflow = "hidden"; closeRef.current?.focus(); const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") { router.back(); return; } if (event.key !== "Tab") return; const focusable = Array.from(document.querySelectorAll<HTMLElement>("[role=dialog] a, [role=dialog] button")); if (focusable.length === 0) return; const first = focusable[0]; const last = focusable[focusable.length - 1]; if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); } else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); } }; window.addEventListener("keydown", onKeyDown); return () => { document.body.style.overflow = previous; window.removeEventListener("keydown", onKeyDown); window.setTimeout(() => { if (slug) document.querySelector<HTMLElement>(`[data-project-slug="${slug}"]`)?.focus(); }, 0); }; }, [router]);
  return (
    <div
      className="fixed inset-0 z-[70] flex items-start justify-center overflow-y-auto bg-slate-950/75 p-3 backdrop-blur-sm sm:p-5"
      role="dialog"
      aria-modal="true"
      aria-label="Project details"
      onPointerDown={(event) => {
        pointerStartedOnBackdrop.current = event.target === event.currentTarget;
      }}
      onPointerCancel={() => { pointerStartedOnBackdrop.current = false; }}
      onClick={(event) => {
        if (pointerStartedOnBackdrop.current && event.target === event.currentTarget) {
          router.back();
        }
        pointerStartedOnBackdrop.current = false;
      }}
    >
      <button aria-label="Close project details" ref={closeRef} onClick={() => router.back()} className="fixed right-3 top-3 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-slate-950 text-2xl text-white hover:bg-emerald-400 hover:text-emerald-950 sm:right-5 sm:top-5">×</button>
      <div className="my-auto w-full max-w-[760px] shrink-0">{children}</div>
    </div>
  );
}
