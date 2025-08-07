import type { Metadata } from "next"
import HeroSection from "@/components/hero-section"
import OfferSection from "@/components/offer-section"
import BenefitsSection from "@/components/benefits-section"
import VideoHighlightSection from "@/components/video-highlight-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "موقع احترافي بخصم 50% | دَعمة للحلول الرقمية",
  description:
    "احصل على موقع إلكتروني احترافي بخصم 50% مع استضافة ودومين مجانيين من دَعمة للحلول الرقمية. عزز حضورك الرقمي الآن!",
  keywords: "تصميم مواقع, تطوير مواقع, استضافة مواقع, دومين مجاني, حلول رقمية",
  openGraph: {
    title: "موقع احترافي بخصم 50% | دَعمة للحلول الرقمية",
    description:
      "احصل على موقع إلكتروني احترافي بخصم 50% مع استضافة ودومين مجانيين من دَعمة للحلول الرقمية. عزز حضورك الرقمي الآن!",
    type: "website",
    locale: "ar_SA",
  },
  twitter: {
    card: "summary_large_image",
    title: "موقع احترافي بخصم 50% | دَعمة للحلول الرقمية",
    description:
      "احصل على موقع إلكتروني احترافي بخصم 50% مع استضافة ودومين مجانيين من دَعمة للحلول الرقمية. عزز حضورك الرقمي الآن!",
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <HeroSection />
      <OfferSection />
      <BenefitsSection />
      <VideoHighlightSection />
      <CTASection />
      <Footer />
    </div>
  )
}
