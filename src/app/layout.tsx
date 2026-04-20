import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Artisteak Jepara | Furniture Built to Last Centuries",
  description: "Premium Indonesian furniture combining traditional Javanese craftsmanship with contemporary design sensibility. Handcrafted teak furniture from Jepara.",
  keywords: ["Luxury Furniture", "Sustainably Sourced Teak", "Jepara Craftsmanship", "Architectural Woodwork", "Artisteak"],
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full font-inter bg-brand-bg text-brand-text relative overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
