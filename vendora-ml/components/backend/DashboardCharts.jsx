import React from 'react'
import WeeklySales from './WeeklySales'
import BestSellingProducts from './BestSellingProducts'

export default function DashboardCharts() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2
    gap-4'>
        <WeeklySales />
        <BestSellingProducts />
    </div>
  )
}
