import React from 'react';

const ACServices = () => {
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
      title: "AC INSTALLATION",
      description: "Professional installation of new air conditioning systems for residential and commercial spaces.",
      icon: "🏗️",
      technicalServices: [
        "Site assessment and load calculation",
        "AC unit selection and sizing",
        "Professional mounting and installation",
        "Copper piping and electrical connections",
        "Testing and commissioning"
      ]
    },
    {
      title: "AC MAINTENANCE",
      description: "Regular maintenance services to ensure optimal performance and extend AC lifespan.",
      icon: "🔧",
      technicalServices: [
        "Comprehensive cleaning of filters and coils",
        "Refrigerant pressure checks",
        "Electrical component inspection",
        "Drain line cleaning and maintenance",
        "Performance optimization"
      ]
    },
    {
      title: "AC REPAIR SERVICES",
      description: "24/7 emergency repair services for all types of air conditioning issues.",
      icon: "⚡",
      technicalServices: [
        "Cooling issues and temperature problems",
        "Water leakage and drainage issues",
        "Electrical faults and compressor problems",
        "Gas leakage detection and repair",
        "Control board and sensor repairs"
      ]
    },
    {
      title: "AC GAS CHARGING",
      description: "Professional refrigerant gas charging and top-up services for optimal cooling.",
      icon: "❄️",
      technicalServices: [
        "R22, R410A, R32 refrigerant services",
        "Gas leak detection and repair",
        "Vacuum testing and dehydration",
        "Pressure testing and system checks",
        "Environmentally compliant disposal"
      ]
    },
    {
      title: "DUCT CLEANING",
      description: "Professional duct cleaning services for improved air quality and system efficiency.",
      icon: "💨",
      technicalServices: [
        "Duct system inspection and assessment",
        "Comprehensive duct cleaning",
        "Mold and bacteria removal",
        "Air quality improvement",
        "System efficiency optimization"
      ]
    },
    {
      title: "AC DISMANTLING & RELOCATION",
      description: "Safe AC unit dismantling and relocation services for renovation or moving.",
      icon: "🚚",
      technicalServices: [
        "Safe gas recovery and system shutdown",
        "Careful unit dismantling",
        "Professional transportation",
        "Reinstallation at new location",
        "Testing and recommissioning"
      ]
    }
  ];

  return (
    <section style={styles.section} id="ac-services">
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>OUR AC SERVICES</h2>
          <p style={styles.subtitle}>
            Comprehensive air conditioning solutions for residential and commercial properties in Dubai, ensuring optimal cooling performance and energy efficiency
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

export default ACServices;
