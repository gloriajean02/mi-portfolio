export type Language = 'es' | 'en'

const es = {
  nav: {
    home: 'inicio',
    projects: 'proyectos',
    about: 'sobre mí',
    skills: 'skills',
    experience: 'experiencia',
    education: 'formación',
    langToggle: 'EN',
    ariaLang: 'Switch to English',
    ariaNav: 'Navegación lateral',
    ariaMenu: 'Menú',
  },
  hero: {
    downloadCv: 'descargar cv',
    cvHref: '/CV_Gloria_Curado_ES.pdf',
    scrollLabel: 'Ver proyectos',
    typeSequence: ['full stack developer', 1800, 'creative designer', 1800] as (string | number)[],
    backToTopLabel: 'Volver arriba',
  },
  footer: {
    copy: 'Hecho con React y mucha ilusión 🌸',
  },
  projects: {
    heading: 'Proyectos',
  },
  about: {
    heading: 'Sobre mí',
    description:
      'Soy desarrolladora full stack con raíces en el diseño y la comunicación. Empecé mi carrera contando historias visualmente —estudiando publicidad, especializándome en dirección de arte y gestionando la identidad visual de una escuela de creativos durante cuatro años. Hace un par de años decidí aprender también el lenguaje del código. Hoy construyo productos de principio a fin: desde la arquitectura hasta el último píxel. Creo que el diseño y el desarrollo se potencian mutuamente, y esa combinación es lo que me hace diferente.',
    softSkills: [
      'Trabajo en equipo',
      'Creatividad',
      'Atención al detalle',
      'Sentido del diseño',
      'Empatía',
      'Resolución de problemas',
      'Comunicación',
      'Adaptabilidad',
      'Proactividad',
      'Autonomía',
    ],
  },
  skills: {
    heading: 'Skills',
    groups: [
      {
        title: 'Frontend',
        skills: [
          { name: 'Bootstrap',             color: '#7952B3', level: 75 },
          { name: 'CSS',                   color: '#264DE4', level: 75 },
          { name: 'JavaScript',            color: '#F7DF1E', level: 55 },
          { name: 'React',                 color: '#61DAFB', level: 45 },
          { name: 'ShadCN',                color: '#94A3B8', level: 55 },
          { name: 'Tailwind',              color: '#38BDF8', level: 50 },
          { name: 'WordPress / Elementor', color: '#21759B', level: 85 },
        ],
      },
      {
        title: 'Backend',
        skills: [
          { name: 'Java',     color: '#E76F00', level: 65 },
          { name: 'Python',   color: '#3776AB', level: 20 },
          { name: 'SQL',      color: '#4479A1', level: 65 },
          { name: 'Supabase', color: '#3ECF8E', level: 55 },
        ],
      },
      {
        title: 'DevOps',
        skills: [
          { name: 'GitHub', color: '#E6EDF3', level: 70 },
          { name: 'SVN',    color: '#809CC9', level: 10 },
          { name: 'Vercel', color: '#FFFFFF', level: 60 },
        ],
      },
      {
        title: 'Idiomas',
        skills: [
          { name: 'Castellano (nativo)', color: '#F59E0B', level: 100 },
          { name: 'Inglés B2',          color: '#6366F1', level: 70 },
        ],
      },
      {
        title: 'Diseño',
        skills: [
          { name: 'Figma',       color: '#F24E1E', level: 70 },
          { name: 'Illustrator', color: '#FF9A00', level: 55 },
          { name: 'Photoshop',   color: '#31A8FF', level: 75 },
          { name: 'Premiere',    color: '#9999FF', level: 40 },
        ],
      },
    ],
  },
  timeline: {
    experienceHeading: 'Experiencia',
    educationHeading: 'Formación',
    work: [
      {
        id: 1,
        company: 'Sociedad de Gestión Pública de Extremadura',
        role: 'Full Stack Developer',
        period: '2025 — 2026',
        logo: '/images/gpex.png',
        location: 'Mérida',
        description:
          'Desarrollo en entorno profesional real dentro del programa de FP Dual: implementación de aplicaciones con patrón MVC en Java, MySQL, HTML, CSS y Apache. Aprender haciendo, desde el primer día.',
      },
      {
        id: 2,
        company: 'Miami Ad School',
        role: 'Art Director & Social Media Manager',
        period: '2020 — 2024',
        logo: '/images/miami_ad_school.png',
        location: 'Madrid',
        description:
          'Durante cuatro años, responsable de toda la comunicación visual de la escuela: newsletters, publicaciones, merchandising y redes sociales. Cuidé la identidad de marca en cada pieza y gestioné el proceso completo, desde el concepto hasta la publicación.',
      },
      {
        id: 3,
        company: 'Brother Madrid Escuela de Creativos',
        role: 'Art Director',
        period: '2019 — 2020',
        logo: '/images/brother.png',
        location: 'Madrid',
        description:
          'Generación de contenido para las redes sociales de la escuela orientado a la captación de futuros estudiantes, diseño de catálogos de formación y desarrollo de campañas publicitarias para los cursos.',
      },
      {
        id: 4,
        company: 'MONO Madrid',
        role: 'Art Director',
        period: '2019',
        logo: '/images/mono.png',
        location: 'Madrid',
        description:
          'Prácticas como art director en proyectos creativos para clientes de la agencia: conceptualización, diseño y producción de campañas.',
      },
      {
        id: 5,
        company: 'Groupe Renault',
        role: 'Art Director',
        period: '2017 — 2018',
        logo: '/images/renault.png',
        location: 'Sevilla',
        description:
          'Prácticas como art director: diseño de cartelería para fábrica y comunicación interna de la marca, dentro del marco de campañas publicitarias y materiales corporativos.',
      },
    ],
    education: [
      {
        id: 10,
        company: 'IES Albarregas',
        role: 'Grado Superior Desarrollo de Aplicaciones Web',
        period: '2024 — 2026',
        logo: '/images/albarregas.png',
        location: 'Mérida',
        description:
          'Formación técnica en desarrollo web full stack: Java, JavaScript, HTML, CSS y bases de datos. Como proyecto fin de ciclo he desarrollado MOLegalSuite, una aplicación de gestión legal construida con React y Supabase, donde aplico tanto mis habilidades técnicas como mi visión de diseño.',
      },
      {
        id: 11,
        company: 'Miami Ad School',
        role: 'Curso en Estrategia Digital',
        period: '2022',
        logo: '/images/miami_ad_school.png',
        location: 'Madrid',
        description:
          'Aprendizaje de estrategia digital aplicada a la comunicación de marca: planificación, analítica y creatividad orientada a resultados online.',
      },
      {
        id: 12,
        company: 'Brother Escuela de Creativos',
        role: 'Master en Dirección de Arte y Creatividad Publicitaria',
        period: '2018 — 2019',
        logo: '/images/brother.png',
        location: 'Madrid',
        description:
          'Especialización en dirección de arte y creatividad publicitaria. Aprendí a generar conceptos y a contarlos visualmente: de la idea a la ejecución. Aquí desarrollé el ojo crítico y la manera de pensar en diseño que sigo aplicando hoy al código.',
      },
      {
        id: 13,
        company: 'LAB Sevilla',
        role: 'Curso en Ilustración y Diseño Gráfico',
        period: '2017 — 2018',
        logo: '/images/lab.png',
        location: 'Sevilla',
        description:
          'Formación complementaria en ilustración y diseño gráfico, ampliando el lenguaje visual con técnicas digitales y analógicas.',
      },
      {
        id: 14,
        company: 'Universidad de Sevilla',
        role: 'Grado en Publicidad y Relaciones Públicas',
        period: '2013 — 2017',
        logo: '/images/universidad_sevilla.png',
        location: 'Sevilla',
        description:
          'Aquí empezó todo. Cuatro años aprendiendo a comunicar: narrativa, estructura de la información, diseño y trabajo en equipo. Una base que moldea cómo pienso cada proyecto, sea un cartel o una aplicación web.',
      },
    ],
  },
  contact: {
    heading: '¿Hablamos?',
    namePlaceholder: 'Nombre',
    emailPlaceholder: 'Email',
    messagePlaceholder:
      'Cuéntame en qué puedo ayudarte — proyecto freelance, incorporación a equipo, colaboración...',
    send: 'Enviar',
    sending: 'Enviando...',
    successMessage: '¡Mensaje enviado! Te respondo pronto 🙌',
    ariaOpen: 'Abrir contacto',
    ariaClose: 'Cerrar',
    emailSubject: 'Nuevo mensaje del portfolio',
  },
  moLegalSuite: {
    back: '← volver',
    backBottom: '← volver al portfolio',
    tagline: ['Tu despacho de abogados', 'en la palma de tu mano'],
    desc1: 'Morán Ortiz es un despacho de abogados con sede en Sevilla que trabaja para clientes de toda España. Necesitaban una aplicación web para gestionar su despacho — y este es el resultado.',
    desc2: 'Al igual que Amazon te permite seguir dónde está tu paquete, MOLegalSuite le permite al cliente seguir su caso: fases del expediente, documentos, notificaciones y citas.',
    desc3: 'Cada caso tiene su propio espacio: documentos adjuntos, un historial de fases por las que ha pasado, las notificaciones enviadas al cliente y las citas programadas. Nada se pierde, todo está donde toca.',
    desc4: 'Y al igual que Amazon tiene un almacén con personas trabajando detrás, MOLegalSuite tiene un panel para el administrador donde ocurre toda la gestión.',
    desc5: 'Así es como conseguimos que todas esas llamadas, emails y whatsapps queden unificadas en un solo lugar.',
    finalTagline: ['Un proyecto real, construido de cero.', 'Desde el diseño hasta el despliegue.'],
    altLaptop: 'MO Legal Suite en laptop',
    altMobile: 'MO Legal Suite en móvil',
    altLaptopDetail: 'Vista detalle de caso en MOLegalSuite',
    altAdminPanel: 'Panel de administrador en MOLegalSuite',
  },
  caseDemo: {
    header: 'Estado del caso',
    ariaNav: 'Navegación de fases',
    phaseLabel: 'Fase',
    phases: [
      { titulo: 'Apertura del expediente', descripcion: 'Recepción y registro del caso',                   entrada: '10 sep 2024', salida: '20 nov 2024' as string | null },
      { titulo: 'Instrucción',             descripcion: 'Análisis de documentación y diligencias previas', entrada: '20 nov 2024', salida: '14 feb 2025' as string | null },
      { titulo: 'Fase oral',               descripcion: 'Celebración de vistas y juicio',                  entrada: '14 feb 2025', salida: null as string | null },
    ],
  },
}

