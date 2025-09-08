import { motion } from "framer-motion";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

import { containerVariants, itemVariants } from "./animations/heroVariants";

import Spotlight from "./ui/Spotlight";
import SpotlightNew from "./ui/SpotlightNew";
import Title from "./common/Title";
import TextGenerateEffect from "./ui/TextGenerateEffect";
import Button from "./ui/AnimatedButton";

import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("Hero");

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative h-[100dvh] flex flex-col gap-4 md:gap-6 justify-center items-center mt-11 dark:mt-8"
    >
      <div className="hidden dark:sm:block" aria-hidden="true">
        <SpotlightNew />
        <Spotlight className="absolute inset-x-1/2 top-0 h-[50vh] w-[50vw] opacity-50 blur-2xl -translate-x-1/2" />
      </div>

      <motion.div variants={itemVariants}>
        <Title
          highlight={t("subtitle")}
          as="h1"
          className="text-[35px] sm:text-5xl font-bold text-center"
        >
          Vítor Arimatéa
        </Title>
      </motion.div>

      <motion.div variants={itemVariants}>
        <TextGenerateEffect
          className="font-normal tracking-wider text-[18px] sm:text-2xl text-center"
          words={t("description")}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Link href="#projetos-recentes">
          <Button
            title={t("button")}
            icon={<FaLocationArrow />}
            position="right"
            aria-label={t("button")}
          />
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
