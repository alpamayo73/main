import React from 'react';

const WhyChooseUs = () => {
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
      fontWeight: 300,
      color: '#1C2734',
      marginBottom: '1rem'
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
    featureNumber: {
      fontSize: '3rem',
      fontWeight: 300,
      color: '#577D8E',
      marginBottom: '1rem',
      opacity: 0.8
    },
    featureTitle: {
      fontSize: '1.25rem',
      fontWeight: 500,
      color: '#1C2734',
      marginBottom: '1rem'
    },
    featureDescription: {
      color: '#666',
      lineHeight: 1.6
    }
  };

  const features = [
    {
      number: "01",
      title: "Expert Technicians",
      description: "Our certified technicians have extensive experience with all major VRF brands and models."
    },
    {
      number: "02",
      title: "24/7 Emergency Service",
      description: "Round-the-clock emergency repair services to minimize downtime in your property."
    },
    {
      number: "03",
      title: "Genuine Parts",
      description: "We use only OEM parts and approved refrigerants for all repairs and maintenance."
    },
    {
      number: "04",
      title: "Quick Response",
      description: "Fast response times across Dubai with same-day service availability."
    },
    {
      number: "05",
      title: "Cost-Effective Solutions",
      description: "Competitive pricing without compromising on quality and service standards."
    },
    {
      number: "06",
      title: "Warranty Protection",
      description: "Comprehensive warranty on all our services and installed components."
    }
  ];

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>Why Choose Alpamayo for VRF Services</h2>
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
              <div style={styles.featureNumber}>{feature.number}</div>
              <h3 style={styles.featureTitle}>{feature.title}</h3>
              <p style={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
