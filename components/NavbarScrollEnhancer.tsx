"use client";

import { useEffect } from "react";

export default function NavbarScrollEnhancer() {
  useEffect(() => {
    const header = document.getElementById("site-header");
    if (!header) return;

    const onScroll = () => {
      header.dataset.scrolled = window.scrollY > 12 ? "true" : "false";
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
