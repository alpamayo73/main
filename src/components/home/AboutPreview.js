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
      backgroundColor: '#f9fafb'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          alignItems: 'center'
        }}>
          {/* Content */}
          <div>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 'bold',
              color: '#1C2734',
              marginBottom: '1.5rem'
            }}>
              Luxury Renovation Experts in Dubai
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: '#6b7280',
              marginBottom: '2rem',
              lineHeight: 1.6
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
              marginBottom: '2rem'
            }}>
              {highlights.map((highlight, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <span style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#577D8E',
                    borderRadius: '50%',
                    marginRight: '0.75rem',
                    flexShrink: 0
                  }}></span>
                  <span style={{
                    color: '#374151'
                  }}>{highlight}</span>
                </div>
              ))}
            </div>

            <Link 
              href="/about"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                backgroundColor: '#577D8E',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '8px',
                fontWeight: 'bold',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#1C2734';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#577D8E';
              }}
            >
              Learn More About Us
            </Link>
          </div>

          {/* Image */}
          <div style={{ position: 'relative' }}>
            <div style={{
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
              borderRadius: '12px',
              overflow: 'hidden'
            }}>
              <img 
                src="https://images.unsplash.com/photo-1558036117-15e82a2c9c7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Luxury renovation in Dubai"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '12px'
                }}
              />
            </div>
            {/* Experience Badge */}
            <div style={{
              position: 'absolute',
              bottom: '-1.5rem',
              right: '-1.5rem',
              backgroundColor: '#1C2734',
              color: 'white',
              padding: '1.5rem',
              borderRadius: '8px',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '1.875rem',
                  fontWeight: 'bold'
                }}>5+</div>
                <div style={{ fontSize: '0.875rem' }}>Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 1024px) {
          div > div:first-child {
            grid-template-columns: 1fr 1fr;
          }
          
          div > div:first-child > div:first-child > div {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </section>
  );
}
