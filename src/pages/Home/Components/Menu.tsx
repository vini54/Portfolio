'use client';

import { useRef, useState } from 'react';
import { Dialog } from '@base-ui/react/dialog';
import { MenuIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MenuDrawer, type MenuDrawerHandle } from './MenuDrawer';

export const Menu = () => {
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<MenuDrawerHandle>(null);

  const handleOpenChange = (next: boolean) => {
    if (next) {
      setOpen(true);
    } else {
      drawerRef.current?.close();
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange} modal>
      <Dialog.Trigger
        render={
          <Button variant='ghost'>
            <MenuIcon className='size-5' />
          </Button>
        }
      />

      <MenuDrawer ref={drawerRef} open={open} onCloseComplete={() => setOpen(false)} />
    </Dialog.Root>
  );
};
