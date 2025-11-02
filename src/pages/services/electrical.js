import React from 'react';
import Head from 'next/head';
import ElectricalHeroSection from '@/components/services/Electrical/ElectricalHeroSection';
import ElectricalServices from '@/components/services/Electrical/ElectricalServices';
import ElectricalSolutions from '@/components/services/Electrical/ElectricalSolutions';
import SafetyCertification from '@/components/services/Electrical/SafetyCertification';
import ElectricalCTASection from '@/components/services/Electrical/ElectricalCTASection';

const Electrical = () => {
  const pageStyles = {
    fontFamily: 'Roboto, sans-serif'
  };

  return (
    <>
      <Head>
        <title>Professional Electrical Services Dubai | Certified Electrician | Alpamayo</title>
        <meta 
          name="description" 
          content="Certified electrician services in Dubai. Residential, commercial electrical work, wiring, repairs, lighting solutions, and emergency electrical services." 
        />
        <meta name="keywords" content="electrical services Dubai, electrician Dubai, electrical repairs, wiring installation, lighting solutions, emergency electrician, DEWA certified, Alpamayo Technical Services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://thealpamayo.com/services/electrical" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Professional Electrical Services Dubai | Certified Electrician | Alpamayo" />
        <meta property="og:description" content="Certified electrician services in Dubai. Residential, commercial electrical work, wiring, repairs, and emergency electrical services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thealpamayo.com/services/electrical" />
      </Head>

      <div style={pageStyles}>
        <ElectricalHeroSection />
        <ElectricalServices />
        <ElectricalSolutions />
        <SafetyCertification />
        <ElectricalCTASection />
      </div>
    </>
  );
};

export default Electrical;
