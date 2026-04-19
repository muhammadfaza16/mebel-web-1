import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kayu Modern | The Art of Indonesian Heritage",
  description: "Ultra-luxury, modern Indonesian heritage furniture. Sustainable Teak, Trembesi, and Mahoni craftsmanship for discerning spaces.",
  keywords: ["Luxury Indonesian Furniture", "High-end Teak", "Modern Heritage Woodwork", "Bespoke Furniture Jakarta", "Architectural Woodwork"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full font-inter selection:bg-slate-900 selection:text-white">
        {children}
      </body>
    </html>
  );
}
