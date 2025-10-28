// components/faq/ProcessFAQ.js
import { useState, useEffect } from 'react'

export default function ProcessFAQ() {
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
    step: {
      fontWeight: '600',
      color: colors.secondary,
      marginBottom: '0.5rem'
    }
  }

  const faqs = [
    {
      question: "What's the process for starting a renovation project?",
      answer: "Our process includes: 1) Free consultation and site assessment, 2) Design development and 3D visualization, 3) Detailed proposal with transparent pricing, 4) Contract signing and permit processing, 5) Project execution with regular updates, 6) Quality inspection and handover, 7) After-service support and warranty."
    },
    {
      question: "How do you ensure project quality and timelines?",
      answer: "We employ project managers who oversee every aspect of your project, conduct regular quality checks, and maintain clear communication. We use project management software to track progress and provide you with weekly updates. Our team follows strict quality control protocols and we build buffer time into schedules to handle any unforeseen issues."
    },
    {
      question: "What payment terms do you offer?",
      answer: "We offer flexible payment terms: 10% deposit upon signing, 25% after design approval, 25% after demolition, 25% during construction, and 15% upon completion and handover. We accept bank transfers, cheques, and credit cards. All payments are clearly outlined in our contract with no hidden costs."
    },
    {
      question: "Do you provide warranty on your work?",
      answer: "Yes, we provide a 2-year warranty on all renovation workmanship and a 1-year warranty on AC installations. Additionally, materials come with manufacturer warranties. We also offer extended warranty options and maintenance packages for ongoing support after project completion."
    },
    {
      question: "How do you handle project changes or additions?",
      answer: "We understand that needs may evolve during a project. We have a clear change order process where any modifications are documented, priced, and approved before implementation. This ensures transparency and prevents surprises in the final bill. Our project managers coordinate all changes efficiently."
    },
    {
      question: "What makes your project management different?",
      answer: "Our project management stands out through: dedicated project managers for each client, regular progress meetings, detailed documentation, quality control checkpoints, and transparent communication. We use advanced project management tools that allow clients to track progress in real-time and communicate directly with the team."
    }
  ]

  return (
    <section id="project-process" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>Project Process & Management</h2>
          <p style={styles.subtitle}>
            Understanding how we manage projects from start to finish with transparency and quality
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
