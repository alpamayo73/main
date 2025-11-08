// src/components/home/Stats.js
import { useState, useEffect, useRef } from 'react'

export default function Stats() {
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
    team: 0
  })

  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const targetValues = {
      projects: 70,
      clients: 50,
      experience: 2,
      
    }

    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    const animateCounters = () => {
      let currentStep = 0

      const timer = setInterval(() => {
        currentStep++
        const progress = currentStep / steps

        setCounters({
          projects: Math.floor(targetValues.projects * progress),
          clients: Math.floor(targetValues.clients * progress),
          experience: Math.floor(targetValues.experience * progress),
          team: Math.floor(targetValues.team * progress)
        })

        if (currentStep >= steps) {
          clearInterval(timer)
        }
      }, stepDuration)
    }

    animateCounters()
  }, [isVisible])

  // Your brand colors
  const colors = {
    primary: '#1C2734',
    secondary: '#577D8E',
    white: '#FFFFFF'
  }

  const styles = {
    section: {
      padding: '5rem 0',
      backgroundColor: colors.primary,
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
    header: {
      textAlign: 'center',
      marginBottom: '4rem'
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: colors.white
    },
    subtitle: {
      fontSize: '1.25rem',
      color: '#CBD5E0',
      maxWidth: '42rem',
      margin: '0 auto',
      lineHeight: '1.6'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '2rem',
      marginBottom: '4rem'
    },
    statCard: {
      textAlign: 'center',
      padding: '2rem 1rem',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '12px',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'all 0.3s ease'
    },
    statNumber: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: colors.secondary,
      marginBottom: '0.5rem',
      lineHeight: '1'
    },
    statLabel: {
      fontSize: '1.125rem',
      color: '#CBD5E0',
      fontWeight: '600'
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(1, 1fr)',
      gap: '1.5rem'
    },
    featureCard: {
      display: 'flex',
      alignItems: 'center',
      padding: '2rem',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '12px',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'all 0.3s ease'
    },
    featureIcon: {
      width: '4rem',
      height: '4rem',
      backgroundColor: colors.secondary,
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '1.5rem',
      flexShrink: 0
    },
    featureContent: {
      flex: '1'
    },
    featureTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '0.5rem',
      color: colors.white
    },
    featureDescription: {
      fontSize: '1rem',
      color: '#CBD5E0',
      lineHeight: '1.5'
    },
    backgroundPattern: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0.03,
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    }
  }

  // Media queries
  useEffect(() => {
    const updateStyles = () => {
      if (window.innerWidth >= 768) {
        styles.statsGrid.gridTemplateColumns = 'repeat(4, 1fr)'
        styles.featuresGrid.gridTemplateColumns = 'repeat(3, 1fr)'
        styles.featureCard.flexDirection = 'column'
        styles.featureCard.textAlign = 'center'
        styles.featureIcon.marginRight = '0'
        styles.featureIcon.marginBottom = '1rem'
      } else {
        styles.statsGrid.gridTemplateColumns = 'repeat(2, 1fr)'
        styles.featuresGrid.gridTemplateColumns = 'repeat(1, 1fr)'
        styles.featureCard.flexDirection = 'row'
        styles.featureCard.textAlign = 'left'
        styles.featureIcon.marginRight = '1.5rem'
        styles.featureIcon.marginBottom = '0'
      }
    }

    updateStyles()
    window.addEventListener('resize', updateStyles)
    return () => window.removeEventListener('resize', updateStyles)
  }, [])

  const features = [
    {
      icon: (
        <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Premium Quality",
      description: "Using only the finest materials and latest technology"
    },
    {
      icon: (
        <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Timely Delivery",
      description: "We respect your time and deliver projects on schedule"
    },
    {
      icon: (
        <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "24/7 Support",
      description: "Round-the-clock customer service and maintenance"
    }
  ]

  const stats = [
    { number: counters.projects, suffix: '+', label: 'Projects Completed' },
    { number: counters.clients, suffix: '+', label: 'Happy Clients' },
    { number: counters.experience, suffix: '+', label: 'Years Experience' },
    
  ]

  return (
    <section ref={sectionRef} style={styles.section}>
      {/* Background Pattern */}
      <div style={styles.backgroundPattern} />
      
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <h2 style={styles.title}>Why Choose Alpamayo?</h2>
          <p style={styles.subtitle}>
            Trusted by Dubai's elite for premium renovation and AC services with unmatched quality and reliability
          </p>
        </div>

        {/* Stats Grid */}
        <div style={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div 
              key={index} 
              style={styles.statCard}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.backgroundColor = styles.statCard.backgroundColor
              }}
            >
              <div style={styles.statNumber}>
                {stat.number}{stat.suffix}
              </div>
              <div style={styles.statLabel}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div style={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div 
              key={index}
              style={styles.featureCard}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.backgroundColor = styles.featureCard.backgroundColor
              }}
            >
              <div style={styles.featureIcon}>
                {feature.icon}
              </div>
              <div style={styles.featureContent}>
                <h3 style={styles.featureTitle}>
                  {feature.title}
                </h3>
                <p style={styles.featureDescription}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
