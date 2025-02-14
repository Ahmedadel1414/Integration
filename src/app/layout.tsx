import type { Metadata } from "next";
import { Cairo, Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Integration - Your Trusted Financial Partner",
  description: "Integration offers expert brokerage services, real-time market insights, and investment strategies to help you grow your wealth.",
  openGraph: {
    title: "Integration - Your Trusted Financial Partner",
    description: "Expert brokerage services with real-time market insights and investment strategies.",
    url: "https://integration-swart.vercel.app",
    siteName: "Integration",
    images: [
      {
        url: "/images/og-image.jpg", // Replace with your image path
        width: 1200,
        height: 630,
        alt: "Integration Brokerage Office",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Integration - Your Trusted Financial Partner",
    description: "Leading brokerage services with expert financial guidance.",
    images: ["/images/twitter-card.jpg"], // Replace with your image path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${cairo.className}`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
