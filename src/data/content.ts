// All editable content lives here. Index 0 = EN, 1 = PT, 2 = ES.
export type L3 = [string, string, string];

export const LANGS = ["EN", "PT", "ES"] as const;

export const ui = {
  nav: {
    about: ["About", "Sobre", "Sobre"] as L3,
    skills: ["Skills", "Skills", "Skills"] as L3,
    projects: ["Projects", "Projetos", "Proyectos"] as L3,
    certificates: ["Certificates", "Certificados", "Certificados"] as L3,
    contact: ["Contact", "Contato", "Contacto"] as L3,
  },
  hero: {
    label: ["Available for new opportunities", "Disponível para novas oportunidades", "Disponible para nuevas oportunidades"] as L3,
    hi: ["Hi, I'm", "Olá, eu sou", "Hola, soy"] as L3,
    name: "Raphael Sanseverino",
    role: ["Full-stack developer who ships", "Desenvolvedor full-stack que entrega", "Desarrollador full-stack que entrega"] as L3,
    roleAccent: ["clean, fast, useful products", "produtos limpos, rápidos e úteis", "productos limpios, rápidos y útiles"] as L3,
    text: [
      "Based in Spain, EU citizen. I turn business needs into well-structured digital solutions — combining technology, performance and quality execution.",
      "Baseado na Espanha, cidadão da UE. Transformo necessidades de negócio em soluções digitais bem estruturadas, combinando tecnologia, performance e qualidade.",
      "Resido en España, ciudadano de la UE. Transformo necesidades de negocio en soluciones digitales bien estructuradas, combinando tecnología, rendimiento y calidad.",
    ] as L3,
    cta1: ["See my work", "Ver projetos", "Ver proyectos"] as L3,
    cta2: ["Get in touch", "Fale comigo", "Hablemos"] as L3,
    stats: [
      { n: "37", l: ["Certificates", "Certificados", "Certificados"] as L3 },
      { n: "3", l: ["Languages spoken", "Idiomas", "Idiomas"] as L3 },
      { n: "EU", l: ["Work-ready", "Pronto p/ trabalhar", "Listo para trabajar"] as L3 },
    ],
  },
  skills: {
    label: ["Toolbox", "Ferramentas", "Herramientas"] as L3,
    title: ["Tech I work with", "Tecnologias que uso", "Tecnologías que uso"] as L3,
  },
  projects: {
    label: ["Selected work", "Trabalhos", "Trabajos"] as L3,
    title: ["Things I've built", "O que já construí", "Lo que he construido"] as L3,
    code: ["Code", "Código", "Código"] as L3,
    live: ["Live", "Ver online", "Ver online"] as L3,
  },
  certs: {
    label: ["Always learning", "Sempre aprendendo", "Siempre aprendiendo"] as L3,
    title: ["Certificates", "Certificados", "Certificados"] as L3,
  },
  contact: {
    label: ["Let's talk", "Vamos conversar", "Hablemos"] as L3,
    title: ["Have a role or project in mind?", "Tem uma vaga ou projeto em mente?", "¿Tienes un puesto o proyecto en mente?"] as L3,
    text: [
      "Let's turn ideas into concrete, efficient and profitable solutions.",
      "Vamos transformar ideias em soluções concretas, eficientes e rentáveis.",
      "Transformemos ideas en soluciones concretas, eficientes y rentables.",
    ] as L3,
    mail: ["Email me", "Enviar e-mail", "Enviar correo"] as L3,
  },
};

export const links = {
  github: "https://github.com/llr2ll",
  whatsapp: "https://api.whatsapp.com/send?phone=34611326758",
  email: "mailto:raphaelsanseverino@gmail.com",
  linkedin: "linkedin.com/in/raphael-sanseverino"
};

export type Project = {
  name: string;
  accent: string;
  desc: L3;
  stack: string[];
  code?: string;
  live?: string;
};

