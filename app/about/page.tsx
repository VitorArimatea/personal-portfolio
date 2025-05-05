import Navbar from "@/components/Navbar";

import PageTransition from "@/components/ui/PageTransition";
import Title from "@/components/ui/Title";

import Image from "next/image";
import Link from "next/link";
import { socialMedia } from "@/data";
import Spotlight from "@/components/ui/Spotlight";
import SpotlightNew from "@/components/ui/SpotlightNew";

const About = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className="hidden dark:flex">
        <Spotlight className="top-0 h-[50vh] blur-2xl" />
        <SpotlightNew />
      </div>
      <PageTransition>
        <Title highlight="Mim" className="mt-5">
          Sobre
        </Title>
        <main className="flex flex-col lg:flex-row lg:h-[75dvh]">
          <div className="lg:w-[50%] flex flex-col justify-center items-center p-5">
            <Image
              src="/vitor-profile-ghibli.svg"
              alt="Foto de perfil do Vítor"
              className="lg:mb-0 border-2 border-blue-300 rounded-full z-5 shadow-md shadow-blue-400/30 hover:shadow-xl hover:shadow-blue-400/50 transition-shadow duration-300 ease-in-out"
              height={400}
              width={400}
            />
          </div>
          <div className="w-[100dvw] lg:w-[50%] flex flex-col justify-center text-left text-[17.5px] md:text-[20px] mb-4 py-2 px-8">
            <p className="lg:max-w-[28em]">
              Sou desenvolvedor com experiência em projetos utilizando
              front-end, back-end, UX/UI e bancos de dados relacionais e não
              relacionais. Estou sempre aprendendo e aplicando novas tecnologias
              para entregar soluções de qualidade.
            </p>
            <br />
            <p className="lg:max-w-[28em]">
              Estou disponível para projetos como freelancer e também em busca
              de oportunidades para seguir crescendo na área de tecnologia.
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
