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





export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
