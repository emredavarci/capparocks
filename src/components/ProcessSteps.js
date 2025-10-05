// src/app/components/ProcessSteps.js

'use client'

import { motion } from 'framer-motion';

// Tek bir adım kartı için bileşen
const Step = ({ number, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.5 }}
      className="flex"
    >
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white font-bold text-xl">
          {number}
        </div>
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        <p className="mt-2 text-base text-gray-500">{description}</p>
      </div>
    </motion.div>
  );
};

export default function ProcessSteps() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Sürecimiz</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl font-serif">
            Başarıya Giden Yol Haritamız
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Projenizi fikirden gerçeğe dönüştürürken izlediğimiz şeffaf adımlar.
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <Step number="1" title="Keşif & Strateji">
              Hedeflerinizi dinliyor, markanızı anlıyor ve size özel, veriye dayalı bir dijital pazarlama stratejisi oluşturuyoruz.
            </Step>
            <Step number="2" title="Tasarım & Geliştirme">
              Modern, kullanıcı odaklı ve mobil uyumlu web siteleri tasarlıyor, reklam kampanyalarınız için etkileyici görseller hazırlıyoruz.
            </Step>
            <Step number="3" title="Yayına Alma & Optimizasyon">
              Projenizi hayata geçiriyor ve ilk sonuçları anlık olarak takip ederek kampanyalarınızı maksimum verimlilik için optimize ediyoruz.
            </Step>
            <Step number="4" title="Raporlama & Destek">
              Anlaşılır ve şeffaf raporlarla sizi her adımda bilgilendiriyor, projeniz tamamlandıktan sonra da sürekli destek sunuyoruz.
            </Step>
          </div>
        </div>
      </div>
    </section>
  );
}