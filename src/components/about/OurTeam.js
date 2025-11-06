// components/about/OurTeam.js
import { useState, useEffect } from 'react'

export default function OurTeam() {
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
    grid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: '4rem',
      alignItems: 'center'
    },
    imageContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    image: {
      width: isMobile ? '300px' : '400px',
      height: isMobile ? '300px' : '400px',
      borderRadius: '50%',
      objectFit: 'cover',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
      border: `4px solid ${colors.white}`,
      outline: `2px solid ${colors.secondary}`
    },
    content: {
      padding: isMobile ? '0' : '0 0 0 2rem'
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: colors.primary,
      marginBottom: '1.5rem'
    },
    name: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: colors.primary,
      marginBottom: '0.5rem'
    },
    role: {
      fontSize: '1.125rem',
      color: colors.secondary,
      fontWeight: '600',
      marginBottom: '2rem'
    },
    message: {
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

  const founder = {
    name: "Naseem Saher",
    role: "Founder & CEO",
    message: "With over 5 years in construction and renovation, I founded Alpamayo Technical Services with a simple vision: to bring unparalleled craftsmanship and innovative solutions to Dubai's luxury market. Our commitment to excellence has been the cornerstone of our growth from a small boutique service to a comprehensive technical solutions provider.",
    quote: "Every project is a partnership. We don't just build spaces - we bring our clients' visions to life with precision, quality, and a personal touch that sets us apart."
  }

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.grid}>
          <div style={styles.imageContainer}>
            <img 
              src="/images/ceo-profile.png" 
              alt="Naseem Saher - Founder & CEO of Alpamayo Technical Services"
              style={styles.image}
              onError={(e) => {
                // Fallback image if the specified image doesn't exist
                e.target.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
              }}
            />
          </div>
          
          <div style={styles.content}>
            <h2 style={styles.title}>Meet our Founder & CEO</h2>
            <h3 style={styles.name}>{founder.name}</h3>
            <p style={styles.role}>{founder.role}</p>
            
            <p style={styles.message}>
              {founder.message}
            </p>
            
            <blockquote style={styles.highlight}>
              "{founder.quote}"
            </blockquote>
            
            <p style={styles.message}>
              Under {founder.name.split(' ')[0]}'s leadership, we've grown to serve clients across Dubai's most prestigious communities while maintaining the personal attention and quality that defined our first projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
