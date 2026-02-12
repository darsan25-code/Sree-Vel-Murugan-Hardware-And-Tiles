"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-4 py-3 flex justify-between items-center">
      {/* Logo */}
      <Link href="/" className="text-blue-600 font-bold text-lg">
        Sree Vel Murugan Hardware & Tiles
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 items-center">
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/category/all">Categories</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/my-orders">My Orders</Link>
        <Link href="/cart" className="bg-red-600 text-white px-4 py-2 rounded-full">
          Cart
        </Link>
      </div>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-2xl"
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 md:hidden">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/shop" onClick={() => setOpen(false)}>Shop</Link>
          <Link href="/category/all" onClick={() => setOpen(false)}>Categories</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          <Link href="/my-orders" onClick={() => setOpen(false)}>My Orders</Link>
          <Link
            href="/cart"
            className="bg-red-600 text-white px-4 py-2 rounded-full"
            onClick={() => setOpen(false)}
          >
            Cart
          </Link>
        </div>
      )}
    </nav>
  );
}
