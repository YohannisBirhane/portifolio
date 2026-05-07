'use client';
import React, { useState } from 'react';

export default function AdminProjects() {
  const [projects, setProjects] = useState([
    { id: 1, title: 'E-Commerce Platform', tech: 'Next.js, Node', live: '#' }
  ]);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Manage Projects</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700">+ Add Project</button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-700">
              <th className="p-4 font-semibold text-gray-600 dark:text-gray-300">Title</th>
              <th className="p-4 font-semibold text-gray-600 dark:text-gray-300">Tech Stack</th>
              <th className="p-4 font-semibold text-gray-600 dark:text-gray-300">Live Link</th>
              <th className="p-4 font-semibold text-gray-600 dark:text-gray-300 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.length > 0 ? projects.map(p => (
              <tr key={p.id} className="border-b border-gray-100 dark:border-gray-700 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="p-4 text-gray-800 dark:text-gray-200">{p.title}</td>
                <td className="p-4 text-gray-600 dark:text-gray-400">{p.tech}</td>
                <td className="p-4 text-blue-500"><a href={p.live}>View</a></td>
                <td className="p-4 text-right space-x-3">
                  <button className="text-blue-500 hover:text-blue-700">Edit</button>
                  <button className="text-red-500 hover:text-red-700">Delete</button>
                </td>
              </tr>
            )) : (
              <tr><td colSpan={4} className="p-8 text-center text-gray-500">No projects found.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
