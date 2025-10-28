import React from 'react';

const BrandsWeService = () => {
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
    subtitle: {
      fontSize: '1.125rem',
      color: '#666',
      maxWidth: '600px',
      margin: '0 auto',
      lineHeight: 1.6
    },
    brandsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '2rem',
      alignItems: 'center'
    },
    brandItem: {
      textAlign: 'center',
      padding: '2rem',
      backgroundColor: '#f8f9fa',
      transition: 'all 0.3s ease'
    },
    brandName: {
      fontSize: '1.25rem',
      fontWeight: 600,
      color: '#1C2734',
      marginTop: '1rem'
    }
  };

  const brands = [
    { name: 'DAIKIN' },
    { name: 'CARRIER' },
    { name: 'LG' },
    { name: 'SAMSUNG' },
    { name: 'MITSUBISHI' },
    { name: 'FUJITSU' },
    { name: 'TOSHIBA' },
    { name: 'GREE' }
  ];

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>BRANDS WE SERVICE</h2>
          <p style={styles.subtitle}>
            We specialize in all major split AC brands with expert knowledge and genuine parts
          </p>
        </div>
        
        <div style={styles.brandsGrid}>
          {brands.map((brand, index) => (
            <div 
              key={index}
              style={styles.brandItem}
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
              <h3 style={styles.brandName}>{brand.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsWeService;
