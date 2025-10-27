import Head from 'next/head'
import Hero from '../components/home/Hero'
import FeaturedServices from '../components/home/FeaturedServices'
import Features from '../components/home/Features'
import AboutPreview from '../components/home/AboutPreview'
import CTASection from '../components/home/CTASection'

// New Luxury Sections
import PortfolioShowcase from '../components/home/PortfolioShowcase'
import Testimonials from '../components/home/Testimonials'
import Process from '../components/home/Process'
import Stats from '../components/home/Stats'
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
        {/* Add Google Fonts for Roboto */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
      </Head>

      {/* Your Original Sections */}
      <Hero />
      <Features />
      <FeaturedServices />
      <AboutPreview />
      
      {/* New Luxury Sections Added */}
      <Stats />
      <LuxuryServices />
      <Process />
      <PortfolioShowcase />
      <Testimonials />
      
      {/* Your Original CTA Section */}
      <CTASection />
      
      {/* New Contact Preview Section */}
      <ContactPreview />
    </>
  )
}
