import PageTransition from "@/components/animations/PageTransition";

import Spotlight from "@/components/ui/Spotlight";
import SpotlightNew from "@/components/ui/SpotlightNew";

import Title from "@/components/common/Title";

import Image from "next/image";
import Link from "next/link";

import { socialMedia } from "@/data";

const About = () => {
  return (
    <div className="overflow-hidden">
      <PageTransition>
        <div className="hidden dark:md:flex">
          <Spotlight className="top-0 h-[50vh] blur-2xl" />
          <SpotlightNew />
        </div>

        <Title highlight="Mim" className="mt-20">
          Sobre
        </Title>

        <main className="flex flex-col lg:flex-row lg:h-[80dvh]">
          <div className="lg:w-[50%] flex flex-col justify-center items-center p-5">
            <Image
              src="/profile-pic.svg"
              alt="Foto de perfil do Vítor"
              className="lg:mb-0 border-2 border-blue-300 rounded-full z-5 shadow-md shadow-blue-400/30 hover:shadow-xl hover:shadow-blue-400/50 transition-shadow duration-300 ease-in-out"
              height={400}
              width={400}
            />
          </div>
          <div className="w-[100dvw] lg:w-[50%] flex flex-col justify-center text-left text-[17.5px] md:text-[20px] mb-4 py-2 px-8">
            <p className="lg:max-w-[28em]">
              Eu sou um desenvolvedor full-stack com pouco mais de 1 ano de
              experiência, apaixonado em criar soluções inovadoras e escaláveis
              da melhor forma possível. Usando tecnologias como Typescript,
              Next.js, Angular, Node.js, entre outras, eu busco entregar
              resultados de alta qualidade e desempenho.
            </p>
            <br />

            <p className="lg:max-w-[28em]">
              Acredito que a IA não é apenas um hype passageiro, mas uma ferramenta
              poderosa para aumentar a capacidade humana. Por isso, me
              especializei em integrar APIs de LLMs como GPT e Gemini para dar
              &quot;superpoderes&quot; a sistemas, tornando-os mais eficientes e a
              comunicação com clientes mais natural.
            </p>
            <div className="flex gap-3 mt-7">
              {socialMedia.map((info) => (
                <Link
                  key={info.id}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visitar ${info.alt}`}
                  className="flex justify-center items-center cursor-pointer"
                >
                  <Image
                    src={info.img}
                    alt={info.alt}
                    width={40}
                    height={40}
                    className="bg-blue-900 rounded-sm p-1.5 dark:bg-transparent"
                  />
                </Link>
              ))}
            </div>
          </div>
        </main>
      </PageTransition>
    </div>
  );
};

export default About;
