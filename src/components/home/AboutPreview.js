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
                Luxury Renovation Experts in UAE
              </h2>
              
              <p className="about-description">
                Alpamayo Technical Services brings unparalleled expertise in luxury renovations 
                and professional AC services to UAE's most discerning clients. With years of 
                experience and a commitment to excellence, we transform spaces into exceptional 
                living and working environments.
              </p>
            </div>

            {/* Image */}
            <div className="about-image">
              <img 
                src="/images/reno.webp"
                alt="Luxury renovation in UAE"
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
          line-height: 1.6;
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
          
          .about-img {
            height: 300px;
          }
        }
      `}</style>
    </>
  );
}
