// src/components/services/villa/VillaPricing.js
import { useState, useEffect } from 'react'

export default function VillaPricing() {
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
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
      gap: '2rem'
    },
    package: {
      backgroundColor: '#F8FAFC',
      borderRadius: '16px',
      padding: '2.5rem 2rem',
      textAlign: 'center',
      border: `1px solid #E5E7EB`,
      transition: 'all 0.3s ease'
    },
    packageTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: colors.primary,
      marginBottom: '1rem'
    },
    packagePrice: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: colors.secondary,
      marginBottom: '1.5rem'
    },
    packageDuration: {
      fontSize: '1rem',
      color: '#6B7280',
      marginBottom: '2rem'
    },
    features: {
      listStyle: 'none',
      padding: 0,
      margin: '0 0 2rem 0',
      textAlign: 'left'
    },
    feature: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1rem',
      fontSize: '0.875rem',
      color: colors.primary
    },
    featureIcon: {
      width: '16px',
      height: '16px',
      color: colors.secondary,
      marginRight: '0.75rem',
      flexShrink: 0
    },
    button: {
      width: '100%',
      backgroundColor: colors.secondary,
      color: colors.white,
      padding: '1rem 2rem',
      borderRadius: '8px',
      border: 'none',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    }
  }

  const packages = [
    {
      title: "Basic Renovation",
      price: "AED 150,000",
      duration: "6-8 weeks",
      features: [
        "Painting and wall finishing",
        "Flooring replacement",
        "Basic kitchen updates",
        "Bathroom refurbishment",
        "Lighting upgrades",
        "Interior doors"
      ]
    },
    {
      title: "Standard Renovation",
      price: "AED 300,000",
      duration: "8-10 weeks",
      features: [
        "All basic package features",
        "Custom kitchen design",
        "Luxury bathroom renovation",
        "Built-in wardrobes",
        "False ceiling with lighting",
        "Smart home basics",
        "Landscaping"
      ]
    },
    {
      title: "Premium Renovation",
      price: "AED 500,000+",
      duration: "10-12 weeks",
      features: [
        "All standard package features",
        "Structural modifications",
        "Premium material selection",
        "Full smart home integration",
        "Home theater setup",
        "Swimming pool construction",
        "Outdoor kitchen",
        "Project management"
      ]
    }
  ]

  const handleConsultation = () => {
    window.location.href = '/contact'
  }

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>Villa Renovation Packages</h2>
          <p style={styles.subtitle}>
            Transparent pricing for villa renovations in Dubai. All packages include design consultation and project management.
          </p>
        </div>

        <div style={styles.grid}>
          {packages.map((pkg, index) => (
            <div 
              key={index}
              style={styles.package}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.12)'
                e.currentTarget.style.backgroundColor = colors.white
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.backgroundColor = styles.package.backgroundColor
              }}
            >
              <h3 style={styles.packageTitle}>{pkg.title}</h3>
              <div style={styles.packagePrice}>{pkg.price}</div>
              <div style={styles.packageDuration}>{pkg.duration}</div>
              
              <ul style={styles.features}>
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} style={styles.feature}>
                    <svg style={styles.featureIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                style={styles.button
