// src/components/services/apartment/ApartmentCTA.js
import { useState, useEffect } from 'react'

export default function ApartmentCTA() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const colors = {
    primary: '#1C2734',
    secondary: '#577D8E',
    white: '#FFFFFF'
  }

  const styles = {
    section: {
      padding: '5rem 0',
      background: `linear-gradient(135deg, ${colors.primary} 0%, #2D3748 100%)`,
      color: colors.white,
      textAlign: 'center'
    },
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '0 1rem'
    },
    title: {
      fontSize: isMobile ? '2rem' : '2.5rem',
      fontWeight: 'bold',
      marginBottom: '1.5rem',
      lineHeight: '1.3'
    },
    text: {
      fontSize: '1.25rem',
      color: '#CBD5E0',
      lineHeight: '1.6',
      marginBottom: '2.5rem',
      maxWidth: '600px',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    button: {
      backgroundColor: colors.secondary,
      color: colors.white,
      padding: '1rem 2.5rem',
      borderRadius: '8px',
      border: 'none',
      fontSize: '1.125rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 12px rgba(87, 125, 142, 0.3)',
      marginBottom: '3rem'
    },
    contactInfo: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
      gap: '2rem',
      paddingTop: '3rem',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)'
    },
    contactItem: {
      textAlign: 'center'
    },
    contactTitle: {
      fontSize: '1rem',
      fontWeight: '600',
      color: colors.secondary,
      marginBottom: '0.5rem',
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    },
    contactValue: {
      fontSize: '1.125rem',
      fontWeight: '500'
    }
  }

  const handleConsultation = () => {
    window.location.href = '/contact'
  }

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>Ready to Transform Your Apartment?</h2>
        <p style={styles.text}>
          Let's discuss your vision for the perfect apartment renovation in Dubai. 
          Get a free consultation and space assessment from our expert team.
        </p>
        
        <button 
          style={styles.button}
          onClick={handleConsultation}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = colors.white
            e.target.style.color = colors.primary
            e.target.style.transform = 'translateY(-2px)'
            e.target.style.boxShadow = '0 8px 20px rgba(255, 255, 255, 0.2)'
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = colors.secondary
            e.target.style.color = colors.white
            e.target.style.transform = 'translateY(0)'
            e.target.style.boxShadow = styles.button.boxShadow
          }}
        >
          Start Your Apartment Transformation
        </button>

        <div style={styles.contactInfo}>
          <div style={styles.contactItem}>
            <div style={styles.contactTitle}>Phone</div>
            <div style={styles.contactValue}>+971589071754</div>
          </div>
          <div style={styles.contactItem}>
            <div style={styles.contactTitle}>Email</div>
            <div style={styles.contactValue}>info@thealpamayo.com</div>
          </div>
          <div style={styles.contactItem}>
            <div style={styles.contactTitle}>Service Areas</div>
            <div style={styles.contactValue}>All Dubai Areas</div>
          </div>
        </div>
      </div>
    </section>
  )
}
