// src/app/admin/musteriler/[customerId]/page.js DOSYASININ DOĞRU HALİ

import prisma from '@/lib/prisma';
import Link from 'next/link';
import DownloadReportButton from './DownloadReportButton';

async function getCustomerWithReports(customerId) {
  const customer = await prisma.customer.findUnique({
    where: { id: customerId },
    include: {
      reports: { 
        orderBy: { 
          createdAt: 'desc' 
        } 
      },
    },
  });
  return customer;
}

export default async function CustomerDetailPage({ params }) {
  const resolvedParams = await params; // 🔑 params'ı await et
  let customerId = resolvedParams.customerId;

  // Eğer array ise ilk elemanı al
  if (Array.isArray(customerId)) {
    customerId = customerId[0];
  }

  // Eğer Prisma'daki id Int ise burayı Number(customerId) yap
  const customer = await getCustomerWithReports(customerId);

  if (!customer) {
    return <div>Müşteri bulunamadı.</div>;
  }

  return (
    <div>
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 font-serif">{customer.name}</h1>
          <p className="text-gray-500 mt-1">{customer.contactEmail}</p>
        </div>
        <Link 
          href={`/admin/musteriler/${customer.id}/yeni-rapor`} 
          className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Yeni Rapor Oluştur
        </Link>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold text-gray-800 mb-4 font-serif">Geçmiş Raporlar</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Belge No</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rapor Başlığı</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Platform</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tarih</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">İndir</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {customer.reports.length === 0 ? (
              <tr><td colSpan="5" className="px-6 py-4 text-center text-sm text-gray-500">Bu müşteri için kayıtlı rapor bulunmuyor.</td></tr>
            ) : (
              customer.reports.map((report) => (
                <tr key={report.id}>
                  <td className="px-6 py-4 text-sm font-mono text-gray-500">{report.documentNumber.slice(-8).toUpperCase()}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{report.reportTitle}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{report.platform.toUpperCase()}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{new Date(report.createdAt).toLocaleDateString('tr-TR')}</td>
                  <td className="px-6 py-4 text-sm">
                    <DownloadReportButton reportId={report.id} />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}