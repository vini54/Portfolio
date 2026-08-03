'use client';

import { Tabs } from '@base-ui/react/tabs';
import { useTranslation } from 'react-i18next';
import { useLanguage, type Language } from '@/hooks/use-language';

export const LanguageSwitch = () => {
  const { currentLanguage, changeLanguage } = useLanguage();
  const { t } = useTranslation();

  return (
    <div className='flex flex-col gap-2 items-start'>
      <span className='text-xs text-muted-foreground'>{t('home.languageSwitch.label')}</span>

      <Tabs.Root value={currentLanguage} onValueChange={(value) => changeLanguage(value as Language)}>
        <Tabs.List className='inline-flex items-center gap-1 rounded-full bg-muted p-1 cursor-pointer'>
          {/* Endônimos: cada idioma se escreve nele mesmo, então não são traduzidos. */}
          <Tabs.Tab
            value='en'
            className='rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors data-active:bg-primary data-active:text-primary-foreground'
          >
            english
          </Tabs.Tab>
          <Tabs.Tab
            value='pt-BR'
            className='rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors data-active:bg-primary data-active:text-primary-foreground'
          >
            português
          </Tabs.Tab>
        </Tabs.List>
      </Tabs.Root>
    </div>
  );
};
