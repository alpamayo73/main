import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const router = useRouter()

  const isActiveLink = (path) => router.pathname === path
  const isActiveService = (servicePath) => router.pathname.startsWith(servicePath)

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
              <Link 
                href="/" 
                className={`nav-link ${isActiveLink('/') ? 'active' : ''}`}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className={`nav-link ${isActiveLink('/about') ? 'active' : ''}`}
              >
                About
              </Link>
              
              {/* Enhanced Services Dropdown */}
              <div 
                className="services-dropdown"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button className={`nav-link dropdown-btn ${isActiveService('/services') ? 'active' : ''}`}>
                  Services
                  <span className="dropdown-arrow">▼</span>
                </button>
                
                {servicesDropdownOpen && (
                  <div className="dropdown-menu">
                    <div className="dropdown-section">
                      <h4 className="dropdown-title">Renovation Services</h4>
                      <Link 
                        href="/services/villa-renovation" 
                        className={`dropdown-link ${isActiveLink('/services/villa-renovation') ? 'active' : ''}`}
                      >
                        <span className="service-icon">🏠</span>
                        Villa Renovation
                      </Link>
                      <Link 
                        href="/services/apartment-renovation" 
                        className={`dropdown-link ${isActiveLink('/services/apartment-renovation') ? 'active' : ''}`}
                      >
                        <span className="service-icon">🏢</span>
                        Apartment Renovation
                      </Link>
                      <Link 
                        href="/services/office-renovation" 
                        className={`dropdown-link ${isActiveLink('/services/office-renovation') ? 'active' : ''}`}
                      >
                        <span className="service-icon">💼</span>
                        Office Renovation
                      </Link>
                    </div>
                    
                    <div className="dropdown-section">
                      <h4 className="dropdown-title">Technical Services</h4>
                      <Link 
                        href="/services/tiles-installation" 
                        className={`dropdown-link ${isActiveLink('/services/tiles-installation') ? 'active' : ''}`}
                      >
                        <span className="service-icon">🧱</span>
                        Tiles Installation
                      </Link>
                      <Link 
                        href="/services/false-ceiling-partitions" 
                        className={`dropdown-link ${isActiveLink('/services/false-ceiling-partitions') ? 'active' : ''}`}
                      >
                        <span className="service-icon">🏗️</span>
                        False Ceiling & Partitions
                      </Link>
                      <Link 
                        href="/services/painting" 
                        className={`dropdown-link ${isActiveLink('/services/painting') ? 'active' : ''}`}
                      >
                        <span className="service-icon">🎨</span>
                        Painting
                      </Link>
                      <Link 
                        href="/services/carpentry" 
                        className={`dropdown-link ${isActiveLink('/services/carpentry') ? 'active' : ''}`}
                      >
                        <span className="service-icon">🪚</span>
                        Carpentry
                      </Link>
                      <Link 
                        href="/services/electrical" 
                        className={`dropdown-link ${isActiveLink('/services/electrical') ? 'active' : ''}`}
                      >
                        <span className="service-icon">⚡</span>
                        Electrical
                      </Link>
                      <Link 
                        href="/services/air-conditioning" 
                        className={`dropdown-link ${isActiveLink('/services/air-conditioning') ? 'active' : ''}`}
                      >
                        <span className="service-icon">❄️</span>
                        Air Conditioning
                      </Link>
                      <Link 
                        href="/services/handyman" 
                        className={`dropdown-link ${isActiveLink('/services/handyman') ? 'active' : ''}`}
                      >
                        <span className="service-icon">🔨</span>
                        Handyman
                      </Link>
                    </div>
                    
                    <div className="dropdown-cta">
                      <Link href="/services" className="view-all-btn">
                        View All Services
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              
              <Link 
                href="/faq" 
                className={`nav-link ${isActiveLink('/faq') ? 'active' : ''}`}
              >
                FAQs
              </Link>
              <Link 
                href="/contact" 
                className={`nav-link ${isActiveLink('/contact') ? 'active' : ''}`}
              >
                Contact
              </Link>
              
              {/* Hourly Services Button */}
              <Link href="/booking" className="hourly-services-button">
                <span className="hourly-icon">⏱️</span>
                Hourly Services
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
              {/* Each main menu link on its own line */}
              <div className="mobile-nav-item">
                <Link 
                  href="/" 
                  className={`mobile-nav-link ${isActiveLink('/') ? 'active' : ''}`} 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </div>
              
              <div className="mobile-nav-item">
                <Link 
                  href="/about" 
                  className={`mobile-nav-link ${isActiveLink('/about') ? 'active' : ''}`} 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
              </div>
              
              {/* Mobile Services Dropdown - each link on its own line */}
              <div className="mobile-nav-item">
                <button 
                  className={`mobile-services-btn ${isActiveService('/services') ? 'active' : ''}`}
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  Services
                  <span className="mobile-dropdown-arrow">
                    {mobileServicesOpen ? '▲' : '▼'}
                  </span>
                </button>
                
                {mobileServicesOpen && (
                  <div className="mobile-services-dropdown">
                    <div className="mobile-service-item">
                      <Link 
                        href="/services/villa-renovation" 
                        className={`mobile-service-link ${isActiveLink('/services/villa-renovation') ? 'active' : ''}`} 
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Villa Renovation
                      </Link>
                    </div>
                    <div className="mobile-service-item">
                      <Link 
                        href="/services/apartment-renovation" 
                        className={`mobile-service-link ${isActiveLink('/services/apartment-renovation') ? 'active' : ''}`} 
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Apartment Renovation
                      </Link>
                    </div>
                    <div className="mobile-service-item">
                      <Link 
                        href="/services/office-renovation" 
                        className={`mobile-service-link ${isActiveLink('/services/office-renovation') ? 'active' : ''}`} 
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Office Renovation
                      </Link>
                    </div>
                    <div className="mobile-service-item">
                      <Link 
                        href="/services/tiles-installation" 
                        className={`mobile-service-link ${isActiveLink('/services/tiles-installation') ? 'active' : ''}`} 
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Tiles Installation
                      </Link>
                    </div>
                    <div className="mobile-service-item">
                      <Link 
                        href="/services/false-ceiling-partitions" 
                        className={`mobile-service-link ${isActiveLink('/services/false-ceiling-partitions') ? 'active' : ''}`} 
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        False Ceiling & Partitions
                      </Link>
                    </div>
                    <div className="mobile-service-item">
                      <Link 
                        href="/services/painting" 
                        className={`mobile-service-link ${isActiveLink('/services/painting') ? 'active' : ''}`} 
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Painting
                      </Link>
                    </div>
                    <div className="mobile-service-item">
                      <Link 
                        href="/services/carpentry" 
                        className={`mobile-service-link ${isActiveLink('/services/carpentry') ? 'active' : ''}`} 
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Carpentry
                      </Link>
                    </div>
                    <div className="mobile-service-item">
                      <Link 
                        href="/services/electrical" 
                        className={`mobile-service-link ${isActiveLink('/services/electrical') ? 'active' : ''}`} 
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Electrical
                      </Link>
                    </div>
                    <div className="mobile-service-item">
                      <Link 
                        href="/services/air-conditioning" 
                        className={`mobile-service-link ${isActiveLink('/services/air-conditioning') ? 'active' : ''}`} 
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Air Conditioning
                      </Link>
                    </div>
                    <div className="mobile-service-item">
                      <Link 
                        href="/services/handyman" 
                        className={`mobile-service-link ${isActiveLink('/services/handyman') ? 'active' : ''}`} 
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Handyman
                      </Link>
                    </div>
                    <div className="mobile-service-item">
                      <Link href="/services" className="mobile-service-link view-all" onClick={() => setMobileMenuOpen(false)}>
                        View All Services
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="mobile-nav-item">
                <Link 
                  href="/faq" 
                  className={`mobile-nav-link ${isActiveLink('/faq') ? 'active' : ''}`} 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FAQs
                </Link>
              </div>
              
              <div className="mobile-nav-item">
                <Link 
                  href="/contact" 
                  className={`mobile-nav-link ${isActiveLink('/contact') ? 'active' : ''}`} 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
              
              <div className="mobile-nav-item">
                <Link href="/booking" className="mobile-hourly-button" onClick={() => setMobileMenuOpen(false)}>
                  Hourly Services
                </Link>
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
          font-weight: 500;
          transition: all 0.3s ease;
          padding: 0.5rem 0.8rem;
          position: relative;
          white-space: nowrap;
          border-radius: 4px;
        }

        .nav-link:hover {
          color: #577D8E;
          background-color: rgba(87, 125, 142, 0.1);
        }

        .nav-link.active {
          color: #577D8E;
          font-weight: 700;
          background-color: rgba(87, 125, 142, 0.15);
        }

        /* Enhanced Services Dropdown */
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
          font-weight: 500;
          padding: 0.5rem 0.8rem;
          transition: all 0.3s ease;
          white-space: nowrap;
          border-radius: 4px;
          width: 100%;
        }

        .dropdown-btn:hover {
          color: #577D8E;
          background-color: rgba(87, 125, 142, 0.1);
        }

        .dropdown-btn.active {
          color: #577D8E;
          font-weight: 700;
          background-color: rgba(87, 125, 142, 0.15);
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
          left: -50px;
          background-color: white;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          border-radius: 12px;
          padding: 1.5rem;
          min-width: 320px;
          z-index: 1000;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .dropdown-section {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .dropdown-title {
          font-size: 0.85rem;
          font-weight: 700;
          color: #1C2734;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border-bottom: 2px solid #577D8E;
          padding-bottom: 0.3rem;
        }

        .dropdown-link {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          color: #6b7280;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 400;
          padding: 0.6rem 0.8rem;
          transition: all 0.3s ease;
          border-radius: 6px;
          white-space: nowrap;
        }

        .dropdown-link:hover {
          color: #577D8E;
          background-color: #f8f9fa;
          transform: translateX(5px);
        }

        .dropdown-link.active {
          color: #577D8E;
          font-weight: 700;
          background-color: rgba(87, 125, 142, 0.15);
          border-left: 3px solid #577D8E;
        }

        .service-icon {
          font-size: 1.1rem;
          width: 20px;
          text-align: center;
        }

        .dropdown-cta {
          padding-top: 0.5rem;
          border-top: 1px solid #e5e7eb;
        }

        .view-all-btn {
          display: block;
          text-align: center;
          background: linear-gradient(135deg, #577D8E, #1C2734);
          color: white;
          text-decoration: none;
          padding: 0.7rem 1rem;
          border-radius: 6px;
          font-size: 0.85rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .view-all-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(87, 125, 142, 0.3);
        }

        /* Hourly Services Button */
        .hourly-services-button {
          background: #577D8E;
          color: white;
          text-decoration: none;
          padding: 0.7rem 1.5rem;
          border-radius: 8px;
          font-weight: 700;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
          box-shadow: 0 2px 10px rgba(87, 125, 142, 0.3);
          white-space: nowrap;
          border: none;
          cursor: pointer;
        }

        .hourly-services-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(87, 125, 142, 0.4);
          background: #4a6a7a;
        }

        .hourly-icon {
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

        /* Each mobile nav item on its own line */
        .mobile-nav-item {
          display: block;
          width: 100%;
          border-bottom: 1px solid #f3f4f6;
        }

        .mobile-nav-link {
          display: block;
          color: #1C2734;
          text-decoration: none;
          font-size: 1.1rem;
          font-weight: 500;
          padding: 1rem 0;
          transition: color 0.3s ease;
          width: 100%;
          text-align: left;
        }

        .mobile-nav-link:hover {
          color: #577D8E;
        }

        .mobile-nav-link.active {
          color: #577D8E;
          font-weight: 700;
          background-color: rgba(87, 125, 142, 0.1);
          padding-left: 1rem;
          border-left: 3px solid #577D8E;
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
          font-weight: 500;
          white-space: nowrap;
        }

        .mobile-services-btn.active {
          color: #577D8E;
          font-weight: 700;
        }

        .mobile-dropdown-arrow {
          font-size: 0.9rem;
          color: #577D8E;
        }

        .mobile-services-dropdown {
          padding: 0.5rem 0 0.5rem 1rem;
          background-color: #f8f9fa;
          margin: 0 -20px;
          padding-left: 2rem;
        }

        /* Each service item on its own line */
        .mobile-service-item {
          display: block;
          width: 100%;
          border-bottom: 1px solid #e5e7eb;
        }

        .mobile-service-item:last-child {
          border-bottom: none;
        }

        .mobile-service-link {
          display: block;
          color: #577D8E;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 400;
          padding: 0.8rem 0;
          transition: color 0.3s ease;
          width: 100%;
          text-align: left;
        }

        .mobile-service-link:hover {
          color: #1C2734;
        }

        .mobile-service-link.active {
          color: #577D8E;
          font-weight: 700;
          background-color: rgba(87, 125, 142, 0.1);
          padding-left: 1rem;
          border-left: 3px solid #577D8E;
        }

        .mobile-service-link.view-all {
          font-weight: 600;
          color: #1C2734;
          margin-top: 0.5rem;
          padding-top: 1rem;
          border-top: 2px solid #e5e7eb;
        }

        /* Mobile Hourly Services Button */
        .mobile-hourly-button {
          display: block;
          background: #577D8E;
          color: white;
          text-decoration: none;
          text-align: center;
          padding: 1.2rem;
          border-radius: 8px;
          font-weight: 700;
          font-size: 1.1rem;
          margin: 0;
          transition: all 0.3s ease;
          white-space: nowrap;
          width: 100%;
        }

        .mobile-hourly-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(87, 125, 142, 0.3);
          background: #4a6a7a;
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
