import Link from 'next/link';

export default function AboutPreview() {
  return (
    <section style={{
      padding: '3rem 0',
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
              fontSize: '2rem',
              fontWeight: '700',
              color: '#1C2734',
              marginBottom: '1.5rem',
              lineHeight: 1.2,
              textAlign: 'center'
            }}>
              Luxury Renovation Experts in Dubai
            </h2>
            
            <p style={{
              fontSize: '1rem',
              color: '#6b7280',
              marginBottom: '2rem',
              lineHeight: 1.6,
              textAlign: 'center'
            }}>
              Alpamayo Technical Services brings unparalleled expertise in luxury renovations 
              and professional AC services to Dubai's most discerning clients. With years of 
              experience and a commitment to excellence, we transform spaces into exceptional 
              living and working environments.
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              marginBottom: '2rem',
              alignItems: 'center'
            }}>
              <div style={{
                backgroundColor: '#577D8E',
                color: 'white',
                padding: '1rem 1.5rem',
                borderRadius: '8px',
                textAlign: 'center',
                width: '100%',
                maxWidth: '200px'
              }}>
                <div style={{
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  marginBottom: '0.25rem'
                }}>5+</div>
                <div style={{ fontSize: '0.9rem' }}>Years Experience</div>
              </div>
              <div style={{
                backgroundColor: '#1C2734',
                color: 'white',
                padding: '1rem 1.5rem',
                borderRadius: '8px',
                textAlign: 'center',
                width: '100%',
                maxWidth: '200px'
              }}>
                <div style={{
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  marginBottom: '0.25rem'
                }}>200+</div>
                <div style={{ fontSize: '0.9rem' }}>Projects Completed</div>
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <Link 
                href="/about"
                style={{
                  display: 'inline-block',
                  backgroundColor: '#577D8E',
                  color: 'white',
                  padding: '0.8rem 1.5rem',
                  borderRadius: '6px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  transition: 'all 0.3s ease'
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
            </div>
          </div>

          {/* Image */}
          <div style={{
            position: 'relative'
          }}>
            <img 
              src="https://images.unsplash.com/photo-1558036117-15e82a2c9c7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Luxury renovation in Dubai"
              style={{
                width: '100%',
                height: '300px',
                objectFit: 'cover',
                borderRadius: '12px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
              }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          section {
            padding: 4rem 0;
          }
          
          div > div:first-child {
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
          }
          
          h2 {
            font-size: 2.5rem;
            text-align: left;
          }
          
          p {
            text-align: left;
          }
          
          div > div:first-child > div:first-child > div:nth-child(3) {
            flex-direction: row;
            justify-content: flex-start;
          }
          
          div > div:first-child > div:first-child > div:last-child {
            text-align: left;
          }
          
          div > div:first-child > div:last-child img {
            height: 400px;
          }
        }
      `}</style>
    </section>
  );
}
