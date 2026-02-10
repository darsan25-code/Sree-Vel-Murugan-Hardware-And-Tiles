"use client";

import { useState } from "react";

type Order = {
  _id: string;
  items: {
    name: string;
    price: number;
    quantity?: number;
  }[];
  total: number;
  status: "Pending" | "Delivered";
  createdAt: string;
};

export default function MyOrdersPage() {
  const [phone, setPhone] = useState("");
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const fetchOrders = async () => {
    if (!phone) {
      alert("Enter phone number");
      return;
    }

    setLoading(true);
    setSearched(true);

    try {
      const res = await fetch(`/api/orders?phone=${phone}`);
      const data = await res.json();
      setOrders(data);
    } catch (err) {
      console.error("Failed to fetch orders", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-20">
      <h1 className="text-3xl font-bold text-center mb-10">
        📦 My Orders
      </h1>

      {/* SEARCH BOX */}
      <div className="max-w-md mx-auto mb-12">
        <input
          type="tel"
          placeholder="Enter phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full bg-slate-800 px-5 py-4 rounded-xl outline-none mb-4"
        />

        <button
          onClick={fetchOrders}
          className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-full font-semibold"
        >
          View Orders
        </button>
      </div>

      {/* RESULTS */}
      {loading && (
        <p className="text-center text-gray-400">Loading orders...</p>
      )}

      {!loading && searched && orders.length === 0 && (
        <p className="text-center text-gray-400">
          No orders found for this number
        </p>
      )}

      <div className="max-w-4xl mx-auto space-y-8">
        {orders.map((order) => (
          <div
            key={order._id}
            className="bg-slate-900 rounded-2xl p-6 shadow-xl"
          >
            {/* HEADER */}
            <div className="flex justify-between items-center mb-4">
              <p className="text-sm text-gray-400">
                Order ID: {order._id.slice(-6)}
              </p>

              <span
                className={`px-4 py-1 rounded-full text-sm font-semibold ${
                  order.status === "Delivered"
                    ? "bg-green-600"
                    : "bg-yellow-500 text-black"
                }`}
              >
                {order.status}
              </span>
            </div>

            {/* ITEMS */}
            <div className="space-y-2 mb-4">
              {order.items.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between text-sm text-gray-300"
                >
                  <span>
                    {item.name}
                    {item.quantity ? ` × ${item.quantity}` : ""}
                  </span>
                  <span>₹{item.price}</span>
                </div>
              ))}
            </div>

            {/* FOOTER */}
            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span className="text-red-500">₹{order.total}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
