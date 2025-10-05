// src/app/admin/musteriler/[customerId]/yeni-rapor/page.js DOSYASININ SON VE TAM HALİ

import { getCustomerDetails } from './actions';
import ReportForm from './ReportForm'; // Yeni form bileşenimizi import ediyoruz

// Bu, artık bir "Server Component". Görevi, veriyi alıp "Client Component"e göndermek.
export default async function YeniRaporPage({ params }) {
  const resolvedParams = await params;   // ✅ önce await et
  let customerId = resolvedParams.customerId;

  if (Array.isArray(customerId)) {
    customerId = customerId[0]; // array gelirse düzelt
  }

  // Eğer Prisma'daki id Int ise:
  // customerId = Number(customerId);

  const result = await getCustomerDetails(customerId);

  if (!result.success) {
    return (
      <div>
        <h1 className="text-3xl font-bold text-red-600">Hata</h1>
        <p className="text-gray-600 mt-2">{result.message}</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2 font-serif">
        Yeni Rapor Oluştur: {result.customer.name}
      </h1>
      <p className="text-gray-600 mb-6">
        Lütfen rapor verilerini girerek veritabanına yeni bir rapor kaydedin.
      </p>

      <ReportForm customer={result.customer} />
    </div>
  );
}