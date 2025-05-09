'use client';

import { useState } from "react";
import { CgDanger } from "react-icons/cg";
import { SlMagnifier } from "react-icons/sl";
import { FaPlus } from "react-icons/fa6";

export default function Dashboard() {
  const [input, changeInput] = useState("");

  type DeviceType = "new" | "used" | "refurbished";

  type RecentSales = {
    Name: string;
    Brand: string;
    Type: DeviceType;
    Imei: string | number;
    Price: number;
    Cost: number;
    profit: number;
    stock: number;
  };

  const mobileSales: RecentSales[] = [
    {
      Name: "iPhone 13",
      Brand: "Apple",
      Type: "new",
      Imei: "356789123456789",
      Price: 999,
      Cost: 850,
      profit: 149,
      stock: 10,
    },
    {
      Name: "Galaxy S21",
      Brand: "Samsung",
      Type: "used",
      Imei: "352345987654321",
      Price: 500,
      Cost: 350,
      profit: 150,
      stock: 5,
    },
    {
      Name: "OnePlus 9",
      Brand: "OnePlus",
      Type: "refurbished",
      Imei: 123456789012345,
      Price: 450,
      Cost: 300,
      profit: 150,
      stock: 7,
    },
    {
      Name: "iPhone XR",
      Brand: "Apple",
      Type: "used",
      Imei: "354321098765432",
      Price: 300,
      Cost: 200,
      profit: 100,
      stock: 3,
    },
  ];

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    changeInput(e.target.value);
  }

  const filteredData = mobileSales.filter((e) =>
    e.Name.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex flex-row items-center justify-between">
        <span>
          <h6 className="text-lg font-semibold">Inventory</h6>
          <p className="text-gray-600">Manage your products and stock</p>
        </span>
        <span className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-blue-600 transition">
          <FaPlus />
          <button className="font-medium">Add Product</button>
        </span>
      </div>

      {/* Warning Box */}
      <div className="bg-yellow-100 text-red-600 p-3 w-full mt-6 rounded">
        <span className="flex gap-2 text-xl items-center">
          <CgDanger />
          <h2 className="">Low stock items</h2>
        </span>
        <p>1 product is running low on stock and needs to be restocked.</p>
      </div>

      {/* Search Box */}
      <div className="flex items-center gap-2 border w-full sm:w-80 mt-4 border-gray-300 rounded px-2 py-1">
        <SlMagnifier className="text-gray-500" />
        <input
          type="text"
          placeholder="Search by name..."
          className="outline-none w-full"
          value={input}
          onChange={handleSearch}
        />
      </div>

      {/* Search + Table */}
      <div className="bg-white mt-4 p-2 rounded shadow">
        {/* Table with scroll on small screens */}
        <div className="overflow-x-auto">
          <div className="mt-3 border rounded border-gray-300">
            {/* Header */}
            <div className="grid p-4 bg-gray-100 grid-cols-1 sm:grid-cols-8 gap-4 font-semibold text-sm">
              <div>Name</div>
              <div>Brand</div>
              <div>Type</div>
              <div>IMEI</div>
              <div>Price</div>
              <div>Cost</div>
              <div>Profit</div>
              <div>Stock</div>
            </div>

            {/* Rows */}
            {filteredData.map((e, i) => (
              <div key={i}>
                <div className="grid p-4 hover:bg-gray-50 grid-cols-1 sm:grid-cols-8 gap-4 text-sm">
                  <div>{e.Name}</div>
                  <div>{e.Brand}</div>
                  <div>{e.Type}</div>
                  <div className="break-words max-w-[150px]">{e.Imei}</div>
                  <div>${e.Price}</div>
                  <div>${e.Cost}</div>
                  <div>${e.profit}</div>
                  <div>{e.stock}</div>
                </div>
                <hr className="border-gray-200" />
              </div>
            ))}
            {filteredData.length === 0 && (
              <div className="p-4 text-center text-gray-500">No products found</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
