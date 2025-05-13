'use client';
import React, { Suspense } from 'react';
import { SlMagnifier } from 'react-icons/sl';
import { ReactElement } from 'react';
import dynamic from 'next/dynamic';
import { FaArrowDown } from "react-icons/fa6";
import { FaPerson } from "react-icons/fa6";
import { LuDollarSign } from "react-icons/lu";



const SalesChart = dynamic(() => import('../components/SalesChart'), {
  ssr: false,
  loading: () => (
    <div className="h-[250px] flex items-center justify-center bg-gray-100 rounded-lg animate-pulse">
      <span className="text-gray-400">Loading Sales Chart...</span>
    </div>
  ),
});

const InventoryChart = dynamic(() => import('../components/InventoryChart'), {
  ssr: false,
  loading: () => (
    <div className="h-[250px] flex items-center justify-center bg-gray-100 rounded-lg animate-pulse">
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
    { topic: 'Total Profit', icon: <LuDollarSign />, price: 60000, percentage: 8, discription: 'compared to last month' },
    { topic: 'Low Stock Items', icon: <FaArrowDown />, price: 3, percentage: 0, discription: 'compared to last month' },
    { topic: 'Customers', icon: <FaPerson />, price: 23, percentage: 5, discription: 'compared to last month' },
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
    <div className="overflow-x-hidden p-4 sm:p-6">
      <h6 className="text-lg font-semibold">Dashboard</h6>
      <p className="text-gray-600">Overview of your mobile shop business</p>

 
     {/* Metrics Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-5">
  {data.map((e, i) => (
    <div
      key={i}
      className="flex flex-col justify-between px-5 py-4 bg-white h-32 rounded-lg shadow hover:shadow-lg border border-gray-300"
    >
      <div className="flex items-center justify-between">
        <h5 className="font-semibold text-sm">{e.topic}</h5>
        <span className="bg-blue-100 text-blue-500 rounded-full p-2">
          {e.icon}
        </span>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <h4 className="font-medium text-base">Rs {e.price}</h4>
        {e.percentage !== 0 && (
          <h1 className="text-green-400 text-sm">{e.percentage}%</h1>
        )}
      </div>
      <p className="text-xs text-gray-500 mt-1">{e.discription}</p>
    </div>
  ))}
</div>


      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow border border-gray-300 w-full overflow-hidden">
          <h2 className="text-xl font-bold mb-4">Sales Overview</h2>
          <div className="w-full h-[250px] sm:h-[300px]">
            <Suspense fallback={<div>Loading...</div>}>
              <SalesChart />
            </Suspense>
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow border border-gray-300 w-full overflow-hidden">
          <h2 className="text-xl font-bold mb-4">Inventory by Brand</h2>
          <div className="w-full h-[250px] sm:h-[300px]">
            <Suspense fallback={<div>Loading...</div>}>
              <InventoryChart />
            </Suspense>
          </div>
        </div>
      </div>

   
      <div className="flex flex-col lg:flex-row gap-6 mt-8">
  
        <div className="bg-white p-4 sm:p-6 shadow border border-gray-300 rounded h-80 overflow-y-auto flex-1">
          <h2 className="text-xl font-bold mb-4">Top Selling Products</h2>
          {Sell.map((e, i) => (
            <div className="mb-4" key={i}>
              <div className="flex justify-between text-sm">
                <span className="truncate max-w-[60%]">{e.Name}</span>
                <span className="truncate">{e.price}</span>
              </div>
              <p className="text-gray-600 text-xs truncate">{e.SoldUnit}</p>
              <hr className="mt-2 border-gray-200" />
            </div>
          ))}
        </div>

        {/* Recent Sales */}
        <div className="bg-white p-4 sm:p-6 shadow border border-gray-300 rounded h-80 overflow-y-auto flex-1">
          <h2 className="text-xl font-bold mb-4">Recent Sales</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 font-bold bg-gray-300 p-2 rounded text-sm">
            <div>Product</div>
            <div>Customer</div>
            <div className="hidden sm:block">Amount</div>
            <div className="hidden sm:block">Date</div>
          </div>
          {RecentData.map((e, index) => (
            <div
              key={index}
              className="grid grid-cols-2 sm:grid-cols-4 p-2 gap-2 hover:bg-gray-100 text-sm items-center border-b border-gray-200"
            >
              <div className="truncate">{e.product}</div>
              <div className="truncate">{e.customertype}</div>
              <div className="truncate hidden sm:block">{e.Amount}</div>
              <div className="truncate hidden sm:block">{e.Date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
