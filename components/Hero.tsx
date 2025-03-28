import { Suspense, lazy } from "react";
import { motion } from "framer-motion";

import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";
import Button from "./ui/AnimatedButton";

const SpotlightNew = lazy(() => import("./ui/SpotlightNew"));
const Spotlight = lazy(() => import("./ui/Spotlight"));
const TextGenerateEffect = lazy(() => import("./ui/TextGenerateEffect"));

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Hero = () => {
  return (
    <motion.section
      id="hero"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="h-[100dvh] flex flex-col gap-4 md:gap-6 justify-center items-center"
    >
      <div className="hidden dark:block">
        <Suspense fallback={null}>
          <SpotlightNew />
          <Spotlight className="absolute top-0 left-1/2 transform -translate-x-1/2 h-[50vh] w-[50vw] opacity-50 blur-2xl" />
          <Spotlight className="absolute top-0 right-0 transform translate-x-1/2 h-[50vh] w-[50vw] opacity-50 blur-2xl" />
        </Suspense>
      </div>

      <motion.h1
        variants={itemVariants}
        className="text-[35px] md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 from-neutral-600 to-neutral-900"
      >
        Vítor Arimatéa{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-b dark:from-blue-200 dark:to-blue-400 from-blue-500 to-blue-900">
          Software developer
        </span>
      </motion.h1>

      <motion.div variants={itemVariants}>
        <Suspense fallback={<p className="text-xl">Carregando...</p>}>
          <TextGenerateEffect
            className="font-normal tracking-wider text-[18px] md:text-2xl text-center"
            words="Eu transformo códigos em experiências únicas e impactantes"
          />
        </Suspense>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Link href="#projects">
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
