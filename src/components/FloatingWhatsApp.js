import React from 'react';

const FloatingWhatsApp = () => {
  const phoneNumber = "+971589071754";
  const message = "Hello! I'm interested in your services.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="floating-whatsapp">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-link"
        aria-label="Contact us on WhatsApp"
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path
            d="M16 0C7.163 0 0 7.163 0 16C0 24.837 7.163 32 16 32C24.837 32 32 24.837 32 16C32 7.163 24.837 0 16 0Z"
            fill="#25D366"
          />
          <path
            d="M26.667 10.683C26.267 9.55 24.533 8.083 23.4 7.683C22.733 7.483 20.483 7.35 19.25 8.917C18.833 9.417 18.183 10.35 17.983 10.683C17.783 11.017 17.517 11.083 17.183 10.883C16.85 10.683 15.65 10.217 14.25 8.917C12.85 7.617 12.383 6.417 12.183 6.083C11.983 5.75 12.05 5.483 12.25 5.15C12.583 4.683 13.517 3.85 13.717 3.383C13.917 2.917 13.85 2.517 13.717 2.183C13.583 1.85 12.783 0.216 12.45 0.016C12.117 -0.184 11.717 -0.05 11.45 0.016C11.183 0.083 10.383 0.483 9.916 1.55C9.45 2.617 8.05 5.083 7.85 8.083C7.65 11.083 9.25 13.75 11.05 15.55C12.85 17.35 15.517 18.95 18.517 18.75C21.517 18.55 24.05 17.083 25.05 16.617C26.05 16.15 27.8 15.35 28 14.283C28.2 13.217 27.067 12.817 26.667 10.683Z"
            fill="white"
          />
        </svg>
      </a>

      <style jsx>{`
        .floating-whatsapp {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 1000;
        }

        .whatsapp-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          background: #25D366;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .whatsapp-link:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.5);
        }

        .whatsapp-link svg {
          width: 32px;
          height: 32px;
        }

        /* Pulse animation */
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
          }
          70% {
            box-shadow: 0 0 0 15px rgba(37, 211, 102, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }

        .whatsapp-link {
          animation: pulse 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default FloatingWhatsApp;
