// src/components/services/apartment/ApartmentHero.js
import { useState, useEffect } from 'react'

export default function ApartmentHero() {
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
      padding: '6rem 0 4rem',
      background: `linear-gradient(135deg, ${colors.primary} 0%, #2D3748 100%)`,
      color: colors.white,
      position: 'relative',
      overflow: 'hidden'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem',
      position: 'relative',
      zIndex: 2
    },
    content: {
      textAlign: 'center',
      maxWidth: '800px',
      margin: '0 auto'
    },
    title: {
      fontSize: isMobile ? '2.5rem' : '3.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      lineHeight: '1.2'
    },
    subtitle: {
      fontSize: isMobile ? '1.25rem' : '1.5rem',
      color: '#CBD5E0',
      lineHeight: '1.6',
      marginBottom: '2rem'
    },
    features: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
      gap: '2rem',
      marginTop: '3rem'
    },
    feature: {
      textAlign: 'center',
      padding: '1.5rem'
    },
    featureIcon: {
      width: '60px',
      height: '60px',
      backgroundColor: colors.secondary,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 1rem'
    },
    featureTitle: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      marginBottom: '0.5rem'
    },
    featureText: {
      fontSize: '1rem',
      color: '#CBD5E0'
    }
  }

  const features = [
    {
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
        </svg>
      ),
      title: "Space Optimization",
      text: "Maximize every square foot with intelligent design solutions"
    },
    {
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Modern Design",
      text: "Contemporary aesthetics with functional living spaces"
    },
    {
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Quick Turnaround",
      text: "4-6 weeks completion with minimal disruption"
    }
  ]

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.content}>
          <h1 style={styles.title}>Apartment Renovation in Dubai</h1>
          <p style={styles.subtitle}>
            Transform your apartment into a modern, functional living space with our expert renovation services. 
            Perfect for Dubai's urban lifestyle and prestigious towers.
          </p>
          
          <div style={styles.features}>
            {features.map((feature, index) => (
              <div key={index} style={styles.feature}>
                <div style={styles.featureIcon}>
                  <div style={{ color: colors.white }}>
                    {feature.icon}
                  </div>
                </div>
                <h3 style={styles.featureTitle}>{feature.title}</h3>
                <p style={styles.featureText}>{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
