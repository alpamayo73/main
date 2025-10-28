// src/pages/services/office-renovation.js
import Head from 'next/head'
import OfficeHero from '../../components/services/office/OfficeHero'
import OfficeOverview from '../../components/services/office/OfficeOverview'
import OfficeProcess from '../../components/services/office/OfficeProcess'
import OfficeFeatures from '../../components/services/office/OfficeFeatures'
import OfficePortfolio from '../../components/services/office/OfficePortfolio'
import OfficeCTA from '../../components/services/office/OfficeCTA'

export default function OfficeRenovation() {
  return (
    <>
      <Head>
        <title>Office Renovation Services Dubai | Alpamayo Technical Services</title>
        <meta name="description" content="Professional office renovation services in Dubai. Transform your workspace with ergonomic design and modern business solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <OfficeHero />
      <OfficeOverview />
      <OfficeProcess />
      <OfficeFeatures />
      <OfficePortfolio />
      <OfficeCTA />
    </>
  )
}
