"use client";
import { useState } from "react";
import { SlMagnifier } from "react-icons/sl";
import { FaPlus } from "react-icons/fa6";

export default function Sales() {
  const [input, changeInput] = useState("");

  type PaymentMethod = "Cash" | "Card" | "UPI";

  type SaleRecord = {
    Product: string;
    Customer: string;
    Quantity: number;
    Amount: number;
    Profit: number;
    PaymentMethod: PaymentMethod;
    Date: string;
  };

  const salesData: SaleRecord[] = [
    {
      Product: "iPhone 13",
      Customer: "John Doe",
      Quantity: 1,
      Amount: 999,
      Profit: 149,
      PaymentMethod: "Card",
      Date: "2025-04-10",
    },
    {
      Product: "Galaxy S21",
      Customer: "Alice Smith",
      Quantity: 2,
      Amount: 1000,
      Profit: 300,
      PaymentMethod: "UPI",
      Date: "2025-04-12",
    },
    {
      Product: "OnePlus 9",
      Customer: "Bob Johnson",
      Quantity: 1,
      Amount: 450,
      Profit: 150,
      PaymentMethod: "Cash",
      Date: "2025-04-18",
    },
    {
      Product: "iPhone XR",
      Customer: "Emma Wilson",
      Quantity: 1,
      Amount: 300,
      Profit: 100,
      PaymentMethod: "Card",
      Date: "2025-04-20",
    },
  ];

  function lets(e: React.ChangeEvent<HTMLInputElement>) {
    changeInput(e.target.value);
  }

  const filteredData = salesData.filter((record) =>
    record.Product.toLowerCase().includes(input.toLowerCase()) ||
    record.Customer.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <div className="p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>
          <h6 className="text-xl font-semibold">Sales Management</h6>
          <p className="text-sm text-gray-600">
            Track and manage your sales transactions
          </p>
        </div>
        <div className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-blue-600 transition text-sm">
          <FaPlus />
          <button className="font-medium">Record Sale</button>
        </div>
      </div>

      {/* Overview Graph Placeholder */}
      <div className="bg-white p-3 shadow mt-4 rounded">
        <h4 className="font-semibold text-base">Sales Overview (Last 30 Days)</h4>
        <div className="pl-2 pr-2">
          <div className="border-2 mt-4 border-dotted border-gray-200 w-full h-60 sm:h-72 rounded" />
        </div>
      </div>

      {/* Search */}
      <div className="flex items-center gap-2 border mt-4 border-gray-300 rounded px-3 py-2 w-full sm:w-80">
        <SlMagnifier className="text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          className="outline-none flex-1 text-sm"
          value={input}
          onChange={lets}
        />
      </div>

      {/* Sales Table */}
      <div className="bg-white p-4 mt-4 rounded shadow overflow-x-auto">
        <h6 className="font-semibold mb-2 text-base">Sales Records</h6>
        <div className="min-w-[700px]">
          {/* Header */}
          <div className="grid p-4 rounded bg-gray-100 grid-cols-7 gap-4 font-semibold text-sm">
            <div>Product</div>
            <div>Customer</div>
            <div>Quantity</div>
            <div>Amount</div>
            <div>Profit</div>
            <div>Payment</div>
            <div>Date</div>
          </div>

          {/* Rows */}
          {filteredData.map((e, i) => (
            <div key={i}>
              <div className="grid p-4 hover:bg-gray-100 grid-cols-7 gap-4 text-sm">
                <div>{e.Product}</div>
                <div>{e.Customer}</div>
                <div>{e.Quantity}</div>
                <div>${e.Amount}</div>
                <div>${e.Profit}</div>
                <div>{e.PaymentMethod}</div>
                <div>{e.Date}</div>
              </div>
              <hr className="border-gray-200" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
