import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentService, setCurrentService] = useState(0);
  const services = ['Villa Renovation', 'Apartment Renovation', 'Office Renovation'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{
      position: 'relative',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      overflow: 'hidden'
    }}>
      {/* Background Image with Theme Overlay */}
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
          background: 'linear-gradient(135deg, rgba(28, 39, 52, 0.8) 0%, rgba(87, 125, 142, 0.7) 100%)'
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
          fontSize: 'clamp(2rem, 4vw, 3.5rem)',
          fontWeight: 'bold',
          marginBottom: '1rem',
          lineHeight: 1.2
        }}>
          Premium Renovation & AC Services in Dubai
        </h1>
        
        {/* Animated Services */}
        <div style={{
          fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
          fontWeight: '600',
          marginBottom: '2rem',
          minHeight: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <span style={{
            opacity: 1,
            transition: 'opacity 0.5s ease'
          }}>
            {services[currentService]}
          </span>
        </div>

        <p style={{
          fontSize: '1.125rem',
          marginBottom: '2.5rem',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: 1.6,
          opacity: 0.9
        }}>
          Transforming spaces with premium quality, exceptional craftsmanship, and innovative solutions.
        </p>

        {/* Inline Buttons */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          <Link 
            href="/services" 
            style={{
              backgroundColor: 'white',
              color: '#1C2734',
              padding: '0.75rem 1.5rem',
              borderRadius: '6px',
              fontWeight: 'bold',
              textDecoration: 'none',
              fontSize: '0.875rem',
              transition: 'all 0.3s ease',
              border: 'none',
              cursor: 'pointer'
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
            Explore Services
          </Link>
          <Link 
            href="/contact" 
            style={{
              border: '2px solid white',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '6px',
              fontWeight: 'bold',
              textDecoration: 'none',
              fontSize: '0.875rem',
              transition: 'all 0.3s ease',
              backgroundColor: 'transparent'
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
            Free Consultation
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
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        span {
          animation: fadeIn 0.5s ease;
        }
      `}</style>
    </section>
  );
}
