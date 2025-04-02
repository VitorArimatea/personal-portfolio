import Button from "./ui/AnimatedButton";
import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import Link from "next/link";
import Title from "./ui/Title";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="pt-15 pb-10">
      <div className="flex flex-col items-center">
        <Title highlight="próximo projeto" className="lg:max-w-[45vw]">
          Pronto para colaborar no seu
        </Title>
        <span className="dark:text-[#e2e2e2] mt-5 md:mt-10 md:text-xl">
          Entre em contato comigo hoje mesmo.
        </span>
        <Link
          href="mailto:contato@vitorarimatea.com.br"
          rel="noopener noreferrer"
        >
          <Button
            title="Entrar em contato"
            icon={<FaLocationArrow />}
            position="right"
          />
        </Link>
      </div>

      <div className="flex mt-10 md:mt-15 flex-col-reverse md:flex-row justify-between items-center">
        <span className="text-[12px] md:text-base mt-10 md:mt-0">
          Copyright © 2025 Vítor Arimatéa - Todos os direitos reservados.
        </span>

        <div className="flex gap-5 md:gap-3 mt-3 md:mt-0">
          {socialMedia.map((info) => (
            <Link
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visitar ${info.alt}`}
              className="flex justify-center items-center cursor-pointer rounded-md bg-[#0a1128] dark:bg-transparent p-2"
            >
              <Image src={info.img} alt={info.alt} width={25} height={25} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
