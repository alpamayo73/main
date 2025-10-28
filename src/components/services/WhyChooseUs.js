// components/services/WhyChooseUs.js
import { useState, useEffect } from 'react'

export default function WhyChooseUs() {
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
      gap: '3rem',
      alignItems: 'center'
    },
    features: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem'
    },
    feature: {
      display: 'flex',
      gap: '1.5rem',
      alignItems: 'flex-start'
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
    },
    image: {
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
      height: '400px',
      backgroundImage: 'url(https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  }

  const features = [
    {
      icon: (
        <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Premium Quality",
      text: "We use only the finest materials and follow international quality standards to ensure lasting results."
    },
    {
      icon: (
        <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Timely Delivery",
      text: "We respect your time and ensure all projects are completed within agreed timelines without compromising quality."
    },
    {
      icon: (
        <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "24/7 Support",
      text: "Round-the-clock customer service and emergency support for all your renovation and AC maintenance needs."
    },
    {
      icon: (
        <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Transparent Pricing",
      text: "No hidden costs. We provide detailed quotes and maintain open communication about project expenses."
    }
  ]

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>Why Choose Alpamayo?</h2>
          <p style={styles.subtitle}>
            Experience the difference that comes with working with Dubai's premier renovation and AC services provider
          </p>
        </div>

        <div style={styles.grid}>
          <div style={styles.features}>
            {features.map((feature, index) => (
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

          <div style={styles.image} />
        </div>
      </div>
    </section>
  )
}
