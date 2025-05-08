'use client';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { GoInbox } from "react-icons/go";
import { GiCardboardBox } from "react-icons/gi";
import { IoCartOutline, IoPeopleOutline } from "react-icons/io5";
import { FaTools, FaHandsHelping } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();
  const [user, setUser] = useState<{ name: string } | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    router.push('/');
  };

  const buttons = [
    { label: 'Dashboard', icon: <GoInbox />, href: '/pages/dashbaord' },
    { label: 'Inventory', icon: <GiCardboardBox />, href: '/pages/inventory' },
    { label: 'Sales', icon: <IoCartOutline />, href: '/pages/Sales' },
    { label: 'Purchase', icon: <IoCartOutline />, href: '/pages/Purchase' },
    { label: 'Customers', icon: <IoPeopleOutline />, href: '/pages/Customers' },
    { label: 'Repair', icon: <FaTools />, href: '/pages/Repair' },
    { label: 'Reports', icon: <BsGraphUp />, href: '/pages/Reports' },
    { label: 'Help and Support', icon: <FaHandsHelping />, href: '/pages/Support' }
  ];

  return (
    <div className="w-64 h-full flex flex-col bg-white p-4">
      <div className="flex flex-col space-y-2 flex-grow">
        {buttons.map(({ label, icon, href }) => {
          const isActive = pathname === href;

          return (
            <Link href={href} key={label}>
              <button
                className={`w-full flex items-center gap-3 text-black hover:text-black text-left px-4 py-2 rounded transition-all duration-200
                  ${isActive ? 'bg-gray-400 text-black' : 'hover:bg-gray-300'}`}
              >
                <span className="text-lg">{icon}</span>
                <span className="font-semibold">{label}</span>
              </button>
            </Link>
          );
        })}
      </div>

      {user && (
        <div className="text-black hover:text-black text-left px-4 py-2 rounded transition-all duration-200 hover:bg-gray-300 mt-4">
        <h5 className="text-sm font-semibold">
  {(user ? user.name : 'guest').charAt(0).toUpperCase() + (user ? user.name : 'guest').slice(1)}
</h5>

        </div>
      )}

      <div className="mt-auto">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 text-black hover:text-black text-left px-4 py-2 rounded transition-all duration-200 hover:bg-gray-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
