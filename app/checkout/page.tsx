"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";


export default function CheckoutPage() {
  // ✅ useCart MUST be inside component
  const { cartItems, clearCart } = useCart();
const router = useRouter();
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  // ✅ PLACE ORDER FUNCTION
 const placeOrder = async () => {
  if (
    !form.name ||
    !form.phone ||
    !form.address ||
    !form.city ||
    !form.pincode
  ) {
    alert("Please fill all details");
    return;
  }

  try {
    const res = await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        customer: form,
        items: cartItems,
        total,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error(data);
      throw new Error(data?.error || "Order failed");
    }

    // 🔐 SAVE CUSTOMER PHONE HERE
    localStorage.setItem("customer_phone", form.phone);

    clearCart();

    router.push("/order-success");
  } catch (err) {
    console.error(err);
    alert("Order failed ❌");
  }
};


  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-4 pt-20 pb-10 flex justify-between">
        <h1 className="text-3xl font-bold">Checkout</h1>
        <Link
          href="/cart"
          className="bg-gray-800 px-5 py-2 rounded-full border border-white/20 hover:bg-gray-700"
        >
          ← Back to Cart
        </Link>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 pb-20 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* CUSTOMER DETAILS */}
        <div className="md:col-span-2 bg-slate-900 rounded-3xl p-6">
          <h2 className="text-2xl font-semibold mb-6">Customer Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              placeholder="Full Name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              className="bg-slate-800 px-5 py-4 rounded-xl"
            />

            <input
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
              className="bg-slate-800 px-5 py-4 rounded-xl"
            />

            <textarea
              placeholder="Full Address"
              value={form.address}
              onChange={(e) =>
                setForm({ ...form, address: e.target.value })
              }
              className="bg-slate-800 px-5 py-4 rounded-xl md:col-span-2 h-28"
            />

            <input
              placeholder="City"
              value={form.city}
              onChange={(e) =>
                setForm({ ...form, city: e.target.value })
              }
              className="bg-slate-800 px-5 py-4 rounded-xl"
            />

            <input
              placeholder="Pincode"
              value={form.pincode}
              onChange={(e) =>
                setForm({ ...form, pincode: e.target.value })
              }
              className="bg-slate-800 px-5 py-4 rounded-xl"
            />
          </div>

          <button
            onClick={placeOrder}
            className="bg-red-600 mt-8 py-4 rounded-full w-full text-lg font-semibold"
          >
            Place Order
          </button>

          <p className="text-sm text-gray-400 text-center mt-4">
            Cash on Delivery • Local delivery available
          </p>
        </div>

        {/* ORDER SUMMARY */}
        <div className="bg-slate-900 rounded-3xl p-6 h-fit md:sticky md:top-24">
          <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

          <div className="space-y-4 mb-6">
            {cartItems.map((item, i) => (
              <div
                key={i}
                className="flex justify-between text-gray-300"
              >
                <span>
                  {item.name} × {item.quantity}
                </span>
                <span>₹{item.price * item.quantity}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-between text-lg font-semibold">
            <span>Total</span>
            <span className="text-red-500">₹{total}</span>
          </div>
        </div>
      </div>
    </main>
  );
}
