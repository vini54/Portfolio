'use client';

import { useState } from 'react';
import { Tabs } from '@base-ui/react/tabs';

type Language = 'en' | 'pt';

export const LanguageSwitch = () => {
  const [lang, setLang] = useState<Language>('pt');

  return (
    <div className='flex flex-col gap-2 items-start'>
      <span className='text-xs text-muted-foreground'>Linguagem</span>

      <Tabs.Root value={lang} onValueChange={(value) => setLang(value as Language)}>
        <Tabs.List className='inline-flex items-center gap-1 rounded-full bg-muted p-1 cursor-pointer'>
          <Tabs.Tab
            value='en'
            className='rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors data-active:bg-primary data-active:text-primary-foreground'
          >
            english
          </Tabs.Tab>
          <Tabs.Tab
            value='pt'
            className='rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors data-active:bg-primary data-active:text-primary-foreground'
          >
            português
          </Tabs.Tab>
        </Tabs.List>
      </Tabs.Root>
    </div>
  );
};
