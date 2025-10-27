import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <header style={{
      backgroundColor: 'white',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      {/* Top Bar */}
      <div style={{
        backgroundColor: '#1C2734',
        color: 'white',
        padding: '0.4rem 0',
        fontSize: '0.8rem'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '0.4rem' }}>📞</span>
              <span>+971589071754</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '0.4rem' }}>✉️</span>
              <span>info@thealpamayo.com</span>
            </div>
          </div>
          <div>Al Qouz, Dubai, United Arab Emirates</div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '1rem 20px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          {/* Logo */}
          <Link href="/" style={{
            fontSize: '1.4rem',
            fontWeight: 'bold',
            color: '#1C2734',
            textDecoration: 'none'
          }}>
            Alpamayo Technical Services
          </Link>

          {/* Desktop Navigation */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem'
          }}>
            <Link href="/" style={navLinkStyle}>Home</Link>
            <Link href="/about" style={navLinkStyle}>About</Link>
            
            {/* Services Dropdown */}
            <div 
              style={{ position: 'relative' }}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button style={{
                ...navLinkStyle,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem'
              }}>
                Services ▼
              </button>
              
              {servicesOpen && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  backgroundColor: 'white',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
                  borderRadius: '8px',
                  padding: '1rem',
                  minWidth: '200px',
                  zIndex: 1000
                }}>
                  <div style={{ marginBottom: '0.5rem', fontWeight: '600', color: '#1C2734' }}>Renovation</div>
                  <Link href="/services/renovation#villa" style={dropdownLinkStyle}>Villa Renovation</Link>
                  <Link href="/services/renovation#apartment" style={dropdownLinkStyle}>Apartment Renovation</Link>
                  <Link href="/services/renovation#office" style={dropdownLinkStyle}>Office Renovation</Link>
                  
                  <div style={{ margin: '0.5rem 0', borderTop: '1px solid #e5e7eb', paddingTop: '0.5rem', fontWeight: '600', color: '#1C2734' }}>AC Services</div>
                  <Link href="/services/ac-services#vrf" style={dropdownLinkStyle}>VRF AC Systems</Link>
                  <Link href="/services/ac-services#split" style={dropdownLinkStyle}>Split AC Systems</Link>
                  <Link href="/services/ac-services#chiller" style={dropdownLinkStyle}>Water Chiller FCU</Link>
                </div>
              )}
            </div>
            
            <Link href="/contact" style={navLinkStyle}>Contact</Link>
            <Link href="/faqs" style={navLinkStyle}>FAQs</Link>
          </div>
        </div>
      </nav>

      <style jsx>{`
        a:hover {
          color: #577D8E;
        }
      `}</style>
    </header>
  );
}

// Style objects
const navLinkStyle = {
  color: '#1C2734',
  textDecoration: 'none',
  fontSize: '0.9rem',
  fontWeight: '500',
  transition: 'color 0.3s ease',
  padding: '0.5rem 0',
  fontFamily: 'Roboto, sans-serif'
};

const dropdownLinkStyle = {
  display: 'block',
  color: '#6b7280',
  textDecoration: 'none',
  fontSize: '0.9rem',
  padding: '0.4rem 0',
  transition: 'color 0.3s ease',
  fontFamily: 'Roboto, sans-serif'
};
