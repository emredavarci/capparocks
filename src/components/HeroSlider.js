// src/app/components/HeroSlider.js DOSYASININ EN GÜNCEL HALİ

'use client'

import React, { useEffect, useRef } from 'react';

export default function HeroSlider() {
  const swiperRef = useRef(null);
  const swiperInstanceRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && window.Swiper) {
      swiperInstanceRef.current = new window.Swiper(swiperRef.current, {
        effect: 'fade',
        fadeEffect: { crossFade: true },
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
      });
    }
    return () => {
      if (swiperInstanceRef.current) {
        swiperInstanceRef.current.destroy(true, true);
        swiperInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <section className="h-screen w-full bg-white flex items-center justify-center -mt-20">
      <div ref={swiperRef} className="swiper w-full h-full">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="flex items-center justify-center h-full max-w-7xl mx-auto px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="text-left">
                  <h1 className="text-5xl md:text-7xl font-extrabold text-gray-800 tracking-tighter">
                    Günümüzün Gücü: <span className="text-blue-600">SOSYAL MEDYA</span>
                  </h1>
                  <p className="mt-6 max-w-2xl text-lg text-gray-600 leading-relaxed">
                    Hala potansiyel müşterilerinizi hedefli reklamlarla gerçek müşterilerinize dönüştürmediniz mi?
                  </p>
                  <a href="/iletisim" className="mt-10 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
                    Bizimle İletişime Geçin
                  </a>
                </div>
                <div className="hidden md:block">
                  <img src="/reklamsliderA.png" alt="Sosyal Medya Pazarlaması" />
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="flex items-center justify-center h-full max-w-7xl mx-auto px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="text-left">
                  <h1 className="text-5xl md:text-7xl font-extrabold text-gray-800 tracking-tighter">
                    İlk Karşılamayı <span className="text-blue-600">UZAKTAN</span> Yapın
                  </h1>
                  <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                    Etkleyici bir web sitesiyle ilk izlenimi kazanın, yüksek komisyonlar ödemeden müşteriyle direkt siz iletişime geçin.
                  </p>
                </div>
                <div className="hidden md:block">
                  <img src="/tasarim-slider.png" alt="Modern Web Sitesi Tasarımı" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}