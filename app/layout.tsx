import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { Toaster } from "sonner"

export const metadata: Metadata = {
  title: "MesobFoods - QR Code Restaurant Ordering System | Self-Order Technology",
  description:
    "Transform your restaurant with MesobFoods self-order QR code system. Reduce wait times by 70%, cut staffing costs by 40%. No app download required. Try free demo today!",
  keywords: [
    "restaurant ordering system",
    "QR code menu",
    "self-order technology",
    "restaurant management software",
    "contactless ordering",
    "digital menu",
    "restaurant automation",
    "table ordering system",
    "food service technology",
    "restaurant POS system",
  ],
  authors: [{ name: "MesobFoods Team" }],
  creator: "MesobFoods",
  publisher: "MesobFoods",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  generator: "v0.app",
  applicationName: "MesobFoods",
  referrer: "origin-when-cross-origin",
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "rgba(255, 152, 0, 1)" },
    { media: "(prefers-color-scheme: dark)", color: "rgba(255, 152, 0, 1)" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "MesobFoods - QR Code Restaurant Ordering System | Self-Order Technology",
    description:
      "Transform your restaurant with MesobFoods self-order QR code system. Reduce wait times by 70%, cut staffing costs by 40%. No app download required.",
    url: "https://mesobfoods.com",
    siteName: "MesobFoods",
    images: [
      {
        url: "/mesobfoods-restaurant-self-order-app-preview.jpg",
        width: 1200,
        height: 630,
        alt: "MesobFoods QR Code Restaurant Self-Order System Interface",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MesobFoods - QR Code Restaurant Ordering System",
    description:
      "Transform your restaurant with self-order QR code technology. Reduce wait times by 70%, cut costs by 40%.",
    images: ["/mesobfoods-restaurant-self-order-app-preview.jpg"],
    creator: "@mesobfoods",
  },
  alternates: {
    canonical: "https://mesobfoods.com",
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "MesobFoods",
      description: "QR code restaurant ordering system that transforms dining experience with self-order technology",
      url: "https://mesobfoods.com",
      applicationCategory: "RestaurantApplication",
      operatingSystem: "Web Browser",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free trial available",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        ratingCount: "150",
      },
      featureList: [
        "QR Code Ordering",
        "Contactless Payments",
        "Real-time Kitchen Integration",
        "Analytics Dashboard",
        "Multi-language Support",
      ],
    }),
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
        <Toaster position="top-right" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "MesobFoods",
              description:
                "QR code restaurant ordering system that transforms dining experience with self-order technology",
              url: "https://mesobfoods.com",
              applicationCategory: "RestaurantApplication",
              operatingSystem: "Web Browser",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                description: "Free trial available",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                ratingCount: "150",
              },
              featureList: [
                "QR Code Ordering",
                "Contactless Payments",
                "Real-time Kitchen Integration",
                "Analytics Dashboard",
                "Multi-language Support",
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}
