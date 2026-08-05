'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useLoading } from '@/hooks/use-loading';
import { LogoWhitePath } from '@/assets/logo-white-path';
import { LogoBlackPath } from '@/assets/logo-black-path';

gsap.registerPlugin(useGSAP);

/**
 * Cobre o site até fontes e primeiro quadro do WebGL estarem prontos.
 *
 * Renderizado já no HTML do servidor (estado inicial sempre "carregando"), senão
 * haveria um lampejo do site cru antes do overlay montar. A trava de scroll é a
 * classe `is-loading` no <html> — ver globals.css e use-loading.tsx.
 */
export const LoadingOverlay = () => {
  const { isLoading } = useLoading();
  const overlayRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useGSAP(
    () => {
      if (isLoading || !overlayRef.current) return;

      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: () => setVisible(false)
      });
    },
    { dependencies: [isLoading], scope: overlayRef }
  );

  if (!visible) return null;

  return (
    <div
      ref={overlayRef}
      aria-hidden='true'
      className='fixed inset-0 z-100 flex items-center justify-center bg-background'
    >
      <span className='relative block size-20 overflow-visible visible'>
        <LogoWhitePath
          className='absolute inset-0 size-20 opacity-0 dark:opacity-100 transition-opacity duration-300 ease-in-out visible overflow-visible'
          animate
        />

        <LogoBlackPath
          className='absolute inset-0 size-20 opacity-100 dark:opacity-0 transition-opacity duration-300 ease-in-out visible overflow-visible'
          animate
        />
      </span>
    </div>
  );
};
