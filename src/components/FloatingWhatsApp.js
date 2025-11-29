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
        {/* Using PNG image */}
        <img 
          src="/whatsapp-logo.png" 
          alt="WhatsApp" 
          width="32" 
          height="32"
        />
      </a>

      <style jsx>{`
        .floating-whatsapp {
          position: fixed;
          bottom: 25px;
          right: 25px;
          z-index: 1000;
        }

        .whatsapp-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 64px;
          background: #25D366;
          border-radius: 50%;
          box-shadow: 0 4px 16px rgba(37, 211, 102, 0.4);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
          border: 2px solid white;
        }

        .whatsapp-link:hover {
          transform: scale(1.1) translateY(-2px);
          box-shadow: 0 8px 25px rgba(37, 211, 102, 0.6);
          background: #20bd5a;
        }

        .whatsapp-link:active {
          transform: scale(1.05) translateY(0px);
        }

        .whatsapp-link img {
          filter: brightness(0) invert(1);
        }

        /* Official WhatsApp pulse animation */
        @keyframes whatsapp-pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
          }
          70% {
            box-shadow: 0 0 0 20px rgba(37, 211, 102, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }

        .whatsapp-link {
          animation: whatsapp-pulse 2.5s infinite;
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .floating-whatsapp {
            bottom: 20px;
            right: 20px;
          }
          
          .whatsapp-link {
            width: 56px;
            height: 56px;
          }
          
          .whatsapp-link img {
            width: 28px;
            height: 28px;
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingWhatsApp;
