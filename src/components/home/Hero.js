import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentService, setCurrentService] = useState(0);
  
  const slides = [
    {
      type: 'renovation',
      title: 'Luxury',
      highlighted: 'Renovation',
      subtitle: 'Services',
      services: ['Villa Renovation', 'Apartment Renovation', 'Office Renovation'],
      description: 'Transforming Dubai\'s spaces with premium quality, exceptional craftsmanship, and innovative renovation solutions. We deliver excellence in every project.',
      features: [
        { icon: '🏠', text: 'Villa Renovation' },
        { icon: '🏢', text: 'Apartment Renovation' },
        { icon: '💼', text: 'Office Renovation' },
        { icon: '🧱', text: 'Tiles Installation' },
        { icon: '🏗️', text: 'False Ceiling' },
        { icon: '🎨', text: 'Painting' }
      ],
      badge: '🏆 Premium Renovation Services'
    },
    {
      type: 'technical',
      title: 'Expert',
      highlighted: 'Technical',
      subtitle: 'Services',
      services: ['Tiles Installation', 'False Ceiling & Partitions', 'Painting', 'Carpentry', 'Electrical', 'Air Conditioning', 'Handyman'],
      description: 'Professional technical services with precision engineering, skilled craftsmanship, and reliable solutions for all your maintenance and installation needs.',
      features: [
        { icon: '🧱', text: 'Tiles Installation' },
        { icon: '🏗️', text: 'False Ceiling & Partitions' },
        { icon: '🎨', text: 'Painting' },
        { icon: '🪚', text: 'Carpentry' },
        { icon: '⚡', text: 'Electrical' },
        { icon: '❄️', text: 'Air Conditioning' },
        { icon: '🔨', text: 'Handyman' },
        { icon: '🔧', text: 'Maintenance' }
      ],
      badge: '🔧 Professional Technical Services'
    }
  ];

  const stats = [
    { number: '2+', label: 'Years Experience' },
    { number: '70+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' }
  ];

  // Auto-rotate slides
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  // Auto-rotate services for current slide
  useEffect(() => {
    const serviceInterval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % slides[currentSlide].services.length);
    }, 2000);
    return () => clearInterval(serviceInterval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <section className="hero-section">
        {/* Background Image with Overlay */}
        <div className="hero-background">
          <div className="background-image"></div>
          <div className="background-overlay"></div>
        </div>

        {/* Slider Container */}
        <div className="slider-container">
          {/* Navigation Arrows */}
          <button className="slider-arrow slider-arrow-left" onClick={prevSlide}>
            ‹
          </button>
          <button className="slider-arrow slider-arrow-right" onClick={nextSlide}>
            ›
          </button>

          {/* Slide Indicator Dots */}
          <div className="slide-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`slide-indicator ${currentSlide === index ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>

          {/* Slides */}
          <div className="slides-wrapper">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`slide ${currentSlide === index ? 'active' : ''}`}
              >
                <div className="hero-container">
                  <div className="hero-content">
                    {/* Badge */}
                    <div className="hero-badge">
                      <span style={{ marginRight: '0.5rem' }}>
                        {slide.type === 'renovation' ? '🏆' : '🔧'}
                      </span>
                      {slide.badge}
                    </div>

                    <h1 className="hero-title">
                      {slide.title}
                      <span className="gradient-text"> {slide.highlighted} </span>
                      {slide.subtitle}
                    </h1>

                    {/* Animated Services */}
                    <div className="animated-services">
                      <span key={currentService} className="service-text">
                        {slide.services[currentService]}
                      </span>
                    </div>

                    <p className="hero-description">
                      {slide.description}
                    </p>

                    {/* Features Grid */}
                    <div className="features-grid">
                      {slide.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="feature-item">
                          <span className="feature-icon">{feature.icon}</span>
                          <span className="feature-text">{feature.text}</span>
                        </div>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="hero-buttons">
                      <Link 
                        href={slide.type === 'renovation' ? '/services' : '/technical-services'} 
                        className="hero-btn hero-btn-primary"
                      >
                        {slide.type === 'renovation' ? 'Explore Services' : 'View Technical Services'}
                      </Link>
                      <Link href="/contact" className="hero-btn hero-btn-secondary">
                        Free Consultation
                      </Link>
                    </div>

                    {/* Stats */}
                    <div className="hero-stats">
                      {stats.map((stat, statIndex) => (
                        <div key={statIndex} className="stat-item">
                          <div className="stat-number">{stat.number}</div>
                          <div className="stat-label">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 4rem 0;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: -1;
        }

        .background-image {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url('/images/luxury-renovation-room.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: fixed;
        }

        .background-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(28, 39, 52, 0.85) 0%,
            rgba(87, 125, 142, 0.7) 50%,
            rgba(28, 39, 52, 0.9) 100%
          );
        }

        .slider-container {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .slides-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transform: translateX(50px);
          transition: all 0.8s ease-in-out;
          pointer-events: none;
        }

        .slide.active {
          opacity: 1;
          transform: translateX(0);
          pointer-events: all;
        }

        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          width: 100%;
          height: 100%;
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          color: white;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          background-color: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          color: white;
          padding: 0.6rem 1.2rem;
          border-radius: 25px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
          animation: fadeInUp 0.8s ease-out;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          color: white;
          margin-bottom: 1rem;
          line-height: 1.1;
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }

        .gradient-text {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 2px 10px rgba(255, 215, 0, 0.3);
        }

        .animated-services {
          font-size: 1.8rem;
          font-weight: 600;
          color: #FFD700;
          margin-bottom: 2rem;
          min-height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeInUp 0.8s ease-out 0.4s both;
        }

        .service-text {
          display: inline-block;
          animation: fadeIn 0.8s ease-in-out;
          text-shadow: 0 2px 10px rgba(255, 215, 0, 0.3);
        }

        .hero-description {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 3rem;
          line-height: 1.6;
          font-weight: 400;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          animation: fadeInUp 0.8s ease-out 0.6s both;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-bottom: 3rem;
          animation: fadeInUp 0.8s ease-out 0.8s both;
        }

        .feature-item {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          background-color: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }

        .feature-item:hover {
          background-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        .feature-icon {
          font-size: 1.5rem;
          margin-right: 0.8rem;
        }

        .feature-text {
          font-size: 0.95rem;
          font-weight: 500;
          color: white;
        }

        .hero-buttons {
          display: flex;
          gap: 1.5rem;
          align-items: center;
          justify-content: center;
          margin-bottom: 3rem;
          animation: fadeInUp 0.8s ease-out 1s both;
        }

        .hero-btn {
          padding: 1rem 2.5rem;
          border-radius: 50px;
          font-weight: 600;
          text-decoration: none;
          font-size: 1rem;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          text-align: center;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 180px;
          backdrop-filter: blur(10px);
        }

        .hero-btn-primary {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          color: #1C2734;
          box-shadow: 0 8px 25px rgba(255, 215, 0, 0.4);
        }

        .hero-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(255, 215, 0, 0.6);
        }

        .hero-btn-secondary {
          border: 2px solid white;
          color: white;
          background-color: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }

        .hero-btn-secondary:hover {
          background-color: white;
          color: #1C2734;
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(255, 255, 255, 0.3);
        }

        .hero-stats {
          display: flex;
          gap: 3rem;
          align-items: center;
          justify-content: center;
          animation: fadeInUp 0.8s ease-out 1.2s both;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: #FFD700;
          margin-bottom: 0.5rem;
          text-shadow: 0 2px 10px rgba(255, 215, 0, 0.3);
        }

        .stat-label {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* Slider Navigation */
        .slider-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: white;
          font-size: 2rem;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          cursor: pointer;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .slider-arrow:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-50%) scale(1.1);
        }

        .slider-arrow-left {
          left: 20px;
        }

        .slider-arrow-right {
          right: 20px;
        }

        .slide-indicators {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          z-index: 10;
        }

        .slide-indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 2px solid white;
          background: transparent;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .slide-indicator.active {
          background: white;
          transform: scale(1.2);
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

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Mobile Styles */
        @media (max-width: 767px) {
          .hero-section {
            min-height: 80vh;
            padding: 2rem 0;
          }

          .background-image {
            background-attachment: scroll;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .animated-services {
            font-size: 1.4rem;
            min-height: 40px;
          }

          .hero-description {
            font-size: 1.1rem;
            padding: 0 1rem;
          }

          .features-grid {
            grid-template-columns: 1fr 1fr;
            gap: 0.8rem;
            padding: 0 1rem;
          }

          .feature-item {
            padding: 0.8rem;
          }

          .feature-icon {
            font-size: 1.2rem;
            margin-right: 0.5rem;
          }

          .feature-text {
            font-size: 0.85rem;
          }

          .hero-buttons {
            flex-direction: column;
            gap: 1rem;
            padding: 0 1rem;
          }

          .hero-btn {
            width: 100%;
            max-width: 300px;
            padding: 0.9rem 2rem;
          }

          .hero-stats {
            gap: 2rem;
            flex-wrap: wrap;
          }

          .stat-number {
            font-size: 2rem;
          }

          .stat-label {
            font-size: 0.8rem;
          }

          .slider-arrow {
            width: 50px;
            height: 50px;
            font-size: 1.5rem;
          }

          .slider-arrow-left {
            left: 10px;
          }

          .slider-arrow-right {
            right: 10px;
          }

          .slide-indicators {
            bottom: 20px;
          }
        }

        /* Tablet Styles */
        @media (min-width: 768px) and (max-width: 1024px) {
          .hero-title {
            font-size: 3rem;
          }

          .features-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </>
  );
}
