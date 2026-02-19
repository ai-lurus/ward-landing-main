import './css/style.css'

import type { Metadata } from 'next'
import Header from '@/components/ui/header'

export const metadata: Metadata = {
  title: 'Ward — Software de Inventario para Flotas de Transporte',
  description: 'Digitaliza el inventario de refacciones, llantas y consumibles de tu flota. Ward reemplaza Excel con trazabilidad completa, alertas de stock y reportes en tiempo real.',
  keywords: [
    'software inventario transporte',
    'gestión inventario flota',
    'refacciones flota transporte',
    'inventario llantas camiones',
    'digitalizar operación transporte',
    'SaaS transporte carga México',
  ],
  icons: {
    icon: '/images/wardLogocuadrado.png',
    shortcut: '/images/wardLogocuadrado.png',
    apple: '/images/wardLogocuadrado.png',
  },
  openGraph: {
    title: 'Ward — Software de Inventario para Flotas de Transporte',
    description: 'Digitaliza el inventario de refacciones, llantas y consumibles de tu flota. Trazabilidad completa, alertas de stock y reportes en tiempo real.',
    type: 'website',
    locale: 'es_MX',
    siteName: 'Ward',
  },
  twitter: {
    card: 'summary',
    title: 'Ward — Software de Inventario para Flotas de Transporte',
    description: 'Digitaliza el inventario de refacciones, llantas y consumibles de tu flota.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Ward',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: 'Software de inventario para flotas de transporte de carga. Control de refacciones, llantas y consumibles con trazabilidad completa.',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
    },
  }

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`__variable_e66fe9 __variable_228ab5 font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
