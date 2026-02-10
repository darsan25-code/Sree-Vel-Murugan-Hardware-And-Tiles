"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cartItems } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">

      {/* TOP BAR */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-20 pb-10">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl md:text-4xl font-bold">Shopping Cart</h1>

          <Link
            href="/"
            className="bg-gray-800 px-5 py-2 rounded-full border border-white/20 hover:bg-gray-700"
          >
            ← Continue Shopping
          </Link>
        </div>

        {cartItems.length === 0 && (
          <p className="mt-6 text-gray-300">Your cart is empty.</p>
        )}
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pb-20
                      grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* CART ITEMS */}
        <div className="md:col-span-2 space-y-6">
          {cartItems.map((item, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row gap-6
                         bg-slate-900 rounded-2xl p-5 shadow-lg"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full sm:w-32 h-32 object-contain rounded-xl bg-slate-800"
              />

              <div className="flex-1">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-red-500 font-bold mt-2">
                  ₹{item.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ORDER SUMMARY */}
        <div className="bg-slate-900 rounded-3xl p-6 shadow-2xl
                        h-fit md:sticky md:top-24">
          <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

          <div className="flex justify-between text-lg mb-4">
            <span>Total</span>
            <span className="text-red-500 font-bold">₹{total}</span>
          </div>

          <Link
            href="/checkout"
            className="block text-center bg-red-600
                       py-4 rounded-full font-semibold
                       hover:bg-red-700 transition"
          >
            Place Order
          </Link>

          <p className="text-center text-sm text-gray-400 mt-4">
            Cash on Delivery available
          </p>
        </div>
      </div>

      {/* CONTACT DETAILS */}
      <footer className="bg-black/60 border-t border-white/10 py-8 text-center text-sm text-gray-300">
        <p className="font-semibold text-white">
          Sree Vel Murugan Hardware & Tiles
        </p>
        <p>No.143, Kundrathur Main Road, Porur, Chennai – 600116</p>
        <p className="mt-2">
          📞 73052 74926 &nbsp; | &nbsp; ☎ 98404 61152
        </p>
      </footer>

    </main>
  );
}
