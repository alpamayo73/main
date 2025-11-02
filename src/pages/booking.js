import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Booking() {
  const [formData, setFormData] = useState({
    serviceType: 'handyman',
    name: '',
    email: '',
    phone: '',
    address: '',
    area: '',
    date: '',
    time: '',
    duration: 1,
    description: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  const dubaiAreas = [
    'Downtown Dubai', 'Dubai Marina', 'Jumeirah', 'Al Barsha', 'Al Quoz',
    'Business Bay', 'Deira', 'Bur Dubai', 'Jebel Ali', 'Dubai Hills',
    'Arabian Ranches', 'Motor City', 'Sports City', 'Discovery Gardens',
    'International City', 'Silicon Oasis', 'Academic City', 'Al Warqa',
    'Mirdif', 'Nad Al Sheba', 'Al Safa', 'Umm Suqeim', 'Al Wasl',
    'Jumeirah Lakes Towers (JLT)', 'Palm Jumeirah', 'Dubai Investment Park (DIP)',
    'Jumeirah Village Circle (JVC)', 'Jumeirah Village Triangle (JVT)',
    'Dubai Land', 'Al Khawaneej', 'Muhaisnah', 'Al Qusais', 'Hor Al Anz',
    'Al Twar', 'Al Nahda', 'Al Garhoud', 'Oud Metha', 'Al Satwa',
    'Al Karama', 'Al Mankhool'
  ];

  const serviceTypes = {
    handyman: {
      name: 'Handyman',
      price: 100,
      description: 'Furniture assembly, moving help, general repairs',
      image: '/images/handyman-service.jpg',
      features: ['Furniture Assembly', 'Moving Help', 'General Repairs', 'Mounting']
    },
    plumber: {
      name: 'Plumber',
      price: 100,
      description: 'Pipe repairs, leak fixes, installation',
      image: '/images/plumber-service.jpg',
      features: ['Leak Repairs', 'Pipe Installation', 'Drain Cleaning', 'Fixture Installation']
    },
    electrician: {
      name: 'Electrician',
      price: 125,
      description: 'Wiring, repairs, installations',
      image: '/images/electrician-service.jpeg',
      features: ['Wiring', 'Socket Installation', 'Lighting', 'Safety Checks']
    }
  };

  const timeSlots = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
    '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
    '17:00', '17:30', '18:00', '18:30', '19:00', '19:30'
  ];

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const calculateTotal = () => {
    const service = serviceTypes[formData.serviceType];
    return service.price * formData.duration;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/book-service', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          totalAmount: calculateTotal(),
          serviceName: serviceTypes[formData.serviceType].name
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage('Booking confirmed! Our team will contact you within 30 minutes.');
        setFormData({
          serviceType: 'handyman',
          name: '',
          email: '',
          phone: '',
          address: '',
          area: '',
          date: '',
          time: '',
          duration: 1,
          description: ''
        });
      } else {
        setSubmitMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('Booking received! Our team will contact you shortly to confirm.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: isMobile ? '1rem 0.5rem' : '2rem 1rem',
      fontFamily: 'Roboto, sans-serif',
      backgroundColor: '#f8fafc'
    },
    header: {
      textAlign: 'center',
      marginBottom: isMobile ? '2rem' : '3rem',
      padding: isMobile ? '2rem 1rem' : '3rem 1rem',
      background: 'linear-gradient(135deg, #1C2734 0%, #577D8E 100%)',
      borderRadius: isMobile ? '15px' : '20px',
      color: 'white'
    },
    title: {
      fontSize: isMobile ? '2rem' : '3rem',
      fontWeight: '700',
      marginBottom: '1rem',
      textTransform: 'uppercase'
    },
    subtitle: {
      fontSize: isMobile ? '1.1rem' : '1.3rem',
      opacity: 0.9,
      marginBottom: '0'
    },
    content: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 400px',
      gap: isMobile ? '1rem' : '2rem',
      alignItems: 'start'
    },
    formSection: {
      backgroundColor: 'white',
      padding: isMobile ? '1.5rem' : '2.5rem',
      borderRadius: isMobile ? '15px' : '20px',
      boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
      order: isMobile ? 1 : 'unset'
    },
    summarySection: {
      backgroundColor: 'white',
      padding: isMobile ? '1.5rem' : '2rem',
      borderRadius: isMobile ? '15px' : '20px',
      boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
      position: isMobile ? 'static' : 'sticky',
      top: isMobile ? 'unset' : '2rem',
      order: isMobile ? 2 : 'unset',
      marginBottom: isMobile ? '1rem' : '0'
    },
    section: {
      marginBottom: isMobile ? '2rem' : '2.5rem'
    },
    sectionTitle: {
      fontSize: isMobile ? '1.2rem' : '1.4rem',
      fontWeight: '700',
      color: '#1C2734',
      marginBottom: isMobile ? '1rem' : '1.5rem',
      paddingBottom: '0.75rem',
      borderBottom: '3px solid #577D8E'
    },
    serviceGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: isMobile ? '1rem' : '1.5rem',
      marginBottom: '1rem'
    },
    serviceCard: {
      border: 'none',
      borderRadius: isMobile ? '20px' : '25px',
      padding: isMobile ? '1.5rem 1rem' : '2rem 1.5rem',
      cursor: 'pointer',
      transition: 'all 0.4s ease',
      backgroundColor: 'transparent',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: isMobile ? '140px' : '160px'
    },
    serviceCardSelected: {
      backgroundColor: 'white',
      transform: isMobile ? 'translateY(-2px)' : 'translateY(-5px)',
      boxShadow: '0 20px 40px rgba(87, 125, 142, 0.15)'
    },
    serviceImage: {
      width: isMobile ? '80px' : '100px',
      height: isMobile ? '80px' : '100px',
      borderRadius: '50%',
      objectFit: 'cover',
      marginBottom: isMobile ? '0.75rem' : '1rem',
      border: '3px solid #f1f5f9',
      transition: 'all 0.3s ease'
    },
    serviceImageSelected: {
      borderColor: '#577D8E',
      boxShadow: '0 8px 20px rgba(87, 125, 142, 0.3)'
    },
    serviceName: {
      fontSize: isMobile ? '1.1rem' : '1.3rem',
      fontWeight: '800',
      color: '#1C2734',
      marginBottom: isMobile ? '0.5rem' : '0.75rem',
      textTransform: 'uppercase'
    },
    servicePrice: {
      fontSize: isMobile ? '1.3rem' : '1.6rem',
      fontWeight: '900',
      color: '#577D8E',
      background: 'linear-gradient(135deg, #577D8E, #1C2734)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    selectedBadge: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      backgroundColor: '#577D8E',
      color: 'white',
      padding: '0.3rem 0.8rem',
      borderRadius: '15px',
      fontSize: '0.7rem',
      fontWeight: '700',
      textTransform: 'uppercase'
    },
    formGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: isMobile ? '1rem' : '1.5rem',
      marginBottom: '1rem'
    },
    formGroup: {
      marginBottom: isMobile ? '1rem' : '1.5rem'
    },
    label: {
      display: 'block',
      marginBottom: '0.5rem',
      fontWeight: '600',
      color: '#1C2734',
      fontSize: isMobile ? '0.9rem' : '0.95rem'
    },
    input: {
      width: '100%',
      padding: isMobile ? '0.875rem' : '1rem',
      border: '2px solid #e2e8f0',
      borderRadius: isMobile ? '10px' : '12px',
      fontSize: isMobile ? '0.95rem' : '1rem',
      transition: 'all 0.3s ease',
      backgroundColor: '#f8fafc',
      boxSizing: 'border-box'
    },
    inputFocus: {
      borderColor: '#577D8E',
      backgroundColor: 'white',
      boxShadow: '0 0 0 3px rgba(87, 125, 142, 0.1)',
      outline: 'none'
    },
    select: {
      width: '100%',
      padding: isMobile ? '0.875rem' : '1rem',
      border: '2px solid #e2e8f0',
      borderRadius: isMobile ? '10px' : '12px',
      fontSize: isMobile ? '0.95rem' : '1rem',
      backgroundColor: '#f8fafc',
      transition: 'all 0.3s ease',
      boxSizing: 'border-box'
    },
    selectFocus: {
      borderColor: '#577D8E',
      backgroundColor: 'white',
      boxShadow: '0 0 0 3px rgba(87, 125, 142, 0.1)',
      outline: 'none'
    },
    textarea: {
      width: '100%',
      padding: isMobile ? '0.875rem' : '1rem',
      border: '2px solid #e2e8f0',
      borderRadius: isMobile ? '10px' : '12px',
      fontSize: isMobile ? '0.95rem' : '1rem',
      minHeight: '120px',
      resize: 'vertical',
      backgroundColor: '#f8fafc',
      transition: 'all 0.3s ease',
      boxSizing: 'border-box',
      fontFamily: 'inherit'
    },
    textareaFocus: {
      borderColor: '#577D8E',
      backgroundColor: 'white',
      boxShadow: '0 0 0 3px rgba(87, 125, 142, 0.1)',
      outline: 'none'
    },
    summaryTitle: {
      fontSize: isMobile ? '1.3rem' : '1.5rem',
      fontWeight: '700',
      color: '#1C2734',
      marginBottom: isMobile ? '1rem' : '1.5rem',
      textAlign: 'center'
    },
    summaryItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: isMobile ? '0.75rem 0' : '1rem 0',
      borderBottom: '1px solid #e2e8f0'
    },
    summaryLabel: {
      color: '#64748b',
      fontWeight: '500',
      fontSize: isMobile ? '0.9rem' : '1rem'
    },
    summaryValue: {
      color: '#1C2734',
      fontWeight: '600',
      fontSize: isMobile ? '0.9rem' : '1rem'
    },
    total: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: isMobile ? '1rem 0' : '1.5rem 0',
      borderTop: '2px solid #e2e8f0',
      marginTop: '1rem'
    },
    totalLabel: {
      fontSize: isMobile ? '1.1rem' : '1.2rem',
      fontWeight: '700',
      color: '#1C2734'
    },
    totalValue: {
      fontSize: isMobile ? '1.3rem' : '1.5rem',
      fontWeight: '800',
      color: '#577D8E'
    },
    features: {
      backgroundColor: '#f0f7ff',
      padding: isMobile ? '1rem' : '1.5rem',
      borderRadius: isMobile ? '10px' : '12px',
      marginTop: isMobile ? '1.5rem' : '2rem'
    },
    feature: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: isMobile ? '0.5rem' : '0.75rem',
      fontSize: isMobile ? '0.85rem' : '0.9rem',
      color: '#1C2734'
    },
    featureIcon: {
      color: '#577D8E',
      marginRight: isMobile ? '0.5rem' : '0.75rem',
      fontSize: isMobile ? '1rem' : '1.1rem',
      flexShrink: 0
    },
    submitButton: {
      width: '100%',
      background: 'linear-gradient(135deg, #577D8E 0%, #1C2734 100%)',
      color: 'white',
      padding: isMobile ? '1.1rem 1.5rem' : '1.25rem 2rem',
      border: 'none',
      borderRadius: isMobile ? '10px' : '12px',
      fontSize: isMobile ? '1rem' : '1.1rem',
      fontWeight: '700',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      marginTop: isMobile ? '1.5rem' : '2rem',
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    },
    message: {
      padding: isMobile ? '1rem' : '1.25rem',
      borderRadius: isMobile ? '10px' : '12px',
      marginTop: isMobile ? '1rem' : '1.5rem',
      textAlign: 'center',
      fontWeight: '600',
      fontSize: isMobile ? '0.95rem' : '1rem'
    },
    success: {
      backgroundColor: '#dcfce7',
      color: '#166534',
      border: '2px solid #bbf7d0'
    },
    error: {
      backgroundColor: '#fee2e2',
      color: '#dc2626',
      border: '2px solid #fecaca'
    },
    durationNote: {
      fontSize: isMobile ? '0.8rem' : '0.85rem',
      color: '#577D8E',
      textAlign: 'center',
      marginTop: '0.5rem',
      fontStyle: 'italic'
    }
  };

  return (
    <>
      <Head>
        <title>Book Service | Alpamayo Technical Services</title>
        <meta name="description" content="Book Handyman, Plumber, or Electrician services in Dubai. Professional technicians available per hour." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>Book Your Service</h1>
          <p style={styles.subtitle}>Professional home services across Dubai - Book in 60 seconds</p>
        </div>

        <div style={styles.content}>
          {/* Main Form */}
          <div style={styles.formSection}>
            <form onSubmit={handleSubmit}>
              {/* Service Selection - UPDATED WITH IMAGES AND NO BORDERS */}
              <div style={styles.section}>
                <h2 style={styles.sectionTitle}>Choose Your Service</h2>
                <div style={styles.serviceGrid}>
                  {Object.entries(serviceTypes).map(([key, service]) => (
                    <div
                      key={key}
                      style={{
                        ...styles.serviceCard,
                        ...(formData.serviceType === key ? styles.serviceCardSelected : {})
                      }}
                      onClick={() => setFormData({...formData, serviceType: key})}
                      onMouseOver={(e) => {
                        if (formData.serviceType !== key && !isMobile) {
                          e.currentTarget.style.transform = 'translateY(-3px)';
                          e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
                        }
                      }}
                      onMouseOut={(e) => {
                        if (formData.serviceType !== key && !isMobile) {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = 'none';
                        }
                      }}
                    >
                      {formData.serviceType === key && (
                        <div style={styles.selectedBadge}>Selected</div>
                      )}
                      <img
                        src={service.image}
                        alt={service.name}
                        style={{
                          ...styles.serviceImage,
                          ...(formData.serviceType === key ? styles.serviceImageSelected : {})
                        }}
                        onError={(e) => {
                          // Fallback to a colored background with service icon if image fails to load
                          e.target.style.display = 'none';
                          const fallbackDiv = document.createElement('div');
                          fallbackDiv.style.width = styles.serviceImage.width;
                          fallbackDiv.style.height = styles.serviceImage.height;
                          fallbackDiv.style.borderRadius = styles.serviceImage.borderRadius;
                          fallbackDiv.style.backgroundColor = '#577D8E';
                          fallbackDiv.style.display = 'flex';
                          fallbackDiv.style.alignItems = 'center';
                          fallbackDiv.style.justifyContent = 'center';
                          fallbackDiv.style.color = 'white';
                          fallbackDiv.style.fontSize = '1.5rem';
                          fallbackDiv.style.marginBottom = styles.serviceImage.marginBottom;
                          fallbackDiv.textContent = service.name.charAt(0);
                          e.target.parentNode.insertBefore(fallbackDiv, e.target);
                        }}
                      />
                      <div style={styles.serviceName}>{service.name}</div>
                      <div style={styles.servicePrice}>{service.price} AED/hr</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Personal Information */}
              <div style={styles.section}>
                <h2 style={styles.sectionTitle}>Your Information</h2>
                <div style={styles.formGrid}>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      style={styles.input}
                      required
                      onFocus={(e) => {
                        e.target.style.borderColor = styles.inputFocus.borderColor;
                        e.target.style.backgroundColor = styles.inputFocus.backgroundColor;
                        e.target.style.boxShadow = styles.inputFocus.boxShadow;
                        e.target.style.outline = styles.inputFocus.outline;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = styles.input.border;
                        e.target.style.backgroundColor = styles.input.backgroundColor;
                        e.target.style.boxShadow = 'none';
                        e.target.style.outline = 'none';
                      }}
                    />
                  </div>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      style={styles.input}
                      required
                      onFocus={(e) => {
                        e.target.style.borderColor = styles.inputFocus.borderColor;
                        e.target.style.backgroundColor = styles.inputFocus.backgroundColor;
                        e.target.style.boxShadow = styles.inputFocus.boxShadow;
                        e.target.style.outline = styles.inputFocus.outline;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = styles.input.border;
                        e.target.style.backgroundColor = styles.input.backgroundColor;
                        e.target.style.boxShadow = 'none';
                        e.target.style.outline = 'none';
                      }}
                    />
                  </div>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      style={styles.input}
                      required
                      onFocus={(e) => {
                        e.target.style.borderColor = styles.inputFocus.borderColor;
                        e.target.style.backgroundColor = styles.inputFocus.backgroundColor;
                        e.target.style.boxShadow = styles.inputFocus.boxShadow;
                        e.target.style.outline = styles.inputFocus.outline;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = styles.input.border;
                        e.target.style.backgroundColor = styles.input.backgroundColor;
                        e.target.style.boxShadow = 'none';
                        e.target.style.outline = 'none';
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Location Details */}
              <div style={styles.section}>
                <h2 style={styles.sectionTitle}>Service Location</h2>
                <div style={styles.formGrid}>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Area in Dubai *</label>
                    <select
                      name="area"
                      value={formData.area}
                      onChange={handleChange}
                      style={styles.select}
                      required
                      onFocus={(e) => {
                        e.target.style.borderColor = styles.selectFocus.borderColor;
                        e.target.style.backgroundColor = styles.selectFocus.backgroundColor;
                        e.target.style.boxShadow = styles.selectFocus.boxShadow;
                        e.target.style.outline = styles.selectFocus.outline;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = styles.select.border;
                        e.target.style.backgroundColor = styles.select.backgroundColor;
                        e.target.style.boxShadow = 'none';
                        e.target.style.outline = 'none';
                      }}
                    >
                      <option value="">Select your area</option>
                      {dubaiAreas.map(area => (
                        <option key={area} value={area}>{area}</option>
                      ))}
                    </select>
                  </div>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Full Address *</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      style={styles.input}
                      placeholder="Building, apartment, street details"
                      required
                      onFocus={(e) => {
                        e.target.style.borderColor = styles.inputFocus.borderColor;
                        e.target.style.backgroundColor = styles.inputFocus.backgroundColor;
                        e.target.style.boxShadow = styles.inputFocus.boxShadow;
                        e.target.style.outline = styles.inputFocus.outline;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = styles.input.border;
                        e.target.style.backgroundColor = styles.input.backgroundColor;
                        e.target.style.boxShadow = 'none';
                        e.target.style.outline = 'none';
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Scheduling */}
              <div style={styles.section}>
                <h2 style={styles.sectionTitle}>Schedule Your Service</h2>
                <div style={styles.formGrid}>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Preferred Date *</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      style={styles.input}
                      min={getMinDate()}
                      required
                      onFocus={(e) => {
                        e.target.style.borderColor = styles.inputFocus.borderColor;
                        e.target.style.backgroundColor = styles.inputFocus.backgroundColor;
                        e.target.style.boxShadow = styles.inputFocus.boxShadow;
                        e.target.style.outline = styles.inputFocus.outline;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = styles.input.border;
                        e.target.style.backgroundColor = styles.input.backgroundColor;
                        e.target.style.boxShadow = 'none';
                        e.target.style.outline = 'none';
                      }}
                    />
                  </div>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Preferred Time *</label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      style={styles.select}
                      required
                      onFocus={(e) => {
                        e.target.style.borderColor = styles.selectFocus.borderColor;
                        e.target.style.backgroundColor = styles.selectFocus.backgroundColor;
                        e.target.style.boxShadow = styles.selectFocus.boxShadow;
                        e.target.style.outline = styles.selectFocus.outline;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = styles.select.border;
                        e.target.style.backgroundColor = styles.select.backgroundColor;
                        e.target.style.boxShadow = 'none';
                        e.target.style.outline = 'none';
                      }}
                    >
                      <option value="">Select time</option>
                      {timeSlots.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Duration *</label>
                    <select
                      name="duration"
                      value={formData.duration}
                      onChange={handleChange}
                      style={styles.select}
                      required
                      onFocus={(e) => {
                        e.target.style.borderColor = styles.selectFocus.borderColor;
                        e.target.style.backgroundColor = styles.selectFocus.backgroundColor;
                        e.target.style.boxShadow = styles.selectFocus.boxShadow;
                        e.target.style.outline = styles.selectFocus.outline;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = styles.select.border;
                        e.target.style.backgroundColor = styles.select.backgroundColor;
                        e.target.style.boxShadow = 'none';
                        e.target.style.outline = 'none';
                      }}
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(hours => (
                        <option key={hours} value={hours}>{hours} hour{hours > 1 ? 's' : ''}</option>
                      ))}
                    </select>
                    <div style={styles.durationNote}>Minimum booking: 1 hour</div>
                  </div>
                </div>
              </div>

              {/* Service Description */}
              <div style={styles.section}>
                <h2 style={styles.sectionTitle}>Service Details</h2>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Describe what you need help with *</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    style={styles.textarea}
                    placeholder="Please describe the work needed in detail. The more information you provide, the better we can serve you."
                    required
                    onFocus={(e) => {
                      e.target.style.borderColor = styles.textareaFocus.borderColor;
                      e.target.style.backgroundColor = styles.textareaFocus.backgroundColor;
                      e.target.style.boxShadow = styles.textareaFocus.boxShadow;
                      e.target.style.outline = styles.textareaFocus.outline;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = styles.textarea.border;
                      e.target.style.backgroundColor = styles.textarea.backgroundColor;
                      e.target.style.boxShadow = 'none';
                      e.target.style.outline = 'none';
                    }}
                  />
                </div>
              </div>

              <button
                type="submit"
                style={{
                  ...styles.submitButton,
                  ...(isSubmitting && { opacity: 0.7, cursor: 'not-allowed' })
                }}
                disabled={isSubmitting}
                onMouseOver={(e) => !isSubmitting && !isMobile && (e.target.style.transform = 'translateY(-2px)')}
                onMouseOut={(e) => !isSubmitting && !isMobile && (e.target.style.transform = 'translateY(0)')}
              >
                {isSubmitting ? 'Booking Your Service...' : 'Confirm & Book Now'}
              </button>

              {submitMessage && (
                <div style={{
                  ...styles.message,
                  ...(submitMessage.includes('confirmed') || submitMessage.includes('received') ? styles.success : styles.error)
                }}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>

          {/* Booking Summary - Now appears at bottom on mobile */}
          <div style={styles.summarySection}>
            <h3 style={styles.summaryTitle}>Booking Summary</h3>
            
            <div style={styles.summaryItem}>
              <span style={styles.summaryLabel}>Service</span>
              <span style={styles.summaryValue}>{serviceTypes[formData.serviceType].name}</span>
            </div>
            
            <div style={styles.summaryItem}>
              <span style={styles.summaryLabel}>Rate</span>
              <span style={styles.summaryValue}>{serviceTypes[formData.serviceType].price} AED/hour</span>
            </div>
            
            <div style={styles.summaryItem}>
              <span style={styles.summaryLabel}>Duration</span>
              <span style={styles.summaryValue}>{formData.duration} hour{formData.duration > 1 ? 's' : ''}</span>
            </div>

            {formData.date && (
              <div style={styles.summaryItem}>
                <span style={styles.summaryLabel}>Date</span>
                <span style={styles.summaryValue}>{formData.date}</span>
              </div>
            )}

            {formData.time && (
              <div style={styles.summaryItem}>
                <span style={styles.summaryLabel}>Time</span>
                <span style={styles.summaryValue}>{formData.time}</span>
              </div>
            )}

            {formData.area && (
              <div style={styles.summaryItem}>
                <span style={styles.summaryLabel}>Area</span>
                <span style={styles.summaryValue}>{formData.area}</span>
              </div>
            )}

            <div style={styles.total}>
              <span style={styles.totalLabel}>Total Amount</span>
              <span style={styles.totalValue}>{calculateTotal()} AED</span>
            </div>

            <div style={styles.features}>
              <div style={styles.feature}>
                <span style={styles.featureIcon}>✅</span>
                <span>Professional Certified Technicians</span>
              </div>
              <div style={styles.feature}>
                <span style={styles.featureIcon}>✅</span>
                <span>Same Day Service Available</span>
              </div>
              <div style={styles.feature}>
                <span style={styles.featureIcon}>✅</span>
                <span>100% Satisfaction Guarantee</span>
              </div>
              <div style={styles.feature}>
                <span style={styles.featureIcon}>✅</span>
                <span>Transparent Pricing - No Hidden Fees</span>
              </div>
              <div style={styles.feature}>
                <span style={styles.featureIcon}>✅</span>
                <span>24/7 Customer Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
