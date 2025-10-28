// components/contact/ContactForm.js
import { useState, useEffect } from 'react'

export default function ContactForm() {
  const [isMobile, setIsMobile] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your inquiry! We will contact you within 24 hours.')
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: ''
      })
      setIsSubmitting(false)
    }, 2000)
  }

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
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '0 1rem'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: '4rem',
      alignItems: 'start'
    },
    header: {
      marginBottom: '2rem'
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: colors.primary,
      marginBottom: '1rem'
    },
    subtitle: {
      fontSize: '1.125rem',
      color: '#6B7280',
      lineHeight: '1.6'
    },
    benefits: {
      marginTop: '2rem'
    },
    benefit: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1rem',
      fontSize: '1rem',
      color: colors.primary
    },
    benefitIcon: {
      width: '20px',
      height: '20px',
      color: colors.secondary,
      marginRight: '1rem',
      flexShrink: 0
    },
    form: {
      backgroundColor: colors.white,
      padding: '3rem',
      borderRadius: '20px',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
      border: `1px solid #E5E7EB`
    },
    formTitle: {
      fontSize: '1.75rem',
      fontWeight: 'bold',
      color: colors.primary,
      marginBottom: '0.5rem'
    },
    formSubtitle: {
      fontSize: '1rem',
      color: '#6B7280',
      marginBottom: '2rem'
    },
    formGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1rem',
      marginBottom: '1.5rem'
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      marginBottom: '1.5rem'
    },
    fullWidth: {
      gridColumn: '1 / -1'
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
      outline: 'none',
      backgroundColor: colors.white
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
      width: '100%',
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
    disabledButton: {
      opacity: 0.6,
      cursor: 'not-allowed'
    }
  }

  const services = [
    'Villa Renovation',
    'Apartment Renovation',
    'Office Renovation',
    'VRF AC System',
    'Split AC Installation',
    'Water Chiller AC',
    'AC Maintenance',
    'Other'
  ]

  const projectTypes = [
    'New Construction',
    'Complete Renovation',
    'Partial Renovation',
    'Kitchen Remodel',
    'Bathroom Remodel',
    'AC Installation',
    'AC Repair',
    'Emergency Service'
  ]

  const budgets = [
    'Under AED 50,000',
    'AED 50,000 - 100,000',
    'AED 100,000 - 250,000',
    'AED 250,000 - 500,000',
    'AED 500,000+'
  ]

  const timelines = [
    'Immediately',
    'Within 1 month',
    '1-3 months',
    '3-6 months',
    '6+ months'
  ]

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.grid}>
          {/* Left Side - Information */}
          <div>
            <div style={styles.header}>
              <h2 style={styles.title}>Get Your Free Consultation</h2>
              <p style={styles.subtitle}>
                Fill out the form and our experts will provide you with a detailed quote and professional advice for your project.
              </p>
            </div>

            <div style={styles.benefits}>
              <div style={styles.benefit}>
                <svg style={styles.benefitIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Free site assessment and consultation
              </div>
              <div style={styles.benefit}>
                <svg style={styles.benefitIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Detailed project timeline and cost breakdown
              </div>
              <div style={styles.benefit}>
                <svg style={styles.benefitIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                3D design visualization for renovation projects
              </div>
              <div style={styles.benefit}>
                <svg style={styles.benefitIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                No obligation - 100% transparent pricing
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div style={styles.form}>
            <h3 style={styles.formTitle}>Project Inquiry Form</h3>
            <p style={styles.formSubtitle}>Please provide your project details for accurate pricing</p>

            <form onSubmit={handleSubmit}>
              <div style={styles.formGrid}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    style={styles.input}
                    placeholder="John"
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    style={styles.input}
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div style={styles.formGrid}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    style={styles.input}
                    placeholder="john@example.com"
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    style={styles.input}
                    placeholder="+971 50 123 4567"
                  />
                </div>
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Service Needed *</label>
                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  style={styles.select}
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Project Type *</label>
                <select
                  name="projectType"
                  required
                  value={formData.projectType}
                  onChange={handleChange}
                  style={styles.select}
                >
                  <option value="">Select project type</option>
                  {projectTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div style={styles.formGrid}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Estimated Budget *</label>
                  <select
                    name="budget"
                    required
                    value={formData.budget}
                    onChange={handleChange}
                    style={styles.select}
                  >
                    <option value="">Select budget range</option>
                    {budgets.map((budget, index) => (
                      <option key={index} value={budget}>{budget}</option>
                    ))}
                  </select>
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Timeline *</label>
                  <select
                    name="timeline"
                    required
                    value={formData.timeline}
                    onChange={handleChange}
                    style={styles.select}
                  >
                    <option value="">Select timeline</option>
                    {timelines.map((timeline, index) => (
                      <option key={index} value={timeline}>{timeline}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Project Details</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  style={styles.textarea}
                  placeholder="Please describe your project requirements, specific needs, and any other relevant details..."
                />
              </div>

              <button
                type="submit"
                style={{
                  ...styles.submitButton,
                  ...(isSubmitting && styles.disabledButton)
                }}
                disabled={isSubmitting}
                onMouseOver={(e) => {
                  if (!isSubmitting) {
                    e.target.style.backgroundColor = colors.primary
                    e.target.style.transform = 'translateY(-2px)'
                    e.target.style.boxShadow = '0 8px 20px rgba(28, 39, 52, 0.3)'
                  }
                }}
                onMouseOut={(e) => {
                  if (!isSubmitting) {
                    e.target.style.backgroundColor = colors.secondary
                    e.target.style.transform = 'translateY(0)'
                    e.target.style.boxShadow = styles.submitButton.boxShadow
                  }
                }}
              >
                {isSubmitting ? 'Submitting...' : 'Get Free Quote & Consultation'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
