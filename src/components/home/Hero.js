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
    <>
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-grid">
            
            {/* Left Column - Content */}
            <div className="hero-content">
              {/* Badge */}
              <div className="hero-badge">
                <span style={{ marginRight: '0.5rem' }}>🏆</span>
                Premium Services in Dubai
              </div>

              <h1 className="hero-title">
                Luxury
                <span className="gradient-text"> Renovation </span>
                & AC Services
              </h1>

              {/* Animated Services */}
              <div className="animated-services">
                <span key={currentService} className="service-text">
                  {services[currentService]}
                </span>
              </div>

              <p className="hero-description">
                Transforming Dubai's spaces with premium quality, exceptional craftsmanship, 
                and innovative renovation solutions. We deliver excellence in every project.
              </p>

              {/* Features Grid */}
              <div className="features-grid">
                {features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <span className="feature-icon">{feature.icon}</span>
                    <span className="feature-text">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="hero-buttons">
                <Link href="/services" className="hero-btn hero-btn-primary">
                  Explore Services
                </Link>
                <Link href="/contact" className="hero-btn hero-btn-secondary">
                  Free Consultation
                </Link>
              </div>

              {/* Stats */}
              <div className="hero-stats">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-item">
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="hero-image">
              <div className="image-container">
                <img 
                  src="/images/reno.jpg" 
                  alt="Luxury Renovation in Dubai"
                  className="main-image"
                />
                
                {/* Overlay Gradient */}
                <div className="image-overlay"></div>
              </div>

              {/* Floating Elements */}
              <div className="floating-element experience">
                <div className="floating-number">5+ Years</div>
                <div className="floating-label">Experience</div>
              </div>

              <div className="floating-element projects">
                <div className="floating-number">200+</div>
                <div className="floating-label">Projects</div>
              </div>

              {/* Decorative Background Elements */}
              <div className="decorative-circle circle-1"></div>
              <div className="decorative-circle circle-2"></div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero-section {
          background-color: white;
          padding: 4rem 0;
          min-height: 500px;
          display: flex;
          align-items: center;
        }

        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          width: '100%';
        }

        .hero-grid {
          display: grid;
          gridTemplateColumns: 1fr 1fr;
          gap: 4rem;
          alignItems: center;
        }

        .hero-badge {
          display: inline-flex;
          alignItems: center;
          backgroundColor: rgba(87, 125, 142, 0.1);
          color: #577D8E;
          padding: 0.5rem 1rem;
          borderRadius: 20px;
          fontSize: 0.8rem;
          fontWeight: 600;
          marginBottom: 1.5rem;
          border: 1px solid rgba(87, 125, 142, 0.2);
        }

        .hero-title {
          fontSize: 3rem;
          fontWeight: 700;
          color: #1C2734;
          marginBottom: 1rem;
          lineHeight: 1.1;
        }

        .gradient-text {
          background: linear-gradient(135deg, #577D8E, #1C2734);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .animated-services {
          fontSize: 1.5rem;
          fontWeight: 600;
          color: #577D8E;
          marginBottom: 1.5rem;
          minHeight: 40px;
          display: flex;
          alignItems: center;
        }

        .service-text {
          display: inline-block;
          animation: fadeIn 0.8s ease-in-out;
        }

        .hero-description {
          fontSize: 1.1rem;
          color: #6b7280;
          marginBottom: 2rem;
          lineHeight: 1.6;
          fontWeight: 400;
        }

        .features-grid {
          display: grid;
          gridTemplateColumns: 1fr 1fr;
          gap: 1rem;
          marginBottom: 2.5rem;
        }

        .feature-item {
          display: flex;
          alignItems: center;
          padding: 0.8rem;
          backgroundColor: #f8fafc;
          borderRadius: 8px;
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .feature-icon {
          fontSize: 1.2rem;
          marginRight: 0.8rem;
        }

        .feature-text {
          fontSize: 0.9rem;
          fontWeight: 500;
          color: #1C2734;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          alignItems: center;
          marginBottom: 2.5rem;
        }

        .hero-btn {
          padding: 0.8rem 1.8rem;
          borderRadius: 8px;
          fontWeight: 600;
          textDecoration: none;
          fontSize: 0.9rem;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          textAlign: center;
          display: inline-flex;
          alignItems: center;
          justifyContent: center;
          minWidth: 160px;
        }

        .hero-btn-primary {
          backgroundColor: #577D8E;
          color: white;
          boxShadow: 0 4px 15px rgba(87, 125, 142, 0.3);
        }

        .hero-btn-primary:hover {
          backgroundColor: #1C2734;
          transform: translateY(-2px);
          boxShadow: 0 8px 25px rgba(28, 39, 52, 0.4);
        }

        .hero-btn-secondary {
          border: 2px solid #1C2734;
          color: #1C2734;
          backgroundColor: transparent;
        }

        .hero-btn-secondary:hover {
          backgroundColor: #1C2734;
          color: white;
          transform: translateY(-2px);
        }

        .hero-stats {
          display: flex;
          gap: 2rem;
          alignItems: center;
        }

        .stat-item {
          textAlign: center;
        }

        .stat-number {
          fontSize: 1.5rem;
          fontWeight: 700;
          color: #1C2734;
          marginBottom: 0.2rem;
        }

        .stat-label {
          fontSize: 0.8rem;
          color: #6b7280;
          fontWeight: 500;
        }

        .hero-image {
          position: relative;
          height: 400px;
        }

        .image-container {
          width: 100%;
          height: 100%;
          borderRadius: 20px;
          overflow: hidden;
          boxShadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          position: relative;
        }

        .main-image {
          width: 100%;
          height: 100%;
          objectFit: cover;
          transition: transform 0.3s ease;
        }

        .main-image:hover {
          transform: scale(1.05);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, rgba(87, 125, 142, 0.1) 0%, rgba(28, 39, 52, 0.05) 100%);
        }

        .floating-element {
          position: absolute;
          color: white;
          padding: 1rem;
          borderRadius: 12px;
          boxShadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          animation: float 3s ease-in-out infinite;
        }

        .experience {
          top: -20px;
          right: -20px;
          backgroundColor: #577D8E;
          animationDelay: 0s;
        }

        .projects {
          bottom: -20px;
          left: -20px;
          backgroundColor: #1C2734;
          animationDelay: 1.5s;
        }

        .floating-number {
          fontSize: 1.2rem;
          fontWeight: 700;
          marginBottom: 0.2rem;
        }

        .floating-label {
          fontSize: 0.8rem;
          opacity: 0.9;
        }

        .decorative-circle {
          position: absolute;
          borderRadius: 50%;
          zIndex: -1;
        }

        .circle-1 {
          top: 50%;
          right: -30px;
          transform: translateY(-50%);
          width: 100px;
          height: 100px;
          backgroundColor: rgba(87, 125, 142, 0.1);
        }

        .circle-2 {
          bottom: 20px;
          right: 40px;
          width: 60px;
          height: 60px;
          backgroundColor: rgba(28, 39, 52, 0.05);
        }

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
          .hero-section {
            padding: 2rem 0;
            minHeight: auto;
          }
          
          .hero-grid {
            gridTemplateColumns: 1fr;
            gap: 2rem;
          }
          
          .hero-content {
            order: 2;
          }
          
          .hero-image {
            order: 1;
            height: 300px;
          }
          
          .hero-title {
            fontSize: 2.2rem;
            textAlign: center;
          }
          
          .animated-services {
            justifyContent: center;
            textAlign: center;
            fontSize: 1.3rem;
          }
          
          .hero-description {
            textAlign: center;
            fontSize: 1rem;
          }
          
          .hero-buttons {
            flexDirection: column;
            gap: 1rem;
            alignItems: center;
          }
          
          .hero-btn {
            width: 100%;
            maxWidth: 300px;
            textAlign: center;
          }
          
          .hero-stats {
            justifyContent: space-around;
          }
          
          .floating-element {
            display: none;
          }
          
          .decorative-circle {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
