import dynamic from 'next/dynamic'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'

const AIDemo      = dynamic(() => import('@/components/AIDemo'))
const Services    = dynamic(() => import('@/components/Services'))
const Sections    = dynamic(() => import('@/components/Sections').then(m => ({ default: () => {
  const { Industries, Dashboard, WhyMillerify, Testimonials } = m
  return (
    <>
      <Industries />
      <Dashboard />
      <WhyMillerify />
      <Testimonials />
    </>
  )
}})
))
const CTAFooter   = dynamic(() => import('@/components/CTAFooter').then(m => ({ default: () => {
  const { CTA, Footer } = m
  return <><CTA /><Footer /></>
}})))

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <AIDemo />
      <Services />
      <Sections />
      <CTAFooter />
    </main>
  )
}
