export default function Features() {
  const features = [
    {
      icon: '🏆',
      title: 'Premium Quality',
      description: 'Luxury finishes and premium materials for exceptional, long-lasting results that exceed expectations.'
    },
    {
      icon: '🛡️',
      title: 'Guaranteed Work',
      description: 'Comprehensive warranties on all our services, ensuring your peace of mind and satisfaction.'
    },
    {
      icon: '⏱️',
      title: 'On-Time Delivery',
      description: 'We respect your time and deliver projects as scheduled, maintaining strict timelines.'
    },
    {
      icon: '👨‍🔧',
      title: 'Expert Craftsmanship',
      description: 'Skilled professionals with years of experience in luxury renovations and AC installations.'
    }
  ];

  return (
    <>
      <section className="features-section">
        <div className="features-container">
          <div className="features-header">
            <h2 className="features-title">
              Why Choose Alpamayo
            </h2>
            <p className="features-subtitle">
              We combine luxury design with technical excellence to deliver exceptional results for our clients in UAE.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-card-title">{feature.title}</h3>
                <p className="feature-card-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .features-section {
          padding: 5rem 0;
          background-color: #f9fafb;
        }

        .features-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .features-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .features-title {
          font-size: 2.5rem;
          font-weight: bold;
          color: #1C2734;
          margin-bottom: 1rem;
        }

        .features-subtitle {
          font-size: 1.25rem;
          color: #6b7280;
          max-width: 600px;
          margin: 0 auto;
        }

        .features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          gap: 2rem;
        }

        .feature-card {
          background-color: white;
          padding: 2rem 1.5rem;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
        }

        .feature-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .feature-card-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: #1C2734;
          margin-bottom: 0.8rem;
        }

        .feature-card-description {
          color: #6b7280;
          line-height: 1.5;
          font-size: 0.9rem;
        }

        /* Mobile Styles */
        @media (max-width: 767px) {
          .features-section {
            padding: 3rem 0;
          }
          
          .features-title {
            font-size: 2rem;
          }
          
          .features-subtitle {
            font-size: 1rem;
          }
          
          .features-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .feature-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </>
  );
}
