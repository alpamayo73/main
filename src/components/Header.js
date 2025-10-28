import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  return (
    <>
      <header className="header">
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
              <div className="services-dropdown">
                <Link href="/services" className="nav-link">Services</Link>
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
              <span className="menu-bar"></span>
              <span className="menu-bar"></span>
              <span className="menu-bar"></span>
            </button>
          </div>

          {/* Services Sub Menu */}
          <div className="services-sub-menu">
            <div className="services-sub-container">
              <div className="service-category">
                <h4 className="category-title">Renovation Services</h4>
                <div className="service-links">
                  <Link href="/services/villa-renovation" className="service-link">Villa Renovation</Link>
                  <Link href="/services/apartment-renovation" className="service-link">Apartment Renovation</Link>
                  <Link href="/services/office-renovation" className="service-link">Office Renovation</Link>
                </div>
              </div>
              
              <div className="service-category">
                <h4 className="category-title">AC Services</h4>
                <div className="service-links">
                  <Link href="/services/vrf-ac-systems" className="service-link">VRF AC Systems</Link>
                  <Link href="/services/split-ac-systems" className="service-link">Split Air Conditioner</Link>
                  <Link href="/services/water-chiller-fcu" className="service-link">Water Chiller FCU</Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="mobile-nav">
            <div className="mobile-nav-content">
              <Link href="/" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              
              <Link href="/about" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              
              {/* Mobile Services Dropdown */}
              <div className="mobile-services-section">
                <button 
                  className="mobile-services-btn"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  <span>Services</span>
                  <span className="dropdown-arrow">{mobileServicesOpen ? '▲' : '▼'}</span>
                </button>
                
                {mobileServicesOpen && (
                  <div className="mobile-services-dropdown">
                    {/* Renovation Services */}
                    <div className="mobile-service-category">
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
                    
                    {/* AC Services */}
                    <div className="mobile-service-category">
                      <h5 className="mobile-category-title">AC Services</h5>
                      <Link href="/services/vrf-ac-systems" className="mobile-service-link" onClick={() => setMobileMenuOpen(false)}>
                        VRF AC Systems
                      </Link>
                      <Link href="/services/split-ac-systems" className="mobile-service-link" onClick={() => setMobileMenuOpen(false)}>
                        Split Air Conditioner
                      </Link>
                      <Link href="/services/water-chiller-fcu" className="mobile-service-link" onClick={() => setMobileMenuOpen(false)}>
                        Water Chiller FCU
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              
              <Link href="/faq" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                FAQs
              </Link>
              
              <Link href="/contact" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
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
                  <span className="contact-icon">✉️</span>
                  <span>info@thealpamayo.com</span>
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

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #577D8E;
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
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

        /* Services Sub Menu */
        .services-sub-menu {
          background-color: #f8f9fa;
          border-top: 1px solid #e9ecef;
          border-bottom: 1px solid #e9ecef;
        }

        .services-sub-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 20px;
          display: flex;
          gap: 3rem;
        }

        .service-category {
          flex: 1;
        }

        .category-title {
          color: #1C2734;
          font-size: 0.9rem;
          font-weight: 700;
          margin-bottom: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .service-links {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .service-link {
          color: #577D8E;
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 500;
          transition: all 0.3s ease;
          padding: 0.3rem 0;
        }

        .service-link:hover {
          color: #1C2734;
          transform: translateX(5px);
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
        }

        .menu-bar {
          width: 25px;
          height: 3px;
          background-color: #1C2734;
          transition: all 0.3s ease;
        }

        .mobile-menu-btn:hover .menu-bar {
          background-color: #577D8E;
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

        .mobile-nav-content {
          padding: 2rem 20px;
        }

        .mobile-nav-link {
          display: block;
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

        .dropdown-arrow {
          font-size: 0.9rem;
          color: #577D8E;
        }

        .mobile-services-dropdown {
          padding: 0.5rem 0 1rem 1rem;
          background-color: #f8f9fa;
          margin: 0 -20px;
          padding-left: 20px;
        }

        .mobile-service-category {
          margin-bottom: 1rem;
        }

        .mobile-category-title {
          color: #1C2734;
          font-size: 0.9rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
        }

        .mobile-service-link {
          display: block;
          color: #577D8E;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          padding: 0.6rem 0;
          transition: color 0.3s ease;
        }

        .mobile-service-link:hover {
          color: #1C2734;
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

        .contact-icon {
          margin-right: 0.8rem;
          font-size: 1rem;
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: flex;
          }
          
          .desktop-nav {
            display: none;
          }
          
          .services-sub-menu {
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
      `}</style>
    </>
  )
}
