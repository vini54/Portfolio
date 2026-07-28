'use client';

import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { HeroSection, AboutSection, ServicesSection, ContactSection } from './Sections';

export default function HomePage() {
  return (
    <div className='flex flex-col flex-1 items-center justify-center font-sans bg-background'>
      <Header />

      <HeroSection />

      <AboutSection />

      <ServicesSection />

      <ContactSection />

      <Footer />
    </div>
  );
}
