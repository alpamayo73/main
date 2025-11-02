import React from 'react';

const ElectricalCTASection = () => {
  const styles = {
    section: {
      padding: '4rem 0',
      backgroundColor: '#1C2734',
      color: '#FFFFFF',
      textAlign: 'center'
    },
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '0 1rem'
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 700,
      marginBottom: '1.5rem',
      lineHeight: 1.3,
      textTransform: 'uppercase'
    },
    description: {
      fontSize: '1.125rem',
      marginBottom: '2.5rem',
      lineHeight: 1.6,
      opacity: 0.9
    },
    buttonContainer: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },
    primaryButton: {
      backgroundColor: '#577D8E',
      color: '#FFFFFF',
      padding: '1rem 2.5rem',
      border: 'none',
      fontSize: '1.125rem',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textTransform: 'uppercase'
    },
    secondaryButton: {
      backgroundColor: 'transparent',
      color: '#FFFFFF',
      padding: '1rem 2.5rem',
      border: '2px solid #577D8E',
      fontSize: '1.125rem',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textTransform: 'uppercase'
    },
    contactInfo: {
      marginTop: '3rem',
      paddingTop: '2rem',
      borderTop: '1px solid rgba(255,255,255,0.1)'
    },
    contactText: {
      fontSize: '1rem',
      opacity: 0.8,
      marginBottom: '0.5rem'
    },
    phone: {
      fontSize: '1.5rem',
      fontWeight: 600,
      color: '#577D8E',
      textDecoration: 'none'
    },
    technicalNote: {
      fontSize: '0.9rem',
      opacity: 0.7,
      marginTop: '1rem',
      fontStyle: 'italic'
    },
    emergencyNote: {
      fontSize: '1rem',
      color: '#ff6b6b',
      fontWeight: '600',
      marginTop: '1rem'
    }
  };

  const handleElectricalAssessment = () => {
    // Implement assessment functionality
    console.log('Electrical Assessment clicked');
  };

  const handleCallNow = () => {
    // Implement call functionality
    window.location.href = 'tel:+971589071754';
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>NEED A CERTIFIED ELECTRICIAN?</h2>
        <p style={styles.description}>
          Contact Alpamayo Technical Services for professional electrical solutions in Dubai. 
          Get certified electricians, safe installations, and reliable electrical services for your property.
        </p>
        
        <div style={styles.buttonContainer}>
          <button 
            style={styles.primaryButton}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#4a6c7d';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#577D8E';
              e.target.style.transform = 'translateY(0)';
            }}
            onClick={handleElectricalAssessment}
          >
            Free Electrical Assessment
          </button>
          <button 
            style={styles.secondaryButton}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#577D8E';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.transform = 'translateY(0)';
            }}
            onClick={handleCallNow}
          >
            Call Electrician: +971 58 907 1754
          </button>
        </div>
        
        <div style={styles.contactInfo}>
          <p style={styles.contactText}>For electrical consultations and emergency services</p>
          <a href="mailto:info@thealpamayo.com" style={styles.phone}>
            info@thealpamayo.com
          </a>
          <p style={styles.technicalNote}>
            Our certified electricians provide free assessments, safety inspections, and 24/7 emergency services
          </p>
          <p style={styles.emergencyNote}>
            ⚡ 24/7 Emergency Electrician Available for Urgent Electrical Issues
          </p>
        </div>
      </div>
    </section>
  );
};

export default ElectricalCTASection;
