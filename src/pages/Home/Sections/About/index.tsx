'use client';

import GlassSurface from '@/components/GlassSurface';
import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const stats = [
  { id: 'years', value: '4+', labelKey: 'home.about.stats.years' },
  { id: 'companies', value: '10+', labelKey: 'home.about.stats.companies' },
  { id: 'projects', value: '25+', labelKey: 'home.about.stats.projects' }
];

export const AboutSection = () => {
  const { t } = useTranslation();
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center relative' id='about' ref={revealRef}>
      <div
        className='w-full h-full absolute inset-0 pointer-events-none'
        style={{
          backgroundImage: 'url(/pattern-vector.svg)',
          backgroundRepeat: 'repeat',
          backgroundSize: '64px',
          opacity: 0.35
        }}
      />

      <div className='w-full container relative z-10 px-4 sm:px-6 md:px-9' data-reveal-block>
        <GlassSurface borderRadius={24} height='auto' blur={50} displace={1} width='100%'>
          <div className='w-full p-4 md:p-8 lg:p-12 flex flex-col gap-8 text-left'>
            <h2
              data-reveal-item
              className='font-heading text-3xl md:text-5xl lg:text-6xl font-extrabold bg-linear-to-r from-gray-800 dark:from-primary-light to-primary dark:to-primary bg-clip-text text-transparent w-fit'
            >
              {t('home.about.title')}
            </h2>

            <div data-reveal-item className='flex flex-col gap-2'>
              <p className='text-sm sm:text-base text-muted-foreground'>{t('home.about.paragraph1')}</p>
              <p className='text-sm sm:text-base text-muted-foreground'>{t('home.about.paragraph2')}</p>
            </div>

            <div className='w-full flex items-center justify-between max-md:justify-start sm:divide-x sm:divide-border mt-2 sm:mt-8'>
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  data-reveal-item
                  className='flex-1 px-2 md:px-8 first:pl-0 flex flex-col items-center gap-2 sm:gap-4 md:gap-8 py-4 md:py-6'
                >
                  <span className='font-heading font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-7xl bg-linear-to-r from-gray-800 dark:from-primary-light to-primary dark:to-primary bg-clip-text text-transparent'>
                    {stat.value}
                  </span>

                  <span className='font-heading text-base sm:text-lg md:text-xl lg:text-3xl text-muted-foreground text-center whitespace-pre'>
                    {t(stat.labelKey)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </GlassSurface>
      </div>
    </div>
  );
};
