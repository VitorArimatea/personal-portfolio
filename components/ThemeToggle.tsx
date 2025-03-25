"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex items-center justify-center cursor-pointer"
    >
      <motion.div
        initial={{ rotate: 0, scale: 1, opacity: 1 }}
        animate={{
          rotate: isDark ? 90 : 0,
          scale: isDark ? 0 : 1,
          opacity: isDark ? 0 : 1,
        }}
        transition={{ duration: 0.3 }}
        className="absolute text-[#111] dark:text-[#fcfcfc]"
      >
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      </motion.div>

      <motion.div
        initial={{ rotate: -90, scale: 0, opacity: 0 }}
        animate={{
          rotate: isDark ? 0 : -180,
          scale: isDark ? 1 : 0,
          opacity: isDark ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="absolute text-[#111] dark:text-[#fcfcfc]"
      >
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      </motion.div>

      <span className="sr-only">Alternar tema</span>
    </Button>
  );
}

export default ThemeToggle;
