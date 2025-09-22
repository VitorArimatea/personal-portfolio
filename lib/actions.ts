import { moreProjects, recentProjects } from "@/constants";
import { Projects } from "@/types";

export const getAllProjects = (): Projects[] => {
  return [...recentProjects, ...moreProjects];
};

export const getProjectBySlug = (slug: string): Projects | undefined => {
  return getAllProjects().find((project) => project.slug === slug);
};

export const getProjectsByCategory = (category: string): Projects[] => {
  return getAllProjects().filter((project) =>
    project.category.toLowerCase().includes(category.toLowerCase())
  );
};
