"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cartItems } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* LOGO */}
        <Link
          href="/"
          className="text-xl font-bold text-blue-700"
        >
          Sree Vel Murugan Hardware And Tiles
        </Link>

        {/* NAV LINKS */}
        <nav className="flex items-center gap-6 font-medium text-gray-700">

          {/* HOME */}
          <Link
            href="/"
            className="hover:text-blue-600 transition"
          >
            Home
          </Link>

          {/* SHOP → scroll to categories */}
          <Link
            href="/#categories"
            className="hover:text-blue-600 transition"
          >
            Shop
          </Link>

          {/* CATEGORIES → same scroll */}
          <Link
            href="/#categories"
            className="hover:text-blue-600 transition"
          >
            Categories
          </Link>

          {/* CONTACT → direct call */}
          <a
            href="tel:7305274926"
            className="hover:text-blue-600 transition"
          >
            Contact
          </a>

          {/* CART BUTTON */}
          <Link
            href="/cart"
            className="relative ml-4 bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 transition flex items-center gap-2"
          >
            🛒 Cart

            {/* CART COUNT */}
            {cartItems.length > 0 && (
              <span
                className="absolute -top-2 -right-2
                           bg-white text-red-600
                           text-xs font-bold
                           w-6 h-6 rounded-full
                           flex items-center justify-center
                           shadow"
              >
                {cartItems.length}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
