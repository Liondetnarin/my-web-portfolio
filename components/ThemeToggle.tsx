"use client";

type Theme = "light" | "dark";

const THEME_STORAGE_KEY = "portfolio-theme";

function getCurrentTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export default function ThemeToggle() {
  function toggleTheme() {
    const nextTheme: Theme = getCurrentTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch {
      // The theme still applies for this visit when storage is unavailable.
    }
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      title="Toggle color theme"
      className="group inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-emerald-300/25 text-slate-100 transition-colors hover:bg-emerald-400/12 hover:text-emerald-300"
    >
      <svg
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="hidden dark:block"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41" />
      </svg>
      <svg
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="block dark:hidden"
      >
        <path d="M20.7 13.2A8 8 0 1 1 10.8 3.3 6.5 6.5 0 0 0 20.7 13.2Z" />
      </svg>
      <span className="sr-only">Toggle color theme</span>
    </button>
  );
}
