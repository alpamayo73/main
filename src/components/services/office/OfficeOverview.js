// src/components/services/office/OfficeOverview.js
import { useState, useEffect } from 'react'

export default function OfficeOverview() {
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
      backgroundImage: 'url(https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  }

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.grid}>
          <div style={styles.content}>
            <h2 style={styles.title}>Professional Workspace Solutions</h2>
            <p style={styles.text}>
              Our office renovation services in Dubai are designed to create workspaces that inspire 
              productivity, foster collaboration, and reflect your corporate identity. We understand 
              that your office environment directly impacts business performance and employee satisfaction.
            </p>
            
            <p style={styles.text}>
              From startups to corporate headquarters, we transform commercial spaces into functional, 
              modern work environments that support your business goals and enhance your brand presence 
              in Dubai's competitive market.
            </p>

            <blockquote style={styles.highlight}>
              "Your office should be more than just a workplace - it should be a strategic asset that 
              drives business success and attracts top talent."
            </blockquote>

            <p style={styles.text}>
              Serving business districts across Dubai including DIFC, Business Bay, Sheikh Zayed Road, 
              and JLT, we create office spaces that meet the highest standards of functionality and design.
            </p>
          </div>

          <div style={styles.image} />
        </div>
      </div>
    </section>
  )
}
