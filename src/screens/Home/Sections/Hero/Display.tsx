import { ChevronDown } from 'lucide-react';
import { Trans, useTranslation } from 'react-i18next';

export const HeroDisplay = () => {
  const { t } = useTranslation();

  return (
    <div className='absolute w-full h-full flex flex-col items-center gap-6 px-6 text-center container flex-1 justify-center'>
      <h1
        id='hero-title'
        className='font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold bg-linear-to-r from-primary dark:from-primary-light to-black dark:to-white bg-clip-text text-transparent z-5'
      >
        Vinícius Oliveira
      </h1>

      <p className='text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl z-5'>
        <Trans
          t={t}
          i18nKey='home.hero.description'
          components={{ hl: <span className='font-semibold text-foreground' /> }}
        />
      </p>

      <div
        aria-hidden='true'
        className='flex items-center justify-center p-1 rounded-full border border-dashed border-border'
      >
        <ChevronDown className='size-6 text-foreground animate-linear-bounce' />
      </div>
    </div>
  );
};
