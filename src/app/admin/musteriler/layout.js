import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route'; // Artık doğru yoldan bulacak
import { redirect } from 'next/navigation';
import AdminSidebar from './AdminSidebar';

export default async function MusterilerLayout({ children }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/admin/login');
  }
  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}