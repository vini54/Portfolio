'use client';

import { Header } from './Components/Header';
import { HeroSection, AboutSection } from './Sections';

export default function HomePage() {
  return (
    <div className='flex flex-col flex-1 items-center justify-center font-sans bg-background'>
      <Header />

      <HeroSection />

      <AboutSection />
    </div>
  );
}
