export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Sayfa Başlığı (Hero Section) */}
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c7da?q=80&w=2070&auto=format&fit=crop"
          alt="Ekip çalışması"
          className="absolute inset-0 h-full w-full object-cover brightness-50"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-serif">
            Biz Kimiz?
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
            {/* HATA DÜZELTMESİ: Kapadokya'nın -> Kapadokya&apos;nın */}
            Teknoloji tutkusunu Kapadokya&apos;nın ruhuyla birleştiren bir dijital pazarlama ajansıyız.
          </p>
        </div>
      </div>

      {/* Misyon ve Vizyon Bölümü */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-serif">Hikayemiz</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {/* HATA DÜZELTMESİ: Kapadokya'nın -> Kapadokya&apos;nın */}
            Capparocks Dijital, Kapadokya&apos;nın eşsiz turizm potansiyelini dijital dünyanın sonsuz olanaklarıyla buluşturma hayaliyle kuruldu. Bölgedeki işletmelerin global pazarda hak ettikleri yeri alabilmeleri için modern, veri odaklı ve sonuç üreten çözümler sunuyoruz. Bizim için her otel, anlatılması gereken benzersiz bir hikayedir.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <h3 className="text-xl font-semibold leading-7 text-gray-900">Misyonumuz</h3>
            <p className="mt-2 leading-7 text-gray-600">
              {/* HATA DÜZELTMESİ: Kapadokya'daki -> Kapadokya&apos;daki */}
              Kapadokya&apos;daki turizm işletmelerinin dijital pazarlama ve teknoloji gücünü kullanarak doluluk oranlarını artırmak, marka bilinirliklerini güçlendirmek ve komisyon maliyetlerini düşürerek kârlılıklarını en üst seviyeye çıkarmak.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold leading-7 text-gray-900">Vizyonumuz</h3>
            <p className="mt-2 leading-7 text-gray-600">
              {/* HATA DÜZELTMESİ: Kapadokya'yı -> Kapadokya&apos;yı */}
              Bölgedeki her işletme için güvenilir bir dijital iş ortağı olmak ve Kapadokya&apos;yı, teknolojiyi en iyi kullanan turizm destinasyonlarından biri haline getirmek.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold leading-7 text-gray-900">Değerlerimiz</h3>
            <p className="mt-2 leading-7 text-gray-600">
              Şeffaflık, dürüstlük, sürekli öğrenme ve en önemlisi, müşterilerimizin başarısını kendi başarımız olarak görme ilkesiyle çalışıyoruz.
            </p>
          </div>
        </div>
      </div>

      {/* Kurucu Bölümü */}
      <div className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-serif">Kurucu</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Bu ajansın arkasındaki vizyon ve tecrübe.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-xs sm:mt-20">
            <img
              className="h-56 w-56 rounded-full object-cover mx-auto shadow-xl"
              src="https://placehold.co/400x400/000000/FFFFFF?text=Emre+Davarci"
              alt="Emre Davarci"
            />
            <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900 text-center">Emre Davarci</h3>
            <p className="text-sm leading-6 text-gray-600 text-center">Kurucu & Dijital Stratejist</p>
          </div>
        </div>
      </div>
    </div>
  )
}