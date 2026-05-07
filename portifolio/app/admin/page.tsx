import React from 'react';

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Quick Stats Cards */}
        {[{ title: 'Projects', metric: '0' }, { title: 'Messages', metric: '0' }, { title: 'Skills', metric: '0' }, { title: 'Experience', metric: '0' }].map((stat, i) => (
          <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">{stat.title}</h3>
            <p className="text-3xl font-bold text-gray-800 dark:text-white mt-2">{stat.metric}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
        <h2 className="text-xl font-bold mb-4 dark:text-white">Recent Activity (Placeholder)</h2>
        <p className="text-gray-500 dark:text-gray-400">Select an option from the sidebar to manage your portfolio content.</p>
      </div>
    </div>
  );
}