// Edit / add projects here. Keep it to 3–4 for a tight page.
export const projects: Project[] = [
  {
    name: "PHOTU",
    accent: "#e91e8c",
    desc: [
      "Photography products & services platform: courses, digital products, photo-restoration plans and an in-progress online image editor.",
      "Plataforma de produtos e serviços de fotografia: cursos, produtos digitais, planos de restauração de fotos e um editor de imagens online em desenvolvimento.",
      "Plataforma de productos y servicios de fotografía: cursos, productos digitales, planes de restauración de fotos y un editor de imágenes online en desarrollo.",
    ],
    stack: ["React 19", "TanStack Start", "Tailwind 4", "TypeScript", "Supabase"],
    code: "https://github.com/llr2ll/photu",
  },
  {
    name: "Portfolio",
    accent: "#00d4ff",
    desc: [
      "This site — a single-page, trilingual portfolio built to be fast to scan for recruiters.",
      "Este site — um portfólio de página única e trilíngue, pensado para ser rápido de ler por recrutadores.",
      "Este sitio — un portafolio de una sola página y trilingüe, pensado para que los reclutadores lo lean rápido.",
    ],
    stack: ["React 18", "TypeScript", "CSS"],
    code: "https://github.com/llr2ll/Portifolio-v2",
  },
];

export type SkillGroup = { title: L3; color: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: ["Front-end", "Front-end", "Front-end"],
    color: "#00d4ff",
    items: [
      "React",
      "Angular",
      "Vue",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Sass",
      "Next.js",
      "Redux",
      "Material UI",
      "Bootstrap",
      "Vite",
      "Webpack",
      "jQuery",
      "Chart.js",
      "DevExtreme",
      "SyncFusion",
      "Font Awesome",
      "Babel",
      "Markdown"
    ]
  },

  {
    title: ["Back-end & Data", "Back-end e Dados", "Back-end y Datos"],
    color: "#e91e8c",
    items: [
      "Node.js",
      "Express",
      "PHP",
      "Laravel",
      "Composer",
      "C#",
      "REST / HTTP",
      "MySQL",
      "SQL Server",
      "MongoDB",
      "XAMPP",
      "Dart",
      "Lua",
      "JSON",
      "XML",
      "YAML"
    ]
  },

  {
    title: ["Tools & DevOps", "Ferramentas e DevOps", "Herramientas y DevOps"],
    color: "#ff6b35",
    items: [
      "Git",
      "GitHub",
      "Azure DevOps",
      "Postman",
      "Insomnia",
      "Thunder Client",
      "Linux",
      "Windows",
      "Arch Linux",
      "Ubuntu",
      "Kali Linux",
      "Electron",
    ]
  },

  {
    title: ["Design & Creative", "Design e Criativo", "Diseño y Creativo"],
    color: "#ffd700",
    items: [
      "Figma",
      "Photoshop",
      "Canva",
      "Paint.NET",
      "Krita",
      "Blender",
      "Unity",
      "Unreal Engine",
      "OBS",
      "Sony Vegas",
      "HostGator",
      "Wix",
      "WordPress",
      "Elementor",
    ]
  }
];


// Optimized images live in /public/certificates (full = 1800px, thumb = 480px, both webp).
const asset = (kind: "full" | "thumb", id: string) => `${process.env.PUBLIC_URL}/certificates/${kind}/${id}.webp`;
export const certificates: { title: string; full: string; thumb: string }[] = ([
  ["React JS (Degree)", "react-js"],
  ["React: Hooks, Contexts & Best Practices", "react-hooks-contextos-e-boas-praticas"],
  ["React Router: Navigating a SPA", "react-router-navigating-a-spa"],
  ["React: Styled Components", "react-abstracting-your-css-with-styled-components"],
  ["React: Automated Front-end Tests", "react-automating-tests-in-front-end-applications"],
  ["React: Function Components", "react-function-components-uma-abordagem-moderna"],
  ["React: Component Lifecycle", "react-ciclo-de-vida-dos-componentes"],
  ["React: How the Library Works", "react-entendendo-como-a-biblioteca-funciona"],
  ["TypeScript — Part 1", "typescript-parte-1-evoluindo-seu-javascript"],
  ["TypeScript — Part 2", "typescript-parte-2-mais-tecnicas-e-boas-praticas"],
  ["REST with Node.js, Express & MySQL", "rest-com-nodejs-api-com-express-e-mysql"],
  ["JavaScript for Backend", "javascript-for-backend"],
  ["Web Accessibility: Inclusive Design", "web-accessibility-create-inclusive-designs"],
  ["Web Accessibility — Part 1", "web-accessibility-part-1-making-your-frontend-inclusive"],
  ["Git & GitHub", "git-and-github-control-and-share-your-code"],
  ["CSS Grid", "css-grid-simplifying-layouts"],
  ["Flexbox", "flexbox-position-elements-on-the-canvas"],
  ["CSS Architecture", "css-architecture-uncomplicating-the-problems"],
  ["Bootstrap 4: Responsive Landing Page", "bootstrap-4-creating-a-responsive-landing-page"],
  ["HTML5 & CSS3 — Part 1", "html5-and-css3-part-1-create-a-webpage"],
  ["HTML5 & CSS3 — Part 2", "html5-and-css3-part-2-positioning-lists-and-navigation"],
  ["HTML5 & CSS3 — Part 3", "html5-and-css3-part-3-working-with-forms-and-tables"],
  ["HTML5 & CSS3 — Part 4", "html5-and-css3-part-4-advancing-in-css"],
  ["JavaScript: Browser & Design Patterns", "javascript-knowing-the-browser-and-design-patterns"],
  ["JavaScript: Language of the Web", "javascript-programming-in-the-language-of-the-web"],
  ["JavaScript: Exploring the Language", "javascript-exploring-the-language"],
  ["JavaScript: Types, Variables & Functions", "javascript-types-variables-and-functions"],
  ["JavaScript: Objects", "javascript-objects"],
  ["JavaScript: Arrays", "javascript-arrays"],
  ["JavaScript: Object-Oriented Programming", "javaccript-programming-object-oriented"],
  ["JavaScript: Interfaces & Inheritance", "javascript-interfaces-and-inheritance-in-object-oriented"],
  ["JavaScript & HTML: Game Development", "javascript-and-html-develop-a-game-and-practice-programming-logic"],
  ["JavaScript & HTML: Drawings, Animations & Game", "javascript-and-html-practice-logic-with-drawings-animations-and-a-game"],
  ["HTTP: Understanding the Web", "http-understanding-the-web"],
  ["Linux I: Using the Terminal", "Linux-I-using-the-terminal"],
  ["Dart: First Steps", "dart-primeiros-passos-com-a-linguagem"],
  ["Blender + Krita (Udemy)", "blender-plus-krita"],
] as [string, string][]).map(([title, id]) => ({ title, full: asset("full", id), thumb: asset("thumb", id) }));

