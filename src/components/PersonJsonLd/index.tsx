import { siteConfig } from '@/lib/site-config';

/**
 * Dados estruturados schema.org/Person — é o que permite ao Google montar um
 * painel de conhecimento e associar o nome aos perfis sociais.
 */
export const PersonJsonLd = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.fullName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    email: `mailto:${siteConfig.email}`,
    jobTitle: siteConfig.jobTitle,
    description: siteConfig.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.region,
      addressCountry: siteConfig.location.country
    },
    sameAs: [siteConfig.social.linkedin, siteConfig.social.github, siteConfig.social.instagram],
    knowsAbout: ['React', 'Next.js', 'React Native', 'TypeScript', 'Design Systems', 'Front-end Engineering']
  };

  return <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
};
