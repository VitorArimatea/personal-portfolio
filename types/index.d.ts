export interface Projects {
  id: number;
  title: string;
  slug: string;
  des: string;
  fullDescription: string;
  img: string;
  gallery?: string[];
  iconLists: string[];
  features: string[];
  challenges?: string[];
  learnings?: string[];
  demoLink?: string;
  github?: string;
  category: string;
  status: "completed" | "in-progress" | "planned";
  createdAt: string;
  updatedAt?: string;
  link: string;
}
