// components/contact/MapLocation.js
import { useState, useEffect } from 'react'

export default function MapLocation() {
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
    grid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: '4rem',
      alignItems: 'start'
    },
    map: {
      height: '400px',
      backgroundColor: '#F3F4F6',
      borderRadius: '16px',
      overflow: 'hidden',
      position: 'relative'
    },
    mapPlaceholder: {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#E5E7EB',
      color: '#6B7280',
      fontSize: '1.125rem',
      fontWeight: '500'
    },
    info: {
      padding: isMobile ? '0' : '0 0 0 2rem'
    },
    title: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: colors.primary,
      marginBottom: '1.5rem'
    },
    address: {
      fontSize: '1.25rem',
      color: colors.secondary,
      fontWeight: '600',
      marginBottom: '2rem',
      lineHeight: '1.5'
    },
    details: {
      marginBottom: '2rem'
    },
    detail: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1rem',
      fontSize: '1.125rem',
      color: colors.primary
    },
    detailIcon: {
      width: '20px',
      height: '20px',
      color: colors.secondary,
      marginRight: '1rem',
      flexShrink: 0
    },
    buttons: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      gap: '1rem',
      marginTop: '2rem'
    },
    button: {
      flex: 1,
      padding: '1rem 2rem',
      borderRadius: '8px',
      border: 'none',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textAlign: 'center',
      textDecoration: 'none',
      display: 'inline-block'
    },
    primaryButton: {
      backgroundColor: colors.secondary,
      color: colors.white
    },
    secondaryButton: {
      backgroundColor: 'transparent',
      color: colors.secondary,
      border: `2px solid ${colors.secondary}`
    },
    directions: {
      marginTop: '2rem',
      padding: '1.5rem',
      backgroundColor: '#F8FAFC',
      borderRadius: '12px',
      border: `1px solid #E5E7EB`
    },
    directionsTitle: {
      fontSize: '1.125rem',
      fontWeight: 'bold',
      color: colors.primary,
      marginBottom: '0.5rem'
    },
    directionsText: {
      fontSize: '1rem',
      color: '#6B7280',
      lineHeight: '1.5',
      margin: 0
    }
  }

  const openGoogleMaps = () => {
    const address = "Al Qouz, Dubai, United Arab Emirates"
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
    window.open(url, '_blank')
  }

  const openWaze = () => {
    const address = "Al Qouz, Dubai, United Arab Emirates"
    const url = `https://www.waze.com/ul?q=${encodeURIComponent(address)}`
    window.open(url, '_blank')
  }

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.grid}>
          {/* Map */}
          <div style={styles.map}>
            <div style={styles.mapPlaceholder}>
              📍 Interactive Map - Al Qouz, Dubai
            </div>
          </div>

          {/* Location Info */}
          <div style={styles.info}>
            <h2 style={styles.title}>Visit Our Office</h2>
            <div style={styles.address}>
              Al Qouz Industrial Area<br />
              Dubai, United Arab Emirates
            </div>

            <div style={styles.details}>
              <div style={styles.detail}>
                <svg style={styles.detailIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Monday - Saturday: 8:00 AM - 6:00 PM</span>
              </div>
              <div style={styles.detail}>
                <svg style={styles.detailIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+971589071754 (24/7 Emergency)</span>
              </div>
              <div style={styles.detail}>
                <svg style={styles.detailIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@thealpamayo.com</span>
              </div>
            </div>

            <div style={styles.buttons}>
              <button 
                style={{...styles.button, ...styles.primaryButton}}
                onClick={openGoogleMaps}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = colors.primary
                  e.target.style.transform = 'translateY(-2px)'
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = colors.secondary
                  e.target.style.transform = 'translateY(0)'
                }}
              >
                📍 Open in Google Maps
              </button>
              <button 
                style={{...styles.button, ...styles.secondaryButton}}
                onClick={openWaze}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = colors.secondary
                  e.target.style.color = colors.white
                  e.target.style.transform = 'translateY(-2px)'
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'transparent'
                  e.target.style.color = colors.secondary
                  e.target.style.transform = 'translateY(0)'
                }}
              >
                🚗 Open in Waze
              </button>
            </div>

            <div style={styles.directions}>
              <h4 style={styles.directionsTitle}>Getting Here</h4>
              <p style={styles.directionsText}>
                Our office is located in Al Qouz Industrial Area, easily accessible from Sheikh Zayed Road and Mohammed Bin Zayed Road. 
                Ample parking available. Look for the Alpamayo Technical Services signage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
