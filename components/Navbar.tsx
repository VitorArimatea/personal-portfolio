"use client";

import React, { useState } from "react";

import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/MenuItem";
import { cn } from "@/lib/utils";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export function NavbarMenu() {
  return (
    <div className="relative w-full flex items-center justify-around">
      <Navbar />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("z-50", className)}>
      <Menu setActive={setActive}>
        <div className="md:w-5xl flex gap-8 justify-between items-center">
          <h1 className=" text-2xl font-bold dark:text-blue-50">{"{ VA }"}</h1>
          <div className="flex justify-center gap-5">
            <MenuItem
              setActive={setActive}
              active={active}
              item="Meus Projetos"
            >
              <Link href="/projects">
                <div className="text-sm grid grid-cols-1 md:grid-cols-2 gap-10 p-4">
                  <ProductItem
                    title="Saindo do papel..."
                    href="project1"
                    src="https://assets.aceternity.com/demos/algochurn.webp"
                    description="Logo logo você vai poder curtir essa belezinha!"
                  />
                  <ProductItem
                    title="Saindo do papel..."
                    href="project1"
                    src="https://assets.aceternity.com/demos/algochurn.webp"
                    description="Logo logo você vai poder curtir essa belezinha!"
                  />
                  <ProductItem
                    title="Saindo do papel..."
                    href="project1"
                    src="https://assets.aceternity.com/demos/algochurn.webp"
                    description="Logo logo você vai poder curtir essa belezinha!"
                  />
                  <ProductItem
                    title="Saindo do papel..."
                    href="project1"
                    src="https://assets.aceternity.com/demos/algochurn.webp"
                    description="Logo logo você vai poder curtir essa belezinha!"
                  />
                </div>
              </Link>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="Serviços">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/web-dev">Desenvolvimento Web</HoveredLink>
                <HoveredLink href="/interface-design">
                  Desenvolvimento back-end
                </HoveredLink>
                <HoveredLink href="/seo">SEO</HoveredLink>
              </div>
            </MenuItem>
          </div>
          <ThemeToggle />
        </div>
      </Menu>
    </div>
  );
}
