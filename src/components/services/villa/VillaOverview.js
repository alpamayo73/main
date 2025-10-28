// src/components/services/villa/VillaOverview.js
import { useState, useEffect } from 'react'

export default function VillaOverview() {
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
      backgroundImage: 'url(https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  }

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.grid}>
          <div style={styles.content}>
            <h2 style={styles.title}>Complete Villa Transformation</h2>
            <p style={styles.text}>
              Our villa renovation services in Dubai are designed to transform your property into a luxury 
              living space that reflects your personality and meets your family's needs. We handle everything 
              from initial design concepts to final execution.
            </p>
            
            <p style={styles.text}>
              Whether you're looking to update a single floor or undertake a complete villa makeover, our team 
              of architects, designers, and craftsmen work together to deliver exceptional results that exceed 
              expectations.
            </p>

            <blockquote style={styles.highlight}>
              "We believe your villa should be more than just a house - it should be your personal sanctuary, 
              reflecting your style and enhancing your lifestyle."
            </blockquote>

            <p style={styles.text}>
              Serving prestigious communities across Dubai including Palm Jumeirah, Emirates Hills, 
              Jumeirah Islands, and Al Barari, we bring luxury villa renovations to life with precision 
              and attention to detail.
            </p>
          </div>

          <div style={styles.image} />
        </div>
      </div>
    </section>
  )
}
