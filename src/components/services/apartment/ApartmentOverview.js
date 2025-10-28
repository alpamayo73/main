// src/components/services/apartment/ApartmentOverview.js
import { useState, useEffect } from 'react'

export default function ApartmentOverview() {
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
    grid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: '4rem',
      alignItems: 'center'
    },
    content: {
      padding: isMobile ? '0' : '0 2rem 0 0'
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: colors.primary,
      marginBottom: '1.5rem'
    },
    text: {
      fontSize: '1.125rem',
      color: '#6B7280',
      lineHeight: '1.7',
      marginBottom: '1.5rem'
    },
    highlight: {
      fontSize: '1.25rem',
      color: colors.secondary,
      fontWeight: '600',
      fontStyle: 'italic',
      borderLeft: `4px solid ${colors.secondary}`,
      paddingLeft: '1.5rem',
      margin: '2rem 0',
      lineHeight: '1.6'
    },
    image: {
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
      height: isMobile ? '300px' : '500px',
      backgroundImage: 'url(https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  }

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.grid}>
          <div style={styles.content}>
            <h2 style={styles.title}>Smart Apartment Solutions</h2>
            <p style={styles.text}>
              Our apartment renovation services in Dubai are specifically designed for urban living. 
              We understand the unique challenges of apartment spaces and create solutions that maximize 
              functionality while maintaining aesthetic appeal.
            </p>
            
            <p style={styles.text}>
              From studio apartments to luxury penthouses, we transform compact spaces into comfortable, 
              stylish homes that reflect your personality and meet your lifestyle needs in Dubai's dynamic environment.
            </p>

            <blockquote style={styles.highlight}>
              "In apartment living, every square foot matters. We specialize in creating spaces that feel 
              larger, function better, and inspire daily living."
            </blockquote>

            <p style={styles.text}>
              Serving prestigious towers across Dubai including Downtown, Dubai Marina, JBR, 
              Business Bay, and JLT, we bring innovative apartment renovations to life with precision 
              and creative space planning.
            </p>
          </div>

          <div style={styles.image} />
        </div>
      </div>
    </section>
  )
}
