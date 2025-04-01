import Button from "./ui/AnimatedButton";
import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="pt-20 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] dark:text-[#f1f1f1]">
          Pronto para colaborar no seu{" "}
          <span className="text-blue-400">próximo projeto.</span>
        </h1>
        <p className="dark:text-[#e2e2e2] mt-5 md:mt-10 text-center">
          Entre em contato comigo hoje mesmo.
        </p>
        <a href="mailto:contato@vitorarimatea.com.br">
          <Button
            title="Entrar em contato"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-10 md:mt-15 flex-col-reverse gap-5 md:flex-row justify-between items-center">
        <p className="text-[13px] md:text-base font-light md:font-normal dark:text-[#fff]">
          Copyright © 2025 Vítor Arimatéa - Todos os direitos reservados.
        </p>

        <div className="flex gap-5 md:gap-3 mt-5 md:mt-0">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center"
            >
              <Link
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-[#0a1128] dark:bg-transparent p-2"
              >
                <img src={info.img} alt={info.alt} width={30} height={30} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
