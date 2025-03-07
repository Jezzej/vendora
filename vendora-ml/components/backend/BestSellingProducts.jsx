"use client";
import React from 'react'
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'
import {Pie} from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

export default function BestSellingProducts() {
    const data = {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3],
            backgroundColor: ['white', 'lightpink', 'peachpuff'],
            borderColor: ['pink', 'white', 'white'],
            borderWidth: 1,
          },
        ],
    }
  return (
    <div className='bg-slate-700 p-8 rounded-lg'>
        <h2 className='text-xl font-bold mb-4'>Best Selling Products</h2>
        <div className='p-4'>
        <Pie data={data} className='w-16 h-16' />
        </div>
        </div>
  )
}
