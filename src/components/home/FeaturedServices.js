import Link from 'next/link';

export default function FeaturedServices() {
  const featuredServices = [
    {
      title: 'Villa Renovation',
      description: 'Transform your villa into a luxury masterpiece with our comprehensive renovation services. From design to execution.',
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/renovation#villa'
    },
    {
      title: 'VRF AC Systems',
      description: 'Advanced Variable Refrigerant Flow AC solutions for optimal climate control in large residential and commercial spaces.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25856cd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/ac-services#vrf'
    },
    {
      title: 'Office Renovation',
      description: 'Create inspiring, productive workspaces that reflect your brand identity and enhance employee well-being.',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/renovation#office'
    },
    {
      title: 'Split AC Systems',
      description: 'Efficient and reliable split air conditioner installation and maintenance for optimal cooling performance.',
      image: 'https://images.unsplash.com/photo-1581993192008-63fd1ea7de1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/ac-services#split'
    }
  ];

  return (
    <section style={{
      padding: '5rem 0',
      backgroundColor: 'white'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '4rem'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 'bold',
            color: '#1C2734',
            marginBottom: '1rem'
          }}>
            Our Premium Services
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: '#6b7280',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Discover our comprehensive range of luxury renovation and professional AC services tailored for Dubai's elite properties.
          </p>
        </div>

        {/* 2 Columns Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {featuredServices.map((service, index) => (
            <div 
              key={index}
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '16px',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.4s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.15)';
                e.currentTarget.style.transform = 'translateY(-8px)';
                const bg = e.currentTarget.querySelector('div:first-child');
                bg.style.transform = 'scale(1.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
                const bg = e.currentTarget.querySelector('div:first-child');
                bg.style.transform = 'scale(1)';
              }}
            >
              <div 
                style={{
                  height: '300px',
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transition: 'transform 0.4s ease'
                }}
              >
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(28, 39, 52, 0.85) 0%, rgba(28, 39, 52, 0.4) 100%)'
                }}></div>
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '2rem'
                }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    marginBottom: '0.75rem',
                    color: 'white'
                  }}>{service.title}</h3>
                  <p style={{
                    color: '#e5e7eb',
                    marginBottom: '1.5rem',
                    lineHeight: 1.6,
                    fontSize: '0.95rem'
                  }}>{service.description}</p>
                  <Link 
                    href={service.link}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      color: 'white',
                      fontWeight: '600',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      padding: '0.5rem 1rem',
                      border: '2px solid #577D8E',
                      borderRadius: '6px',
                      fontSize: '0.875rem'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#577D8E';
                      e.target.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.transform = 'scale(1)';
                    }}
                  >
                    Learn More <span style={{ marginLeft: '0.5rem' }}>→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link 
            href="/services"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              backgroundColor: '#1C2734',
              color: 'white',
              padding: '0.875rem 1.75rem',
              borderRadius: '8px',
              fontWeight: 'bold',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              fontSize: '0.875rem'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#577D8E';
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#1C2734';
              e.target.style.transform = 'scale(1)';
            }}
          >
            View All Services
            <span style={{ marginLeft: '0.5rem' }}>→</span>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          div > div:nth-child(2) {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </section>
  );
}
