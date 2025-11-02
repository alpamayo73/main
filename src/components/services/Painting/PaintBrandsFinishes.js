import React from 'react';

const PaintBrandsFinishes = () => {
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
    contentGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '3rem',
      alignItems: 'start'
    },
    brandsSection: {
      marginBottom: '2rem'
    },
    finishesSection: {
      marginBottom: '2rem'
    },
    sectionTitle: {
      fontSize: '1.5rem',
      fontWeight: 700,
      color: '#1C2734',
      marginBottom: '1.5rem',
      textTransform: 'uppercase',
      borderBottom: '3px solid #577D8E',
      paddingBottom: '0.5rem'
    },
    brandsList: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    brandItem: {
      padding: '1rem',
      marginBottom: '0.8rem',
      backgroundColor: '#FFFFFF',
      borderLeft: '4px solid #577D8E',
      transition: 'all 0.3s ease',
      borderRadius: '4px'
    },
    finishesList: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    finishItem: {
      padding: '1rem',
      marginBottom: '0.8rem',
      backgroundColor: '#FFFFFF',
      borderLeft: '4px solid #1C2734',
      transition: 'all 0.3s ease',
      borderRadius: '4px'
    },
    itemTitle: {
      fontSize: '1.1rem',
      fontWeight: 600,
      color: '#1C2734',
      marginBottom: '0.5rem'
    },
    itemDescription: {
      color: '#666',
      fontSize: '0.9rem',
      lineHeight: 1.5
    },
    featuresList: {
      listStyle: 'none',
      padding: 0,
      margin: '0.5rem 0 0 0'
    },
    feature: {
      padding: '0.2rem 0',
      color: '#577D8E',
      fontSize: '0.8rem',
      display: 'flex',
      alignItems: 'center'
    },
    featureBullet: {
      marginRight: '0.5rem',
      fontSize: '0.7rem'
    }
  };

  const brands = [
    {
      name: "JOTUN PAINTS",
      description: "Premium quality paints with excellent coverage and durability.",
      features: ["Weather shield exterior", "Fenomastic interior", "Anti-mold properties", "Washable finish"]
    },
    {
      name: "BERGER PAINTS",
      description: "Innovative paint solutions with advanced technology and vibrant colors.",
      features: ["Silk emulsion", "Weathercoat exterior", "Easy clean", "Stain resistant"]
    },
    {
      name: "NATIONAL PAINTS",
      description: "High-performance paints specifically formulated for Middle East conditions.",
      features: ["Heat resistant", "UV protection", "Quick drying", "Low odor"]
    },
    {
      name: "DULUX PAINTS",
      description: "World-renowned paint brand offering superior finish and color range.",
      features: ["Washable & durable", "Color match technology", "Eco-friendly options", "Smooth application"]
    }
  ];

  const finishes = [
    {
      name: "MATTE FINISH",
      description: "Non-reflective finish that hides imperfections and provides elegant look.",
      features: ["Hides wall imperfections", "Elegant appearance", "No glare", "Touch-up friendly"]
    },
    {
      name: "EGGSHELL FINISH",
      description: "Low-sheen finish with slight gloss, easy to clean and maintain.",
      features: ["Slight sheen", "Washable", "Durable", "Good for living areas"]
    },
    {
      name: "SATIN FINISH",
      description: "Soft sheen finish that's durable and perfect for high-traffic areas.",
      features: ["Soft glow", "Highly durable", "Easy cleaning", "Moisture resistant"]
    },
    {
      name: "SEMI-GLOSS FINISH",
      description: "Shiny finish ideal for kitchens, bathrooms, and trim work.",
      features: ["High durability", "Easy to clean", "Moisture resistant", "Reflective surface"]
    },
    {
      name: "HIGH-GLOSS FINISH",
      description: "Maximum shine and durability for doors, windows, and furniture.",
      features: ["Maximum shine", "Very durable", "Easy cleaning", "Modern look"]
    }
  ];

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>PREMIUM PAINT BRANDS & FINISHES</h2>
          <p style={styles.subtitle}>
            We work with leading international paint brands and offer various finishes to match your style and functional requirements
          </p>
        </div>
        
        <div style={styles.contentGrid}>
          <div style={styles.brandsSection}>
            <h3 style={styles.sectionTitle}>TRUSTED PAINT BRANDS</h3>
            <ul style={styles.brandsList}>
              {brands.map((brand, index) => (
                <li 
                  key={index}
                  style={styles.brandItem}
                  onMouseOver={(e) => {
                    e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <h4 style={styles.itemTitle}>{brand.name}</h4>
                  <p style={styles.itemDescription}>{brand.description}</p>
                  <ul style={styles.featuresList}>
                    {brand.features.map((feature, featureIndex) => (
                      <li key={featureIndex} style={styles.feature}>
                        <span style={styles.featureBullet}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          
          <div style={styles.finishesSection}>
            <h3 style={styles.sectionTitle}>PAINT FINISH OPTIONS</h3>
            <ul style={styles.finishesList}>
              {finishes.map((finish, index) => (
                <li 
                  key={index}
                  style={styles.finishItem}
                  onMouseOver={(e) => {
                    e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <h4 style={styles.itemTitle}>{finish.name}</h4>
                  <p style={styles.itemDescription}>{finish.description}</p>
                  <ul style={styles.featuresList}>
                    {finish.features.map((feature, featureIndex) => (
                      <li key={featureIndex} style={styles.feature}>
                        <span style={styles.featureBullet}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaintBrandsFinishes;
