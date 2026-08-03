'use client';

import { Sparkle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useTranslation } from 'react-i18next';

// `tags` são nomes de tecnologia — iguais nos dois idiomas, ficam fora dos locales.
const services = [
  {
    id: 'frontend',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Code Review']
  },
  {
    id: 'mobile',
    tags: ['React Native', 'Expo', 'TypeScript', 'iOS', 'Android']
  },
  {
    id: 'designToCode',
    tags: ['Figma', 'Storybook', 'Design Tokens', 'Design Systems']
  }
];

export const ServicesSection = () => {
  const { t } = useTranslation();

  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center' id='services'>
      <div className='w-full container px-4 sm:px-6 md:px-9 py-16 md:py-24'>
        <div className='flex flex-wrap items-center justify-between gap-4'>
          <h2 className='flex items-center gap-3 font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold bg-linear-to-r from-black dark:from-white to-primary dark:to-primary-light bg-clip-text text-transparent'>
            {t('home.services.title')}
            <Sparkle className='fill-primary text-primary size-8 md:size-10' />
          </h2>

          <span className='text-[0.625rem] text-muted-foreground italic tracking-wide uppercase'>
            {t('home.services.tagline')}
          </span>
        </div>

        <div className='w-full border-t border-border mt-8' />

        <div className='divide-y divide-border border-b border-border'>
          {services.map((service) => (
            <div
              key={service.id}
              className='grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4 md:gap-8 lg:gap-12 py-8 md:py-12'
            >
              <div className='font-heading font-extrabold'>
                <div className='text-foreground text-2xl md:text-3xl'>
                  {t(`home.services.items.${service.id}.titleTop`)}
                </div>
                <div className='text-primary text-xl lg:text-2xl'>
                  {t(`home.services.items.${service.id}.titleBottom`)}
                </div>
              </div>

              <div>
                <p className='text-sm md:text-base text-muted-foreground'>
                  {t(`home.services.items.${service.id}.description`)}
                </p>

                <div className='flex flex-wrap gap-2 mt-4'>
                  {service.tags.map((tag) => (
                    <Badge key={tag} variant={'default'}>
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
