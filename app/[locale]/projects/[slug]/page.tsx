import { notFound } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import PageTransition from "@/components/animations/PageTransition";
import Title from "@/components/common/Title";
import { getProjectBySlug } from "@/lib/actions";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-5 sm:px-10 py-20">
        <div className="mb-12">
          <Button variant="outline" asChild className="mb-8">
            <Link href="/projects" className="gap-2">
              <FaArrowLeft className="w-4 h-4" />
              Voltar para a página de projetos
            </Link>
          </Button>

          <div className="space-y-6">
            <Title className="mt-8 mb-4" highlight={project.category}>
              {project.title}
            </Title>

            <p className="text-lg text-muted-foreground leading-relaxed mt-10">
              {project.des ||
                "Este projeto representa um marco importante na minha trajetória como desenvolvedor, unindo tecnologia e criatividade para resolver desafios reais."}
            </p>

            <div className="flex flex-wrap gap-4">
              {project.link && (
                <Button asChild>
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-2"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                    Acessar
                  </Link>
                </Button>
              )}
              {project.github && (
                <Button variant="outline" asChild>
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-2"
                  >
                    <FaGithub className="w-4 h-4" />
                    Ver código no GitHub
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>

        <div className="relative mb-12 group">
          <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden border border-border bg-card">
            <Image
              src={project.img}
              alt={`Imagem de destaque do projeto ${project.title}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>
        </div>

        {/* Conteúdo */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Conteúdo principal */}
          <div className="lg:col-span-2 space-y-8">
            {/* Descrição completa */}
            <div className="p-6 rounded-xl border border-border">
              <h2 className="text-2xl font-bold mb-4">
                Por que criei este projeto?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.fullDescription ||
                  "Compartilho aqui os bastidores e motivações deste projeto, mostrando como cada etapa contribuiu para meu crescimento profissional e para entregar valor real aos usuários."}
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-4">
                Todas as principais funcionalidades
              </h2>
              <ul className="list-disc list-inside">
                {project.features.map((feature, index) => (
                  <li
                    className="text-muted-foreground leading-relaxed"
                    key={index}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Informações do projeto */}
            <div className="p-6 rounded-xl border border-border">
              <h3 className="text-xl font-bold mb-4">Detalhes do projeto</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status:</span>
                  <span className="font-medium">
                    {project.status === "completed"
                      ? "Trabalhando"
                      : project.status === "in-progress"
                      ? "Em andamento"
                      : "Planejado"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Categoria:</span>
                  <span className="font-medium">{project.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Criado em:</span>
                  <span className="font-medium">
                    {new Date(project.createdAt).toLocaleDateString("pt-BR")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
