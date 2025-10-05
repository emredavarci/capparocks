// src/app/components/MobileMenu.js DOSYASININ GÜNCELLENMİŞ HALİ

import Link from 'next/link';

export default function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white/90 backdrop-blur-lg lg:hidden">
      <div className="flex flex-col items-center justify-center h-full">
        <button onClick={onClose} className="absolute top-6 right-6 text-gray-700">
          <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <nav className="flex flex-col space-y-8 text-center">
          <Link href="/" onClick={onClose} className="text-2xl font-semibold text-gray-800 hover:text-blue-600">Anasayfa</Link>
          <Link href="/hizmetlerimiz" onClick={onClose} className="text-2xl font-semibold text-gray-800 hover:text-blue-600">Hizmetlerimiz</Link>
          {/* YENİ LİNK AŞAĞIDA */}
          <Link href="/hakkimizda" onClick={onClose} className="text-2xl font-semibold text-gray-800 hover:text-blue-600">Hakkımızda</Link>
          <Link href="/iletisim" onClick={onClose} className="text-2xl font-semibold text-gray-800 hover:text-blue-600">İletişim</Link>
        </nav>
      </div>
    </div>
  );
}