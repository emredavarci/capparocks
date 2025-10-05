// src/app/admin/musteriler/[customerId]/yeni-rapor/ReportForm.js DOSYASININ İÇERİĞİ

'use client'

import React, { useState } from 'react';
import { saveReportToDatabase } from './actions';

export default function ReportForm({ customer }) {
  const [platform, setPlatform] = useState('meta');
  const [isLoading, setIsLoading] = useState(false);

  // Form gönderildiğinde butonu pasif hale getirmek için
  const handleFormSubmit = (event) => {
    setIsLoading(true);
    // formun action'ı zaten saveReportToDatabase'e bağlı olduğu için
    // burada tekrar çağırmamıza gerek yok, sadece butonu kitliyoruz.
  };

  const fieldsToRender = platform === 'meta' 
    ? { "Rapor Başlığı": "reportTitle", "Harcanan Tutar (TL)": "spent", "Erişim (Kişi)": "reach", "Gösterim": "impressions", "Tıklamalar": "clicks", "Dönüşümler": "conversions" }
    : { "Rapor Başlığı": "reportTitle", "Harcanan Tutar (TL)": "spent", "Gösterim": "impressions", "Tıklamalar": "clicks", "Tıklama Oranı (CTR %)": "ctr", "Dönüşümler": "conversions" };

  return (
    <form action={saveReportToDatabase} onSubmit={handleFormSubmit} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
        {/* Sunucuya hangi müşteri için kayıt yapıldığını bildiren gizli alanlar */}
        <input type="hidden" name="customerId" value={customer.id} />
        <input type="hidden" name="platform" value={platform} />
        
        <div className="mb-8">
            <h2 className="text-lg font-medium text-gray-900 mb-2">1. Rapor Platformunu Seçin</h2>
            <div className="flex space-x-4 rounded-lg bg-gray-100 p-1">
                <button type="button" onClick={() => setPlatform('meta')} className={`w-full rounded-md py-2.5 text-sm font-medium ${platform === 'meta' ? 'bg-white shadow' : 'text-gray-500 hover:bg-gray-50'}`}>Meta</button>
                <button type="button" onClick={() => setPlatform('google')} className={`w-full rounded-md py-2.5 text-sm font-medium ${platform === 'google' ? 'bg-white shadow' : 'text-gray-500 hover:bg-gray-50'}`}>Google</button>
            </div>
        </div>

        <div>
            <h2 className="text-lg font-medium text-gray-900 mb-4">2. Rapor Verilerini Girin</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {Object.entries(fieldsToRender).map(([label, key]) => <InputField key={key} label={label} name={key} type={key === 'reportTitle' ? 'text' : 'number'} />)}
            </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-6">
            <button type="submit" disabled={isLoading} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors disabled:bg-blue-300">
                {isLoading ? 'Kaydediliyor...' : 'Raporu Veritabanına Kaydet'}
            </button>
        </div>
    </form>
  );
}

// Tekrar eden input alanları için yardımcı bir bileşen
const InputField = ({ label, name, type }) => (
    <div>
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
        <input 
            type={type} 
            name={name} 
            id={name} 
            required 
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
    </div>
);