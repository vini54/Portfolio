import GlassSurface from '@/components/GlassSurface';

const stats = [
  { value: '4+', label: 'Anos de Experiência' },
  { value: '10+', label: 'Empresas Atendidas' },
  { value: '25+', label: 'Projetos Entregues' }
];

export const AboutSection = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center relative' id='about'>
      <div
        className='w-full h-full absolute inset-0 pointer-events-none'
        style={{
          backgroundImage: 'url(/pattern-vector.svg)',
          backgroundRepeat: 'repeat',
          backgroundSize: '64px',
          opacity: 0.35
        }}
      />

      <div className='w-full container relative z-10 px-4 sm:px-6 md:px-9'>
        <GlassSurface borderRadius={24} height='auto' blur={20} width='100%'>
          <div className='w-full p-8 md:p-12 flex flex-col gap-8 text-left'>
            <h2 className='font-heading text-5xl md:text-6xl font-extrabold bg-linear-to-r from-primary dark:from-primary-light to-black dark:to-white bg-clip-text text-transparent'>
              Sobre-
            </h2>

            <div className='flex flex-col gap-2'>
              <p className='text-sm sm:text-base text-muted-foreground'>
                Desenvolvedor Front-End com 4+ anos de experiência e foco em Frontend Engineering. Atuo no
                desenvolvimento de interfaces web com React e Next.js e aplicações mobile com React Native e
                Flutter, com TypeScript como base em ambas as plataformas.
              </p>
              <p className='text-sm sm:text-base text-muted-foreground'>
                Tenho experiência na criação de design systems do zero, componentização escalável e integração
                direta entre desenvolvimento e design. Acredito que decisões de interface são tão técnicas quanto
                decisões de arquitetura — e é com essa mentalidade que entrego.
              </p>
            </div>

            <div className='flex items-center justify-between md:justify-start divide-x divide-border'>
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className='flex-1 md:flex-none px-2 md:px-8 first:pl-0 flex flex-col items-center md:items-start gap-1'
                >
                  <span className='font-heading font-extrabold text-4xl md:text-5xl text-primary dark:text-primary-light'>
                    {stat.value}
                  </span>
                  <span className='font-heading text-sm md:text-base text-muted-foreground text-center md:text-left'>
                    {stat.label}
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
