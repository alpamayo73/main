import React from 'react';

const TechnicalServices = () => {
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
      alignItems: 'center',
      fontSize: '0.95rem'
    },
    technicalBullet: {
      width: '6px',
      height: '6px',
      backgroundColor: '#577D8E',
      borderRadius: '50%',
      marginRight: '0.75rem',
      flexShrink: 0
    }
  };

  const services = [
    {
      title: "CHILLER INSTALLATION",
      description: "Professional installation of water-cooled chiller systems for large commercial and industrial facilities.",
      icon: "🏢",
      technicalServices: [
        "Centrifugal and screw chiller installation",
        "Cooling tower and pump integration",
        "Pipework and hydraulic system setup",
        "Electrical control panel installation",
        "System commissioning and performance testing"
      ]
    },
    {
      title: "FCU INSTALLATION & BALANCING",
      description: "Expert installation and air balancing of fan coil units for optimal air distribution.",
      icon: "🌬️",
      technicalServices: [
        "Ceiling, floor, and cassette FCU installation",
        "Ductwork design and installation",
        "Air balancing and flow measurement",
        "Condensate drainage system setup",
        "Control system integration"
      ]
    },
    {
      title: "PREVENTIVE MAINTENANCE",
      description: "Scheduled maintenance programs to ensure system reliability and energy efficiency.",
      icon: "🔧",
      technicalServices: [
        "Chiller tube cleaning and inspection",
        "Refrigerant level and pressure checks",
        "Electrical component testing",
        "Water treatment chemical analysis",
        "Performance optimization tuning"
      ]
    },
    {
      title: "EMERGENCY REPAIR SERVICES",
      description: "24/7 technical support and repair services for chiller and FCU system failures.",
      icon: "⚡",
      technicalServices: [
        "Compressor failure diagnosis and repair",
        "Leak detection and refrigerant recovery",
        "Control system troubleshooting",
        "Motor and fan replacement",
        "Emergency component replacement"
      ]
    }
  ];

  return (
    <section style={styles.section} id="technical-services">
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>OUR TECHNICAL SERVICES</h2>
          <p style={styles.subtitle}>
            Comprehensive water chiller and FCU technical solutions for commercial buildings, hotels, hospitals, and industrial facilities in Dubai
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

export default TechnicalServices;
