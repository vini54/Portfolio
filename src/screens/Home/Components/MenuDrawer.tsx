'use client';

import { forwardRef, useImperativeHandle, useRef } from 'react';
import { Dialog } from '@base-ui/react/dialog';
import { Download, Mail, MessageCircle, X } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Button } from '@/components/ui/button';
import { ThemeSwitch } from './ThemeSwitch';
import { LanguageSwitch } from './LanguageSwitch';
import { navItems } from './nav-items';
import { scrollToSection } from '@/lib/scroll-to-section';
import { socialLinks } from '../Sections';
import { useTranslation } from 'react-i18next';
import { siteConfig } from '@/lib/site-config';
import { useLanguage } from '@/hooks/use-language';

gsap.registerPlugin(useGSAP);

export interface MenuDrawerHandle {
  close: () => void;
}

interface MenuDrawerProps {
  open: boolean;
  onCloseComplete: () => void;
}

export const MenuDrawer = forwardRef<MenuDrawerHandle, MenuDrawerProps>(({ open, onCloseComplete }, ref) => {
  const { currentLanguage } = useLanguage();
  const panelRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<() => void>(() => {});
  const { t } = useTranslation();

  useGSAP(
    (_context, contextSafe) => {
      if (!panelRef.current) return;

      closeRef.current = contextSafe!(() => {
        const items = gsap.utils.toArray<HTMLElement>('[data-stagger-item]', panelRef.current!);
        const tl = gsap.timeline({ onComplete: onCloseComplete });

        tl.to(items, { opacity: 0, duration: 0.2, ease: 'power1.in' })
          .to(panelRef.current, { opacity: 0, scale: 0.94, duration: 0.3, ease: 'power2.in' }, '<')
          .set(panelRef.current, { pointerEvents: 'none' });

        if (backdropRef.current) {
          tl.to(backdropRef.current, { opacity: 0, duration: 0.25 }, '<');
        }
      });

      if (open) {
        const items = gsap.utils.toArray<HTMLElement>('[data-stagger-item]', panelRef.current);
        const tl = gsap.timeline();

        tl.set(panelRef.current, { pointerEvents: 'auto' })
          .fromTo(
            panelRef.current,
            { opacity: 0, scale: 0.5 },
            { opacity: 1, scale: 1, duration: 0.65, ease: 'power3.out', transformOrigin: 'top right' }
          )
          .fromTo(
            items,
            { opacity: 0, y: 12 },
            { opacity: 1, y: 0, duration: 0.35, ease: 'power2.inOut', stagger: 0.15 },
            '<0.15'
          );

        if (backdropRef.current) {
          tl.to(backdropRef.current, { opacity: 1, duration: 0.3 }, '<');
        }
      }
    },
    { scope: panelRef, dependencies: [open] }
  );

  const handleDownloadCv = (alt?: boolean) => {
    if (currentLanguage === 'en' || alt) {
      window.open(siteConfig.cv.english, '_blank');
      return;
    }

    window.open(siteConfig.cv.portuguese, '_blank');
  };

  useImperativeHandle(ref, () => ({ close: () => closeRef.current() }), []);

  return (
    <Dialog.Portal keepMounted>
      <Dialog.Backdrop ref={backdropRef} className='fixed inset-0 z-40 bg-black/25 opacity-0 max-sm:bg-black/50' />

      <Dialog.Popup
        ref={panelRef}
        className='fixed z-50 top-6 right-4 bottom-6 left-4 sm:left-auto sm:w-105 sm:max-w-[90vw] rounded-3xl border border-border bg-card p-6 shadow-2xl flex flex-col gap-6 overflow-y-auto opacity-0 scale-95 pointer-events-none sm:p-8'
      >
        <button
          onClick={() => closeRef.current()}
          className='self-end rounded-full p-2 text-foreground transition-colors hover:bg-muted'
          aria-label={t('home.menuDrawer.close')}
        >
          <X className='size-5' />
        </button>

        <nav data-stagger-item className='flex flex-col gap-4 sm:gap-6'>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
                closeRef.current();
              }}
              className='font-heading text-4xl font-bold text-foreground sm:text-5xl hover:text-primary hover:dark:text-primary-light transition ease-in'
            >
              {t(item.labelKey)}
            </a>
          ))}
        </nav>

        <div className='flex-1' />

        <div className='flex flex-col gap-3'>
          <section data-stagger-item>
            <ThemeSwitch />
          </section>

          <section data-stagger-item>
            <LanguageSwitch />
          </section>

          <section data-stagger-item className='flex flex-col gap-2'>
            <span className='text-xs text-muted-foreground'>{t('home.menuDrawer.resume')}</span>
            <Button variant='default' className='w-fit'>
              <Download className='size-4' />
              {t('home.common.downloadCv')}
            </Button>
            <Button variant={'link'} className='w-fit p-0 text-sm text-muted-foreground hover:text-foreground'>
              {t('home.menuDrawer.downloadCvAlt')}
            </Button>
          </section>
        </div>

        <div className='flex-1' />

        <section data-stagger-item className='flex flex-col items-start gap-2'>
          <span className='text-xs text-muted-foreground'>{t('home.menuDrawer.contactMe')}</span>

          <a href='mailto:vinioli544@gmail.com' className='flex items-center gap-2 text-sm text-foreground group'>
            <Mail className='size-4' />

            <span className='group-hover:text-primary group-hover:dark:text-primary-light transition ease-in'>
              vinioli544@gmail.com
            </span>
          </a>

          <span className='flex items-center gap-2 text-sm text-foreground group'>
            <MessageCircle className='size-4' />
            <span className='group-hover:text-primary group-hover:dark:text-primary-light transition ease-in'>
              (84) 99659-1760
            </span>
          </span>
        </section>

        <section data-stagger-item className='mt-6 flex flex-col gap-2'>
          <span className='text-xs text-muted-foreground'>{t('home.common.social')}</span>
          <div className='grid grid-cols-2 gap-2 text-sm text-foreground'>
            {socialLinks.map((item, ind) => (
              <a
                key={`${item.label}-${ind}`}
                href={item.href}
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-primary hover:dark:text-primary-light transition ease-in'
              >
                {item.label}
              </a>
            ))}
          </div>
        </section>
      </Dialog.Popup>
    </Dialog.Portal>
  );
});

MenuDrawer.displayName = 'MenuDrawer';
