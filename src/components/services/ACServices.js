// components/services/ACServices.js
import { useState, useEffect } from 'react'

export default function ACServices() {
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

  const acServices = [
    {
      title: "VRF AC Systems",
      description: "Advanced Variable Refrigerant Flow systems for large spaces with multiple zones. Perfect for villas, offices, and commercial buildings requiring precise temperature control.",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: [
        "Multi-zone temperature control",
        "Energy efficient operation",
        "Quiet performance",
        "Smart control systems",
        "Professional installation",
        "Maintenance packages"
      ],
      link: "/services/vrf-ac-systems"
    },
    {
      title: "Split AC Systems",
      description: "Reliable and efficient split air conditioning systems for individual rooms and small spaces. Ideal for apartments, offices, and residential use across Dubai.",
      image: "https://images.unsplash.com/photo-1577717909415-0a9c871b6e1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: [
        "Energy star rated units",
        "Quick installation",
        "Regular maintenance",
        "Emergency repairs",
        "Smart thermostat options",
        "Warranty support"
      ],
      link: "/services/split-ac-systems"
    },
    {
      title: "Water Chiller FCU",
      description: "Central water chiller systems with fan coil units for large commercial and residential buildings. Efficient cooling solution for Dubai's climate.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: [
        "Central cooling systems",
        "Commercial grade equipment",
        "Energy efficient operation",
        "Professional installation",
        "24/7 maintenance",
        "System optimization"
      ],
      link: "/services/water-chiller-fcu"
    }
  ]

  const navigateToService = (link) => {
    window.location.href = link
  }

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>AC Services</h2>
          <p style={styles.subtitle}>
            Professional air conditioning solutions for Dubai's climate. 
            From installation to maintenance, we keep your spaces comfortable year-round.
          </p>
        </div>

        <div style={styles.grid}>
          {acServices.map((service, index) => (
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
