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
  const [searched, setSearched] = useState(false);

  const fetchOrders = async () => {
    if (!phone) return;

    const res = await fetch(`/api/orders?phone=${phone}`);
    const data = await res.json();

    setOrders(data);
    setSearched(true);
  };

  return (
    <main className="min-h-screen bg-black text-white px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">My Orders</h1>

      {/* Phone Input */}
      <div className="flex gap-4 mb-8">
        <input
          type="text"
          placeholder="Enter your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="px-4 py-2 rounded bg-gray-800 border border-gray-600 w-full max-w-sm"
        />

        <button
          onClick={fetchOrders}
          className="bg-red-600 px-6 py-2 rounded"
        >
          Search
        </button>
      </div>

      {/* Orders */}
      {searched && orders.length === 0 && (
        <p className="text-gray-400">No orders found.</p>
      )}

      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order._id}
            className="bg-slate-900 p-6 rounded-xl"
          >
            <p className="text-xl font-bold">
              ₹{order.total} — {order.status}
            </p>
            <p className="text-gray-400 text-sm">
              {new Date(order.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
