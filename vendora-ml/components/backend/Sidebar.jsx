import React from 'react';
import Link from 'next/link';  // ✅ Import Next.js Link

export default function Sidebar() {
  return (
    <div className='bg-slate-800 space-y-6 w-64 h-screen p-6 text-white fixed'>
      <Link href="/" className="block text-lg font-bold">Logo</Link>  {/* ✅ Fixed */}
      <div className='space-y-3 flex flex-col'>
        <Link href="/dashboard" className="block">Dashboard</Link>
        <Link href="/catalogue" className="block">Catalogue</Link>
        <Link href="/customers" className="block">Customers</Link>
        <Link href="/markets" className="block">Markets</Link>
        <Link href="/farmers" className="block">Farmers</Link>
        <Link href="/orders" className="block">Orders</Link>
        <Link href="/staff" className="block">Staff</Link>
        <Link href="/settings" className="block">Settings</Link>
        <Link href="/store" className="block">Online Store</Link>
      </div> 
    </div>
  );
}
