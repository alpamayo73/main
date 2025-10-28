// pages/services.js
import Head from 'next/head'
import ServicesHero from '../components/services/ServicesHero'
import RenovationServices from '../components/services/RenovationServices'
import ACServices from '../components/services/ACServices'
import WhyChooseUs from '../components/services/WhyChooseUs'
import ProcessOverview from '../components/services/ProcessOverview'
import ContactCTA from '../components/services/ContactCTA'

export default function Services() {
  return (
    <>
      <Head>
        <title>Our Services - Alpamayo Technical Services | Dubai Renovation & AC</title>
        <meta name="description" content="Premium renovation and AC services in Dubai. Villa, apartment, office renovation and professional AC system installation and maintenance." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <ServicesHero />
      <RenovationServices />
      <ACServices />
      <WhyChooseUs />
      <ProcessOverview />
      <ContactCTA />
    </>
  )
}
