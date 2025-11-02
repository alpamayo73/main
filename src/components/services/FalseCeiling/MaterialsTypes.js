import React from 'react';

const MaterialsTypes = () => {
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
    materialsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '2rem'
    },
    materialCard: {
      textAlign: 'center',
      padding: '2.5rem 2rem',
      backgroundColor: '#FFFFFF',
      transition: 'all 0.3s ease',
      border: '1px solid #e9ecef',
      borderRadius: '8px'
    },
    materialIcon: {
      fontSize: '3rem',
      marginBottom: '1.5rem',
      display: 'block'
    },
    materialTitle: {
      fontSize: '1.25rem',
      fontWeight: 700,
      color: '#1C2734',
      marginBottom: '1rem',
      textTransform: 'uppercase'
    },
    materialDescription: {
      color: '#666',
      lineHeight: 1.6,
      fontSize: '0.95rem',
      marginBottom: '1rem'
    },
    materialFeatures: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    materialFeature: {
      padding: '0.3rem 0',
      color: '#577D8E',
      fontSize: '0.85rem'
    }
  };

  const materials = [
    {
      icon: "🏗️",
      title: "GYPSUM BOARD",
      description: "Versatile and fire-resistant material for smooth ceiling finishes.",
      features: ["Fire resistant", "Smooth finish", "Easy to paint", "Cost effective"]
    },
    {
      icon: "🛡️",
      title: "PVC PANELS",
      description: "Waterproof and durable panels perfect for moisture-prone areas.",
      features: ["100% waterproof", "Mold resistant", "Easy cleaning", "Long lasting"]
    },
    {
      icon: "🌿",
      title: "WOODEN PANELS",
      description: "Natural wood panels for warm and elegant ceiling designs.",
      features: ["Natural aesthetic", "Warm appearance", "Custom designs", "Eco friendly"]
    },
    {
      icon: "🔊",
      title: "ACOUSTIC PANELS",
      description: "Specialized panels for noise reduction and sound control.",
      features: ["Noise reduction", "Echo control", "Sound absorption", "Studio quality"]
    },
    {
      icon: "🔲",
      title: "METAL CEILINGS",
      description: "Modern metal panel ceilings for contemporary commercial spaces.",
      features: ["Modern look", "Durable", "Easy maintenance", "Commercial grade"]
    },
    {
      icon: "💡",
      title: "POP CEILINGS",
      description: "Plaster of Paris for intricate designs and custom moldings.",
      features: ["Custom designs", "Intricate patterns", "Smooth finish", "Design flexibility"]
    }
  ];

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>PREMIUM MATERIALS & TYPES</h2>
          <p style={styles.subtitle}>
            We work with high-quality materials from leading brands, offering diverse options to match your design preferences and functional requirements
          </p>
        </div>
        
        <div style={styles.materialsGrid}>
          {materials.map((material, index) => (
            <div 
              key={index}
              style={styles.materialCard}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={styles.materialIcon}>{material.icon}</div>
              <h3 style={styles.materialTitle}>{material.title}</h3>
              <p style={styles.materialDescription}>{material.description}</p>
              <ul style={styles.materialFeatures}>
                {material.features.map((feature, featureIndex) => (
                  <li key={featureIndex} style={styles.materialFeature}>
                    ✓ {feature}
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

export default MaterialsTypes;
