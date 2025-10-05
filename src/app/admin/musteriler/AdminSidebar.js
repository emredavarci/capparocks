'use client'
import Link from 'next/link';
import { signOut } from 'next-auth/react';

export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-6 text-2xl font-serif font-bold border-b border-gray-700">Capparocks Panel</div>
      <nav className="flex-1 p-4 space-y-2">
        <Link href="/admin/musteriler" className="block py-2 px-4 rounded hover:bg-gray-700">Müşteriler</Link>
      </nav>
      <div className="p-4 border-t border-gray-700">
        <button onClick={() => signOut({ callbackUrl: '/' })} className="w-full text-left py-2 px-4 rounded hover:bg-red-500">Çıkış Yap</button>
      </div>
    </aside>
  );
}