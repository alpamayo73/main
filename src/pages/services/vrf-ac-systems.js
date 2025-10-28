import React from 'react';
import Head from 'next/head';
import VRFHeroSection from '@/components/services/VRF/VRFHeroSection';
import TechnicalServices from '@/components/services/VRF/TechnicalServices';
import SystemAdvantages from '@/components/services/VRF/SystemAdvantages';
import TechnicalExpertise from '@/components/services/VRF/TechnicalExpertise';
import VRFCTASection from '@/components/services/VRF/VRFCTASection';

const VRFACSystems = () => {
  const pageStyles = {
    fontFamily: 'Roboto, sans-serif'
  };

  return (
    <>
      <Head>
        <title>VRF AC Systems Technical Services Dubai | Alpamayo Technical Services</title>
        <meta 
          name="description" 
          content="Professional VRF AC System technical services in Dubai. Expert installation, maintenance & repair for commercial VRF systems. Certified VRF specialists." 
        />
        <meta name="keywords" content="VRF AC systems Dubai, VRF installation, VRF maintenance, VRF repair, commercial HVAC, technical services Dubai, Alpamayo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://thealpamayo.com/services/vrf-ac-systems" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="VRF AC Systems Technical Services Dubai | Alpamayo Technical Services" />
        <meta property="og:description" content="Professional VRF AC System technical services in Dubai. Expert installation, maintenance & repair for commercial VRF systems." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thealpamayo.com/services/vrf-ac-systems" />
      </Head>

      <div style={pageStyles}>
        <VRFHeroSection />
        <TechnicalServices />
        <SystemAdvantages />
        <TechnicalExpertise />
        <VRFCTASection />
      </div>
    </>
  );
};

export default VRFACSystems;
