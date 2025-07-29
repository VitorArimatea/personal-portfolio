"use client";

import Loading from "./loading";
import { useEffect, useState } from "react";

import Hero from "@/components/Hero";
import ScrollAnimatedSection from "@/components/animations/ScrollAnimatedSection";
import RecentProjects from "@/components/RecentProjects";
import { MyServices } from "@/components/MyServices";

import Footer from "@/components/Footer";
import Title from "@/components/common/Title";
import MyStack from "@/components/TechStack";

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
    <div
      className="relative bg-background dark:bg-background flex justify-center items-center flex-col overflow-hidden"
      aria-label="Página inicial do site"
    >
      <div className="max-w-7xl w-full px-5 sm:px-10 ">
        <Hero />

        <ScrollAnimatedSection>
          <Title highlight="Projetos" as={"h2"}>
            Meus melhores
          </Title>
          <RecentProjects />
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
    </div>
  );
}
