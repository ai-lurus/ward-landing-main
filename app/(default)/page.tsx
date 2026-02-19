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
