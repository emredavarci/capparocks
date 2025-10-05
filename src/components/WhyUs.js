// İkonlar için küçük bir yardımcı bileşen
const Feature = ({ icon, title, children }) => (
  <div>
    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
      {icon}
    </div>
    <div className="mt-5">
      <h3 className="text-lg font-bold text-gray-900 font-serif">{title}</h3>
      <p className="mt-2 text-base text-gray-500">{children}</p>
    </div>
  </div>
);

export default function WhyUs() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Neden Biz?</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl font-serif">
            Sizi Dijitalde Zirveye Taşıyacak Farkımız
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Sadece hizmet vermiyor, işletmenizin bir parçası gibi çalışarak gerçek sonuçlar üretiyoruz.
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <Feature
              title="Yerel Uzmanlık"
              icon={
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              }
            >
              Kapadokya bölgesini, otellerini ve misafir profilini herkesten iyi tanıyoruz. Stratejilerimizi bu yerel bilgiyle şekillendiriyoruz.
            </Feature>

            <Feature
              title="Veri Odaklı Sonuçlar"
              icon={
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              }
            >
              Tahminlerle değil, rakamlarla çalışırız. Harcadığınız her kuruşun size ne kadar geri dönüş sağladığını şeffaf raporlarla sunarız.
            </Feature>

            <Feature
              title="Şeffaf İş Ortaklığı"
              icon={
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V7a2 2 0 012-2h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V8z" />
                </svg>
              }
            >
              Projenizin her adımında yanınızdayız. Düzenli iletişim ve anlaşılır raporlama ile her zaman kontrolün sizde olmasını sağlarız.
            </Feature>
          </div>
        </div>
      </div>
    </section>
  );
}
