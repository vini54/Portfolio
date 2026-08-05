'use client';

import GlassSurface from '@/components/GlassSurface';
import React from 'react';

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

export const HeroStacks = () => {
  return (
    <div className='w-full h-full flex items-end overflow-x-hidden mt-auto'>
      <div className='w-full font-heading mb-0 sm:mb-6 -rotate-3 -translate-y-20 -translate-x-2 scale-x-105'>
        <GlassSurface borderRadius={0} height={72} blur={20} width='100%' className='w-full' displace={5}>
          <div className='w-full px-6 py-4 flex items-center gap-2 md:gap-4 text-lg sm:text-xl md:text-2xl font-bold pl-6 md:pl-12 animate-text-translate hover:paused'>
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
  );
};
