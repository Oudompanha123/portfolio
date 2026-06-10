"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTheme(
      document.documentElement.classList.contains("dark") ? "dark" : "light"
    );
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  // Avoid hydration mismatch: render a stable placeholder until mounted.
  const label = !mounted
    ? "theme"
    : theme === "dark"
      ? "light"
      : "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle color theme"
      className="font-mono text-xs uppercase tracking-label text-muted transition-colors hover:text-ink"
    >
      [{label}]
    </button>
  );
}
