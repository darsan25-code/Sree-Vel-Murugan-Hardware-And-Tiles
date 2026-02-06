"use client";

import { useState } from "react";
import Link from "next/link";

type CartItem = {
  id: string;
  name: string;
  price: number;
  qty: number;
};

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: "faucet-1",
      name: "Jaquar Bathroom Faucet",
      price: 2850,
      qty: 1,
    },
    {
      id: "mixer-1",
      name: "Parryware Basin Mixer",
      price: 3200,
      qty: 1,
    },
  ]);

  const updateQty = (id: string, delta: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: Math.max(1, item.qty + delta) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <main className="min-h-screen bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-10">
          Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <p className="text-gray-500">
            Your cart is empty.
          </p>
        ) : (
          <div className="grid md:grid-cols-3 gap-10">

            {/* CART ITEMS */}
            <div className="md:col-span-2 space-y-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-gray-50 rounded-2xl p-6 shadow-sm"
                >
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-red-600 font-bold">
                      ₹{item.price}
                    </p>

                    {/* QTY */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQty(item.id, -1)}
                        className="w-8 h-8 rounded-full bg-gray-200"
                      >
                        −
                      </button>
                      <span>{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.id, 1)}
                        className="w-8 h-8 rounded-full bg-gray-200"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="font-semibold">
                      ₹{item.price * item.qty}
                    </p>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-sm text-red-500 mt-3"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* SUMMARY */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-md h-fit">
              <h3 className="text-xl font-semibold mb-6">
                Order Summary
              </h3>

              <div className="flex justify-between mb-4">
                <span>Total</span>
                <span className="font-bold">
                  ₹{total}
                </span>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition">
                Proceed to Checkout
              </button>

              <Link
                href="/"
                className="block text-center text-sm text-gray-500 mt-4"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
