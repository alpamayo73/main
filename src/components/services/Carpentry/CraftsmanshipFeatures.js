import React from 'react';

const CraftsmanshipFeatures = () => {
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
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem'
    },
    featureCard: {
      padding: '2rem',
      backgroundColor: '#f8f9fa',
      borderLeft: '4px solid #577D8E',
      transition: 'all 0.3s ease',
      textAlign: 'center'
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
      lineHeight: 1.6,
      fontSize: '0.95rem'
    },
    processList: {
      listStyle: 'none',
      padding: 0,
      margin: '1rem 0 0 0'
    },
    processItem: {
      padding: '0.5rem 0',
      color: '#577D8E',
      fontSize: '0.9rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    processIcon: {
      marginRight: '0.8rem',
      fontSize: '1rem'
    }
  };

  const features = [
    {
      icon: "📐",
      title: "PRECISION MEASUREMENT",
      description: "Exact measurements and custom fitting for perfect results",
      processes: [
        "🔄 Digital measurement tools",
        "📏 Custom template creation",
        "🎯 Laser level precision",
        "📊 3D design visualization"
      ]
    },
    {
      icon: "🔨",
      title: "EXPERT JOINERY",
      description: "Traditional and modern joinery techniques for superior strength",
      processes: [
        "🪚 Dovetail joints",
        "🔗 Mortise and tenon",
        "📎 Box joints",
        "⚡ CNC precision cutting"
      ]
    },
    {
      icon: "🎨",
      title: "FINE FINISHING",
      description: "Professional finishing techniques for beautiful and durable surfaces",
      processes: [
        "🪥 Hand sanding perfection",
        "🧴 Multiple coat finishing",
        "✨ Polishing and buffing",
        "🛡️ Protective sealants"
      ]
    },
    {
      icon: "⚡",
      title: "MODERN TECHNIQUES",
      description: "Combining traditional skills with modern technology",
      processes: [
        "💻 CAD design integration",
        "🖨️ CNC machining",
        "🔧 Advanced tooling",
        "📱 Digital project management"
      ]
    }
  ];

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>EXPERT CRAFTSMANSHIP</h2>
          <p style={styles.subtitle}>
            Our master carpenters combine traditional woodworking skills with modern techniques to deliver exceptional quality and precision
          </p>
        </div>
        
        <div style={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div 
              key={index}
              style={styles.featureCard}
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
              <div style={styles.featureIcon}>{feature.icon}</div>
              <h3 style={styles.featureTitle}>{feature.title}</h3>
              <p style={styles.featureDescription}>{feature.description}</p>
              <ul style={styles.processList}>
                {feature.processes.map((process, processIndex) => (
                  <li key={processIndex} style={styles.processItem}>
                    <span style={styles.processIcon}>{process.split(' ')[0]}</span>
                    {process.split(' ').slice(1).join(' ')}
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

export default CraftsmanshipFeatures;
