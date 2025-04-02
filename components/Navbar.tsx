"use client";

import { useState } from "react";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { navItems } from "@/data";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="relative w-full flex justify-between items-center px-4 md:px-8 py-4 dark:bg-background md:dark:bg-transparent z-70">
      <h1 className="text-2xl font-bold">
        <Link
          href="/"
          className="hover:text-blue-600 dark:hover:text-blue-300 duration-200"
        >
          {"{ VA }"}
        </Link>
      </h1>

      <button
        className="md:hidden cursor-pointer"
        onClick={toggleMenu}
        aria-label="Abrir menu de navegação"
      >
        <motion.div
          animate={menuOpen ? "open" : "closed"}
          variants={{
            closed: { rotate: 0 },
            open: { rotate: -90 },
          }}
          className="w-8 h-8 flex flex-col justify-center items-center"
        >
          <motion.span
            className="absolute w-6 h-0.5 bg-[#111] dark:bg-[#fcfcfc]"
            variants={{
              closed: { y: -6, rotate: 0 },
              open: { y: 0, rotate: 45 },
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-[#111] dark:bg-[#fcfcfc]"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="absolute w-6 h-0.5 bg-[#111] dark:bg-[#fcfcfc]"
            variants={{
              closed: { y: 6, rotate: 0 },
              open: { y: 0, rotate: -45 },
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="absolute md:hidden w-full top-full left-0 bg-background dark:bg-background flex flex-col gap-5 p-4"
          >
            {navItems.map((item) => (
              <Link
                key={item.link}
                href={item.link}
                className="font-semibold hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <ThemeToggle />
          </motion.nav>
        )}
      </AnimatePresence>

      <nav className="font-semibold hidden md:flex gap-6">
        {navItems.map((item) => (
          <Link
            key={item.link}
            href={item.link}
            className="relative hover:text-[#333] dark:hover:text-[#e7e7e7] group transition-colors"
          >
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="hidden md:block">
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Navbar;
