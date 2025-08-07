"use client"

import { useState, useEffect, useRef } from "react"
import { ExternalLink } from 'lucide-react'

export default function PortfolioSection() {
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

  const portfolioItems = [
    {
      id: 1,
      title: "شركة hcc للتأمين الدولي",
      category: "تصميم المواقع الإلكترونية",
      image: "/hccinsurance.png?height=1200&width=1200&text=VIP+App+Portfolio",
      link:"https://hccinternationalinsurance.com/",
      delay: "0ms",
    },
    {
      id: 2,
      title: "يوتيليتى فيجن",
      category: "تصميم المواقع الإلكترونية",
      image: "/utility-vision.png?height=1200&width=1200&text=E-commerce+Store",
      link:"https://utility-vision.com/",
      delay: "200ms",
    },
    {
      id: 3,
      title: "SY – سارة يونس",
      category: "تصميم المواقع الإلكترونية",
      image: "/sarayounis.png?height=1200&width=1200&text=Consulting+Company",
      link:"https://sarayounis.com/",
      delay: "400ms",
    },
    {
      id: 4,
      title: "بروفت ماكس للاستثمارات",
      category: "تصميم المواقع الإلكترونية",
      image: "/profitmax.png?height=1200&width=1200&text=Mobile+App",
      link:"https://profitmaxinvestment.co.uk/",
      delay: "600ms",
    },
    {
      id: 5,
      title: "مزرعة الحياة",
      category: "تصميم المواقع الإلكترونية",
      image: "/alhayatplantreefarm.png?height=1200&width=1200&text=Educational+Platform",
      delay: "800ms",
    },
    {
      id: 6,
      title: "ڤيوتشر أكسيس",
      category: "تصميم المواقع الإلكترونية",
      image: "/Future-Axis-Img.png?height=1200&width=1200&text=Restaurant+Branding",
      delay: "1000ms",
    },
  ]

  return (
    <section ref={sectionRef} className="portfolio py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">أحدث أعمالنا</h2>
            <p className="text-xl opacity-90 leading-relaxed">
              استعرض بعض المشاريع المميزة التي قمنا بتنفيذها لتعزيز الهوية الرقمية لعملائنا.
            </p>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className={`group relative aspect-square overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-700 hover:scale-105 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: item.delay }}
            >
              {/* Project Image */}
              <img
                src={item.image || "/placeholder.svg"}
                alt={`${item.category} | ${item.title}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-red-400 text-lg mb-4">{item.category}</p>
                  
                  {/* View Project Button */}
                  {item.link && (
                  <a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-full font-bold transform hover:scale-105 transition-all duration-300 flex items-center justify-center mx-auto"
                  >
                    <ExternalLink className="ml-2 h-5 w-5" />
                    عرض المشروع
                  </a>
                  )}
                </div>
              </div>

              {/* Quick Info Badge */}
              <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.category}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-red-400 mb-2">500+</div>
            <div className="text-lg opacity-80">مشروع مكتمل</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-500 mb-2">98%</div>
            <div className="text-lg opacity-80">رضا العملاء</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">24/7</div>
            <div className="text-lg opacity-80">دعم فني</div>
          </div>
        </div>
      </div>
    </section>
  )
}
