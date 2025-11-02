import React from 'react';
import Head from 'next/head';
import CarpentryHeroSection from '@/components/services/Carpentry/CarpentryHeroSection';
import CarpentryServices from '@/components/services/Carpentry/CarpentryServices';
import WoodMaterials from '@/components/services/Carpentry/WoodMaterials';
import CraftsmanshipFeatures from '@/components/services/Carpentry/CraftsmanshipFeatures';
import CarpentryCTASection from '@/components/services/Carpentry/CarpentryCTASection';

const Carpentry = () => {
  const pageStyles = {
    fontFamily: 'Roboto, sans-serif'
  };

  return (
    <>
      <Head>
        <title>Professional Carpentry Services Dubai | Custom Furniture & Woodwork | Alpamayo</title>
        <meta 
          name="description" 
          content="Expert carpentry services in Dubai. Custom furniture, kitchen cabinets, wardrobes, wooden doors, and interior woodwork with premium materials and craftsmanship." 
        />
        <meta name="keywords" content="carpentry services Dubai, custom furniture, kitchen cabinets, wardrobe solutions, wooden doors, woodworking, carpentry, Alpamayo Technical Services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://thealpamayo.com/services/carpentry" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Professional Carpentry Services Dubai | Custom Furniture & Woodwork | Alpamayo" />
        <meta property="og:description" content="Expert carpentry services in Dubai. Custom furniture, kitchen cabinets, wardrobes, and interior woodwork with premium materials." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thealpamayo.com/services/carpentry" />
      </Head>

      <div style={pageStyles}>
        <CarpentryHeroSection />
        <CarpentryServices />
        <WoodMaterials />
        <CraftsmanshipFeatures />
        <CarpentryCTASection />
      </div>
    </>
  );
};

export default Carpentry;
