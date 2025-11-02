import React from 'react';

const ElectricalServices = () => {
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
      title: "RESIDENTIAL ELECTRICAL",
      description: "Complete electrical solutions for homes, apartments, and villas in Dubai.",
      icon: "🏠",
      technicalServices: [
        "Electrical wiring and rewiring",
        "Socket and switch installation",
        "Lighting fixture installation",
        "Circuit breaker panel upgrades",
        "Home automation integration"
      ]
    },
    {
      title: "COMMERCIAL ELECTRICAL",
      description: "Professional electrical services for offices, retail spaces, and commercial buildings.",
      icon: "🏢",
      technicalServices: [
        "Commercial lighting systems",
        "Power distribution setup",
        "Data and network cabling",
        "Emergency lighting installation",
        "Energy efficiency solutions"
      ]
    },
    {
      title: "ELECTRICAL REPAIRS",
      description: "24/7 emergency electrical repairs and troubleshooting services.",
      icon: "🔧",
      technicalServices: [
        "Circuit breaker troubleshooting",
        "Power outage diagnosis",
        "Faulty wiring repairs",
        "Socket and switch replacements",
        "Electrical safety inspections"
      ]
    },
    {
      title: "LIGHTING SOLUTIONS",
      description: "Professional lighting installation and design for indoor and outdoor spaces.",
      icon: "💡",
      technicalServices: [
        "LED lighting installation",
        "Outdoor landscape lighting",
        "Smart lighting systems",
        "Dimmer switch installation",
        "Energy-efficient lighting upgrades"
      ]
    },
    {
      title: "ELECTRICAL INSTALLATIONS",
      description: "New electrical installations for construction and renovation projects.",
      icon: "⚡",
      technicalServices: [
        "New construction wiring",
        "Electrical panel installation",
        "Generator installation",
        "EV charging station setup",
        "Home theater wiring"
      ]
    },
    {
      title: "SAFETY & MAINTENANCE",
      description: "Electrical safety inspections and preventive maintenance programs.",
      icon: "🛡️",
      technicalServices: [
        "Electrical safety audits",
        "Thermal imaging inspections",
        "Preventive maintenance",
        "Grounding system checks",
        "Compliance certification"
      ]
    }
  ];

  return (
    <section style={styles.section} id="electrical-services">
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>OUR ELECTRICAL SERVICES</h2>
          <p style={styles.subtitle}>
            Comprehensive electrical solutions for residential, commercial, and industrial properties in Dubai, delivered by certified electricians
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

export default ElectricalServices;
