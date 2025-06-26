"use client";
import { useEffect, useState } from "react";

// ThemeToggle: Dark/Light mode toggle button for TaskToro
export default function ThemeToggle() {
  // State to track dark mode
  const [isDark, setIsDark] = useState(false);

  // On mount, check system preference or localStorage
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) {
      setIsDark(stored === "dark");
      document.documentElement.classList.toggle("dark", stored === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDark(prefersDark);
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  // Toggle dark mode and persist
  const toggleDark = () => {
    setIsDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  return (
    <button
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggleDark}
      className="fixed top-4 right-4 z-50 p-2 rounded-full bg-background shadow-card border border-foreground/10 hover:bg-primary hover:text-white transition-colors"
    >
      {/* Simple sun/moon icon */}
      {isDark ? (
        <span role="img" aria-label="Light mode">🌞</span>
      ) : (
        <span role="img" aria-label="Dark mode">🌙</span>
      )}
    </button>
  );
} 