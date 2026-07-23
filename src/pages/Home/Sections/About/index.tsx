export const AboutSection = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-between relative' id='about'>
      <div
        className='w-full h-full absolute inset-0 pointer-events-none'
        style={{
          backgroundImage: 'url(/pattern-vector.svg)',
          backgroundRepeat: 'repeat',
          backgroundSize: '64px',
          opacity: 0.35
        }}
      />
    </div>
  );
};
