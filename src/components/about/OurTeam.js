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
    grid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
      gap: '2rem'
    },
    card: {
      backgroundColor: colors.white,
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
      border: `1px solid #E5E7EB`,
      transition: 'all 0.3s ease',
      textAlign: 'center'
    },
    image: {
      height: '250px',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    },
    content: {
      padding: '2rem 1.5rem'
    },
    name: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: colors.primary,
      marginBottom: '0.5rem'
    },
    role: {
      fontSize: '1rem',
      color: colors.secondary,
      fontWeight: '600',
      marginBottom: '1rem'
    },
    bio: {
      fontSize: '0.875rem',
      color: '#6B7280',
      lineHeight: '1.5'
    }
  }

  const team = [
    {
      name: "Ahmed Al Rashid",
      role: "Founder & CEO",
      bio: "With over 15 years in construction and renovation, Ahmed leads our vision for excellence and innovation.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Sarah Johnson",
      role: "Head of Design",
      bio: "Sarah brings 12 years of interior design experience, specializing in luxury residential and commercial spaces.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Mohammed Hassan",
      role: "Technical Director",
      bio: "Mohammed oversees all AC and technical installations with 10+ years of HVAC engineering expertise.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ]

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>Meet Our Leadership Team</h2>
          <p style={styles.subtitle}>
            Experienced professionals dedicated to delivering exceptional results for every client
          </p>
        </div>

        <div style={styles.grid}>
          {team.map((member, index) => (
            <div 
              key={index}
              style={styles.card}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.12)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = styles.card.boxShadow
              }}
            >
              <div 
                style={{
                  ...styles.image,
                  backgroundImage: `url(${member.image})`
                }}
              />
              <div style={styles.content}>
                <h3 style={styles.name}>{member.name}</h3>
                <p style={styles.role}>{member.role}</p>
                <p style={styles.bio}>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
