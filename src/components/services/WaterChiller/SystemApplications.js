import React from 'react';

const SystemApplications = () => {
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
    applicationsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '2rem'
    },
    applicationCard: {
      textAlign: 'center',
      padding: '2.5rem 2rem',
      backgroundColor: '#FFFFFF',
      transition: 'all 0.3s ease',
      border: '1px solid #e9ecef'
    },
    applicationIcon: {
      fontSize: '3rem',
      marginBottom: '1.5rem',
      display: 'block'
    },
    applicationTitle: {
      fontSize: '1.25rem',
      fontWeight: 700,
      color: '#1C2734',
      marginBottom: '1rem',
      textTransform: 'uppercase'
    },
    applicationDescription: {
      color: '#666',
      lineHeight: 1.6,
      fontSize: '0.95rem'
    }
  };

  const applications = [
    {
      icon: "🏨",
      title: "HOTELS & RESORTS",
      description: "Centralized cooling systems for large hotel complexes with multiple buildings and varying load requirements."
    },
    {
      icon: "🏥",
      title: "HOSPITALS & HEALTHCARE",
      description: "Reliable 24/7 cooling for critical healthcare facilities with precise temperature and humidity control."
    },
    {
      icon: "🏢",
      title: "COMMERCIAL TOWERS",
      description: "High-rise building cooling solutions with floor-by-floor zoning and energy efficiency optimization."
    },
    {
      icon: "🛍️",
      title: "SHOPPING MALLS",
      description: "Large-scale cooling for shopping centers with high occupancy and variable cooling demands."
    },
    {
      icon: "🏭",
      title: "INDUSTRIAL FACILITIES",
      description: "Process cooling for manufacturing plants and industrial applications with specific temperature requirements."
    },
    {
      icon: "🎓",
      title: "EDUCATIONAL INSTITUTIONS",
      description: "Campus-wide cooling solutions for universities and schools with multiple building integration."
    }
  ];

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>SYSTEM APPLICATIONS</h2>
        </div>
        
        <div style={styles.applicationsGrid}>
          {applications.map((application, index) => (
            <div 
              key={index}
              style={styles.applicationCard}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={styles.applicationIcon}>{application.icon}</div>
              <h3 style={styles.applicationTitle}>{application.title}</h3>
              <p style={styles.applicationDescription}>{application.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemApplications;
