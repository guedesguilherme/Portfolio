// Bold markers: **text** → rendered as <strong> by formatText() utility
export const translations = {
  pt: {
    nav: {
      home:     'Home',
      projects: 'Projetos',
      about:    'Sobre',
      writing:  'Writing',
      contacts: 'Contato',
    },
    home: {
      role: 'AI Engineer & Fullstack Developer',
      phrases: [
        'Building systems where AI meets production',
        'Transformando dor real em produto que funciona',
        'Do operacional ao AI Engineer, em produção',
      ],
      cta_linkedin: 'LinkedIn',
      cta_github:   'GitHub',
      cta_email:    'Email',
      scroll_hint:  'scroll',
    },
    projects: {
      section_label: 'Projetos selecionados',
      view: 'Ver projeto',
      items: [
        {
          number:      '01',
          name:        'Symetra',
          tagline:     'SaaS · IA Conversacional · Clínicas de Estética',
          description: 'SaaS de conversão com IA para clínicas de estética. O Brasil tem mais de 400 mil estabelecimentos gerando R$48 a 54 bilhões por ano e mais de 75% ainda opera sem software de gestão. A IA da Symetra faz triagem, quebra objeções, agenda, cobra sinal via Pix e entrega apenas clientes confirmados para a recepcionista.',
          tags: ['SaaS', 'React', 'Node.js', 'Supabase', 'GPT-4o', 'WhatsApp API'],
          link: 'https://www.symetra.com.br/',
          type: 'external',
        },
        {
          number:      '02',
          name:        'JonOptima',
          tagline:     'AI Resume Tailoring · Gemini 2.5 Flash · Anti-alucinação',
          description: 'Motor de tailoring de currículo com IA. Lê a descrição da vaga e usa o Gemini 2.5 Flash para reescrever os bullets do perfil, otimizar para ATS e gerar a carta de apresentação. O modelo age como editor estrito: sem invenção de skills ou experiências. Sem alucinações por design.',
          tags: ['AI', 'Gemini 2.5', 'React', 'FastAPI', 'Python', 'Firebase'],
          link: 'https://github.com/guedesguilherme/JonOptima',
          type: 'github',
        },
        {
          number:      '03',
          name:        'InfraCall',
          tagline:     'Fullstack · Gestão de Chamados · RBAC',
          description: 'Sistema fullstack de gestão de chamados de infraestrutura, desenvolvido durante um estágio após identificar um gargalo real de processo. Controle por perfil (admin e técnico), rastreamento de status em tempo real, histórico auditável e JWT com expiração configurável. Aprovado por tech lead e gerência antes do fim do estágio.',
          tags: ['React', 'Node.js', 'PostgreSQL', 'JWT', 'Express'],
          link: 'https://github.com/guedesguilherme/InfraCall',
          type: 'github',
        },
      ],
    },
    about: {
      section_label: 'Sobre',
      display_headline_1: 'Construindo onde',
      display_headline_2: 'IA encontra produção.',
      bio: [
        'Construo sistemas onde modelos de linguagem encontram produção de verdade. Faço isso em dois fronts simultâneos: como Prompt Engineer na Monest, mantendo agentes que processam **mais de 1 milhão de conversas por mês**, e como **fundador da Symetra**, SaaS de conversão com IA para clínicas de estética.',
        'Esse entendimento não é teórico. Passei **18 meses no operacional de TI pesado**: suportei quase 90 lojas de varejo, zerei 360 tickets em 5 meses e escrevi scripts que eliminaram **90% de um problema crítico recorrente**. Aprendi onde a dor está de verdade antes de aprender a criar IA. É isso que diferencia um sistema que funciona de um que parece funcionar.',
      ],
      metrics: [
        { value: '1M+',  label: 'conversas/mês nos agentes em produção' },
        { value: '360',  label: 'tickets zerados em 5 meses' },
        { value: '90%',  label: 'de um problema crítico eliminado por script' },
      ],
    },
    writing: {
      section_label:       'Writing',
      display_headline_1:  'Pensamentos em',
      display_headline_2:  'construção.',
      subtitle: 'Artigos sobre AI Engineering, sistemas em produção e o que aprendi construindo produtos que funcionam de verdade.',
      placeholder_articles: [
        { title: 'Como construir um pipeline de IA em produção sem quebrar', date: 'Em breve', read_time: '— min' },
        { title: 'O que aprendi lançando meu primeiro SaaS com IA no core', date: 'Em breve', read_time: '— min' },
        { title: 'Fullstack com IA: onde o frontend encontra o modelo',       date: 'Em breve', read_time: '— min' },
      ],
    },
    contacts: {
      headline:       'Vamos construir algo',
      subtitle:       'Aberto a conversas sobre projetos, parcerias ou oportunidades. Respondo sempre.',
      links: [
        { label: 'Email',    value: 'gryan.guedes@gmail.com',   href: 'mailto:gryan.guedes@gmail.com' },
        { label: 'LinkedIn', value: 'Guilherme Guedes',    href: 'https://www.linkedin.com/in/guilherme-ryam-guedes/' },
        { label: 'GitHub',   value: 'guedesguilherme',          href: 'https://github.com/guedesguilherme' },
      ],
    },
  },

  en: {
    nav: {
      home:     'Home',
      projects: 'Projects',
      about:    'About',
      writing:  'Writing',
      contacts: 'Contact',
    },
    home: {
      role: 'AI Engineer & Fullstack Developer',
      phrases: [
        'Building systems where AI meets production',
        'Turning real pain into products that work',
        'From IT operations to AI Engineer, in production',
      ],
      cta_linkedin: 'LinkedIn',
      cta_github:   'GitHub',
      cta_email:    'Email',
      scroll_hint:  'scroll',
    },
    projects: {
      section_label: 'Selected projects',
      view: 'View project',
      items: [
        {
          number:      '01',
          name:        'Symetra',
          tagline:     'SaaS · Conversational AI · Aesthetic Clinics',
          description: 'AI conversion SaaS for aesthetic clinics. Brazil has over 400k establishments generating R$48 to 54 billion per year with more than 75% operating without professional software. Symetra\'s AI handles triage, objection handling, scheduling, collects a deposit via Pix and delivers only confirmed clients to the receptionist.',
          tags: ['SaaS', 'React', 'Node.js', 'Supabase', 'GPT-4o', 'WhatsApp API'],
          link: 'https://www.symetra.com.br/',
          type: 'external',
        },
        {
          number:      '02',
          name:        'JonOptima',
          tagline:     'AI Resume Tailoring · Gemini 2.5 Flash · Anti-hallucination',
          description: 'AI-powered resume tailoring engine. Reads the job description and uses Gemini 2.5 Flash to rewrite profile bullets, optimize for ATS and generate the cover letter. The model acts as a strict editor: no invented skills or experiences. Anti-hallucination by design.',
          tags: ['AI', 'Gemini 2.5', 'React', 'FastAPI', 'Python', 'Firebase'],
          link: 'https://github.com/guedesguilherme/JonOptima',
          type: 'github',
        },
        {
          number:      '03',
          name:        'InfraCall',
          tagline:     'Fullstack · Ticket Management · RBAC',
          description: 'Fullstack infrastructure ticket management system built during an internship after identifying a real process bottleneck. Role-based access control (admin and technician), real-time status tracking, auditable history and configurable JWT expiry. Approved by tech lead and management before the internship ended.',
          tags: ['React', 'Node.js', 'PostgreSQL', 'JWT', 'Express'],
          link: 'https://github.com/guedesguilherme/InfraCall',
          type: 'github',
        },
      ],
    },
    about: {
      section_label: 'About',
      display_headline_1: 'Building where',
      display_headline_2: 'AI meets production.',
      bio: [
        'I build systems where language models meet real production. I do this on two simultaneous fronts: as a Prompt Engineer at Monest, maintaining AI agents that process **over 1 million conversations per month**, and as the **founder of Symetra**, an AI conversion SaaS for aesthetic clinics.',
        "This understanding isn't theoretical. I spent **18 months in the heaviest IT operations**: supporting nearly 90 retail stores, zeroing a 360-ticket backlog in 5 months and writing scripts that **eliminated 90% of a critical recurring problem**. I learned where the pain actually is before I learned to build AI. That's what separates a system that works from one that just looks like it works.",
      ],
      metrics: [
        { value: '1M+', label: 'conversations/month in production agents' },
        { value: '360', label: 'tickets zeroed in 5 months' },
        { value: '90%', label: 'of a critical problem eliminated by script' },
      ],
    },
    writing: {
      section_label:      'Writing',
      display_headline_1: 'Thoughts',
      display_headline_2: 'in progress.',
      subtitle: 'Articles on AI Engineering, production systems and lessons from building products that actually work.',
      placeholder_articles: [
        { title: 'How to build an AI pipeline in production without breaking things', date: 'Coming soon', read_time: '— min' },
        { title: 'What I learned launching my first SaaS with AI at the core',         date: 'Coming soon', read_time: '— min' },
        { title: 'Fullstack with AI: where the frontend meets the model',               date: 'Coming soon', read_time: '— min' },
      ],
    },
    contacts: {
      headline: "Let's build something",
      subtitle: 'Open to conversations about projects, partnerships or opportunities. I always reply.',
      links: [
        { label: 'Email',    value: 'gryan.guedes@gmail.com',  href: 'mailto:gryan.guedes@gmail.com' },
        { label: 'LinkedIn', value: 'Guilherme Guedes',   href: 'https://www.linkedin.com/in/guilherme-ryam-guedes/' },
        { label: 'GitHub',   value: 'guedesguilherme',         href: 'https://github.com/guedesguilherme' },
      ],
    },
  },

  es: {
    nav: {
      home:     'Inicio',
      projects: 'Proyectos',
      about:    'Sobre',
      writing:  'Writing',
      contacts: 'Contacto',
    },
    home: {
      role: 'AI Engineer & Fullstack Developer',
      phrases: [
        'Building systems where AI meets production',
        'Convirtiendo dolor real en productos que funcionan',
        'Del operacional al AI Engineer, en producción',
      ],
      cta_linkedin: 'LinkedIn',
      cta_github:   'GitHub',
      cta_email:    'Email',
      scroll_hint:  'scroll',
    },
    projects: {
      section_label: 'Proyectos seleccionados',
      view: 'Ver proyecto',
      items: [
        {
          number:      '01',
          name:        'Symetra',
          tagline:     'SaaS · IA Conversacional · Clínicas Estéticas',
          description: 'SaaS de conversión con IA para clínicas estéticas. Brasil tiene más de 400 mil establecimientos generando R$48 a 54 mil millones por año con más del 75% operando sin software de gestión. La IA de Symetra hace triaje, maneja objeciones, agenda, cobra señal vía Pix y entrega solo clientes confirmados a la recepcionista.',
          tags: ['SaaS', 'React', 'Node.js', 'Supabase', 'GPT-4o', 'WhatsApp API'],
          link: 'https://www.symetra.com.br/',
          type: 'external',
        },
        {
          number:      '02',
          name:        'JonOptima',
          tagline:     'AI Resume Tailoring · Gemini 2.5 Flash · Anti-alucinación',
          description: 'Motor de personalización de currículum con IA. Lee la descripción del puesto y usa Gemini 2.5 Flash para reescribir los bullets del perfil, optimizar para ATS y generar la carta de presentación. El modelo actúa como editor estricto: sin inventar skills o experiencias. Anti-alucinación por diseño.',
          tags: ['AI', 'Gemini 2.5', 'React', 'FastAPI', 'Python', 'Firebase'],
          link: 'https://github.com/guedesguilherme/JonOptima',
          type: 'github',
        },
        {
          number:      '03',
          name:        'InfraCall',
          tagline:     'Fullstack · Gestión de Tickets · RBAC',
          description: 'Sistema fullstack de gestión de tickets de infraestructura, desarrollado durante una pasantía tras identificar un cuello de botella real de proceso. Control por perfil (admin y técnico), seguimiento de estado en tiempo real, historial auditable y JWT con expiración configurable. Aprobado por tech lead y gerencia antes del fin de la pasantía.',
          tags: ['React', 'Node.js', 'PostgreSQL', 'JWT', 'Express'],
          link: 'https://github.com/guedesguilherme/InfraCall',
          type: 'github',
        },
      ],
    },
    about: {
      section_label: 'Sobre',
      display_headline_1: 'Construyendo donde',
      display_headline_2: 'la IA encuentra producción.',
      bio: [
        'Construyo sistemas donde los modelos de lenguaje se encuentran con la producción real. Lo hago en dos frentes simultáneos: como Prompt Engineer en Monest, manteniendo agentes de IA que procesan **más de 1 millón de conversaciones por mes**, y como **fundador de Symetra**, SaaS de conversión con IA para clínicas estéticas.',
        'Este entendimiento no es teórico. Pasé **18 meses en operaciones de TI de alta presión**: soportando casi 90 tiendas, llevando a cero una cola de 360 tickets en 5 meses y escribiendo scripts que **eliminaron el 90% de un problema crítico recurrente**. Aprendí dónde está el dolor de verdad antes de aprender a crear IA. Eso es lo que diferencia un sistema que funciona de uno que solo parece funcionar.',
      ],
      metrics: [
        { value: '1M+', label: 'conversaciones/mes en agentes en producción' },
        { value: '360', label: 'tickets en cero en 5 meses' },
        { value: '90%', label: 'de un problema crítico eliminado por script' },
      ],
    },
    writing: {
      section_label:      'Writing',
      display_headline_1: 'Pensamientos',
      display_headline_2: 'en construcción.',
      subtitle: 'Artículos sobre AI Engineering, sistemas en producción y lo que aprendí construyendo productos que funcionan de verdad.',
      placeholder_articles: [
        { title: 'Cómo construir un pipeline de IA en producción sin romper nada', date: 'Próximamente', read_time: '— min' },
        { title: 'Lo que aprendí lanzando mi primer SaaS con IA en el core',       date: 'Próximamente', read_time: '— min' },
        { title: 'Fullstack con IA: donde el frontend se encuentra con el modelo', date: 'Próximamente', read_time: '— min' },
      ],
    },
    contacts: {
      headline: 'Construyamos algo',
      subtitle: 'Abierto a conversaciones sobre proyectos, alianzas u oportunidades. Siempre respondo.',
      links: [
        { label: 'Email',    value: 'gryan.guedes@gmail.com',  href: 'mailto:gryan.guedes@gmail.com' },
        { label: 'LinkedIn', value: 'Guilherme Guedes',   href: 'https://www.linkedin.com/in/guilherme-ryam-guedes/' },
        { label: 'GitHub',   value: 'guedesguilherme',         href: 'https://github.com/guedesguilherme' },
      ],
    },
  },
}
