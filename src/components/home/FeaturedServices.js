import Link from 'next/link';

export default function FeaturedServices() {
  const featuredServices = [
    {
      title: 'Villa Renovation',
      description: 'Transform your villa into a luxury masterpiece with our comprehensive renovation services. From design to execution, we deliver excellence.',
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/renovation#villa',
      icon: '🏠'
    },
    {
      title: 'VRF AC Systems',
      description: 'Advanced Variable Refrigerant Flow AC solutions for optimal climate control in large residential and commercial spaces.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25856cd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/ac-services#vrf',
      icon: '❄️'
    },
    {
      title: 'Apartment Renovation',
      description: 'Modernize your apartment with innovative design solutions that maximize space and enhance functionality.',
      image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/renovation#apartment',
      icon: '🏢'
    },
    {
      title: 'Split AC Systems',
      description: 'Efficient and reliable split air conditioner installation and maintenance for optimal cooling performance.',
      image: 'https://images.unsplash.com/photo-1581993192008-63fd1ea7de1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/ac-services#split',
      icon: '🌡️'
    },
    {
      title: 'Office Renovation',
      description: 'Create inspiring, productive workspaces that reflect your brand identity and enhance employee well-being.',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/renovation#office',
      icon: '💼'
    },
    {
      title: 'Water Chiller FCU',
      description: 'Professional water chiller fan coil unit installation and maintenance for large-scale cooling requirements.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/ac-services#chiller',
      icon: '🌀'
    }
  ];

  return (
    <section style={{
      padding: '5rem 0',
      backgroundColor: '#f8fafc'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '4rem'
        }}>
          <div style={{
            display: 'inline-block',
            backgroundColor: '#577D8E',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '20px',
            fontSize: '0.8rem',
            fontWeight: '600',
            marginBottom: '1rem'
          }}>
            Our Services
          </div>
          <h2 style={{
            fontSize: '2.8rem',
            fontWeight: '700',
            color: '#1C2734',
            marginBottom: '1rem',
            lineHeight: 1.2
          }}>
            Premium Services
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#6b7280',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Discover our comprehensive range of luxury renovation and professional AC services 
            tailored for Dubai's elite properties and commercial spaces.
          </p>
        </div>

        {/* Services Grid - 3 Columns Desktop */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {featuredServices.map((service, index) => (
            <div 
              key={index}
              style={{
                backgroundColor: 'white',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.4s ease',
                border: '1px solid rgba(0, 0, 0, 0.05)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.08)';
              }}
            >
              {/* Image Container */}
              <div style={{
                position: 'relative',
                height: '200px',
                overflow: 'hidden'
              }}>
                <div 
                  style={{
                    height: '100%',
                    backgroundImage: `url(${service.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'transform 0.4s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                  }}
                ></div>
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  backgroundColor: 'white',
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                }}>
                  {service.icon}
                </div>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to bottom, transparent 0%, rgba(28, 39, 52, 0.1) 100%)'
                }}></div>
              </div>

              {/* Content */}
              <div style={{
                padding: '1.5rem'
              }}>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  color: '#1C2734',
                  marginBottom: '0.8rem',
                  lineHeight: 1.3
                }}>
                  {service.title}
                </h3>
                <p style={{
                  color: '#6b7280',
                  lineHeight: 1.5,
                  fontSize: '0.9rem',
                  marginBottom: '1.5rem'
                }}>
                  {service.description}
                </p>
                <Link 
                  href={service.link}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    color: '#577D8E',
                    fontWeight: '600',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#1C2734';
                    e.target.style.transform = 'translateX(5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#577D8E';
                    e.target.style.transform = 'translateX(0)';
                  }}
                >
                  Learn More 
                  <span style={{ 
                    marginLeft: '0.5rem',
                    transition: 'transform 0.3s ease'
                  }}>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{
          textAlign: 'center',
          backgroundColor: 'white',
          padding: '3rem 2rem',
          borderRadius: '16px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
          border: '1px solid rgba(0, 0, 0, 0.05)'
        }}>
          <h3 style={{
            fontSize: '1.8rem',
            fontWeight: '600',
            color: '#1C2734',
            marginBottom: '1rem'
          }}>
            Ready to Start Your Project?
          </h3>
          <p style={{
            color: '#6b7280',
            marginBottom: '2rem',
            maxWidth: '500px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Let's discuss your renovation or AC service needs and create a customized solution for your space.
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Link 
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                backgroundColor: '#577D8E',
                color: 'white',
                padding: '0.8rem 1.8rem',
                borderRadius: '8px',
                fontWeight: '600',
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
              Get Free Quote
            </Link>
            <Link 
              href="/services"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                border: '2px solid #1C2734',
                color: '#1C2734',
                padding: '0.8rem 1.8rem',
                borderRadius: '8px',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                fontSize: '0.9rem'
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
              View All Services
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 767px) {
          section {
            padding: 3rem 0;
          }
          
          h2 {
            font-size: 2rem;
          }
          
          p {
            font-size: 1rem;
          }
          
          div > div:nth-child(2) {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            margin-bottom: 3rem;
          }
          
          div > div:last-child {
            padding: 2rem 1.5rem;
          }
          
          div > div:last-child h3 {
            font-size: 1.5rem;
          }
          
          div > div:last-child > div:last-child {
            flex-direction: column;
            gap: 1rem;
          }
          
          div > div:last-child > div:last-child a {
            width: 100%;
            max-width: 250px;
          }
        }
      `}</style>
    </section>
  );
}
