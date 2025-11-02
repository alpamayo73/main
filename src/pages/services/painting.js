import React from 'react';
import Head from 'next/head';
import PaintingHeroSection from '@/components/services/Painting/PaintingHeroSection';
import PaintingServices from '@/components/services/Painting/PaintingServices';
import PaintBrandsFinishes from '@/components/services/Painting/PaintBrandsFinishes';
import ColorConsultation from '@/components/services/Painting/ColorConsultation';
import PaintingCTASection from '@/components/services/Painting/PaintingCTASection';

const Painting = () => {
  const pageStyles = {
    fontFamily: 'Roboto, sans-serif'
  };

  return (
    <>
      <Head>
        <title>Professional Painting Services Dubai | Home Color Painting | Alpamayo</title>
        <meta 
          name="description" 
          content="Expert interior and exterior painting services in Dubai. Home color painting, commercial painting, color consultation with premium paint brands like Jotun, Berger, National Paints." 
        />
        <meta name="keywords" content="painting services Dubai, home painting, interior painting, exterior painting, color consultation, house painting, Jotun paints, Berger paints, Alpamayo Technical Services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://thealpamayo.com/services/painting" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Professional Painting Services Dubai | Home Color Painting | Alpamayo" />
        <meta property="og:description" content="Expert interior and exterior painting services in Dubai. Home color painting, commercial painting with premium paint brands." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thealpamayo.com/services/painting" />
      </Head>

      <div style={pageStyles}>
        <PaintingHeroSection />
        <PaintingServices />
        <PaintBrandsFinishes />
        <ColorConsultation />
        <PaintingCTASection />
      </div>
    </>
  );
};

export default Painting;
