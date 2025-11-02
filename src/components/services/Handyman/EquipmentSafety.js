import React from 'react';

const EquipmentSafety = () => {
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
    equipmentList: {
      listStyle: 'none',
      padding: 0,
      margin: '1rem 0 0 0'
    },
    equipmentItem: {
      padding: '0.5rem 0',
      color: '#577D8E',
      fontSize: '0.9rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    equipmentIcon: {
      marginRight: '0.8rem',
      fontSize: '1rem'
    }
  };

  const features = [
    {
      icon: "🛠️",
      title: "PROFESSIONAL EQUIPMENT",
      description: "We use specialized tools and equipment for safe and efficient work",
      equipment: [
        "🛡️ Furniture dollies and hand trucks",
        "🔒 Moving straps and harnesses",
        "📦 Protective wrapping materials",
        "⚡ Power tools for assembly"
      ]
    },
    {
      icon: "🛡️",
      title: "SAFETY PROTOCOLS",
      description: "Strict safety measures to protect your property and our team",
      equipment: [
        "✅ Floor and wall protection",
        "✅ Personal protective equipment",
        "✅ Safe lifting techniques",
        "✅ Property damage prevention"
      ]
    },
    {
      icon: "🚚",
      title: "TRANSPORT SOLUTIONS",
      description: "Appropriate vehicles and transport for every type of move",
      equipment: [
        "🚛 Covered moving trucks",
        "📏 Various truck sizes available",
        "🔐 Secure loading systems",
        "⏱️ Efficient loading equipment"
      ]
    },
    {
      icon: "👥",
      title: "TRAINED PERSONNEL",
      description: "Experienced handymen trained in proper techniques",
      equipment: [
        "💪 Physically fit team members",
        "🎓 Trained in heavy lifting",
        "🔧 Skilled in assembly work",
        "🏠 Experienced in home moving"
      ]
    }
  ];

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>PROFESSIONAL EQUIPMENT & SAFETY</h2>
          <p style={styles.subtitle}>
            We come prepared with the right tools, equipment, and safety measures to handle any handyman task efficiently and safely
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
              <ul style={styles.equipmentList}>
                {feature.equipment.map((item, itemIndex) => (
                  <li key={itemIndex} style={styles.equipmentItem}>
                    <span style={styles.equipmentIcon}>{item.split(' ')[0]}</span>
                    {item.split(' ').slice(1).join(' ')}
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

export default EquipmentSafety;
