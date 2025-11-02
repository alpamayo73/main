import React from 'react';

const TileMaterials = () => {
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
      icon: "💎",
      title: "PORCELAIN TILES",
      description: "Dense, durable, and low-maintenance tiles perfect for high-traffic areas.",
      features: ["Waterproof", "Stain-resistant", "High durability", "Low maintenance"]
    },
    {
      icon: "🏺",
      title: "CERAMIC TILES",
      description: "Versatile and cost-effective tiles suitable for various indoor applications.",
      features: ["Cost-effective", "Easy maintenance", "Wide variety", "Indoor use"]
    },
    {
      icon: "✨",
      title: "MARBLE TILES",
      description: "Luxurious natural stone tiles for elegant and sophisticated spaces.",
      features: ["Luxury appearance", "Unique patterns", "Natural stone", "Elegant finish"]
    },
    {
      icon: "🪨",
      title: "GRANITE TILES",
      description: "Extremely durable natural stone tiles resistant to scratches and heat.",
      features: ["Heat resistant", "Scratch proof", "Natural stone", "High strength"]
    },
    {
      icon: "🧊",
      title: "GLASS TILES",
      description: "Modern and reflective tiles perfect for creating light and spacious effects.",
      features: ["Light reflective", "Modern look", "Easy to clean", "Color variety"]
    },
    {
      icon: "🌿",
      title: "NATURAL STONE",
      description: "Unique natural stone tiles including travertine, slate, and limestone.",
      features: ["Unique patterns", "Natural texture", "Eco-friendly", "Timeless appeal"]
    }
  ];

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>PREMIUM TILE MATERIALS</h2>
          <p style={styles.subtitle}>
            We work with the finest tile materials from leading international brands, ensuring quality and durability for every project
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

export default TileMaterials;
