import Link from 'next/link';

export default function CTASection() {
  return (
    <section style={{
      padding: '5rem 0',
      background: 'linear-gradient(135deg, #1C2734 0%, #577D8E 100%)',
      color: 'white',
      textAlign: 'center'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '1rem'
        }}>
          Ready to Transform Your Space?
        </h2>
        <p style={{
          fontSize: '1.25rem',
          marginBottom: '2rem',
          maxWidth: '600px',
          margin: '0 auto',
          opacity: 0.9,
          lineHeight: 1.6
        }}>
          Contact us today for a free consultation and let's bring your vision to life with our premium renovation and AC services.
        </p>
        
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          marginBottom: '2rem'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            padding: '0.8rem 1.5rem',
            borderRadius: '6px'
          }}>
            <span style={{ marginRight: '0.5rem' }}>📞</span>
            <span>+971589071754</span>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            padding: '0.8rem 1.5rem',
            borderRadius: '6px'
          }}>
            <span style={{ marginRight: '0.5rem' }}>✉️</span>
            <span>info@thealpamayo.com</span>
          </div>
        </div>

        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center'
        }}>
          <Link 
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              backgroundColor: 'white',
              color: '#1C2734',
              padding: '0.8rem 1.5rem',
              borderRadius: '6px',
              fontWeight: 'bold',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              fontSize: '0.9rem'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#f3f4f6';
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.transform = 'scale(1)';
            }}
          >
            Get Free Quote
          </Link>
          <Link 
            href="/services"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              border: '2px solid white',
              color: 'white',
              padding: '0.8rem 1.5rem',
              borderRadius: '6px',
              fontWeight: 'bold',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              fontSize: '0.9rem'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.color = '#1C2734';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = 'white';
            }}
          >
            Explore Services
          </Link>
        </div>

        <div style={{
          marginTop: '2rem',
          fontSize: '0.9rem',
          opacity: 0.8
        }}>
          <p>📍 Al Qouz, Dubai, United Arab Emirates</p>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 767px) {
          section {
            padding: 3rem 0;
          }
          
          h2 {
            font-size: 2rem;
          }
          
          p {
            font-size: 1rem;
          }
          
          div > div:nth-child(3) {
            flex-direction: column;
            gap: 1rem;
            align-items: center;
          }
          
          div > div:nth-child(3) div {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }
          
          div > div:nth-child(5) {
            flex-direction: column;
            gap: 1rem;
            align-items: center;
          }
          
          div > div:nth-child(5) a {
            width: 100%;
            max-width: 250px;
          }
        }
      `}</style>
    </section>
  );
}
