import Link from 'next/link';

export default function AboutPreview() {
  const highlights = [
    'Premium Quality Materials',
    'Expert Craftsmanship',
    'Timely Project Completion',
    'Competitive Pricing',
    'Comprehensive Warranty',
    'Professional Team'
  ];

  return (
    <section style={{
      padding: '5rem 0',
      backgroundColor: '#f9fafb',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Elements */}
      <div style={{
        position: 'absolute',
        top: '-50%',
        right: '-10%',
        width: '400px',
        height: '400px',
        background: 'linear-gradient(135deg, #577D8E 0%, transparent 70%)',
        borderRadius: '50%',
        opacity: 0.1
      }}></div>
      
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '4rem',
          alignItems: 'center'
        }}>
          {/* Content */}
          <div>
            <div style={{
              display: 'inline-block',
              backgroundColor: '#577D8E',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              fontSize: '0.875rem',
              fontWeight: '600',
              marginBottom: '1rem'
            }}>
              About Our Company
            </div>
            
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 'bold',
              color: '#1C2734',
              marginBottom: '1.5rem',
              lineHeight: 1.2
            }}>
              Luxury Renovation Experts in Dubai
            </h2>
            
            <p style={{
              fontSize: '1.125rem',
              color: '#6b7280',
              marginBottom: '2rem',
              lineHeight: 1.7
            }}>
              Alpamayo Technical Services brings unparalleled expertise in luxury renovations 
              and professional AC services to Dubai's most discerning clients. With years of 
              experience and a commitment to excellence, we transform spaces into exceptional 
              living and working environments.
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '1rem',
              marginBottom: '2.5rem'
            }}>
              {highlights.map((highlight, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0.75rem',
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(5px)';
                  e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
                }}
                >
                  <div style={{
                    width: '24px',
                    height: '24px',
                    backgroundColor: '#577D8E',
                    borderRadius: '50%',
                    marginRight: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <span style={{ color: 'white', fontSize: '12px' }}>✓</span>
                  </div>
                  <span style={{
                    color: '#374151',
                    fontWeight: '500'
                  }}>{highlight}</span>
                </div>
              ))}
            </div>

            <div style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap'
            }}>
              <Link 
                href="/about"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  backgroundColor: '#577D8E',
                  color: 'white',
                  padding: '0.875rem 1.75rem',
                  borderRadius: '8px',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  fontSize: '0.875rem'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#1C2734';
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#577D8E';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                Learn More About Us
              </Link>
              <Link 
                href="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  border: '2px solid #1C2734',
                  color: '#1C2734',
                  padding: '0.875rem 1.75rem',
                  borderRadius: '8px',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  fontSize: '0.875rem'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#1C2734';
                  e.target.style.color = 'white';
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#1C2734';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                Get In Touch
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)'
            }}>
              <img 
                src="https://images.unsplash.com/photo-1558036117-15e82a2c9c7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Luxury renovation in Dubai"
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover'
                }}
              />
              {/* Overlay Gradient */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '50%',
                background: 'linear-gradient(to top, rgba(28, 39, 52, 0.8) 0%, transparent 100%)'
              }}></div>
            </div>
            
            {/* Stats Cards */}
            <div style={{
              position: 'absolute',
              bottom: '-2rem',
              left: '-1rem',
              right: '-1rem',
              display: 'flex',
              justifyContent: 'space-between',
              gap: '1rem'
            }}>
              <div style={{
                backgroundColor: 'white',
                padding: '1.5rem',
                borderRadius: '12px',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
                textAlign: 'center',
                flex: 1
              }}>
                <div style={{
                  fontSize: '1.875rem',
                  fontWeight: 'bold',
                  color: '#1C2734',
                  marginBottom: '0.25rem'
                }}>5+</div>
                <div style={{
                  fontSize: '0.875rem',
                  color: '#577D8E',
                  fontWeight: '600'
                }}>Years Experience</div>
              </div>
              <div style={{
                backgroundColor: 'white',
                padding: '1.5rem',
                borderRadius: '12px',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
                textAlign: 'center',
                flex: 1
              }}>
                <div style={{
                  fontSize: '1.875rem',
                  fontWeight: 'bold',
                  color: '#1C2734',
                  marginBottom: '0.25rem'
                }}>200+</div>
                <div style={{
                  fontSize: '0.875rem',
                  color: '#577D8E',
                  fontWeight: '600'
                }}>Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 1024px) {
          div > div:first-child > div:first-child {
            grid-template-columns: 1fr 1fr;
          }
          
          div > div:first-child > div:first-child > div:first-child > div:nth-child(3) {
            grid-template-columns: 1fr 1fr;
          }
        }
        
        @media (max-width: 1023px) {
          div > div:first-child > div:last-child > div:last-child {
            position: static;
            margin-top: 2rem;
          }
          
          div > div:first-child > div:last-child > div:last-child > div {
            position: static;
            margin-top: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
