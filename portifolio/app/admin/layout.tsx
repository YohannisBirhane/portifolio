import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 shadow-md">
        <div className="p-6 font-bold text-xl text-blue-600 border-b dark:border-gray-700">
          Admin Dashboard
        </div>
        <nav className="p-4 space-y-2">
          <Link href="/admin" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">Overview</Link>
          <Link href="/admin/profile" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">Profile</Link>
          <Link href="/admin/projects" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">Projects</Link>
          <Link href="/admin/skills" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">Skills</Link>
          <Link href="/admin/messages" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">Messages</Link>
          <Link href="/admin/experience" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">Experience</Link>
          <Link href="/" className="block p-3 mt-8 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 text-center">Back to Site</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>
    </div>
  );
}
