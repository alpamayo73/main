// pages/index.js
import Head from 'next/head'
import Hero from '../components/home/Hero'
import FeaturedServices from '../components/home/FeaturedServices'
import Features from '../components/home/Features'
import AboutPreview from '../components/home/AboutPreview'
import CTASection from '../components/home/CTASection'
import PortfolioShowcase from '../components/home/PortfolioShowcase'
import Stats from '../components/home/Stats'
import Testimonials from '../components/home/Testimonials'
import Process from '../components/home/Process'
import LuxuryServices from '../components/home/LuxuryServices'
import ContactPreview from '../components/home/ContactPreview'

export default function Home() {
  return (
    <>
      <Head>
        <title>Alpamayo Technical Services | Premium Renovation & AC Services in Dubai</title>
        <meta name="description" content="Premium renovation and AC services in Dubai. Villa, apartment, office renovation and professional AC system installation and maintenance." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Features />
      <FeaturedServices />
      <AboutPreview />
      <Stats />
      <LuxuryServices />
      <Process />
      
      <Testimonials />
      <CTASection />
      <ContactPreview />
    </>
  )
}
