import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className='w-full relative overflow-hidden bg-primary'>
      <div className='w-full relative z-10 px-4 sm:px-6 md:px-9 py-2 grid grid-cols-3 items-center gap-4'>
        <div className='flex flex-col gap-1 max-sm:col-span-3 max-lg:col-span-2'>
          <span className='text-xs text-primary-foreground/70'>Design & Development</span>
          <span className='font-heading font-extrabold text-primary-foreground whitespace-nowrap'>
            Vinícius Santos de Oliveira
          </span>
        </div>

        <span className='text-xs text-primary-foreground/80 text-start sm:text-end lg:text-center max-sm:whitespace-nowrap'>
          Fortaleza - CE, Brasil
        </span>

        <div className='flex justify-end max-sm:col-span-2 max-lg:col-span-3 max-lg:-mb-2'>
          <Image
            src='/logo-icon-bg-dark.png'
            width={200}
            height={200}
            alt=''
            aria-hidden='true'
            className='dark:block not-dark:hidden lg:scale-150 h-12 md:h-14 w-auto opacity-90 pointer-events-none'
          />

          <Image
            src='/logo-icon-bg-light.png'
            width={200}
            height={200}
            alt=''
            aria-hidden='true'
            className='not-dark:block dark:hidden lg:scale-150 h-12 md:h-14 w-auto opacity-90 pointer-events-none'
          />
        </div>
      </div>
    </footer>
  );
};
