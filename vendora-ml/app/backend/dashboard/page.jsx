import React from 'react';
import Heading from "@/components/backend/Heading"
import Cards from "@/components/backend/Cards"
import SmallCards from "@/components/backend/SmallCards"
import DashboardCharts from '@/components/backend/DashboardCharts';

export default function page() {
  return (
    <div>
        <Heading title = "Dashboard Overview"/>
        <Cards />
        <SmallCards />
        <DashboardCharts />
    </div>
  );
}