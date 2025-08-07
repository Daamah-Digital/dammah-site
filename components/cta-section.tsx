"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, Clock } from "lucide-react"

export default function CTASection() {
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

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/201098098418?text=مرحباً، أريد الاستفادة من عرض الخصم 50% على تطوير الموقع الإلكتروني",
      "_blank",
    )
  }

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-r from-red-600 via-red-500 to-red-700 text-white relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-36 -translate-y-36 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-48 translate-y-48 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">تواصل معنا الآن عبر الواتساب</h2>

            <p className="text-xl md:text-2xl mb-8 opacity-90">لا تضيع الفرصة – العرض لفترة محدودة!</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-xl font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 animate-bounce"
              >
                <MessageCircle className="ml-2 h-6 w-6" />
                تواصل عبر الواتساب
              </Button>

              <div className="flex items-center text-lg opacity-90">
                <Clock className="ml-2 h-5 w-5" />
                استجابة فورية خلال دقائق
              </div>
            </div>

            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">ما ستحصل عليه:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-right">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-200 rounded-full ml-3"></div>
                  <span>موقع احترافي متجاوب</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-200 rounded-full ml-3"></div>
                  <span>استضافة مجانية لسنة كاملة</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-200 rounded-full ml-3"></div>
                  <span>دومين مجاني</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-200 rounded-full ml-3"></div>
                  <span>شهادة أمان SSL</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-200 rounded-full ml-3"></div>
                  <span>دعم فني وصيانة مجانية</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-200 rounded-full ml-3"></div>
                  <span>بريد إلكتروني (10 حسابات)	</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
