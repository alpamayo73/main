import Link from 'next/link';

export default function CTASection() {
  return (
    <section style={{
      padding: '5rem 0',
      background: 'linear-gradient(135deg, #1C2734 0%, #577D8E 100%)',
      color: 'white',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)',
        opacity: 0.3
      }}></div>
      
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{
          display: 'inline-block',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)',
          padding: '0.5rem 1rem',
          borderRadius: '20px',
          fontSize: '0.875rem',
          fontWeight: '600',
          marginBottom: '1rem'
        }}>
          Get Started Today
        </div>
        
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 3.5rem)',
          fontWeight: 'bold',
          marginBottom: '1.5rem',
          lineHeight: 1.2
        }}>
          Ready to Transform Your Space?
        </h2>
        <p style={{
          fontSize: '1.25rem',
          marginBottom: '3rem',
          maxWidth: '700px',
          margin: '0 auto',
          opacity: 0.9,
          lineHeight: 1.6
        }}>
          Contact us today for a free consultation and let's bring your vision to life with our premium renovation and AC services. 
          We're committed to delivering excellence in every project.
        </p>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          justifyContent: 'center',
          marginBottom: '3rem',
          maxWidth: '500px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(10px)',
            borderRadius: '12px',
            padding: '1.25rem',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
            e.currentTarget.style.transform = 'scale(1.02)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
          >
            <span style={{ fontSize: '1.25rem', marginRight: '1rem' }}>📞</span>
            <span style={{ fontSize: '1.125rem', fontWeight: '500' }}>+971589071754</span>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(10px)',
            borderRadius: '12px',
            padding: '1.25rem',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
            e.currentTarget.style.transform = 'scale(1.02)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
          >
            <span style={{ fontSize: '1.25rem', marginRight: '1rem' }}>✉️</span>
            <span style={{ fontSize: '1.125rem', fontWeight: '500' }}>info@thealpamayo.com</span>
          </div>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          justifyContent: 'center',
          maxWidth: '400px',
          margin: '0 auto'
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
              borderRadius: '10px',
              fontWeight: 'bold',
              textDecoration: 'none',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#f3f4f6';
              e.target.style.transform = 'scale(1.05)';
              e.target.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
            }}
          >
            <span style={{ marginRight: '0.75rem' }}>💬</span>
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
              borderRadius: '10px',
              fontWeight: 'bold',
              textDecoration: 'none',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.color = '#1C2734';
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = 'white';
              e.target.style.transform = 'scale(1)';
            }}
          >
            Explore Our Services
          </Link>
        </div>

        <div style={{
          marginTop: '3rem',
          fontSize: '0.875rem',
          opacity: 0.8
        }}>
          <p>📍 Al Qouz, Dubai, United Arab Emirates</p>
          <p style={{ marginTop: '0.5rem', opacity: 0.7 }}>Serving Dubai and surrounding areas with premium renovation and AC services</p>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 640px) {
          div > div:last-child > div:nth-child(4) {
            flex-direction: row;
          }
          
          div > div:last-child > div:nth-child(6) {
            flex-direction: row;
          }
        }
      `}</style>
    </section>
  );
}
