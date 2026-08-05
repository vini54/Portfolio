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
import { scrollToSection, scrollToTop } from '@/lib/scroll-to-section';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

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

      let holds = 0;

      ScrollTrigger.create({
        start: 'top top',
        end: 'max',
        onUpdate: (self) => {
          if (holds > 0 || self.direction === -1) showAnim.play();
          else showAnim.reverse();
        }
      });

      navItems.forEach(({ href }) => {
        const section = document.querySelector(href);
        if (!section) return;

        ScrollTrigger.create({
          trigger: section,
          start: 'bottom bottom+=10%',
          end: '+=30%', // segura visível por 30% de viewport de rolagem
          onToggle: (self) => {
            holds += self.isActive ? 1 : -1;
            if (self.isActive) showAnim.play();
          }
        });
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
              <button onClick={scrollToTop} aria-label={t('home.header.backToTop')} className='p-1.5 cursor-pointer'>
                <span className='relative block size-6'>
                  <Image
                    src={'/logo-icon-white.svg'}
                    width={24}
                    height={24}
                    alt={t('home.header.logoAlt')}
                    className='absolute inset-0 size-6 opacity-0 dark:opacity-100 transition-opacity duration-300 ease-in-out'
                  />

                  <Image
                    src={'/logo-icon-black.svg'}
                    width={24}
                    height={24}
                    alt=''
                    aria-hidden='true'
                    className='absolute inset-0 size-6 opacity-100 dark:opacity-0 transition-opacity duration-300 ease-in-out'
                  />
                </span>
              </button>

              {navItems.map((item) => (
                <Button
                  variant='link'
                  key={item.href}
                  className='text-xs sm:text-sm md:text-base'
                  onClick={() => scrollToSection(item.href)}
                >
                  {t(item.labelKey)}
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
