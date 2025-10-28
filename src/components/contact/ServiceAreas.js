// components/contact/ServiceAreas.js
import { useState, useEffect } from 'react'

export default function ServiceAreas() {
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
      padding: '5rem 0',
      backgroundColor: colors.white
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
      maxWidth: '600px',
      margin: '0 auto',
      lineHeight: '1.6'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
      gap: '2rem'
    },
    areaGroup: {
      marginBottom: '3rem'
    },
    areaTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: colors.secondary,
      marginBottom: '1.5rem',
      paddingBottom: '0.5rem',
      borderBottom: `2px solid ${colors.secondary}`
    },
    areaList: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    areaItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1rem',
      fontSize: '1.125rem',
      color: colors.primary
    },
    areaIcon: {
      width: '20px',
      height: '20px',
      color: colors.secondary,
      marginRight: '1rem',
      flexShrink: 0
    },
    note: {
      textAlign: 'center',
      marginTop: '3rem',
      padding: '2rem',
      backgroundColor: '#F8FAFC',
      borderRadius: '12px',
      border: `1px solid #E5E7EB`
    },
    noteText: {
      fontSize: '1.125rem',
      color: colors.primary,
      fontWeight: '500',
      margin: 0
    }
  }

  const serviceAreas = {
    "Luxury Communities": [
      "Palm Jumeirah",
      "Emirates Hills",
      "Jumeirah Islands",
      "Al Barari",
      "District One",
      "Dubai Hills"
    ],
    "Downtown & Business": [
      "Downtown Dubai",
      "Business Bay",
      "DIFC",
      "Dubai Marina",
      "JLT",
      "Sheikh Zayed Road"
    ],
    "Residential Areas": [
      "Jumeirah",
      "Umm Suqeim",
      "Al Safa",
      "Al Wasl",
      "Mirdif",
      "Al Barsha"
    ],
    "New Developments": [
      "Dubai Creek Harbour",
      "Dubai South",
      "Al Furjan",
      "Town Square",
      "Jumeirah Village",
      "Sports City"
    ],
    "Commercial Zones": [
      "Al Quoz",
      "Jebel Ali",
      "Dubai Investment Park",
      "Al Qusais",
      "Deira",
      "Bur Dubai"
    ],
    "Northern Emirates": [
      "Sharjah",
      "Ajman",
      "Ras Al Khaimah",
      "Fujairah",
      "Umm Al Quwain",
      "Abu Dhabi"
    ]
  }

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>Areas We Serve</h2>
          <p style={styles.subtitle}>
            Providing premium renovation and AC services across Dubai and the Northern Emirates
          </p>
        </div>

        <div style={styles.grid}>
          {Object.entries(serviceAreas).map(([category, areas], index) => (
            <div key={index} style={styles.areaGroup}>
              <h3 style={styles.areaTitle}>{category}</h3>
              <ul style={styles.areaList}>
                {areas.map((area, areaIndex) => (
                  <li key={areaIndex} style={styles.areaItem}>
                    <svg style={styles.areaIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={styles.note}>
          <p style={styles.noteText}>
            🚚 Free site assessment and quotation for all areas within Dubai. Additional charges may apply for Northern Emirates.
          </p>
        </div>
      </div>
    </section>
  )
}
