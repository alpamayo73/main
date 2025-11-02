import React from 'react';

const HandymanServices = () => {
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
      title: "HOME MOVING SERVICES",
      description: "Complete home relocation services with careful handling of all your belongings.",
      icon: "🚚",
      technicalServices: [
        "Professional packing and unpacking",
        "Furniture disassembly and reassembly",
        "Heavy item lifting and moving",
        "Transportation with covered trucks",
        "Safe placement in new location"
      ]
    },
    {
      title: "FURNITURE MOVING",
      description: "Expert furniture moving within your home or to new locations.",
      icon: "🛋️",
      technicalServices: [
        "Heavy furniture lifting and moving",
        "Staircase and elevator navigation",
        "Furniture protection and wrapping",
        "Strategic placement planning",
        "Assembly and disassembly services"
      ]
    },
    {
      title: "FURNITURE ASSEMBLY",
      description: "Professional assembly of flat-pack furniture and complex items.",
      icon: "🔨",
      technicalServices: [
        "IKEA and flat-pack furniture assembly",
        "Bed frames and wardrobe assembly",
        "Office furniture setup",
        "Tool-free assembly options",
        "Quality checking and adjustments"
      ]
    },
    {
      title: "HEAVY LIFTING",
      description: "Safe heavy lifting for appliances, safes, and large items.",
      icon: "💪",
      technicalServices: [
        "Appliance moving (refrigerators, washers)",
        "Safe and vault relocation",
        "Piano and musical instrument moving",
        "Exercise equipment setup",
        "Proper lifting equipment usage"
      ]
    },
    {
      title: "HOME MAINTENANCE",
      description: "General home repair and maintenance tasks of all kinds.",
      icon: "🏠",
      technicalServices: [
        "Minor plumbing repairs",
        "Electrical fixture installation",
        "Door and window adjustments",
        "Shelving and storage installation",
        "General household repairs"
      ]
    },
    {
      title: "MOUNTING & INSTALLATION",
      description: "Professional mounting of TVs, shelves, and home fixtures.",
      icon: "📺",
      technicalServices: [
        "TV wall mounting and setup",
        "Shelving and storage installation",
        "Curtain rod and blind installation",
        "Picture and mirror hanging",
        "Security camera installation"
      ]
    }
  ];

  return (
    <section style={styles.section} id="handyman-services">
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>OUR HANDYMAN SERVICES</h2>
          <p style={styles.subtitle}>
            Comprehensive handyman solutions for all your home needs in Dubai. From moving assistance to heavy lifting and general maintenance
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

export default HandymanServices;
