'use client';

import { Switch } from '@base-ui/react/switch';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';
import { cn } from '@/lib/utils';

export const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className='flex flex-col gap-2 items-start'>
      <span className='text-xs text-muted-foreground'>Aparência</span>

      <Switch.Root
        checked={theme === 'dark'}
        onCheckedChange={toggleTheme}
        className='group flex items-center gap-1 rounded-full bg-muted p-1 cursor-pointer'
      >
        <span
          className={cn(
            'flex size-7 items-center justify-center rounded-full text-muted-foreground transition-colors',
            'group-data-unchecked:bg-primary group-data-unchecked:text-primary-foreground'
          )}
        >
          <Sun className='size-4' />
        </span>

        <span
          className={cn(
            'flex size-7 items-center justify-center rounded-full text-muted-foreground transition-colors',
            'group-data-checked:bg-primary group-data-checked:text-primary-foreground'
          )}
        >
          <Moon className='size-4' />
        </span>
      </Switch.Root>
    </div>
  );
};
