// src/components/home/Testimonials.js
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const testimonials = [
    {
      id: 1,
      name: "Ahmed Al Maktoum",
      role: "Villa Owner, Emirates Hills",
      content: "Alpamayo transformed our villa into a modern masterpiece. Their attention to detail and premium finishes exceeded our expectations. The team was professional and delivered on time.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "CEO, Tech Innovations",
      content: "The office renovation was completed on time and within budget. The team's professionalism and quality of work is exceptional. Our employees love the new workspace!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      name: "Mohammed Hassan",
      role: "Apartment Owner, Downtown Dubai",
      content: "Outstanding AC installation service. The VRF system works perfectly and has significantly reduced our energy costs. 24/7 support is a game-changer in Dubai's climate.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
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
      background: `linear-gradient(135deg, ${colors.primary} 0%, #2D3748 100%)`,
      color: colors.white,
      position: 'relative'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem',
      position: 'relative',
      zIndex: 2
    },
    header: {
      textAlign: 'center',
      marginBottom: '4rem'
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: colors.white
    },
    subtitle: {
      fontSize: '1.25rem',
      color: '#CBD5E0',
      maxWidth: '42rem',
      margin: '0 auto',
      lineHeight: '1.6'
    },
    testimonialContainer: {
      maxWidth: '900px',
      margin: '0 auto',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      borderRadius: '20px',
      padding: isMobile ? '2rem' : '3rem',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
    },
    testimonialContent: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: 'center',
      gap: isMobile ? '2rem' : '3rem'
    },
    clientImage: {
      flexShrink: 0,
      width: isMobile ? '80px' : '100px',
      height: isMobile ? '80px' : '100px',
      borderRadius: '50%',
      overflow: 'hidden',
      border: `3px solid ${colors.secondary}`,
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)'
    },
    testimonialText: {
      flex: 1,
      textAlign: isMobile ? 'center' : 'left'
    },
    stars: {
      display: 'flex',
      justifyContent: isMobile ? 'center' : 'flex-start',
      gap: '0.25rem',
      marginBottom: '1.5rem'
    },
    quote: {
      fontSize: isMobile ? '1.125rem' : '1.25rem',
      lineHeight: '1.6',
      fontStyle: 'italic',
      marginBottom: '2rem',
      color: '#E2E8F0'
    },
    clientInfo: {
      textAlign: isMobile ? 'center' : 'left'
    },
    clientName: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      marginBottom: '0.5rem',
      color: colors.white
    },
    clientRole: {
      fontSize: '1rem',
      color: colors.secondary,
      fontWeight: '600'
    },
    navigation: {
      display: 'flex',
      justifyContent: 'center',
      gap: '0.75rem',
      marginTop: '3rem'
    },
    dot: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
      gap: '1.5rem',
      marginTop: '4rem'
    },
    statCard: {
      textAlign: 'center',
      padding: '1.5rem',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '12px',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'all 0.3s ease'
    },
    statNumber: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: colors.secondary,
      marginBottom: '0.5rem'
    },
    statLabel: {
      fontSize: '0.875rem',
      color: '#CBD5E0',
      fontWeight: '600'
    }
  }

  const stats = [
    { number: '98%', label: 'Client Satisfaction' },
    { number: '250+', label: 'Projects Completed' },
    { number: '24/7', label: 'Support Available' },
    { number: '5★', label: 'Average Rating' }
  ]

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <h2 style={styles.title}>What Our Clients Say</h2>
          <p style={styles.subtitle}>
            Trusted by Dubai's elite for premium renovation and AC services
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div style={styles.testimonialContainer}>
          <div style={styles.testimonialContent}>
            {/* Client Image */}
            <div style={styles.clientImage}>
              <Image
                src={testimonials[activeTestimonial].image}
                alt={testimonials[activeTestimonial].name}
                width={100}
                height={100}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Testimonial Text */}
            <div style={styles.testimonialText}>
              <div style={styles.stars}>
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="currentColor" style={{ color: '#FBBF24' }}>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote style={styles.quote}>
                "{testimonials[activeTestimonial].content}"
              </blockquote>

              <div style={styles.clientInfo}>
                <h4 style={styles.clientName}>{testimonials[activeTestimonial].name}</h4>
                <p style={styles.clientRole}>{testimonials[activeTestimonial].role}</p>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div style={styles.navigation}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                style={{
                  ...styles.dot,
                  backgroundColor: index === activeTestimonial ? colors.secondary : 'rgba(255, 255, 255, 0.3)',
                  transform: index === activeTestimonial ? 'scale(1.2)' : 'scale(1)'
                }}
                onMouseOver={(e) => {
                  if (index !== activeTestimonial) {
                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'
                  }
                }}
                onMouseOut={(e) => {
                  if (index !== activeTestimonial) {
                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'
                  }
                }}
              />
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div style={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div 
              key={index}
              style={styles.statCard}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.backgroundColor = styles.statCard.backgroundColor
              }}
            >
              <div style={styles.statNumber}>{stat.number}</div>
              <div style={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
