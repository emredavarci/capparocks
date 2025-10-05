'use client'

import { useState } from 'react';
import dynamic from 'next/dynamic'
import FaqItem from './FaqItem'
import WhyUs from './WhyUs'
import ProcessSteps from './ProcessSteps'
import Brands from './Brands'
import BlogPreview from './BlogPreview'

const HeroSlider = dynamic(() => import('./HeroSlider'), {
  ssr: false 
})

// Tab içeriği için datayı burada tanımlıyoruz
const services = [
  {
    name: 'Modern Web Tasarımı',
    title: 'İşletmenizin Dijital Vitrini',
    description: 'Sadece bir web sitesi değil, 7/24 çalışan dijital satış temsilcinizi yaratıyoruz. Misafirlerinizi etkileyen, mobil cihazlarda kusursuz çalışan ve en önemlisi, size komisyon ödemeden direkt rezervasyon getiren modern web siteleri tasarlıyoruz.',
    features: ["Mobil Uyumlu ve Işık Hızında Tasarım", "İnternet Sitenizden Direkt Rezervasyon*", "Arama Motoru Optimizasyonu (SEO) Uyumlu Altyapı"],
    imageUrl: 'tasarim-slider.png'
  },
  {
    name: 'Meta Reklamcılığı',
    title: 'Doğru Müşteriye, Doğru Zamanda Ulaşın',
    description: "Potansiyel misafirleriniz her gün Instagram ve Facebook'ta geziniyor. Biz, doğru hedefleme teknikleriyle (ilgi alanları, demografi, geçmiş seyahat davranışları) reklamlarınızı tam olarak doğru kişilere gösteriyoruz.",
    features: ["Hedef Kitle Analizi ve Stratejisi", "Yaratıcı Reklam Tasarımları ve Metinleri", "Dönüşüm Odaklı Yeniden Pazarlama (Remarketing)"],
    imageUrl: '/metareklam.png'
  },
  {
    name: 'Google Reklamları',
    title: 'Arama Yapan Müşteriyi Anında Kazanın',
    description: "Bir misafir Google'a 'Kapadokya'da otel' yazdığında, tam o karar anında karşısına sizin çıkmanızı sağlıyoruz. Rakiplerinize gitmek üzere olan müşterileri, etkili arama ağı reklamlarıyla sitenize çekiyoruz.",
    features: ["Anahtar Kelime Araştırması ve Optimizasyonu", "Bütçe Yönetimi ve Maksimum Geri Dönüş (ROAS)", "Detaylı Performans Raporlaması"],
    imageUrl: '/googlereklam.png'
  }
]

