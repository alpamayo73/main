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
      title: "VRF SYSTEM INSTALLATION",
      description: "Professional design and installation of complete VRF systems for commercial and large residential properties.",
      icon: "🏗️",
      technicalServices: [
        "System design and load calculation",
        "Outdoor unit placement and mounting",
        "Refrigerant piping network installation",
        "Indoor unit installation and commissioning",
        "Control system integration and programming"
      ]
    },
    {
      title: "VRF MAINTENANCE SERVICES",
      description: "Comprehensive preventive maintenance programs to ensure optimal system performance and longevity.",
      icon: "🔧",
      technicalServices: [
        "Quarterly system performance checks",
        "Refrigerant charge verification",
        "Electrical component testing",
        "Control system diagnostics",
        "Heat exchanger cleaning"
      ]
    },
    {
      title: "VRF REPAIR SERVICES",
      description: "24/7 emergency repair services for VRF system failures and performance issues.",
      icon: "⚡",
      technicalServices: [
        "Compressor failure diagnosis and repair",
        "Refrigerant leak detection and repair",
        "Electronic expansion valve replacement",
        "PCB board troubleshooting",
        "Communication system repairs"
      ]
    },
    {
      title: "VRF SYSTEM UPGRADES",
      description: "System optimization and technology upgrades for improved efficiency and performance.",
      icon: "🔄",
      technicalServices: [
        "System capacity expansion",
        "Control system modernization",
        "Energy efficiency optimization",
        "Smart building integration",
        "Remote monitoring implementation"
      ]
    }
  ];

  return (
    <section style={styles.section} id="technical-services">
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>OUR VRF TECHNICAL SERVICES</h2>
          <p style={styles.subtitle}>
            Comprehensive Variable Refrigerant Flow system solutions for commercial buildings, hotels, and large residential complexes in Dubai
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
