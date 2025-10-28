// components/faq/FAQHero.js
import { useState, useEffect } from 'react'

export default function FAQHero() {
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
      padding: '6rem 0 4rem',
      background: `linear-gradient(135deg, ${colors.primary} 0%, #2D3748 100%)`,
      color: colors.white,
      position: 'relative',
      overflow: 'hidden'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem',
      position: 'relative',
      zIndex: 2
    },
    content: {
      textAlign: 'center',
      maxWidth: '800px',
      margin: '0 auto'
    },
    title: {
      fontSize: isMobile ? '2.5rem' : '3.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      lineHeight: '1.2'
    },
    subtitle: {
      fontSize: isMobile ? '1.25rem' : '1.5rem',
      color: '#CBD5E0',
      lineHeight: '1.6',
      marginBottom: '2rem'
    },
    searchBox: {
      maxWidth: '500px',
      margin: '2rem auto 0',
      position: 'relative'
    },
    searchInput: {
      width: '100%',
      padding: '1rem 1rem 1rem 3rem',
      borderRadius: '50px',
      border: 'none',
      fontSize: '1.125rem',
      color: colors.primary,
      outline: 'none',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
    },
    searchIcon: {
      position: 'absolute',
      left: '1rem',
      top: '50%',
      transform: 'translateY(-50%)',
      color: colors.secondary
    },
    categories: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '1rem',
      marginTop: '3rem'
    },
    category: {
      padding: '0.75rem 1.5rem',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '25px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      color: colors.white,
      fontSize: '0.875rem',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    }
  }

  const categories = [
    'General Questions',
    'Renovation Services',
    'AC Services',
    'Pricing & Quotes',
    'Project Process',
    'Warranty & Support'
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.content}>
          <h1 style={styles.title}>Frequently Asked Questions</h1>
          <p style={styles.subtitle}>
            Find comprehensive answers to common questions about our renovation and AC services in Dubai. 
            Can't find what you're looking for? Contact us directly.
          </p>
          
          <div style={styles.searchBox}>
            <input
              type="text"
              placeholder="Search questions..."
              style={styles.searchInput}
            />
            <svg style={styles.searchIcon} width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <div style={styles.categories}>
            {categories.map((category, index) => (
              <button
                key={index}
                style={styles.category}
                onClick={() => scrollToSection(category.toLowerCase().replace(/\s+/g, '-'))}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = colors.secondary
                  e.target.style.transform = 'translateY(-2px)'
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
                  e.target.style.transform = 'translateY(0)'
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
