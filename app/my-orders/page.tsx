"use client";

import { useState } from "react";

type Order = {
  _id: string;
  total: number;
  status: string;
  createdAt: string;
};

export default function MyOrdersPage() {
  const [phone, setPhone] = useState("");
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const fetchOrders = async () => {
    if (!phone) {
      alert("Enter your phone number");
      return;
    }

    setLoading(true);
    setSearched(true);

    try {
      const res = await fetch(`/api/orders?phone=${phone}`);
      const data = await res.json();
      setOrders(data);
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <h1 className="text-3xl font-bold mb-8">My Orders</h1>

      {/* SEARCH FORM */}
      <div className="flex gap-4 mb-10">
        <input
          type="text"
          placeholder="Enter your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              fetchOrders();
            }
          }}
          className="bg-slate-800 px-5 py-3 rounded-xl w-72 outline-none"
        />

        <button
          onClick={fetchOrders}
          className="bg-red-600 px-6 py-3 rounded-xl hover:bg-red-700 transition"
        >
          {loading ? "Loading..." : "Search"}
        </button>
      </div>

      {/* LOADING */}
      {loading && (
        <p className="text-gray-400">Fetching your orders...</p>
      )}

      {/* NO ORDERS */}
      {!loading && searched && orders.length === 0 && (
        <p className="text-gray-400">
          No orders found for this number.
        </p>
      )}

      {/* ORDER LIST */}
      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order._id}
            className="bg-slate-900 p-6 rounded-2xl"
          >
            <p className="text-xl font-semibold">
              ₹{order.total} — {order.status}
            </p>
            <p className="text-sm text-gray-400 mt-1">
              {new Date(order.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
