import Link from 'next/link';

export default function FeaturedServices() {
  const featuredServices = [
    {
      title: 'Villa Renovation',
      description: 'Transform your villa into a luxury masterpiece with our comprehensive renovation services.',
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/renovation#villa',
      icon: '🏠'
    },
    {
      title: 'VRF AC Systems',
      description: 'Advanced VRF AC solutions for optimal climate control in large spaces.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25856cd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/ac-services#vrf',
      icon: '❄️'
    },
    {
      title: 'Apartment Renovation',
      description: 'Modernize your apartment with innovative design solutions.',
      image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/renovation#apartment',
      icon: '🏢'
    },
    {
      title: 'Split AC Systems',
      description: 'Efficient split air conditioner installation and maintenance.',
      image: 'https://images.unsplash.com/photo-1581993192008-63fd1ea7de1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/ac-services#split',
      icon: '🌡️'
    },
    {
      title: 'Office Renovation',
      description: 'Create inspiring, productive workspaces.',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/renovation#office',
      icon: '💼'
    },
    {
      title: 'Water Chiller FCU',
      description: 'Professional water chiller installation for large-scale cooling.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/ac-services#chiller',
      icon: '🌀'
    }
  ];

  return (
    <section style={{
      padding: '3rem 0',
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
          marginBottom: '3rem'
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
            fontSize: '2rem',
            fontWeight: '700',
            color: '#1C2734',
            marginBottom: '1rem',
            lineHeight: 1.2
          }}>
            Premium Services
          </h2>
          <p style={{
            fontSize: '1rem',
            color: '#6b7280',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Discover our comprehensive range of luxury renovation and professional AC services.
          </p>
        </div>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '1.5rem',
          marginBottom: '3rem'
        }}>
          {featuredServices.map((service, index) => (
            <div 
              key={index}
              style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease'
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
                    backgroundPosition: 'center'
                  }}
                ></div>
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  backgroundColor: 'white',
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                }}>
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div style={{
                padding: '1.5rem'
              }}>
                <h3 style={{
                  fontSize: '1.2rem',
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
                    fontSize: '0.9rem'
                  }}
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{
          textAlign: 'center',
          backgroundColor: 'white',
          padding: '2rem 1.5rem',
          borderRadius: '12px',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            color: '#1C2734',
            marginBottom: '1rem'
          }}>
            Ready to Start Your Project?
          </h3>
          <p style={{
            color: '#6b7280',
            marginBottom: '1.5rem',
            lineHeight: 1.6
          }}>
            Let's discuss your renovation or AC service needs.
          </p>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            alignItems: 'center'
          }}>
            <Link 
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                backgroundColor: '#577D8E',
                color: 'white',
                padding: '0.8rem 1.5rem',
                borderRadius: '8px',
                fontWeight: '600',
                textDecoration: 'none',
                fontSize: '0.9rem',
                width: '100%',
                maxWidth: '250px',
                justifyContent: 'center'
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
                padding: '0.8rem 1.5rem',
                borderRadius: '8px',
                fontWeight: '600',
                textDecoration: 'none',
                fontSize: '0.9rem',
                width: '100%',
                maxWidth: '250px',
                justifyContent: 'center'
              }}
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          section {
            padding: 4rem 0;
          }
          
          h2 {
            font-size: 2.5rem;
          }
          
          div > div:nth-child(2) {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
          
          div > div
