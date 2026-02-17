export const metadata = {
  title: 'Ward.io - Gestión Logística Integral para Transporte de Carga',
  description: 'Plataforma SaaS que digitaliza y optimiza la operación de flotas de transporte de carga. Control de viajes, costos, flota, inventario, operadores y reportes en un solo lugar.',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Zigzag from '@/components/zigzag'
import Pricing from '@/components/pricing'
import Testimonials from '@/components/testimonials'
import Faq from '@/components/faq'
import Newsletter from '@/components/newsletter'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      {/* <Pricing /> */}
      {/* <Testimonials /> */}
      <Faq />
      <Newsletter />
    </>
  )
}
