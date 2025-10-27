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
      padding: '3rem 0',
      backgroundColor: '#f9fafb'
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
            fontSize: '2rem',
            fontWeight: '700',
            color: '#1C2734',
            marginBottom: '1rem'
          }}>
            Why Choose Alpamayo
          </h2>
          <p style={{
            fontSize: '1rem',
            color: '#6b7280',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            We combine luxury design with technical excellence to deliver exceptional results for our clients in Dubai.
          </p>
        </div>

        {/* Responsive Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '1.5rem'
        }}>
          {features.map((feature, index) => (
            <div 
              key={index}
              style={{
                backgroundColor: 'white',
                padding: '1.5rem',
                borderRadius: '12px',
                textAlign: 'center',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(0, 0, 0, 0.05)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.08)';
              }}
            >
              <div style={{
                fontSize: '2.5rem',
                marginBottom: '1rem'
              }}>
                {feature.icon}
              </div>
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: '600',
                color: '#1C2734',
                marginBottom: '0.8rem'
              }}>
                {feature.title}
              </h3>
              <p style={{
                color: '#6b7280',
                lineHeight: 1.5,
                fontSize: '0.9rem'
              }}>
                {feature.description}
              </p>
            </div>
          ))}
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
          
          div > div:last-child {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
        }
        
        @media (min-width: 1024px) {
          div > div:last-child {
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
        }
      `}</style>
    </section>
  );
}
