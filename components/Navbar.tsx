"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { navItems } from "@/constants";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="relative w-full flex justify-between items-center px-5 lg:px-8 py-5 dark:bg-transparent z-70">
      <h1 className="text-xl md:text-2xl font-bold">
        <Link
          href="/"
          className="hover:text-blue-600 dark:hover:text-blue-300 duration-200"
        >
          {"{ VA }"}
        </Link>
      </h1>

      <button
        className="cursor-pointer relative z-50"
        onClick={toggleMenu}
        aria-label="Abrir menu de navegação"
      >
        <div className="w-8 h-8 flex flex-col justify-center items-center relative">
          <motion.span
            className="absolute w-6 h-0.5 bg-[#111] dark:bg-[#fcfcfc]"
            initial={false}
            animate={menuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-[#111] dark:bg-[#fcfcfc]"
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="absolute w-6 h-0.5 bg-[#111] dark:bg-[#fcfcfc]"
            initial={false}
            animate={menuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 1,
              x: "100%",
              y: "-100%",
              scale: 0.95,
            }}
            animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            exit={{
              opacity: 1,
              x: "100%",
              y: "-100%",
              scale: 0.95,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-full h-screen md:w-[18rem] md:h-[30rem] bg-background dark:bg-background flex flex-col justify-center items-center gap-8 z-40 border-l border-b border-gray-800 rounded-bl-xl"
          >
            {navItems.map((item, index) => (
              <motion.nav
                key={item.link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Link
                  href={item.link}
                  className="text-3xl text-left font-semibold hover:text-blue-900 dark:hover:text-blue-300 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.title}
                </Link>
              </motion.nav>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navItems.length * 0.2 }}
            >
              <ThemeToggle />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
