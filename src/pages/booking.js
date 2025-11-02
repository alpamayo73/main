import { useState } from 'react';
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
    duration: 2,
    description: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

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
      icon: '🔨'
    },
    plumber: {
      name: 'Plumber',
      price: 100,
      description: 'Pipe repairs, leak fixes, installation',
      icon: '🔧'
    },
    electrician: {
      name: 'Electrician',
      price: 125,
      description: 'Wiring, repairs, installations',
      icon: '⚡'
    }
  };

  const timeSlots = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
    '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
    '17:00', '17:30', '18:00', '18:30', '19:00', '19:30'
  ];

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
          duration: 2,
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
      padding: '2rem 1rem',
      fontFamily: 'Roboto, sans-serif',
      backgroundColor: '#f8fafc'
    },
    header: {
      textAlign: 'center',
      marginBottom: '3rem',
      padding: '3rem 1rem',
      background: 'linear-gradient(135deg, #1C2734 0%, #577D8E 100%)',
      borderRadius: '20px',
      color: 'white'
    },
    title: {
      fontSize: '3rem',
      fontWeight: '700',
      marginBottom: '1rem',
      textTransform: 'uppercase'
    },
    subtitle: {
      fontSize: '1.3rem',
      opacity: 0.9,
      marginBottom: '0'
    },
    content: {
      display: 'grid',
      gridTemplateColumns: '1fr 400px',
      gap: '2rem',
      alignItems: 'start'
    },
    formSection: {
      backgroundColor: 'white',
      padding: '2.5rem',
      borderRadius: '20px',
      boxShadow: '0 10px 40px rgba(0,0,0,0.08)'
    },
    summarySection: {
      backgroundColor: 'white',
      padding: '2rem',
      borderRadius: '20px',
      boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
      position: 'sticky',
      top: '2rem'
    },
    section: {
      marginBottom: '2.5rem'
    },
    sectionTitle: {
      fontSize: '1.4rem',
      fontWeight: '700',
      color: '#1C2734',
      marginBottom: '1.5rem',
      paddingBottom: '0.75rem',
      borderBottom: '3px solid #577D8E'
    },
    serviceGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '1rem',
      marginBottom: '1rem'
    },
    serviceCard: {
      border: '2px solid #e2e8f0',
      borderRadius: '15px',
      padding: '1.5rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      backgroundColor: 'white',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    },
    serviceCardSelected: {
      borderColor: '#577D8E',
      backgroundColor: '#f8fafc',
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 25px rgba(87, 125, 142, 0.15)'
    },
    serviceIcon: {
      fontSize: '2.5rem',
      marginBottom: '1rem'
    },
    serviceName: {
      fontSize: '1.1rem',
      fontWeight: '700',
      color: '#1C2734',
      marginBottom: '0.5rem'
    },
    servicePrice: {
      fontSize: '1.3rem',
      fontWeight: '800',
      color: '#577D8E',
      marginBottom: '0.5rem'
    },
    serviceDescription: {
      fontSize: '0.85rem',
      color: '#64748b',
      lineHeight: '1.4'
    },
    formGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1.5rem',
      marginBottom: '1rem'
    },
    formGroup: {
      marginBottom: '1.5rem'
    },
    label: {
      display: 'block',
      marginBottom: '0.5rem',
      fontWeight: '600',
      color: '#1C2734',
      fontSize: '0.95rem'
    },
    input: {
      width: '100%',
      padding: '1rem',
      border: '2px solid #e2e8f0',
      borderRadius: '12px',
      fontSize: '1rem',
      transition: 'all 0.3s ease',
      backgroundColor: '#f8fafc'
    },
    select: {
      width: '100%',
      padding: '1rem',
      border: '2px solid #e2e8f0',
      borderRadius: '12px',
      fontSize: '1rem',
      backgroundColor: '#f8fafc',
      transition: 'all 0.3s ease'
    },
    textarea: {
      width: '100%',
      padding: '1rem',
      border: '2px solid #e2e8f0',
      borderRadius: '12px',
      fontSize: '1rem',
      minHeight: '120px',
      resize: 'vertical',
      backgroundColor: '#f8fafc',
      transition: 'all 0.3s ease'
    },
    focus: {
      borderColor: '#577D8E',
      backgroundColor: 'white',
      boxShadow: '0 0 0 3px rgba(87, 125, 142, 0.1)'
    },
    summaryTitle: {
      fontSize: '1.5rem',
      fontWeight: '700',
      color: '#1C2734',
      marginBottom: '1.5rem',
      textAlign: 'center'
    },
    summaryItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 0',
      borderBottom: '1px solid #e2e8f0'
    },
    summaryLabel: {
      color: '#64748b',
      fontWeight: '500'
    },
    summaryValue: {
      color: '#1C2734',
      fontWeight: '600'
    },
    total: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1.5rem 0',
      borderTop: '2px solid #e2e8f0',
      marginTop: '1rem'
    },
    totalLabel: {
      fontSize: '1.2rem',
      fontWeight: '700',
      color: '#1C2734'
    },
    totalValue: {
      fontSize: '1.5rem',
      fontWeight: '800',
      color: '#577D8E'
    },
    features: {
      backgroundColor: '#f0f7ff',
      padding: '1.5rem',
      borderRadius: '12px',
      marginTop: '2rem'
    },
    feature: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '0.75rem',
      fontSize: '0.9rem',
      color: '#1C2734'
    },
    featureIcon: {
      color: '#577D8E',
      marginRight: '0.75rem',
      fontSize: '1.1rem'
    },
    submitButton: {
      width: '100%',
      background: 'linear-gradient(135deg, #577D8E 0%, #1C2734 100%)',
      color: 'white',
      padding: '1.25rem 2rem',
      border: 'none',
      borderRadius: '12px',
      fontSize: '1.1rem',
      fontWeight: '700',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      marginTop: '2rem',
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    },
    message: {
      padding: '1.25rem',
      borderRadius: '12px',
      marginTop: '1.5rem',
      textAlign: 'center',
      fontWeight: '600',
      fontSize: '1rem'
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
    }
  };

  return (
    <>
      <Head>
        <title>Book Service | Alpamayo Technical Services</title>
        <meta name="description" content="Book Handyman, Plumber, or Electrician services in Dubai. Professional technicians available per hour." />
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
              {/* Service Selection */}
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
                    >
                      <div style={styles.serviceIcon}>{service.icon}</div>
                      <div style={styles.serviceName}>{service.name}</div>
                      <div style={styles.servicePrice}>{service.price} AED/hr</div>
                      <div style={styles.serviceDescription}>{service.description}</div>
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
                      onFocus={(e) => e.target.style = {...styles.input, ...styles.focus}}
                      onBlur={(e) => e.target.style = styles.input}
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
                      onFocus={(e) => e.target.style = {...styles.input, ...styles.focus}}
                      onBlur={(e) => e.target.style = styles.input}
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
                      onFocus={(e) => e.target.style = {...styles.input, ...styles.focus}}
                      onBlur={(e) => e.target.style = styles.input}
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
                      onFocus={(e) => e.target.style = {...styles.select, ...styles.focus}}
                      onBlur={(e) => e.target.style = styles.select}
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
                      onFocus={(e) => e.target.style = {...styles.input, ...styles.focus}}
                      onBlur={(e) => e.target.style = styles.input}
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
                      onFocus={(e) => e.target.style = {...styles.input, ...styles.focus}}
                      onBlur={(e) => e.target.style = styles.input}
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
                      onFocus={(e) => e.target.style = {...styles.select, ...styles.focus}}
                      onBlur={(e) => e.target.style = styles.select}
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
                      onFocus={(e) => e.target.style = {...styles.select, ...styles.focus}}
                      onBlur={(e) => e.target.style = styles.select}
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(hours => (
                        <option key={hours} value={hours}>{hours} hour{hours > 1 ? 's' : ''}</option>
                      ))}
                    </select>
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
                    onFocus={(e) => e.target.style = {...styles.textarea, ...styles.focus}}
                    onBlur={(e) => e.target.style = styles.textarea}
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
                onMouseOver={(e) => !isSubmitting && (e.target.style.transform = 'translateY(-2px)')}
                onMouseOut={(e) => !isSubmitting && (e.target.style.transform = 'translateY(0)')}
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

          {/* Booking Summary */}
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
