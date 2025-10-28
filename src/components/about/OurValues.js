// components/about/OurValues.js
import { useState, useEffect } from 'react'

export default function OurValues() {
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
    header: {
      textAlign: 'center',
      marginBottom: '4rem'
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: colors.primary,
      marginBottom: '1rem'
    },
    subtitle: {
      fontSize: '1.25rem',
      color: '#6B7280',
      maxWidth: '600px',
      margin: '0 auto',
      lineHeight: '1.6'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
      gap: '3rem'
    },
    value: {
      display: 'flex',
      gap: '1.5rem',
      alignItems: 'flex-start',
      marginBottom: '2.5rem'
    },
    valueIcon: {
      width: '70px',
      height: '70px',
      backgroundColor: colors.secondary,
      borderRadius: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    },
    valueContent: {
      flex: 1
    },
    valueTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: colors.primary,
      marginBottom: '0.75rem'
    },
    valueText: {
      fontSize: '1.125rem',
      color: '#6B7280',
      lineHeight: '1.6'
    }
  }

  const values = [
    {
      icon: (
        <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Quality Excellence",
      text: "We never compromise on quality. Every project meets the highest standards of craftsmanship and materials."
    },
    {
      icon: (
        <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      title: "Transparent Communication",
      text: "Open and honest communication ensures you're informed and involved throughout your project journey."
    },
    {
      icon: (
        <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Reliability & Trust",
      text: "We build lasting relationships based on trust, delivering on our promises and exceeding expectations."
    },
    {
      icon: (
        <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Innovation",
      text: "We embrace new technologies and creative solutions to deliver cutting-edge results for our clients."
    }
  ]

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>Our Core Values</h2>
          <p style={styles.subtitle}>
            The principles that guide everything we do and define who we are as a company
          </p>
        </div>

        <div style={styles.grid}>
          <div>
            {values.slice(0, 2).map((value, index) => (
              <div key={index} style={styles.value}>
                <div style={styles.valueIcon}>
                  <div style={{ color: colors.white }}>
                    {value.icon}
                  </div>
                </div>
                <div style={styles.valueContent}>
                  <h3 style={styles.valueTitle}>{value.title}</h3>
                  <p style={styles.valueText}>{value.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div>
            {values.slice(2).map((value, index) => (
              <div key={index} style={styles.value}>
                <div style={styles.valueIcon}>
                  <div style={{ color: colors.white }}>
                    {value.icon}
                  </div>
                </div>
                <div style={styles.valueContent}>
                  <h3 style={styles.valueTitle}>{value.title}</h3>
                  <p style={styles.valueText}>{value.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
