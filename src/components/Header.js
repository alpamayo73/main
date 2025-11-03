import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
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
                <a href="tel:+971589071754" className="contact-link">+971 58 907 1754</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <a href="mailto:info@thealpamayo.com" className="contact-link">info@thealpamayo.com</a>
              </div>
            </div>
            <div className="address">
              <span className="address-icon">📍</span>
              Al Qouz, Dubai, United Arab Emirates
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="nav">
          <div className="nav-container">
            {/* Logo */}
            <Link href="/" className="logo">
              ALPAMAYO TECHNICAL SERVICES
            </Link>

            {/* Desktop Navigation */}
            <div className="desktop-nav">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/about" className="nav-link">About</Link>
              
              {/* Services Dropdown */}
              <div 
                className="services-dropdown"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button className="nav-link dropdown-btn">
                  Services
                  <span className="dropdown-arrow">▼</span>
                </button>
                
                {servicesDropdownOpen && (
                  <div className="dropdown-menu">
                    <div className="dropdown-column">
                      <h4 className="dropdown-category">Renovation Services</h4>
                      <Link href="/services/villa-renovation" className="dropdown-link">
                        <span className="dropdown-icon">🏠</span>
                        Villa Renovation
                      </Link>
                      <Link href="/services/apartment-renovation" className="dropdown-link">
                        <span className="dropdown-icon">🏢</span>
                        Apartment Renovation
                      </Link>
                      <Link href="/services/office-renovation" className="dropdown-link">
                        <span className="dropdown-icon">💼</span>
                        Office Renovation
                      </Link>
                    </div>
                    
                    <div className="dropdown-column">
                      <h4 className="dropdown-category">Other Services</h4>
                      <Link href="/services/tiles-installation" className="dropdown-link">
                        <span className="dropdown-icon">🧱</span>
                        Tiles Installation
                      </Link>
                      <Link href="/services/false-ceiling-partitions" className="dropdown-link">
                        <span className="dropdown-icon">🏗️</span>
                        False Ceiling & Partitions
                      </Link>
                      <Link href="/services/painting" className="dropdown-link">
                        <span className="dropdown-icon">🎨</span>
                        Painting
                      </Link>
                      <Link href="/services/carpentry" className="dropdown-link">
                        <span className="dropdown-icon">🪚</span>
                        Carpentry
                      </Link>
                      <Link href="/services/electrical" className="dropdown-link">
                        <span className="dropdown-icon">⚡</span>
                        Electrical
                      </Link>
                      <Link href="/services/air-conditioning" className="dropdown-link">
                        <span className="dropdown-icon">❄️</span>
                        Air Conditioning
                      </Link>
                      <Link href="/services/handyman" className="dropdown-link">
                        <span className="dropdown-icon">🔨</span>
                        Handyman
                      </Link>
                    </div>
                    
                    <div className="dropdown-column">
                      <h4 className="dropdown-category">All Services</h4>
                      <Link href="/services" className="dropdown-link view-all">
                        <span className="dropdown-icon">🔍</span>
                        View All Services
                      </Link>
                      <div className="dropdown-cta">
                        <p>Need help choosing a service?</p>
                        <a href="tel:+971589071754" className="cta-button">
                          <span className="button-icon">📞</span>
                          Get Free Consultation
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <Link href="/faq" className="nav-link">FAQs</Link>
              <Link href="/contact" className="nav-link">Contact</Link>
              
              {/* Call Button */}
              <a href="tel:+971589071754" className="call-button">
                <span className="call-icon">📞</span>
                Call Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className={`menu-bar ${mobileMenuOpen ? 'active' : ''}`}></span>
              <span className={`menu-bar ${mobileMenuOpen ? 'active' : ''}`}></span>
              <span className={`menu-bar ${mobileMenuOpen ? 'active' : ''}`}></span>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="mobile-nav">
            <div className="mobile-nav-header">
              <h3>Menu</h3>
              <button 
                className="mobile-close-btn"
                onClick={() => setMobileMenuOpen(false)}
              >
                ✕
              </button>
            </div>
            
            <div className="mobile-nav-content">
              <Link href="/" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                <span className="mobile-nav-icon">🏠</span>
                Home
              </Link>
              
              <Link href="/about" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                <span className="mobile-nav-icon">👥</span>
                About
              </Link>
              
              {/* Mobile Services Dropdown */}
              <div className="mobile-services-section">
                <button 
                  className="mobile-services-btn"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  <span className="mobile-nav-icon">🛠️</span>
                  Services
                  <span className="mobile-dropdown-arrow">
                    {mobileServicesOpen ? '▲' : '▼'}
                  </span>
                </button>
                
                {mobileServicesOpen && (
                  <div className="mobile-services-dropdown">
                    <div className="mobile-services-category">
                      <h5 className="mobile-category-title">Renovation Services</h5>
                      <Link href="/services/villa-renovation" className="mobile-service-link" onClick={() => setMobileMenuOpen(false)}>
                        Villa Renovation
                      </Link>
                      <Link href="/services/apartment-renovation" className="mobile-service-link" onClick={() => setMobileMenuOpen(false)}>
                        Apartment Renovation
                      </Link>
                      <Link href="/services/office-renovation" className="mobile-service-link" onClick={() => setMobileMenuOpen(false)}>
                        Office Renovation
                      </Link>
                    </div>
                    
                    <div className="mobile-services-category">
                      <h5 className="mobile-category-title">Other Services</h5>
                      <Link href="/services/tiles-installation" className="mobile-service-link" onClick={() => setMobileMenuOpen(false)}>
                        Tiles Installation
                      </Link>
                      <Link href="/services/false-ceiling-partitions" className="mobile-service-link" onClick={() => setMobileMenuOpen(false)}>
                        False Ceiling & Partitions
                      </Link>
                      <Link href="/services/painting" className="mobile-service-link" onClick={() => setMobileMenuOpen(false)}>
                        Painting
                      </Link>
                      <Link href="/services/carpentry" className="mobile-service-link" onClick={() => setMobileMenuOpen(false)}>
                        Carpentry
                      </Link>
                      <Link href="/services/electrical" className="mobile-service-link" onClick={() => setMobileMenuOpen(false)}>
                        Electrical
                      </Link>
                      <Link href="/services/air-conditioning" className="mobile-service-link" onClick={() => setMobileMenuOpen(false)}>
                        Air Conditioning
                      </Link>
                      <Link href="/services/handyman" className="mobile-service-link" onClick={() => setMobileMenuOpen(false)}>
                        Handyman
                      </Link>
                    </div>
                    
                    <Link href="/services" className="mobile-view-all" onClick={() => setMobileMenuOpen(false)}>
                      View All Services
                    </Link>
                  </div>
                )}
              </div>
              
              <Link href="/faq" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                <span className="mobile-nav-icon">❓</span>
                FAQs
              </Link>
              
              <Link href="/contact" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                <span className="mobile-nav-icon">📞</span>
                Contact
              </Link>
              
              {/* Mobile Call Buttons */}
              <div className="mobile-call-buttons">
                <a href="tel:+971589071754" className="mobile-call-button primary" onClick={() => setMobileMenuOpen(false)}>
                  <span className="call-icon">📞</span>
                  Call Now
                </a>
                <a href="https://wa.me/971589071754" className="mobile-call-button secondary" onClick={() => setMobileMenuOpen(false)}>
                  <span className="whatsapp-icon">💬</span>
                  WhatsApp
                </a>
              </div>
              
              {/* Mobile Contact Info */}
              <div className="mobile-contact-info">
                <div className="mobile-contact-item">
                  <span className="contact-icon">📞</span>
                  <a href="tel:+971589071754" className="contact-link">+971 58 907 1754</a>
                </div>
                <div className="mobile-contact-item">
                  <span className="contact-icon">✉️</span>
                  <a href="mailto:info@thealpamayo.com" className="contact-link">info@thealpamayo.com</a>
                </div>
                <div className="mobile-contact-item">
                  <span className="contact-icon">📍</span>
                  <span>Al Qouz, Dubai, UAE</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      <style jsx>{`
        .header {
          background-color: white;
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
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

        .contact-icon, .address-icon {
          margin-right: 0.4rem;
          font-size: 0.9rem;
        }

        .contact-link {
          color: white;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contact-link:hover {
          color: #577D8E;
        }

        .address {
          display: flex;
          align-items: center;
        }

        .nav {
          position: relative;
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 20px;
        }

        .logo {
          font-size: 1.3rem;
          font-weight: 800;
          color: #1C2734;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          color: #1C2734;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 600;
          transition: all 0.3s ease;
          padding: 0.5rem 0;
          position: relative;
        }

        .nav-link:hover {
          color: #577D8E;
        }

        /* Services Dropdown */
        .services-dropdown {
          position: relative;
        }

        .dropdown-btn {
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.3rem;
          color: #1C2734;
          font-size: 0.95rem;
          font-weight: 600;
          padding: 0.5rem 0;
          transition: color 0.3s ease;
        }

        .dropdown-btn:hover {
          color: #577D8E;
        }

        .dropdown-arrow {
          font-size: 0.7rem;
          transition: transform 0.3s ease;
        }

        .services-dropdown:hover .dropdown-arrow {
          transform: rotate(180deg);
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: -100px;
          background-color: white;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          border-radius: 12px;
          padding: 2rem;
          min-width: 600px;
          z-index: 1000;
          display: grid;
          grid-template-columns: 1fr 1fr 1.2fr;
          gap: 2rem;
        }

        .dropdown-column {
          display: flex;
          flex-direction: column;
        }

        .dropdown-category {
          font-size: 0.9rem;
          font-weight: 700;
          color: #1C2734;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border-bottom: 2px solid #577D8E;
          padding-bottom: 0.5rem;
        }

        .dropdown-link {
          display: flex;
          align-items: center;
          color: #6b7280;
          text-decoration: none;
          font-size: 0.9rem;
          padding: 0.6rem 0;
          transition: all 0.3s ease;
          border-radius: 6px;
        }

        .dropdown-link:hover {
          color: #577D8E;
          background-color: #f8f9fa;
          padding-left: 0.5rem;
        }

        .dropdown-icon {
          margin-right: 0.8rem;
          font-size: 1.1rem;
          width: 20px;
          text-align: center;
        }

        .view-all {
          font-weight: 600;
          color: #577D8E !important;
        }

        .dropdown-cta {
          margin-top: auto;
          padding-top: 1rem;
          border-top: 1px solid #e5e7eb;
        }

        .dropdown-cta p {
          font-size: 0.8rem;
          color: #6b7280;
          margin-bottom: 1rem;
        }

        .cta-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #577D8E, #1C2734);
          color: white;
          text-decoration: none;
          padding: 0.7rem 1rem;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(87, 125, 142, 0.3);
        }

        .button-icon {
          font-size: 0.9rem;
        }

        .call-button {
          background: linear-gradient(135deg, #577D8E, #1C2734);
          color: white;
          text-decoration: none;
          padding: 0.6rem 1.2rem;
          border-radius: 6px;
          font-weight: 600;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
          box-shadow: 0 2px 10px rgba(87, 125, 142, 0.3);
        }

        .call-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(87, 125, 142, 0.4);
        }

        .call-icon {
          font-size: 1rem;
        }

        /* Mobile Menu Button */
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          flex-direction: column;
          gap: 4px;
          width: 30px;
          height: 30px;
          justify-content: center;
        }

        .menu-bar {
          width: 25px;
          height: 3px;
          background-color: #1C2734;
          transition: all 0.3s ease;
          transform-origin: center;
        }

        .menu-bar.active:nth-child(1) {
          transform: rotate(45deg) translate(6px, 6px);
        }

        .menu-bar.active:nth-child(2) {
          opacity: 0;
        }

        .menu-bar.active:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -6px);
        }

        /* Mobile Navigation */
        .mobile-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: white;
          z-index: 1001;
          overflow-y: auto;
        }

        .mobile-nav-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 20px;
          border-bottom: 1px solid #e5e7eb;
          background-color: #1C2734;
          color: white;
        }

        .mobile-nav-header h3 {
          margin: 0;
          font-size: 1.2rem;
        }

        .mobile-close-btn {
          background: none;
          border: none;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
          padding: 0.5rem;
        }

        .mobile-nav-content {
          padding: 1rem 20px 2rem;
        }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          color: #1C2734;
          text-decoration: none;
          font-size: 1.1rem;
          font-weight: 600;
          padding: 1rem 0;
          border-bottom: 1px solid #f3f4f6;
          transition: color 0.3s ease;
        }

        .mobile-nav-link:hover {
          color: #577D8E;
        }

        .mobile-nav-icon {
          margin-right: 1rem;
          font-size: 1.2rem;
          width: 24px;
          text-align: center;
        }

        .mobile-services-section {
          border-bottom: 1px solid #f3f4f6;
        }

        .mobile-services-btn {
          background: none;
          border: none;
          width: 100%;
          text-align: left;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          padding: 1rem 0;
          color: #1C2734;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .mobile-dropdown-arrow {
          font-size: 0.9rem;
          color: #577D8E;
        }

        .mobile-services-dropdown {
          padding: 1rem 0 1rem 2rem;
          background-color: #f8f9fa;
          margin: 0 -20px;
          padding-left: 40px;
        }

        .mobile-services-category {
          margin-bottom: 1.5rem;
        }

        .mobile-category-title {
          color: #1C2734;
          font-size: 0.9rem;
          font-weight: 700;
          margin-bottom: 0.8rem;
          text-transform: uppercase;
        }

        .mobile-service-link {
          display: block;
          color: #577D8E;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          padding: 0.7rem 0;
          transition: color 0.3s ease;
          border-bottom: 1px solid #e5e7eb;
        }

        .mobile-service-link:hover {
          color: #1C2734;
        }

        .mobile-service-link:last-child {
          border-bottom: none;
        }

        .mobile-view-all {
          display: block;
          text-align: center;
          color: #577D8E;
          text-decoration: none;
          font-weight: 600;
          padding: 1rem;
          border: 2px solid #577D8E;
          border-radius: 8px;
          margin-top: 1rem;
          transition: all 0.3s ease;
        }

        .mobile-view-all:hover {
          background-color: #577D8E;
          color: white;
        }

        .mobile-call-buttons {
          display: flex;
          gap: 1rem;
          margin: 2rem 0;
        }

        .mobile-call-button {
          flex: 1;
          text-decoration: none;
          padding: 1rem;
          border-radius: 8px;
          font-weight: 600;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
        }

        .mobile-call-button.primary {
          background: linear-gradient(135deg, #577D8E, #1C2734);
          color: white;
        }

        .mobile-call-button.secondary {
          background-color: #25D366;
          color: white;
        }

        .mobile-call-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }

        .mobile-contact-info {
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid #e5e7eb;
        }

        .mobile-contact-item {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
          color: #6b7280;
          font-size: 0.9rem;
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .top-bar {
            display: none;
          }
          
          .mobile-menu-btn {
            display: flex;
          }
          
          .desktop-nav {
            display: none;
          }
          
          .logo {
            font-size: 1.1rem;
          }
          
          .nav-container {
            padding: 0.8rem 20px;
          }
        }

        /* Desktop Styles */
        @media (min-width: 769px) {
          .mobile-nav {
            display: none;
          }
        }

        /* Tablet Styles for Dropdown */
        @media (max-width: 1024px) and (min-width: 769px) {
          .dropdown-menu {
            min-width: 500px;
            left: -150px;
          }
        }
      `}</style>
    </>
  )
}
