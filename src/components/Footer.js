import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#1C2734',
      color: 'white',
      padding: '3rem 0'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2rem'
        }}>
          {/* Company Info */}
          <div style={{
            gridColumn: 'span 2'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>Alpamayo Technical Services</h3>
            <p style={{
              color: '#d1d5db',
              marginBottom: '1rem'
            }}>
              Premium renovation and AC services in Dubai. Transforming spaces with luxury 
              and precision for villas, apartments, and offices.
            </p>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '0.5rem'
            }}>
              <span style={{ marginRight: '0.5rem' }}>📞</span>
              <span>+971589071754</span>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '0.5rem'
            }}>
              <span style={{ marginRight: '0.5rem' }}>✉️</span>
              <span>info@thealpamayo.com</span>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center'
            }}>
              <span style={{ marginRight: '0.5rem' }}>📍</span>
              <span>Al Qouz, Dubai, United Arab Emirates</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{
              fontSize: '1.125rem',
              fontWeight: '600',
              marginBottom: '1rem'
            }}>Services</h4>
            <ul style={{
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}>
              <li>
                <Link href="/services/renovation" style={{
                  color: '#d1d5db',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}>Renovation</Link>
              </li>
              <li>
                <Link href="/services/ac-services" style={{
                  color: '#d1d5db',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}>AC Services</Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontSize: '1.125rem',
              fontWeight: '600',
              marginBottom: '1rem'
            }}>Quick Links</h4>
            <ul style={{
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}>
              <li>
                <Link href="/" style={{
                  color: '#d1d5db',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}>Home</Link>
              </li>
              <li>
                <Link href="/about" style={{
                  color: '#d1d5db',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}>About</Link>
              </li>
              <li>
                <Link href="/services" style={{
                  color: '#d1d5db',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}>Services</Link>
              </li>
              <li>
                <Link href="/contact" style={{
                  color: '#d1d5db',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid #4b5563',
          marginTop: '2rem',
          paddingTop: '2rem',
          textAlign: 'center',
          color: '#d1d5db'
        }}>
          <p>&copy; 2024 Alpamayo Technical Services. All rights reserved.</p>
        </div>
      </div>

      <style jsx>{`
        a:hover {
          color: white;
        }
        
        @media (min-width: 768px) {
          div > div:first-child {
            grid-template-columns: 2fr 1fr 1fr;
          }
        }
      `}</style>
    </footer>
  );
}
