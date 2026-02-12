"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link
          href="/"
          className="text-blue-600 font-bold text-lg md:text-xl"
        >
          Sree Vel Murugan Hardware & Tiles
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center text-gray-700">
  <Link href="/">Home</Link>
  <Link href="/category/all">Categories</Link>
  <Link href="/my-orders">My Orders</Link>
  <Link
    href="/cart"
    className="bg-red-600 text-white px-4 py-2 rounded-full"
  >
    Cart
  </Link>
</div>


        {/* Mobile Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-gray-700"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
          <div className="flex flex-col items-center gap-6 py-6 text-gray-800 text-lg font-medium">
            <Link href="/" onClick={() => setOpen(false)} className="hover:text-red-600">
              Home
            </Link>
            <Link href="/shop" onClick={() => setOpen(false)} className="hover:text-red-600">
              Shop
            </Link>
            <Link href="/category/all" onClick={() => setOpen(false)} className="hover:text-red-600">
              Categories
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="hover:text-red-600">
              Contact
            </Link>
            <Link href="/my-orders" onClick={() => setOpen(false)} className="hover:text-red-600">
              My Orders
            </Link>

            <Link
              href="/cart"
              onClick={() => setOpen(false)}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full transition"
            >
              Cart
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
