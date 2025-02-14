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
  title: "انتجريشن - شركة رائدة في وساطة التأمين",
  description:
    "انتجريشن هي شركة متخصصة في وساطة التأمين، نقدم حلولاً تأمينية شاملة وخدمات استشارية متميزة لتلبية احتياجاتك التأمينية.",
  openGraph: {
    title: "انتجريشن - شركة رائدة في وساطة التأمين",
    description:
      "خدمات وساطة تأمين احترافية مع حلول تأمينية متكاملة وخدمات استشارية متخصصة",
    url: "https://integration-swart.vercel.app",
    siteName: "انتجريشن",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "انتجريشن - شركة رائدة في وساطة التأمين",
    description: "خدمات وساطة تأمين شاملة مع استشارات تأمينية متخصصة",
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
