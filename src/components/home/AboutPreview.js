import Link from 'next/link';

export default function AboutPreview() {
  return (
    <section style={{
      padding: '4rem 0',
      backgroundColor: '#f9fafb'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center'
        }}>
          {/* Content */}
          <div>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#1C2734',
              marginBottom: '1.5rem',
              lineHeight: 1.2
            }}>
              Luxury Renovation Experts in Dubai
            </h2>
            
            <p style={{
              fontSize: '1.1rem',
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
              display: 'flex',
              gap: '1rem',
              marginBottom: '2rem'
            }}>
              <div style={{
                backgroundColor: '#577D8E',
                color: 'white',
                padding: '1rem 1.5rem',
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <div style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  marginBottom: '0.25rem'
                }}>5+</div>
                <div style={{ fontSize: '0.9rem' }}>Years Experience</div>
              </div>
              <div style={{
                backgroundColor: '#1C2734',
                color: 'white',
                padding: '1rem 1.5rem',
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <div style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  marginBottom: '0.25rem'
                }}>200+</div>
                <div style={{ fontSize: '0.9rem' }}>Projects Completed</div>
              </div>
            </div>

            <Link 
              href="/about"
              style={{
                display: 'inline-block',
                backgroundColor: '#577D8E',
                color: 'white',
                padding: '0.8rem 1.5rem',
                borderRadius: '6px',
                fontWeight: 'bold',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                fontSize: '0.9rem'
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

          {/* Image */}
          <div style={{
            position: 'relative'
          }}>
            <img 
              src="/images/reno.jpg"
              alt="Luxury renovation in Dubai"
              style={{
                width: '100%',
                height: '400px',
                objectFit: 'cover',
                borderRadius: '12px',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
