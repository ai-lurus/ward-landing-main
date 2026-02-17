import './css/style.css'

import Header from '@/components/ui/header'

export const metadata = {
  title: 'Ward.io - Gestión Logística Integral para Transporte de Carga',
  description: 'Plataforma SaaS que digitaliza y optimiza la operación de flotas de transporte de carga. Control de viajes, costos, flota, inventario, operadores y reportes en un solo lugar.',
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
