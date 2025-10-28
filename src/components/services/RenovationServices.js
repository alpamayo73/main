// components/services/RenovationServices.js
import { useState, useEffect } from 'react'

export default function RenovationServices() {
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
      backgroundColor: '#F8FAFC',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
      border: `1px solid #E5E7EB`,
      transition: 'all 0.3s ease',
      height: '100%'
    },
    image: {
      height: '250px',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    },
    content: {
      padding: '2rem'
    },
    cardTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: colors.primary,
      marginBottom: '1rem'
    },
    cardDescription: {
      fontSize: '1rem',
      color: '#6B7280',
      lineHeight: '1.6',
      marginBottom: '1.5rem'
    },
    features: {
      listStyle: 'none',
      padding: 0,
      margin: '0 0 1.5rem 0'
    },
    feature: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '0.75rem',
      fontSize: '0.875rem',
      color: colors.primary
    },
    featureIcon: {
      width: '16px',
      height: '16px',
      color: colors.secondary,
      marginRight: '0.75rem',
      flexShrink: 0
    },
    button: {
      width: '100%',
      backgroundColor: colors.secondary,
      color: colors.white,
      padding: '1rem 2rem',
      borderRadius: '8px',
      border: 'none',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      display: 'inline-block',
      textAlign: 'center'
    }
  }

  const renovationServices = [
    {
      title: "Villa Renovation",
      description: "Transform your villa into a luxury retreat with our comprehensive renovation services. From structural changes to interior design, we create spaces that reflect your lifestyle.",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: [
        "Complete structural renovation",
        "Luxury interior design",
        "Smart home integration",
        "Landscaping and outdoor spaces",
        "Premium material selection",
        "Project management"
      ],
      link: "/services/villa-renovation"
    },
    {
      title: "Apartment Renovation",
      description: "Maximize space and luxury in your apartment with innovative design solutions. Perfect for modern urban living in Dubai's prestigious towers and communities.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: [
        "Space optimization design",
        "Modern interior finishes",
        "Storage solutions",
        "Kitchen and bathroom remodeling",
        "Lighting design",
        "Quality assurance"
      ],
      link: "/services/apartment-renovation"
    },
    {
      title: "Office Renovation",
      description: "Create inspiring workspaces that boost productivity and reflect your brand identity. From startups to corporate headquarters in Dubai's business districts.",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: [
        "Ergonomic workspace design",
        "Brand integration",
        "Technology infrastructure",
        "Meeting room design",
        "Reception area design",
        "Professional finish"
      ],
      link: "/services/office-renovation"
    }
  ]

  const navigateToService = (link) => {
    window.location.href = link
  }

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>Renovation Services</h2>
          <p style={styles.subtitle}>
            Comprehensive renovation solutions for villas, apartments, and offices across Dubai. 
            Quality craftsmanship meets innovative design.
          </p>
        </div>

        <div style={styles.grid}>
          {renovationServices.map((service, index) => (
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
                  backgroundImage: `url(${service.image})`
                }}
              />
              <div style={styles.content}>
                <h3 style={styles.cardTitle}>{service.title}</h3>
                <p style={styles.cardDescription}>{service.description}</p>
                
                <ul style={styles.features}>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} style={styles.feature}>
                      <svg style={styles.featureIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button 
                  style={styles.button}
                  onClick={() => navigateToService(service.link)}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = colors.primary
                    e.target.style.transform = 'translateY(-2px)'
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = colors.secondary
                    e.target.style.transform = 'translateY(0)'
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
