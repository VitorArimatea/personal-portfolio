"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Loading from "./loading";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { Skills } from "@/components/Skills";
import { MyTechs } from "@/components/MyTechs";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className="relative bg-[#FEFCFB] dark:bg-[#0A1128] flex justify-center items-center flex-col overflow-x-hidden">
      <Navbar />
      <div className="max-w-7xl w-full px-5 sm:px-10">
        <Hero />

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <RecentProjects />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Skills />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
        >
          <MyTechs />
        </motion.div>

        <Footer />
      </div>
    </div>
  );
}
