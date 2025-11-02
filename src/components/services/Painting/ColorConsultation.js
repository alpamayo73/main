import React from 'react';

const ColorConsultation = () => {
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
    consultationGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem'
    },
    consultationCard: {
      padding: '2rem',
      backgroundColor: '#f8f9fa',
      borderLeft: '4px solid #577D8E',
      transition: 'all 0.3s ease',
      textAlign: 'center'
    },
    consultationIcon: {
      fontSize: '3rem',
      marginBottom: '1.5rem',
      display: 'block'
    },
    consultationTitle: {
      fontSize: '1.25rem',
      fontWeight: 700,
      color: '#1C2734',
      marginBottom: '1rem',
      textTransform: 'uppercase'
    },
    consultationDescription: {
      color: '#666',
      lineHeight: 1.6,
      fontSize: '0.95rem'
    },
    processList: {
      listStyle: 'none',
      padding: 0,
      margin: '1rem 0 0 0'
    },
    processItem: {
      padding: '0.5rem 0',
      color: '#577D8E',
      fontSize: '0.9rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    processNumber: {
      backgroundColor: '#577D8E',
      color: 'white',
      borderRadius: '50%',
      width: '24px',
      height: '24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '0.8rem',
      fontWeight: 'bold',
      marginRight: '0.8rem'
    }
  };

  const consultationServices = [
    {
      icon: "🎨",
      title: "COLOR SELECTION",
      description: "Expert guidance in choosing the perfect colors for your space",
      process: [
        "Space assessment and lighting analysis",
        "Color psychology consultation",
        "Sample testing on your walls",
        "Final color scheme approval"
      ]
    },
    {
      icon: "🏠",
      title: "ROOM-SPECIFIC ADVICE",
      description: "Tailored color recommendations for different rooms and purposes",
      process: [
        "Bedroom color psychology",
        "Kitchen and bathroom considerations",
        "Living area color flow",
        "Accent wall recommendations"
      ]
    },
    {
      icon: "📐",
      title: "DESIGN INTEGRATION",
      description: "Ensuring colors complement your furniture and decor",
      process: [
        "Existing furniture assessment",
        "Lighting condition analysis",
        "Architectural feature highlighting",
        "Overall design harmony"
      ]
    }
  ];

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>PROFESSIONAL COLOR CONSULTATION</h2>
          <p style={styles.subtitle}>
            Our expert color consultants help you choose the perfect palette that transforms your space and reflects your personality
          </p>
        </div>
        
        <div style={styles.consultationGrid}>
          {consultationServices.map((service, index) => (
            <div 
              key={index}
              style={styles.consultationCard}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#FFFFFF';
                e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#f8f9fa';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={styles.consultationIcon}>{service.icon}</div>
              <h3 style={styles.consultationTitle}>{service.title}</h3>
              <p style={styles.consultationDescription}>{service.description}</p>
              <ul style={styles.processList}>
                {service.process.map((step, stepIndex) => (
                  <li key={stepIndex} style={styles.processItem}>
                    <span style={styles.processNumber}>{stepIndex + 1}</span>
                    {step}
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

export default ColorConsultation;
