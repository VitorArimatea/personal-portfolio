import { FaLocationArrow } from "react-icons/fa6";

import Button from "./ui/AnimatedButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { SpotlightNew } from "./ui/SpotlightNew";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="hero">
      <main className="h-[100dvh] flex flex-col gap-2 justify-center items-center">
        <SpotlightNew />
        <Spotlight className="top-0 left-1/2 transform -translate-x-1/2 h-[50vh] w-[50vw] opacity-50 blur-2xl" />
        <Spotlight className="top-0 right-0 transform translate-x-1/2 h-[50vh] w-[50vw] opacity-50 blur-2xl" />

        <h1 className=" text-[35px] md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 dark:bg-opacity-50 from-neutral-600 to-neutral-900">
          Vítor Arimatéa{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-b dark:from-blue-200 dark:to-blue-400 bg-opacity-50 from-blue-500 to-blue-900">
            Software developer
          </span>
        </h1>

        <TextGenerateEffect
          className="font-normal tracking-wider text-[18px] md:text-2xl text-center"
          words="Eu transformo códigos em experiências únicas e impactantes"
        />

        <Link href="#projects">
          <Button
            title="Conheça meu trabalho"
            icon={<FaLocationArrow />}
            position="right"
          />
        </Link>
      </main>
    </section>
  );
};

export default Hero;
