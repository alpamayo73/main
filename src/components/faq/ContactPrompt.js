// components/faq/ContactPrompt.js
import { useState, useEffect } from 'react'

export default function ContactPrompt() {
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
    buttons: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem',
      flexWrap: 'wrap',
      marginBottom: '3rem'
    },
    button: {
      padding: '1rem 2rem',
      borderRadius: '8px',
      border: 'none',
      fontSize: '1.125rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      display: 'inline-block'
    },
    primaryButton: {
      backgroundColor: colors.secondary,
      color: colors.white
    },
    secondaryButton: {
      backgroundColor: 'transparent',
      color: colors.white,
      border: `2px solid ${colors.secondary}`
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

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>Still Have Questions?</h2>
        <p style={styles.text}>
          Can't find the answer you're looking for? Our expert team is ready to help with any questions about your renovation or AC project in Dubai.
        </p>
        
        <div style={styles.buttons}>
          <button 
            style={{...styles.button, ...styles.primaryButton}}
            onClick={() => window.location.href = '/contact'}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = colors.white
              e.target.style.color = colors.primary
              e.target.style.transform = 'translateY(-2px)'
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = colors.secondary
              e.target.style.color = colors.white
              e.target.style.transform = 'translateY(0)'
            }}
          >
            Contact Us Now
          </button>
          <button 
            style={{...styles.button, ...styles.secondaryButton}}
            onClick={() => window.location.href = 'tel:+971589071754'}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = colors.secondary
              e.target.style.transform = 'translateY(-2px)'
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'transparent'
              e.target.style.transform = 'translateY(0)'
            }}
          >
            Call: +971589071754
          </button>
        </div>

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
            <div style={styles.contactTitle}>Address</div>
            <div style={styles.contactValue}>Al Qouz, Dubai, UAE</div>
          </div>
        </div>
      </div>
    </section>
  )
}
