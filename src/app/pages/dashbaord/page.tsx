'use client';
import React, { Suspense } from 'react';
import { SlMagnifier } from "react-icons/sl";
import { ReactElement } from "react";
import dynamic from 'next/dynamic';

// 👉 Dynamic imports for charts with skeleton fallback
const SalesChart = dynamic(() => import('../components/SalesChart'), {
  ssr: false,
  loading: () => (
    <div className="h-[300px] flex items-center justify-center bg-gray-100 rounded-lg animate-pulse">
      <span className="text-gray-400">Loading Sales Chart...</span>
    </div>
  ),
});

const InventoryChart = dynamic(() => import('../components/InventoryChart'), {
  ssr: false,
  loading: () => (
    <div className="h-[300px] flex items-center justify-center bg-gray-100 rounded-lg animate-pulse">
      <span className="text-gray-400">Loading Inventory Chart...</span>
    </div>
  ),
});

type ArrayType = {
  topic: string;
  price: number;
  icon: ReactElement;
  percentage: number;
  discription: string;
};

type SellingProduct = {
  Name: string;
  price: string;
  SoldUnit: string;
};

type RecentSales = {
  product: string;
  customertype: string;
  Amount: string;
  Date: string;
};

export default function Dashboard() {
  const data: ArrayType[] = [
    { topic: 'Total Sales', icon: <SlMagnifier />, price: 400000, percentage: 12, discription: 'compared to last month' },
    { topic: 'Total Profit', icon: <SlMagnifier />, price: 60000, percentage: 8, discription: 'compared to last month' },
    { topic: 'Low Stock Items', icon: <SlMagnifier />, price: 3, percentage: 0, discription: 'compared to last month' },
    { topic: 'Customers', icon: <SlMagnifier />, price: 23, percentage: 5, discription: 'compared to last month' },
  ];

  const Sell: SellingProduct[] = [
    { Name: "iPhone 13 Pro", price: "Rs. 2,160,000", SoldUnit: "12 units sold" },
    { Name: "Samsung Galaxy S21", price: "Rs. 960,000", SoldUnit: "8 units sold" },
    { Name: "iPhone 12", price: "Rs. 700,000", SoldUnit: "7 units sold" },
  ];

  const RecentData: RecentSales[] = [
    { product: 'iPhone 12', customertype: 'Walk-in Customer', Amount: 'Rs. 100,000', Date: '2/10/2023' },
    { product: 'Samsung Galaxy S21', customertype: 'Online Customer', Amount: 'Rs. 85,000', Date: '5/11/2023' },
    { product: 'OnePlus 9 Pro', customertype: 'Walk-in Customer', Amount: 'Rs. 90,000', Date: '6/12/2023' }
  ];

  return (
    <div className="p-6">
      <h6 className="text-lg font-semibold">Dashboard</h6>
      <p className="text-gray-600">Overview of your mobile shop business</p>

      <div className="flex flex-row flex-wrap mt-5 gap-7">
        {data.map((e, i) => (
          <div
            key={i}
            className="flex justify-between flex-col px-6 bg-white h-32 w-64 py-4 rounded-lg shadow hover:shadow-lg border border-gray-300"
          >
            <span className="flex items-center justify-between">
              <h5 className="font-semibold">{e.topic}</h5>
              <span className="bg-blue-100 text-blue-500 rounded-full p-2">
                {e.icon}
              </span>
            </span>
            <span className="flex flex-col gap-1">
              <span className="flex flex-row items-center gap-1">
                <h4 className="font-medium">Rs {e.price}</h4>
                {e.percentage !== 0 && (
                  <h1 className="text-green-400 text-sm">{e.percentage}%</h1>
                )}
              </span>
            </span>
            <p className="text-xs text-gray-500">{e.discription}</p>
          </div>
        ))}
      </div>

      {/* CHARTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="bg-white p-6 rounded-lg shadow border border-gray-300 min-h-[370px]">
          <h2 className="text-xl font-bold mb-4">Sales Overview</h2>
          <Suspense fallback={<div>Loading...</div>}>
            <SalesChart />
          </Suspense>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border border-gray-300 min-h-[370px]">
          <h2 className="text-xl font-bold mb-4">Inventory by Brand</h2>
          <Suspense fallback={<div>Loading...</div>}>
            <InventoryChart />
          </Suspense>
        </div>
      </div>

      {/* BOTTOM GRIDS */}
      <div className="flex gap-6 mt-8">
        {/* Left Box – Top Selling Products */}
        <div className="flex-1 bg-white p-6 shadow border border-gray-300 rounded h-80 overflow-y-auto">
          <h2 className="text-xl font-bold mb-4">Top Selling Products</h2>
          {Sell.map((e, i) => (
            <div className="mb-4" key={i}>
              <div className="flex justify-between text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                <span className="truncate max-w-[60%]">{e.Name}</span>
                <span className="truncate">{e.price}</span>
              </div>
              <p className="text-gray-600 text-xs truncate">{e.SoldUnit}</p>
              <hr className="mt-2 border-gray-200" />
            </div>
          ))}
        </div>

        {/* Right Box – Recent Sales */}
        <div className="flex-1 bg-white p-6 shadow border border-gray-300 rounded h-80 overflow-y-auto">
          <h2 className="text-xl font-bold mb-4">Recent Sales</h2>
          <div className="grid grid-cols-4 font-bold bg-gray-300 p-2 rounded text-sm">
            <div className="truncate">Product</div>
            <div className="truncate">Customer</div>
            <div className="truncate">Amount</div>
            <div className="truncate">Date</div>
          </div>
          {RecentData.map((e, index) => (
            <div key={index} className="grid p-2 grid-cols-4 gap-2 hover:bg-gray-100 py-2 text-sm items-center border-b border-gray-200">
              <div className="truncate">{e.product}</div>
              <div className="truncate">{e.customertype}</div>
              <div className="truncate">{e.Amount}</div>
              <div className="truncate">{e.Date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
