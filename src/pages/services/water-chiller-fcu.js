import React from 'react';
import Head from 'next/head';
import WaterChillerHeroSection from '@/components/services/WaterChiller/WaterChillerHeroSection';
import TechnicalServices from '@/components/services/WaterChiller/TechnicalServices';
import SystemApplications from '@/components/services/WaterChiller/SystemApplications';
import TechnicalExpertise from '@/components/services/WaterChiller/TechnicalExpertise';
import WaterChillerCTASection from '@/components/services/WaterChiller/WaterChillerCTASection';

const WaterChillerFCU = () => {
  const pageStyles = {
    fontFamily: 'Roboto, sans-serif'
  };

  return (
    <>
      <Head>
        <title>Water Chiller FCU Systems Technical Services Dubai | Alpamayo</title>
        <meta 
          name="description" 
          content="Expert Water Chiller & FCU technical services in Dubai. Professional installation, maintenance & repair for commercial and industrial cooling systems. Certified engineers." 
        />
        <meta name="keywords" content="water chiller Dubai, FCU services, chiller maintenance, commercial HVAC, industrial cooling, technical services Dubai, Alpamayo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://thealpamayo.com/services/water-chiller-fcu" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Water Chiller FCU Systems Technical Services Dubai | Alpamayo" />
        <meta property="og:description" content="Expert Water Chiller & FCU technical services in Dubai. Professional installation, maintenance & repair for commercial cooling systems." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thealpamayo.com/services/water-chiller-fcu" />
      </Head>

      <div style={pageStyles}>
        <WaterChillerHeroSection />
        <TechnicalServices />
        <SystemApplications />
        <TechnicalExpertise />
        <WaterChillerCTASection />
      </div>
    </>
  );
};

export default WaterChillerFCU;
