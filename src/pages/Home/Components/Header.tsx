'use client';

import GlassSurface from '@/components/GlassSurface';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Menu } from './Menu';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { navItems } from './nav-items';
import { scrollToSection } from '@/lib/scroll-to-section';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const showAnim = gsap
        .from(headerRef.current, {
          yPercent: -100,
          paused: true,
          duration: 0.2,
          ease: 'power2.inOut'
        })
        .progress(1);

      ScrollTrigger.create({
        start: 'top top',
        end: 'max',
        onUpdate: (self) => {
          self.direction === -1 ? showAnim.play() : showAnim.reverse();
        }
      });
    },
    { scope: headerRef }
  );

  return (
    <header className='w-full fixed top-0 left-0 flex items-center justify-center z-30' ref={headerRef}>
      <div className='w-full container px-4 py-4 sm:px-6 sm:py-5 md:px-9 md:py-6'>
        <GlassSurface borderRadius={8} height={52} blur={20} width='100%'>
          <div className='w-full flex justify-between items-center'>
            <div className='flex items-center gap-2 sm:gap-3 p-2 justify-start w-full'>
              <div className='p-1.5'>
                <Image src={'/logo-icon-white.png'} width={24} height={24} alt='Logo' className='not-dark:hidden' />

                <Image src={'/logo-icon-black.png'} width={24} height={24} alt='Logo' className='dark:hidden' />
              </div>

              {navItems.map((item, ind) => (
                <Button
                  variant='link'
                  key={`navI-${ind}`}
                  className='text-xs sm:text-sm md:text-base'
                  onClick={() => scrollToSection(item.href)}
                >
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
    </header>
  );
};
