import React from 'react';
import Head from 'next/head';
import SplitACHeroSection from '@/components/services/SplitAC/SplitACHeroSection';
import SplitACServices from '@/components/services/SplitAC/SplitACServices';
import WhyChooseSplitAC from '@/components/services/SplitAC/WhyChooseSplitAC';
import BrandsWeService from '@/components/services/SplitAC/BrandsWeService';
import SplitACCTASection from '@/components/services/SplitAC/SplitACCTASection';

const SplitACSystems = () => {
  const pageStyles = {
    fontFamily: 'Roboto, sans-serif'
  };

  return (
    <>
      <Head>
        <title>Split AC Systems Services Dubai | Alpamayo Technical Services</title>
        <meta 
          name="description" 
          content="Professional Split AC installation, maintenance & repair services in Dubai. Expert technicians for all major brands. 24/7 emergency AC services. Contact Alpamayo." 
        />
        <meta name="keywords" content="split AC Dubai, AC installation, AC maintenance, AC repair, air conditioner services Dubai, Alpamayo Technical Services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://thealpamayo.com/services/split-ac-systems" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Split AC Systems Services Dubai | Alpamayo Technical Services" />
        <meta property="og:description" content="Professional Split AC installation, maintenance & repair services in Dubai. Expert technicians for all major brands." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thealpamayo.com/services/split-ac-systems" />
      </Head>

      <div style={pageStyles}>
        <SplitACHeroSection />
        <SplitACServices />
        <WhyChooseSplitAC />
        <BrandsWeService />
        <SplitACCTASection />
      </div>
    </>
  );
};

export default SplitACSystems;
