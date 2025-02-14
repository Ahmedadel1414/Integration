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
  title: "انتجريشن - شريكك الموثوق في الوساطة المالية",
  description: "تقدم انتجريشن خدمات الوساطة المتخصصة، وتحليلات السوق المباشرة، واستراتيجيات الاستثمار لمساعدتك في تنمية ثروتك.",
  openGraph: {
    title: "انتجريشن - شريكك الموثوق في الوساطة المالية",
    description: "خدمات وساطة متخصصة مع تحليلات السوق المباشرة واستراتيجيات الاستثمار",
    url: "https://integration-swart.vercel.app",
    siteName: "انتجريشن",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "مكتب انتجريشن للوساطة",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "انتجريشن - شريكك الموثوق في الوساطة المالية",
    description: "خدمات وساطة رائدة مع توجيه مالي متخصص",
    images: ["/images/twitter-card.jpg"],
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
