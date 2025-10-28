import React from 'react';

const TechnicalExpertise = () => {
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
    expertiseGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem'
    },
    expertiseCard: {
      padding: '2rem',
      backgroundColor: '#f8f9fa',
      borderLeft: '4px solid #577D8E',
      transition: 'all 0.3s ease'
    },
    expertiseTitle: {
      fontSize: '1.25rem',
      fontWeight: 700,
      color: '#1C2734',
      marginBottom: '1rem',
      textTransform: 'uppercase'
    },
    expertiseList: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    expertiseItem: {
      padding: '0.5rem 0',
      color: '#577D8E',
      display: 'flex',
      alignItems: 'flex-start',
      fontSize: '0.95rem'
    },
    expertiseBullet: {
      width: '6px',
      height: '6px',
      backgroundColor: '#577D8E',
      borderRadius: '50%',
      marginRight: '0.75rem',
      marginTop: '0.5rem',
      flexShrink: 0
    }
  };

  const expertiseAreas = [
    {
      title: "VRF SYSTEM DESIGN",
      services: [
        "Heat load calculation and system sizing",
        "Refrigerant piping design and layout",
        "Electrical system design and load calculation",
        "Control system architecture planning",
        "Building management system integration"
      ]
    },
    {
      title: "INSTALLATION & COMMISSIONING",
      services: [
        "Outdoor unit placement and vibration control",
        "Refrigerant piping installation and pressure testing",
        "Indoor unit installation and air distribution",
        "System vacuum dehydration and charging",
        "Commissioning and performance verification"
      ]
    },
    {
      title: "TROUBLESHOOTING & REPAIR",
      services: [
        "Communication error diagnosis and resolution",
        "Refrigerant leak detection and repair",
        "Compressor and inverter module repairs",
        "PCB and control board troubleshooting",
        "System performance optimization"
      ]
    }
  ];

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>TECHNICAL EXPERTISE</h2>
        </div>
        
        <div style={styles.expertiseGrid}>
          {expertiseAreas.map((area, index) => (
            <div 
              key={index}
              style={styles.expertiseCard}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#FFFFFF';
                e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#f8f9fa';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <h3 style={styles.expertiseTitle}>{area.title}</h3>
              <ul style={styles.expertiseList}>
                {area.services.map((service, serviceIndex) => (
                  <li key={serviceIndex} style={styles.expertiseItem}>
                    <div style={styles.expertiseBullet}></div>
                    {service}
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

export default TechnicalExpertise;
