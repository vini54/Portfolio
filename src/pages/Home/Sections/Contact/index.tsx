'use client';

import { useState } from 'react';
import { Check, Copy, Download, ExternalLink, Mail, MessageCircle, Phone, Sparkle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GithubIcon, InstagramIcon, LinkedinIcon } from '@/components/icons/social-icons';
import { useTranslation } from 'react-i18next';
import { Footer } from '../../Components/Footer';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

export const socialLinks = [
  { label: 'Linkedin', href: 'https://www.linkedin.com/in/lovinidev', icon: LinkedinIcon },
  { label: 'GitHub', href: 'https://github.com/vini54', icon: GithubIcon },
  { label: 'Instagram', href: 'https://www.instagram.com/santosviniciu/', icon: InstagramIcon }
];

interface ContactActionLinkProps {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const ContactActionLink = ({ label, href, icon: Icon }: ContactActionLinkProps) => (
  <a
    href={href}
    target='_blank'
    rel='noopener noreferrer'
    className='flex items-center justify-between py-3 border-b border-border/50 last:border-b-0 group'
  >
    <span className='flex items-center gap-2 text-sm text-foreground'>
      <Icon className='size-4' />
      {label}
    </span>
    <ExternalLink className='size-4 text-muted-foreground group-hover:text-primary dark:group-hover:text-primary-light transition' />
  </a>
);

interface ContactCopyRowProps {
  value: string;
  icon: React.ComponentType<{ className?: string }>;
}

const ContactCopyRow = ({ value, icon: Icon }: ContactCopyRowProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(value);
      } else {
        // navigator.clipboard só existe em contexto seguro (https/localhost) — fallback pra rede local via HTTP
        const textarea = document.createElement('textarea');
        textarea.value = value;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      console.error('Falha ao copiar', e);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className='w-full flex items-center justify-between py-3 border-b border-border/50 last:border-b-0 group'
    >
      <span className='flex items-center gap-2 text-sm text-foreground'>
        <Icon className='size-4' />
        {value}
      </span>
      {copied ? (
        <Check className='size-4 text-primary dark:text-primary-light' />
      ) : (
        <Copy className='size-4 text-muted-foreground group-hover:text-primary dark:group-hover:text-primary-light transition' />
      )}
    </button>
  );
};

export const ContactSection = () => {
  const { t } = useTranslation();
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div
      className='w-full min-h-screen flex flex-col justify-center items-center relative lg:pb-20'
      id='contact'
      ref={revealRef}
    >
      <div className='w-full container px-4 sm:px-6 md:px-9 py-16 md:py-24' data-reveal-block>
        <h2
          data-reveal-item
          className='flex items-center gap-3 font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold bg-linear-to-r from-black dark:from-white to-primary dark:to-primary-light bg-clip-text text-transparent'
        >
          {t('home.contact.title')}
          <Sparkle className='fill-primary text-primary size-8 md:size-10' />
        </h2>

        <div className='w-full border-t border-border mt-8 mb-8' />

        <div className='w-full rounded-3xl border border-primary/20 bg-primary/10 p-4 sm:p-8 md:p-12'>
          <div className='grid grid-cols-1 lg:grid-cols-[1.5fr_1fr_1fr] gap-8 md:gap-12'>
            <div data-reveal-item className='flex flex-col gap-8 md:gap-16'>
              <div className='flex flex-col gap-2'>
                <span className='text-xs text-primary dark:text-primary-light'>{t('home.contact.kicker')}</span>
                <p className='font-heading font-bold text-base sm:text-xl md:text-2xl text-foreground'>
                  {t('home.contact.headline')}
                </p>
              </div>

              <Button variant='default' className='w-fit'>
                <Download className='size-4' />
                {t('home.common.downloadCv')}
              </Button>
            </div>

            <div data-reveal-item className='flex flex-col gap-2'>
              <span className='text-xs text-primary dark:text-primary-light'>{t('home.common.social')}</span>
              {socialLinks.map((social) => (
                <ContactActionLink key={social.label} label={social.label} href={social.href} icon={social.icon} />
              ))}
            </div>

            <div data-reveal-item className='flex flex-col gap-2'>
              <span className='text-xs text-primary dark:text-primary-light'>{t('home.contact.getInTouch')}</span>
              <ContactCopyRow value='vinioli544@gmail.com' icon={Mail} />

              <ContactActionLink label='Whatsapp' href='https://wa.me/5584996591760' icon={MessageCircle} />

              <ContactCopyRow value='(84) 99659-1760' icon={Phone} />

              <ContactCopyRow value='(85) 98444-2658' icon={Phone} />
            </div>
          </div>
        </div>
      </div>

      {/* Só posicionamento — o footer cuida do próprio reveal e do próprio recorte. */}
      <div className='lg:absolute bottom-0 left-0 w-full'>
        <Footer />
      </div>
    </div>
  );
};
