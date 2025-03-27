"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingIcons } from "./ui/InfiniteMovingIcons";

export function MyTechs() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased  dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h1 className=" text-[35px] md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 dark:bg-opacity-50 from-neutral-600 to-neutral-900 mb-10">
        Minha{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-b dark:from-blue-200 dark:to-blue-400 bg-opacity-50 from-blue-500 to-blue-900">
          Stack
        </span>
      </h1>

      <InfiniteMovingIcons
        items={technologies}
        direction="right"
        speed="slow"
        pauseOnHover={true}
      />
    </div>
  );
}

const technologies = [
  {
    name: "TypeScript",
    description:
      "Uma linguagem de programação baseada em JavaScript que adiciona tipagem estática opcional.",
    icon: "ts.svg",
  },
  {
    name: "React",
    description:
      "Uma biblioteca JavaScript para criar interfaces de usuário dinâmicas e reutilizáveis.",
    icon: "react.svg",
  },
  {
    name: "Next.js",
    description:
      "Framework para React que permite renderização do lado do servidor e geração de sites estáticos.",
    icon: "next.svg",
  },
  {
    name: "Framer motion",
    description:
      "biblioteca de animações para React, que permite criar animações complexas e interações dinâmicas com facilidade e desempenho otimizado.",
    icon: "fm.svg",
  },
  {
    name: "Tailwind CSS",
    description:
      "Um framework CSS utilitário que facilita a criação de designs rápidos e responsivos.",
    icon: "tail.svg",
  },
];
