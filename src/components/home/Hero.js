import Link from 'next/link';

export default function Hero() {
  return (
    <section style={{
      position: 'relative',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #1C2734 0%, #577D8E 100%)',
      color: 'white',
      overflow: 'hidden'
    }}>
      {/* Background Image with Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(https://images.unsplash.com/photo-1540518614846-7eded1027f2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'black',
          opacity: 0.5
        }}></div>
      </div>
      
      {/* Content */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 10
      }}>
        <h1 style={{
          fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
          fontWeight: 'bold',
          marginBottom: '1.5rem',
          lineHeight: 1.2
        }}>
          Luxury Renovation &<br />AC Services in Dubai
        </h1>
        <p style={{
          fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
          marginBottom: '2rem',
          maxWidth: '800px',
          marginLeft: 'auto',
          marginRight: 'auto',
          lineHeight: 1.6
        }}>
          Transforming spaces with premium quality, exceptional craftsmanship, and innovative solutions for villas, apartments, and offices.
        </p>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Link 
            href="/services" 
            style={{
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
            Explore Our Services
          </Link>
          <Link 
            href="/contact" 
            style={{
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
            Get Free Consultation
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        animation: 'bounce 2s infinite'
      }}>
        <div style={{
          width: '24px',
          height: '40px',
          border: '2px solid white',
          borderRadius: '12px',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <div style={{
            width: '4px',
            height: '12px',
            backgroundColor: 'white',
            borderRadius: '2px',
            marginTop: '8px'
          }}></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          40% {
            transform: translateX(-50%) translateY(-10px);
          }
          60% {
            transform: translateX(-50%) translateY(-5px);
          }
        }
        
        @media (min-width: 640px) {
          div > div {
            flex-direction: row;
          }
        }
      `}</style>
    </section>
  );
}
