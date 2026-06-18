"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [animate, setAnimate] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const scrollingDown = scrollTop >= lastScrollY.current;
      lastScrollY.current = scrollTop;

      setAnimate(scrollingDown);

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0);
    };

    lastScrollY.current = window.scrollY;
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5 bg-slate-900/10"
      aria-hidden="true"
    >
      <div
        className={`h-full origin-left bg-gradient-to-r from-emerald-400 to-emerald-500 ${
          animate ? "transition-transform duration-150 ease-out" : ""
        }`}
        style={{ transform: `scaleX(${progress / 100})` }}
      />
    </div>
  );
}
