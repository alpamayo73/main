// components/contact/ContactInfo.js
import { useState, useEffect } from 'react'

export default function ContactInfo() {
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
      backgroundColor: colors.white
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
      gap: '2rem'
    },
    card: {
      backgroundColor: '#F8FAFC',
      padding: '2.5rem 2rem',
      borderRadius: '16px',
      textAlign: 'center',
      border: `1px solid #E5E7EB`,
      transition: 'all 0.3s ease'
    },
    icon: {
      width: '70px',
      height: '70px',
      backgroundColor: colors.secondary,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 1.5rem'
    },
    title: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: colors.primary,
      marginBottom: '1rem'
    },
    info: {
      fontSize: '1.125rem',
      color: colors.secondary,
      fontWeight: '600',
      marginBottom: '0.5rem'
    },
    description: {
      fontSize: '1rem',
      color: '#6B7280',
      lineHeight: '1.5'
    },
    hours: {
      marginTop: '1rem',
      paddingTop: '1rem',
      borderTop: `1px solid #E5E7EB`
    },
    hoursTitle: {
      fontSize: '0.875rem',
      fontWeight: '600',
      color: colors.primary,
      marginBottom: '0.5rem',
      textTransform: 'uppercase'
    },
    hoursText: {
      fontSize: '0.875rem',
      color: '#6B7280'
    }
  }

  const contactMethods = [
    {
      icon: (
        <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Call Us",
      info: "+971589071754",
      description: "Speak directly with our experts",
      hours: "24/7 Emergency AC Services"
    },
    {
      icon: (
        <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email Us",
      info: "info@thealpamayo.com",
      description: "Send us your project details",
      hours: "Response within 2 hours"
    },
    {
      icon: (
        <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Visit Us",
      info: "Al Qouz, Dubai, UAE",
      description: "Schedule an office visit",
      hours: "Mon - Sat: 8:00 AM - 6:00 PM"
    }
  ]

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.grid}>
          {contactMethods.map((method, index) => (
            <div 
              key={index}
              style={styles.card}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)'
                e.currentTarget.style.backgroundColor = colors.white
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.backgroundColor = styles.card.backgroundColor
              }}
            >
              <div style={styles.icon}>
                <div style={{ color: colors.white }}>
                  {method.icon}
                </div>
              </div>
              <h3 style={styles.title}>{method.title}</h3>
              <div style={styles.info}>{method.info}</div>
              <p style={styles.description}>{method.description}</p>
              <div style={styles.hours}>
                <div style={styles.hoursTitle}>Available</div>
                <div style={styles.hoursText}>{method.hours}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
