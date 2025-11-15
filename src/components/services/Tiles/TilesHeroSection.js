import React from 'react';

const TilesHeroSection = () => {
  const styles = {
    heroSection: {
      position: 'relative',
      height: '70vh',
      background: 'linear-gradient(135deg, #1C2734 0%, #577D8E 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#FFFFFF',
      overflow: 'hidden'
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.4)'
    },
    content: {
      position: 'relative',
      zIndex: 10,
      textAlign: 'center',
      maxWidth: '900px',
      margin: '0 auto',
      padding: '0 1rem'
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 700,
      marginBottom: '1.5rem',
      letterSpacing: '0.05em',
      lineHeight: 1.2,
      textTransform: 'uppercase'
    },
    subtitle: {
      fontSize: '1.5rem',
      fontWeight: 300,
      maxWidth: '800px',
      margin: '0 auto',
      lineHeight: 1.6,
      marginBottom: '2rem'
    },
    buttonContainer: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      marginTop: '2rem',
      flexWrap: 'wrap'
    },
    primaryButton: {
      backgroundColor: '#FFFFFF',
      color: '#1C2734',
      padding: '0.75rem 2rem',
      border: 'none',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontSize: '1rem',
      textTransform: 'uppercase'
    },
    secondaryButton: {
      backgroundColor: 'transparent',
      color: '#FFFFFF',
      padding: '0.75rem 2rem',
      border: '2px solid #FFFFFF',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontSize: '1rem',
      textTransform: 'uppercase'
    }
  };

  const handlePrimaryClick = () => {
    // Implement consultation functionality
    console.log('Free Consultation clicked');
  };

  const handleSecondaryClick = () => {
    // Implement portfolio functionality
    console.log('View Portfolio clicked');
  };

  return (
    <section style={styles.heroSection}>
      <div style={styles.overlay}></div>
      <div style={styles.content}>
        <h1 style={styles.title}>PROFESSIONAL TILES INSTALLATION</h1>
        <p style={styles.subtitle}>
          Expert Tile Installation Services in Dubai for Floors, Walls, and Outdoor Spaces with Premium Materials and Precision Craftsmanship
        </p>
        <div style={styles.buttonContainer}>
          <button 
            style={styles.primaryButton}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#f8f9fa';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#FFFFFF';
              e.target.style.transform = 'translateY(0)';
            }}
            onClick={handlePrimaryClick}
          >
            Free Consultation
          </button>
          <button 
            style={styles.secondaryButton}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#FFFFFF';
              e.target.style.color = '#1C2734';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#FFFFFF';
              e.target.style.transform = 'translateY(0)';
            }}
            onClick={handleSecondaryClick}
          >
            View Our Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default TilesHeroSection;
