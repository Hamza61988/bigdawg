'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { GoInbox } from 'react-icons/go';
import { GiCardboardBox } from 'react-icons/gi';
import { IoCartOutline, IoPeopleOutline } from 'react-icons/io5';
import { FaTools, FaHandsHelping } from 'react-icons/fa';
import { BsGraphUp } from 'react-icons/bs';
import { useRouter } from 'next/navigation';

export default function Sidebar({ mobile = false }: { mobile?: boolean }) {
  const pathname = usePathname();
  const [user, setUser] = useState<{ name: string } | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    router.push('/'); // Redirect to home
  };

  const buttons = [
    { label: 'Dashboard', icon: <GoInbox />, href: '/pages/dashbaord' },
    { label: 'Inventory', icon: <GiCardboardBox />, href: '/pages/inventory' },
    { label: 'Sales', icon: <IoCartOutline />, href: '/pages/Sales' },
    { label: 'Purchase', icon: <IoCartOutline />, href: '/pages/Purchase' },
    { label: 'Customers', icon: <IoPeopleOutline />, href: '/pages/Customers' },
    { label: 'Repair', icon: <FaTools />, href: '/pages/Repair' },
    { label: 'Reports', icon: <BsGraphUp />, href: '/pages/Reports' },
    { label: 'Help and Support', icon: <FaHandsHelping />, href: '/pages/Support' },
  ];

  const baseClass = `flex items-center gap-3 text-sm px-4 py-2 rounded transition-all duration-200`;

  if (mobile) {
    return (
      <div className="flex flex-col space-y-1">
        {buttons.map(({ label, icon, href }) => {
          const isActive = pathname === href;
          return (
            <Link href={href} key={label}>
              <button
                className={`${baseClass} ${
                  isActive ? 'bg-gray-400' : 'hover:bg-gray-100'
                } w-full text-left`}
              >
                <span className="text-lg">{icon}</span>
                <span>{label}</span>
              </button>
            </Link>
          );
        })}
        {/* User Info and Logout at the bottom */}
        {user && (
          <div className="mt-4 px-4 py-2 rounded bg-gray-100 text-sm font-semibold">
            {user.name.charAt(0).toUpperCase() + user.name.slice(1)}
          </div>
        )}
        <div className="mt-auto">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 text-sm text-black px-4 py-2 rounded transition-all duration-200 hover:bg-gray-200"
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

  // Desktop version
  return (
    <div className="flex flex-col space-y-2 w-64 h-full bg-white p-4">
      {buttons.map(({ label, icon, href }) => {
        const isActive = pathname === href;
        return (
          <Link href={href} key={label}>
            <button
              className={`${baseClass} ${
                isActive ? 'bg-gray-400' : 'hover:bg-gray-200'
              } w-full text-left`}
            >
              <span className="text-lg">{icon}</span>
              <span>{label}</span>
            </button>
          </Link>
        );
      })}

      {/* User Info */}
      {user && (
        <div className="mt-4 px-4 py-2 rounded bg-gray-100 text-sm font-semibold">
          {user.name.charAt(0).toUpperCase() + user.name.slice(1)}
        </div>
      )}

      {/* Logout Button */}
      <div className="mt-auto">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 text-sm text-black px-4 py-2 rounded transition-all duration-200 hover:bg-gray-200"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