const en: typeof es = {
  nav: {
    home: 'home',
    projects: 'projects',
    about: 'about me',
    skills: 'skills',
    experience: 'experience',
    education: 'education',
    langToggle: 'ES',
    ariaLang: 'Cambiar a Español',
    ariaNav: 'Side navigation',
    ariaMenu: 'Menu',
  },
  hero: {
    downloadCv: 'download cv',
    cvHref: '/CV_Gloria_Curado_EN.pdf',
    scrollLabel: 'View projects',
    typeSequence: ['full stack developer', 1800, 'creative designer', 1800],
    backToTopLabel: 'Back to top',
  },
  footer: {
    copy: 'Made with React and lots of love 🌸',
  },
  projects: {
    heading: 'Projects',
  },
  about: {
    heading: 'About me',
    description:
      "I'm a full stack developer with roots in design and communication. I started my career telling stories visually — studying advertising, specialising in art direction and managing the visual identity of a school of creatives for four years. A couple of years ago I decided to learn the language of code too. Today I build products from end to end: from architecture to the last pixel. I believe design and development amplify each other, and that combination is what makes me different.",
    softSkills: [
      'Teamwork',
      'Creativity',
      'Attention to detail',
      'Design sense',
      'Empathy',
      'Problem solving',
      'Communication',
      'Adaptability',
      'Proactivity',
      'Autonomy',
    ],
  },
  skills: {
    heading: 'Skills',
    groups: [
      {
        title: 'Frontend',
        skills: [
          { name: 'Bootstrap',             color: '#7952B3', level: 75 },
          { name: 'CSS',                   color: '#264DE4', level: 75 },
          { name: 'JavaScript',            color: '#F7DF1E', level: 55 },
          { name: 'React',                 color: '#61DAFB', level: 45 },
          { name: 'ShadCN',                color: '#94A3B8', level: 55 },
          { name: 'Tailwind',              color: '#38BDF8', level: 50 },
          { name: 'WordPress / Elementor', color: '#21759B', level: 85 },
        ],
      },
      {
        title: 'Backend',
        skills: [
          { name: 'Java',     color: '#E76F00', level: 65 },
          { name: 'Python',   color: '#3776AB', level: 20 },
          { name: 'SQL',      color: '#4479A1', level: 65 },
          { name: 'Supabase', color: '#3ECF8E', level: 55 },
        ],
      },
      {
        title: 'DevOps',
        skills: [
          { name: 'GitHub', color: '#E6EDF3', level: 70 },
          { name: 'SVN',    color: '#809CC9', level: 10 },
          { name: 'Vercel', color: '#FFFFFF', level: 60 },
        ],
      },
      {
        title: 'Languages',
        skills: [
          { name: 'Spanish (native)', color: '#F59E0B', level: 100 },
          { name: 'English B2',       color: '#6366F1', level: 70 },
        ],
      },
      {
        title: 'Design',
        skills: [
          { name: 'Figma',       color: '#F24E1E', level: 70 },
          { name: 'Illustrator', color: '#FF9A00', level: 55 },
          { name: 'Photoshop',   color: '#31A8FF', level: 75 },
          { name: 'Premiere',    color: '#9999FF', level: 40 },
        ],
      },
    ],
  },
  timeline: {
    experienceHeading: 'Experience',
    educationHeading: 'Education',
    work: [
      {
        id: 1,
        company: 'Sociedad de Gestión Pública de Extremadura',
        role: 'Full Stack Developer',
        period: '2025 — 2026',
        logo: '/images/gpex.png',
        location: 'Mérida',
        description:
          'Real-world professional development as part of the FP Dual programme: building MVC applications in Java, MySQL, HTML, CSS and Apache. Learning by doing, from day one.',
      },
      {
        id: 2,
        company: 'Miami Ad School',
        role: 'Art Director & Social Media Manager',
        period: '2020 — 2024',
        logo: '/images/miami_ad_school.png',
        location: 'Madrid',
        description:
          "For four years, responsible for all the school's visual communication: newsletters, publications, merchandise and social media. I cared for the brand identity in every piece and managed the full process, from concept to publication.",
      },
      {
        id: 3,
        company: 'Brother Madrid Escuela de Creativos',
        role: 'Art Director',
        period: '2019 — 2020',
        logo: '/images/brother.png',
        location: 'Madrid',
        description:
          "Content creation for the school's social media aimed at attracting prospective students, design of course catalogues and development of advertising campaigns.",
      },
      {
        id: 4,
        company: 'MONO Madrid',
        role: 'Art Director',
        period: '2019',
        logo: '/images/mono.png',
        location: 'Madrid',
        description:
          'Internship as art director on creative projects for agency clients: conceptualisation, design and campaign production.',
      },
      {
        id: 5,
        company: 'Groupe Renault',
        role: 'Art Director',
        period: '2017 — 2018',
        logo: '/images/renault.png',
        location: 'Sevilla',
        description:
          'Internship as art director: factory signage design and internal brand communications, within advertising campaigns and corporate materials.',
      },
    ],
    education: [
      {
        id: 10,
        company: 'IES Albarregas',
        role: 'Higher Degree in Web Application Development',
        period: '2024 — 2026',
        logo: '/images/albarregas.png',
        location: 'Mérida',
        description:
          'Technical training in full stack web development: Java, JavaScript, HTML, CSS and databases. As a final year project I developed MOLegalSuite, a legal management app built with React and Supabase, applying both my technical skills and my design vision.',
      },
      {
        id: 11,
        company: 'Miami Ad School',
        role: 'Digital Strategy Course',
        period: '2022',
        logo: '/images/miami_ad_school.png',
        location: 'Madrid',
        description:
          'Learning digital strategy applied to brand communication: planning, analytics and results-driven creativity for the online space.',
      },
      {
        id: 12,
        company: 'Brother Escuela de Creativos',
        role: 'Master in Art Direction & Advertising Creativity',
        period: '2018 — 2019',
        logo: '/images/brother.png',
        location: 'Madrid',
        description:
          'Specialisation in art direction and advertising creativity. I learned to generate concepts and tell them visually: from idea to execution. Here I developed the critical eye and design thinking I still apply today in code.',
      },
      {
        id: 13,
        company: 'LAB Sevilla',
        role: 'Illustration & Graphic Design Course',
        period: '2017 — 2018',
        logo: '/images/lab.png',
        location: 'Sevilla',
        description:
          'Complementary training in illustration and graphic design, expanding the visual language with digital and analogue techniques.',
      },
      {
        id: 14,
        company: 'Universidad de Sevilla',
        role: 'Degree in Advertising and Public Relations',
        period: '2013 — 2017',
        logo: '/images/universidad_sevilla.png',
        location: 'Sevilla',
        description:
          'This is where it all began. Four years learning to communicate: narrative, information structure, design and teamwork. A foundation that shapes how I think about every project, whether a poster or a web application.',
      },
    ],
  },
  contact: {
    heading: "Let's talk?",
    namePlaceholder: 'Name',
    emailPlaceholder: 'Email',
    messagePlaceholder:
      'Tell me how I can help you — freelance project, joining a team, collaboration...',
    send: 'Send',
    sending: 'Sending...',
    successMessage: "Message sent! I'll get back to you soon 🙌",
    ariaOpen: 'Open contact',
    ariaClose: 'Close',
    emailSubject: 'New message from portfolio',
  },
  moLegalSuite: {
    back: '← back',
    backBottom: '← back to portfolio',
    tagline: ['Your law firm', 'in the palm of your hand'],
    desc1: 'Morán Ortiz is a law firm based in Seville working with clients across Spain. They needed a web application to manage their practice — and this is the result.',
    desc2: 'Just as Amazon lets you track where your package is, MOLegalSuite lets the client follow their case: case stages, documents, notifications and appointments.',
    desc3: "Each case has its own space: attached documents, a history of stages it has gone through, notifications sent to the client and scheduled appointments. Nothing gets lost, everything is where it should be.",
    desc4: 'And just as Amazon has a warehouse with people working behind the scenes, MOLegalSuite has an admin panel where all the management happens.',
    desc5: 'This is how we got all those calls, emails and WhatsApps unified in a single place.',
    finalTagline: ['A real project, built from scratch.', 'From design to deployment.'],
    altLaptop: 'MO Legal Suite on laptop',
    altMobile: 'MO Legal Suite on mobile',
    altLaptopDetail: 'Case detail view in MOLegalSuite',
    altAdminPanel: 'Admin panel in MOLegalSuite',
  },
  caseDemo: {
    header: 'Case status',
    ariaNav: 'Stage navigation',
    phaseLabel: 'Stage',
    phases: [
      { titulo: 'Case opening',  descripcion: 'Reception and registration of the case',                entrada: '10 Sep 2024', salida: '20 Nov 2024' as string | null },
      { titulo: 'Investigation', descripcion: 'Documentation analysis and preliminary proceedings', entrada: '20 Nov 2024', salida: '14 Feb 2025' as string | null },
      { titulo: 'Oral phase',    descripcion: 'Hearings and trial',                                  entrada: '14 Feb 2025', salida: null as string | null },
    ],
  },
}

export const translations = { es, en }
export type Translations = typeof es
