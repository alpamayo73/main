import Link from 'next/link';

export default function AboutPreview() {
  return (
    <>
      <section className="about-section">
        <div className="about-container">
          <div className="about-grid">
            
            {/* Content */}
            <div className="about-content">
              <h2 className="about-title">
                Luxury Renovation Experts in Dubai
              </h2>
              
              <p className="about-description">
                Alpamayo Technical Services brings unparalleled expertise in luxury renovations 
                and professional AC services to Dubai's most discerning clients. With years of 
                experience and a commitment to excellence, we transform spaces into exceptional 
                living and working environments.
              </p>

              <div className="about-stats">
                <div className="stat-card primary">
                  <div className="stat-number">5+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat-card secondary">
                  <div className="stat-number">200+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
              </div>

              <Link href="/about" className="about-btn">
                Learn More About Us
              </Link>
            </div>

            {/* Image */}
            <div className="about-image">
              <img 
                src="https://images.unsplash.com/photo-1558036117-15e82a2c9c7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Luxury renovation in Dubai"
                className="about-img"
              />
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .about-section {
          padding: 5rem 0;
          background-color: #f9fafb;
        }

        .about-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .about-title {
          font-size: 2.5rem;
          font-weight: bold;
          color: #1C2734;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .about-description {
          font-size: 1.125rem;
          color: #6b7280;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .about-stats {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .stat-card {
          color: white;
          padding: 1rem 1.5rem;
          border-radius: 8px;
          text-align: center;
        }

        .stat-card.primary {
          background-color: #577D8E;
        }

        .stat-card.secondary {
          background-color: #1C2734;
        }

        .stat-number {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 0.25rem;
        }

        .stat-label {
          font-size: 0.9rem;
        }

        .about-btn {
          display: inline-block;
          background-color: #577D8E;
          color: white;
          padding: 0.8rem 1.5rem;
          border-radius: 6px;
          font-weight: bold;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .about-btn:hover {
          background-color: #1C2734;
          transform: scale(1.05);
        }

        .about-image {
          position: relative;
        }

        .about-img {
          width: 100%;
          height: 400px;
          object-fit: cover;
          border-radius: 12px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
        }

        /* Mobile Styles */
        @media (max-width: 767px) {
          .about-section {
            padding: 3rem 0;
          }
          
          .about-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .about-title {
            font-size: 2rem;
            text-align: center;
          }
          
          .about-description {
            text-align: center;
            font-size: 1rem;
          }
          
          .about-stats {
            flex-direction: column;
            gap: 1rem;
            align-items: center;
          }
          
          .stat-card {
            width: 100%;
            max-width: 200px;
          }
          
          .about-btn {
            display: block;
            text-align: center;
            margin: 0 auto;
          }
          
          .about-img {
            height: 300px;
          }
        }
      `}</style>
    </>
  );
}
