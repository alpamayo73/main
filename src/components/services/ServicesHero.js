// components/services/ServicesHero.js
import { useState, useEffect } from 'react'

export default function ServicesHero() {
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
    stats: {
      display: 'grid',
      gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
      gap: '2rem',
      marginTop: '3rem'
    },
    stat: {
      textAlign: 'center'
    },
    statNumber: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: colors.secondary,
      marginBottom: '0.5rem',
      lineHeight: '1'
    },
    statLabel: {
      fontSize: '1rem',
      color: '#CBD5E0',
      fontWeight: '600'
    }
  }

  const stats = [
    { number: '250+', label: 'Projects Completed' },
    { number: '8+', label: 'Years Experience' },
    { number: '180+', label: 'Happy Clients' },
    { number: '45+', label: 'Expert Team' }
  ]

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.content}>
          <h1 style={styles.title}>Premium Services for Dubai's Finest Spaces</h1>
          <p style={styles.subtitle}>
            Transform your living and working environments with our comprehensive renovation 
            and AC solutions. Quality craftsmanship meets innovative design in every project.
          </p>
          
          <div style={styles.stats}>
            {stats.map((stat, index) => (
              <div key={index} style={styles.stat}>
                <div style={styles.statNumber}>{stat.number}</div>
                <div style={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
