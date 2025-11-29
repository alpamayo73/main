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
        {/* Correct Official WhatsApp SVG Icon */}
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M16 0C7.163 0 0 7.163 0 16C0 24.837 7.163 32 16 32C24.837 32 32 24.837 32 16C32 7.163 24.837 0 16 0Z" 
            fill="#25D366"
          />
          <path 
            d="M23.95 7.05C21.73 4.83 18.76 3.5 15.64 3.5C9.05 3.5 3.71 8.84 3.71 15.43C3.71 17.47 4.22 19.46 5.18 21.23L4.5 27.5L10.92 26.85C12.65 27.74 14.61 28.21 16.57 28.21C23.16 28.21 28.5 22.87 28.5 16.28C28.5 13.16 27.17 10.27 23.95 7.05ZM16.57 26.38C14.79 26.38 13.05 25.91 11.53 25.03L11.23 24.85L7.4 25.5L8.07 21.8L7.86 21.48C6.89 19.94 6.36 18.18 6.36 16.36C6.36 10.18 11.39 5.15 17.57 5.15C20.1 5.15 22.48 6.03 24.34 7.69C26.18 9.35 27.22 11.63 27.22 14.16C27.22 20.34 22.19 25.37 16.57 26.38Z" 
            fill="white"
          />
          <path 
            d="M21.97 18.59C21.67 18.34 20.92 18 20.58 17.89C20.25 17.78 20.01 17.83 19.83 18.09C19.65 18.35 19.03 19.1 18.87 19.29C18.71 19.48 18.55 19.5 18.25 19.25C17.95 19 17.05 18.32 16.32 17.49C15.78 16.87 15.41 16.18 15.25 15.88C15.09 15.58 15.23 15.41 15.36 15.28C15.48 15.15 15.63 14.95 15.76 14.78C15.89 14.61 15.95 14.49 16.04 14.3C16.13 14.11 16.09 13.94 16.02 13.8C15.95 13.66 15.41 12.27 15.18 11.67C14.96 11.09 14.72 11.16 14.54 11.15C14.37 11.14 14.18 11.14 13.99 11.14C13.8 11.14 13.52 11.2 13.29 11.46C13.06 11.72 12.36 12.39 12.36 13.83C12.36 15.27 13.33 16.65 13.49 16.87C13.65 17.09 15.47 19.77 18.11 20.93C19.15 21.39 20 21.64 20.68 21.81C21.61 22.04 22.45 21.98 23.09 21.86C23.8 21.73 25.17 21.01 25.47 20.2C25.77 19.39 25.77 18.72 25.69 18.59C25.61 18.46 25.41 18.38 21.97 18.59Z" 
            fill="white"
          />
        </svg>
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

        .whatsapp-link svg {
          width: 34px;
          height: 34px;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
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
          
          .whatsapp-link svg {
            width: 30px;
            height: 30px;
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingWhatsApp;
