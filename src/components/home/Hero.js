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
                <Link href="/services" className="btn btn-primary">
                  Explore Services
                </Link>
                <Link href="/contact" className="btn btn-secondary">
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
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          background-color: rgba(87, 125, 142, 0.1);
          color: #577D8E;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(87, 125, 142, 0.2);
        }

        .hero-title {
          font-size: 3rem;
          font-weight: 700;
          color: #1C2734;
          margin-bottom: 1rem;
          line-height: 1.1;
        }

        .gradient-text {
          background: linear-gradient(135deg, #577D8E, #1C2734);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .animated-services {
          font-size: 1.5rem;
          font-weight: 600;
          color: #577D8E;
          margin-bottom: 1.5rem;
          min-height: 40px;
          display: flex;
          align-items: center;
        }

        .service-text {
          display: inline-block;
          animation: fadeIn 0.8s ease-in-out;
        }

        .hero-description {
          font-size: 1.1rem;
          color: #6b7280;
          margin-bottom: 2rem;
          line-height: 1.6;
          font-weight: 400;
        }

        .features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 2.5rem;
        }

        .feature-item {
          display: flex;
          align-items: center;
          padding: 0.8rem;
          background-color: #f8fafc;
          border-radius: 8px;
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .feature-icon {
          font-size: 1.2rem;
          margin-right: 0.8rem;
        }

        .feature-text {
          font-size: 0.9rem;
          font-weight: 500;
          color: #1C2734;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          align-items: center;
          margin-bottom: 2.5rem;
        }

        .btn {
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
        }

        .btn-primary {
          background-color: #577D8E;
          color: white;
          box-shadow: 0 4px 15px rgba(87, 125, 142, 0.3);
        }

        .btn-primary:hover {
          background-color: #1C2734;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(28, 39, 52, 0.4);
        }

        .btn-secondary {
          border: 2px solid #1C2734;
          color: #1C2734;
          background-color: transparent;
        }

        .btn-secondary:hover {
          background-color: #1C2734;
          color: white;
          transform: translateY(-2px);
        }

        .hero-stats {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1C2734;
          margin-bottom: 0.2rem;
        }

        .stat-label {
          font-size: 0.8rem;
          color: #6b7280;
          font-weight: 500;
        }

        .hero-image {
          position: relative;
          height: 400px;
        }

        .image-container {
          width: 100%;
          height: 100%;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          position: relative;
        }

        .main-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
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
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          animation: float 3s ease-in-out infinite;
        }

        .experience {
          top: -20px;
          right: -20px;
          background-color: #577D8E;
          animation-delay: 0s;
        }

        .projects {
          bottom: -20px;
          left: -20px;
          background-color: #1C2734;
          animation-delay: 1.5s;
        }

        .floating-number {
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 0.2rem;
        }

        .floating-label {
          font-size: 0.8rem;
          opacity: 0.9;
        }

        .decorative-circle {
          position: absolute;
          border-radius: 50%;
          z-index: -1;
        }

        .circle-1 {
          top: 50%;
          right: -30px;
          transform: translateY(-50%);
          width: 100px;
          height: 100px;
          background-color: rgba(87, 125, 142, 0.1);
        }

        .circle-2 {
          bottom: 20px;
          right: 40px;
          width: 60px;
          height: 60px;
          background-color: rgba(28, 39, 52, 0.05);
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
            min-height: auto;
          }
          
          .hero-grid {
            grid-template-columns: 1fr;
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
            font-size: 2.2rem;
            text-align: center;
          }
          
          .animated-services {
            justify-content: center;
            text-align: center;
            font-size: 1.3rem;
          }
          
          .hero-description {
            text-align: center;
            font-size: 1rem;
          }
          
          .hero-buttons {
            flex-direction: column;
            gap: 1rem;
            align-items: center;
          }
          
          .btn {
            width: 100%;
            max-width: 300px;
            text-align: center;
          }
          
          .hero-stats {
            justify-content: space-around;
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
