import React from 'react';
import Head from 'next/head';
import ACHeroSection from '@/components/services/AC/ACHeroSection';
import ACServices from '@/components/services/AC/ACServices';
import ACSystemsBrands from '@/components/services/AC/ACSystemsBrands';
import MaintenancePlans from '@/components/services/AC/MaintenancePlans';
import ACCTASection from '@/components/services/AC/ACCTASection';

const AirConditioning = () => {
  const pageStyles = {
    fontFamily: 'Roboto, sans-serif'
  };

  return (
    <>
      <Head>
        <title>Air Conditioning Services Dubai | AC Installation & Repair | Alpamayo</title>
        <meta 
          name="description" 
          content="Professional air conditioning services in Dubai. AC installation, maintenance, repair, gas charging, and emergency AC services for all brands and systems." 
        />
        <meta name="keywords" content="air conditioning Dubai, AC installation, AC repair, AC maintenance, AC gas charging, emergency AC service, split AC, central AC, Alpamayo Technical Services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://thealpamayo.com/services/air-conditioning" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Air Conditioning Services Dubai | AC Installation & Repair | Alpamayo" />
        <meta property="og:description" content="Professional air conditioning services in Dubai. AC installation, maintenance, repair, and emergency AC services for all brands." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thealpamayo.com/services/air-conditioning" />
      </Head>

      <div style={pageStyles}>
        <ACHeroSection />
        <ACServices />
        <ACSystemsBrands />
        <MaintenancePlans />
        <ACCTASection />
      </div>
    </>
  );
};

export default AirConditioning;
