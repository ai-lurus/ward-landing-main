import './css/style.css'

import Header from '@/components/ui/header'

export const metadata = {
  title: 'Ward - Gestión de Inventario para Flotas de Transporte',
  description: 'Plataforma SaaS para digitalizar la operación de flotas de transporte de carga. Empieza con el módulo de inventario y crece con cada nueva funcionalidad.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`__variable_e66fe9 __variable_228ab5 font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
