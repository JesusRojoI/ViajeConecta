import type { Metadata, Viewport } from 'next';
import { DM_Sans, DM_Serif_Display } from 'next/font/google';
import { cookies } from 'next/headers';
import './globals.css';
import { Providers } from './providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import type { Locale } from '@/types';

const displayFont = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-fraunces',
  display: 'swap',
  style: ['normal', 'italic'],
});

const bodyFont = DM_Sans({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://viajeconecta.com';

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const isEnglish = cookieStore.get('NEXT_LOCALE')?.value === 'en';
  const title = isEnglish
    ? 'ViajeConecta · Taste authentic Mexico'
    : 'ViajeConecta · Saborea el México auténtico';
  const description = isEnglish
    ? 'Culinary routes and immersions with traditional cooks, producers and centuries-old markets of Mexico. Taste authentic Mexico.'
    : 'Rutas e inmersiones gastronómicas con cocineras tradicionales, productores y mercados centenarios de México. Saborea el México auténtico.';
  const shortDescription = isEnglish
    ? 'Small routes to discover Mexico through its flavour.'
    : 'Pequeñas rutas para conocer México desde su sabor.';

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: title,
      template: '%s · ViajeConecta',
    },
    description,
    keywords: [
      'rutas gastronómicas',
      'México',
      'cocineras tradicionales',
      'turismo gastronómico',
      'Oaxaca',
      'Puebla',
      'Yucatán',
      'ViajeConecta',
    ],
    authors: [{ name: 'ViajeConecta' }],
    creator: 'ViajeConecta',
    openGraph: {
      type: 'website',
      locale: isEnglish ? 'en_US' : 'es_MX',
      url: siteUrl,
      siteName: 'ViajeConecta',
      title,
      description: isEnglish
        ? 'Small routes to discover Mexico through its flavour. Traditional cooks, centuries-old markets and the roads of coffee, mezcal and cacao.'
        : 'Pequeñas rutas para conocer México desde su sabor. Cocineras tradicionales, mercados centenarios y caminos de café, mezcal y cacao.',
      images: [
        {
          url: '/images/hero-poster.jpg',
          width: 1536,
          height: 864,
          alt: 'ViajeConecta',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: shortDescription,
      images: ['/images/hero-poster.jpg'],
    },
    icons: {
      icon: '/favicon.svg',
      shortcut: '/favicon.svg',
      apple: '/favicon.svg',
    },
    alternates: {
      canonical: siteUrl,
    },
  };
}

export const viewport: Viewport = {
  themeColor: '#1E3A32',
  width: 'device-width',
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get('NEXT_LOCALE')?.value;
  const locale: Locale = cookieLocale === 'en' ? 'en' : 'es';

  return (
    <html
      lang={locale}
      className={`${displayFont.variable} ${bodyFont.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body>
        <Providers initialLocale={locale}>
          <ScrollProgress />
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
