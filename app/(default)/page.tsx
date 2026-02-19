export const metadata = {
  title: 'Ward - Gestión de Inventario para Flotas de Transporte',
  description: 'Plataforma SaaS para digitalizar la operación de flotas de transporte de carga. Empieza con el módulo de inventario y crece con cada nueva funcionalidad.',
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
