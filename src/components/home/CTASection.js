import Link from 'next/link';

export default function CTASection() {
  return (
    <>
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">
            Ready to Transform Your Space?
          </h2>
          <p className="cta-description">
            Contact us today for a free consultation and let's bring your vision to life with our premium renovation and AC services.
          </p>
          
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

          <div className="cta-buttons">
            <Link href="/contact" className="cta-btn primary">
              Get Free Quote
            </Link>
            <Link href="/services" className="cta-btn secondary">
              Explore Services
            </Link>
          </div>

          <div className="cta-footer">
            <p>📍 Al Qouz, Dubai, United Arab Emirates</p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .cta-section {
          padding: 5rem 0;
          background: linear-gradient(135deg, #1C2734 0%, #577D8E 100%);
          color: white;
          text-align: center;
        }

        .cta-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .cta-title {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .cta-description {
          font-size: 1.25rem;
          margin-bottom: 2rem;
          max-width: 600px;
          margin: 0 auto 2rem;
          opacity: 0.9;
          line-height: 1.6;
        }

        .contact-info {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 2rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          background-color: rgba(255, 255, 255, 0.1);
          padding: 0.8rem 1.5rem;
          border-radius: 6px;
        }

        .contact-icon {
          margin-right: 0.5rem;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          padding: 0.8rem 1.5rem;
          border-radius: 6px;
          font-weight: bold;
          text-decoration: none;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }

        .cta-btn.primary {
          background-color: white;
          color: #1C2734;
        }

        .cta-btn.primary:hover {
          background-color: #f3f4f6;
          transform: scale(1.05);
        }

        .cta-btn.secondary {
          border: 2px solid white;
          color: white;
          background-color: transparent;
        }

        .cta-btn.secondary:hover {
          background-color: white;
          color: #1C2734;
        }

        .cta-footer {
          margin-top: 2rem;
          font-size: 0.9rem;
          opacity: 0.8;
        }

        /* Mobile Styles */
        @media (max-width: 767px) {
          .cta-section {
            padding: 3rem 0;
          }
          
          .cta-title {
            font-size: 2rem;
          }
          
          .cta-description {
            font-size: 1rem;
          }
          
          .contact-info {
            flex-direction: column;
            gap: 1rem;
            align-items: center;
          }
          
          .contact-item {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }
          
          .cta-buttons {
            flex-direction: column;
            gap: 1rem;
            align-items: center;
          }
          
          .cta-btn {
            width: 100%;
            max-width: 250px;
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
}
