import React from 'react';

const ApplicationsBenefits = () => {
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
    applicationsSection: {
      marginBottom: '2rem'
    },
    benefitsSection: {
      marginBottom: '2rem'
    },
    sectionTitle: {
      fontSize: '1.5rem',
      fontWeight: 700,
      color: '#1C2734',
      marginBottom: '1.5rem',
      textTransform: 'uppercase'
    },
    applicationsList: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    applicationItem: {
      padding: '1rem',
      marginBottom: '0.8rem',
      backgroundColor: '#f8f9fa',
      borderLeft: '4px solid #577D8E',
      transition: 'all 0.3s ease'
    },
    benefitsList: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    benefitItem: {
      padding: '1rem',
      marginBottom: '0.8rem',
      backgroundColor: '#f8f9fa',
      borderLeft: '4px solid #1C2734',
      transition: 'all 0.3s ease'
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
    }
  };

  const applications = [
    {
      title: "RESIDENTIAL SPACES",
      description: "Living rooms, bedrooms, kitchens, and bathrooms with enhanced aesthetics and functionality."
    },
    {
      title: "OFFICE INTERIORS",
      description: "Modern office partitions, meeting rooms, and executive spaces with acoustic control."
    },
    {
      title: "COMMERCIAL OUTLETS",
      description: "Retail stores, showrooms, and commercial spaces with brand-specific designs."
    },
    {
      title: "HOSPITALITY VENUES",
      description: "Hotels, restaurants, and lounges with luxurious ceiling designs and partitions."
    },
    {
      title: "EDUCATIONAL INSTITUTIONS",
      description: "Classrooms, libraries, and auditoriums with acoustic optimization."
    }
  ];

  const benefits = [
    {
      title: "AESTHETIC ENHANCEMENT",
      description: "Transform ordinary spaces into modern, stylish interiors with clean lines and elegant finishes."
    },
    {
      title: "SPACE OPTIMIZATION",
      description: "Create defined areas and optimize room layouts with strategic partition placement."
    },
    {
      title: "ACOUSTIC CONTROL",
      description: "Reduce noise transmission and improve sound quality in offices and residential spaces."
    },
    {
      title: "ENERGY EFFICIENCY",
      description: "Improve thermal insulation and reduce energy costs with proper ceiling installation."
    },
    {
      title: "CONCEALED SERVICES",
      description: "Hide electrical wires, AC ducts, and plumbing while maintaining easy access for maintenance."
    }
  ];

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>APPLICATIONS & BENEFITS</h2>
        </div>
        
        <div style={styles.contentGrid}>
          <div style={styles.applicationsSection}>
            <h3 style={styles.sectionTitle}>COMMON APPLICATIONS</h3>
            <ul style={styles.applicationsList}>
              {applications.map((application, index) => (
                <li 
                  key={index}
                  style={styles.applicationItem}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFFFFF';
                    e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = '#f8f9fa';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <h4 style={styles.itemTitle}>{application.title}</h4>
                  <p style={styles.itemDescription}>{application.description}</p>
                </li>
              ))}
            </ul>
          </div>
          
          <div style={styles.benefitsSection}>
            <h3 style={styles.sectionTitle}>KEY BENEFITS</h3>
            <ul style={styles.benefitsList}>
              {benefits.map((benefit, index) => (
                <li 
                  key={index}
                  style={styles.benefitItem}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFFFFF';
                    e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = '#f8f9fa';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <h4 style={styles.itemTitle}>{benefit.title}</h4>
                  <p style={styles.itemDescription}>{benefit.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationsBenefits;
