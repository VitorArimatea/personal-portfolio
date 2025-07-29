export const navItems = [
  { title: "Início", href: "/" },
  { title: "Projetos", href: "/projects" },
  { title: "Sobre", href: "/about" },
  { title: "Serviços", href: "/services" },
];

export interface Project {
  id: number;
  title: string;
  slug: string;
  des: string;
  fullDescription: string;
  img: string;
  gallery?: string[];
  iconLists: string[];
  technologies: {
    name: string;
    description: string;
    icon: string;
  }[];
  features: string[];
  challenges?: string[];
  learnings?: string[];
  demoLink?: string;
  githubLink?: string;
  category: string;
  status: "completed" | "in-progress" | "planned";
  createdAt: string;
  updatedAt?: string;
  link: string; // Mantido para compatibilidade
}

export const recentProjects: Project[] = [
  {
    id: 1,
    title: "imSafeBank",
    slug: "imsafebank",
    des: "Uma landing page de um banco moderno conceitual",
    fullDescription:
      "O imSafeBank é uma landing page conceitual que representa um banco digital moderno e inovador. O projeto foi desenvolvido com foco em design responsivo, experiência do usuário intuitiva e performance otimizada. A interface apresenta seções bem estruturadas incluindo hero section, serviços bancários, depoimentos de clientes e informações sobre segurança financeira.",
    img: "/p1.svg",
    gallery: ["/p1.svg", "/p1-gallery-1.svg", "/p1-gallery-2.svg"],
    iconLists: ["/ts.svg", "/react.svg", "/tail.svg", "/vite.svg"],
    technologies: [
      {
        name: "TypeScript",
        description:
          "Linguagem principal para tipagem estática e maior segurança no código",
        icon: "/ts.svg",
      },
      {
        name: "React",
        description:
          "Biblioteca para construção da interface de usuário componentizada",
        icon: "/react.svg",
      },
      {
        name: "Tailwind CSS",
        description: "Framework CSS para estilização rápida e responsiva",
        icon: "/tail.svg",
      },
      {
        name: "Vite",
        description: "Build tool para desenvolvimento rápido e otimizado",
        icon: "/vite.svg",
      },
    ],
    features: [
      "Design responsivo para todos os dispositivos",
      "Animações suaves e interativas",
      "Seção de serviços bancários detalhada",
      "Depoimentos de clientes com carousel",
      "Formulário de contato funcional",
      "Otimização de performance e SEO",
    ],
    challenges: [
      "Criar um design que transmitisse confiança e modernidade",
      "Implementar animações performáticas",
      "Garantir acessibilidade em todos os componentes",
    ],
    learnings: [
      "Aprofundamento em design de interfaces financeiras",
      "Técnicas avançadas de animação com CSS",
      "Otimização de performance em aplicações React",
    ],
    demoLink: "https://im-safe-bank.vercel.app/",
    githubLink: "https://github.com/VitorArimatea/im-safe-bank",
    category: "Landing Page",
    status: "completed",
    createdAt: "2024-01-15",
    link: "https://im-safe-bank.vercel.app/",
  },
  {
    id: 2,
    title: "Weather Now",
    slug: "weather-now",
    des: "Website que possibilita a visualização do clima em tempo real",
    fullDescription:
      "Weather Now é uma aplicação web que fornece informações meteorológicas em tempo real para qualquer cidade do mundo. O projeto integra APIs de clima para exibir dados precisos incluindo temperatura atual, condições climáticas, umidade, velocidade do vento e previsão para os próximos dias. A interface é limpa e intuitiva, permitindo busca rápida por localização.",
    img: "/p2.svg",
    gallery: ["/p2.svg", "/p2-gallery-1.svg", "/p2-gallery-2.svg"],
    iconLists: ["/js.svg", "/react.svg", "/tail.svg"],
    technologies: [
      {
        name: "JavaScript",
        description: "Linguagem principal para lógica da aplicação",
        icon: "/js.svg",
      },
      {
        name: "React",
        description: "Biblioteca para construção da interface de usuário",
        icon: "/react.svg",
      },
      {
        name: "Tailwind CSS",
        description: "Framework CSS para estilização responsiva",
        icon: "/tail.svg",
      },
    ],
    features: [
      "Busca por cidade em tempo real",
      "Exibição de temperatura atual e condições climáticas",
      "Informações detalhadas: umidade, vento, pressão",
      "Previsão para 5 dias",
      "Interface responsiva e intuitiva",
      "Geolocalização automática",
      "Histórico de cidades pesquisadas",
    ],
    challenges: [
      "Integração com múltiplas APIs de clima",
      "Tratamento de erros de conectividade",
      "Otimização de chamadas à API",
      "Implementação de geolocalização",
    ],
    learnings: [
      "Integração com APIs externas",
      "Gerenciamento de estado em React",
      "Tratamento de dados assíncronos",
      "Implementação de funcionalidades de geolocalização",
    ],
    demoLink: "https://weather-now-demo.vercel.app/",
    githubLink: "https://github.com/VitorArimatea/weather-now",
    category: "Web App",
    status: "completed",
    createdAt: "2024-02-20",
    link: "https://github.com/VitorArimatea/weather-now",
  },
  {
    id: 3,
    title: "Notes",
    slug: "notes-app",
    des: "Um website para criar notas utilizando tanto texto quanto voz",
    fullDescription:
      "Notes é uma aplicação web inovadora que permite aos usuários criar e gerenciar notas de forma versátil, oferecendo tanto entrada de texto tradicional quanto reconhecimento de voz. O projeto utiliza tecnologias modernas para proporcionar uma experiência fluida de criação, edição e organização de notas, com funcionalidades avançadas como busca, categorização e sincronização local.",
    img: "/p3.svg",
    gallery: ["/p3.svg", "/p3-gallery-1.svg", "/p3-gallery-2.svg"],
    iconLists: ["/ts.svg", "/react.svg", "/tail.svg", "/vite.svg"],
    technologies: [
      {
        name: "TypeScript",
        description:
          "Linguagem principal para tipagem estática e desenvolvimento seguro",
        icon: "/ts.svg",
      },
      {
        name: "React",
        description: "Biblioteca para construção da interface de usuário",
        icon: "/react.svg",
      },
      {
        name: "Tailwind CSS",
        description: "Framework CSS para estilização moderna e responsiva",
        icon: "/tail.svg",
      },
      {
        name: "Vite",
        description: "Build tool para desenvolvimento otimizado",
        icon: "/vite.svg",
      },
    ],
    features: [
      "Criação de notas por texto e voz",
      "Reconhecimento de voz em tempo real",
      "Editor de texto rico com formatação",
      "Sistema de busca avançado",
      "Categorização e tags",
      "Armazenamento local persistente",
      "Interface drag-and-drop",
      "Modo escuro/claro",
      "Exportação de notas",
    ],
    challenges: [
      "Implementação de reconhecimento de voz cross-browser",
      "Sincronização entre diferentes tipos de entrada",
      "Otimização de performance com muitas notas",
      "Design de UX intuitivo para múltiplas funcionalidades",
    ],
    learnings: [
      "APIs de reconhecimento de voz do navegador",
      "Gerenciamento de estado complexo",
      "Técnicas de otimização de performance",
      "Design de interfaces acessíveis",
    ],
    demoLink: "https://notes-taupe-theta.vercel.app/",
    githubLink: "https://github.com/VitorArimatea/notes-app",
    category: "Productivity App",
    status: "completed",
    createdAt: "2024-03-10",
    link: "https://notes-taupe-theta.vercel.app/",
  },
  {
    id: 4,
    title: "Bustley",
    slug: "bustley-social",
    des: "Uma rede social completamente funcional, inspirada no antigo twitter",
    fullDescription:
      "Bustley é uma rede social completa e moderna inspirada no Twitter, desenvolvida com tecnologias de ponta. A plataforma oferece todas as funcionalidades esperadas de uma rede social: criação de posts, sistema de likes e retweets, seguir usuários, timeline personalizada, notificações em tempo real e muito mais. O projeto demonstra conhecimentos avançados em desenvolvimento full-stack, incluindo autenticação, banco de dados, APIs RESTful e interface de usuário responsiva.",
    img: "/p4.svg",
    gallery: [
      "/p4.svg",
      "/p4-gallery-1.svg",
      "/p4-gallery-2.svg",
      "/p4-gallery-3.svg",
    ],
    iconLists: [
      "/ts.svg",
      "/react.svg",
      "/next.svg",
      "/tail.svg",
      "/prisma.svg",
      "/mongodb.svg",
    ],
    technologies: [
      {
        name: "TypeScript",
        description:
          "Linguagem principal para tipagem estática em todo o projeto",
        icon: "/ts.svg",
      },
      {
        name: "React",
        description: "Biblioteca para construção da interface de usuário",
        icon: "/react.svg",
      },
      {
        name: "Next.js",
        description: "Framework React para SSR, roteamento e otimizações",
        icon: "/next.svg",
      },
      {
        name: "Tailwind CSS",
        description: "Framework CSS para estilização rápida e consistente",
        icon: "/tail.svg",
      },
      {
        name: "Prisma",
        description: "ORM para modelagem e queries do banco de dados",
        icon: "/prisma.svg",
      },
      {
        name: "MongoDB",
        description: "Banco de dados NoSQL para armazenamento de dados",
        icon: "/mongodb.svg",
      },
    ],
    features: [
      "Sistema completo de autenticação e autorização",
      "Criação, edição e exclusão de posts",
      "Sistema de likes, retweets e comentários",
      "Timeline personalizada e algoritmo de feed",
      "Seguir/deixar de seguir usuários",
      "Perfis de usuário personalizáveis",
      "Upload de imagens e mídia",
      "Notificações em tempo real",
      "Sistema de busca de usuários e posts",
      "Interface responsiva e moderna",
      "Modo escuro/claro",
    ],
    challenges: [
      "Implementação de autenticação segura",
      "Otimização de queries complexas no banco",
      "Gerenciamento de estado global complexo",
      "Implementação de notificações em tempo real",
      "Otimização de performance com grandes volumes de dados",
    ],
    learnings: [
      "Desenvolvimento full-stack com Next.js",
      "Modelagem de banco de dados para redes sociais",
      "Implementação de APIs RESTful",
      "Técnicas avançadas de otimização",
      "Arquitetura de aplicações escaláveis",
    ],
    demoLink: "https://bustley-social.vercel.app/",
    githubLink: "https://github.com/VitorArimatea/bustley-social-media",
    category: "Social Network",
    status: "completed",
    createdAt: "2024-04-05",
    updatedAt: "2024-05-15",
    link: "https://github.com/VitorArimatea/bustley-social-media",
  },
];

