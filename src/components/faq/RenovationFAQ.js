// components/faq/RenovationFAQ.js
import { useState, useEffect } from 'react'

export default function RenovationFAQ() {
  const [isMobile, setIsMobile] = useState(false)
  const [openIndex, setOpenIndex] = useState(null)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
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
      maxWidth: '800px',
      margin: '0 auto',
      padding: '0 1rem'
    },
    header: {
      textAlign: 'center',
      marginBottom: '3rem'
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
      lineHeight: '1.6'
    },
    faqList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    },
    faqItem: {
      backgroundColor: colors.white,
      borderRadius: '12px',
      border: `1px solid #E5E7EB`,
      overflow: 'hidden',
      transition: 'all 0.3s ease'
    },
    faqQuestion: {
      padding: '1.5rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      cursor: 'pointer',
      backgroundColor: colors.white,
      transition: 'background-color 0.3s ease'
    },
    faqQuestionText: {
      fontSize: '1.125rem',
      fontWeight: '600',
      color: colors.primary,
      margin: 0,
      flex: 1
    },
    faqIcon: {
      width: '20px',
      height: '20px',
      color: colors.secondary,
      transition: 'transform 0.3s ease',
      flexShrink: 0,
      marginLeft: '1rem'
    },
    faqAnswer: {
      padding: '0 2rem',
      maxHeight: '0',
      overflow: 'hidden',
      transition: 'all 0.3s ease'
    },
    faqAnswerOpen: {
      padding: '0 2rem 1.5rem',
      maxHeight: '1000px'
    },
    faqAnswerText: {
      fontSize: '1rem',
      color: '#6B7280',
      lineHeight: '1.6',
      margin: 0
    },
    highlight: {
      backgroundColor: colors.secondary,
      color: colors.white,
      padding: '0.5rem 1rem',
      borderRadius: '4px',
      fontSize: '0.875rem',
      fontWeight: '600',
      display: 'inline-block',
      margin: '0.5rem 0'
    }
  }

  const faqs = [
    {
      question: "How long does a complete villa renovation take?",
      answer: "A complete villa renovation typically takes 8-12 weeks depending on the size and scope. This includes design approval, material procurement, demolition, construction, finishing, and final inspections. We provide detailed project timelines during the consultation phase."
    },
    {
      question: "Do you handle permits and approvals from Dubai Municipality?",
      answer: "Yes, we manage the entire permit process including NOC from neighbors (if required), Dubai Municipality approvals, and DEWA connections. Our team is experienced with Dubai's regulations and ensures all work is compliant with local building codes."
    },
    {
      question: "Can I stay in my home during renovation?",
      answer: "For minor renovations, it's often possible to stay in the property. For major renovations, we recommend temporary relocation for safety and comfort. We can coordinate the project in phases to minimize disruption and provide guidance on what to expect during each stage."
    },
    {
      question: "What types of materials do you use?",
      answer: "We use premium quality materials from trusted suppliers. This includes German and Italian kitchen fixtures, premium flooring options (marble, hardwood, porcelain), energy-efficient windows, and smart home systems. We provide material samples and options at different price points during the design phase."
    },
    {
      question: "Do you offer design services?",
      answer: "Yes, we provide comprehensive design services including 3D visualization, space planning, material selection, and lighting design. Our design team works closely with you to create spaces that reflect your style while ensuring functionality and maximizing your investment."
    },
    {
      question: "What's the difference between villa, apartment, and office renovation?",
      answer: "Villa renovations often involve structural changes, outdoor spaces, and multiple floors. Apartment renovations focus on space optimization within fixed boundaries and require building management approvals. Office renovations prioritize functionality, branding, and employee comfort with minimal business disruption."
    }
  ]

  return (
    <section id="renovation-services" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>Renovation Services</h2>
          <p style={styles.subtitle}>
            Everything you need to know about our villa, apartment, and office renovation services
          </p>
        </div>

        <div style={styles.faqList}>
          {faqs.map((faq, index) => (
            <div 
              key={index}
              style={styles.faqItem}
              onMouseOver={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div 
                style={styles.faqQuestion}
                onClick={() => toggleFAQ(index)}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#F8FAFC'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = colors.white
                }}
              >
                <h3 style={styles.faqQuestionText}>{faq.question}</h3>
                <svg 
                  style={{
                    ...styles.faqIcon,
                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0)'
                  }}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div 
                style={{
                  ...styles.faqAnswer,
                  ...(openIndex === index && styles.faqAnswerOpen)
                }}
              >
                <p style={styles.faqAnswerText}>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
