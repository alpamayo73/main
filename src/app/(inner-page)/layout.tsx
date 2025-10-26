

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "SAIT CINAR - Snel je CBR Theorie Halen | 94% Slagingskans - SaitCBR.nl",
  description:
    "Sait Cinar helpt je snel slagen voor je CBR theorie! Al 15+ jaar dé expert met bewezen methode, heldere uitleg en 94% slagingskans. Start nu met oefenen!",
};

export default function InnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>

      {children}
      
    </>
  );
}
