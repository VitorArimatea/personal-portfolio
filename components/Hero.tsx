import { FaLocationArrow } from "react-icons/fa6";

import Button from "./ui/AnimatedButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <section id="hero">
      <main className="h-[100dvh] flex flex-col gap-2 justify-center items-center bg-slate-50 dark:bg-[#111]">
        <div className="invisible dark:visible">
          <Spotlight />
          <Spotlight />
        </div>

        <h1 className=" text-[35px] md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 dark:bg-opacity-50 from-neutral-500 to-neutral-900">
          Vítor Arimatéa{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-b dark:from-blue-200 dark:to-blue-400 bg-opacity-50 from-blue-400 to-blue-800">
            Desenvolvedor de Software
          </span>
        </h1>

        <TextGenerateEffect
          className="font-light tracking-wider text-[18px] md:text-2xl lg:text-2xl text-center"
          words="Eu transformo códigos em experiências únicas e impactantes"
        />

        <a href="#projects">
          <Button
            title="Conheça meu trabalho"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </main>
    </section>
  );
};

export default Hero;
