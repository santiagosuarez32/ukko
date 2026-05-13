import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Ukko Energy | Consultoría en Transición Energética y Sostenibilidad",
    template: "%s | Ukko Energy"
  },
  description: "Líderes en soluciones de eficiencia energética, gestión de emisiones y transición hacia un futuro sostenible. Desarrollamos proyectos de energía renovable y descarbonización.",
  keywords: ["energía renovable", "eficiencia energética", "huella de carbono", "sostenibilidad", "transición energética", "consultoría ambiental", "descarbonización", "ISO 14064", "ISO 50001"],
  authors: [{ name: "Ukko Energy" }],
  creator: "Ukko Energy",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://ukkoenergy.com",
    title: "Ukko Energy | Impulsando el Futuro Energético Sostenible",
    description: "Soluciones integrales de energía y sostenibilidad para empresas líderes.",
    siteName: "Ukko Energy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ukko Energy | Liderando la Transición Energética",
    description: "Soluciones inteligentes para un mañana más limpio y eficiente.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  alternates: {
    canonical: "https://ukkoenergy.com",
  }
};

import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className="h-full antialiased"
    >
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,300,400&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Ukko Energy",
              "url": "https://ukkoenergy.com",
              "logo": "https://ukkoenergy.com/logo.webp",
              "sameAs": [
                "https://www.linkedin.com/company/ukko-energy-solutions",
                "https://www.youtube.com/@ukkoenergy"
              ],
              "description": "Líderes en soluciones de eficiencia energética, gestión de emisiones y transición hacia un futuro sostenible."
            })
          }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-full flex flex-col font-['Satoshi',sans-serif]">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
