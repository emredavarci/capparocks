// src/app/components/Comments.js
'use client'

export default function Comments() {
    // Bu, ileride veritabanına bağlanacak dummy bir formdur.
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Yorumunuz gönderildi (Bu bir test mesajıdır).');
        e.target.reset();
    }
    return (
        <div className="py-12">
            <h3 className="text-xl font-bold text-gray-900 font-serif mb-6">Yorum Bırakın</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <textarea rows={4} placeholder="Yorumunuz..." required className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"></textarea>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="text" placeholder="Adınız" required className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
                    <input type="email" placeholder="E-postanız (görünmeyecek)" required className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
                </div>
                <button type="submit" className="inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">Yorumu Gönder</button>
            </form>
        </div>
    )
}