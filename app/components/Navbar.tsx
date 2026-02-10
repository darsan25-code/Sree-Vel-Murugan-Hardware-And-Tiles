"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="text-lg md:text-xl font-bold text-blue-700 leading-tight">
          Sree Vel Murugan
          <br className="md:hidden" />
          Hardware & Tiles
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-6 font-medium text-gray-700">
          <Link href="/" className="hover:text-blue-600">
  Home
</Link>

<Link href="/#categories" scroll={true} className="hover:text-blue-600">
  Shop
</Link>

<Link href="/#categories" scroll={true} className="hover:text-blue-600">
  Categories
</Link>

<Link href="/#contact" scroll={true} className="hover:text-blue-600">
  Contact
</Link>
<Link href="/my-orders">My Orders</Link>



          <Link
            href="/cart"
            className="ml-4 bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition"
          >
            🛒 Cart
          </Link>
        </nav>

        {/* MOBILE CART */}
        <Link
          href="/cart"
          className="md:hidden bg-red-600 text-white px-3 py-2 rounded-full"
        >
          🛒
        </Link>

      </div>
    </header>
  );
}
