import Link from 'next/link';

export default function FeaturedServices() {
  const featuredServices = [
    {
      title: 'Villa Renovation',
      description: 'Transform your villa into a luxury masterpiece with our comprehensive renovation services. From design to execution, we deliver excellence.',
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/villa-renovation',
      icon: '🏠'
    },
    {
      title: 'Apartment Renovation',
      description: 'Modernize your apartment with innovative design solutions that maximize space and enhance functionality.',
      image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/apartment-renovation',
      icon: '🏢'
    },
    {
      title: 'Office Renovation',
      description: 'Create inspiring, productive workspaces that reflect your brand identity and enhance employee well-being.',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/office-renovation',
      icon: '💼'
    },
    {
      title: 'Tiles Installation',
      description: 'Professional tile installation with precision and attention to detail for floors, walls, and outdoor spaces.',
      image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/tiles-installation',
      icon: '🧱'
    },
    {
      title: 'False Ceiling & Partitions',
      description: 'Custom false ceiling designs and partition walls to enhance space utilization and aesthetic appeal.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/false-ceiling-partitions',
      icon: '🏗️'
    },
    {
      title: 'Painting Services',
      description: 'Professional interior and exterior painting with premium materials and flawless finish.',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/painting',
      icon: '🎨'
    },
    {
      title: 'Carpentry Services',
      description: 'Custom carpentry solutions including furniture, cabinets, and woodwork with expert craftsmanship.',
      image: 'https://images.unsplash.com/photo-1578775887800-6997be45adf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/carpentry',
      icon: '🪚'
    },
    {
      title: 'Electrical Services',
      description: 'Complete electrical solutions including wiring, lighting, and power systems installation and maintenance.',
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/electrical',
      icon: '⚡'
    },
    {
      title: 'Handyman Services',
      description: 'Comprehensive handyman services for all your home maintenance, repair, and installation needs.',
      image: 'https://images.unsplash.com/photo-1581093458791-8a0a1aa1c8e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/handyman',
      icon: '🔨'
    }
  ];

  return (
    <>
      <section className="services-section">
        <div className="services-container">
          {/* Header */}
          <div className="services-header">
            <div className="services-badge">
              Our Services
            </div>
            <h2 className="services-title">
              Premium Services
            </h2>
            <p className="services-subtitle">
              Discover our comprehensive range of luxury renovation and professional technical services 
              tailored for Dubai's elite properties and commercial spaces.
            </p>
          </div>

          {/* Services Grid */}
          <div className="services-grid">
            {featuredServices.map((service, index) => (
              <div key={index} className="service-card">
                {/* Image Container */}
                <div className="service-image-container">
                  <div 
                    className="service-image"
                    style={{ backgroundImage: `url(${service.image})` }}
                  ></div>
                  <div className="service-icon-container">
                    <div className="service-icon">
                      {service.icon}
                    </div>
                  </div>
                  <div className="image-overlay"></div>
                </div>

                {/* Content */}
                <div className="service-content">
                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-card-description">{service.description}</p>
                  <Link href={service.link} className="service-learn-link">
                    Learn More 
                    <span className="link-arrow">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="services-cta">
            <h3 className="cta-title">
              Ready to Start Your Project?
            </h3>
            <p className="cta-description">
              Let's discuss your renovation or technical service needs and create a customized solution for your space.
            </p>
            <div className="cta-buttons">
              <Link href="/contact" className="services-btn services-btn-primary">
                Get Free Quote
              </Link>
              <Link href="/services" className="services-btn services-btn-secondary">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .services-section {
          padding: 5rem 0;
          background-color: #f8fafc;
        }

        .services-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .services-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .services-badge {
          display: inline-block;
          background-color: #577D8E;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .services-title {
          font-size: 2.8rem;
          font-weight: 700;
          color: #1C2734;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .services-subtitle {
          font-size: 1.1rem;
          color: #6b7280;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .services-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .service-card {
          background-color: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          transition: all 0.4s ease;
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
        }

        .service-image-container {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .service-image {
          height: 100%;
          background-size: cover;
          background-position: center;
          transition: transform 0.4s ease;
        }

        .service-card:hover .service-image {
          transform: scale(1.1);
        }

        .service-icon-container {
          position: absolute;
          top: 1rem;
          left: 1rem;
        }

        .service-icon {
          background-color: white;
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom, transparent 0%, rgba(28, 39, 52, 0.1) 100%);
        }

        .service-content {
          padding: 1.5rem;
        }

        .service-card-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: #1C2734;
          margin-bottom: 0.8rem;
          line-height: 1.3;
        }

        .service-card-description {
          color: #6b7280;
          line-height: 1.5;
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
        }

        .service-learn-link {
          display: inline-flex;
          align-items: center;
          color: #577D8E;
          font-weight: 600;
          text-decoration: none;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }

        .service-learn-link:hover {
          color: #1C2734;
          transform: translateX(5px);
        }

        .link-arrow {
          margin-left: 0.5rem;
          transition: transform 0.3s ease;
        }

        .service-learn-link:hover .link-arrow {
          transform: translateX(3px);
        }

        .services-cta {
          text-align: center;
          background-color: white;
          padding: 3rem 2rem;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .cta-title {
          font-size: 1.8rem;
          font-weight: 600;
          color: #1C2734;
          margin-bottom: 1rem;
        }

        .cta-description {
          color: #6b7280;
          margin-bottom: 2rem;
          max-width: 500px;
          margin: 0 auto 2rem;
          line-height: 1.6;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          align-items: center;
        }

        .services-btn {
          padding: 0.8rem 1.8rem;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          text-align: center;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 140px;
        }

        .services-btn-primary {
          background-color: #577D8E;
          color: white;
        }

        .services-btn-primary:hover {
          background-color: #1C2734;
          transform: scale(1.05);
        }

        .services-btn-secondary {
          border: 2px solid #1C2734;
          color: #1C2734;
          background-color: transparent;
        }

        .services-btn-secondary:hover {
          background-color: #1C2734;
          color: white;
          transform: scale(1.05);
        }

        /* Mobile Styles */
        @media (max-width: 767px) {
          .services-section {
            padding: 3rem 0;
          }
          
          .services-title {
            font-size: 2rem;
          }
          
          .services-subtitle {
            font-size: 1rem;
          }
          
          .services-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            margin-bottom: 3rem;
          }
          
          .services-cta {
            padding: 2rem 1.5rem;
          }
          
          .cta-title {
            font-size: 1.5rem;
          }
          
          .cta-buttons {
            flex-direction: column;
            gap: 1rem;
          }
          
          .services-btn {
            width: 100%;
            max-width: 250px;
            justify-content: center;
          }
        }

        /* Tablet Styles */
        @media (min-width: 768px) and (max-width: 1024px) {
          .services-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </>
  );
}
