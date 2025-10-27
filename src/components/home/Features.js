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
    <section style={{
      padding: '5rem 0',
      backgroundColor: '#f9fafb'
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
            Why Choose Alpamayo
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: '#6b7280',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            We combine luxury design with technical excellence to deliver exceptional results for our clients in Dubai.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2rem'
        }}>
          {features.map((feature, index) => (
            <div 
              key={index}
              style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '12px',
                textAlign: 'center',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
              }}
            >
              <div style={{
                fontSize: '3rem',
                marginBottom: '1rem'
              }}>
                {feature.icon}
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: '#1C2734',
                marginBottom: '1rem'
              }}>
                {feature.title}
              </h3>
              <p style={{
                color: '#6b7280',
                lineHeight: 1.6
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          div > div {
            grid-template-columns: 1fr 1fr;
          }
        }
        
        @media (min-width: 1024px) {
          div > div {
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
        }
      `}</style>
    </section>
  );
}
