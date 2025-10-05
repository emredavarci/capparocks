// src/app/admin/musteriler/[customerId]/DownloadReportButton.js

'use client'

import { useState } from 'react';
import { downloadProfessionalPdfReport } from './yeni-rapor/actions';

export default function DownloadReportButton({ reportId }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    setIsLoading(true);
    const result = await downloadProfessionalPdfReport(reportId);
    if (result.success) {
      const link = document.createElement('a');
      link.href = result.pdf;
      link.download = result.fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert(result.message || "PDF indirilirken bir hata oluştu.");
    }
    setIsLoading(false);
  };

  return (
    <button onClick={handleDownload} disabled={isLoading} className="bg-green-500 text-white text-xs font-bold py-1 px-3 rounded-md hover:bg-green-600 disabled:bg-gray-400">
      {isLoading ? 'İndiriliyor...' : 'PDF İndir'}
    </button>
  );
}