import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Geist, Geist_Mono, Hanken_Grotesk, JetBrains_Mono } from 'next/font/google'
import Script from 'next/script'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import { SettingsProvider } from '@/components/SettingsProvider'
import { ScriptInjector } from '@/components/ScriptInjector'
import { getSettings } from '@/lib/get-settings'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })
const hankenGrotesk = Hanken_Grotesk({ variable: '--font-hanken', subsets: ['latin'], display: 'swap' })
const jetbrainsMono = JetBrains_Mono({ variable: '--font-jetbrains', subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://mobiletyreswatford247.co.uk'),
  title: 'Mobile Tyres Watford 24/7 | Mobile Tyre Fitting Near Me – Watford',
  description:
    'Mobile Tyres Watford 24/7 offers same day mobile tyre fitting, tyre puncture repair, and emergency flat tyre service near you in Watford & surrounding areas. Call 07466756907.',
  icons: {
    icon: '/mobile-tyre-watford-24-7-site-icon.webp',
    apple: '/mobile-tyre-watford-24-7-site-icon.webp',
  },
  openGraph: {
    title: 'Mobile Tyres Watford 24/7 | Mobile Tyre Fitting Near Me – Watford',
    description:
      'Mobile Tyres Watford 24/7 offers same day mobile tyre fitting, tyre puncture repair, and emergency flat tyre service near you in Watford & surrounding areas. Call 07466756907.',
    images: [{ url: '/mobile-tyre-watford-24-7-site-open-graph.webp', width: 1200, height: 630 }],
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/mobile-tyre-watford-24-7-site-open-graph.webp'],
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const settings = await getSettings()

  return (
    <html
      lang="en-GB"
      className={`dark ${geistSans.variable} ${geistMono.variable} ${hankenGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <ScriptInjector html={settings.headScripts} idPrefix="head" />
      </head>
      <body className="bg-[#0b1326] text-[#dae2fd] antialiased selection:bg-[#f97316] selection:text-white">
        {/* Material Symbols Outlined – loaded non-render-blocking */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" media="print" id="material-symbols-css" />
        <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" /></noscript>
        <Script id="activate-icons" strategy="afterInteractive">{`
          var el = document.getElementById('material-symbols-css');
          if (el) el.media = 'all';
        `}</Script>
        <ScriptInjector html={settings.bodyScripts} idPrefix="body" />
        <SettingsProvider settings={settings}>
          <Header />
          {children}
          <Footer />
          <FloatingButtons />
        </SettingsProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
