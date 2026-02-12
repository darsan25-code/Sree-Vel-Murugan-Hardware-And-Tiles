"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleCategoriesClick = () => {
    if (pathname === "/") {
      const section = document.getElementById("categories");
      section?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#categories");
    }
    setOpen(false);
  };

  const linkStyle =
    "text-gray-800 hover:text-red-600 font-medium transition";

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center relative">

      {/* Logo */}
      <Link href="/" className="text-blue-600 font-bold text-lg">
        Sree Vel Murugan Hardware & Tiles
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 items-center">
        <Link href="/" className={linkStyle}>Home</Link>

        <button onClick={handleCategoriesClick} className={linkStyle}>
          Categories
        </button>

        <Link href="/my-orders" className={linkStyle}>
          My Orders
        </Link>

        <Link
          href="/cart"
          className="bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 transition"
        >
          Cart
        </Link>
      </div>

      {/* Mobile Toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-gray-800 text-2xl"
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg 
                        flex flex-col items-center gap-6 py-6 md:hidden">

          <Link href="/" className={linkStyle} onClick={() => setOpen(false)}>
            Home
          </Link>

          <button onClick={handleCategoriesClick} className={linkStyle}>
            Categories
          </button>

          <Link href="/my-orders" className={linkStyle} onClick={() => setOpen(false)}>
            My Orders
          </Link>

          <Link
            href="/cart"
            className="bg-red-600 text-white px-6 py-2 rounded-full"
            onClick={() => setOpen(false)}
          >
            Cart
          </Link>
        </div>
      )}
    </nav>
  );
}
