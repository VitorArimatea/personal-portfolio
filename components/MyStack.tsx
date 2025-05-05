import { InfiniteMovingIcons } from "./ui/InfiniteMovingIcons";
import Title from "./ui/Title";

export function MyStack() {
  return (
    <section className="h-[90vh] flex flex-col items-center justify-center relative overflow-hidden">
      <Title highlight="Stack" className="mb-10">
        Minha
      </Title>

      <InfiniteMovingIcons
        items={technologies}
        direction="left"
        speed="slow"
        pauseOnHover={true}
      />
      <InfiniteMovingIcons
        items={moreTechnologies}
        direction="right"
        speed="normal"
        pauseOnHover={true}
      />
    </section>
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

const moreTechnologies = [
  {
    name: "MongoDB",
    description:
      "Um SGBD NoSQL, armazena os dados em documentos no formato JSON, permitindo mais flexibilidade na organização das informações.",
    icon: "/mongodb.svg",
  },
  {
    name: "Prisma",
    description:
      "Ele simplifica a escrita de queries, tornando o código mais limpo, seguro e fácil de manter.",
    icon: "/prisma-black.svg",
  },
  {
    name: "MySQL",
    description:
      "Um dos bancos de dados SQL mais populares do mundo. Ele organiza os dados em tabelas, onde cada coluna tem um tipo de dado definido.",
    icon: "/mysql.svg",
  },
];
