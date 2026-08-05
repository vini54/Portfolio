'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, TextPlugin, useGSAP);

/**
 * O footer é a única peça que **não** usa o `useScrollReveal` das seções, e isso
 * é de propósito: ancorado no fim da página, ele só tem ~72px de curso de scroll
 * (desktop). Um reveal grudado no scroll acontece e se desfaz nesse punhado de
 * pixels — pisca. Aqui a animação tem duração própria: o scroll apenas dispara.
 */
export const Footer = () => {
  const { t } = useTranslation();
  const triggerRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const fullName = nameRef.current?.textContent ?? '';

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: triggerRef.current,
            start: 'top bottom+=120',
            toggleActions: 'play none none reverse'
          }
        });

        tl.fromTo(
          footerRef.current,
          { yPercent: 100, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 1.1, ease: 'power1.out' }
        );

        tl.fromTo(
          nameRef.current,
          { text: { value: '' } },
          { text: { value: fullName, padSpace: true }, duration: 0.7, ease: 'none' },
          '-=0.45'
        );
      });

      return () => mm.revert();
    },
    { scope: triggerRef }
  );

  return (
    <div ref={triggerRef} className='w-full overflow-hidden'>
      <footer ref={footerRef} className='w-full relative overflow-hidden bg-primary'>
        <div className='w-full relative z-10 px-4 sm:px-6 md:px-9 py-2 grid grid-cols-3 items-center gap-4'>
          <div className='flex flex-col gap-1 max-sm:col-span-3 max-lg:col-span-2'>
            <span className='text-xs text-primary-foreground/70'>{t('home.footer.tagline')}</span>
            <span ref={nameRef} className='font-heading font-extrabold text-primary-foreground whitespace-nowrap'>
              Vinícius Santos de Oliveira
            </span>
          </div>

          <span className='text-xs text-primary-foreground/80 text-start sm:text-end lg:text-center max-sm:whitespace-nowrap'>
            {t('home.footer.location')}
          </span>

          <div className='grid justify-end justify-items-end max-sm:col-span-2 max-lg:col-span-3 max-lg:-mb-2'>
            <Image
              src='/logo-icon-bg-dark.svg'
              width={200}
              height={200}
              alt=''
              aria-hidden='true'
              className='col-start-1 row-start-1 lg:scale-150 h-12 md:h-14 w-auto opacity-0 dark:opacity-90 transition-opacity duration-300 ease-in-out pointer-events-none'
            />

            <Image
              src='/logo-icon-bg-light.svg'
              width={200}
              height={200}
              alt=''
              aria-hidden='true'
              className='col-start-1 row-start-1 lg:scale-150 h-12 md:h-14 w-auto opacity-90 dark:opacity-0 transition-opacity duration-300 ease-in-out pointer-events-none'
            />
          </div>
        </div>
      </footer>
    </div>
  );
};
