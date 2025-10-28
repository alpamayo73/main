import React from 'react';
import Head from 'next/head';
import VRFHeroSection from '@/components/services/VRF/VRFHeroSection';
import OurServices from '@/components/services/VRF/OurServices';
import WhyChooseUs from '@/components/services/VRF/WhyChooseUs';
import CTASection from '@/components/services/VRF/CTASection';

const VRFACSystems = () => {
  const pageStyles = {
    fontFamily: 'Roboto, sans-serif'
  };

  return (
    <>
      <Head>
        <title>VRF AC Systems Services Dubai | Alpamayo Technical Services</title>
        <meta 
          name="description" 
          content="Professional VRF AC System installation, maintenance & repair services in Dubai. Expert technicians, 24/7 emergency service for VRF systems. Contact Alpamayo Technical Services." 
        />
        <meta name="keywords" content="VRF AC systems Dubai, VRF installation, VRF maintenance, VRF repair, air conditioning services Dubai, Alpamayo Technical Services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://thealpamayo.com/services/vrf-ac-systems" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="VRF AC Systems Services Dubai | Alpamayo Technical Services" />
        <meta property="og:description" content="Professional VRF AC System installation, maintenance & repair services in Dubai. Expert technicians, 24/7 emergency service." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thealpamayo.com/services/vrf-ac-systems" />
      </Head>

      <div style={pageStyles}>
        <VRFHeroSection />
        <OurServices />
        <WhyChooseUs />
        <CTASection />
      </div>
    </>
  );
};

export default VRFACSystems;
