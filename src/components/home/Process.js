// src/components/home/Process.js
import { useState, useEffect } from 'react'

export default function Process() {
  const [activeStep, setActiveStep] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const steps = [
    {
      icon: (
        <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: "Consultation & Planning",
      description: "We begin with a detailed consultation to understand your vision, requirements, and budget. Our experts visit your site to assess the space and provide initial recommendations.",
      features: ["Site Assessment", "Requirement Analysis", "Budget Planning", "Timeline Estimation"]
    },
    {
      icon: (
        <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Design & Proposal",
      description: "Our creative team develops customized designs and 3D visualizations. We provide detailed proposals with transparent pricing and material specifications.",
      features: ["3D Design Visualization", "Material Selection", "Detailed Quotation", "Project Timeline"]
    },
    {
      icon: (
        <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Execution",
      description: "Our skilled professionals execute the project with precision, using premium materials and advanced techniques. We maintain regular communication and provide progress updates.",
      features: ["Quality Workmanship", "Regular Progress Updates", "Premium Materials", "On-time Delivery"]
    },
    {
      icon: (
        <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Final Handover",
      description: "We conduct thorough quality checks and walk you through the completed project. Our after-service support ensures your complete satisfaction.",
      features: ["Quality Inspection", "Client Walkthrough", "Warranty Documentation", "After-Service Support"]
    }
  ]

  // Your brand colors
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
      maxWidth: '42rem',
      margin: '0 auto',
      lineHeight: '1.6'
    },
    // Desktop Layout
    desktopContainer: {
      display: isMobile ? 'none' : 'block'
    },
    stepsNavigation: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '1rem',
      marginBottom: '3rem'
    },
    stepNavButton: {
      padding: '2rem 1rem',
      backgroundColor: colors.white,
      borderRadius: '12px',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textAlign: 'center',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
    },
    stepNavIcon: {
      width: '60px',
      height: '60px',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 1rem',
      transition: 'all 0.3s ease'
    },
    stepNavTitle: {
      fontSize: '1.125rem',
      fontWeight: 'bold',
      marginBottom: '0.5rem',
      color: colors.primary
    },
    stepNavIndicator: {
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      margin: '0 auto',
      transition: 'all 0.3s ease'
    },
    activeStepContent: {
      backgroundColor: colors.white,
      borderRadius: '20px',
      padding: '3rem',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
      border: `1px solid #E5E7EB`
    },
    activeStepGrid: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: '3rem',
      alignItems: 'center'
    },
    stepInfo: {
      flex: 1
    },
    activeStepTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: colors.primary,
      marginBottom: '1.5rem'
    },
    activeStepDescription: {
      fontSize: '1.125rem',
      color: '#6B7280',
      lineHeight: '1.6',
      marginBottom: '2rem'
    },
    featuresList: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    featureItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1rem',
      fontSize: '1rem',
      color: colors.primary
    },
    featureIcon: {
      width: '20px',
      height: '20px',
      color: colors.secondary,
      marginRight: '1rem',
      flexShrink: 0
    },
    stepVisual: {
      textAlign: 'center',
      padding: '2rem',
      background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
      borderRadius: '16px',
      color: colors.white
    },
    stepNumber: {
      fontSize: '4rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: colors.white
    },
    stepLabel: {
      fontSize: '1.25rem',
      fontWeight: '600'
    },
    // Mobile Layout
    mobileContainer: {
      display: isMobile ? 'block' : 'none'
    },
    mobileSteps: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem'
    },
    mobileStep: {
      backgroundColor: colors.white,
      borderRadius: '12px',
      padding: '1.5rem',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
      border: `1px solid #E5E7EB`
    },
    mobileStepHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '1rem'
    },
    mobileStepIcon: {
      width: '50px',
      height: '50px',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      backgroundColor: colors.secondary
    },
    mobileStepTitle: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: colors.primary,
      margin: 0
    },
    mobileStepDescription: {
      color: '#6B7280',
      lineHeight: '1.6',
      marginBottom: '1rem'
    },
    mobileFeaturesList: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    mobileFeatureItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '0.5rem',
      fontSize: '0.875rem',
      color: colors.primary
    },
    ctaContainer: {
      textAlign: 'center',
      marginTop: '4rem'
    },
    ctaButton: {
      backgroundColor: colors.secondary,
      color: colors.white,
      padding: '1rem 2.5rem',
      borderRadius: '8px',
      border: 'none',
      fontSize: '1.125rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 12px rgba(87, 125, 142, 0.2)'
    }
  }

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <h2 style={styles.title}>Our Process</h2>
          <p style={styles.subtitle}>
            A systematic approach that ensures exceptional quality and complete satisfaction for every project in Dubai
          </p>
        </div>

        {/* Desktop View */}
        <div style={styles.desktopContainer}>
          {/* Steps Navigation */}
          <div style={styles.stepsNavigation}>
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                style={{
                  ...styles.stepNavButton,
                  border: activeStep === index ? `2px solid ${colors.secondary}` : '2px solid transparent',
                  transform: activeStep === index ? 'translateY(-4px)' : 'none'
                }}
                onMouseOver={(e) => {
                  if (activeStep !== index) {
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.1)'
                  }
                }}
                onMouseOut={(e) => {
                  if (activeStep !== index) {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = styles.stepNavButton.boxShadow
                  }
                }}
              >
                <div style={{
                  ...styles.stepNavIcon,
                  backgroundColor: activeStep === index ? colors.secondary : '#F3F4F6'
                }}>
                  <div style={{ color: activeStep === index ? colors.white : colors.primary }}>
                    {step.icon}
                  </div>
                </div>
                <div style={styles.stepNavTitle}>{step.title}</div>
                <div style={{
                  ...styles.stepNavIndicator,
                  backgroundColor: activeStep === index ? colors.secondary : '#D1D5DB'
                }} />
              </button>
            ))}
          </div>

          {/* Active Step Content */}
          <div style={styles.activeStepContent}>
            <div style={styles.activeStepGrid}>
              <div style={styles.stepInfo}>
                <h3 style={styles.activeStepTitle}>{steps[activeStep].title}</h3>
                <p style={styles.activeStepDescription}>{steps[activeStep].description}</p>
                <ul style={styles.featuresList}>
                  {steps[activeStep].features.map((feature, index) => (
                    <li key={index} style={styles.featureItem}>
                      <svg style={styles.featureIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={styles.stepVisual}>
                <div style={styles.stepNumber}>{activeStep + 1}</div>
                <div style={styles.stepLabel}>Step {activeStep + 1} of {steps.length}</div>
                <div style={{ marginTop: '1rem', opacity: 0.9 }}>Professional Execution</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div style={styles.mobileContainer}>
          <div style={styles.mobileSteps}>
            {steps.map((step, index) => (
              <div key={index} style={styles.mobileStep}>
                <div style={styles.mobileStepHeader}>
                  <div style={styles.mobileStepIcon}>
                    <div style={{ color: colors.white }}>
                      {step.icon}
                    </div>
                  </div>
                  <h3 style={styles.mobileStepTitle}>{step.title}</h3>
                </div>
                <p style={styles.mobileStepDescription}>{step.description}</p>
                <ul style={styles.mobileFeaturesList}>
                  {step.features.map((feature, featureIndex) => (
                    <li key={featureIndex} style={styles.mobileFeatureItem}>
                      <svg style={styles.featureIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={styles.ctaContainer}>
          <button 
            style={styles.ctaButton}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = colors.primary
              e.target.style.transform = 'translateY(-2px)'
              e.target.style.boxShadow = '0 8px 20px rgba(28, 39, 52, 0.3)'
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = colors.secondary
              e.target.style.transform = 'translateY(0)'
              e.target.style.boxShadow = styles.ctaButton.boxShadow
            }}
          >
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  )
}
