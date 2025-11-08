// src/pages/services/apartment-renovation.js
import Head from 'next/head'
import ApartmentHero from '../../components/services/apartment/ApartmentHero'
import ApartmentOverview from '../../components/services/apartment/ApartmentOverview'
import ApartmentProcess from '../../components/services/apartment/ApartmentProcess'
import ApartmentFeatures from '../../components/services/apartment/ApartmentFeatures'

import ApartmentCTA from '../../components/services/apartment/ApartmentCTA'

export default function ApartmentRenovation() {
  return (
    <>
      <Head>
        <title>Apartment Renovation Services Dubai | Alpamayo Technical Services</title>
        <meta name="description" content="Professional apartment renovation services in Dubai. Transform your apartment with space optimization and modern design solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <ApartmentHero />
      <ApartmentOverview />
      <ApartmentProcess />
      <ApartmentFeatures />
      
      <ApartmentCTA />
    </>
  )
}
