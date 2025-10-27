import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header style={{
      backgroundColor: 'white',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 50
    }}>
      {/* Top Bar */}
      <div style={{
        backgroundColor: '#1C2734',
        color: 'white',
        padding: '0.5rem 0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.875rem'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '0.5rem' }}>📞</span>
              <span>+971589071754</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '0.5rem' }}>✉️</span>
              <span>info@thealpamayo.com</span>
            </div>
          </div>
          <div>Al Qouz, Dubai, United Arab Emirates</div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '1rem 20px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Link href="/" style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#1C2734',
            textDecoration: 'none'
          }}>
            Alpamayo Technical Services
          </Link>

          {/* Desktop Navigation */}
          <div style={{
            display: 'none',
            gap: '2rem'
          }}>
            <Link href="/" style={{
              color: '#1C2734',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}>Home</Link>
            <Link href="/about" style={{
              color: '#1C2734',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}>About</Link>
            <Link href="/services" style={{
              color: '#1C2734',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}>Services</Link>
            <Link href="/contact" style={{
              color: '#1C2734',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}>Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            style={{
              display: 'block',
              fontSize: '1.5rem',
              background: 'none',
              border: 'none',
              cursor: 'pointer'
            }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: 'white',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              padding: '1rem'
            }}>
              <Link href="/" style={{
                color: '#1C2734',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}>Home</Link>
              <Link href="/about" style={{
                color: '#1C2734',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}>About</Link>
              <Link href="/services" style={{
                color: '#1C2734',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}>Services</Link>
              <Link href="/contact" style={{
                color: '#1C2734',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}>Contact</Link>
            </div>
          </div>
        )}
      </nav>

      <style jsx>{`
        @media (min-width: 768px) {
          nav > div > div:first-of-type {
            display: flex;
          }
          
          button {
            display: none;
          }
        }
        
        a:hover {
          color: #577D8E;
        }
      `}</style>
    </header>
  )
}
