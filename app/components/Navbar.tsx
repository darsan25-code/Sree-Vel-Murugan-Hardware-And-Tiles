"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link
          href="#home"
          className="text-xl font-bold text-blue-700"
        >
          Sree Vel Murugan Hardware And Tiles
        </Link>

        {/* NAV LINKS */}
        <nav className="flex items-center gap-6 font-medium text-gray-700">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#shop" className="hover:text-blue-600">Shop</a>
          <a href="#categories" className="hover:text-blue-600">Categories</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>

          {/* CART */}
          <Link
            href="/cart"
            className="ml-4 bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition"
          >
            🛒 Cart
          </Link>
        </nav>

      </div>
    </header>
  );
}
