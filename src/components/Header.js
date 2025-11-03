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
              
              {/* Simple Services Dropdown */}
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
                    <Link href="/services/villa-renovation" className="dropdown-link">
                      Villa Renovation
                    </Link>
                    <Link href="/services/apartment-renovation" className="dropdown-link">
                      Apartment Renovation
                    </Link>
                    <Link href="/services/office-renovation" className="dropdown-link">
                      Office Renovation
                    </Link>
                    <Link href="/services/tiles-installation" className="dropdown-link">
                      Tiles Installation
                    </Link>
                    <Link href="/services/false-ceiling-partitions" className="dropdown-link">
                      False Ceiling & Partitions
                    </Link>
                    <Link href="/services/painting" className="dropdown-link">
                      Painting
                    </Link>
                    <Link href="/services/carpentry" className="dropdown-link">
                      Carpentry
                    </Link>
                    <Link href="/services/electrical" className="dropdown-link">
                      Electrical
                    </Link>
                    <Link href="/services/air-conditioning" className="dropdown-link">
                      Air Conditioning
                    </Link>
                    <Link href="/services/handyman" className="dropdown-link">
                      Handyman
                    </Link>
                    <Link href="/services" className="dropdown-link view-all">
                      View All Services
                    </Link>
                  </div>
                )}
              </div>
              
              <Link href="/faq" className="nav-link">FAQs</Link>
              <Link href="/contact" className="nav-link">Contact</Link>
              
              {/* Book Now Button */}
              <Link href="/booking" className="book-button">
                <span className="book-icon">📅</span>
                Book Now
              </Link>
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
                Home
              </Link>
              
              <Link href="/about" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              
              {/* Simple Mobile Services Dropdown */}
              <div className="mobile-services-section">
                <button 
                  className="mobile-services-btn"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  Services
                  <span className="mobile-dropdown-arrow">
                    {mobileServicesOpen ? '▲' : '▼'}
                  </span>
                </button>
                
                {mobileServicesOpen && (
                  <div className="mobile-services-dropdown">
                    <Link href="/services/villa-renovation" className="mobile-service-link" onClick={() => setMobileMenuOpen(false)}>
                      Villa Renovation
                    </Link>
                    <Link href="/services/apartment-renovation" className="mobile-service-link" onClick={() => setMobileMenuOpen(false)}>
                      Apartment Renovation
                    </Link>
                    <Link href="/services/office-renovation" className="mobile-service-link" onClick={() => setMobileMenuOpen(false)}>
                      Office Renovation
                    </Link>
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
                    <Link href="/services" className="mobile-service-link view-all" onClick={() => setMobileMenuOpen(false)}>
                      View All Services
                    </Link>
                  </div>
                )}
              </div>
              
              <Link href="/faq" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                FAQs
              </Link>
              
              <Link href="/contact" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
              
              <Link href="/booking" className="mobile-book-button" onClick={() => setMobileMenuOpen(false)}>
                Book Service
              </Link>
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

        /* Simple Services Dropdown */
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
          left: -20px;
          background-color: white;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          padding: 1rem 0;
          min-width: 220px;
          z-index: 1000;
          display: flex;
          flex-direction: column;
        }

        .dropdown-link {
          color: #6b7280;
          text-decoration: none;
          font-size: 0.9rem;
          padding: 0.6rem 1.5rem;
          transition: all 0.3s ease;
          border-left: 3px solid transparent;
        }

        .dropdown-link:hover {
          color: #577D8E;
          background-color: #f8f9fa;
          border-left-color: #577D8E;
        }

        .dropdown-link.view-all {
          font-weight: 600;
          color: #577D8E;
          border-top: 1px solid #e5e7eb;
          margin-top: 0.5rem;
          padding-top: 0.8rem;
        }

        /* Book Now Button */
        .book-button {
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

        .book-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(87, 125, 142, 0.4);
        }

        .book-icon {
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

        .mobile-dropdown-arrow {
          font-size: 0.9rem;
          color: #577D8E;
        }

        .mobile-services-dropdown {
          padding: 0.5rem 0;
          background-color: #f8f9fa;
        }

        .mobile-service-link {
          display: block;
          color: #577D8E;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          padding: 0.7rem 1rem;
          transition: color 0.3s ease;
          border-bottom: 1px solid #e5e7eb;
        }

        .mobile-service-link:hover {
          color: #1C2734;
          background-color: #f0f7ff;
        }

        .mobile-service-link:last-child {
          border-bottom: none;
        }

        .mobile-service-link.view-all {
          font-weight: 600;
          color: #1C2734;
          background-color: #e5e7eb;
        }

        .mobile-book-button {
          display: block;
          background: linear-gradient(135deg, #577D8E, #1C2734);
          color: white;
          text-decoration: none;
          text-align: center;
          padding: 1rem;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1.1rem;
          margin: 1.5rem 0;
          transition: all 0.3s ease;
        }

        .mobile-book-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(87, 125, 142, 0.3);
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
      `}</style>
    </>
  )
}
