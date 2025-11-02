import React from 'react';
import Head from 'next/head';
import FalseCeilingHeroSection from '@/components/services/FalseCeiling/FalseCeilingHeroSection';
import InstallationServices from '@/components/services/FalseCeiling/InstallationServices';
import MaterialsTypes from '@/components/services/FalseCeiling/MaterialsTypes';
import ApplicationsBenefits from '@/components/services/FalseCeiling/ApplicationsBenefits';
import FalseCeilingCTASection from '@/components/services/FalseCeiling/FalseCeilingCTASection';

const FalseCeilingPartitions = () => {
  const pageStyles = {
    fontFamily: 'Roboto, sans-serif'
  };

  return (
    <>
      <Head>
        <title>False Ceiling & Partitions Installation Dubai | Alpamayo Technical Services</title>
        <meta 
          name="description" 
          content="Professional false ceiling and partition installation services in Dubai. Gypsum, PVC, wooden ceilings, glass partitions, and acoustic solutions for modern interiors." 
        />
        <meta name="keywords" content="false ceiling Dubai, partition installation, gypsum ceiling, glass partitions, office partitions, acoustic ceiling, Alpamayo Technical Services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://thealpamayo.com/services/false-ceiling-partitions" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="False Ceiling & Partitions Installation Dubai | Alpamayo Technical Services" />
        <meta property="og:description" content="Professional false ceiling and partition installation services in Dubai. Gypsum, PVC, wooden ceilings, and glass partitions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thealpamayo.com/services/false-ceiling-partitions" />
      </Head>

      <div style={pageStyles}>
        <FalseCeilingHeroSection />
        <InstallationServices />
        <MaterialsTypes />
        <ApplicationsBenefits />
        <FalseCeilingCTASection />
      </div>
    </>
  );
};

export default FalseCeilingPartitions;
