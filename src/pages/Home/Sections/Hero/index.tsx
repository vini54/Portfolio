'use client';

import Ferrofluid from '@/components/FerroFluid';
import { HeroDisplay } from './Display';
import { HeroStacks } from './Stacks';
import { useLoading } from '@/hooks/use-loading';

export const HeroSection = () => {
  const { markReady } = useLoading();

  return (
    <div className='w-full h-screen flex flex-col items-center justify-between relative' id='initial'>
      <div className='w-full h-dvh absolute top-0 left-0 opacity-50 z-2'>
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
          onReady={() => markReady('hero')}
        />
      </div>

      <HeroDisplay />

      <HeroStacks />
    </div>
  );
};
