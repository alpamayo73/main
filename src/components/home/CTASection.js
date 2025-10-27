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
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 'bold',
          marginBottom: '1.5rem'
        }}>
          Ready to Transform Your Space?
        </h2>
        <p style={{
          fontSize: '1.25rem',
          marginBottom: '2rem',
          maxWidth: '600px',
          margin: '0 auto',
          opacity: 0.9
        }}>
          Contact us today for a free consultation and let's bring your vision to life with our premium renovation and AC services.
        </p>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          justifyContent: 'center',
          marginBottom: '3rem'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: '8px',
            padding: '1rem'
          }}>
            <span style={{ fontSize: '1.125rem', marginRight: '0.75rem' }}>📞</span>
            <span style={{ fontSize: '1.125rem' }}>+971589071754</span>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: '8px',
            padding: '1rem'
          }}>
            <span style={{ fontSize: '1.125rem', marginRight: '0.75rem' }}>✉️</span>
            <span style={{ fontSize: '1.125rem' }}>info@thealpamayo.com</span>
          </div>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          justifyContent: 'center'
        }}>
          <Link 
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white',
              color: '#1C2734',
              padding: '1rem 2rem',
              borderRadius: '8px',
              fontWeight: 'bold',
              textDecoration: 'none',
              fontSize: '1.125rem',
              transition: 'all 0.3s ease'
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
            <span style={{ marginRight: '0.5rem' }}>💬</span>
            Get Free Quote
          </Link>
          <Link 
            href="/services"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid white',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '8px',
              fontWeight: 'bold',
              textDecoration: 'none',
              fontSize: '1.125rem',
              transition: 'all 0.3s ease'
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
          fontSize: '0.875rem',
          opacity: 0.75
        }}>
          <p>Al Qouz, Dubai, United Arab Emirates</p>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 640px) {
          div > div:nth-child(3) {
            flex-direction: row;
          }
          
          div > div:nth-child(4) {
            flex-direction: row;
          }
        }
      `}</style>
    </section>
  );
}
