"use client"

import { Facebook, MessageCircle, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              دَعمة للحلول الرقمية
            </h3>
            <p className="text-gray-400 mt-2">نقدم حلولاً مبتكرة لتعزيز وجودك الرقمي</p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://www.facebook.com/daamah.digital.solutions"
              className="text-gray-400 hover:text-red-400 transform hover:scale-110 transition-all duration-300"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href="https://wa.me/201098098418"
              className="text-gray-400 hover:text-red-400 transform hover:scale-110 transition-all duration-300"
            >
              <MessageCircle className="h-6 w-6" />
            </a>
            <a
              href="https://www.instagram.com/daamah.digital.solution"
              className="text-gray-400 hover:text-red-400 transform hover:scale-110 transition-all duration-300"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/company/daamah/"
              className="text-gray-400 hover:text-red-400 transform hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>

          {/* Contact Info */}
          <div className="mb-8 text-gray-400">
            <p className="mb-2"> info@daamah.com</p>
            <p className="mb-2" dir="ltr"> +2 010 98 09 84 18</p>
            <p>📍 الرياض، المملكة العربية السعودية</p>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400">
              © 2025 دَعمة للحلول الرقمية – نقدم حلولاً مبتكرة لتعزيز وجودك الرقمي. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
