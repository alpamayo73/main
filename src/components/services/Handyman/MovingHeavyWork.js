import React from 'react';

const MovingHeavyWork = () => {
  const styles = {
    section: {
      padding: '5rem 0',
      backgroundColor: '#f8f9fa'
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
    contentGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '3rem',
      alignItems: 'start'
    },
    movingSection: {
      marginBottom: '2rem'
    },
    heavyWorkSection: {
      marginBottom: '2rem'
    },
    sectionTitle: {
      fontSize: '1.5rem',
      fontWeight: 700,
      color: '#1C2734',
      marginBottom: '1.5rem',
      textTransform: 'uppercase',
      borderBottom: '3px solid #577D8E',
      paddingBottom: '0.5rem'
    },
    movingList: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    movingItem: {
      padding: '1rem',
      marginBottom: '0.8rem',
      backgroundColor: '#FFFFFF',
      borderLeft: '4px solid #577D8E',
      transition: 'all 0.3s ease',
      borderRadius: '4px'
    },
    heavyWorkList: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    heavyWorkItem: {
      padding: '1rem',
      marginBottom: '0.8rem',
      backgroundColor: '#FFFFFF',
      borderLeft: '4px solid #1C2734',
      transition: 'all 0.3s ease',
      borderRadius: '4px'
    },
    itemTitle: {
      fontSize: '1.1rem',
      fontWeight: 600,
      color: '#1C2734',
      marginBottom: '0.5rem'
    },
    itemDescription: {
      color: '#666',
      fontSize: '0.9rem',
      lineHeight: 1.5
    },
    featuresList: {
      listStyle: 'none',
      padding: 0,
      margin: '0.5rem 0 0 0'
    },
    feature: {
      padding: '0.2rem 0',
      color: '#577D8E',
      fontSize: '0.8rem',
      display: 'flex',
      alignItems: 'center'
    },
    featureIcon: {
      marginRight: '0.5rem',
      fontSize: '0.7rem'
    }
  };

  const movingServices = [
    {
      title: "APARTMENT MOVING",
      description: "Complete moving services for apartments and studios.",
      features: ["✓ Furniture protection", "✓ Elevator booking", "✓ Parking coordination", "✓ Quick turnaround"]
    },
    {
      title: "VILLA RELOCATION",
      description: "Comprehensive moving solutions for villas and large homes.",
      features: ["✓ Multiple room handling", "✓ Garden items moving", "✓ Storage solutions", "✓ Staircase navigation"]
    },
    {
      title: "OFFICE MOVING",
      description: "Professional office relocation with minimal downtime.",
      features: ["✓ After-hours moving", "✓ IT equipment handling", "✓ Document security", "✓ Quick setup"]
    },
    {
      title: "LAST-MINUTE MOVING",
      description: "Urgent moving services for immediate relocation needs.",
      features: ["✓ Same-day service", "✓ Emergency packing", "✓ Flexible timing", "✓ Quick response"]
    }
  ];

  const heavyWorkServices = [
    {
      title: "APPLIANCE MOVING",
      description: "Safe moving of heavy appliances and equipment.",
      features: ["✓ Refrigerator moving", "✓ Washing machine relocation", "✓ Oven and stove moving", "✓ AC unit handling"]
    },
    {
      title: "PIANO & INSTRUMENTS",
      description: "Specialized moving for delicate and heavy musical instruments.",
      features: ["✓ Piano tuning coordination", "✓ Protective wrapping", "✓ Special equipment", "✓ Careful handling"]
    },
    {
      title: "SAFE & VAULT MOVING",
      description: "Professional moving of heavy safes and security items.",
      features: ["✓ Heavy-duty equipment", "✓ Floor protection", "✓ Precision placement", "✓ Security focus"]
    },
    {
      title: "GYMNASIUM EQUIPMENT",
      description: "Moving and setup of exercise and gym equipment.",
      features: ["✓ Treadmill moving", "✓ Weight bench setup", "✓ Equipment assembly", "✓ Safety checks"]
    }
  ];

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>MOVING & HEAVY WORK SPECIALISTS</h2>
          <p style={styles.subtitle}>
            Expert handling of all your moving and heavy lifting needs with professional equipment and trained personnel
          </p>
        </div>
        
        <div style={styles.contentGrid}>
          <div style={styles.movingSection}>
            <h3 style={styles.sectionTitle}>MOVING SERVICES</h3>
            <ul style={styles.movingList}>
              {movingServices.map((service, index) => (
                <li 
                  key={index}
                  style={styles.movingItem}
                  onMouseOver={(e) => {
                    e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <h4 style={styles.itemTitle}>{service.title}</h4>
                  <p style={styles.itemDescription}>{service.description}</p>
                  <ul style={styles.featuresList}>
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} style={styles.feature}>
                        <span style={styles.featureIcon}>✓</span>
                        {feature.replace('✓', '')}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          
          <div style={styles.heavyWorkSection}>
            <h3 style={styles.sectionTitle}>HEAVY WORK SERVICES</h3>
            <ul style={styles.heavyWorkList}>
              {heavyWorkServices.map((service, index) => (
                <li 
                  key={index}
                  style={styles.heavyWorkItem}
                  onMouseOver={(e) => {
                    e.currentStyle.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <h4 style={styles.itemTitle}>{service.title}</h4>
                  <p style={styles.itemDescription}>{service.description}</p>
                  <ul style={styles.featuresList}>
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} style={styles.feature}>
                        <span style={styles.featureIcon}>✓</span>
                        {feature.replace('✓', '')}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovingHeavyWork;
