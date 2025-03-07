"use client";
import React, { useState } from "react";
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Sales & Orders Data",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

// ✅ Separate datasets for Sales and Orders
const salesData = {
  labels,
  datasets: [
    {
      label: "Total Sales",
      data: labels.map(() => faker.datatype.number({ min: 500, max: 2000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

const ordersData = {
  labels,
  datasets: [
    {
      label: "Total Orders",
      data: labels.map(() => faker.datatype.number({ min: 100, max: 500 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export default function WeeklySales() {
  const tabs = [
    { name: "Sales", type: "sales", chartData: salesData },
    { name: "Orders", type: "orders", chartData: ordersData },
  ];
  const [charttoShow, setCharttoShow] = useState(tabs[0].type);

  return (
    <div className="bg-slate-700 p-8 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Best Selling</h2>
      <div className="p-4">
        {/* Tabs */}
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px">
            {tabs.map((tab, index) => (
              <li key={index} className="me-2">
                <button
                  onClick={() => setCharttoShow(tab.type)}
                  className={
                    charttoShow === tab.type
                      ? "inline-block p-4 border-b-2 border-orange-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                      : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  }
                >
                  {tab.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Display the selected chart */}
        <div className="mt-4">
          {tabs.map(
            (tab) =>
              charttoShow === tab.type && (
                <Line key={tab.type} options={options} data={tab.chartData} />
              )
          )}
        </div>
      </div>
    </div>
  );
}
