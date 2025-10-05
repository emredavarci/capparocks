'use client'

import { useState, useEffect } from 'react'
import './globals.css'
import Link from 'next/link'
import { Playfair_Display, Inter } from 'next/font/google'
import MobileMenu from '../components/MobileMenu'
import WhatsAppButton from '../components/WhatsAppButton'


const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export default function RootLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <html lang="tr" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <title>Kapadokya Dijital</title>
        <meta name="description" content="Kapadokya Otelleri için Dijital Çözümler" />
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
        <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
      </head>
      
      <body className="bg-white font-sans">
        
        <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-lg shadow-md">
          <div className="mx-auto grid h-20 max-w-7xl grid-cols-3 items-center px-4 sm:px-6 lg:px-8">
            
            {/* Sol Sütun: Navigasyon Linkleri (Sadece büyük ekranlarda) */}
            <nav className="hidden lg:flex items-center justify-start space-x-8 text-gray-700">
              <Link href="/" className="text-sm font-semibold hover:text-blue-600">Anasayfa</Link>
              <Link href="/hakkimizda" className="text-sm font-semibold hover:text-blue-600">Hakkımızda</Link>
              <Link href="/hizmetlerimiz" className="text-sm font-semibold hover:text-blue-600">Hizmetlerimiz</Link>
              <Link href="/blog" className="text-sm font-semibold hover:text-blue-600">Blog</Link>


            </nav>

            {/* Sol Tarafta Mobil için boşluk bırakıcı */}
             <div className="lg:hidden"></div>

            {/* Orta Sütun: Logo */}
            <div className="flex justify-center">
                 <Link href="/">
                  <img src="/logoR.svg" alt="Kapadokya Dijital" className="h-20 w-auto" />
                </Link>
            </div>

            {/* Sağ Sütun: İletişim Bilgileri (Büyük Ekran) ve Hamburger İkonu (Mobil) */}
            <div className="flex items-center justify-end">
                {/* İletişim Bilgileri (Sadece büyük ekranlarda görünecek) */}
                <div className="hidden lg:flex items-center space-x-6">
                    <a href="tel:+905000000000" className="flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                        +90 500 000 00 00
                    </a>
                    <a href="mailto:iletisim@capparocks.com" className="flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        iletisim@capparocks.com
                    </a>
                </div>
                
                {/* Hamburger Butonu (Sadece mobil ve tabletlerde görünecek) */}
                <button onClick={() => setIsMenuOpen(true)} className="lg:hidden text-gray-700">
                   <svg className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
            </div>
          </div>
        </header>

        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />


        <main>{children}</main>

        <footer className="w-full bg-gray-900 text-gray-400 py-12">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <img src="/logoR.png" className="h-16 w-auto bg-gray-200 rounded-md p-1" alt="Kapadokya Dijital Logo"/>
                <p className="text-sm">
                  Kapadokya bölgesindeki oteller için veri odaklı dijital pazarlama ve web tasarım çözümleri.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Sayfalar</h3>
                <ul className="mt-4 space-y-2">
                  <li><Link href="/hizmetlerimiz" className="hover:text-white">Hizmetlerimiz</Link></li>
                  <li><Link href="/iletisim" className="hover:text-white">İletişim</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">İletişim</h3>
                 <ul className="mt-4 space-y-2">
                  <li><a href="mailto:iletisim@capparocks.com" className="hover:text-white">iletisim@capparocks.com</a></li>
                  <li><a href="tel:+905000000000" className="hover:text-white">+90 500 000 00 00</a></li>
                  <li>Nevşehir, Türkiye</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Hazır Mısınız?</h3>
                <p className="mt-4">Projenizi görüşmek ve size özel bir yol haritası çizmek için bize ulaşın.</p>
                <Link href="/iletisim" className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-lg text-sm transition-colors">
                  İletişime Geçin
                </Link>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex items-center justify-between">
              <p className="text-sm text-gray-500">&copy; 2025 Kapadokya Dijital. Tüm hakları saklıdır.</p>
              <div className="flex space-x-6">
                 {/* Buraya sosyal medya ikonları eklenecek */}
              </div>
            </div>
          </div>
        </footer>
        <WhatsAppButton />
      </body>
    </html>
  );
}

