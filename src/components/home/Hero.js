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

  const features = [
    { icon: '🏠', text: 'Villa Renovation' },
    { icon: '🏢', text: 'Apartment Renovation' },
    { icon: '💼', text: 'Office Renovation' },
    { icon: '❄️', text: 'AC Services' }
  ];

  const stats = [
    { number: '5+', label: 'Years Experience' },
    { number: '200+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' }
  ];

  return (
    <section style={{
      backgroundColor: 'white',
      padding: '4rem 0',
      minHeight: '500px',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        width: '100%'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center'
        }}>
          
          {/* Left Column - Content */}
          <div>
            {/* Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              backgroundColor: 'rgba(87, 125, 142, 0.1)',
              color: '#577D8E',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              fontSize: '0.8rem',
              fontWeight: '600',
              marginBottom: '1.5rem',
              border: '1px solid rgba(87, 125, 142, 0.2)'
            }}>
              <span style={{ marginRight: '0.5rem' }}>🏆</span>
              Premium Services in Dubai
            </div>

            <h1 style={{
              fontSize: '3rem',
              fontWeight: '700',
              color: '#1C2734',
              marginBottom: '1rem',
              lineHeight: 1.1
            }}>
              Luxury
              <span style={{
                background: 'linear-gradient(135deg, #577D8E, #1C2734)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}> Renovation </span>
              & AC Services
            </h1>

            {/* Animated Services */}
            <div style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: '#577D8E',
              marginBottom: '1.5rem',
              minHeight: '40px',
              display: 'flex',
              alignItems: 'center'
            }}>
              <span key={currentService} style={{
                display: 'inline-block',
                animation: 'fadeIn 0.8s ease-in-out'
              }}>
                {services[currentService]}
              </span>
            </div>

            <p style={{
              fontSize: '1.1rem',
              color: '#6b7280',
              marginBottom: '2rem',
              lineHeight: 1.6,
              fontWeight: '400'
            }}>
              Transforming Dubai's spaces with premium quality, exceptional craftsmanship, 
              and innovative renovation solutions. We deliver excellence in every project.
            </p>

            {/* Features Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
              marginBottom: '2.5rem'
            }}>
              {features.map((feature, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0.8rem',
                  backgroundColor: '#f8fafc',
                  borderRadius: '8px',
                  border: '1px solid rgba(0, 0, 0, 0.05)'
                }}>
                  <span style={{
                    fontSize: '1.2rem',
                    marginRight: '0.8rem'
                  }}>{feature.icon}</span>
                  <span style={{
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    color: '#1C2734'
                  }}>{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div style={{
              display: 'flex',
              gap: '1rem',
              alignItems: 'center',
              marginBottom: '2.5rem'
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
                  border: '2px solid #1C2734',
                  color: '#1C2734',
                  padding: '0.8rem 1.8rem',
                  borderRadius: '8px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  transition: 'all 0.3s ease',
                  backgroundColor: 'transparent'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#1C2734';
                  e.target.style.color = 'white';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#1C2734';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Free Consultation
              </Link>
            </div>

            {/* Stats */}
            <div style={{
              display: 'flex',
              gap: '2rem',
              alignItems: 'center'
            }}>
              {stats.map((stat, index) => (
                <div key={index} style={{ textAlign: 'center' }}>
                  <div style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: '#1C2734',
                    marginBottom: '0.2rem'
                  }}>{stat.number}</div>
                  <div style={{
                    fontSize: '0.8rem',
                    color: '#6b7280',
                    fontWeight: '500'
                  }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div style={{
            position: 'relative',
            height: '400px'
          }}>
            {/* Main Image */}
            <div style={{
              width: '100%',
              height: '100%',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
              position: 'relative'
            }}>
              <img 
                src="/images/reno.jpg" 
                alt="Luxury Renovation in Dubai"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                }}
              />
              
              {/* Overlay Gradient */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(45deg, rgba(87, 125, 142, 0.1) 0%, rgba(28, 39, 52, 0.05) 100%)'
              }}></div>
            </div>

            {/* Floating Elements */}
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              backgroundColor: '#577D8E',
              color: 'white',
              padding: '1rem',
              borderRadius: '12px',
              boxShadow: '0 10px 30px rgba(87, 125, 142, 0.3)',
              animation: 'float 3s ease-in-out infinite'
            }}>
              <div style={{ fontSize: '1.2rem', fontWeight: '700' }}>5+ Years</div>
              <div style={{ fontSize: '0.8rem', opacity: 0.9 }}>Experience</div>
            </div>

            <div style={{
              position: 'absolute',
              bottom: '-20px',
              left: '-20px',
              backgroundColor: '#1C2734',
              color: 'white',
              padding: '1rem',
              borderRadius: '12px',
              boxShadow: '0 10px 30px rgba(28, 39, 52, 0.3)',
              animation: 'float 3s ease-in-out infinite 1.5s'
            }}>
              <div style={{ fontSize: '1.2rem', fontWeight: '700' }}>200+</div>
              <div style={{ fontSize: '0.8rem', opacity: 0.9 }}>Projects</div>
            </div>

            {/* Decorative Background Elements */}
            <div style={{
              position: 'absolute',
              top: '50%',
              right: '-30px',
              transform: 'translateY(-50%)',
              width: '100px',
              height: '100px',
              backgroundColor: 'rgba(87, 125, 142, 0.1)',
              borderRadius: '50%',
              zIndex: -1
            }}></div>
            
            <div style={{
              position: 'absolute',
              bottom: '20px',
              right: '40px',
              width: '60px',
              height: '60px',
              backgroundColor: 'rgba(28, 39, 52, 0.05)',
              borderRadius: '50%',
              zIndex: -1
            }}></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { 
            opacity: 0; 
            transform: translateY(10px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        /* Mobile Styles */
        @media (max-width: 767px) {
          section {
            padding: 2rem 0;
            min-height: auto;
          }
          
          div > div:first-child {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          div > div:first-child > div:first-child {
            order: 2;
          }
          
          div > div:first-child > div:last-child {
            order: 1;
            height: 300px;
          }
          
          h1 {
            font-size: 2.2rem;
            text-align: center;
          }
          
          div > div:first-child > div:first-child > div:nth-child(3) {
            justify-content: center;
            text-align: center;
            font-size: 1.3rem;
          }
          
          p {
            text-align: center;
            font-size: 1rem;
          }
          
          div > div:first-child > div:first-child > div:nth-child(6) {
            flex-direction: column;
            gap: 1rem;
            align-items: center;
          }
          
          div > div:first-child > div:first-child > div:nth-child(6) a {
            width: 100%;
            max-width: 300px;
            text-align: center;
          }
          
          div > div:first-child > div:first-child > div:last-child {
            justify-content: space-around;
          }
          
          /* Hide floating elements on mobile */
          div > div:first-child > div:last-child > div:last-child {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
