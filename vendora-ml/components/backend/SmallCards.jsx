import React from 'react';
import SmallCard from './SmallCard';
import { ShoppingCart, CheckCheck, RefreshCcw, Loader2 } from 'lucide-react';

export default function SmallCards() {
    const orderStatus = [
        {
            title: "Total Orders",
            number: 110,
            iconColor: "bg-green-600",
            icon: ShoppingCart,  
        },
        {
            title: "Orders Pending",
            number: 100,
            iconColor: "bg-blue-600",
            icon: Loader2,
        },
        {
            title: "Orders Processing",
            number: 30,
            iconColor: "bg-orange-600",
            icon: RefreshCcw,
        },
        {
            title: "Orders Delivered",
            number: 500,
            iconColor: "bg-cyan-600",
            icon: CheckCheck,
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 py-8">
            {orderStatus.map((data, i) => (
                <SmallCard key={i} data={data} />  
            ))}
        </div>
    );
}
