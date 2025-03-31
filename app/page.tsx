"use client";

import Loading from "./loading";
import { useEffect, useState } from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import RecentProjects from "@/components/RecentProjects";
import { Skills } from "@/components/Skills";
import { MyTechs } from "@/components/MyTechs";
import Footer from "@/components/Footer";

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
      <Navbar />
      <div className="max-w-7xl w-full px-5 sm:px-10">
        <Hero />

        <AnimatedSection>
          <RecentProjects />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Skills />
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <MyTechs />
        </AnimatedSection>

        <Footer />
      </div>
    </div>
  );
}
