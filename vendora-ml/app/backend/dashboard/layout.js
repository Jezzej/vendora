import React from 'react';
import Sidebar from '@/components/backend/Sidebar';  // ✅ Sidebar
import Navbar from '@/components/backend/Navbar';   // ✅ Renamed import

export default function Layout({ children }) {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="w-full">
        <Navbar />  {/* ✅ Now uses the correct component name */}
        <main className='ml-60 p-8 bg-slate-950 text-slate-50 min-h-screen mt-15'>{children}</main>
      </div>
    </div>
  );
}
