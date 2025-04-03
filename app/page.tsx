"use client";

import Loading from "./loading";
import { useEffect, useState } from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScrollAnimatedSection from "@/components/ui/ScrollAnimatedSection";
import RecentProjects from "@/components/RecentProjects";
import { MyServices } from "@/components/MyServices";
import { MyStack } from "@/components/MyStack";
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
      <div className="max-w-7xl w-full px-5 sm:px-10 ">
        <Hero />

        <ScrollAnimatedSection>
          <RecentProjects />
        </ScrollAnimatedSection>

        <ScrollAnimatedSection delay={0.2}>
          <section id="services">
            <MyServices />
          </section>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection delay={0.4}>
          <MyStack />
        </ScrollAnimatedSection>

        <Footer />
      </div>
    </div>
  );
}
