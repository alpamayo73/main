// components/services/ProcessOverview.js
import { useState, useEffect } from 'react'

export default function ProcessOverview() {
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
      padding: '2rem 1rem'
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
      title: "Consultation",
      description: "Free site assessment and detailed project discussion to understand your requirements"
    },
    {
      number: "2",
      title: "Design & Quote",
      description: "3D design visualization and transparent pricing with no hidden costs"
    },
    {
      number: "3",
      title: "Execution",
      description: "Professional implementation with regular updates and quality control"
    },
    {
      number: "4",
      title: "Handover",
      description: "Final inspection, client walkthrough, and after-service support"
    }
  ]

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>Our Simple Process</h2>
          <p style={styles.subtitle}>
            From initial consultation to final handover, we make your project journey smooth and transparent
          </p>
        </div>

        <div style={styles.steps}>
          {steps.map((step, index) => (
            <div key={index} style={styles.step}>
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
