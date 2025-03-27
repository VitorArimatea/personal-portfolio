"use client";

import Navbar from "@/components/Navbar";
import RecentProjects from "@/components/RecentProjects";
import { Spotlight } from "@/components/ui/Spotlight";
import { SpotlightNew } from "@/components/ui/SpotlightNew";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.main
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#FEFCFB] dark:bg-[#0A1128] flex justify-center items-center flex-col overflow-x-hidden"
    >
      <Navbar />
      <div className="relative overflow-hidden px-5 sm:px-10">
        <div className="invisible dark:visible">
          <Spotlight />
          <SpotlightNew />
        </div>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <RecentProjects />
        </motion.div>
      </div>
    </motion.main>
  );
};

export default Projects;
