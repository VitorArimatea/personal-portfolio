import Link from "next/link";
import Image from "next/image";

import { PinContainer } from "./ui/PinContainer";
import { FaLocationArrow } from "react-icons/fa6";


import { cn } from "@/lib/utils";
import { Projects } from "@/types";

interface ProjectsGridProps {
  projects: Projects[];
}

const ProjectsGrid = ({ projects }: ProjectsGridProps) => {
  return (
    <section className="pb-10" id="projetos-recentes">
      <div className="flex flex-wrap justify-center items-center p-4 gap-8 sm:gap-x-32 mt-10">
        {projects.map((project) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={project.id}
          >
            <Link href={`/projects/${project.slug}`}>
              <PinContainer title={project.title}>
                <div className="relative flex items-center justify-center sm:w-100 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <Image
                      src="/effects/bg.svg"
                      alt="Fundo do card de projeto"
                      fill
                    />
                  </div>
                  <Image
                    src={project.img}
                    alt={`Imagem de pré-visualização do projeto ${project.title}`}
                    fill
                    className="absolute z-10 bottom-0"
                  />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {project.title}
                </h1>

                <p
                  className={cn(
                    "my-[1vh]",
                    "text-[#000]",
                    "dark:text-[#bdbec3]",
                    "lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  )}
                >
                  {project.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {project.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/20 rounded-full bg-[#04071D] w-8 h-8 lg:w-10 lg:h-10 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <Image
                          src={icon}
                          alt="Ícone da tecnologia"
                          className="p-2"
                          fill
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <p className="flex text-sm md:text-xs lg:text-xl">
                      Ver detalhes
                    </p>
                    <FaLocationArrow className="ms-3" color="#85BDFF" />
                  </div>
                </div>
              </PinContainer>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;
