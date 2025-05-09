'use client';
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { SlMagnifier } from "react-icons/sl";

export default function Purchase() {
  type PaymentStatus = "Completed" | "Pending" | "Cancelled";

  type PurchaseRecord = {
    Product: string;
    Supplier: string;
    Quantity: number;
    TotalCost: number;
    Date: string;
    Status: PaymentStatus;
  };

  const purchaseData: PurchaseRecord[] = [
    {
      Product: "iPhone 13",
      Supplier: "Apple Distributors",
      Quantity: 10,
      TotalCost: 8500,
      Date: "2025-04-10",
      Status: "Completed",
    },
    {
      Product: "Galaxy S21",
      Supplier: "Samsung Suppliers",
      Quantity: 5,
      TotalCost: 1750,
      Date: "2025-04-12",
      Status: "Pending",
    },
    {
      Product: "OnePlus 9",
      Supplier: "OnePlus Wholesale",
      Quantity: 7,
      TotalCost: 2100,
      Date: "2025-04-18",
      Status: "Completed",
    },
    {
      Product: "Pixel 6",
      Supplier: "Google Partners",
      Quantity: 4,
      TotalCost: 1600,
      Date: "2025-04-20",
      Status: "Cancelled",
    },
  ];

  const [input, changeInput] = useState("");
  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    changeInput(e.target.value);
  }

  const filteredData = purchaseData.filter(
    (record) =>
      record.Product.toLowerCase().includes(input.toLowerCase()) ||
      record.Supplier.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <div className="p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
        <span>
          <h6 className="text-xl sm:text-lg font-semibold">Purchases</h6>
          <p className="text-gray-600 text-sm sm:text-base">Manage your inventory purchases and orders</p>
        </span>
        <span className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-blue-600 transition mt-4 sm:mt-0">
          <FaPlus />
          <button className="font-medium">Record Purchase</button>
        </span>
      </div>

      {/* Search Bar */}
      <div className="flex items-center gap-2 border w-full sm:w-80 mt-4 sm:mt-6 border-gray-300 rounded px-2 py-1">
        <SlMagnifier className="text-gray-500" />
        <input
          type="text"
          placeholder="Search product or supplier..."
          className="outline-none w-full"
          value={input}
          onChange={handleSearch}
        />
      </div>

      {/* Purchase Table */}
      <div className="bg-white p-4 mt-8 rounded shadow">
        <h6 className="font-semibold mb-2">Purchase Orders</h6>

        <div className="mt-3 border rounded border-gray-300">
          {/* Table Header */}
          <div className="grid p-4 bg-gray-100 sm:grid-cols-6 grid-cols-3 gap-4 font-semibold text-sm">
            <div>Product</div>
            <div>Supplier</div>
            <div>Quantity</div>
            <div>Total Cost</div>
            <div>Date</div>
            <div>Status</div>
          </div>

          {/* Table Rows */}
          {filteredData.length === 0 ? (
            <div className="p-4 text-center text-gray-500">No purchases found</div>
          ) : (
            <div className="overflow-x-auto">
              {filteredData.map((e, i) => (
                <div key={i}>
                  <div className="grid p-4 hover:bg-gray-50 sm:grid-cols-6 grid-cols-3 gap-4 text-sm">
                    <div>{e.Product}</div>
                    <div>{e.Supplier}</div>
                    <div>{e.Quantity}</div>
                    <div>${e.TotalCost}</div>
                    <div>{e.Date}</div>
                    <div>{e.Status}</div>
                  </div>
                  <hr className="border-gray-200" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
