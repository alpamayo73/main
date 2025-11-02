import React from 'react';

const ElectricalSolutions = () => {
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
    solutionsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '2rem'
    },
    solutionCard: {
      textAlign: 'center',
      padding: '2.5rem 2rem',
      backgroundColor: '#FFFFFF',
      transition: 'all 0.3s ease',
      border: '1px solid #e9ecef',
      borderRadius: '8px'
    },
    solutionIcon: {
      fontSize: '3rem',
      marginBottom: '1.5rem',
      display: 'block'
    },
    solutionTitle: {
      fontSize: '1.25rem',
      fontWeight: 700,
      color: '#1C2734',
      marginBottom: '1rem',
      textTransform: 'uppercase'
    },
    solutionDescription: {
      color: '#666',
      lineHeight: 1.6,
      fontSize: '0.95rem',
      marginBottom: '1rem'
    },
    solutionFeatures: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    solutionFeature: {
      padding: '0.3rem 0',
      color: '#577D8E',
      fontSize: '0.85rem'
    },
    application: {
      marginTop: '1rem',
      padding: '0.5rem',
      backgroundColor: '#f1f5f9',
      borderRadius: '4px',
      fontSize: '0.8rem',
      color: '#577D8E',
      fontWeight: '600'
    }
  };

  const solutions = [
    {
      icon: "🏗️",
      title: "NEW CONSTRUCTION",
      description: "Complete electrical wiring and system installation for new buildings.",
      features: ["Electrical blueprint design", "Complete wiring installation", "Panel board setup", "Final testing & commissioning"],
      application: "New villas, apartments, commercial buildings"
    },
    {
      icon: "🔄",
      title: "RENOVATION WIRING",
      description: "Electrical system upgrades and rewiring for renovation projects.",
      features: ["Existing system assessment", "Code compliance upgrades", "Safe rewiring", "Modern fixture installation"],
      application: "Home renovations, office upgrades"
    },
    {
      icon: "🌞",
      title: "SOLAR INTEGRATION",
      description: "Solar power system integration with existing electrical systems.",
      features: ["Solar panel wiring", "Inverter installation", "Grid connection", "Monitoring systems"],
      application: "Sustainable energy solutions"
    },
    {
      icon: "🏠",
      title: "SMART HOME",
      description: "Advanced home automation and smart electrical solutions.",
      features: ["Smart lighting control", "Automated systems", "Voice control integration", "Remote monitoring"],
      application: "Modern smart homes"
    },
    {
      icon: "🔋",
      title: "BACKUP POWER",
      description: "Generator and UPS installation for uninterrupted power supply.",
      features: ["Generator installation", "Automatic transfer switch", "UPS systems", "Power backup testing"],
      application: "Emergency power solutions"
    },
    {
      icon: "⚡",
      title: "INDUSTRIAL ELECTRICAL",
      description: "Heavy-duty electrical solutions for industrial facilities.",
      features: ["Three-phase power", "Motor control centers", "Industrial lighting", "Power distribution"],
      application: "Factories, warehouses, industrial plants"
    }
  ];

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>SPECIALIZED ELECTRICAL SOLUTIONS</h2>
          <p style={styles.subtitle}>
            Advanced electrical solutions tailored to meet specific requirements for different types of properties and applications
          </p>
        </div>
        
        <div style={styles.solutionsGrid}>
          {solutions.map((solution, index) => (
            <div 
              key={index}
              style={styles.solutionCard}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={styles.solutionIcon}>{solution.icon}</div>
              <h3 style={styles.solutionTitle}>{solution.title}</h3>
              <p style={styles.solutionDescription}>{solution.description}</p>
              <ul style={styles.solutionFeatures}>
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} style={styles.solutionFeature}>
                    ✓ {feature}
                  </li>
                ))}
              </ul>
              <div style={styles.application}>
                Application: {solution.application}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ElectricalSolutions;
