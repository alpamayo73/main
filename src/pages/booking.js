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
    'Downtown Dubai',
    'Dubai Marina',
    'Jumeirah',
    'Al Barsha',
    'Al Quoz',
    'Business Bay',
    'Deira',
    'Bur Dubai',
    'Jebel Ali',
    'Dubai Hills',
    'Arabian Ranches',
    'Motor City',
    'Sports City',
    'Discovery Gardens',
    'International City',
    'Silicon Oasis',
    'Academic City',
    'Al Warqa',
    'Mirdif',
    'Nad Al Sheba',
    'Al Safa',
    'Umm Suqeim',
    'Al Wasl',
    'Jumeirah Lakes Towers (JLT)',
    'Palm Jumeirah',
    'Dubai Investment Park (DIP)',
    'Jumeirah Village Circle (JVC)',
    'Jumeirah Village Triangle (JVT)',
    'Dubai Land',
    'Al Khawaneej',
    'Muhaisnah',
    'Al Qusais',
    'Hor Al Anz',
    'Al Twar',
    'Al Nahda',
    'Al Garhoud',
    'Oud Metha',
    'Al Satwa',
    'Al Karama',
    'Al Mankhool'
  ];

  const serviceTypes = {
    handyman: {
      name: 'Handyman',
      price: 100,
      description: 'Furniture assembly, moving help, general repairs'
    },
    plumber: {
      name: 'Plumber',
      price: 100,
      description: 'Pipe repairs, leak fixes, installation'
    },
    electrician: {
      name: 'Electrician',
      price: 125,
      description: 'Wiring, repairs, installations'
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
        setSubmitMessage('Booking confirmed! You will receive an email confirmation shortly.');
        // Reset form
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
      setSubmitMessage('Network error. Please try again.');
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
      maxWidth: '800px',
      margin: '0 auto',
      padding: '2rem 1rem',
      fontFamily: 'Roboto, sans-serif'
    },
    header: {
      textAlign: 'center',
      marginBottom: '3rem'
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: '700',
      color: '#1C2734',
      marginBottom: '1rem',
      textTransform: 'uppercase'
    },
    subtitle: {
      fontSize: '1.2rem',
      color: '#666',
      marginBottom: '2rem'
    },
    form: {
      backgroundColor: '#f8f9fa',
      padding: '2rem',
      borderRadius: '12px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
    },
    section: {
      marginBottom: '2rem'
    },
    sectionTitle: {
      fontSize: '1.3rem',
      fontWeight: '600',
      color: '#1C2734',
      marginBottom: '1rem',
      borderBottom: '2px solid #577D8E',
      paddingBottom: '0.5rem'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1rem',
      marginBottom: '1rem'
    },
    formGroup: {
      marginBottom: '1.5rem'
    },
    label: {
      display: 'block',
      marginBottom: '0.5rem',
      fontWeight: '600',
      color: '#1C2734'
    },
    input: {
      width: '100%',
      padding: '0.75rem',
      border: '1px solid #ddd',
      borderRadius: '6px',
      fontSize: '1rem',
      transition: 'border-color 0.3s ease'
    },
    select: {
      width: '100%',
      padding: '0.75rem',
      border: '1px solid #ddd',
      borderRadius: '6px',
      fontSize: '1rem',
      backgroundColor: 'white'
    },
    textarea: {
      width: '100%',
      padding: '0.75rem',
      border: '1px solid #ddd',
      borderRadius: '6px',
      fontSize: '1rem',
      minHeight: '100px',
      resize: 'vertical'
    },
    serviceCard: {
      border: '2px solid #e9ecef',
      borderRadius: '8px',
      padding: '1rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      backgroundColor: 'white'
    },
    serviceCardSelected: {
      borderColor: '#577D8E',
      backgroundColor: '#f0f7ff'
    },
    serviceName: {
      fontSize: '1.1rem',
      fontWeight: '600',
      color: '#1C2734',
      marginBottom: '0.5rem'
    },
    servicePrice: {
      fontSize: '1.2rem',
      fontWeight: '700',
      color: '#577D8E',
      marginBottom: '0.5rem'
    },
    serviceDescription: {
      fontSize: '0.9rem',
      color: '#666'
    },
    summary: {
      backgroundColor: 'white',
      padding: '1.5rem',
      borderRadius: '8px',
      border: '2px solid #577D8E',
      marginTop: '1rem'
    },
    summaryRow: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '0.5rem'
    },
    total: {
      fontSize: '1.3rem',
      fontWeight: '700',
      color: '#1C2734',
      borderTop: '2px solid #ddd',
      paddingTop: '1rem',
      marginTop: '1rem'
    },
    submitButton: {
      width: '100%',
      backgroundColor: '#577D8E',
      color: 'white',
      padding: '1rem 2rem',
      border: 'none',
      borderRadius: '6px',
      fontSize: '1.1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      marginTop: '2rem'
    },
    message: {
      padding: '1rem',
      borderRadius: '6px',
      marginTop: '1rem',
      textAlign: 'center',
      fontWeight: '600'
    },
    success: {
      backgroundColor: '#d4edda',
      color: '#155724',
      border: '1px solid #c3e6cb'
    },
    error: {
      backgroundColor: '#f8d7da',
      color: '#721c24',
      border: '1px solid #f5c6cb'
    }
  };

  return (
    <>
      <Head>
        <title>Book Service | Alpamayo Technical Services</title>
        <meta name="description" content="Book Handyman, Plumber, or Electrician services in Dubai. Professional technicians available per hour." />
      </Head>

      <div style={styles.container}>
        <div style={styles.header}>
          <h1 style={styles.title}>BOOK A SERVICE</h1>
          <p style={styles.subtitle}>Professional technicians at your service across Dubai</p>
        </div>

        <form onSubmit={handleSubmit} style={styles.form}>
          {/* Service Selection */}
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>1. Select Service</h2>
            <div style={styles.grid}>
              {Object.entries(serviceTypes).map(([key, service]) => (
                <div
                  key={key}
                  style={{
                    ...styles.serviceCard,
                    ...(formData.serviceType === key ? styles.serviceCardSelected : {})
                  }}
                  onClick={() => setFormData({...formData, serviceType: key})}
                >
                  <div style={styles.serviceName}>{service.name}</div>
                  <div style={styles.servicePrice}>{service.price} AED/hour</div>
                  <div style={styles.serviceDescription}>{service.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Personal Information */}
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>2. Your Information</h2>
            <div style={styles.grid}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  style={styles.input}
                  required
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
                />
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>3. Location Details</h2>
            <div style={styles.grid}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Area in Dubai *</label>
                <select
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  style={styles.select}
                  required
                >
                  <option value="">Select Area</option>
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
                  placeholder="Building name, apartment number, street"
                  required
                />
              </div>
            </div>
          </div>

          {/* Scheduling */}
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>4. Schedule Service</h2>
            <div style={styles.grid}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Date *</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  style={styles.input}
                  min={getMinDate()}
                  required
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Time *</label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  style={styles.select}
                  required
                >
                  <option value="">Select Time</option>
                  {timeSlots.map(time => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Duration (hours) *</label>
                <select
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  style={styles.select}
                  required
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
            <h2 style={styles.sectionTitle}>5. Service Details</h2>
            <div style={styles.formGroup}>
              <label style={styles.label}>Describe what you need help with *</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                style={styles.textarea}
                placeholder="Please describe the work needed in detail..."
                required
              />
            </div>
          </div>

          {/* Booking Summary */}
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Booking Summary</h2>
            <div style={styles.summary}>
              <div style={styles.summaryRow}>
                <span>Service:</span>
                <span>{serviceTypes[formData.serviceType].name}</span>
              </div>
              <div style={styles.summaryRow}>
                <span>Rate:</span>
                <span>{serviceTypes[formData.serviceType].price} AED/hour</span>
              </div>
              <div style={styles.summaryRow}>
                <span>Duration:</span>
                <span>{formData.duration} hour{formData.duration > 1 ? 's' : ''}</span>
              </div>
              <div style={{...styles.summaryRow, ...styles.total}}>
                <span>Total Amount:</span>
                <span>{calculateTotal()} AED</span>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              ...styles.submitButton,
              ...(isSubmitting && { opacity: 0.7, cursor: 'not-allowed' })
            }}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Booking...' : 'Confirm Booking'}
          </button>

          {submitMessage && (
            <div style={{
              ...styles.message,
              ...(submitMessage.includes('confirmed') ? styles.success : styles.error)
            }}>
              {submitMessage}
            </div>
          )}
        </form>
      </div>
    </>
  );
}
