"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const router = useRouter();
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-20">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto flex justify-between items-center mb-12">
        <h1 className="text-4xl font-bold">Shopping Cart</h1>

        <button
          onClick={() => router.push("/category/sanitaryware")}
          className="px-6 py-3 rounded-full bg-gray-800 hover:bg-gray-700 transition"
        >
          ← Back to Products
        </button>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {/* LEFT : CART ITEMS */}
        <div className="md:col-span-2 space-y-6">
          {cartItems.length === 0 ? (
            <p className="text-gray-400 text-lg">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-6 bg-gradient-to-r from-slate-900 to-slate-800 p-6 rounded-2xl shadow-lg"
              >
                {/* IMAGE */}
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-24 h-24 object-contain rounded-xl bg-white p-2"
                />

                {/* DETAILS */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-gray-400 capitalize">{item.type}</p>
                  <p className="text-red-500 font-bold mt-2">
                    ₹{item.price}
                  </p>

                  {/* QTY */}
                  <div className="flex items-center gap-4 mt-4">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }
                      className="w-9 h-9 rounded-full bg-gray-700 hover:bg-gray-600"
                    >
                      −
                    </button>

                    <span className="text-lg font-semibold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                      className="w-9 h-9 rounded-full bg-gray-700 hover:bg-gray-600"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* PRICE + REMOVE */}
                <div className="text-right">
                  <p className="text-2xl font-bold">
                    ₹{item.price * item.quantity}
                  </p>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 mt-4 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* RIGHT : ORDER SUMMARY */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-3xl shadow-xl h-fit">
          <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>

          <div className="flex justify-between text-lg mb-8">
            <span>Total</span>
            <span className="font-bold text-red-500">
              ₹{totalAmount}
            </span>
          </div>

          <button className="w-full bg-red-600 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition">
            Place Order
          </button>

          <Link
            href="/category/sanitaryware"
            className="block text-center mt-6 text-gray-400 hover:text-white"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </main>
  );
}
