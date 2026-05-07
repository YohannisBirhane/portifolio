import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900 px-4 transition-colors duration-300">
      <div className="max-w-md w-full bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700">
        
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50">Welcome Back</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2">Sign in to access your portfolio dashboard</p>
        </div>
        
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5" htmlFor="email">
              Email Address
            </label>
            <input 
              id="email" 
              type="email" 
              placeholder="admin@example.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-gray-50 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              required 
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5" htmlFor="password">
              Password
            </label>
            <input 
              id="password" 
              type="password" 
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-gray-50 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              required 
            />
          </div>

          <button 
            type="button" // Will change to submit when connecting to backend
            className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold py-3.5 rounded-xl transition-all shadow-lg shadow-blue-500/30 mt-4"
          >
            Sign In
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Don't have an admin account?{" "}
            <Link href="/admin/register" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
              Register here
            </Link>
          </p>
          <div className="mt-4">
            <Link href="/" className="text-sm text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              &larr; Back to Portfolio
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}