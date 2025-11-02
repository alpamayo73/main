import React from 'react';

const InstallationServices = () => {
  const styles = {
    section: {
      padding: '5rem 0',
      backgroundColor: '#FFFFFF'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem'
    },
    header: {
      textAlign: 'center',
      marginBottom: '4rem'
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#1C2734',
      marginBottom: '1rem',
      textTransform: 'uppercase'
    },
    subtitle: {
      fontSize: '1.125rem',
      color: '#666',
      maxWidth: '700px',
      margin: '0 auto',
      lineHeight: 1.6
    },
    servicesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '2rem',
      marginTop: '3rem'
    },
    serviceCard: {
      backgroundColor: '#f8f9fa',
      padding: '2.5rem',
      border: '1px solid #e9ecef',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden'
    },
    serviceIcon: {
      fontSize: '3rem',
      marginBottom: '1.5rem',
      display: 'block'
    },
    serviceTitle: {
      fontSize: '1.5rem',
      fontWeight: 700,
      color: '#1C2734',
      marginBottom: '1rem',
      textTransform: 'uppercase'
    },
    serviceDescription: {
      color: '#666',
      lineHeight: 1.6,
      marginBottom: '1.5rem'
    },
    technicalList: {
      listStyle: 'none',
      padding: 0,
      margin: '1rem 0'
    },
    technicalItem: {
      padding: '0.5rem 0',
      color: '#577D8E',
      display: 'flex',
      alignItems: 'flex-start',
      fontSize: '0.95rem'
    },
    technicalBullet: {
      width: '6px',
      height: '6px',
      backgroundColor: '#577D8E',
      borderRadius: '50%',
      marginRight: '0.75rem',
      marginTop: '0.5rem',
      flexShrink: 0
    }
  };

  const services = [
    {
      title: "FLOOR TILE INSTALLATION",
      description: "Professional floor tile installation for residential and commercial spaces with precision leveling and durable results.",
      icon: "🏠",
      technicalServices: [
        "Subfloor preparation and leveling",
        "Pattern design and layout planning",
        "Precision cutting and fitting",
        "Grouting and sealing services",
        "Final polishing and protection"
      ]
    },
    {
      title: "WALL TILE INSTALLATION",
      description: "Expert wall tiling for kitchens, bathrooms, and feature walls with perfect alignment and waterproofing.",
      icon: "🧱",
      technicalServices: [
        "Wall surface preparation",
        "Waterproof membrane installation",
        "Pattern matching and alignment",
        "Precise cutting around fixtures",
        "Grout color selection and application"
      ]
    },
    {
      title: "OUTDOOR TILE INSTALLATION",
      description: "Durable outdoor tile installation for patios, pool decks, and exterior spaces with weather-resistant materials.",
      icon: "🌳",
      technicalServices: [
        "Weatherproof substrate preparation",
        "Slope calculation for drainage",
        "Frost-resistant tile installation",
        "Non-slip surface treatment",
        "Expansion joint installation"
      ]
    },
    {
      title: "MOSAIC & PATTERN TILING",
      description: "Artistic mosaic and complex pattern tiling for feature walls, backsplashes, and decorative elements.",
      icon: "🎨",
      technicalServices: [
        "Custom pattern design",
        "Mosaic sheet installation",
        "Intricate cutwork and detailing",
        "Color coordination and blending",
        "Sealing and protection"
      ]
    }
  ];

  return (
    <section style={styles.section} id="installation-services">
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>OUR TILE INSTALLATION SERVICES</h2>
          <p style={styles.subtitle}>
            Comprehensive tile installation solutions for residential and commercial properties in Dubai, using premium materials and expert techniques
          </p>
        </div>
        
        <div style={styles.servicesGrid}>
          {services.map((service, index) => (
            <div 
              key={index}
              style={styles.serviceCard}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#FFFFFF';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#f8f9fa';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span style={styles.serviceIcon}>{service.icon}</span>
              <h3 style={styles.serviceTitle}>{service.title}</h3>
              <p style={styles.serviceDescription}>{service.description}</p>
              <ul style={styles.technicalList}>
                {service.technicalServices.map((techService, techIndex) => (
                  <li key={techIndex} style={styles.technicalItem}>
                    <div style={styles.technicalBullet}></div>
                    {techService}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstallationServices;
