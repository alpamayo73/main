import React from 'react';
import Head from 'next/head';
import TilesHeroSection from '@/components/services/Tiles/TilesHeroSection';
import InstallationServices from '@/components/services/Tiles/InstallationServices';
import TileMaterials from '@/components/services/Tiles/TileMaterials';

import TilesCTASection from '@/components/services/Tiles/TilesCTASection';

const TilesInstallation = () => {
  const pageStyles = {
    fontFamily: 'Roboto, sans-serif'
  };

  return (
    <>
      <Head>
        <title>Professional Tiles Installation Services Dubai | Alpamayo Technical Services</title>
        <meta 
          name="description" 
          content="Expert tile installation services in Dubai for floors, walls, and outdoor spaces. Premium materials, precision craftsmanship, and professional finishes." 
        />
        <meta name="keywords" content="tile installation Dubai, floor tiling, wall tiling, outdoor tiles, bathroom tiles, kitchen tiles, Alpamayo Technical Services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://thealpamayo.com/services/tiles-installation" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Professional Tiles Installation Services Dubai | Alpamayo Technical Services" />
        <meta property="og:description" content="Expert tile installation services in Dubai for floors, walls, and outdoor spaces. Premium materials and precision craftsmanship." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thealpamayo.com/services/tiles-installation" />
      </Head>

      <div style={pageStyles}>
        <TilesHeroSection />
        <InstallationServices />
        <TileMaterials />
        
        <TilesCTASection />
      </div>
    </>
  );
};

export default TilesInstallation;
