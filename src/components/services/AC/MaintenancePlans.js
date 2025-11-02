import React from 'react';

const MaintenancePlans = () => {
  const styles = {
    section: {
      padding: '5rem 0',
      backgroundColor: '#FFFFFF'
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
    plansGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem'
    },
    planCard: {
      padding: '2rem',
      backgroundColor: '#f8f9fa',
      border: '2px solid #e9ecef',
      transition: 'all 0.3s ease',
      textAlign: 'center',
      borderRadius: '8px'
    },
    planIcon: {
      fontSize: '3rem',
      marginBottom: '1.5rem',
      display: 'block'
    },
    planTitle: {
      fontSize: '1.5rem',
      fontWeight: 700,
      color: '#1C2734',
      marginBottom: '1rem',
      textTransform: 'uppercase'
    },
    planDescription: {
      color: '#666',
      lineHeight: 1.6,
      fontSize: '0.95rem',
      marginBottom: '1.5rem'
    },
    planFeatures: {
      listStyle: 'none',
      padding: 0,
      margin: '1rem 0'
    },
    planFeature: {
      padding: '0.5rem 0',
      color: '#577D8E',
      fontSize: '0.9rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    featureIcon: {
      marginRight: '0.8rem',
      fontSize: '1rem'
    },
    recommendedBadge: {
      position: 'absolute',
      top: '-10px',
      right: '20px',
      backgroundColor: '#577D8E',
      color: 'white',
      padding: '0.5rem 1rem',
      borderRadius: '20px',
      fontSize: '0.8rem',
      fontWeight: '600'
    }
  };

  const plans = [
    {
      icon: "🛠️",
      title: "BASIC MAINTENANCE",
      description: "Essential maintenance for optimal AC performance",
      features: [
        "✅ Filter cleaning and replacement",
        "✅ Coil cleaning",
        "✅ Basic electrical checks",
        "✅ Drain line inspection",
        "✅ Performance testing",
        "⏰ 2 visits per year"
      ],
      recommended: false
    },
    {
      icon: "⚡",
      title: "COMPREHENSIVE CARE",
      description: "Complete maintenance for extended AC lifespan",
      features: [
        "✅ All Basic plan features",
        "✅ Refrigerant pressure check",
        "✅ Compressor inspection",
        "✅ Thermostat calibration",
        "✅ Full system diagnostics",
        "⏰ 4 visits per year",
        "🎯 Priority service"
      ],
      recommended: true
    },
    {
      icon: "🏆",
      title: "PREMIUM PROTECTION",
      description: "Ultimate protection with emergency coverage",
      features: [
        "✅ All Comprehensive features",
        "✅ 24/7 emergency support",
        "✅ Parts discount (15%)",
        "✅ Labor warranty",
        "✅ Annual deep cleaning",
        "⏰ 6 visits per year",
        "🔧 Free minor repairs"
      ],
      recommended: false
    }
  ];

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>AC MAINTENANCE PLANS</h2>
          <p style={styles.subtitle}>
            Keep your AC system running efficiently with our comprehensive maintenance plans. Regular maintenance extends lifespan and prevents costly repairs
          </p>
        </div>
        
        <div style={styles.plansGrid}>
          {plans.map((plan, index) => (
            <div 
              key={index}
              style={{
                ...styles.planCard,
                borderColor: plan.recommended ? '#577D8E' : '#e9ecef',
                position: 'relative'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#FFFFFF';
                e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#f8f9fa';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {plan.recommended && (
                <div style={styles.recommendedBadge}>
                  MOST POPULAR
                </div>
              )}
              <div style={styles.planIcon}>{plan.icon}</div>
              <h3 style={styles.planTitle}>{plan.title}</h3>
              <p style={styles.planDescription}>{plan.description}</p>
              <ul style={styles.planFeatures}>
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} style={styles.planFeature}>
                    <span style={styles.featureIcon}>
                      {feature.includes('✅') ? '✓' : 
                       feature.includes('⏰') ? '⏰' :
                       feature.includes('🎯') ? '🎯' :
                       feature.includes('🔧') ? '🔧' : '✓'}
                    </span>
                    {feature.replace(/[✅⏰🎯🔧]/g, '')}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaintenancePlans;
