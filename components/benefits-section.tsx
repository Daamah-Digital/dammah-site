"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Monitor, Globe, Headphones, Shield } from "lucide-react"

export default function BenefitsSection() {
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

  const benefits = [
    {
      icon: Monitor,
      title: "موقع احترافي متجاوب",
      description: "تصميم عصري يتكيف مع جميع الأجهزة والشاشات",
      delay: "0ms",
    },
    {
      icon: Globe,
      title: "دومين واستضافة مجانية",
      description: "احصل على اسم نطاق واستضافة سريعة مجاناً لمدة سنة كاملة",
      delay: "200ms",
    },
    {
      icon: Headphones,
      title: "دعم فني وصيانة مجانية",
      description: "فريق دعم متخصص متاح 24/7 لمساعدتك في أي وقت",
      delay: "400ms",
    },
    {
      icon: Shield,
      title: "حماية وأمان بيانات العملاء",
      description: "شهادة SSL مجانية وحماية متقدمة لموقعك وبيانات عملائك",
      delay: "600ms",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">لماذا تختار دَعمة؟</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            نقدم لك حلولاً شاملة لتعزيز حضورك الرقمي بأعلى معايير الجودة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className={`group transform transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br hover:from-red-50 hover:to-red-100 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: benefit.delay }}
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-red-600 transition-colors">
                  {benefit.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
