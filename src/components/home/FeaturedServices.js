import Link from 'next/link';

export default function FeaturedServices() {
  const featuredServices = [
    {
      title: 'Villa Renovation',
      description: 'Transform your villa into a luxury masterpiece with our comprehensive renovation services.',
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/renovation#villa'
    },
    {
      title: 'VRF AC Systems',
      description: 'Advanced VRF AC solutions for optimal climate control in large residential and commercial spaces.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25856cd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/ac-services#vrf'
    },
    {
      title: 'Office Renovation',
      description: 'Create inspiring, productive workspaces that reflect your brand identity.',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/renovation#office'
    },
    {
      title: 'Split AC Systems',
      description: 'Efficient and reliable split air conditioner installation and maintenance services.',
      image: 'https://images.unsplash.com/photo-1581993192008-63fd1ea7de1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/ac-services#split'
    }
  ];

  return (
    <section style={{
      padding: '4rem 0',
      backgroundColor: 'white'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#1C2734',
            marginBottom: '1rem'
          }}>
            Our Premium Services
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#6b7280',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Discover our comprehensive range of luxury renovation and professional AC services.
          </p>
        </div>

        {/* 2 Columns Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {featuredServices.map((service, index) => (
            <div 
              key={index}
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '12px',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
              }}
            >
              <div 
                style={{
                  height: '250px',
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(28, 39, 52, 0.9) 0%, rgba(28, 39, 52, 0.4) 100%)'
                }}></div>
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '1.5rem'
                }}>
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: '600',
                    marginBottom: '0.5rem',
                    color: 'white'
                  }}>{service.title}</h3>
                  <p style={{
                    color: '#e5e7eb',
                    marginBottom: '1rem',
                    lineHeight: 1.5,
                    fontSize: '0.9rem'
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
                      fontSize: '0.9rem'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#577D8E';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = 'white';
                    }}
                  >
                    Learn More →
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
              padding: '0.8rem 1.5rem',
              borderRadius: '6px',
              fontWeight: 'bold',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              fontSize: '0.9rem'
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
          </Link>
        </div>
      </div>
    </section>
  );
}
