import React from 'react';

const CarpentryServices = () => {
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
      title: "CUSTOM FURNITURE",
      description: "Handcrafted custom furniture pieces tailored to your space and style preferences.",
      icon: "🛋️",
      technicalServices: [
        "Custom design and measurement",
        "Material selection consultation",
        "Precision cutting and joinery",
        "Professional finishing and polishing",
        "Installation and placement"
      ]
    },
    {
      title: "KITCHEN CABINETRY",
      description: "Custom kitchen cabinets and storage solutions with optimal functionality.",
      icon: "🍽️",
      technicalServices: [
        "Kitchen layout planning",
        "Cabinet design and fabrication",
        "Hardware and accessory installation",
        "Countertop integration",
        "Final finishing and protection"
      ]
    },
    {
      title: "WARDROBE SOLUTIONS",
      description: "Built-in wardrobes and closet systems for organized storage spaces.",
      icon: "👔",
      technicalServices: [
        "Space optimization design",
        "Custom shelving and compartments",
        "Drawer and sliding systems",
        "Mirror and lighting integration",
        "Finishing and hardware"
      ]
    },
    {
      title: "WOODEN DOORS & WINDOWS",
      description: "Custom wooden doors, windows, and frames with precision craftsmanship.",
      icon: "🚪",
      technicalServices: [
        "Custom door design and fabrication",
        "Window frame construction",
        "Hardware fitting and installation",
        "Weather sealing and insulation",
        "Staining and varnishing"
      ]
    },
    {
      title: "WOODEN CEILINGS & PANELING",
      description: "Elegant wooden ceilings, wall paneling, and decorative woodwork.",
      icon: "🌳",
      technicalServices: [
        "Wooden ceiling installation",
        "Wall paneling and cladding",
        "Decorative moldings and trim",
        "Feature wall construction",
        "Finishing and protection"
      ]
    },
    {
      title: "FURNITURE REPAIR & RESTORATION",
      description: "Expert furniture repair, restoration, and refurbishment services.",
      icon: "🔧",
      technicalServices: [
        "Damage assessment and repair",
        "Wood restoration and refinishing",
        "Structural reinforcement",
        "Hardware replacement",
        "Antique furniture preservation"
      ]
    }
  ];

  return (
    <section style={styles.section} id="carpentry-services">
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>OUR CARPENTRY SERVICES</h2>
          <p style={styles.subtitle}>
            Comprehensive carpentry solutions for residential and commercial properties in Dubai, combining traditional craftsmanship with modern techniques
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

export default CarpentryServices;
