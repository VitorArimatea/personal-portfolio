import { motion } from "framer-motion";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

import { containerVariants, itemVariants } from "./animations/heroVariants";

import Spotlight from "./ui/Spotlight";
import SpotlightNew from "./ui/SpotlightNew";
import TextGenerateEffect from "./ui/TextGenerateEffect";
import Button from "./ui/AnimatedButton";

const Hero = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="h-[100dvh] flex flex-col gap-4 md:gap-6 justify-center items-center mt-8"
    >
      <div className="invisible dark:sm:visible" aria-hidden="true">
        <SpotlightNew />
        <Spotlight className="absolute inset-x-1/2 top-0 h-[50vh] w-[50vw] opacity-50 blur-2xl -translate-x-1/2" />
      </div>

      <div className="md:invisible">
        <div className="absolute inset-x-1/2 top-0 h-[30vh] w-[50vw] opacity-40 -translate-x-1/2 white__gradient" />
      </div>

      <motion.h1
        variants={itemVariants}
        className="text-[35px] sm:text-5xl font-bold text-center bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 from-neutral-600 
        to-neutral-900 bg-clip-text text-transparent max-sm:flex max-sm:flex-col  "
      >
        Vítor Arimatéa{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-b dark:from-blue-200 dark:to-blue-400 from-[#496dd7] to-[#617fda]">
          Software Developer
        </span>
      </motion.h1>

      <motion.div variants={itemVariants}>
        <TextGenerateEffect
          className="font-normal tracking-wider text-[18px] sm:text-2xl text-center"
          words="Eu transformo códigos em experiências únicas e impactantes"
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Link href="#recentProjects">
          <Button
            title="Conheça meu trabalho"
            icon={<FaLocationArrow />}
            position="right"
            aria-label="Conheça meu trabalho"
          />
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
