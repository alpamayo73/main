
import Head from 'next/head'
import ContactHero from '../components/contact/ContactHero'
import ContactInfo from '../components/contact/ContactInfo'
import ContactForm from '../components/contact/ContactForm'
import ServiceAreas from '../components/contact/ServiceAreas'
import FAQ from '../components/contact/FAQ'
import MapLocation from '../components/contact/MapLocation'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - Alpamayo Technical Services | Dubai Renovation & AC Services</title>
        <meta name="description" content="Get in touch with Alpamayo Technical Services for premium renovation and AC services in Dubai. Free consultation and 24/7 support available." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ServiceAreas />
      <FAQ />
      <MapLocation />
    </>
  )
}
