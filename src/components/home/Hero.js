import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentService, setCurrentService] = useState(0);
  const services = ['Villa Renovation', 'Apartment Renovation', 'Office Renovation'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 2000);
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
      {/* Background Image with Modern Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url(/images/reno.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}></div>
      
      {/* Modern Gradient Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, rgba(28, 39, 52, 0.9) 0%, rgba(87, 125, 142, 0.7) 50%, rgba(28, 39, 52, 0.8) 100%)'
      }}></div>

      {/* Geometric Pattern Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'linear-gradient(30deg, transparent 49%, rgba(255,255,255,0.1) 50%, transparent 51%)',
        backgroundSize: '10px 10px',
        opacity: 0.3
      }}></div>
      
      {/* Content */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 10
      }}>
        {/* Badge */}
        <div style={{
          display: 'inline-block',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          padding: '0.5rem 1rem',
          borderRadius: '20px',
          fontSize: '0.8rem',
          fontWeight: '500',
          marginBottom: '1.5rem',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          🏆 Premium Services in Dubai
        </div>

        <h1 style={{
          fontSize: '3rem',
          fontWeight: '700',
          marginBottom: '0.5rem',
          lineHeight: 1.1,
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
        }}>
          Luxury Renovation
          <br />
          & AC Services
        </h1>
        
        {/* Animated Services */}
        <div style={{
          fontSize: '1.8rem',
          fontWeight: '600',
          marginBottom: '1.5rem',
          minHeight: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <span key={currentService} style={{
            display: 'inline-block',
            animation: 'fadeIn 0.8s ease-in-out',
            background: 'linear-gradient(45deg, #fff, #577D8E)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            {services[currentService]}
          </span>
        </div>

        <p style={{
          fontSize: '1.1rem',
          marginBottom: '2.5rem',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: 1.6,
          opacity: 0.9,
          fontWeight: '300'
        }}>
          Transforming Dubai's spaces with premium quality, exceptional craftsmanship, 
          and innovative renovation solutions for modern living.
        </p>

        {/* Modern Buttons */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Link 
            href="/services" 
            style={{
              backgroundColor: '#577D8E',
              color: 'white',
              padding: '0.8rem 1.8rem',
              borderRadius: '8px',
              fontWeight: '600',
              textDecoration: 'none',
              fontSize: '0.9rem',
              transition: 'all 0.3s ease',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(87, 125, 142, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#1C2734';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 25px rgba(28, 39, 52, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#577D8E';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(87, 125, 142, 0.3)';
            }}
          >
            Explore Services
          </Link>
          <Link 
            href="/contact" 
            style={{
              border: '2px solid rgba(255, 255, 255, 0.8)',
              color: 'white',
              padding: '0.8rem 1.8rem',
              borderRadius: '8px',
              fontWeight: '600',
              textDecoration: 'none',
              fontSize: '0.9rem',
              transition: 'all 0.3s ease',
              backgroundColor: 'transparent',
              backdropFilter: 'blur(10px)'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.color = '#1C2734';
              e.target.style.borderColor = 'white';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = 'white';
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.8)';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            Free Consultation
          </Link>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '3rem',
          marginTop: '3rem',
          opacity: 0.9
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.2rem' }}>5+</div>
            <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>Years Experience</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.2rem' }}>200+</div>
            <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>Projects Completed</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.2rem' }}>98%</div>
            <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>Client Satisfaction</div>
          </div>
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
          width: '30px',
          height: '50px',
          border: '2px solid rgba(255, 255, 255, 0.5)',
          borderRadius: '15px',
          display: 'flex',
          justifyContent: 'center',
          position: 'relative'
        }}>
          <div style={{
            width: '4px',
            height: '12px',
            backgroundColor: 'white',
            borderRadius: '2px',
            position: 'absolute',
            top: '10px',
            animation: 'scroll 2s infinite'
          }}></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
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
        
        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(20px);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
