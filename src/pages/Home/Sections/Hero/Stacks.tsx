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
  );
};
