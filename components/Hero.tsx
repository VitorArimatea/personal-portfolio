import { motion } from "framer-motion";

import Spotlight from "./ui/Spotlight";
import SpotlightNew from "./ui/SpotlightNew";
import TextGenerateEffect from "./ui/TextGenerateEffect";
import Link from "next/link";
import Button from "./ui/AnimatedButton";
import { FaLocationArrow } from "react-icons/fa6";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -50 },
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
      <div className="hidden sm:flex">
        <SpotlightNew />
        <Spotlight className="absolute inset-x-1/2 top-0 h-[50vh] w-[50vw] opacity-50 blur-2xl -translate-x-1/2" />
        <Spotlight className="absolute top-0 right-0 h-[50vh] w-[50vw] opacity-50 blur-2xl translate-x-1/2" />
      </div>

      <motion.h1
        variants={itemVariants}
        className="text-[35px] md:text-5xl font-bold text-center bg-gradient-to-b from-neutral-600 to-neutral-900 dark:from-neutral-50 dark:to-neutral-400 bg-clip-text text-transparent [webkit-mask-image:linear-gradient(to_bottom,rgba(0,0,0,1),rgba(0,0,0,0.8))] mask-image:linear-gradient(to_bottom,rgba(0,0,0,1),rgba(0,0,0,0.8))"
      >
        Vítor Arimatéa{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-b dark:from-blue-200 dark:to-blue-400 from-blue-500 to-blue-900 [webkit-mask-image:linear-gradient(to_bottom,rgba(0,0,0,1),rgba(0,0,0,0.8))] mask-image:linear-gradient(to_bottom,rgba(0,0,0,1),rgba(0,0,0,0.8))">
          Software Developer
        </span>
      </motion.h1>

      <motion.div variants={itemVariants}>
        <TextGenerateEffect
          className="font-normal tracking-wider text-[18px] md:text-2xl text-center"
          words="Eu transformo códigos em experiências únicas e impactantes"
        />
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
