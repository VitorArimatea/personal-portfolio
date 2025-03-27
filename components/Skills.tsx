"use client";

import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "./ui/GlowingEffect";

export function Skills() {
  return (
    <div>
      <h1 className="heading bg-clip-text text-transparent bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 dark:bg-opacity-50 from-neutral-600 to-neutral-900 py-15">
        Minha{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-b dark:from-blue-200 dark:to-blue-400 bg-opacity-50 from-blue-500 to-blue-900">
          Abordagem Profissional
        </span>
      </h1>
      <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
        <GridItem
          area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
          icon={<Box className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Desenvolvimento Front-End"
          description="Criação de sites profissionais, blogs, SaaS, landing pages, e-commerce e outros tipos de aplicações web, sempre seguindo boas práticas de desenvolvimento. "
        />

        <GridItem
          area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
          icon={
            <Settings className="h-4 w-4 text-black dark:text-neutral-400" />
          }
          title="UX Design"
          description="Desenho interface no Figma de forma que ela seja clara, objetiva e principalmente intuitiva para a experiência do usuário."
        />

        <GridItem
          area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
          icon={<Lock className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Cybersegurança"
          description="Implementação de práticas e técnicas para garantir segurança digital em aplicações web. Utilizo boas práticas de segurança, como proteção contra SQL Injection, XSS e CSRF, autenticação segura (JWT, OAuth), criptografia de dados e monitoramento de vulnerabilidades. Meu foco é desenvolver sistemas seguros, confiáveis e resilientes contra ameaças cibernéticas."
        />

        <GridItem
          area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
          icon={
            <Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />
          }
          title="Desenvolvimento Back-end"
          description="Criação de APIs escaláveis e seguras, seguindo boas práticas como Clean Code, SOLID e Design Patterns. Utilizo tecnologias como Node.js, NestJS e Next.js (full-stack) para desenvolver sistemas eficientes, garantindo desempenho, segurança e manutenção simplificada."
        />

        <GridItem
          area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
          icon={<Search className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Banco de Dados"
          description="Modelagem e otimização de bancos de dados SQL e NoSQL, garantindo eficiência e integridade dos dados. Trabalho com PostgreSQL, MySQL, MongoDB e Redis, aplicando estratégias como normalização, indexação e cache para melhorar a performance das aplicações."
        />
      </ul>
    </div>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2.5xl border  p-2  md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6  dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2 ">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-black dark:text-white">
                {title}
              </h3>
              <h2
                className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] 
              md:text-base/[1.375rem]  text-black dark:text-neutral-400"
              >
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
