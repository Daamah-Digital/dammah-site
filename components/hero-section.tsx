"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Play, Volume2, VolumeX } from 'lucide-react'

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [showSoundButton, setShowSoundButton] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    setIsVisible(true)
    
    // Hide sound button after 5 seconds if not clicked
    const timer = setTimeout(() => {
      setShowSoundButton(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/201098098418?text=مرحباً، أريد الاستفادة من عرض الخصم 50% على تطوير الموقع الإلكتروني",
      "_blank",
    )
  }

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(videoRef.current.muted)
      setShowSoundButton(false) // Hide button after interaction
    }
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/placeholder.svg?height=1080&width=1920"
        >
          <source src="final daamah promo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
      </div>

      {/* Sound Control Button */}
      {showSoundButton && (
        <div className="absolute top-6 right-6 z-20">
          <Button
            onClick={toggleSound}
            size="sm"
            variant="outline"
            className="bg-black/30 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 rounded-full p-3 animate-pulse"
          >
            {isMuted ? (
              <>
                <VolumeX className="h-5 w-5 ml-2" />
                <span className="hidden sm:inline">تفعيل الصوت</span>
              </>
            ) : (
              <>
                <Volume2 className="h-5 w-5 ml-2" />
                <span className="hidden sm:inline">إيقاف الصوت</span>
              </>
            )}
          </Button>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div
          className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            موقعك الإلكتروني
            <span className="block text-red-500 animate-pulse">بخصم 50%</span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto opacity-90">
            ابدأ رحلتك الرقمية مع دَعمة للحلول الرقمية واحصل على موقع احترافي مع استضافة ودومين مجانيين!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 text-xl font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              ابدأ الآن
            </Button>

            {/* Sound Toggle Button (Alternative Position) */}
            <Button
              onClick={toggleSound}
              size="lg"
              variant="outline"
              className="border-2 border-white text-black hover:bg-white hover:text-red-600 px-6 py-4 text-lg font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              {isMuted ? (
                <>
                  <VolumeX className="ml-2 h-6 w-6" />
                  تفعيل الصوت
                </>
              ) : (
                <>
                  <Volume2 className="ml-2 h-6 w-6" />
                  إيقاف الصوت
                </>
              )}
            </Button>
          </div>

          {/* Sound Hint */}
          {showSoundButton && isMuted && (
            <div className="mt-6 animate-bounce">
              <p className="text-sm opacity-75 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 inline-block">
                🔊 انقر لتفعيل الصوت والاستمتاع بالتجربة الكاملة
              </p>
            </div>
          )}
        </div>

        {/* Floating Animation Elements */}
        <div className="absolute top-20 right-20 w-20 h-20 bg-red-500/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-red-400/20 rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/2 left-10 w-12 h-12 bg-red-600/20 rounded-full animate-float-slow"></div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
