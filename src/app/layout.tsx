// src/app/layout.tsx
import Script from "next/script";
import type { Metadata } from "next";

import "@/../../node_modules/react-toastify/dist/ReactToastify.min.css";
import "@/../react-modal-video/scss/modal-video.scss";
import "swiper/css/bundle";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "../styles/globals.css";
import "react-quill/dist/quill.snow.css";
import "react-range-slider-input/dist/style.css";


import { ToastContainer } from "react-toastify";
import NextTopLoader from "nextjs-toploader";



export const metadata: Metadata = {
  title:
    "SAIT CINAR - Snel je CBR Theorie Halen | 94% Slagingskans - SaitCBR.nl",
  description:
    "Sait Cinar helpt je snel slagen voor je CBR theorie! Al 15+ jaar dé expert met bewezen methode, heldere uitleg en 94% slagingskans. Start nu met oefenen!",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["EducationalOrganization",],
  name: "SaitCBR.nl",
  url: "https://www.saitcbr.nl",
  telephone: "+3197010285156",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Leonard Springerlaan 153",
    addressLocality: "Haarlem",
    postalCode: "2033ST",
    addressCountry: "NL",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.5",
    reviewCount: "15",
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: ["https://nl.trustpilot.com/review/saitcbr.nl"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Script
          src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
          strategy="afterInteractive"
        />
      </head>
      <body>

          {children}

      </body>
    </html>
  );
}
