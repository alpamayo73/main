// pages/about.js
import Head from 'next/head'
import AboutHero from '../components/about/AboutHero'
import OurStory from '../components/about/OurStory'
import OurMission from '../components/about/OurMission'
import WhyChooseUs from '../components/about/WhyChooseUs'
import OurTeam from '../components/about/OurTeam'
import OurValues from '../components/about/OurValues'
import ContactCTA from '../components/about/ContactCTA'

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Alpamayo Technical Services | Premium Renovation & AC Services in Dubai</title>
        <meta name="description" content="Learn about Alpamayo Technical Services - Dubai's premier renovation and AC service company with years of experience and commitment to excellence." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <AboutHero />
      <OurStory />
      <OurMission />
      <WhyChooseUs />
      <OurTeam />
      <OurValues />
      <ContactCTA />
    </>
  )
}
