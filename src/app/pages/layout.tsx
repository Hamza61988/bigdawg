'use client';

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Navbar */}
      <div className="sticky top-0 z-50">
        <Navbar onToggleMenu={() => setShowMobileMenu((prev) => !prev)} />
      </div>

      {/* Mobile sidebar buttons under navbar */}
      {showMobileMenu && (
        <div className="sm:hidden bg-white border-b border-gray-300 px-4 py-2 flex flex-col gap-2">
          <Sidebar mobile />
        </div>
      )}

      {/* Main content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Desktop sidebar */}
        <div className="hidden sm:block flex-shrink-0 h-full overflow-hidden">
          <Sidebar />
        </div>

        <main className="flex-1 overflow-y-auto bg-gray-100 p-6">{children}</main>
      </div>
    </div>
  );
}
