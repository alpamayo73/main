// src/components/services/apartment/ApartmentFeatures.js
import { useState, useEffect } from 'react'

export default function ApartmentFeatures() {
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
    feature: {
      display: 'flex',
      gap: '1.5rem',
      alignItems: 'flex-start',
      marginBottom: '2.5rem'
    },
    featureIcon: {
      width: '60px',
      height: '60px',
      backgroundColor: colors.secondary,
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    },
    featureContent: {
      flex: 1
    },
    featureTitle: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: colors.primary,
      marginBottom: '0.5rem'
    },
    featureText: {
      fontSize: '1rem',
      color: '#6B7280',
      lineHeight: '1.6'
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
      text: "Custom storage solutions, multi-functional furniture, and smart layout planning"
    },
    {
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: "Kitchen Remodeling",
      text: "Modern kitchen designs, space-efficient layouts, and premium appliance integration"
    },
    {
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Bathroom Upgrades",
      text: "Luxury bathroom fixtures, space-saving designs, and modern tiling solutions"
    },
    {
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      ),
      title: "Living Area Design",
      text: "Open-plan concepts, lighting design, and entertainment space optimization"
    },
    {
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      title: "Smart Home Integration",
      text: "Automated lighting, climate control, security systems, and entertainment setups"
    },
    {
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Flooring & Finishing",
      text: "Premium flooring options, wall finishes, and custom millwork for elegant interiors"
    }
  ]

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>Comprehensive Apartment Services</h2>
          <p style={styles.subtitle}>
            Specialized solutions designed for apartment living in Dubai's prestigious towers and communities
          </p>
        </div>

        <div style={styles.grid}>
          <div>
            {features.slice(0, 3).map((feature, index) => (
              <div key={index} style={styles.feature}>
                <div style={styles.featureIcon}>
                  <div style={{ color: colors.white }}>
                    {feature.icon}
                  </div>
                </div>
                <div style={styles.featureContent}>
                  <h3 style={styles.featureTitle}>{feature.title}</h3>
                  <p style={styles.featureText}>{feature.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div>
            {features.slice(3).map((feature, index) => (
              <div key={index} style={styles.feature}>
                <div style={styles.featureIcon}>
                  <div style={{ color: colors.white }}>
                    {feature.icon}
                  </div>
                </div>
                <div style={styles.featureContent}>
                  <h3 style={styles.featureTitle}>{feature.title}</h3>
                  <p style={styles.featureText}>{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
