import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  return (
    <>
      <header style={{
        backgroundColor: 'white',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}>
        {/* Top Bar */}
        <div className="top-bar">
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
          padding: '1rem 20px',
          position: 'relative'
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
            <div className="desktop-nav">
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

            {/* Mobile Menu Button */}
            <button 
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              ☰
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="mobile-nav">
              <Link href="/" style={mobileNavLinkStyle} onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link href="/about" style={mobileNavLinkStyle} onClick={() => setMobileMenuOpen(false)}>About</Link>
              
              {/* Mobile Services Dropdown */}
              <div style={mobileNavLinkStyle}>
                <button 
                  style={{
                    ...mobileNavLinkStyle,
                    background: 'none',
                    border: 'none',
                    width: '100%',
                    textAlign: 'left',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    padding: 0
                  }}
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  Services
                  <span>{mobileServicesOpen ? '▲' : '▼'}</span>
                </button>
                
                {mobileServicesOpen && (
                  <div style={{
                    marginTop: '0.5rem',
                    paddingLeft: '1rem',
                    borderLeft: '2px solid #577D8E'
                  }}>
                    <div style={{ fontWeight: '600', color: '#1C2734', marginBottom: '0.5rem' }}>Renovation</div>
                    <Link href="/services/renovation#villa" style={mobileDropdownLinkStyle} onClick={() => setMobileMenuOpen(false)}>Villa Renovation</Link>
                    <Link href="/services/renovation#apartment" style={mobileDropdownLinkStyle} onClick={() => setMobileMenuOpen(false)}>Apartment Renovation</Link>
                    <Link href="/services/renovation#office" style={mobileDropdownLinkStyle} onClick={() => setMobileMenuOpen(false)}>Office Renovation</Link>
                    
                    <div style={{ fontWeight: '600', color: '#1C2734', margin: '0.5rem 0' }}>AC Services</div>
                    <Link href="/services/ac-services#vrf" style={mobileDropdownLinkStyle} onClick={() => setMobileMenuOpen(false)}>VRF AC Systems</Link>
                    <Link href="/services/ac-services#split" style={mobileDropdownLinkStyle} onClick={() => setMobileMenuOpen(false)}>Split AC Systems</Link>
                    <Link href="/services/ac-services#chiller" style={mobileDropdownLinkStyle} onClick={() => setMobileMenuOpen(false)}>Water Chiller FCU</Link>
                  </div>
                )}
              </div>
              
              <Link href="/contact" style={mobileNavLinkStyle} onClick={() => setMobileMenuOpen(false)}>Contact</Link>
              <Link href="/faqs" style={mobileNavLinkStyle} onClick={() => setMobileMenuOpen(false)}>FAQs</Link>
              
              {/* Mobile Contact Info */}
              <div style={{
                marginTop: '1rem',
                paddingTop: '1rem',
                borderTop: '1px solid #e5e7eb'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ marginRight: '0.5rem' }}>📞</span>
                  <span style={{ fontSize: '0.9rem' }}>+971589071754</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ marginRight: '0.5rem' }}>✉️</span>
                  <span style={{ fontSize: '0.9rem' }}>info@thealpamayo.com</span>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      <style jsx>{`
        .top-bar {
          background-color: #1C2734;
          color: white;
          padding: 0.4rem 0;
          font-size: 0.8rem;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          font-size: 1.5rem;
        }

        .mobile-nav {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background-color: white;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          z-index: 1000;
          padding: 1rem;
        }

        a:hover {
          color: #577D8E;
        }

        /* Mobile Styles */
        @media (max-width: 767px) {
          .top-bar {
            display: none;
          }
          
          .mobile-menu-btn {
            display: block;
          }
          
          .desktop-nav {
            display: none;
          }
          
          nav > div > a:first-child {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </>
  );
}

// Style objects
const navLinkStyle = {
  color: '#1C2734',
  textDecoration: 'none',
  fontSize: '0.9rem',
  fontWeight: '500',
  transition: 'color 0.3s ease',
  padding: '0.5rem 0'
};

const dropdownLinkStyle = {
  display: 'block',
  color: '#6b7280',
  textDecoration: 'none',
  fontSize: '0.9rem',
  padding: '0.4rem 0',
  transition: 'color 0.3s ease'
};

const mobileNavLinkStyle = {
  display: 'block',
  color: '#1C2734',
  textDecoration: 'none',
  fontSize: '1rem',
  fontWeight: '500',
  padding: '0.8rem 0',
  borderBottom: '1px solid #f3f4f6',
  transition: 'color 0.3s ease'
};

const mobileDropdownLinkStyle = {
  display: 'block',
  color: '#6b7280',
  textDecoration: 'none',
  fontSize: '0.9rem',
  padding: '0.6rem 0',
  transition: 'color 0.3s ease'
};
