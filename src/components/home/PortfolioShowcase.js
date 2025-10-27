// src/components/home/PortfolioShowcase.js
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function PortfolioShowcase() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [isMobile, setIsMobile] = useState(false)
  
  const projects = [
    {
      id: 1,
      title: "Luxury Villa Renovation",
      category: "villa",
      location: "Palm Jumeirah",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Complete modern transformation with smart home integration"
    },
    {
      id: 2,
      title: "Executive Office Space",
      category: "office",
      location: "DIFC",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Corporate office redesign for international tech company"
    },
    {
      id: 3,
      title: "Penthouse Apartment",
      category: "apartment",
      location: "Downtown Dubai",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Luxury penthouse renovation with premium Italian finishes"
    },
    {
      id: 4,
      title: "Modern Villa Makeover",
      category: "villa",
      location: "Emirates Hills",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Contemporary villa renovation with outdoor living space"
    },
    {
      id: 5,
      title: "Commercial Office",
      category: "office",
      location: "Business Bay",
      image: "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Complete office space transformation for growing business"
    },
    {
      id: 6,
      title: "Luxury Apartment",
      category: "apartment",
      location: "Dubai Marina",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Premium apartment renovation with sea views"
    }
  ]

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  // Your brand colors
  const colors = {
    primary: '#1C2734',
    secondary: '#577D8E',
    white: '#FFFFFF'
  }

  const styles = {
    section: {
      padding: '4rem 0',
      backgroundColor: colors.white
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem'
    },
    header: {
      textAlign: 'center',
      marginBottom: '3rem'
    },
    title: {
      fontSize: '2.25rem',
      fontWeight: 'bold',
      color: colors.primary,
      marginBottom: '1rem'
    },
    subtitle: {
      fontSize: '1.125rem',
      color: '#6B7280',
      maxWidth: '42rem',
      margin: '0 auto',
      lineHeight: '1.6'
    },
    filterContainer: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '0.5rem',
      marginBottom: '3rem'
    },
    filterButton: {
      padding: '0.75rem 1.5rem',
      borderRadius: '9999px',
      fontSize: '0.875rem',
      fontWeight: '600',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textTransform: 'capitalize'
    },
    filterButtonActive: {
      backgroundColor: colors.secondary,
      color: colors.white,
      transform: 'scale(1.05)'
    },
    filterButtonInactive: {
      backgroundColor: '#F3F4F6',
      color: '#374151'
    },
    grid: {
      display: 'grid',
      gap: '2rem',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)'
    },
    card: {
      backgroundColor: colors.white,
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
      border: '1px solid #E5E7EB',
      transition: 'all 0.3s ease',
      height: '100%'
    },
    imageContainer: {
      position: 'relative',
      width: '100%',
      height: '250px'
    },
    categoryBadge: {
      position: 'absolute',
      top: '1rem',
      left: '1rem',
      backgroundColor: colors.secondary,
      color: colors.white,
      padding: '0.5rem 1rem',
      borderRadius: '20px',
      fontSize: '0.75rem',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    },
    cardContent: {
      padding: '1.5rem'
    },
    location: {
      color: colors.secondary,
      fontSize: '0.875rem',
      fontWeight: '600',
      marginBottom: '0.5rem',
      display: 'block'
    },
    cardTitle: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: colors.primary,
      marginBottom: '0.75rem',
      lineHeight: '1.4'
    },
    cardDescription: {
      color: '#6B7280',
      fontSize: '0.875rem',
      marginBottom: '1.5rem',
      lineHeight: '1.5'
    },
    viewButton: {
      color: colors.secondary,
      fontWeight: '600',
      fontSize: '0.875rem',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0',
      transition: 'color 0.3s ease'
    },
    ctaContainer: {
      textAlign: 'center',
      marginTop: '3rem'
    },
    ctaButton: {
      backgroundColor: colors.secondary,
      color: colors.white,
      padding: '1rem 2.5rem',
      borderRadius: '8px',
      border: 'none',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 12px rgba(87, 125, 142, 0.2)'
    }
  }

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <h2 style={styles.title}>Our Premium Projects</h2>
          <p style={styles.subtitle}>
            Discover our exceptional renovation projects that redefine luxury living in Dubai's most prestigious locations
          </p>
        </div>

        {/* Filter Buttons */}
        <div style={styles.filterContainer}>
          {['all', 'villa', 'apartment', 'office'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              style={{
                ...styles.filterButton,
                ...(activeFilter === filter ? styles.filterButtonActive : styles.filterButtonInactive)
              }}
              onMouseOver={(e) => {
                if (activeFilter !== filter) {
                  e.target.style.backgroundColor = '#E5E7EB'
                  e.target.style.transform = 'scale(1.05)'
                }
              }}
              onMouseOut={(e) => {
                if (activeFilter !== filter) {
                  e.target.style.backgroundColor = styles.filterButtonInactive.backgroundColor
                  e.target.style.transform = 'scale(1)'
                }
              }}
            >
              {filter === 'all' ? 'All Projects' : 
               filter === 'villa' ? 'Villas' :
               filter === 'apartment' ? 'Apartments' : 'Offices'}
            </button>
          ))}
        </div>

        {/* Projects Grid - 3 columns */}
        <div style={styles.grid}>
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              style={styles.card}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = styles.card.boxShadow
              }}
            >
              {/* Image Container */}
              <div style={styles.imageContainer}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div style={styles.categoryBadge}>
                  {project.category}
                </div>
              </div>
              
              {/* Content */}
              <div style={styles.cardContent}>
                <span style={styles.location}>
                  {project.location}
                </span>
                <h3 style={styles.cardTitle}>
                  {project.title}
                </h3>
                <p style={styles.cardDescription}>
                  {project.description}
                </p>
                <button 
                  style={styles.viewButton}
                  onMouseOver={(e) => {
                    e.target.style.color = colors.primary
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color = colors.secondary
                  }}
                >
                  View Project
                  <svg style={{ width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div style={styles.ctaContainer}>
          <button 
            style={styles.ctaButton}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = colors.primary
              e.target.style.transform = 'translateY(-2px)'
              e.target.style.boxShadow = '0 8px 20px rgba(28, 39, 52, 0.3)'
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = colors.secondary
              e.target.style.transform = 'translateY(0)'
              e.target.style.boxShadow = styles.ctaButton.boxShadow
            }}
          >
            View All Projects
          </button>
        </div>
      </div>
    </section>
  )
}
