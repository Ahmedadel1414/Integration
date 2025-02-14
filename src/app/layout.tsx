import type { Metadata } from "next";
import { Cairo, Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Script from "next/script";

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
  metadataBase: new URL("https://integration-swart.vercel.app"),
  title: "انتجريشن - شركة رائدة في وساطة التأمين",
  description:
    "انتجريشن هي شركة متخصصة في وساطة التأمين، نقدم حلولًا تأمينية شاملة وخدمات استشارية متميزة لتلبية احتياجاتك التأمينية.",
  keywords: [
    "وساطة التأمين",
    "شركة تأمين",
    "تأمين السيارات",
    "تأمين الشركات",
    "خدمات التأمين",
    "استشارات التأمين",
  ],
  robots: "index, follow",
  authors: [
    {
      name: "شركة انتجريشن",
      url: "https://integration-swart.vercel.app",
    },
  ],
  openGraph: {
    title: "انتجريشن - شركة رائدة في وساطة التأمين",
    description:
      "خدمات وساطة تأمين احترافية مع حلول تأمينية متكاملة وخدمات استشارية متخصصة.",
    url: "https://integration-swart.vercel.app",
    siteName: "انتجريشن",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png", // Ensure the path is correct
        width: 1200,
        height: 630,
        alt: "انتجريشن - شركة وساطة التأمين",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "انتجريشن - شركة رائدة في وساطة التأمين",
    description: "خدمات وساطة تأمين شاملة مع استشارات تأمينية متخصصة.",
    images: ["/twitter-image.png"], // Ensure the image is correctly hosted
  },
  alternates: {
    canonical: "https://integration-swart.vercel.app",
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
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-6V7ZB4MTY9"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "انتجريشن",
              url: "https://integration-swart.vercel.app",
              logo: "https://integration-swart.vercel.app/logos/integration.jpg",
              sameAs: [
                "https://www.facebook.com/integration",
                "https://www.twitter.com/integration",
              ],
            }),
          }}
        />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
