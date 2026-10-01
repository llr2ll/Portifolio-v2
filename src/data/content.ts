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
  { title: ["Front-end", "Front-end", "Front-end"], color: "#00d4ff",
    items: ["React", "Angular", "Vue", "TypeScript", "JavaScript", "HTML5", "CSS3", "Sass", "Next.js", "Redux", "Material UI", "Bootstrap"] },
  { title: ["Back-end & Data", "Back-end e Dados", "Back-end y Datos"], color: "#e91e8c",
    items: ["Node.js", "PHP", "Laravel", "C#", "REST / HTTP", "MySQL", "SQL Server", "MongoDB"] },
  { title: ["Tools & DevOps", "Ferramentas e DevOps", "Herramientas y DevOps"], color: "#ff6b35",
    items: ["Git", "GitHub", "Azure DevOps", "Vite", "Webpack", "Electron", "Postman", "Linux"] },
  { title: ["Design & Creative", "Design e Criativo", "Diseño y Creativo"], color: "#ffd700",
    items: ["Figma", "Photoshop", "Blender", "Unity", "Unreal Engine"] },
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
