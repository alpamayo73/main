import React from 'react';

const SafetyCertification = () => {
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
    contentGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '3rem',
      alignItems: 'start'
    },
    safetySection: {
      marginBottom: '2rem'
    },
    certificationSection: {
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
    safetyList: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    safetyItem: {
      padding: '1rem',
      marginBottom: '0.8rem',
      backgroundColor: '#f8f9fa',
      borderLeft: '4px solid #577D8E',
      transition: 'all 0.3s ease',
      borderRadius: '4px'
    },
    certificationList: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    certificationItem: {
      padding: '1rem',
      marginBottom: '0.8rem',
      backgroundColor: '#f8f9fa',
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
    standardsList: {
      listStyle: 'none',
      padding: 0,
      margin: '0.5rem 0 0 0'
    },
    standard: {
      padding: '0.2rem 0',
      color: '#577D8E',
      fontSize: '0.8rem',
      display: 'flex',
      alignItems: 'center'
    },
    standardIcon: {
      marginRight: '0.5rem',
      fontSize: '0.7rem'
    }
  };

  const safetyFeatures = [
    {
      title: "SAFETY PROTOCOLS",
      description: "Strict adherence to electrical safety standards and procedures.",
      standards: ["✓ DEWA compliance", "✓ PPE requirement", "✓ Lockout-tagout procedures", "✓ Emergency protocols"]
    },
    {
      title: "QUALITY MATERIALS",
      description: "Use of certified electrical components and materials.",
      standards: ["✓ DEWA approved cables", "✓ Certified circuit breakers", "✓ Quality switches & sockets", "✓ Fire-resistant materials"]
    },
    {
      title: "TESTING & INSPECTION",
      description: "Comprehensive testing and inspection of all electrical work.",
      standards: ["✓ Insulation resistance testing", "✓ Earth continuity tests", "✓ Polarity checks", "✓ Load testing"]
    }
  ];

  const certifications = [
    {
      title: "CERTIFIED ELECTRICIANS",
      description: "Our team consists of DEWA-certified and experienced electricians.",
      standards: ["✓ DEWA certification", "✓ International standards", "✓ Continuous training", "✓ Specialized expertise"]
    },
    {
      title: "COMPLIANCE STANDARDS",
      description: "All work complies with Dubai electrical codes and regulations.",
      standards: ["✓ Dubai Electricity Code", "✓ International standards", "✓ Safety regulations", "✓ Quality assurance"]
    },
    {
      title: "INSURANCE COVERAGE",
      description: "Fully insured electrical services for your peace of mind.",
      standards: ["✓ Public liability insurance", "✓ Worker compensation", "✓ Project insurance", "✓ Warranty coverage"]
    }
  ];

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>SAFETY & CERTIFICATION</h2>
          <p style={styles.subtitle}>
            Your safety is our priority. We adhere to the highest electrical safety standards and employ certified professionals for all electrical work
          </p>
        </div>
        
        <div style={styles.contentGrid}>
          <div style={styles.safetySection}>
            <h3 style={styles.sectionTitle}>SAFETY STANDARDS</h3>
            <ul style={styles.safetyList}>
              {safetyFeatures.map((feature, index) => (
                <li 
                  key={index}
                  style={styles.safetyItem}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFFFFF';
                    e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = '#f8f9fa';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <h4 style={styles.itemTitle}>{feature.title}</h4>
                  <p style={styles.itemDescription}>{feature.description}</p>
                  <ul style={styles.standardsList}>
                    {feature.standards.map((standard, standardIndex) => (
                      <li key={standardIndex} style={styles.standard}>
                        <span style={styles.standardIcon}>✓</span>
                        {standard.replace('✓', '')}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          
          <div style={styles.certificationSection}>
            <h3 style={styles.sectionTitle}>CERTIFICATIONS</h3>
            <ul style={styles.certificationList}>
              {certifications.map((certification, index) => (
                <li 
                  key={index}
                  style={styles.certificationItem}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFFFFF';
                    e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = '#f8f9fa';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <h4 style={styles.itemTitle}>{certification.title}</h4>
                  <p style={styles.itemDescription}>{certification.description}</p>
                  <ul style={styles.standardsList}>
                    {certification.standards.map((standard, standardIndex) => (
                      <li key={standardIndex} style={styles.standard}>
                        <span style={styles.standardIcon}>✓</span>
                        {standard.replace('✓', '')}
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

export default SafetyCertification;
