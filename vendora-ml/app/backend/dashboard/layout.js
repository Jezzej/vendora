"use client";
import React, { useState } from 'react';
import Sidebar from '@/components/backend/Sidebar';
import Navbar from '@/components/backend/Navbar';

export default function Layout({ children }) {
  const [showSidebar,setShowSidebar]=useState(false);
    return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
  
      <div className="lg:ml-60 ml-0 flex-grow bg-slate-100 min-h-screen">
        {/* Header */}
        <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
        
        <main className="p-8 bg-slate-100 dark:bg-slate-900 text-slate-50 mt-16">
          {children}
        </main>
      </div>
    </div>
  );
  
}