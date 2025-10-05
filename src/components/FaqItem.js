// Bu satır, React'in "state" özelliğini kullanabilmemiz için gerekli.
'use client'
import { useState } from 'react'

export default function FaqItem({ question, answer }) {
  // 'isOpen' adında bir durum değişkeni oluşturuyoruz. Başlangıçta false (kapalı).
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        // Butona tıklandığında, 'isOpen' durumunu tersine çeviriyoruz (kapalıysa aç, açıksa kapat).
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left text-lg font-medium text-gray-800"
      >
        <span>{question}</span>
        {/* 'isOpen' durumuna göre ikonu döndürüyoruz. */}
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
          <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      
      {/* Cevap bölümü, sadece 'isOpen' durumu true (açık) ise görünecek. */}
      {isOpen && (
        <div className="mt-4 text-gray-600 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  )
}