export const moreProjects: Project[] = [
  {
    id: 5,
    title: "Naurial",
    slug: "naurial",
    des: "LMS De educação",
    fullDescription:
      "Uma plataforma educacional, onde você pode aprender o que quiser com uma IA Companheira de estudos personalizável",
    img: "/p6.svg",
    gallery: ["/p6.svg", "/p6-gallery-1.svg", "/p6-gallery-2.svg"],
    iconLists: ["/ts.svg"],
    technologies: [
      {
        name: "TypeScript",
        description: "Linguagem principal para desenvolvimento Angular",
        icon: "/ts.svg",
      },
    ],
    features: [
      "Sistema de posts e artigos",
      "Categorização por gêneros de jogos",
      "Sistema de busca avançado",
      "Comentários e interação",
      "Interface responsiva",
      "Galeria de imagens",
      "Sistema de tags",
    ],
    challenges: [
      "Implementação de roteamento complexo",
      "Gerenciamento de estado da aplicação",
      "Otimização de performance",
    ],
    learnings: [
      "Desenvolvimento com Angular",
      "Arquitetura de aplicações SPA",
      "Gerenciamento de conteúdo dinâmico",
    ],
    githubLink: "https://github.com/VitorArimatea/blog-games",
    category: "Blog",
    status: "completed",
    createdAt: "2024-06-01",
    link: "https://github.com/VitorArimatea/blog-games",
  },
];

