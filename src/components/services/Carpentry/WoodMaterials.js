import React from 'react';

const WoodMaterials = () => {
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
    },
    bestFor: {
      marginTop: '1rem',
      padding: '0.5rem',
      backgroundColor: '#f1f5f9',
      borderRadius: '4px',
      fontSize: '0.8rem',
      color: '#577D8E',
      fontWeight: '600'
    }
  };

  const materials = [
    {
      icon: "🪵",
      title: "SOLID WOOD",
      description: "Premium solid wood for durable and long-lasting furniture pieces.",
      features: ["Natural beauty", "High durability", "Can be refinished", "Long lifespan"],
      bestFor: "Heirloom furniture, dining tables"
    },
    {
      icon: "📦",
      title: "PLYWOOD",
      description: "Engineered wood with excellent strength and stability for various applications.",
      features: ["Cost-effective", "Strong & stable", "Resistant to warping", "Versatile"],
      bestFor: "Cabinets, shelving, built-ins"
    },
    {
      icon: "🌿",
      title: "MDF",
      description: "Medium Density Fiberboard for smooth finishes and detailed work.",
      features: ["Smooth surface", "Easy to paint", "Consistent texture", "Budget friendly"],
      bestFor: "Painted furniture, decorative pieces"
    },
    {
      icon: "🌟",
      title: "HARDWOOD",
      description: "Dense hardwoods like teak, oak, and walnut for premium projects.",
      features: ["Exceptional durability", "Rich grain patterns", "Natural resistance", "Premium look"],
      bestFor: "High-end furniture, flooring"
    },
    {
      icon: "🌲",
      title: "SOFTWOOD",
      description: "Pine and cedar for lightweight projects and rustic aesthetics.",
      features: ["Lightweight", "Easy to work with", "Natural scent", "Rustic appeal"],
      bestFor: "Shelving, outdoor furniture"
    },
    {
      icon: "🔄",
      title: "RECLAIMED WOOD",
      description: "Eco-friendly reclaimed wood with unique character and history.",
      features: ["Eco-friendly", "Unique character", "Weathered look", "Sustainable"],
      bestFor: "Feature walls, rustic furniture"
    }
  ];

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>PREMIUM WOOD MATERIALS</h2>
          <p style={styles.subtitle}>
            We work with the finest wood materials, offering diverse options to match your style, budget, and functional requirements
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
              <div style={styles.bestFor}>
                Best for: {material.bestFor}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WoodMaterials;
