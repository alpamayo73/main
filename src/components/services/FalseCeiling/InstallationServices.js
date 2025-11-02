import React from 'react';

const InstallationServices = () => {
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
      title: "GYPSUM FALSE CEILING",
      description: "Modern gypsum board false ceilings with smooth finishes, perfect for residential and commercial spaces.",
      icon: "🏢",
      technicalServices: [
        "Suspended grid system installation",
        "Gypsum board fixing and finishing",
        "LED lighting integration",
        "AC vent and fixture cutouts",
        "Painting and final touches"
      ]
    },
    {
      title: "PVC FALSE CEILING",
      description: "Waterproof and moisture-resistant PVC ceilings ideal for kitchens, bathrooms, and high-humidity areas.",
      icon: "💧",
      technicalServices: [
        "Waterproof PVC panel installation",
        "Moisture-resistant framework",
        "Easy maintenance design",
        "Mold and mildew resistance",
        "Quick installation process"
      ]
    },
    {
      title: "WOODEN FALSE CEILING",
      description: "Elegant wooden false ceilings adding warmth and natural beauty to interior spaces.",
      icon: "🌳",
      technicalServices: [
        "Solid wood and plywood options",
        "Custom design and patterns",
        "Wood treatment and finishing",
        "Acoustic enhancement features",
        "Natural aesthetic appeal"
      ]
    },
    {
      title: "GLASS PARTITIONS",
      description: "Modern glass partitions for offices and commercial spaces creating open yet defined areas.",
      icon: "🔲",
      technicalServices: [
        "Tempered glass installation",
        "Aluminum framework",
        "Frosted and clear glass options",
        "Sliding and fixed partitions",
        "Soundproofing solutions"
      ]
    },
    {
      title: "DRYWALL PARTITIONS",
      description: "Quick and efficient drywall partitions for office spaces and room divisions.",
      icon: "🧱",
      technicalServices: [
        "Metal stud framework",
        "Gypsum board installation",
        "Sound insulation integration",
        "Electrical conduit planning",
        "Smooth finishing and painting"
      ]
    },
    {
      title: "ACOUSTIC SOLUTIONS",
      description: "Specialized acoustic ceilings and partitions for noise control in offices and media rooms.",
      icon: "🔇",
      technicalServices: [
        "Acoustic panel installation",
        "Soundproofing materials",
        "Noise reduction design",
        "Echo control solutions",
        "Professional audio spaces"
      ]
    }
  ];

  return (
    <section style={styles.section} id="installation-services">
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>OUR FALSE CEILING & PARTITION SERVICES</h2>
          <p style={styles.subtitle}>
            Comprehensive interior solutions for residential and commercial properties in Dubai, combining functionality with aesthetic appeal
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

export default InstallationServices;