export const technologies = [
  {
    name: "TypeScript",
    description:
      "Uma linguagem de programação baseada em JavaScript que adiciona tipagem estática opcional.",
    icon: "ts.svg",
  },
  {
    name: "React",
    description:
      "Uma biblioteca JavaScript para criar interfaces de usuário dinâmicas e reutilizáveis.",
    icon: "react.svg",
  },
  {
    name: "Next.js",
    description:
      "Framework para React que permite renderização do lado do servidor e geração de sites estáticos.",
    icon: "next.svg",
  },
  {
    name: "Framer motion",
    description:
      "biblioteca de animações para React, que permite criar animações complexas e interações dinâmicas com facilidade e desempenho otimizado.",
    icon: "fm.svg",
  },
  {
    name: "Tailwind CSS",
    description:
      "Um framework CSS utilitário que facilita a criação de designs rápidos e responsivos.",
    icon: "tail.svg",
  },
];

export const moreTechnologies = [
  {
    name: "MongoDB",
    description:
      "Um SGBD NoSQL, armazena os dados em documentos no formato JSON, permitindo mais flexibilidade na organização das informações.",
    icon: "/mongodb.svg",
  },
  {
    name: "Prisma",
    description:
      "Ele simplifica a escrita de queries, tornando o código mais limpo, seguro e fácil de manter.",
    icon: "/prisma-black.svg",
  },
  {
    name: "MySQL",
    description:
      "Um dos bancos de dados SQL mais populares do mundo. Ele organiza os dados em tabelas, onde cada coluna tem um tipo de dado definido.",
    icon: "/mysql.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/github.svg",
    link: "https://github.com/VitorArimatea",
    alt: "Meu GitHub",
  },
  {
    id: 2,
    img: "/linkedin.svg",
    link: "https://www.linkedin.com/in/vitorarimatea/",
    alt: "Meu LinkedIn",
  },
];

export const getAllProjects = (): Project[] => {
  return [...recentProjects, ...moreProjects];
};

export const getProjectBySlug = (slug: string): Project | undefined => {
  return getAllProjects().find((project) => project.slug === slug);
};

export const getProjectsByCategory = (category: string): Project[] => {
  return getAllProjects().filter((project) =>
    project.category.toLowerCase().includes(category.toLowerCase())
  );
};

export const getProjectsByTechnology = (technology: string): Project[] => {
  return getAllProjects().filter((project) =>
    project.technologies.some((tech) =>
      tech.name.toLowerCase().includes(technology.toLowerCase())
    )
  );
};
