'use client';

import Ferrofluid from '@/components/FerroFluid';
import GlassSurface from '@/components/GlassSurface';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import { Menu } from '../Components/Menu';

const stacksList = [
  'React',
  'Next.js',
  'React Native',
  'TailwindCSS',
  'Design Systems',
  'TypeScript',
  'Shadcn.ui',
  'Web Performance',
  'GraphQL'
];

export const HeroSection = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-between'>
      <div className='w-full h-screen absolute top-0 left-0 opacity-50'>
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
      </div>

      <div className='w-full container px-9 py-6'>
        <GlassSurface borderRadius={8} height={52} blur={20} width='100%'>
          <div className='w-full flex justify-between items-center'>
            <div className='flex items-center gap-3 p-2 justify-start w-full'>
              <div className='p-1.5'>
                <Image src={'/logo-icon-white.png'} width={24} height={24} alt='Logo' />
              </div>

              {[
                { label: 'Sobre', href: '#about' },
                { label: 'Serviços', href: '#services' },
                { label: 'Contato', href: '#contact' }
              ].map((item, ind) => (
                <Button variant='link' key={`navI-${ind}`} className='text-md'>
                  {item.label}
                </Button>
              ))}
            </div>

            <div className='px-1.5'>
              <Menu />
            </div>
          </div>
        </GlassSurface>
      </div>

      <div className='w-full h-[50dvh] flex items-end overflow-hidden'>
        <div className='w-full font-heading mb-6 -rotate-3 -translate-y-20 -translate-x-2 scale-x-105'>
          <GlassSurface borderRadius={0} height={72} blur={20} width='100%' className='w-full'>
            <div className='w-full px-6 py-4 flex items-center gap-4 text-2xl font-bold pl-12 animate-text-translate hover:paused'>
              <span>✦</span>
              {[...stacksList, ...stacksList].map((item, ind) => (
                <React.Fragment key={`stack-${ind}`}>
                  <span className='text-nowrap'>{item}</span>

                  <span>✦</span>
                </React.Fragment>
              ))}
            </div>
          </GlassSurface>
        </div>
      </div>
    </div>
  );
};