/* ───────────── EXPERIENCE ───────────── */

export type Job = {
  company: string;
  accent: string;
  role: L3;
  place: L3;
  period: L3;
  team?: L3;
  bullets: [string[], string[], string[]]; // EN, PT, ES
};

export const experience = {
  label: ["Career", "Carreira", "Carrera"] as L3,
  title: ["Where I've worked", "Onde já trabalhei", "Dónde he trabajado"] as L3,
  jobs: [
    {
      company: "Procfit (Cosmos Pro)",
      accent: "#e91e8c",
      role: ["Full-Stack Developer", "Desenvolvedor Full-Stack", "Desarrollador Full-Stack"],
      place: ["Brazil", "Brasil", "Brasil"],
      period: ["Aug 2022 – Oct 2024", "Ago 2022 – Out 2024", "Ago 2022 – Oct 2024"],
      team: ["Team of 13", "Equipe de 13 pessoas", "Equipo de 13 personas"],
      bullets: [
        [
          "Developed web solutions using React for accounting systems and pharmacy purchasing and sales processes.",
          "Maintained and enhanced an Angular-based SaaS platform, resolving issues and developing new features, metrics, and interactive grids.",
          "Developed Node.js REST APIs for customer service and chat integrations (including WhatsApp) using OAuth and token-based authentication.",
          "Created and optimized databases and advanced queries in SQL Server.",
          "Automated deployments and version releases using Azure DevOps, with version control via Git.",
          "Developed new features and provided maintenance, support, and customer service within Scrum, Kanban, and Agile environments, while offering ad-hoc support to junior developers.",
        ],
        [
          "Desenvolvimento de soluções web com React para sistemas contábeis e processos de compra e venda de farmácias.",
          "Manutenção e evolução de uma plataforma SaaS em Angular, resolvendo problemas e desenvolvendo novas funcionalidades, métricas e grids interativos.",
          "Desenvolvimento de APIs REST em Node.js para atendimento ao cliente e integrações de chat (incluindo WhatsApp), com autenticação OAuth e baseada em tokens.",
          "Criação e otimização de bancos de dados e consultas avançadas em SQL Server.",
          "Automação de deploys e lançamentos de versões com Azure DevOps, com controle de versão via Git.",
          "Desenvolvimento de novas funcionalidades, manutenção, suporte e atendimento ao cliente em ambientes Scrum, Kanban e Ágil, além de apoio pontual a desenvolvedores juniores.",
        ],
        [
          "Desarrollo de soluciones web con React para sistemas contables y procesos de compra y venta de farmacias.",
          "Mantenimiento y mejora de una plataforma SaaS en Angular, resolviendo problemas y desarrollando nuevas funcionalidades, métricas y grids interactivos.",
          "Desarrollo de APIs REST en Node.js para atención al cliente e integraciones de chat (incluido WhatsApp), con autenticación OAuth y basada en tokens.",
          "Creación y optimización de bases de datos y consultas avanzadas en SQL Server.",
          "Automatización de despliegues y lanzamientos de versiones con Azure DevOps, con control de versiones mediante Git.",
          "Desarrollo de nuevas funcionalidades, mantenimiento, soporte y atención al cliente en entornos Scrum, Kanban y Ágiles, además de apoyo puntual a desarrolladores junior.",
        ],
      ],
    },
    {
      company: "UNIMES",
      accent: "#00d4ff",
      role: ["Web Developer", "Desenvolvedor Web", "Desarrollador Web"],
      place: ["Brazil", "Brasil", "Brasil"],
      period: ["Oct 2021 – Jul 2022", "Out 2021 – Jul 2022", "Oct 2021 – Jul 2022"],
      bullets: [
        [
          "End-to-end development and maintenance of institutional websites featuring academic information, schedules, registration details, and course content.",
          "Creation and updating of web pages using WordPress and Elementor, in coordination with internal departments.",
          "Use of HTML, CSS, and JavaScript for interfaces and troubleshooting, particularly regarding WordPress bugs.",
        ],
        [
          "Desenvolvimento e manutenção completos de sites institucionais com informações acadêmicas, horários, dados de matrícula e conteúdo dos cursos.",
          "Criação e atualização de páginas web com WordPress e Elementor, em coordenação com os departamentos internos.",
          "Uso de HTML, CSS e JavaScript em interfaces e na resolução de problemas, principalmente bugs do WordPress.",
        ],
        [
          "Desarrollo y mantenimiento integral de sitios web institucionales con información académica, horarios, datos de matrícula y contenido de los cursos.",
          "Creación y actualización de páginas web con WordPress y Elementor, en coordinación con los departamentos internos.",
          "Uso de HTML, CSS y JavaScript en interfaces y resolución de problemas, especialmente errores de WordPress.",
        ],
      ],
    },
  ] as Job[],
};

