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

const base = "https://github.com/llr2ll/certificates/blob/master/";
const f = (n: string) => `${base}${n}.jpg?raw=true`;
export const certificates: { title: string; img: string }[] = [
  ["React JS", "react-js"],
  ["React Hooks & Contexts", "react-hooks-contextos-e-boas-praticas"],
  ["React Router", "react-router-navigating-a-spa"],
  ["Styled Components", "react-abstracting-your-css-with-styled-components"],
  ["Front-end Tests", "react-automating-tests-in-front-end-applications"],
  ["TypeScript — Part 1", "typescript-parte-1-evoluindo-seu-javascript"],
  ["TypeScript — Part 2", "typescript-parte-2-mais-tecnicas-e-boas-praticas"],
  ["REST with Node.js, Express & MySQL", "rest-com-nodejs-api-com-express-e-mysql"],
  ["JavaScript for Backend", "javascript-for-backend"],
  ["Web Accessibility", "web-accessibility-create-inclusive-designs"],
  ["Git & GitHub", "git-and-github-control-and-share-your-code"],
  ["CSS Grid", "css-grid-simplifying-layouts"],
  ["Flexbox", "flexbox-position-elements-on-the-canvas"],
  ["JS: Design Patterns", "javascript-knowing-the-browser-and-design-patterns"],
  ["HTTP", "http-understanding-the-web"],
  ["Linux Terminal", "Linux-I-using-the-terminal"],
].map(([title, id]) => ({ title, img: f(id) }));
