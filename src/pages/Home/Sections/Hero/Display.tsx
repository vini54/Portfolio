import { ChevronDown } from 'lucide-react';

export const HeroDisplay = () => {
  return (
    <div className='relative z-10 flex flex-col items-center gap-6 px-6 text-center container flex-1 justify-center'>
      <h1 className='font-heading text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-extrabold bg-linear-to-r from-primary dark:from-primary-light to-black dark:to-white bg-clip-text text-transparent'>
        Vinícius Oliveira
      </h1>

      <p className='text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl'>
        <span className='font-semibold text-foreground'>Desenvolvedor</span> front-end especializado em{' '}
        <span className='font-semibold text-foreground'>Web e Mobile</span> Engineering. Construo interfaces que
        funcionam com precisão e parecem que foram feitas com cuidado.
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
