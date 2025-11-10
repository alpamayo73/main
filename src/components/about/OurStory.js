// components/about/OurStory.js
import { useState, useEffect } from 'react'

export default function OurStory() {
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
    image: {
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
      height: isMobile ? '300px' : '400px',
      backgroundImage: 'url(https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
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
    }
  }

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.grid}>
          <div style={styles.image} />
          
          <div style={styles.content}>
            <h2 style={styles.title}>Our Story</h2>
            <p style={styles.text}>
              Alpamayo Technical Services began as a small team of passionate craftsmen with a vision to redefine luxury living in UAE. What started as a boutique renovation service has grown into a comprehensive technical solutions provider.
            </p>
            
            <p style={styles.text}>
              Our journey began in the heart of Al Qouz, where we delivered our first villa renovation project. The exceptional quality and attention to detail quickly earned us recognition among UAE's discerning residents.
            </p>
            
            <blockquote style={styles.highlight}>
              "We believe that every space tells a story. Our mission is to help you write yours with quality, precision, and luxury."
            </blockquote>
            
            <p style={styles.text}>
              Today, we serve clients across UAE's most prestigious communities, from Palm Jumeirah to Emirates Hills, bringing innovative solutions and unparalleled craftsmanship to every project.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
