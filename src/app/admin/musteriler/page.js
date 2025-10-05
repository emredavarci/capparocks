// src/app/admin/musteriler/page.js DOSYASININ DOĞRU VE TAM HALİ

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import Link from 'next/link';

// Bu fonksiyon, veritabanından TÜM müşterileri çeker.
async function getCustomers() {
  try {
    const customers = await prisma.customer.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return customers;
  } catch (error) {
    console.error("VERİTABANI HATASI (getCustomers):", error);
    return []; // Hata durumunda boş liste döndürerek sayfanın çökmesini engelle
  }
}

// Yeni müşteri ekleyen sunucu eylemi
async function addCustomer(formData) {
  'use server';
  const name = formData.get('name')?.toString();
  const contactEmail = formData.get('contactEmail')?.toString();
  if (!name || !contactEmail) return;

  await prisma.customer.create({
    data: { name, contactEmail },
  });
  revalidatePath('/admin/musteriler');
}

export default async function MusterilerPage() {
  const customers = await getCustomers();

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8 font-serif">Müşteri Yönetimi</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold text-gray-800 mb-4 font-serif">Yeni Müşteri Ekle</h2>
          <form action={addCustomer} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-600">Müşteri Adı / Firma Adı</label>
              <input type="text" name="name" id="name" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
            </div>
            <div>
              <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-600">İletişim E-postası</label>
              <input type="email" name="contactEmail" id="contactEmail" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">Kaydet</button>
          </form>
        </div>

        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold text-gray-800 mb-4 font-serif">Kayıtlı Müşteriler</h2>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Müşteri Adı</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">E-posta</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Kayıt Tarihi</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {customers && customers.length > 0 ? (
                customers.map((customer) => (
                  <tr key={customer.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      <Link href={`/admin/musteriler/${customer.id}`} className="text-blue-600 hover:underline">
                        {customer.name}
                      </Link>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.contactEmail}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(customer.createdAt).toLocaleDateString('tr-TR')}</td>
                  </tr>
                ))
              ) : (
                <tr><td colSpan="3" className="px-6 py-4 text-center text-sm text-gray-500">Henüz kayıtlı müşteri yok.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}