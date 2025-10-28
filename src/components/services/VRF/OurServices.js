import React from 'react';

const OurServices = () => {
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
      fontWeight: 300,
      color: '#1C2734',
      marginBottom: '1rem'
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
      fontWeight: 500,
      color: '#1C2734',
      marginBottom: '1rem'
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
      title: "VRF System Installation",
      description: "Professional installation of complete VRF systems for commercial and residential properties in Dubai.",
      icon: "🏗️",
      features: [
        "Custom system design and planning",
        "Professional equipment installation",
        "Ductwork and piping installation",
        "System testing and commissioning"
      ]
    },
    {
      title: "VRF Maintenance Services",
      description: "Regular maintenance to ensure optimal performance and extend system lifespan.",
      icon: "🔧",
      features: [
        "Quarterly maintenance contracts",
        "Filter cleaning and replacement",
        "Refrigerant level checks",
        "Electrical component inspection"
      ]
    },
    {
      title: "VRF Repair Services",
      description: "24/7 emergency repair services for VRF system breakdowns and issues.",
      icon: "⚡",
      features: [
        "Emergency troubleshooting",
        "Component replacement",
        "Refrigerant leak detection",
        "Control system repairs"
      ]
    },
    {
      title: "VRF System Upgrades",
      description: "Upgrade your existing VRF system with latest technology and improved efficiency.",
      icon: "🔄",
      features: [
        "System performance optimization",
        "Control system upgrades",
        "Energy efficiency improvements",
        "Smart control integration"
      ]
    }
  ];

  return (
    <section style={styles.section} id="our-services">
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>Our VRF Services</h2>
          <p style={styles.subtitle}>
            Comprehensive VRF AC solutions tailored for Dubai's climate and your specific requirements
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

export default OurServices;
