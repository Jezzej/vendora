import React from 'react'
import {ShoppingCart} from "lucide-react"

export default function SmallCard({ data }) {
    const {
        title, number, iconColor, icon : Icon} = data;
  return (
    <div className='rounded-lg shadow-md bg-slate-700 p-4'>
        <div className='flex space-x-4'>
            <div className={`w-12 h-12 ${iconColor}
             rounded-full items-center flex justify-center `}>
            <ShoppingCart className="" />
            </div>
            
            <div className=''>
                <p>{title}</p>
                <h3 className='text-2xl font-bold'>{number}</h3>
            </div>
        </div>
    </div>
  )
}
