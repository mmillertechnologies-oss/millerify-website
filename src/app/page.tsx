import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import AIDemo from '@/components/AIDemo'
import Services from '@/components/Services'
import { Industries, Dashboard, WhyMillerify, Testimonials } from '@/components/Sections'
import { CTA, Footer } from '@/components/CTAFooter'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
<AIDemo />
      <Services />
      <Industries />
      <Dashboard />
      <WhyMillerify />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
