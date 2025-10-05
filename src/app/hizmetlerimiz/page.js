// src/app/hizmetlerimiz/page.js

import Link from 'next/link';

// YENİ EKLENEN BÖLÜM: Sayfa İçi SEO (On-Page SEO)
// Bu bölüm, Google'a bu sayfanın ne hakkında olduğunu söyler.
export const metadata = {
  title: 'Hizmetlerimiz | Kapadokya Web Tasarım ve Otel Reklamcılığı',
  description: 'Kapadokya otelleri için profesyonel web tasarım, Meta (Facebook, Instagram) ve Google reklam yönetimi hizmetleri. Capparocks ile dijitalde öne çıkın.',
};

// Tek bir hizmet detayı için yardımcı bileşen
const ServiceDetail = ({ title, description, features, imageUrl, imageAlt, reverse = false }) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className={`text-center ${reverse ? 'md:order-2' : ''}`}>
          <img className="rounded-2xl shadow-2xl inline-block" src={imageUrl} alt={imageAlt} />
        </div>
        <div className={`${reverse ? 'md:order-1' : ''}`}>
          <h3 className="text-3xl font-extrabold text-gray-900 font-serif">{title}</h3>
          <p className="mt-4 text-lg text-gray-500">
            {description}
          </p>
          <ul className="mt-6 space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <p className="ml-3 text-base text-gray-500">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Sayfa Başlığı */}
      <div className="bg-gray-50 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* GÜNCELLENEN BAŞLIK: Anahtar kelimeler içeriyor */}
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl font-serif">
            Kapadokya Otelleri için Dijital Çözümlerimiz
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            İşletmenizin dijital potansiyelini ortaya çıkaracak, size özel hizmetler sunuyoruz.
          </p>
        </div>
      </div>

      {/* Hizmetler Listesi */}
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="space-y-20">

          <ServiceDetail
            title="Modern Web Tasarımı"
            description="Sadece bir web sitesi değil, 7/24 çalışan dijital satış temsilcinizi yaratıyoruz. Misafirlerinizi etkileyen, mobil cihazlarda kusursuz çalışan ve en önemlisi, size komisyon ödemeden direkt rezervasyon getiren modern web siteleri tasarlıyoruz."
            features={[
              "Mobil Uyumlu ve Işık Hızında Tasarım",
              "İnternet Sitenizden Direkt Rezervasyon*",
              "Arama Motoru Optimizasyonu (SEO) Uyumlu Altyapı",
              "Kolay Yönetim Paneli"
            ]}
            imageUrl="https://placehold.co/600x400/3b82f6/ffffff?text=Web+Tasar%C4%B1m"
            imageAlt="Kapadokya için modern web sitesi tasarımı"
          />

          <ServiceDetail
            title="Meta (Facebook & Instagram) Reklamcılığı"
            description="Potansiyel misafirleriniz her gün Instagram ve Facebook'ta geziniyor. Biz, doğru hedefleme teknikleriyle (ilgi alanları, demografi, geçmiş seyahat davranışları) reklamlarınızı tam olarak doğru kişilere gösteriyoruz. Balayı çiftlerinden macera arayanlara kadar her kitleye özel, dikkat çekici kampanyalar oluşturuyoruz."
            features={[
              "Hedef Kitle Analizi ve Stratejisi",
              "Yaratıcı Reklam Tasarımları ve Metinleri",
              "Dönüşüm Odaklı Yeniden Pazarlama (Remarketing)",
              "Detaylı Bütçe ve Performans Raporlaması"
            ]}
            imageUrl="https://placehold.co/600x400/8b5cf6/ffffff?text=Meta+Reklamlar%C4%B1"
            imageAlt="Kapadokya otelleri için Meta reklamları"
            reverse={true}
          />

          <ServiceDetail
            title="Google Reklamları Yönetimi"
            description="Bir misafir Google'a 'Kapadokya'da otel' yazdığında, tam o karar anında karşısına sizin çıkmanızı sağlıyoruz. Rakiplerinize gitmek üzere olan müşterileri, etkili arama ağı reklamlarıyla sitenize çekiyor ve direkt rezervasyon yapma olasılıklarını en üst seviyeye çıkarıyoruz."
            features={[
              "Anahtar Kelime Araştırması ve Optimizasyonu",
              "Bütçe Yönetimi ve Maksimum Geri Dönüş (ROAS)",
              "Negatif Anahtar Kelime Stratejileri",
              "Şeffaf ve Anlaşılır Performans Raporları"
            ]}
            imageUrl="https://placehold.co/600x400/10b981/ffffff?text=Google+Reklamlar%C4%B1"
            imageAlt="Kapadokya otel işletmeleri için Google reklamları"
          />
        </div>
      </div>
    </div>
  )
}