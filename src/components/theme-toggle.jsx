"use client";
import { useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    const html = document.documentElement;
    setIsDark(!isDark);
    !isDark ? (html.dataset.theme = "dark") : delete html.dataset.theme;
  };

  return (
    <button
      onClick={toggleTheme}
      className="rounded-md bg-indigo-700 text-white p-2 text-sm font-semibold absolute top-4 right-4"
    >
      Switch theme
    </button>
  );
}
