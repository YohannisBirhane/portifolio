'use client';
import React, { useState } from 'react';

export default function AdminMessages() {
  const [messages, setMessages] = useState([
    { id: 1, name: 'Alice Doe', email: 'alice@test.com', msg: 'Interested in working with you', is_read: false }
  ]);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Inbox Messages</h1>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden space-y-2 p-4">
      {messages.length > 0 ? messages.map(m => (
        <div key={m.id} className={`p-4 border border-gray-100 dark:border-gray-700 rounded-lg ${!m.is_read ? 'bg-blue-50 dark:bg-blue-900/20' : 'bg-gray-50 dark:bg-gray-800'}`}>
          <div className="flex justify-between">
            <h4 className="font-bold dark:text-white">{m.name} <span className="text-sm font-normal text-gray-500">({m.email})</span></h4>
            <div className="space-x-3">
              {!m.is_read && <button className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded">Mark Read</button>}
              <button className="text-xs text-red-600 bg-red-100 px-2 py-1 rounded">Delete</button>
            </div>
          </div>
          <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">{m.msg}</p>
        </div>
      )) : (
        <p className="text-gray-500 text-center py-8">No new messages.</p>
      )}
      </div>
    </div>
  );
}