export const featured = {
  badge: ["Featured project", "Projeto em destaque", "Proyecto destacado"] as L3,
  name: [
    "Ticketing and multimedia management system",
    "Sistema de tickets e gerenciamento de multimídia",
    "Sistema de tickets y gestión multimedia",
  ] as L3,
  sub: ["Personal project · Full stack", "Projeto pessoal · Full stack", "Proyecto personal · Full stack"] as L3,
  bullets: [
    [
      "End-to-end design and development from scratch: frontend, APIs, databases, CSS, and scheduled tasks.",
      "Implementation of image, audio, text, and recording management, optimizing file and data storage and retrieval.",
    ],
    [
      "Design e desenvolvimento completos, do zero: front-end, APIs, bancos de dados, CSS e tarefas agendadas.",
      "Implementação de gerenciamento de imagens, áudio, texto e gravações, otimizando o armazenamento e a recuperação de arquivos e dados.",
    ],
    [
      "Diseño y desarrollo integral desde cero: front-end, APIs, bases de datos, CSS y tareas programadas.",
      "Implementación de gestión de imágenes, audio, texto y grabaciones, optimizando el almacenamiento y la recuperación de archivos y datos.",
    ],
  ] as [string[], string[], string[]],
  tags: ["Full-stack", "REST APIs", "Databases", "Scheduled tasks"]
};

export const languagesSpoken = {
  label: ["Communication", "Comunicação", "Comunicación"] as L3,
  title: ["Languages", "Idiomas", "Idiomas"] as L3,
  items: [
    { name: ["Portuguese", "Português", "Portugués"] as L3, level: ["Native", "Nativo", "Nativo"] as L3, dots: 5, color: "#39d353" },
    { name: ["English", "Inglês", "Inglés"] as L3, level: ["Advanced", "Avançado", "Avanzado"] as L3, dots: 4, color: "#00d4ff" },
    { name: ["Spanish", "Espanhol", "Español"] as L3, level: ["Intermediate", "Intermediário", "Intermedio"] as L3, dots: 3, color: "#ffd700" },
    { name: ["Galician", "Galego", "Gallego"] as L3, level: ["Intermediate", "Intermediário", "Intermedio"] as L3, dots: 3, color: "#e91e8c" },
  ],
};