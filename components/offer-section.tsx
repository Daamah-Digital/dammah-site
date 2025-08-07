"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function OfferSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const offers = [
    {
      title: "تطوير الموقع الإلكتروني",
      originalPrice: "6000",
      discountedPrice: "3000",
      delay: "0ms",
    },
    {
      title: "استضافة الموقع",
      originalPrice: "300",
      discountedPrice: "مجاني",
      delay: "200ms",
    },
    {
      title: "اسم النطاق",
      originalPrice: "100",
      discountedPrice: "مجاني",
      delay: "400ms",
    },
    {
      title: "شهادة الأمان SSL",
      originalPrice: "100",
      discountedPrice: "مجاني",
      delay: "600ms",
    },
    
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-red-600 text-white text-lg px-6 py-2 mb-4 animate-pulse">عرض محدود!</Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">تفاصيل العرض الحصري</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">وفّر أكثر من 50% على جميع خدماتنا الرقمية</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {offers.map((offer, index) => (
            <Card
              key={index}
              className={`transform transition-all duration-700 hover:scale-105 hover:shadow-2xl ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: offer.delay }}
            >
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold text-gray-800 mb-4">{offer.title}</h3>

                <div className="mb-4">
                  <div className="text-2xl text-red-600 line-through mb-2">{offer.originalPrice} ريال</div>
                  <div
                    className={`text-3xl font-bold ${
                      offer.discountedPrice === "مجاني" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {offer.discountedPrice === "مجاني" ? "مجاني" : `${offer.discountedPrice} ريال`}
                  </div>
                </div>

                {offer.discountedPrice === "مجاني" && <Badge className="bg-green-500 text-white">  {"مجانى للسنة الأولى"}</Badge>}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div
            className={`inline-block transform transition-all duration-1000 ${
              isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
            }`}
          >
            <Badge className="bg-gradient-to-r from-red-500 to-red-600 text-white text-2xl px-8 py-4 animate-pulse">
              وفّر أكثر من 50%
            </Badge>
          </div>
        </div>
      </div>
    </section>
  )
}
