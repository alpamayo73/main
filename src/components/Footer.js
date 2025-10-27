import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="company-info">
              <h3 className="company-name">Alpamayo Technical Services</h3>
              <p className="company-description">
                Premium renovation and AC services in Dubai. Transforming spaces with luxury 
                and precision for villas, apartments, and offices.
              </p>
              <div className="contact-details">
                <div className="contact-detail">
                  <span className="contact-icon">📞</span>
                  <span>+971589071754</span>
                </div>
                <div className="contact-detail">
                  <span className="contact-icon">✉️</span>
                  <span>info@thealpamayo.com</span>
                </div>
                <div className="contact-detail">
                  <span className="contact-icon">📍</span>
                  <span>Al Qouz, Dubai, United Arab Emirates</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="footer-section">
              <h4 className="footer-title">Services</h4>
              <ul className="footer-links">
                <li><Link href="/services/renovation" className="footer-link">Renovation</Link></li>
                <li><Link href="/services/ac-services" className="footer-link">AC Services</Link></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-links">
                <li><Link href="/" className="footer-link">Home</Link></li>
                <li><Link href="/about" className="footer-link">About</Link></li>
                <li><Link href="/services" className="footer-link">Services</Link></li>
                <li><Link href="/contact" className="footer-link">Contact</Link></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2024 Alpamayo Technical Services. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .footer {
          background-color: #1C2734;
          color: white;
          padding: 3rem 0;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 2rem;
        }

        .company-name {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .company-description {
          color: #d1d5db;
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .contact-detail {
          display: flex;
          align-items: center;
        }

        .contact-icon {
          margin-right: 0.5rem;
        }

        .footer-section {
          margin-bottom: 1rem;
        }

        .footer-title {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .footer-link {
          color: #d1d5db;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-link:hover {
          color: white;
        }

        .footer-bottom {
          border-top: 1px solid #4b5563;
          margin-top: 2rem;
          padding-top: 2rem;
          text-align: center;
          color: #d1d5db;
        }

        /* Mobile Styles */
        @media (max-width: 767px) {
          .footer {
            padding: 2rem 0;
          }
          
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .company-info {
            text-align: center;
          }
          
          .footer-section {
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}
