
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function OtherServices() {
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
      backgroundColor: '#FFFFFF'
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
      marginBottom: '1rem',
      textTransform: 'uppercase'
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
      height: '100%',
      textDecoration: 'none',
      display: 'block',
      color: 'inherit'
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

  const otherServices = [
    {
      title: "Tiles Installation",
      description: "Professional tile installation services for floors, walls, and outdoor spaces. Premium materials and precision craftsmanship for beautiful, durable results.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: [
        "Floor and wall tiling",
        "Premium tile materials",
        "Pattern and mosaic work",
        "Waterproof installation",
        "Professional grouting",
        "Quality guarantee"
      ],
      link: "/services/tiles-installation"
    },
    {
      title: "False Ceiling & Partitions",
      description: "Expert false ceiling and partition solutions for modern interiors. Enhance your space with gypsum, PVC, and glass partition installations.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: [
        "Gypsum false ceilings",
        "Glass partitions",
        "PVC ceiling solutions",
        "Acoustic panels",
        "Custom designs",
        "Professional installation"
      ],
      link: "/services/false-ceiling-partitions"
    },
    {
      title: "Painting Services",
      description: "Professional interior and exterior painting services. Transform your spaces with premium paints and expert color consultation.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: [
        "Interior painting",
        "Exterior painting",
        "Color consultation",
        "Premium paint brands",
        "Surface preparation",
        "Clean finish guarantee"
      ],
      link: "/services/painting"
    },
    {
      title: "Carpentry Services",
      description: "Custom carpentry and woodwork solutions. From furniture to cabinets, we create beautiful and functional wooden pieces for your space.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: [
        "Custom furniture",
        "Kitchen cabinets",
        "Wardrobe solutions",
        "Wooden doors & windows",
        "Repair & restoration",
        "Premium wood materials"
      ],
      link: "/services/carpentry"
    },
    {
      title: "Electrical Services",
      description: "Certified electrical services for residential and commercial properties. Safe and reliable electrical solutions by qualified electricians.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: [
        "Electrical wiring",
        "Lighting solutions",
        "Panel upgrades",
        "Safety inspections",
        "Emergency repairs",
        "DEWA compliance"
      ],
      link: "/services/electrical"
    },
    {
      title: "Air Conditioning",
      description: "Complete AC solutions including installation, maintenance, and repair services. Keep your space cool and comfortable year-round.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: [
        "AC installation",
        "Regular maintenance",
        "Emergency repairs",
        "Gas charging",
        "Duct cleaning",
        "All brands service"
      ],
      link: "/services/air-conditioning"
    },
    {
      title: "Handyman Services",
      description: "Reliable handyman services for all your home needs. Moving help, furniture assembly, heavy lifting, and general home maintenance.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: [
        "Home moving assistance",
        "Furniture assembly",
        "Heavy lifting",
        "Mounting & installation",
        "General repairs",
        "Same-day service"
      ],
      link: "/services/handyman"
    }
  ]

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>OTHER SERVICES</h2>
          <p style={styles.subtitle}>
            Comprehensive home and commercial services to meet all your needs in Dubai. 
            Quality workmanship and professional service guaranteed.
          </p>
        </div>

        <div style={styles.grid}>
          {otherServices.map((service, index) => (
            <Link 
              key={index}
              href={service.link}
              style={styles.card}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.12)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)'
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

                <div 
                  style={styles.button}
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
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
