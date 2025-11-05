import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          {/* Main Footer Content */}
          <div className="footer-main">
            <div className="footer-grid">
              {/* Company Info */}
              <div className="company-info">
                <h3 className="company-name">ALPAMAYO TECHNICAL SERVICES</h3>
                <p className="company-description">
                  Premium renovation and technical services in Dubai. Transforming spaces with luxury 
                  and precision for villas, apartments, offices, and commercial establishments.
                </p>
                <div className="contact-details">
                  <div className="contact-detail">
                    <span className="contact-icon">📞</span>
                    <a href="tel:+971589071754" className="contact-link">+971 58 907 1754</a>
                  </div>
                  <div className="contact-detail">
                    <span className="contact-icon">✉️</span>
                    <a href="mailto:info@thealpamayo.com" className="contact-link">info@thealpamayo.com</a>
                  </div>
                  <div className="contact-detail">
                    <span className="contact-icon">📍</span>
                    <span>Al Qouz, Dubai, United Arab Emirates</span>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="social-links">
                  <a 
                    href="https://web.facebook.com/profile.php?id=61572738681594" 
                    className="social-link facebook" 
                    aria-label="Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.instagram.com/alpamayo_uae" 
                    className="social-link instagram" 
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/alpamayo-technical-services-l-l-c/" 
                    className="social-link linkedin" 
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://api.whatsapp.com/send?phone=971589071754" 
                    className="social-link whatsapp" 
                    aria-label="WhatsApp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.464"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Pages Menu */}
              <div className="footer-section">
                <h4 className="footer-title">PAGES</h4>
                <ul className="footer-links">
                  <li><Link href="/" className="footer-link">Home</Link></li>
                  <li><Link href="/about" className="footer-link">About Us</Link></li>
                  <li><Link href="/services" className="footer-link">All Services</Link></li>
                  <li><Link href="/projects" className="footer-link">Our Projects</Link></li>
                  <li><Link href="/contact" className="footer-link">Contact Us</Link></li>
                  <li><Link href="/faq" className="footer-link">FAQs</Link></li>
                </ul>
              </div>

              {/* Renovation Services */}
              <div className="footer-section">
                <h4 className="footer-title">RENOVATION SERVICES</h4>
                <ul className="footer-links">
                  <li><Link href="/services/villa-renovation" className="footer-link">Villa Renovation</Link></li>
                  <li><Link href="/services/apartment-renovation" className="footer-link">Apartment Renovation</Link></li>
                  <li><Link href="/services/office-renovation" className="footer-link">Office Renovation</Link></li>
                  <li><Link href="/services/renovation" className="footer-link">All Renovation Services</Link></li>
                </ul>
              </div>

              {/* Specialized Services */}
              <div className="footer-section">
                <h4 className="footer-title">SPECIALIZED SERVICES</h4>
                <ul className="footer-links">
                  <li><Link href="/services/tiles-installation" className="footer-link">Tiles Installation</Link></li>
                  <li><Link href="/services/false-ceiling-partitions" className="footer-link">False Ceiling & Partitions</Link></li>
                  <li><Link href="/services/painting" className="footer-link">Painting</Link></li>
                  <li><Link href="/services/carpentry" className="footer-link">Carpentry</Link></li>
                  <li><Link href="/services/electrical" className="footer-link">Electrical</Link></li>
                  <li><Link href="/services/air-conditioning" className="footer-link">Air Conditioning</Link></li>
                  <li><Link href="/services/handyman" className="footer-link">Handyman</Link></li>
                  <li><Link href="/services/specialized" className="footer-link">All Specialized Services</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action Bar */}
          <div className="footer-cta">
            <div className="cta-content">
              <div className="cta-text">
                <h4 className="cta-title">Ready to Transform Your Space?</h4>
                <p className="cta-description">Get professional renovation and technical services in Dubai</p>
              </div>
              <div className="cta-buttons">
                <a href="tel:+971589071754" className="cta-button primary">
                  <span className="button-icon">📞</span>
                  Call Now
                </a>
                <a href="https://api.whatsapp.com/send?phone=971589071754" className="cta-button secondary">
                  <span className="button-icon">💬</span>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p className="copyright">
                &copy; 2024 Alpamayo Technical Services. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .footer {
          background: linear-gradient(135deg, #1C2734 0%, #0f1720 100%);
          color: white;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Main Footer Content */
        .footer-main {
          padding: 4rem 20px 2rem;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 3rem;
        }

        .company-info {
          margin-bottom: 2rem;
        }

        .company-name {
          font-size: 1.4rem;
          font-weight: 800;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #ffffff;
        }

        .company-description {
          color: #d1d5db;
          margin-bottom: 1.5rem;
          line-height: 1.6;
          font-size: 0.95rem;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          margin-bottom: 1.5rem;
        }

        .contact-detail {
          display: flex;
          align-items: flex-start;
          color: #d1d5db;
          font-size: 0.9rem;
        }

        .contact-icon {
          margin-right: 0.8rem;
          font-size: 1rem;
          margin-top: 0.1rem;
        }

        .contact-link {
          color: #d1d5db;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contact-link:hover {
          color: #577D8E;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 8px;
          transition: all 0.3s ease;
          text-decoration: none;
          color: white;
        }

        .social-link.facebook {
          background-color: #1877F2;
        }

        .social-link.instagram {
          background: linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45, #FFDC80);
        }

        .social-link.linkedin {
          background-color: #0077B5;
        }

        .social-link.whatsapp {
          background-color: #25D366;
        }

        .social-link:hover {
          transform: translateY(-3px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        /* Footer Sections */
        .footer-section {
          margin-bottom: 1rem;
        }

        .footer-title {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 1.2rem;
          color: #ffffff;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
        }

        .footer-link {
          color: #d1d5db;
          text-decoration: none;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .footer-link:hover {
          color: #577D8E;
          transform: translateX(5px);
        }

        /* Call to Action Bar */
        .footer-cta {
          background: linear-gradient(135deg, #577D8E 0%, #3a5a6b 100%);
          padding: 2rem 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .cta-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .cta-text {
          flex: 1;
        }

        .cta-title {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: #ffffff;
        }

        .cta-description {
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.95rem;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
        }

        .cta-button {
          padding: 0.8rem 1.5rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .cta-button.primary {
          background-color: #1C2734;
          color: white;
        }

        .cta-button.primary:hover {
          background-color: #0f1720;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .cta-button.secondary {
          background-color: #25D366;
          color: white;
        }

        .cta-button.secondary:hover {
          background-color: #128C7E;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);
        }

        .button-icon {
          font-size: 1rem;
        }

        /* Footer Bottom */
        .footer-bottom {
          padding: 1.5rem 20px;
          background-color: rgba(0, 0, 0, 0.2);
        }

        .footer-bottom-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .copyright {
          color: #9ca3af;
          font-size: 0.85rem;
          text-align: center;
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .footer-main {
            padding: 3rem 20px 2rem;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }

          .company-info {
            text-align: center;
            margin-bottom: 1rem;
          }

          .contact-details {
            align-items: center;
          }

          .contact-detail {
            justify-content: center;
          }

          .social-links {
            justify-content: center;
          }

          .footer-section {
            text-align: center;
          }

          .footer-links {
            align-items: center;
          }

          /* Mobile CTA */
          .footer-cta {
            padding: 1.5rem 20px;
          }

          .cta-content {
            flex-direction: column;
            gap: 1.5rem;
            text-align: center;
          }

          .cta-buttons {
            flex-direction: column;
            width: 100%;
            max-width: 300px;
          }

          .cta-button {
            justify-content: center;
          }
        }

        /* Tablet Styles */
        @media (min-width: 769px) and (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 2fr 1fr 1fr;
            gap: 2rem;
          }

          .footer-section:nth-child(4) {
            grid-column: 1 / -1;
            margin-top: 1rem;
          }

          .footer-section:nth-child(4) .footer-links {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1rem 2rem;
          }

          .cta-content {
            flex-direction: column;
            gap: 1.5rem;
            text-align: center;
          }

          .cta-buttons {
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
}
