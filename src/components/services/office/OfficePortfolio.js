// src/components/services/office/OfficePortfolio.js
import { useState, useEffect } from 'react'

export default function OfficePortfolio() {
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
    project: {
      backgroundColor: colors.white,
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
      border: `1px solid #E5E7EB`,
      transition: 'all 0.3s ease'
    },
    projectImage: {
      height: '250px',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    },
    projectContent: {
      padding: '1.5rem'
    },
    projectLocation: {
      color: colors.secondary,
      fontSize: '0.875rem',
      fontWeight: '600',
      marginBottom: '0.5rem',
      textTransform: 'uppercase'
    },
    projectTitle: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: colors.primary,
      marginBottom: '0.5rem'
    },
    projectDescription: {
      fontSize: '0.875rem',
      color: '#6B7280',
      lineHeight: '1.5'
    }
  }

  const projects = [
    {
      title: "Tech Startup Office",
      location: "DIFC",
      description: "Open-plan collaborative workspace with modern tech integration",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Corporate Headquarters",
      location: "Business Bay",
      description: "Executive offices with premium finishes and boardroom facilities",
      image: "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Legal Firm Offices",
      location: "Sheikh Zayed Road",
      description: "Professional environment with client meeting rooms and library",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ]

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>Recent Office Projects</h2>
          <p style={styles.subtitle}>
            Explore our portfolio of office renovations across Dubai's premier business districts
          </p>
        </div>

        <div style={styles.grid}>
          {projects.map((project, index) => (
            <div 
              key={index}
              style={styles.project}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.12)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = styles.project.boxShadow
              }}
            >
              <div 
                style={{
                  ...styles.projectImage,
                  backgroundImage: `url(${project.image})`
                }}
              />
              <div style={styles.projectContent}>
                <div style={styles.projectLocation}>{project.location}</div>
                <h3 style={styles.projectTitle}>{project.title}</h3>
                <p style={styles.projectDescription}>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
