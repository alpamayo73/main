// src/components/home/ContactPreview.js
import { useState, useEffect } from 'react'

export default function ContactPreview() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry! We will contact you within 24 hours.')
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    })
  }

  // Your brand colors
  const colors = {
    primary: '#1C2734',
    secondary: '#577D8E',
    white: '#FFFFFF'
  }

  const styles = {
    section: {
      padding: '5rem 0',
      background: 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)'
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
    grid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: '3rem',
      alignItems: 'start'
    },
    // Contact Information
    contactInfo: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem'
    },
    infoHeader: {
      marginBottom: '1rem'
    },
    infoTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: colors.primary,
      marginBottom: '1rem'
    },
    infoDescription: {
      fontSize: '1.125rem',
      color: '#6B7280',
      lineHeight: '1.6'
    },
    contactMethods: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: '1rem'
    },
    contactMethod: {
      backgroundColor: colors.white,
      borderRadius: '12px',
      padding: '1.5rem',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
      border: '1px solid #E5E7EB',
      transition: 'all 0.3s ease'
    },
    methodHeader: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1rem'
    },
    methodIcon: {
      width: '48px',
      height: '48px',
      backgroundColor: colors.secondary,
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '1rem',
      flexShrink: 0
    },
    methodTitle: {
      fontSize: '1.125rem',
      fontWeight: 'bold',
      color: colors.primary,
      margin: '0 0 0.25rem 0'
    },
    methodValue: {
      fontSize: '1rem',
      color: colors.secondary,
      fontWeight: '600',
      margin: 0
    },
    methodDescription: {
      fontSize: '0.875rem',
      color: '#6B7280',
      margin: 0
    },
    // Additional Info
    additionalInfo: {
      backgroundColor: colors.primary,
      borderRadius: '16px',
      padding: '2rem',
      color: colors.white
    },
    additionalTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '1.5rem',
      color: colors.white
    },
    additionalList: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    additionalItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1rem',
      fontSize: '1rem'
    },
    additionalIcon: {
      width: '20px',
      height: '20px',
      color: colors.secondary,
      marginRight: '1rem',
      flexShrink: 0
    },
    // Contact Form
    contactForm: {
      backgroundColor: colors.white,
      borderRadius: '20px',
      padding: isMobile ? '2rem' : '3rem',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
      border: '1px solid #E5E7EB'
    },
    formTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: colors.primary,
      marginBottom: '0.5rem'
    },
    formSubtitle: {
      fontSize: '1rem',
      color: '#6B7280',
      marginBottom: '2rem'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem'
    },
    formRow: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: '1rem'
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    },
    label: {
      fontSize: '0.875rem',
      fontWeight: '600',
      color: colors.primary
    },
    input: {
      padding: '1rem',
      borderRadius: '8px',
      border: '1px solid #D1D5DB',
      fontSize: '1rem',
      color: colors.primary,
      transition: 'all 0.3s ease',
      outline: 'none'
    },
    select: {
      padding: '1rem',
      borderRadius: '8px',
      border: '1px solid #D1D5DB',
      fontSize: '1rem',
      color: colors.primary,
      backgroundColor: colors.white,
      transition: 'all 0.3s ease',
      outline: 'none'
    },
    textarea: {
      padding: '1rem',
      borderRadius: '8px',
      border: '1px solid #D1D5DB',
      fontSize: '1rem',
      color: colors.primary,
      resize: 'vertical',
      minHeight: '120px',
      transition: 'all 0.3s ease',
      outline: 'none',
      fontFamily: 'inherit'
    },
    submitButton: {
      backgroundColor: colors.secondary,
      color: colors.white,
      padding: '1.25rem 2rem',
      borderRadius: '8px',
      border: 'none',
      fontSize: '1.125rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 12px rgba(87, 125, 142, 0.2)'
    },
    privacyText: {
      textAlign: 'center',
      fontSize: '0.875rem',
      color: '#6B7280',
      marginTop: '1rem'
    }
  }

  const contactMethods = [
    {
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone",
      value: "+971589071754",
      description: "24/7 customer support"
    },
    {
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      value: "info@thealpamayo.com",
      description: "Quick response guaranteed"
    },
    {
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Address",
      value: "Al Qouz, Dubai, UAE",
      description: "Visit our office"
    },
    {
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Working Hours",
      value: "24/7",
      description: "AC services available"
    }
  ]

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <h2 style={styles.title}>Ready to Transform Your Space?</h2>
          <p style={styles.subtitle}>
            Contact us today for a free consultation and let's bring your vision to life with our premium renovation and AC services in Dubai
          </p>
        </div>

        <div style={styles.grid}>
          {/* Contact Information */}
          <div style={styles.contactInfo}>
            <div style={styles.infoHeader}>
              <h3 style={styles.infoTitle}>Get In Touch</h3>
              <p style={styles.infoDescription}>
                Our team of experts is ready to discuss your project and provide you with the best solutions for your renovation and AC needs in Dubai.
              </p>
            </div>

            {/* Contact Methods */}
            <div style={styles.contactMethods}>
              {contactMethods.map((method, index) => (
                <div 
                  key={index}
                  style={styles.contactMethod}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)'
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = styles.contactMethod.boxShadow
                  }}
                >
                  <div style={styles.methodHeader}>
                    <div style={styles.methodIcon}>
                      <div style={{ color: colors.white }}>
                        {method.icon}
                      </div>
                    </div>
                    <div>
                      <h4 style={styles.methodTitle}>{method.title}</h4>
                      <p style={styles.methodValue}>{method.value}</p>
                    </div>
                  </div>
                  <p style={styles.methodDescription}>{method.description}</p>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div style={styles.additionalInfo}>
              <h4 style={styles.additionalTitle}>Why Choose Us?</h4>
              <ul style={styles.additionalList}>
                <li style={styles.additionalItem}>
                  <svg style={styles.additionalIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Free consultation and site assessment
                </li>
                <li style={styles.additionalItem}>
                  <svg style={styles.additionalIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Transparent pricing with no hidden costs
                </li>
                <li style={styles.additionalItem}>
                  <svg style={styles.additionalIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Professional team with years of experience
                </li>
                <li style={styles.additionalItem}>
                  <svg style={styles.additionalIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Quality guarantee and after-service support
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div style={styles.contactForm}>
            <h3 style={styles.formTitle}>Free Consultation</h3>
            <p style={styles.formSubtitle}>
              Fill out the form below and our expert will contact you within 24 hours
            </p>
            
            <form onSubmit={handleSubmit} style={styles.form}>
              <div style={styles.formRow}>
                <div style={styles.formGroup}>
                  <label htmlFor="firstName" style={styles.label}>
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    style={styles.input}
                    placeholder="John"
                    onFocus={(e) => {
                      e.target.style.borderColor = colors.secondary
                      e.target.style.boxShadow = `0 0 0 3px rgba(87, 125, 142, 0.1)`
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#D1D5DB'
                      e.target.style.boxShadow = 'none'
                    }}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label htmlFor="lastName" style={styles.label}>
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    style={styles.input}
                    placeholder="Doe"
                    onFocus={(e) => {
                      e.target.style.borderColor = colors.secondary
                      e.target.style.boxShadow = `0 0 0 3px rgba(87, 125, 142, 0.1)`
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#D1D5DB'
                      e.target.style.boxShadow = 'none'
                    }}
                  />
                </div>
              </div>

              <div style={styles.formGroup}>
                <label htmlFor="email" style={styles.label}>
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  style={styles.input}
                  placeholder="john@example.com"
                  onFocus={(e) => {
                    e.target.style.borderColor = colors.secondary
                    e.target.style.boxShadow = `0 0 0 3px rgba(87, 125, 142, 0.1)`
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#D1D5DB'
                    e.target.style.boxShadow = 'none'
                  }}
                />
              </div>

              <div style={styles.formGroup}>
                <label htmlFor="phone" style={styles.label}>
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  style={styles.input}
                  placeholder="+971 50 123 4567"
                  onFocus={(e) => {
                    e.target.style.borderColor = colors.secondary
                    e.target.style.boxShadow = `0 0 0 3px rgba(87, 125, 142, 0.1)`
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#D1D5DB'
                    e.target.style.boxShadow = 'none'
                  }}
                />
              </div>

              <div style={styles.formGroup}>
                <label htmlFor="service" style={styles.label}>
                  Service Interested In *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  style={styles.select}
                  onFocus={(e) => {
                    e.target.style.borderColor = colors.secondary
                    e.target.style.boxShadow = `0 0 0 3px rgba(87, 125, 142, 0.1)`
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#D1D5DB'
                    e.target.style.boxShadow = 'none'
                  }}
                >
                  <option value="">Select a service</option>
                  <option value="villa">Villa Renovation</option>
                  <option value="apartment">Apartment Renovation</option>
                  <option value="office">Office Renovation</option>
                  <option value="ac">AC Services</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div style={styles.formGroup}>
                <label htmlFor="message" style={styles.label}>
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  style={styles.textarea}
                  placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                  onFocus={(e) => {
                    e.target.style.borderColor = colors.secondary
                    e.target.style.boxShadow = `0 0 0 3px rgba(87, 125, 142, 0.1)`
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#D1D5DB'
                    e.target.style.boxShadow = 'none'
                  }}
                />
              </div>

              <button
                type="submit"
                style={styles.submitButton}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = colors.primary
                  e.target.style.transform = 'translateY(-2px)'
                  e.target.style.boxShadow = '0 8px 20px rgba(28, 39, 52, 0.3)'
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = colors.secondary
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.boxShadow = styles.submitButton.boxShadow
                }}
              >
                Request Free Consultation
              </button>

              <p style={styles.privacyText}>
                We respect your privacy and will never share your information
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
