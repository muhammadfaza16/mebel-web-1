import type { Metadata } from "next";
import { Syne, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kayu Modern | Artisan Indonesian Furniture",
  description: "Modern Indonesian Heritage Furniture. Sustainable Teak, Trembesi, and Mahoni craftsmanship designed with golden ratio precision.",
  keywords: ["Modern Indonesian Furniture", "Teak Furniture", "Custom Jati Furniture", "Luxury Home Decor Indonesia", "Artisan Woodwork"],
  openGraph: {
    title: "Kayu Modern | Artisan Indonesian Furniture",
    description: "Premium modern furniture crafted from traditional Indonesian woods.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${bricolage.variable} h-full antialiased`}
    >
      <body className="min-h-full font-bricolage selection:bg-terracotta-vibrant selection:text-white">
        {children}
      </body>
    </html>
  );
}
