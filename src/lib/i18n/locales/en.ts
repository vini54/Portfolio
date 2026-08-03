import type { ptBR } from './pt-BR';

// Espelha a árvore do pt-BR trocando cada string literal por `string`.
// Com o `satisfies` no final, chave faltando ou sobrando quebra a compilação.
type Locale<T> = { [K in keyof T]: T[K] extends string ? string : Locale<T[K]> };

export const en = {
  home: {
    nav: {
      about: 'About',
      services: 'Services',
      contact: 'Contact'
    },

    header: {
      backToTop: 'Back to top',
      logoAlt: 'Logo'
    },

    hero: {
      description:
        '<hl>Front-end developer</hl> specialized in <hl>Web and Mobile</hl> Engineering. I build interfaces that work with precision and feel like they were made with care.'
    },

    about: {
      title: 'About-',
      paragraph1:
        'Front-End developer with 4+ years of experience focused on Frontend Engineering. I build web interfaces with React and Next.js and mobile apps with React Native and Flutter, with TypeScript as the foundation on both platforms.',
      paragraph2:
        "I have experience building design systems from scratch, scalable componentization and direct integration between development and design. I believe interface decisions are as technical as architecture decisions — and that's the mindset I deliver with.",
      stats: {
        years: 'Years of\nExperience',
        companies: 'Companies\nServed',
        projects: 'Projects\nDelivered'
      }
    },

    services: {
      title: 'Services',
      tagline: 'Expertise · Scale · Quality',
      items: {
        // Em inglês o adjetivo vem antes — as duas linhas do layout são invertidas.
        frontend: {
          titleTop: 'Advanced',
          titleBottom: 'Front-end',
          description:
            "React and Next.js for teams that need someone who knows exactly what they're doing. Paired with product-driven development: advanced componentization, strict TypeScript, state patterns and code quality. For teams that want to evolve their technical foundation without pausing delivery."
        },
        mobile: {
          titleTop: 'Mobile',
          titleBottom: 'Applications',
          description:
            'Cross-platform apps with React Native for iOS and Android. Native navigation, fluid animations, API integration and store publishing. One codebase, two platforms — without giving up the native experience.'
        },
        designToCode: {
          titleTop: 'Design to',
          titleBottom: 'Code',
          description:
            "I turn design systems into real code — viable and scalable. It's not just implementing the Figma: it's making sure the design logic survives development — tokens, variants, interaction states and documentation the team actually uses."
        }
      }
    },

    contact: {
      title: 'Contact',
      kicker: "Let's talk",
      headline: 'Available for remote opportunities as a Frontend Engineer, Product Engineer or React Native Engineer.',
      getInTouch: 'Get in touch'
    },

    footer: {
      tagline: 'Design & Development',
      location: 'Fortaleza - CE, Brazil'
    },

    menuDrawer: {
      close: 'Close menu',
      resume: 'Resume',
      downloadCvAlt: 'Download CV (pt)',
      contactMe: 'Contact me'
    },

    themeSwitch: {
      label: 'Appearance'
    },

    languageSwitch: {
      label: 'Language'
    },

    common: {
      downloadCv: 'Download CV',
      social: 'Social'
    }
  }
} satisfies Locale<typeof ptBR>;
