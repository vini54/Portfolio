import { Button } from '@/components/ui/button';
import { MenuIcon } from 'lucide-react';

export const Menu = () => {
  return (
    <Button variant={'ghost'}>
      <MenuIcon className='size-5' />
    </Button>
  );
};
