import React from 'react';

const SystemAdvantages = () => {
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
    advantagesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '2rem'
    },
    advantageCard: {
      textAlign: 'center',
      padding: '2.5rem 2rem',
      backgroundColor: '#FFFFFF',
      transition: 'all 0.3s ease',
      border: '1px solid #e9ecef'
    },
    advantageIcon: {
      fontSize: '3rem',
      marginBottom: '1.5rem',
      display: 'block'
    },
    advantageTitle: {
      fontSize: '1.25rem',
      fontWeight: 700,
      color: '#1C2734',
      marginBottom: '1rem',
      textTransform: 'uppercase'
    },
    advantageDescription: {
      color: '#666',
      lineHeight: 1.6,
      fontSize: '0.95rem'
    }
  };

  const advantages = [
    {
      icon: "⚡",
      title: "ENERGY EFFICIENCY",
      description: "VRF systems consume up to 30% less energy compared to traditional HVAC systems through advanced inverter technology."
    },
    {
      icon: "🎛️",
      title: "ZONING PRECISION",
      description: "Individual temperature control for each zone with simultaneous heating and cooling capabilities throughout the building."
    },
    {
      icon: "🔇",
      title: "QUIET OPERATION",
      description: "Designed for minimal noise pollution with sound levels as low as 19dB, ideal for luxury applications."
    },
    {
      icon: "📈",
      title: "SCALABILITY",
      description: "Modular design allows for easy expansion and adaptation to building modifications or additional spaces."
    },
    {
      icon: "🔄",
      title: "HEAT RECOVERY",
      description: "Advanced heat recovery technology transfers waste heat from cooling zones to heating zones, maximizing efficiency."
    },
    {
      icon: "🏢",
      title: "SPACE OPTIMIZATION",
      description: "Compact outdoor units and flexible piping allow for installation in space-constrained urban environments."
    }
  ];

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>VRF SYSTEM ADVANTAGES</h2>
        </div>
        
        <div style={styles.advantagesGrid}>
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              style={styles.advantageCard}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={styles.advantageIcon}>{advantage.icon}</div>
              <h3 style={styles.advantageTitle}>{advantage.title}</h3>
              <p style={styles.advantageDescription}>{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemAdvantages;
