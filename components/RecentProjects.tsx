import { recentProjects, getAllProjects } from "@/data";

import Link from "next/link";
import { PinContainer } from "./ui/PinContainer";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";

interface RecentProjectsProps {
  showAll?: boolean;
}

const RecentProjects = ({ showAll = false }: RecentProjectsProps) => {
  const projects = showAll ? getAllProjects() : recentProjects;

  return (
    <section className="mb-10" id="recentProjects">
      <div className="flex flex-wrap justify-center py-10 md:gap-25 lg:gap-30">
        {projects.map((project) => (
          <div
            className="h-[30rem] flex items-center justify-center w-96"
            key={project.id}
          >
            <Link href={`/projects/${project.slug}`}>
              <PinContainer title={`Projeto ${project.title}`}>
                <div className="relative flex items-center justify-center w-75 sm:w-100 overflow-hidden h-[23vh] sm:h-[30vh] mb-10">
                  <Image
                    src={project.img}
                    alt="Pré visualização do projeto"
                    height={400}
                    width={400}
                  />
                </div>

                <h1 className="font-bold md:text-xl lg:text-2xl">
                  {project.title}
                </h1>

                <p className="text-sm lg:text-xl font-light md:font-normal text-[#0a1128] dark:text-blue-50 my-1">
                  {project.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {project.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-[#111] w-8 h-8 lg:w-10 lg:h-10 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <Image
                          src={icon}
                          alt="Ícone da tecnologia"
                          className="p-2"
                          height={50}
                          width={50}
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

export default RecentProjects;
