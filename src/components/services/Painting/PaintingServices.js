import React from 'react';

const PaintingServices = () => {
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
      title: "INTERIOR PAINTING",
      description: "Complete interior painting services for homes, apartments, and offices with premium quality paints.",
      icon: "🏠",
      technicalServices: [
        "Wall surface preparation and repair",
        "Color consultation and selection",
        "Primer application for better adhesion",
        "Multiple coat application for durability",
        "Clean finish and touch-ups"
      ]
    },
    {
      title: "EXTERIOR PAINTING",
      description: "Weather-resistant exterior painting to protect and enhance your property's curb appeal.",
      icon: "🏡",
      technicalServices: [
        "Surface cleaning and power washing",
        "Crack and damage repair",
        "Weatherproof primer application",
        "UV-resistant paint application",
        "Protective sealant coating"
      ]
    },
    {
      title: "DECORATIVE PAINTING",
      description: "Creative painting techniques and decorative finishes for unique interior designs.",
      icon: "🎨",
      technicalServices: [
        "Feature wall creation and accent walls",
        "Textured paint and special effects",
        "Stenciling and pattern painting",
        "Color blocking and geometric designs",
        "Faux finishes and Venetian plaster"
      ]
    },
    {
      title: "COMMERCIAL PAINTING",
      description: "Professional painting services for offices, retail spaces, and commercial establishments.",
      icon: "🏢",
      technicalServices: [
        "Minimal disruption work planning",
        "Commercial-grade paint products",
        "After-hours painting options",
        "Durable finishes for high-traffic areas",
        "Brand color matching"
      ]
    },
    {
      title: "WOOD PAINTING & VARNISHING",
      description: "Expert wood surface painting, staining, and varnishing for doors, windows, and furniture.",
      icon: "🪵",
      technicalServices: [
        "Wood surface preparation and sanding",
        "Knot and grain treatment",
        "Stain and varnish application",
        "Protective clear coat finishing",
        "Furniture restoration painting"
      ]
    },
    {
      title: "SPECIALTY COATINGS",
      description: "Specialized protective coatings for specific surfaces and environmental conditions.",
      icon: "🛡️",
      technicalServices: [
        "Anti-mold and mildew resistant paint",
        "Heat-resistant coatings for kitchens",
        "Washable and scrub-resistant paint",
        "Eco-friendly and low-VOC options",
        "Anti-graffiti protective coatings"
      ]
    }
  ];

  return (
    <section style={styles.section} id="painting-services">
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>OUR PAINTING SERVICES</h2>
          <p style={styles.subtitle}>
            Comprehensive painting solutions for residential and commercial properties in Dubai, using premium paints and expert techniques
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

export default PaintingServices;
