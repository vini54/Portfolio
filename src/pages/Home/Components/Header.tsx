'use client';

import GlassSurface from '@/components/GlassSurface';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Menu } from './Menu';

const navItems = [
  { label: 'Sobre', href: '#about' },
  { label: 'Serviços', href: '#services' },
  { label: 'Contato', href: '#contact' }
];

export const Header = () => {
  return (
    <div className='w-full container px-4 py-4 sm:px-6 sm:py-5 md:px-9 md:py-6 z-30'>
      <GlassSurface borderRadius={8} height={52} blur={20} width='100%'>
        <div className='w-full flex justify-between items-center'>
          <div className='flex items-center gap-2 sm:gap-3 p-2 justify-start w-full'>
            <div className='p-1.5'>
              <Image src={'/logo-icon-white.png'} width={24} height={24} alt='Logo' className='not-dark:hidden' />

              <Image src={'/logo-icon-black.png'} width={24} height={24} alt='Logo' className='dark:hidden' />
            </div>

            {navItems.map((item, ind) => (
              <Button variant='link' key={`navI-${ind}`} className='text-xs sm:text-sm md:text-base'>
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
  );
};
