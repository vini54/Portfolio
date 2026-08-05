/**
 * Fonte única dos dados usados em metadata, sitemap, robots e JSON-LD.
 *
 * `NEXT_PUBLIC_SITE_URL` precisa apontar para o domínio de produção — sem ele,
 * as URLs absolutas de Open Graph e o canonical saem apontando para localhost.
 */
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const siteConfig = {
  url: SITE_URL,
  name: 'Vinícius Oliveira',
  fullName: 'Vinícius Santos de Oliveira',
  jobTitle: 'Desenvolvedor Front-end',
  title: 'Vinícius Oliveira — Desenvolvedor Front-end Web & Mobile',
  description:
    'Desenvolvedor front-end com 4+ anos de experiência em React, Next.js, React Native e TypeScript. Interfaces web e aplicações mobile, do design system ao código.',
  descriptionEn:
    'Front-end developer with 4+ years of experience in React, Next.js, React Native and TypeScript. Web interfaces and mobile applications, from design system to code.',
  locale: 'pt_BR',
  location: {
    city: 'Fortaleza',
    region: 'CE',
    country: 'BR'
  },
  email: 'vinioli544@gmail.com',
  keywords: [
    'Vinícius Oliveira',
    'desenvolvedor front-end',
    'front-end developer',
    'React',
    'Next.js',
    'React Native',
    'TypeScript',
    'desenvolvedor mobile',
    'design system',
    'portfólio',
    'Fortaleza'
  ],
  social: {
    linkedin: 'https://www.linkedin.com/in/lovinidev',
    github: 'https://github.com/vini54',
    instagram: 'https://www.instagram.com/santosviniciu/'
  },
  cv: {
    portuguese: '/curriculo-vinicius-oliveira.pdf.pdf',
    english: '/resume-vinicius-oliveira.pdf.pdf'
  }
} as const;
