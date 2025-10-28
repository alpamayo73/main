// src/components/services/villa/VillaProcess.js
import { useState, useEffect } from 'react'

export default function VillaProcess() {
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
      backgroundColor: '#F8FAFC'
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
    steps: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
      gap: '2rem'
    },
    step: {
      textAlign: 'center',
      padding: '2rem 1rem',
      backgroundColor: colors.white,
      borderRadius: '16px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
      border: `1px solid #E5E7EB`,
      transition: 'all 0.3s ease'
    },
    stepNumber: {
      width: '60px',
      height: '60px',
      backgroundColor: colors.secondary,
      color: colors.white,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      margin: '0 auto 1.5rem'
    },
    stepTitle: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: colors.primary,
      marginBottom: '1rem'
    },
    stepDescription: {
      fontSize: '1rem',
      color: '#6B7280',
      lineHeight: '1.5'
    }
  }

  const steps = [
    {
      number: "1",
      title: "Consultation & Design",
      description: "Free site assessment, design concepts, 3D visualization, and detailed project planning"
    },
    {
      number: "2",
      title: "Approval & Permits",
      description: "Dubai Municipality approvals, NOC processing, and permit acquisition"
    },
    {
      number: "3",
      title: "Demolition & Construction",
      description: "Safe demolition, structural work, MEP installations, and construction"
    },
    {
      number: "4",
      title: "Finishing & Handover",
      description: "Interior finishing, quality inspection, client walkthrough, and after-service support"
    }
  ]

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>Our Villa Renovation Process</h2>
          <p style={styles.subtitle}>
            A systematic approach ensuring quality, transparency, and timely delivery for your villa transformation
          </p>
        </div>

        <div style={styles.steps}>
          {steps.map((step, index) => (
            <div 
              key={index}
              style={styles.step}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.12)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = styles.step.boxShadow
              }}
            >
              <div style={styles.stepNumber}>{step.number}</div>
              <h3 style={styles.stepTitle}>{step.title}</h3>
              <p style={styles.stepDescription}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
