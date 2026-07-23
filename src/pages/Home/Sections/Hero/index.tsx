'use client';

import Ferrofluid from '@/components/FerroFluid';
import { Header } from '../../Components/Header';
import { HeroDisplay } from './Display';
import { HeroStacks } from './Stacks';

export const HeroSection = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-between'>
      {/* <div className='w-full h-screen absolute top-0 left-0 opacity-50'>
        <Ferrofluid
          colors={['#BE3455']}
          speed={0.5}
          scale={0.8}
          turbulence={1}
          fluidity={0.1}
          rimWidth={0.23}
          sharpness={2.5}
          shimmer={1.5}
          glow={2}
          flowDirection='down'
          opacity={1}
          mouseInteraction
          mouseStrength={1.5}
          mouseRadius={0.25}
        />
      </div> */}

      <Header />

      <HeroDisplay />

      <HeroStacks />
    </div>
  );
};
