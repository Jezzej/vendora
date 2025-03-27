"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcherBtn() {
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    console.log("Initial theme states:", { theme, resolvedTheme, systemTheme });
  }, []);

  if (!mounted) return null; // Prevents SSR mismatch

  const toggleTheme = () => {
    const currentTheme = resolvedTheme || systemTheme;
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    console.log("Switching theme:", { currentTheme, newTheme });

    setTheme(newTheme);
  };

  return (
    <button
      className="w-fit p-2 rounded-md hover:scale-110 active:scale-100 duration-200 bg-slate-200 dark:bg-[#212933]"
      onClick={toggleTheme}
    >
      {resolvedTheme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
}
