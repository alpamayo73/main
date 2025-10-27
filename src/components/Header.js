import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  return (
    <>
      <header className="header">
        {/* Top Bar */}
        <div className="top-bar">
          <div className="top-bar-content">
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>+971589071754</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <span>info@thealpamayo.com</span>
              </div>
            </div>
            <div className="address">Al Qouz, Dubai, United Arab Emirates</div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="nav">
          <div className="nav-container">
            {/* Logo */}
            <Link href="/" className="logo">
              Alpamayo Technical Services
            </Link>

            {/* Desktop Navigation */}
            <div className="desktop-nav">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/about" className="nav-link">About</Link>
              
              {/* Services Dropdown */}
              <div 
                className="services-dropdown"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="nav-link dropdown-btn">
                  Services ▼
                </button>
                
                {servicesOpen && (
                  <div className="dropdown-menu">
                    <div className="dropdown-category">Renovation</div>
                    <Link href="/services/renovation#villa" className="dropdown-link">Villa Renovation</Link>
                    <Link href="/services/renovation#apartment" className="dropdown-link">Apartment Renovation</Link>
                    <Link href="/services/renovation#office" className="dropdown-link">Office Renovation</Link>
                    
                    <div className="dropdown-category">AC Services</div>
                    <Link href="/services/ac-services#vrf" className="dropdown-link">VRF AC Systems</Link>
                    <Link href="/services/ac-services#split" className="dropdown-link">Split AC Systems</Link>
                    <Link href="/services/ac-services#chiller" className="dropdown-link">Water Chiller FCU</Link>
                  </div>
                )}
              </div>
              
              <Link href="/contact" className="nav-link">Contact</Link>
              <Link href="/faqs" className="nav-link">FAQs</Link>
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
              <Link href="/" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link href="/about" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>About</Link>
              
              {/* Mobile Services Dropdown */}
              <div className="mobile-nav-link">
                <button 
                  className="mobile-dropdown-btn"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  Services
                  <span>{mobileServicesOpen ? '▲' : '▼'}</span>
                </button>
                
                {mobileServicesOpen && (
                  <div className="mobile-dropdown-menu">
                    <div className="mobile-dropdown-category">Renovation</div>
                    <Link href="/services/renovation#villa" className="mobile-dropdown-link" onClick={() => setMobileMenuOpen(false)}>Villa Renovation</Link>
                    <Link href="/services/renovation#apartment" className="mobile-dropdown-link" onClick={() => setMobileMenuOpen(false)}>Apartment Renovation</Link>
                    <Link href="/services/renovation#office" className="mobile-dropdown-link" onClick={() => setMobileMenuOpen(false)}>Office Renovation</Link>
                    
                    <div className="mobile-dropdown-category">AC Services</div>
                    <Link href="/services/ac-services#vrf" className="mobile-dropdown-link" onClick={() => setMobileMenuOpen(false)}>VRF AC Systems</Link>
                    <Link href="/services/ac-services#split" className="mobile-dropdown-link" onClick={() => setMobileMenuOpen(false)}>Split AC Systems</Link>
                    <Link href="/services/ac-services#chiller" className="mobile-dropdown-link" onClick={() => setMobileMenuOpen(false)}>Water Chiller FCU</Link>
                  </div>
                )}
              </div>
              
              <Link href="/contact" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
              <Link href="/faqs" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>FAQs</Link>
              
              {/* Mobile Contact Info */}
              <div className="mobile-contact-info">
                <div className="mobile-contact-item">
                  <span className="mobile-contact-icon">📞</span>
                  <span>+971589071754</span>
                </div>
                <div className="mobile-contact-item">
                  <span className="mobile-contact-icon">✉️</span>
                  <span>info@thealpamayo.com</span>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      <style jsx>{`
        .header {
          background-color: white;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .top-bar {
          background-color: #1C2734;
          color: white;
          padding: 0.4rem 0;
          font-size: 0.8rem;
        }

        .top-bar-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .contact-info {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
        }

        .contact-icon {
          margin-right: 0.4rem;
        }

        .address {
          color: white;
        }

        .nav {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 20px;
        }

        .logo {
          font-size: 1.4rem;
          font-weight: bold;
          color: #1C2734;
          text-decoration: none;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          color: #1C2734;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          transition: color 0.3s ease;
          padding: 0.5rem 0;
          cursor: pointer;
        }

        .nav-link:hover {
          color: #577D8E;
        }

        .dropdown-btn {
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.3rem;
          color: #1C2734;
          font-size: 0.9rem;
          font-weight: 500;
          padding: 0.5rem 0;
          transition: color 0.3s ease;
        }

        .dropdown-btn:hover {
          color: #577D8E;
        }

        .services-dropdown {
          position: relative;
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background-color: white;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          border-radius: 8px;
          padding: 1rem;
          min-width: 200px;
          z-index: 1000;
        }

        .dropdown-category {
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: #1C2734;
        }

        .dropdown-link {
          display: block;
          color: #6b7280;
          text-decoration: none;
          font-size: 0.9rem;
          padding: 0.4rem 0;
          transition: color 0.3s ease;
          cursor: pointer;
        }

        .dropdown-link:hover {
          color: #577D8E;
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
        }

        .mobile-nav-link {
          display: block;
          color: #1C2734;
          text-decoration: none;
          font-size: 1rem;
          font-weight: 500;
          padding: 0.8rem 20px;
          border-bottom: 1px solid #f3f4f6;
          transition: color 0.3s ease;
          cursor: pointer;
        }

        .mobile-nav-link:hover {
          color: #577D8E;
        }

        .mobile-dropdown-btn {
          background: none;
          border: none;
          width: 100%;
          text-align: left;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          padding: 0;
          color: #1C2734;
          font-size: 1rem;
          font-weight: 500;
        }

        .mobile-dropdown-menu {
          margin-top: 0.5rem;
          padding-left: 1rem;
          border-left: 2px solid #577D8E;
        }

        .mobile-dropdown-category {
          font-weight: 600;
          color: #1C2734;
          margin-bottom: 0.5rem;
        }

        .mobile-dropdown-link {
          display: block;
          color: #6b7280;
          text-decoration: none;
          font-size: 0.9rem;
          padding: 0.6rem 0;
          transition: color 0.3s ease;
          cursor: pointer;
        }

        .mobile-dropdown-link:hover {
          color: #577D8E;
        }

        .mobile-contact-info {
          margin-top: 1rem;
          padding: 1rem 20px;
          border-top: 1px solid #e5e7eb;
        }

        .mobile-contact-item {
          display: flex;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .mobile-contact-icon {
          margin-right: 0.5rem;
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
          
          .logo {
            font-size: 1.2rem;
          }
          
          .nav-container {
            padding: 1rem 20px;
          }
          
          .mobile-nav {
            padding: 0;
          }
        }
      `}</style>
    </>
  );
}
