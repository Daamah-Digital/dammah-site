import type React from "react"
import type { Metadata } from "next"
import { Cairo } from "next/font/google"
import "./globals.css"

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "600", "700", "900"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "موقع احترافي بخصم 50% | دَعمة للحلول الرقمية",
  description:
    "احصل على موقع إلكتروني احترافي بخصم 50% مع استضافة ودومين مجانيين من دَعمة للحلول الرقمية. عزز حضورك الرقمي الآن!",
  keywords: "تصميم مواقع, تطوير مواقع, استضافة مواقع, دومين مجاني, حلول رقمية, دعمة",
  authors: [{ name: "Daamah Digital Solutions" }],
  creator: "Daamah Digital Solutions",
  publisher: "Daamah Digital Solutions",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "https://daamah.com",
    siteName: "دَعمة للحلول الرقمية",
    title: "موقع احترافي بخصم 50% | دَعمة للحلول الرقمية",
    description:
      "احصل على موقع إلكتروني احترافي بخصم 50% مع استضافة ودومين مجانيين من دَعمة للحلول الرقمية. عزز حضورك الرقمي الآن!",
  },
  twitter: {
    card: "summary_large_image",
    title: "موقع احترافي بخصم 50% | دَعمة للحلول الرقمية",
    description:
      "احصل على موقع إلكتروني احترافي بخصم 50% مع استضافة ودومين مجانيين من دَعمة للحلول الرقمية. عزز حضورك الرقمي الآن!",
  },
  alternates: {
    canonical: "https://daamah.com",
    languages: {
      "ar-SA": "https://daamah.com",
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className={cairo.className}>{children}</body>
    </html>
  )
}
