
import { useState, useEffect } from 'react'

export default function GeneralFAQ() {
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
    }
  }

  const faqs = [
    {
      question: "What areas in Dubai do you serve?",
      answer: "We serve all areas across Dubai including Palm Jumeirah, Emirates Hills, Downtown Dubai, Dubai Marina, Jumeirah, Al Barsha, Mirdif, and all other communities. We also provide services in the Northern Emirates with additional travel charges."
    },
    {
      question: "Are your technicians licensed and insured?",
      answer: "Yes, all our technicians are certified, licensed by Dubai Municipality, and fully insured. We maintain the highest standards of professionalism and safety in all our operations. Our team undergoes regular training to stay updated with the latest technologies and safety protocols."
    },
    {
      question: "Do you offer emergency services?",
      answer: "Yes, we provide 24/7 emergency services for AC repairs and urgent renovation issues. Our emergency team can typically reach you within 2 hours for critical situations, especially during Dubai's extreme summer months when AC failures require immediate attention."
    },
    {
      question: "What are your working hours?",
      answer: "Our standard office hours are Monday to Saturday, 8:00 AM to 6:00 PM. However, we provide 24/7 emergency AC services. For renovation projects, we work according to agreed schedules that may include evenings or weekends to minimize disruption to your daily routine."
    },
    {
      question: "How long has Alpamayo been in business?",
      answer: "Alpamayo Technical Services was established in 2016 and has been serving Dubai's residential and commercial clients for over 8 years. We have completed 250+ projects and built a reputation for quality and reliability in the Dubai market."
    }
  ]

  return (
    <section id="general-questions" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>General Questions</h2>
          <p style={styles.subtitle}>
            Common questions about our company, services, and operations in Dubai
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
