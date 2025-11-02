import React from 'react';
import Head from 'next/head';
import HandymanHeroSection from '@/components/services/Handyman/HandymanHeroSection';
import HandymanServices from '@/components/services/Handyman/HandymanServices';
import MovingHeavyWork from '@/components/services/Handyman/MovingHeavyWork';
import EquipmentSafety from '@/components/services/Handyman/EquipmentSafety';
import HandymanCTASection from '@/components/services/Handyman/HandymanCTASection';

const Handyman = () => {
  const pageStyles = {
    fontFamily: 'Roboto, sans-serif'
  };

  return (
    <>
      <Head>
        <title>Handyman Services Dubai | Moving & Furniture Help | Alpamayo</title>
        <meta 
          name="description" 
          content="Professional handyman services in Dubai. Home moving, furniture assembly, heavy lifting, and complete home help services. Reliable and affordable assistance." 
        />
        <meta name="keywords" content="handyman Dubai, moving services, furniture assembly, heavy lifting, home help, furniture moving, Alpamayo Technical Services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://thealpamayo.com/services/handyman" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Handyman Services Dubai | Moving & Furniture Help | Alpamayo" />
        <meta property="og:description" content="Professional handyman services in Dubai. Home moving, furniture assembly, heavy lifting, and complete home help services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thealpamayo.com/services/handyman" />
      </Head>

      <div style={pageStyles}>
        <HandymanHeroSection />
        <HandymanServices />
        <MovingHeavyWork />
        <EquipmentSafety />
        <HandymanCTASection />
      </div>
    </>
  );
};

export default Handyman;
