'use client';

import { HeroSection } from './Sections/Hero';

export default function HomePage() {
  return (
    <div className='flex flex-col flex-1 items-center justify-center font-sans bg-background'>
      <HeroSection />
    </div>
  );
}
