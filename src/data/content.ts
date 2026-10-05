// All editable content lives here. Index 0 = EN, 1 = PT, 2 = ES. "#00d4ff",
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
    roleAccent: ["clean, fast, useful projects", "projetos limpos, rápidos e úteis", "proyectos limpios, rápidos y útiles"] as L3,
    text: [
      "At the moment in the province of Pontevedra - Spain (north), EU citizen. I turn business needs into well-structured digital solutions — combining technology, performance and quality execution.",
      "Atualmente na província de Pontevedra - Espanha (norte), cidadão da UE. Transformo necessidades de negócio em soluções digitais bem estruturadas, combinando tecnologia, performance e qualidade.",
      "Actualmente en la provincia de Pontevedra - España (norte), ciudadano de la UE. Transformo necesidades de negocio en soluciones digitales bien estructuradas, combinando tecnología, rendimiento y calidad.",
    ] as L3,
    cta1: ["See my work", "Ver projetos", "Ver proyectos"] as L3,
    cta2: ["Get in touch", "Fale comigo", "Hablemos"] as L3,
    stats: [
      { n: "36", l: ["Certificates", "Certificados", "Certificados"] as L3 },
      { n: "4", l: ["Languages spoken", "Idiomas", "Idiomas"] as L3 },
      { n: "UE", l: ["Work-ready", "Pronto p/ trabalhar", "Listo para trabajar"] as L3 },
    ],
  },
  skills: {
    label: ["Toolbox", "Ferramentas", "Herramientas"] as L3,
    title: ["Tech I work with", "Tecnologias que uso", "Tecnologías que uso"] as L3,
  },
  projects: {
    label: ["Selected work", "Trabalhos", "Trabajos"] as L3,
    title: ["Things I've built", "O que já construí", "Lo que he construido"] as L3,

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
  linkedin: "https://linkedin.com/in/raphael-sanseverino"
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

export const featured = {
  badge: ["Featured project", "Projeto em destaque", "Proyecto destacado"] as L3,
  name: [
    "Ticketing and multimedia management system",
    "Sistema de tickets e gerenciamento de multimídia",
    "Sistema de tickets y gestión multimedia",
  ] as L3,
  sub: ["`Profissional project · Full stack", "Projeto profissional · Full stack", "Proyecto profesional · Full stack"] as L3,
  desc: [
    "Customer support and service desk interface designed to manage the complete ticket lifecycle. The project includes a data grid with filtering, sorting and pagination, a Kanban board organized by teams and ticket status, and a detailed ticket workspace with customer information, categorization, priority, SLA, responsible agents, internal and public interactions, attachments, activity tracking and resolution details. The interface also includes responsive navigation between tickets, visual status and priority indicators, and a rich-text communication area.",
    "Interface de atendimento e gestão de chamados desenvolvida para acompanhar todo o ciclo de vida de um ticket. O projeto conta com uma grade de dados com filtros, ordenação e paginação, um painel Kanban organizado por equipes e status, além de uma área detalhada do chamado com informações do cliente, categorização, prioridade, SLA, agentes responsáveis, interações internas e públicas, anexos, registro de atividades e dados de resolução. A interface também apresenta navegação entre tickets, indicadores visuais de status e prioridade e um editor para comunicação com o solicitante.",
    "Interfaz de atención y gestión de tickets diseñada para gestionar todo el ciclo de vida de una solicitud. El proyecto incluye una tabla de datos con filtros, ordenación y paginación, un panel Kanban organizado por equipos y estados, y un espacio detallado del ticket con información del cliente, categorización, prioridad, SLA, agentes responsables, interacciones internas y públicas, archivos adjuntos, registro de actividades y datos de resolución. La interfaz también incorpora navegación entre tickets, indicadores visuales de estado y prioridad y un editor para la comunicación con el solicitante."
  ],
  stack: [ "React", "REST / HTTP", "TypeScript", "MaterialUI", "DevExtreme-DataGrid", "Kanban" ],
  code: "/projects/tickets-atendentes.html"
};

export const projects: Project[] = [
  {
    name: "SAC",
    accent: "#7C3AED",
    desc: [
      "Enterprise customer service and incident management platform with protocol registration, customer and invoice management, product-level occurrences, triage workflows, interaction history, attachments, status tracking and reporting.",
      "Plataforma empresarial de atendimento ao cliente e gestão de ocorrências, com registro de protocolos, gestão de clientes e notas fiscais, ocorrências por produto, fluxos de triagem, histórico de interações, anexos, acompanhamento de status e relatórios.",
      "Plataforma empresarial de atención al cliente y gestión de incidencias, con registro de protocolos, gestión de clientes y facturas, incidencias por producto, flujos de triaje, historial de interacciones, archivos adjuntos, seguimiento de estados e informes.",
    ],
    stack: ["React", "TypeScript", "REST API", "DevExtreme", "SVG"],
    code: "/projects/sac.html"
  },
  {
    name: "MMC Plug and Play",
    accent: "#0162DD",
    desc: [
      "Enterprise-style configuration dashboard with multi-step workflows for client onboarding, store and supplier management, ERP/webhook integrations, purchasing rules and user administration.",
      "Dashboard de configuração empresarial com fluxos em múltiplas etapas para onboarding de clientes, gestão de lojas e fornecedores, integrações com ERP/webhooks, regras de compra e administração de usuários.",
      "Dashboard de configuración empresarial con flujos por etapas para onboarding de clientes, gestión de tiendas y proveedores, integraciones con ERP/webhooks, reglas de compra y administración de usuarios.",
    ],
    stack: ["React", "SyncFusion", "TypeScript", "REST API", "MaterialUI"],
    code: "/projects/plug-and-play.html"
  },
  {
    name: "Trade Marketing",
    accent: "#286B2A",
    desc: [
      "Trade marketing management dashboard for retail execution, with composition showcases, location-based filters, favorites, contracts, pre-contract creation, execution proofs and planogram visualization.",
      "Dashboard de gestão de Trade Marketing para execução no varejo, com vitrine de composições, filtros por localização, favoritos, contratos, criação de pré-contratos, comprovações de execução e visualização de planogramas.",
      "Dashboard de gestión de Trade Marketing para ejecución en retail, con escaparate de composiciones, filtros por ubicación, favoritos, contratos, creación de precontratos, comprobaciones de ejecución y visualización de planogramas.",
    ],
    stack: ["React", "MaterialUI", "TypeScript", "SVG", "DevExtreme"],
    code: "/projects/Trade.html"
  },
  {
    name: "Inventory Management",
    accent: "#F5C542",
    desc: [
      "Web-based business management and inventory platform focused on stock control, product movement, inventory tracking and operational workflows.",
      "Plataforma web de gestão empresarial e inventário, focada no controle de estoque, movimentação de produtos, acompanhamento de inventário e fluxos operacionais.",
      "Plataforma web de gestión empresarial e inventario, enfocada en el control de stock, movimiento de productos, seguimiento del inventario y flujos operativos.",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Material UI", "Supabase", "UX/UI"],
    code: "/projects/estela-do-mar.html"
  }
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
const asset = (kind: "full" | "thumb", id: string) => `${process.env.PUBLIC_URL}/certificates/${kind}/${id}.jpg`;
export const certificates: { title: string; full: string; thumb: string }[] = ([
  ["React: Hooks, Contexts & Best Practices", "react-hooks-contexts-and-best-practices"],
  ["React Router: Navigating a SPA", "react-router-navigating-a-spa"],
  ["React: Styled Components", "react-abstracting-your-css-with-styled-components"],
  ["React: Automated Front-end Tests", "react-automating-tests-in-front-end-applications"],
  ["React: Function Components", "react-function-components-uma-abordagem-moderna"],
  ["React: Component Lifecycle", "react-ciclo-de-vida-dos-componentes"],
  ["React: How the Library Works", "react-understanding-how-the-library-works"],
  ["TypeScript — Part 1", "typescript-parte-1-evoluindo-seu-javascript"],
  ["TypeScript — Part 2", "typescript-parte-2-mais-tecnicas-e-boas-praticas"],
  ["REST with Node.js, Express & MySQL", "rest-com-nodejs-api-com-express-e-mysql"],
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
  ["Cross-cutting competence in information and communication technology", "Senai"],
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
  result?: { link: string; label: string; text?: [string, string, string] }; // EN, PT, ES
};

export const experience = {
  label: ["Career", "Carreira", "Carrera"] as L3,
  title: ["Where I've worked", "Onde já trabalhei", "Dónde he trabajado"] as L3,
  companiesTitle: ["Companies", "Empresas", "Empresas"] as L3,
  selectedProjects: ["Selected projects:", "Projetos selecionados:", "Proyectos seleccionados:"] as L3,
  jobs: [
    {
      company: "Procfit (Cosmos Pro)",
      accent: "#e91e8c",
      role: [
        "Full-Stack Developer Senior",
        "Desenvolvedor Full-Stack Senior",
        "Desarrollador Full-Stack Senior",
      ],
      place: [
        "Brazil",
        "Brasil",
        "Brasil",
      ],
      period: [
        "Aug 2022 – Oct 2024",
        "Ago 2022 – Out 2024",
        "Ago 2022 – Oct 2024",
      ],
      team: [
        "Team of 13",
        "Equipe de 13 pessoas",
        "Equipo de 13 personas",
      ],
      bullets: [
        [
          "Developed and maintained web applications using React and Angular, supporting accounting operations and pharmacy purchasing and sales workflows.",
          "Enhanced an Angular-based SaaS platform, implementing new features, performance improvements, business metrics, interactive data grids, and resolving application issues.",
          "Designed and developed Node.js REST APIs for customer service and chat integrations, using OAuth and token-based authentication.",
          "Designed and optimized SQL Server databases, developing complex SQL queries and improving data retrieval and application performance.",
          "Managed software releases and automated deployment workflows using Azure DevOps, with Git for source control and version management.",
          "Participated in the full software development lifecycle, from requirements analysis and development to testing, deployment, maintenance, and production support.",
          "Worked in Scrum, Kanban, and Agile environments, collaborating with cross-functional teams to deliver new features and resolve technical issues.",
          "Collaborated with UX/UI designers to define, implement, and improve user interfaces and overall user experience.",
          "Provided technical support and troubleshooting for customers and internal teams, ensuring timely resolution of application and integration issues.",
          "Supported junior developers through technical guidance, code review, troubleshooting, and ad-hoc assistance on development tasks.",
        ],
        [
          "Desenvolvimento e manutenção de aplicações web utilizando React e Angular, atendendo operações contábeis e fluxos de compra e venda de farmácias.",
          "Evolução de uma plataforma SaaS baseada em Angular, implementando novas funcionalidades, melhorias de performance, métricas de negócio, grids interativos e correções de problemas da aplicação.",
          "Desenvolvimento de APIs REST em Node.js para atendimento ao cliente e integrações de chat, utilizando autenticação OAuth e baseada em tokens.",
          "Desenvolvimento e otimização de bancos de dados SQL Server, criando consultas SQL complexas e melhorando a recuperação de dados e a performance das aplicações.",
          "Gerenciamento de releases e automação de fluxos de deploy utilizando Azure DevOps, com Git para controle de código-fonte e versionamento.",
          "Participação em todo o ciclo de desenvolvimento de software, desde análise de requisitos e desenvolvimento até testes, deploy, manutenção e suporte em produção.",
          "Atuação em ambientes Scrum, Kanban e Ágil, colaborando com equipes multidisciplinares para entregar novas funcionalidades e resolver problemas técnicos.",
          "Colaboração com designers de UX/UI na definição, implementação e melhoria das interfaces e da experiência geral dos usuários.",
          "Suporte técnico e troubleshooting para clientes e equipes internas, garantindo a resolução dos problemas de aplicação e integrações.",
          "Apoio a desenvolvedores juniores por meio de orientação técnica, code review, troubleshooting e suporte pontual em tarefas de desenvolvimento.",
        ],
        [
          "Desarrollo y mantenimiento de aplicaciones web utilizando React y Angular, dando soporte a operaciones contables y flujos de compra y venta de farmacias.",
          "Mejora de una plataforma SaaS basada en Angular, implementando nuevas funcionalidades, mejoras de rendimiento, métricas de negocio, grids interactivos y resolución de problemas de la aplicación.",
          "Diseño y desarrollo de APIs REST en Node.js para atención al cliente e integraciones de chat, utilizando autenticación OAuth y basada en tokens.",
          "Diseño y optimización de bases de datos SQL Server, desarrollando consultas SQL complejas y mejorando la recuperación de datos y el rendimiento de las aplicaciones.",
          "Gestión de releases y automatización de flujos de despliegue mediante Azure DevOps, utilizando Git para el control de código fuente y versionado.",
          "Participación en todo el ciclo de desarrollo de software, desde el análisis de requisitos y desarrollo hasta pruebas, despliegue, mantenimiento y soporte en producción.",
          "Trabajo en entornos Scrum, Kanban y Ágiles, colaborando con equipos multidisciplinares para entregar nuevas funcionalidades y resolver problemas técnicos.",
          "Colaboración con diseñadores de UX/UI para definir, implementar y mejorar las interfaces y la experiencia general de los usuarios.",
          "Soporte técnico y troubleshooting para clientes y equipos internos, garantizando la resolución oportuna de problemas de aplicaciones e integraciones.",
          "Apoyo a desarrolladores junior mediante orientación técnica, revisión de código, troubleshooting y asistencia puntual en tareas de desarrollo.",
        ],
      ],
      result: {
        link: "https://panoramafarmaceutico.com.br/automacao-de-compras-do-cosmos-pro/",
        label: "Panorama Farmacêutico ↗",
        text: [
          "Featured: MMC project results in 2024 — Procfit's Cosmos Pro purchasing automation platform reached R$ 4 billion in orders on December 19, 2024. The solution supported merchandise replenishment operations across more than 4,000 points of sale and automatically transmitted 10 million orders to 168 suppliers, including distributors and logistics operators.",
          "Destaque: resultados do projeto MMC em 2024 — A plataforma de automação de compras Cosmos Pro, da Procfit, atingiu R$ 4 bilhões em pedidos em 19 de dezembro de 2024. A solução apoiou operações de reposição de mercadorias em mais de 4.000 pontos de venda e transmitiu automaticamente 10 milhões de pedidos para 168 fornecedores, incluindo distribuidores e operadores logísticos.",
          "Destacado: resultados del proyecto MMC en 2024 — La plataforma de automatización de compras Cosmos Pro de Procfit alcanzó los 4.000 millones de reales brasileños en pedidos el 19 de diciembre de 2024. La solución apoyó las operaciones de reposición de mercancías en más de 4.000 puntos de venta y transmitió automáticamente 10 millones de pedidos a 168 proveedores, incluidos distribuidores y operadores logísticos.",
        ],
      },
    },
    {
      company: "UNIMES",
      accent: "#7c3aed",
      role: [
        "Web Developer",
        "Desenvolvedor Web",
        "Desarrollador Web",
      ],
      place: [
        "Brazil",
        "Brasil",
        "Brasil",
      ],
      period: [
        "Oct 2021 – Jul 2022",
        "Out 2021 – Jul 2022",
        "Oct 2021 – Jul 2022",
      ],
      team: [
        "Universidade Metropolitana de Santos",
        "Universidade Metropolitana de Santos",
        "Universidad Metropolitana de Santos",
      ],
      bullets: [
        [
          "End-to-end development and maintenance of institutional websites featuring academic information, schedules, registration details, and course content.",
          "Creation and updating of web pages using WordPress and Elementor, in coordination with internal departments.",
          "Use of HTML, CSS, and JavaScript for interfaces and troubleshooting, particularly regarding WordPress bugs.",
          "Built responsive and reusable UI components using React and TypeScript.",
          "Designed user flows and interfaces with a focus on UX/UI and usability.",
          "Optimized web interfaces for desktop, tablet, and mobile devices.",
          "Maintained and continuously enhanced websites based on evolving institutional requirements.",
        ],
        [
          "Desenvolvimento e manutenção completos de sites institucionais com informações acadêmicas, horários, dados de matrícula e conteúdo dos cursos.",
          "Criação e atualização de páginas web utilizando WordPress e Elementor, em coordenação com os departamentos internos.",
          "Uso de HTML, CSS e JavaScript para interfaces e resolução de problemas, especialmente relacionados a bugs do WordPress.",
          "Desenvolvimento de componentes de UI responsivos e reutilizáveis utilizando React e TypeScript.",
          "Criação de fluxos de usuário e interfaces com foco em UX/UI e usabilidade.",
          "Otimização das interfaces web para desktop, tablet e dispositivos móveis.",
          "Manutenção e evolução contínua dos sites de acordo com as necessidades institucionais.",
        ],
        [
          "Desarrollo y mantenimiento integral de sitios web institucionales con información académica, horarios, datos de matrícula y contenido de los cursos.",
          "Creación y actualización de páginas web utilizando WordPress y Elementor, en coordinación con los departamentos internos.",
          "Uso de HTML, CSS y JavaScript para interfaces y resolución de problemas, especialmente relacionados con errores de WordPress.",
          "Desarrollo de componentes de UI responsivos y reutilizables utilizando React y TypeScript.",
          "Diseño de flujos de usuario e interfaces con enfoque en UX/UI y usabilidad.",
          "Optimización de las interfaces web para escritorio, tablet y dispositivos móviles.",
          "Mantenimiento y mejora continua de los sitios web de acuerdo con las necesidades institucionales.",
        ],
      ],
    }
  ] as Job[],
  freelance: {
    role: [ "Full-Stack Developer | Freelancer", "Desenvolvedor Full-Stack | Freelancer", "Desarrollador Full-Stack | Freelancer" ],
    text: [
      "Developing web applications and digital solutions for independent businesses, from requirements analysis and UI/UX design to frontend development, backend integration, database management, and deployment.",
      "Desenvolvimento de aplicações web e soluções digitais para empresas independentes, desde a análise de requisitos e design de UI/UX até o desenvolvimento frontend, integração com backend, gerenciamento de banco de dados e implantação.",
      "Desarrollo de aplicaciones web y soluciones digitales para empresas independientes, desde el análisis de requisitos y diseño de UI/UX hasta el desarrollo frontend, integración backend, gestión de bases de datos y despliegue.",
    ] as L3,
    period: [ "Nov 2024 – Present", "Nov 2024 – Presente", "Nov 2024 – Presente" ],
    jobs : [
      {
        company: "Castro de Agueiro (Estrela do Mar)",
        accent: "#00d4ff",
        team: [ "Independent", "Independente", "Independiente" ],
        place: [ "Remote · Brazil / Spain", "Remoto · Brasil / Espanha", "Remoto · Brasil / España" ],
        bullets: [
          [
            "Designed and developed a web-based management solution to digitalize and streamline business operations, focusing on inventory, stock control, and product movement management, built with React and TypeScript.",
            "Analyzed business requirements and translated operational processes into digital workflows, covering product entries and exits, inventory control, and stock management.",
            "Implemented real-time inventory tracking, product movement records, dashboards, and data views, giving the business clear and up-to-date visibility over its operational information.",
            "Centralized business data and management processes within a single web platform, integrating Supabase for data management and backend services.",
            "Applied UX/UI design principles to create clear, intuitive interfaces, using Material UI components together with Tailwind CSS for a consistent, responsive layout.",
            "Performed testing, troubleshooting, maintenance, and continuous feature improvements to keep the platform reliable and aligned with the business's day-to-day needs.",
          ],
          [
            "Projetei e desenvolvi uma solução web de gestão para digitalizar e otimizar as operações empresariais, com foco em inventário, controle de estoque e gestão da movimentação de produtos, utilizando React e TypeScript.",
            "Analisei os requisitos de negócio e transformei os processos operacionais em fluxos digitais, abrangendo entradas e saídas de produtos, controle de inventário e gestão de estoque.",
            "Implementei o acompanhamento de inventário em tempo real, registros de movimentação de produtos, dashboards e visualizações de dados, oferecendo ao negócio uma visão clara e atualizada das informações operacionais.",
            "Centralizei os dados e os processos de gestão empresarial em uma única plataforma web, integrando o Supabase para gerenciamento de dados e serviços de backend.",
            "Apliquei princípios de UX/UI Design para criar interfaces claras e intuitivas, combinando componentes do Material UI com Tailwind CSS para um layout consistente e responsivo.",
            "Realizei testes, solução de problemas, manutenção e melhorias contínuas de funcionalidades, mantendo a plataforma confiável e alinhada às necessidades do dia a dia do negócio.",
          ],
          [
            "Diseñé y desarrollé una solución web de gestión para digitalizar y optimizar las operaciones empresariales, con enfoque en inventario, control de stock y gestión del movimiento de productos, utilizando React y TypeScript.",
            "Analicé los requisitos de negocio y transformé los procesos operativos en flujos digitales, abarcando entradas y salidas de productos, control de inventario y gestión de stock.",
            "Implementé el seguimiento de inventario en tiempo real, registros de movimientos de productos, dashboards y visualizaciones de datos, ofreciendo al negocio una visión clara y actualizada de su información operativa.",
            "Centralicé los datos y los procesos de gestión empresarial en una única plataforma web, integrando Supabase para la gestión de datos y los servicios de backend.",
            "Apliqué principios de diseño UX/UI para crear interfaces claras e intuitivas, combinando componentes de Material UI con Tailwind CSS para un diseño coherente y responsivo.",
            "Realicé pruebas, resolución de problemas, mantenimiento y mejoras continuas de las funcionalidades, manteniendo la plataforma fiable y alineada con las necesidades diarias del negocio.",
          ],
        ],
        result: {
          link: "",
          label: "",
          text: [
            "Business Management and Inventory Platform — End-to-end web platform that takes a business from manual tracking to a single digital system: real-time inventory, stock control, product entry and exit tracking, and dashboards that turn daily operations into clear, actionable data. Built with React, TypeScript, Tailwind CSS, Material UI, and Supabase.",
            "Plataforma de Gestão Empresarial e Inventário — Plataforma web completa que leva o negócio do controle manual para um único sistema digital: inventário em tempo real, controle de estoque, acompanhamento de entradas e saídas de produtos e dashboards que transformam a operação diária em dados claros e acionáveis. Desenvolvida com React, TypeScript, Tailwind CSS, Material UI e Supabase.",
            "Plataforma de Gestión Empresarial e Inventario — Plataforma web integral que lleva el negocio del control manual a un único sistema digital: inventario en tiempo real, control de stock, seguimiento de entradas y salidas de productos y dashboards que convierten la operación diaria en datos claros y accionables. Desarrollada con React, TypeScript, Tailwind CSS, Material UI y Supabase.",
          ],
        },
      },
      {
        company: "Studio Prime",
        accent: "#f59e0b",
        team: [ "Former partner of Studio Studio Prime", "Ex-parceiro do Studio Yastrees", "Exsocio de Studio Prime" ],
        place: [ "Brazil", "Brasil", "Brasil" ],
        bullets: [
          [
            "Developed a digital platform for photography courses, digital products, photo restoration services, and an upcoming online image editor.",
            "Built responsive and reusable UI components using React and TypeScript.",
            "Designed user flows and interfaces with a focus on UX/UI and usability.",
            "Optimized the platform for desktop, tablet, and mobile devices.",
            "Maintained and continuously enhanced the platform based on evolving business requirements.",
          ],
          [
            "Desenvolvimento de uma plataforma digital para cursos de fotografia, produtos digitais, serviços de restauração de fotos e um futuro editor de imagens online.",
            "Desenvolvimento de componentes de UI responsivos e reutilizáveis utilizando React e TypeScript.",
            "Criação de fluxos de usuário e interfaces com foco em UX/UI e usabilidade.",
            "Otimização da plataforma para desktop, tablet e dispositivos móveis.",
            "Manutenção e evolução contínua da plataforma de acordo com as necessidades do negócio.",
          ],
          [
            "Desarrollo de una plataforma digital para cursos de fotografía, productos digitales, servicios de restauración de fotos y un futuro editor de imágenes online.",
            "Desarrollo de componentes de UI responsivos y reutilizables utilizando React y TypeScript.",
            "Diseño de flujos de usuario e interfaces con enfoque en UX/UI y usabilidad.",
            "Optimización de la plataforma para escritorio, tablet y dispositivos móviles.",
            "Mantenimiento y mejora continua de la plataforma de acuerdo con las necesidades del negocio.",
          ],
        ],
        result: {  
          link: "https://photu-one.vercel.app", 
          label: "Studio Prime ↗", 
          text: [
            "In addition to my experience in Information Technology, co-founded and helped manage Studio Yastrees (now Studio Prime), gaining hands-on experience in entrepreneurship, project management, client relations, and business operations. This experience strengthened my ownership, adaptability, problem-solving, communication, and organizational skills, which I bring to technology and software development environments.",
            "Além da minha experiência em Tecnologia da Informação, co-fundei e ajudei a gerenciar o Studio Yastrees (atualmente Studio Prime), adquirindo experiência prática em empreendedorismo, gestão de projetos, relacionamento com clientes e operações de negócios. Essa experiência fortaleceu minhas habilidades de senso de responsabilidade e ownership, adaptabilidade, resolução de problemas, comunicação e organização, que aplico em ambientes de tecnologia e desenvolvimento de software.",
            "Además de mi experiencia en Tecnologías de la Información, cofundé y ayudé a gestionar Studio Yastrees (actualmente Studio Prime), adquiriendo experiencia práctica en emprendimiento, gestión de proyectos, relación con clientes y operaciones empresariales. Esta experiencia fortaleció mis habilidades de responsabilidad y ownership, adaptabilidad, resolución de problemas, comunicación y organización, que aporto a entornos de tecnología y desarrollo de software.",
          ],
        }
      },
    ]
  } 
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