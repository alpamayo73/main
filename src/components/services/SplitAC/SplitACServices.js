import React from 'react';

const SplitACServices = () => {
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
      maxWidth: '600px',
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
    featureList: {
      listStyle: 'none',
      padding: 0,
      margin: '1rem 0'
    },
    featureItem: {
      padding: '0.5rem 0',
      color: '#577D8E',
      display: 'flex',
      alignItems: 'center'
    },
    featureBullet: {
      width: '6px',
      height: '6px',
      backgroundColor: '#577D8E',
      borderRadius: '50%',
      marginRight: '0.75rem'
    }
  };

  const services = [
    {
      title: "Split AC Installation",
      description: "Professional installation of split air conditioning systems for homes, offices, and commercial spaces in Dubai.",
      icon: "🏗️",
      features: [
        "Wall-mounted and ceiling cassette units",
        "Professional mounting and bracket installation",
        "Copper piping and electrical connections",
        "Vacuum testing and gas charging"
      ]
    },
    {
      title: "AC Maintenance Services",
      description: "Regular maintenance to ensure optimal cooling performance and extend your AC's lifespan.",
      icon: "🔧",
      features: [
        "Comprehensive cleaning of filters and coils",
        "Refrigerant pressure checks",
        "Electrical component inspection",
        "Drain line cleaning and maintenance"
      ]
    },
    {
      title: "AC Repair Services",
      description: "24/7 emergency repair services for all split AC issues and breakdowns.",
      icon: "⚡",
      features: [
        "Cooling issues and temperature problems",
        "Water leakage and drainage problems",
        "Electrical faults and compressor issues",
        "Remote control and sensor repairs"
      ]
    },
    {
      title: "AC Gas Charging",
      description: "Professional refrigerant gas charging and top-up services for optimal cooling performance.",
      icon: "❄️",
      features: [
        "R22, R410A, R32 refrigerant services",
        "Gas leak detection and repair",
        "Vacuum testing and dehydration",
        "Environmentally compliant disposal"
      ]
    }
  ];

  return (
    <section style={styles.section} id="our-services">
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>OUR SPLIT AC SERVICES</h2>
          <p style={styles.subtitle}>
            Comprehensive split air conditioner solutions for residential and commercial properties in Dubai's climate
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
              <ul style={styles.featureList}>
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} style={styles.featureItem}>
                    <div style={styles.featureBullet}></div>
                    {feature}
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

export default SplitACServices;
