import { Bell, User, AlignJustify, Sun } from 'lucide-react'
import React from 'react'

export default function Navbar() {
  return (
    <div className='flex items-center justify-between 
    bg-slate-900 text-slate-50 h-16 px-8 py-4 fixed top-0 w-full left-63 right-0 '>
        {/* icons */}
        <button><AlignJustify/></button>
        {/* 3 icons*/}
        <div className='flex space-x-4'>
            <button><Sun/></button>
            <button><Bell/></button>
            <button><User/></button>
        </div>
    </div>
  )
}
