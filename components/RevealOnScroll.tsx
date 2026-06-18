"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealDirection = "up" | "down" | "left" | "right" | "fade" | "scale";

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: RevealDirection;
  /** When true, stays visible after first reveal (no hide on scroll up). */
  once?: boolean;
  threshold?: number;
}

export default function RevealOnScroll({
  children,
  className = "",
  delay = 0,
  direction = "up",
  once = false,
  threshold = 0.08,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [instant, setInstant] = useState(false);
  const scrollingDown = useRef(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const onScroll = () => {
      const y = window.scrollY;
      scrollingDown.current = y >= lastScrollY.current;
      lastScrollY.current = y;
    };

    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (scrollingDown.current) {
            setInstant(false);
            setVisible(true);
          } else {
            setInstant(true);
            setVisible(true);
            requestAnimationFrame(() => {
              requestAnimationFrame(() => setInstant(false));
            });
          }

          if (once) observer.unobserve(element);
          return;
        }

        if (once) return;

        setInstant(true);
        setVisible(false);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setInstant(false));
        });
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(element);
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, [once, threshold]);

  return (
    <div
      ref={ref}
      data-visible={visible ? "true" : "false"}
      data-direction={direction}
      data-instant={instant ? "true" : "false"}
      className={`reveal ${className}`}
      style={{ transitionDelay: visible && !instant ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
