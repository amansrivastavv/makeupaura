import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

// Header was named export. Footer was named export. SmoothScroll was default export.
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import SmoothScroll from "@/components/smooth-scroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Makeup Aura | Professional Makeup Artist",
  description: "Expert Artistry for Your Special Moments. Book professional makeup artists for weddings, parties, and events.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        <SmoothScroll>
          <Header />
            {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
