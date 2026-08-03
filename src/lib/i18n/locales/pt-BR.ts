// Locale de referência: as chaves definidas aqui tipam o `en.ts`.
// Conteúdo idêntico ao que estava hardcoded no JSX antes da i18n.
export const ptBR = {
  home: {
    nav: {
      about: 'Sobre',
      services: 'Serviços',
      contact: 'Contato'
    },

    header: {
      backToTop: 'Voltar ao topo',
      logoAlt: 'Logo'
    },

    hero: {
      // <hl> vira o <span> em negrito — ver Hero/Display.tsx.
      description:
        '<hl>Desenvolvedor</hl> front-end especializado em <hl>Web e Mobile</hl> Engineering. Construo interfaces que funcionam com precisão e parecem que foram feitas com cuidado.'
    },

    about: {
      title: 'Sobre-',
      paragraph1:
        'Desenvolvedor Front-End com 4+ anos de experiência e foco em Frontend Engineering. Atuo no desenvolvimento de interfaces web com React e Next.js e aplicações mobile com React Native e Flutter, com TypeScript como base em ambas as plataformas.',
      paragraph2:
        'Tenho experiência na criação de design systems do zero, componentização escalável e integração direta entre desenvolvimento e design. Acredito que decisões de interface são tão técnicas quanto decisões de arquitetura — e é com essa mentalidade que entrego.',
      // A quebra de linha é intencional: renderizado com `whitespace-pre`.
      stats: {
        years: 'Anos de\nExperiência',
        companies: 'Empresas\nAtendidas',
        projects: 'Projetos\nEntregues'
      }
    },

    services: {
      title: 'Serviços',
      tagline: 'Especialidade · Escala · Qualidade',
      items: {
        frontend: {
          titleTop: 'Front-end',
          titleBottom: 'Avançado',
          description:
            'React e Next.js para times que precisam de alguém que sabe exatamente o que está fazendo. Juntamente ao desenvolvimento orientado ao produto: componentização avançada, TypeScript estrito, padrões de estado e qualidade de código. Para quem quer evoluir a base técnica sem parar de entregar.'
        },
        mobile: {
          titleTop: 'Aplicações',
          titleBottom: 'Mobile',
          description:
            'Apps multiplataforma com React Native para iOS e Android. Navegação nativa, animações fluidas, integração com APIs e publicação nas lojas. Um codebase, duas plataformas — sem abrir mão da experiência nativa.'
        },
        designToCode: {
          titleTop: 'Design to',
          titleBottom: 'Code',
          description:
            'Transformo sistemas de design em código real, viável e escalável. Não é só implementar o Figma — é garantir que a lógica de design sobreviva ao desenvolvimento: tokens, variantes, estados de interação e documentação que o time usa de verdade.'
        }
      }
    },

    contact: {
      title: 'Contato',
      kicker: 'Vamos conversar',
      headline:
        'Disponível para oportunidades remotas como Frontend Engineer, Product Engineer ou React Native Engineer.',
      getInTouch: 'Fale Comigo'
    },

    footer: {
      tagline: 'Design & Development',
      location: 'Fortaleza - CE, Brasil'
    },

    menuDrawer: {
      close: 'Fechar menu',
      resume: 'Currículo',
      // O link secundário é sempre o CV no outro idioma.
      downloadCvAlt: 'Download CV (en)',
      contactMe: 'Contate-me'
    },

    themeSwitch: {
      label: 'Aparência'
    },

    languageSwitch: {
      label: 'Linguagem'
    },

    // Strings que aparecem em mais de uma seção.
    common: {
      downloadCv: 'Baixar CV',
      social: 'Social'
    }
  }
} as const;