export default function HomePageClient({ posts }) {
  const [activeTab, setActiveTab] = useState(0);
  const activeService = services[activeTab];

  return (
    <main>
      <HeroSlider />
      
      <section className="w-full max-w-5xl mx-auto p-8 py-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 font-serif">Kontrolü Tekrar Elinize Alın</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* HATA DÜZELTMESİ: Tırnak işaretleri &quot; ve &apos; ile değiştirildi */}
            <div className="bg-white border border-gray-200 p-8 rounded-2xl text-left shadow-lg"><h3 className="text-2xl font-semibold mb-4 text-gray-900 font-serif">Sorun: Görünürlük</h3><p className="text-gray-600 mb-4">&quot;Misafirler Kapadokya&apos;da otel aradığında rakiplerinizi mi buluyor? Dijital dünyada kaybolmuş gibi mi hissediyorsunuz?&quot;</p><h3 className="text-2xl font-semibold mb-4 text-blue-600 font-serif">Çözümümüz</h3><p className="text-gray-700">Arama motorlarında ve sosyal medyada sizi öne çıkaran bir dijital kimlik inşa ediyoruz. Artık misafirler rakiplerinizi değil, sizi bulacak.</p></div>
            {/* HATA DÜZELTMESİ: Tırnak işaretleri &quot; ve &apos; ile değiştirildi */}
            <div className="bg-white border border-gray-200 p-8 rounded-2xl text-left shadow-lg"><h3 className="text-2xl font-semibold mb-4 text-gray-900 font-serif">Sorun: Yüksek Komisyonlar</h3><p className="text-gray-600 mb-4">&quot;Rezervasyonlarınızın büyük bir kısmı aracı kurumlardan mı geliyor? Yüksek komisyonlar kârınızı mı eritiyor?&quot;</p><h3 className="text-2xl font-semibold mb-4 text-blue-600 font-serif">Çözümümüz</h3><p className="text-gray-700">Komisyon giderlerinizi en aza indirmek için tasarlanmış, size direkt rezervasyon getiren bir sistem kuruyoruz. Kârınız size kalsın.</p></div>
          </div>
      </section>

      <section className="w-full bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Hizmetlerimiz</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl font-serif">
              Dijital Varlığınızı Nasıl Güçlendiriyoruz?
            </p>
          </div>
          <div className="flex justify-center mb-10">
            <div className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
              {services.map((service, index) => (
                <button
                  key={service.name}
                  onClick={() => setActiveTab(index)}
                  className={`w-full rounded-lg py-2.5 px-4 text-sm font-medium leading-5 transition-all duration-300 ${
                    activeTab === index
                      ? 'bg-white text-blue-700 shadow'
                      : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                  }`}
                >
                  {service.name}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <img className="rounded-2xl shadow-2xl inline-block" src={activeService.imageUrl} alt={activeService.name} />
            </div>
            <div>
              <h3 className="text-3xl font-extrabold text-gray-900 font-serif">{activeService.title}</h3>
              <p className="mt-4 text-lg text-gray-500">{activeService.description}</p>
              <ul className="mt-6 space-y-3">
                {activeService.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <p className="ml-3 text-base text-gray-500" dangerouslySetInnerHTML={{ __html: feature }}></p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-center pt-8 mt-4"><p className="text-sm text-gray-500 italic">* Kullanmakta olduğunuz bir kanal yöneticisi (channel manager) varsa, rezervasyon motoru sitenize entegre edilir. Yoksa, rezervasyon taleplerini almanız için profesyonel bir form sistemi kurulur.</p></div>
        </div>
      </section>

      <WhyUs />
      <ProcessSteps /> 
      <Brands />
      
      <section className="w-full max-w-3xl mx-auto p-8 py-20 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-serif">Biz Kimiz?</h2>
          {/* HATA DÜZELTMESİ: Kapadokya'nın -> Kapadokya&apos;nın */}
          <p className="text-lg text-gray-600 leading-relaxed">Biz, Kapadokya&apos;nın ruhunu anlayan ve teknolojinin gücüne inanan bir ekibiz. Amacımız, bölgedeki otellerin ve işletmelerin dijital potansiyelini en üst seviyeye çıkararak, onların başarı hikayelerini birlikte yazmaktır. Sizin başarınız, bizim tutkumuzdur.</p>
      </section>
      
      <section className="w-full bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto p-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 font-serif">Sıkça Sorulan Sorular</h2>
          <div className="space-y-4">
            <FaqItem question="Reklam bütçemi nasıl belirleyeceğiz?" answer="Reklam bütçeniz tamamen sizin hedeflerinize ve beklentilerinize bağlıdır. İşe, ulaşmak istediğiniz misafir sayısını ve doluluk oranını konuşarak başlıyoruz. Ardından, size özel, en iyi geri dönüşü sağlayacak bir başlangıç bütçesi öneriyoruz ve performansı anlık olarak takip ederek sürekli optimize ediyoruz." />
            <FaqItem question="İlk sonuçları ne zaman görmeye başlarım?" answer="Marka bilinirliği ve sitenize gelen ziyaretçi artışı gibi etkileri ilk günden itibaren görmeye başlarsınız. Direkt rezervasyonlar ve somut geri dönüşler ise reklam kampanyalarının optimize edilmesiyle genellikle birkaç hafta içinde gözle görülür bir artış gösterir." />
            <FaqItem question="Performansı nasıl takip edeceğiz?" answer="Şeffaflık en önemli ilkemiz. Size aylık olarak, harcanan bütçeyi, ulaşılan kişi sayısını, siteye gelen ziyaretçileri ve en önemlisi gelen rezervasyon taleplerini net bir şekilde gösteren, kolay anlaşılır raporlar sunuyoruz." />
          </div>
        </div>
      </section>
      
      <BlogPreview posts={posts} />
    </main>
  );
}