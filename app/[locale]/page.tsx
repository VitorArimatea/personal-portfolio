"use client";

import Loading from "./loading";
import { useEffect, useState } from "react";

import ScrollAnimatedSection from "@/components/animations/ScrollAnimatedSection";

import Hero from "@/components/Hero";
import Title from "@/components/common/Title";
import ProjectsGrid from "@/components/ProjectsGrid";
import { MyServices } from "@/components/MyServices";
import MyStack from "@/components/TechStack";
import Footer from "@/components/Footer";

import { recentProjects } from "@/data";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main
      className="relative bg-background dark:bg-background flex justify-center items-center flex-col overflow-hidden"
      aria-label="Página inicial do portfólio de Vítor Arimatéa"
    >
      <div className="max-w-7xl w-full px-5 sm:px-10 ">
        <Hero />

        <ScrollAnimatedSection>
          <Title highlight="Projetos Recentes" as={"h2"} className="dark:mt-3">
            Meus
          </Title>
          <ProjectsGrid projects={recentProjects} />
        </ScrollAnimatedSection>

        <ScrollAnimatedSection delay={0.2}>
          <section id="services">
            <MyServices />
          </section>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection delay={0.4}>
          <section id="mystack">
            <MyStack />
          </section>
        </ScrollAnimatedSection>

        <Footer />
      </div>
    </main>
  );
}
