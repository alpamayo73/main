// components/about/AboutHero.js
import { useState, useEffect } from 'react'

export default function AboutHero() {
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
      marginBottom: '0.5rem'
    },
    statLabel: {
      fontSize: '1rem',
      color: '#CBD5E0',
      fontWeight: '600'
    }
  }

  const stats = [
    { number: '2+', label: 'Years Experience' },
    { number: '70+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    
  ]

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.content}>
          <h1 style={styles.title}>Building Dubai's Future, One Space at a Time</h1>
          <p style={styles.subtitle}>
            For over 8 years, Alpamayo Technical Services has been transforming spaces across Dubai with premium renovation and AC solutions that combine luxury, innovation, and reliability.
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
