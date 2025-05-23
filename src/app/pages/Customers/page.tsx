'use client';
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
    {
      Name: "John Doe",
      Phone: "0301-1234567",
      CNIC: "35202-1234567-1",
      Email: "john.doe@example.com",
      Address: "123 Main St, Lahore",
      CustomerSince: "2022-01-15",
    },
    {
      Name: "Ayesha Khan",
      Phone: "0312-9876543",
      CNIC: "35201-7654321-0",
      Email: "ayesha.khan@gmail.com",
      Address: "456 Model Town, Karachi",
      CustomerSince: "2023-03-12",
    },
    {
      Name: "Ali Raza",
      Phone: "0345-2345678",
      CNIC: "35200-1122334-5",
      Email: "ali.raza@hotmail.com",
      Address: "789 G-9, Islamabad",
      CustomerSince: "2024-06-20",
    },
    {
      Name: "Fatima Noor",
      Phone: "0333-4455667",
      CNIC: "35203-9988776-2",
      Email: "fatima.noor@yahoo.com",
      Address: "Street 10, DHA Phase 5, Lahore",
      CustomerSince: "2021-11-05",
    },
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
    <div className="p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
        <span>
          <h6 className="text-xl sm:text-lg font-semibold">Customers</h6>
          <p className="text-gray-600 text-sm sm:text-base">Manage your customer relationships</p>
        </span>
        <span className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-blue-600 transition mt-4 sm:mt-0">
          <FaPlus />
          <button className="font-medium">Add customer</button>
        </span>
      </div>

      {/* Customer Table */}
      <div className="bg-white p-4 rounded shadow">
        <h6 className="font-semibold mb-2">Customer Directory</h6>

        {/* Search */}
        <div className="flex items-center gap-2 border w-full sm:w-80 mt-4 sm:mt-6 border-gray-300 rounded px-2 py-1">
          <SlMagnifier className="text-gray-500" />
          <input
            type="text"
            placeholder="Search by name, phone, email..."
            className="outline-none w-full"
            value={input}
            onChange={handleSearch}
          />
        </div>

        {/* Table */}
        <div className="border rounded mt-4 border-gray-300">
          {/* Header */}
          <div className="grid grid-cols-1 sm:grid-cols-6 p-4 bg-gray-100 gap-4 font-semibold text-sm">
            <div>Name</div>
            <div>Phone</div>
            <div>CNIC</div>
            <div>Email</div>
            <div>Address</div>
            <div>Customer Since</div>
          </div>

          {/* Rows */}
          {filteredData.length === 0 ? (
            <div className="p-4 text-center text-gray-500">No customers found</div>
          ) : (
            filteredData.map((e, i) => (
              <div key={i}>
                <div className="grid grid-cols-1 sm:grid-cols-6 p-4 hover:bg-gray-50 gap-4 text-sm">
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
