// components/contact/FAQ.js
import { useState, useEffect } from 'react'

export default function FAQ() {
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
      transition: 'all 0.3s ease',
      backgroundColor: '#F8FAFC'
    },
    faqAnswerOpen: {
      padding: '0 2rem 1.5rem',
      maxHeight: '500px'
    },
    faqAnswerText: {
      fontSize: '1rem',
      color: '#6B7280',
      lineHeight: '1.6',
      margin: 0
    },
    contactPrompt: {
      textAlign: 'center',
      marginTop: '3rem',
      padding: '2rem',
      backgroundColor: colors.primary,
      borderRadius: '16px',
      color: colors.white
    },
    promptTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem'
    },
    promptText: {
      fontSize: '1.125rem',
      color: '#CBD5E0',
      marginBottom: '1.5rem'
    },
    promptButton: {
      backgroundColor: colors.secondary,
      color: colors.white,
      padding: '1rem 2rem',
      borderRadius: '8px',
      border: 'none',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    }
  }

  const faqs = [
    {
      question: "How long does a typical villa renovation take?",
      answer: "The duration depends on the scope of work. A complete villa renovation typically takes 8-12 weeks, while partial renovations can be completed in 4-6 weeks. We provide detailed timelines during the consultation phase."
    },
    {
      question: "Do you provide free consultations and quotes?",
      answer: "Yes, we offer free site assessments and detailed quotes with no obligation. Our experts will visit your property, understand your requirements, and provide a comprehensive proposal including costs and timelines."
    },
    {
      question: "What types of AC systems do you install and maintain?",
      answer: "We specialize in VRF systems, split AC units, water chiller FCU systems, and central air conditioning. We provide installation, maintenance, and repair services for all major brands including Daikin, LG, Mitsubishi, and Carrier."
    },
    {
      question: "Are your technicians licensed and insured?",
      answer: "Absolutely. All our technicians are certified, licensed, and fully insured. We maintain the highest standards of professionalism and safety in all our operations across Dubai."
    },
    {
      question: "Do you offer emergency AC repair services?",
      answer: "Yes, we provide 24/7 emergency AC repair services, especially crucial during Dubai's summer months. Our emergency team can typically reach you within 2 hours for urgent repairs."
    },
    {
      question: "What warranty do you offer on your work?",
      answer: "We offer a 2-year warranty on all renovation work and a 1-year warranty on AC installations. Additionally, we provide extended warranty options for AC systems through manufacturer partnerships."
    },
    {
      question: "Can you work within my budget?",
      answer: "Yes, we work with budgets of all sizes. We provide transparent pricing and can suggest alternatives to meet your budget while maintaining quality. Our projects range from AED 5,000 to AED 5,000,000+."
    },
    {
      question: "Do you handle permits and approvals for renovations?",
      answer: "Yes, we manage the entire permit process with Dubai Municipality and relevant authorities. Our team handles all documentation and approvals, making the process seamless for our clients."
    }
  ]

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>Frequently Asked Questions</h2>
          <p style={styles.subtitle}>
            Find answers to common questions about our renovation and AC services in Dubai
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

        <div style={styles.contactPrompt}>
          <h3 style={styles.promptTitle}>Still Have Questions?</h3>
          <p style={styles.promptText}>
            Can't find the answer you're looking for? Our team is here to help with any questions about your project.
          </p>
          <button 
            style={styles.promptButton}
            onClick={() => window.location.href = 'tel:+971589071754'}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = colors.white
              e.target.style.color = colors.primary
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = colors.secondary
              e.target.style.color = colors.white
            }}
          >
            Call Us Now: +971589071754
          </button>
        </div>
      </div>
    </section>
  )
}
