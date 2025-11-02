import React from 'react';

const ACSystemsBrands = () => {
  const styles = {
    section: {
      padding: '5rem 0',
      backgroundColor: '#f8f9fa'
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
    contentGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '3rem',
      alignItems: 'start'
    },
    systemsSection: {
      marginBottom: '2rem'
    },
    brandsSection: {
      marginBottom: '2rem'
    },
    sectionTitle: {
      fontSize: '1.5rem',
      fontWeight: 700,
      color: '#1C2734',
      marginBottom: '1.5rem',
      textTransform: 'uppercase',
      borderBottom: '3px solid #577D8E',
      paddingBottom: '0.5rem'
    },
    systemsList: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    systemItem: {
      padding: '1rem',
      marginBottom: '0.8rem',
      backgroundColor: '#FFFFFF',
      borderLeft: '4px solid #577D8E',
      transition: 'all 0.3s ease',
      borderRadius: '4px'
    },
    brandsList: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    brandItem: {
      padding: '1rem',
      marginBottom: '0.8rem',
      backgroundColor: '#FFFFFF',
      borderLeft: '4px solid #1C2734',
      transition: 'all 0.3s ease',
      borderRadius: '4px'
    },
    itemTitle: {
      fontSize: '1.1rem',
      fontWeight: 600,
      color: '#1C2734',
      marginBottom: '0.5rem'
    },
    itemDescription: {
      color: '#666',
      fontSize: '0.9rem',
      lineHeight: 1.5
    },
    featuresList: {
      listStyle: 'none',
      padding: 0,
      margin: '0.5rem 0 0 0'
    },
    feature: {
      padding: '0.2rem 0',
      color: '#577D8E',
      fontSize: '0.8rem',
      display: 'flex',
      alignItems: 'center'
    },
    featureIcon: {
      marginRight: '0.5rem',
      fontSize: '0.7rem'
    }
  };

  const systems = [
    {
      name: "SPLIT AC SYSTEMS",
      description: "Individual units perfect for single rooms and small spaces.",
      features: ["✓ Energy efficient", "✓ Quiet operation", "✓ Easy installation", "✓ Cost-effective"]
    },
    {
      name: "CENTRAL AC SYSTEMS",
      description: "Whole-house cooling with centralized ducted systems.",
      features: ["✓ Whole house cooling", "✓ Consistent temperature", "✓ Air filtration", "✓ Zoning capability"]
    },
    {
      name: "WINDOW AC UNITS",
      description: "Compact all-in-one units for quick installation.",
      features: ["✓ Affordable option", "✓ Easy maintenance", "✓ Space saving", "✓ Quick installation"]
    },
    {
      name: "VRF/VRV SYSTEMS",
      description: "Advanced variable refrigerant flow systems for large spaces.",
      features: ["✓ Simultaneous heating/cooling", "✓ Energy saving", "✓ Zonal control", "✓ Scalable"]
    }
  ];

  const brands = [
    {
      name: "DAIKIN",
      description: "World-leading AC manufacturer with innovative technology.",
      features: ["✓ Inverter technology", "✓ Energy efficient", "✓ Quiet operation", "✓ Reliable performance"]
    },
    {
      name: "CARRIER",
      description: "Premium AC brand with advanced climate control solutions.",
      features: ["✓ Greenspeed intelligence", "✓ Superior comfort", "✓ Durability", "✓ Smart controls"]
    },
    {
      name: "LG",
      description: "Innovative AC systems with smart features and design.",
      features: ["✓ Dual inverter technology", "✓ Smart thinQ", "✓ Stylish design", "✓ Wi-Fi control"]
    },
    {
      name: "MITSUBISHI ELECTRIC",
      description: "High-performance AC systems with precision engineering.",
      features: ["✓ Precision engineering", "✓ Energy star rated", "✓ Quiet operation", "✓ Advanced filtration"]
    }
  ];

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>AC SYSTEMS & BRANDS</h2>
          <p style={styles.subtitle}>
            We work with all major AC brands and systems, providing expert installation and service for every type of air conditioning requirement
          </p>
        </div>
        
        <div style={styles.contentGrid}>
          <div style={styles.systemsSection}>
            <h3 style={styles.sectionTitle}>AC SYSTEM TYPES</h3>
            <ul style={styles.systemsList}>
              {systems.map((system, index) => (
                <li 
                  key={index}
                  style={styles.systemItem}
                  onMouseOver={(e) => {
                    e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <h4 style={styles.itemTitle}>{system.name}</h4>
                  <p style={styles.itemDescription}>{system.description}</p>
                  <ul style={styles.featuresList}>
                    {system.features.map((feature, featureIndex) => (
                      <li key={featureIndex} style={styles.feature}>
                        <span style={styles.featureIcon}>✓</span>
                        {feature.replace('✓', '')}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          
          <div style={styles.brandsSection}>
            <h3 style={styles.sectionTitle}>TRUSTED AC BRANDS</h3>
            <ul style={styles.brandsList}>
              {brands.map((brand, index) => (
                <li 
                  key={index}
                  style={styles.brandItem}
                  onMouseOver={(e) => {
                    e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <h4 style={styles.itemTitle}>{brand.name}</h4>
                  <p style={styles.itemDescription}>{brand.description}</p>
                  <ul style={styles.featuresList}>
                    {brand.features.map((feature, featureIndex) => (
                      <li key={featureIndex} style={styles.feature}>
                        <span style={styles.featureIcon}>✓</span>
                        {feature.replace('✓', '')}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ACSystemsBrands;
