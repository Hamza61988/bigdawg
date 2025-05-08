"use client";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { SlMagnifier } from "react-icons/sl";

export default function Customers() {
  type CustomerRecord = {
    Name: string;
    Phone: string;
    CNIC: string;
    Email: string;
    Address: string;
    CustomerSince: string;
  };

  const customerData: CustomerRecord[] = [
  ];

  const [input, changeInput] = useState("");
  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    changeInput(e.target.value);
  }

  const filteredData = customerData.filter(
    (record) =>
      record.Name.toLowerCase().includes(input.toLowerCase()) ||
      record.Phone.toLowerCase().includes(input.toLowerCase()) ||
      record.CNIC.toLowerCase().includes(input.toLowerCase()) ||
      record.Email.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex flex-row items-center justify-between">
        <span>
          <h6 className="text-lg font-semibold">Repair</h6>
          <p className="text-gray-600">Manage repair tickets and service requests</p>
        </span>
        <span className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-blue-600 transition">
          <FaPlus />
          <button className="font-medium">Add customer</button>
        </span>
      </div>

     

      {/* Customer Table */}
      <div className="bg-white p-4 mt-6 rounded shadow">






        <h6 className="font-semibold mb-2">Active Repair Tickets</h6>

 {/* Search */}
 <div className="flex items-center gap-2 border w-80 mt-6 border-gray-300 rounded px-2 py-1">
        <SlMagnifier className="text-gray-500" />
        <input
          type="text"
          placeholder="Search by name, phone, email..."
          className="outline-none w-full"
          value={input}
          onChange={handleSearch}
        />
      </div>




        <div className="border rounded mt-4 border-gray-300">
          {/* Header */}
          <div className="grid p-4 bg-gray-100 grid-cols-6 gap-4 font-semibold text-sm">
            <div>Name</div>
            <div>Phone</div>
            <div>CNIC</div>
            <div>Email</div>
            <div>Address</div>
            <div>Customer Since</div>
          </div>

          {/* Rows */}
          {filteredData.length === 0 ? (
  <div className="p-4 text-center text-gray-500">No Active Repairs found</div>
) : (
  filteredData.map((e, i) => (
    <div key={i}>
      <div className="grid p-4 hover:bg-gray-50 grid-cols-6 gap-4 text-sm">
        <div>{e.Name}</div>
        <div>{e.Phone}</div>
        <div>{e.CNIC}</div>
        <div>{e.Email}</div>
        <div>{e.Address}</div>
        <div>{e.CustomerSince}</div>
      </div>
      <hr className="border-gray-200" />
    </div>
  ))
)}
        </div>
      </div>
    </div>
  );
}
