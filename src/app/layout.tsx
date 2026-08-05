import type { Metadata, Viewport } from 'next';
import { DM_Sans, Syne } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/lib/site-config';
import { PersonJsonLd } from '@/components/PersonJsonLd';
import { ThemeProvider } from '@/hooks/use-theme';
import { LanguageProvider } from '@/hooks/use-language';
import { LoadingProvider } from '@/hooks/use-loading';
import { LoadingOverlay } from '@/components/LoadingOverlay';

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-sans' });

const SyneHeading = Syne({ subsets: ['latin'], variable: '--font-heading' });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.fullName, url: siteConfig.url }],
  creator: siteConfig.fullName,
  publisher: siteConfig.fullName,
  applicationName: siteConfig.name,
  category: 'technology',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.title,
    title: siteConfig.title,
    description: siteConfig.description
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    }
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  }
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f0edea' },
    { media: '(prefers-color-scheme: dark)', color: '#2b303a' }
  ],
  colorScheme: 'dark light'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='pt-BR'
      suppressHydrationWarning
      className={cn(
        'h-full',
        'antialiased',
        'font-sans',
        dmSans.variable,
        SyneHeading.variable,
        'dark',
        'is-loading'
      )}
    >
      <body className='min-h-full flex flex-col'>
        <PersonJsonLd />

        <LoadingProvider>
          <LanguageProvider>
            <ThemeProvider>{children}</ThemeProvider>
          </LanguageProvider>

          <LoadingOverlay />
        </LoadingProvider>
      </body>
    </html>
  );
}
