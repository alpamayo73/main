import React from 'react';

const WhyChooseSplitAC = () => {
  const styles = {
    section: {
      padding: '5rem 0',
      backgroundColor: '#f8f9fa'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem'
    },
    header: {
      textAlign: 'center',
      marginBottom: '4rem'
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#1C2734',
      marginBottom: '1rem',
      textTransform: 'uppercase'
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '2rem'
    },
    featureCard: {
      textAlign: 'center',
      padding: '2rem',
      backgroundColor: '#FFFFFF',
      transition: 'all 0.3s ease'
    },
    featureIcon: {
      fontSize: '3rem',
      marginBottom: '1.5rem',
      display: 'block'
    },
    featureTitle: {
      fontSize: '1.25rem',
      fontWeight: 700,
      color: '#1C2734',
      marginBottom: '1rem',
      textTransform: 'uppercase'
    },
    featureDescription: {
      color: '#666',
      lineHeight: 1.6
    }
  };

  const features = [
    {
      icon: "👨‍🔧",
      title: "CERTIFIED TECHNICIANS",
      description: "Our team consists of certified AC technicians with extensive experience in all major split AC brands."
    },
    {
      icon: "⚡",
      title: "QUICK RESPONSE",
      description: "Same-day service available across Dubai with rapid response times for emergency repairs."
    },
    {
      icon: "🛡️",
      title: "GENUINE PARTS",
      description: "We use only OEM parts and approved refrigerants for all repairs and installations."
    },
    {
      icon: "💰",
      title: "COST-EFFECTIVE",
      description: "Competitive pricing with transparent quotes and no hidden charges for all our services."
    },
    {
      icon: "🏆",
      title: "QUALITY SERVICE",
      description: "Commitment to excellence with 90-day service warranty on all repairs and installations."
    },
    {
      icon: "📞",
      title: "24/7 SUPPORT",
      description: "Round-the-clock customer support and emergency services for urgent AC issues."
    }
  ];

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>WHY CHOOSE ALPAMAYO FOR SPLIT AC</h2>
        </div>
        
        <div style={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div 
              key={index}
              style={styles.featureCard}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={styles.featureIcon}>{feature.icon}</div>
              <h3 style={styles.featureTitle}>{feature.title}</h3>
              <p style={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSplitAC;
