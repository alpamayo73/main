import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <header style={{
      backgroundColor: 'white',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      {/* Top Bar */}
      <div style={{
        backgroundColor: '#1C2734',
        color: 'white',
        padding: '0.5rem 0',
        fontSize: '0.875rem'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            flexWrap: 'wrap'
          }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '0.5rem' }}>📞</span>
              <span>+971589071754</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '0.5rem' }}>✉️</span>
              <span>info@thealpamayo.com</span>
            </div>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem'
          }}>
            <span>📍 Al Qouz, Dubai, UAE</span>
            <span style={{ 
              backgroundColor: '#577D8E',
              padding: '0.25rem 0.75rem',
              borderRadius: '12px',
              fontSize: '0.75rem',
              fontWeight: '600'
            }}>Premium Services</span>
          </div>
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
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#1C2734',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              backgroundColor: '#577D8E',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '1.25rem',
              fontWeight: 'bold'
            }}>A</div>
            Alpamayo Technical Services
          </Link>

          {/* Desktop Navigation */}
          <div style={{
            display: 'none',
            alignItems: 'center',
            gap: '2rem',
            position: 'relative'
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
                gap: '0.25rem'
              }}>
                Services <span style={{ fontSize: '0.75rem' }}>▼</span>
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
            
            {/* CTA Button */}
            <Link 
              href="/contact" 
              style={{
                backgroundColor: '#577D8E',
                color: 'white',
                padding: '0.5rem 1.5rem',
                borderRadius: '6px',
                fontWeight: '600',
                textDecoration: 'none',
                fontSize: '0.875rem',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#1C2734';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#577D8E';
                e.target.style.transform = 'scale(1)';
              }}
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            style={{
              display: 'block',
              fontSize: '1.5rem',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#1C2734'
            }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: 'white',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
            zIndex: 1000
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0',
              padding: '1rem 0'
            }}>
              <Link href="/" style={mobileNavLinkStyle} onClick={() => setIsOpen(false)}>Home</Link>
              <Link href="/about" style={mobileNavLinkStyle} onClick={() => setIsOpen(false)}>About</Link>
              
              {/* Mobile Services Dropdown */}
              <div style={{ borderBottom: '1px solid #f3f4f6' }}>
                <div style={{
                  ...mobileNavLinkStyle,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  border: 'none',
                  background: 'none',
                  width: '100%',
                  textAlign: 'left',
                  cursor: 'pointer'
                }}
                onClick={() => setServicesOpen(!servicesOpen)}
                >
                  Services
                  <span style={{ fontSize: '0.75rem' }}>{servicesOpen ? '▲' : '▼'}</span>
                </div>
                
                {servicesOpen && (
                  <div style={{
                    backgroundColor: '#f9fafb',
                    padding: '0.5rem 0'
                  }}>
                    <div style={{ padding: '0.5rem 1.5rem', fontWeight: '600', color: '#1C2734', fontSize: '0.875rem' }}>Renovation</div>
                    <Link href="/services/renovation#villa" style={mobileDropdownLinkStyle} onClick={() => setIsOpen(false)}>Villa Renovation</Link>
                    <Link href="/services/renovation#apartment" style={mobileDropdownLinkStyle} onClick={() => setIsOpen(false)}>Apartment Renovation</Link>
                    <Link href="/services/renovation#office" style={mobileDropdownLinkStyle} onClick={() => setIsOpen(false)}>Office Renovation</Link>
                    
                    <div style={{ padding: '0.5rem 1.5rem', fontWeight: '600', color: '#1C2734', fontSize: '0.875rem', marginTop: '0.5rem' }}>AC Services</div>
                    <Link href="/services/ac-services#vrf" style={mobileDropdownLinkStyle} onClick={() => setIsOpen(false)}>VRF AC Systems</Link>
                    <Link href="/services/ac-services#split" style={mobileDropdownLinkStyle} onClick={() => setIsOpen(false)}>Split AC Systems</Link>
                    <Link href="/services/ac-services#chiller" style={mobileDropdownLinkStyle} onClick={() => setIsOpen(false)}>Water Chiller FCU</Link>
                  </div>
                )}
              </div>
              
              <Link href="/contact" style={mobileNavLinkStyle} onClick={() => setIsOpen(false)}>Contact</Link>
              <Link href="/faqs" style={mobileNavLinkStyle} onClick={() => setIsOpen(false)}>FAQs</Link>
              
              {/* Mobile CTA Button */}
              <div style={{ padding: '1rem 1.5rem', borderTop: '1px solid #f3f4f6', marginTop: '0.5rem' }}>
                <Link 
                  href="/contact" 
                  style={{
                    display: 'block',
                    backgroundColor: '#577D8E',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '6px',
                    fontWeight: '600',
                    textDecoration: 'none',
                    textAlign: 'center',
                    fontSize: '0.875rem',
                    transition: 'all 0.3s ease'
                  }}
                  onClick={() => setIsOpen(false)}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#1C2734';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#577D8E';
                  }}
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      <style jsx>{`
        @media (min-width: 768px) {
          nav > div > div:first-of-type {
            display: flex;
          }
          
          button {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}

// Style objects for cleaner code
const navLinkStyle = {
  color: '#1C2734',
  textDecoration: 'none',
  fontSize: '0.875rem',
  fontWeight: '500',
  transition: 'color 0.3s ease',
  padding: '0.5rem 0'
};

const dropdownLinkStyle = {
  display: 'block',
  color: '#6b7280',
  textDecoration: 'none',
  fontSize: '0.875rem',
  padding: '0.5rem 0',
  transition: 'color 0.3s ease'
};

const mobileNavLinkStyle = {
  color: '#1C2734',
  textDecoration: 'none',
  fontSize: '0.875rem',
  fontWeight: '500',
  padding: '0.75rem 1.5rem',
  borderBottom: '1px solid #f3f4f6',
  display: 'block',
  transition: 'background-color 0.3s ease'
};

const mobileDropdownLinkStyle = {
  display: 'block',
  color: '#6b7280',
  textDecoration: 'none',
  fontSize: '0.875rem',
  padding: '0.5rem 2rem',
  transition: 'background-color 0.3s ease'
};

// Add hover effects
if (typeof window !== 'undefined') {
  // This will be applied globally
  const style = document.createElement('style');
  style.textContent = `
    a:hover {
      color: #577D8E;
    }
    
    div > a:hover {
      background-color: #f9fafb;
    }
  `;
  document.head.appendChild(style);
}
