import React from 'react'
import LargeCard from './LargeCard'

export default function Cards() {
    const orderStatus = [
        {
            period : "Today Orders",
            sales : 110000,
            color : "bg-green-600",
        },
        {
            period : "Yesterday Orders",
            sales : 130000,
            color : "bg-blue-600",
        },
        {
            period : "This Month",
            sales : 300000,
            color : "bg-orange-600",
        },
        {
            period : "Last Month",
            sales : 5000000,
            color : "bg-cyan-600",
        },
    ]
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2
    md:grid-cols-4 lg:grod-cols-4 gap-4 py-8'>
        {
            orderStatus.map((item, i) => {
                return(
                    <LargeCard className="bg-green-600" data = {item}
                    key={i} />
                )
            })
        }
    </div>
  )
}
