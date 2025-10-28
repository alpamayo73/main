
import Head from 'next/head'
import FAQHero from '../components/faq/FAQHero'
import GeneralFAQ from '../components/faq/GeneralFAQ'
import RenovationFAQ from '../components/faq/RenovationFAQ'
import ACFAQ from '../components/faq/ACFAQ'
import ProcessFAQ from '../components/faq/ProcessFAQ'
import ContactPrompt from '../components/faq/ContactPrompt'

export default function FAQ() {
  return (
    <>
      <Head>
        <title>FAQ - Alpamayo Technical Services | Dubai Renovation & AC Services</title>
        <meta name="description" content="Find answers to common questions about renovation and AC services in Dubai. Get expert insights from Alpamayo Technical Services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <FAQHero />
      <GeneralFAQ />
      <RenovationFAQ />
      <ACFAQ />
      <ProcessFAQ />
      <ContactPrompt />
    </>
  )
}
