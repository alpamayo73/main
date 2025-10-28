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
                  Premium renovation and AC technical services in Dubai. Transforming spaces with luxury 
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
                  <a href="#" className="social-link" aria-label="Facebook">
                    <span className="social-icon">📘</span>
                  </a>
                  <a href="#" className="social-link" aria-label="Instagram">
                    <span className="social-icon">📷</span>
                  </a>
                  <a href="#" className="social-link" aria-label="LinkedIn">
                    <span className="social-icon">💼</span>
                  </a>
                  <a href="https://wa.me/971589071754" className="social-link" aria-label="WhatsApp">
                    <span className="social-icon">💬</span>
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

              {/* AC Services */}
              <div className="footer-section">
                <h4 className="footer-title">AC SERVICES</h4>
                <ul className="footer-links">
                  <li><Link href="/services/vrf-ac-systems" className="footer-link">VRF AC Systems</Link></li>
                  <li><Link href="/services/split-ac-systems" className="footer-link">Split AC Systems</Link></li>
                  <li><Link href="/services/water-chiller-fcu" className="footer-link">Water Chiller FCU</Link></li>
                  <li><Link href="/services/ac-services" className="footer-link">All AC Services</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action Bar */}
          <div className="footer-cta">
            <div className="cta-content">
              <div className="cta-text">
                <h4 className="cta-title">Ready to Transform Your Space?</h4>
                <p className="cta-description">Get professional renovation and AC services in Dubai</p>
              </div>
              <div className="cta-buttons">
                <a href="tel:+971589071754" className="cta-button primary">
                  <span className="button-icon">📞</span>
                  Call Now
                </a>
                <a href="https://wa.me/971589071754" className="cta-button secondary">
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
              <div className="footer-bottom-links">
                <Link href="/privacy" className="bottom-link">Privacy Policy</Link>
                <Link href="/terms" className="bottom-link">Terms of Service</Link>
                <Link href="/sitemap" className="bottom-link">Sitemap</Link>
              </div>
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
          width: 40px;
          height: 40px;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .social-link:hover {
          background-color: #577D8E;
          transform: translateY(-2px);
        }

        .social-icon {
          font-size: 1.2rem;
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
          justify-content: space-between;
          align-items: center;
        }

        .copyright {
          color: #9ca3af;
          font-size: 0.85rem;
        }

        .footer-bottom-links {
          display: flex;
          gap: 1.5rem;
        }

        .bottom-link {
          color: #9ca3af;
          text-decoration: none;
          font-size: 0.85rem;
          transition: color 0.3s ease;
        }

        .bottom-link:hover {
          color: #577D8E;
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

          /* Mobile Footer Bottom */
          .footer-bottom-content {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }

          .footer-bottom-links {
            flex-direction: column;
            gap: 0.8rem;
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
