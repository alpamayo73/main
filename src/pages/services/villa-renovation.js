// src/pages/services/villa-renovation.js
import Head from 'next/head'
import VillaHero from '../../components/services/villa/VillaHero'
import VillaOverview from '../../components/services/villa/VillaOverview'
import VillaProcess from '../../components/services/villa/VillaProcess'
import VillaFeatures from '../../components/services/villa/VillaFeatures'
import VillaPortfolio from '../../components/services/villa/VillaPortfolio'
import VillaPricing from '../../components/services/villa/VillaPricing'
import VillaCTA from '../../components/services/villa/VillaCTA'

export default function VillaRenovation() {
  return (
    <>
      <Head>
        <title>Villa Renovation Services Dubai | Alpamayo Technical Services</title>
        <meta name="description" content="Premium villa renovation services in Dubai. Transform your villa into a luxury retreat with our expert design and construction team." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <VillaHero />
      <VillaOverview />
      <VillaProcess />
      <VillaFeatures />
      <VillaPortfolio />
      <VillaPricing />
      <VillaCTA />
    </>
  )
}
