// components/faq/ACFAQ.js
import { useState, useEffect } from 'react'

export default function ACFAQ() {
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
      backgroundColor: colors.white
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
      backgroundColor: '#F8FAFC',
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
      backgroundColor: '#F8FAFC',
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
    systemType: {
      display: 'inline-block',
      backgroundColor: colors.secondary,
      color: colors.white,
      padding: '0.25rem 0.75rem',
      borderRadius: '4px',
      fontSize: '0.75rem',
      fontWeight: '600',
      marginRight: '0.5rem',
      textTransform: 'uppercase'
    }
  }

  const faqs = [
    {
      question: "What's the difference between VRF, Split AC, and Water Chiller systems?",
      answer: "VRF (Variable Refrigerant Flow) systems are ideal for large spaces with multiple zones, offering precise temperature control and energy efficiency. Split AC systems are perfect for individual rooms or small apartments. Water Chiller FCU systems are best for large commercial buildings with central cooling needs. We'll recommend the best system based on your space and requirements."
    },
    {
      question: "How often should I service my AC system in Dubai?",
      answer: "In Dubai's climate, we recommend AC maintenance every 3-4 months for residential units and every 2-3 months for commercial spaces. Regular maintenance includes cleaning filters, checking refrigerant levels, inspecting electrical components, and ensuring optimal performance. This prevents breakdowns and extends system lifespan."
    },
    {
      question: "What brands of AC systems do you work with?",
      answer: "We work with all major brands including Daikin, Mitsubishi Electric, LG, Carrier, Trane, and York. We're authorized service providers for several brands and can source genuine parts for repairs. During consultation, we'll recommend brands based on your budget, space requirements, and energy efficiency needs."
    },
    {
      question: "Can you install smart AC controls?",
      answer: "Yes, we install smart AC controls that allow you to manage your AC system remotely via smartphone apps. Features include scheduling, temperature zoning, energy usage monitoring, and integration with smart home systems. This can significantly reduce your electricity bills while enhancing comfort."
    },
    {
      question: "What's included in your AC maintenance package?",
      answer: "Our comprehensive maintenance package includes: cleaning indoor and outdoor units, checking refrigerant pressure, cleaning drain lines, inspecting electrical connections, testing thermostat operation, lubricating moving parts, checking insulation, and providing a detailed service report with recommendations."
    },
    {
      question: "How much can I save with a new energy-efficient AC system?",
      answer: "Upgrading to a modern energy-efficient AC system can reduce your electricity consumption by 30-50% compared to older units. The exact savings depend on your usage patterns, building insulation, and the efficiency rating of the new system. We provide energy savings calculations during our consultation to help you make an informed decision."
    }
  ]

  return (
    <section id="ac-services" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>AC Services</h2>
          <p style={styles.subtitle}>
            Expert answers about air conditioning installation, maintenance, and repair in Dubai's climate
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
                  e.currentTarget.style.backgroundColor = colors.white
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#F8FAFC'
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
