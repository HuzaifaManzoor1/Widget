// app/components/Navbar.tsx
"use client";

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/features" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-20">
          <div className="text-2xl md:text-3xl font-bold text-gray-900">
            Widget Platform
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative group px-5 py-2 text-blue-600 font-semibold rounded-lg transition"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
            ))}

            <Link
              href="/contact"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
              {isOpen ? (
                <XMarkIcon className="w-7 h-7 text-gray-900" />
              ) : (
                <Bars3Icon className="w-7 h-7 text-gray-900" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t">
          <div className="flex flex-col items-center py-4 space-y-3">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative group w-full text-center px-5 py-2 text-blue-600 font-semibold rounded-lg transition"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
            ))}
            <Link
              href="/contact"
              className="w-full text-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
