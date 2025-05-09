'use client';

import { useState } from "react";
import { MdOutlinePerson, MdOutlineFileUpload } from "react-icons/md";
import { FiBell } from "react-icons/fi";
import { SlMagnifier } from "react-icons/sl";
import Image from "next/image";

export default function Navbar({ onToggleMenu }: { onToggleMenu: () => void }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleClick = () => {
    setShowMobileMenu((prev) => !prev);
    onToggleMenu();
  };

  return (
    <div className="p-4 px-6 bg-gray-100 flex items-center justify-between flex-wrap sm:flex-nowrap gap-4 shadow-sm border-b border-gray-300">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Image alt="next" src="/next.svg" width={120} height={40} />
      </div>

      {/* Search Bar (Desktop only) */}
      <div className="hidden sm:flex flex-1 justify-center">
        <div className="flex items-center gap-2 border border-gray-300 rounded px-2 py-1 w-64 bg-white">
          <SlMagnifier className="text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="outline-none w-full bg-transparent text-sm"
          />
        </div>
      </div>

      {/* Icons + Menu Toggle */}
      <div className="flex items-center gap-3 ml-auto">
        {/* Shop Setting */}
        <span className="outline px-2 sm:px-3 gap-1 outline-gray-300 hover:bg-blue-100 flex items-center rounded py-1 bg-white">
          <MdOutlineFileUpload />
          <button className="text-sm font-medium hidden sm:inline">Shop Setting</button>
        </span>

        {/* Icons */}
        <button className="hover:bg-blue-100 rounded p-2 text-2xl bg-white">
          <MdOutlinePerson />
        </button>
        <button className="hover:bg-blue-100 rounded p-2 text-2xl relative bg-white">
          <FiBell />
        </button>

        {/* Mobile menu toggle */}
        <button
          className="sm:hidden bg-gray-300 px-3 py-1 rounded text-sm"
          onClick={handleClick}
        >
          Menu
        </button>
      </div>

      {/* Search Bar (Mobile only) */}
      <div className="sm:hidden w-full mt-2">
        <div className="flex items-center gap-2 border border-gray-300 rounded px-2 py-1 w-full bg-white">
          <SlMagnifier className="text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="outline-none w-full bg-transparent text-sm"
          />
        </div>
      </div>
    </div>
  );
}
