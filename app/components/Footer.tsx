import Button from "./ui/Button";

import { socialMedia } from "@/data";
import { FaLocationArrow } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pt-20 pb-10 " id="contact">
      
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] text-[#f1f1f1]">
          Pronto para levar <span className="text-blue-400">sua presença digital</span> ao próximo nível?
        </h1>
        <p className="text-[#e2e2e2] mt-5 md:mt-10 text-center">
          Entre em contato comigo hoje mesmo e vamos discutir como posso ajudar você a atingir seus objetivos.
        </p>
        <a href="mailto:contact@vitorarimatea.com">
          <Button
            title="Entrar em contato"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-15 flex-col md:flex-row justify-between items-center">
        
        <p className="text-[13px] md:text-base font-light md:font-normal">
          Copyright © 2025 Vítor Arimatéa - Todos os direitos reservados.
        </p>

        <div className="flex gap-5 md:gap-3 mt-5 md:mt-0">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center"
            >
              <a href={info.link} target="_blank" rel="noopener noreferrer">
                <img src={info.img} alt={info.alt} width={30} height={30} />
              </a>
              
            </div>
          ))}
        </div>
        
      </div>
      
    </footer>
  );
};

export default Footer;