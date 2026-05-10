import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ukko Energy | Impulsando el Futuro",
  description: "Liderando la transición hacia soluciones de energía sostenible con innovación y tecnología.",
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
      </head>
      <body className="min-h-full flex flex-col font-['Satoshi',sans-serif]">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
