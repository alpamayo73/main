// src/components/home/LuxuryServices.js
import { useState, useEffect } from 'react'

export default function LuxuryServices() {
  const [activeService, setActiveService] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const services = [
    {
      icon: (
        <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: "Villa Renovation",
      description: "Transform your villa into a luxury retreat with our premium renovation services. We specialize in creating bespoke living spaces that reflect your style and meet your family's needs.",
      features: ["Custom Design Solutions", "Premium Materials", "Smart Home Integration", "Landscaping Services"],
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      startingPrice: "AED 150,000"
    },
    {
      icon: (
        <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Apartment Renovation",
      description: "Maximize space and luxury in your apartment with innovative design solutions. Perfect for modern urban living in Dubai's prestigious towers.",
      features: ["Space Optimization", "Modern Finishes", "Storage Solutions", "Quality Assurance"],
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      startingPrice: "AED 50,000"
    },
    {
      icon: (
        <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Office Renovation",
      description: "Create inspiring workspaces that boost productivity and reflect your brand identity. From startups to corporate headquarters in Dubai.",
      features: ["Ergonomic Design", "Brand Integration", "Professional Finish", "Technology Integration"],
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      startingPrice: "AED 80,000"
    }
  ]

  // Your brand colors
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
      maxWidth: '42rem',
      margin: '0 auto',
      lineHeight: '1.6'
    },
    // Mobile View
    mobileContainer: {
      display: isMobile ? 'block' : 'none'
    },
    mobileServices: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem'
    },
    mobileServiceCard: {
      backgroundColor: colors.white,
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
      border: '1px solid #E5E7EB',
      transition: 'all 0.3s ease'
    },
    mobileServiceContent: {
      padding: '1.5rem'
    },
    mobileServiceHeader: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1rem'
    },
    mobileServiceIcon: {
      width: '60px',
      height: '60px',
      backgroundColor: colors.secondary,
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '1rem',
      flexShrink: 0
    },
    mobileServiceTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: colors.primary,
      margin: 0
    },
    mobileServicePrice: {
      fontSize: '1.125rem',
      color: colors.secondary,
      fontWeight: '600',
      margin: '0.25rem 0 0 0'
    },
    mobileServiceDescription: {
      color: '#6B7280',
      lineHeight: '1.6',
      marginBottom: '1.5rem'
    },
    mobileFeaturesList: {
      listStyle: 'none',
      padding: 0,
      margin: '0 0 1.5rem 0'
    },
    mobileFeatureItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '0.75rem',
      fontSize: '0.875rem',
      color: colors.primary
    },
    mobileFeatureIcon: {
      width: '16px',
      height: '16px',
      color: colors.secondary,
      marginRight: '0.75rem',
      flexShrink: 0
    },
    mobileCtaButton: {
      width: '100%',
      backgroundColor: colors.secondary,
      color: colors.white,
      padding: '1rem',
      borderRadius: '8px',
      border: 'none',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    // Desktop View
    desktopContainer: {
      display: isMobile ? 'none' : 'block'
    },
    desktopNavigation: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: '#F3F4F6',
      borderRadius: '12px',
      padding: '0.5rem',
      marginBottom: '3rem',
      gap: '0.5rem'
    },
    desktopNavButton: {
      padding: '1rem 2rem',
      borderRadius: '8px',
      border: 'none',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      flex: 1,
      maxWidth: '250px'
    },
    desktopActiveService: {
      backgroundColor: colors.white,
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
      border: `1px solid #E5E7EB`
    },
    desktopServiceGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      minHeight: '500px'
    },
    desktopServiceInfo: {
      padding: '3rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    desktopServiceHeader: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '2rem'
    },
    desktopServiceIcon: {
      width: '80px',
      height: '80px',
      backgroundColor: colors.secondary,
      borderRadius: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '1.5rem',
      flexShrink: 0
    },
    desktopServiceTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: colors.primary,
      margin: '0 0 0.5rem 0'
    },
    desktopServicePrice: {
      fontSize: '1.5rem',
      color: colors.secondary,
      fontWeight: 'bold',
      margin: 0
    },
    desktopServiceDescription: {
      fontSize: '1.125rem',
      color: '#6B7280',
      lineHeight: '1.6',
      marginBottom: '2rem'
    },
    desktopFeaturesList: {
      listStyle: 'none',
      padding: 0,
      margin: '0 0 2rem 0'
    },
    desktopFeatureItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1rem',
      fontSize: '1rem',
      color: colors.primary
    },
    desktopFeatureIcon: {
      width: '20px',
      height: '20px',
      color: colors.secondary,
      marginRight: '1rem',
      flexShrink: 0
    },
    desktopCtaButtons: {
      display: 'flex',
      gap: '1rem'
    },
    desktopPrimaryButton: {
      backgroundColor: colors.secondary,
      color: colors.white,
      padding: '1rem 2rem',
      borderRadius: '8px',
      border: 'none',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      flex: 1
    },
    desktopSecondaryButton: {
      backgroundColor: 'transparent',
      color: colors.secondary,
      padding: '1rem 2rem',
      borderRadius: '8px',
      border: `2px solid ${colors.secondary}`,
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      flex: 1
    },
    desktopServiceImage: {
      backgroundImage: `url(${services[activeService].image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      position: 'relative'
    },
    imageOverlay: {
      position: 'absolute',
      bottom: '2rem',
      left: '2rem',
      right: '2rem',
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      borderRadius: '12px',
      padding: '1.5rem',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)'
    },
    overlayTitle: {
      fontSize: '1.125rem',
      fontWeight: 'bold',
      color: colors.primary,
      marginBottom: '0.5rem'
    },
    overlayText: {
      fontSize: '0.875rem',
      color: '#6B7280',
      lineHeight: '1.5',
      margin: 0
    },
    // Bottom CTA
    bottomCta: {
      textAlign: 'center',
      marginTop: '4rem',
      backgroundColor: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
      background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
      borderRadius: '20px',
      padding: '3rem 2rem',
      color: colors.white
    },
    bottomCtaTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: colors.white
    },
    bottomCtaText: {
      fontSize: '1.125rem',
      color: 'rgba(255, 255, 255, 0.9)',
      marginBottom: '2rem',
      maxWidth: '600px',
      marginLeft: 'auto',
      marginRight: 'auto',
      lineHeight: '1.6'
    },
    bottomCtaButton: {
      backgroundColor: colors.white,
      color: colors.primary,
      padding: '1rem 2.5rem',
      borderRadius: '8px',
      border: 'none',
      fontSize: '1.125rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
    }
  }

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <h2 style={styles.title}>Luxury Services</h2>
          <p style={styles.subtitle}>
            Premium renovation solutions tailored for Dubai's most discerning clients
          </p>
        </div>

        {/* Mobile View */}
        <div style={styles.mobileContainer}>
          <div style={styles.mobileServices}>
            {services.map((service, index) => (
              <div 
                key={index}
                style={styles.mobileServiceCard}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.12)'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = styles.mobileServiceCard.boxShadow
                }}
              >
                <div style={styles.mobileServiceContent}>
                  <div style={styles.mobileServiceHeader}>
                    <div style={styles.mobileServiceIcon}>
                      <div style={{ color: colors.white }}>
                        {service.icon}
                      </div>
                    </div>
                    <div>
                      <h3 style={styles.mobileServiceTitle}>{service.title}</h3>
                      <p style={styles.mobileServicePrice}>From {service.startingPrice}</p>
                    </div>
                  </div>
                  
                  <p style={styles.mobileServiceDescription}>{service.description}</p>
                  
                  <ul style={styles.mobileFeaturesList}>
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} style={styles.mobileFeatureItem}>
                        <svg style={styles.mobileFeatureIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    style={styles.mobileCtaButton}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = colors.primary
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = colors.secondary
                    }}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop View */}
        <div style={styles.desktopContainer}>
          {/* Navigation */}
          <div style={styles.desktopNavigation}>
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveService(index)}
                style={{
                  ...styles.desktopNavButton,
                  backgroundColor: activeService === index ? colors.secondary : 'transparent',
                  color: activeService === index ? colors.white : colors.primary,
                  transform: activeService === index ? 'scale(1.02)' : 'none'
                }}
                onMouseOver={(e) => {
                  if (activeService !== index) {
                    e.target.style.backgroundColor = 'rgba(87, 125, 142, 0.1)'
                  }
                }}
                onMouseOut={(e) => {
                  if (activeService !== index) {
                    e.target.style.backgroundColor = 'transparent'
                  }
                }}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Active Service Content */}
          <div style={styles.desktopActiveService}>
            <div style={styles.desktopServiceGrid}>
              {/* Service Info */}
              <div style={styles.desktopServiceInfo}>
                <div style={styles.desktopServiceHeader}>
                  <div style={styles.desktopServiceIcon}>
                    <div style={{ color: colors.white }}>
                      {services[activeService].icon}
                    </div>
                  </div>
                  <div>
                    <h3 style={styles.desktopServiceTitle}>{services[activeService].title}</h3>
                    <p style={styles.desktopServicePrice}>Starting from {services[activeService].startingPrice}</p>
                  </div>
                </div>

                <p style={styles.desktopServiceDescription}>
                  {services[activeService].description}
                </p>

                <ul style={styles.desktopFeaturesList}>
                  {services[activeService].features.map((feature, featureIndex) => (
                    <li key={featureIndex} style={styles.desktopFeatureItem}>
                      <svg style={styles.desktopFeatureIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div style={styles.desktopCtaButtons}>
                  <button 
                    style={styles.desktopPrimaryButton}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = colors.primary
                      e.target.style.transform = 'translateY(-2px)'
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = colors.secondary
                      e.target.style.transform = 'translateY(0)'
                    }}
                  >
                    Get Free Quote
                  </button>
                  <button 
                    style={styles.desktopSecondaryButton}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = colors.secondary
                      e.target.style.color = colors.white
                      e.target.style.transform = 'translateY(-2px)'
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = 'transparent'
                      e.target.style.color = colors.secondary
                      e.target.style.transform = 'translateY(0)'
                    }}
                  >
                    View Projects
                  </button>
                </div>
              </div>

              {/* Service Image */}
              <div style={styles.desktopServiceImage}>
                <div style={styles.imageOverlay}>
                  <h4 style={styles.overlayTitle}>Premium Service Includes</h4>
                  <p style={styles.overlayText}>
                    Free consultation, 3D design visualization, and comprehensive project management
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div style={styles.bottomCta}>
          <h3 style={styles.bottomCtaTitle}>Not Sure Which Service You Need?</h3>
          <p style={styles.bottomCtaText}>
            Our experts will assess your space and recommend the perfect solution for your needs and budget
          </p>
          <button 
            style={styles.bottomCtaButton}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#F3F4F6'
              e.target.style.transform = 'translateY(-2px)'
              e.target.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)'
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = colors.white
              e.target.style.transform = 'translateY(0)'
              e.target.style.boxShadow = styles.bottomCtaButton.boxShadow
            }}
          >
            Get Professional Advice
          </button>
        </div>
      </div>
    </section>
  )
}
