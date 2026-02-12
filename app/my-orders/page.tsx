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

  const searchOrders = async () => {
    if (!phone) {
      alert("Enter phone number");
      return;
    }

    const res = await fetch(`/api/orders?phone=${phone}`);
    const data = await res.json();

    setOrders(data);
    setSearched(true);
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">My Orders</h1>

      {/* Phone Input */}
      <div className="flex gap-4 mb-8">
        <input
          type="text"
          placeholder="Enter your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="bg-slate-800 px-4 py-3 rounded-lg w-72"
        />

        <button
          onClick={searchOrders}
          className="bg-red-600 px-6 py-3 rounded-lg"
        >
          Search
        </button>
      </div>

      {/* Show only after search */}
      {searched && orders.length === 0 && (
        <p className="text-gray-400">No orders found for this number.</p>
      )}

      {orders.map((order) => (
        <div
          key={order._id}
          className="bg-slate-900 p-6 rounded-xl mb-6"
        >
          <p className="font-bold text-lg">
            ₹{order.total} — {order.status}
          </p>
          <p className="text-gray-400 text-sm">
            {new Date(order.createdAt).toLocaleString()}
          </p>
        </div>
      ))}
    </main>
  );
}
