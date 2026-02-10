"use client";

import { useEffect, useState } from "react";

type Order = {
  _id: string;
  items: any[];
  total: number;
  status: string;
  createdAt: string;
};

export default function MyOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch("/api/orders");
        const data = await res.json();

        if (!res.ok || !Array.isArray(data)) {
          throw new Error("Invalid orders response");
        }

        setOrders(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load orders");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-black">
        Loading orders...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 bg-black">
        {error}
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">My Orders</h1>

      {orders.length === 0 && (
        <p className="text-gray-400">No orders found.</p>
      )}

      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order._id}
            className="bg-slate-900 p-6 rounded-2xl"
          >
            <p className="text-sm text-gray-400">
              {new Date(order.createdAt).toLocaleString()}
            </p>

            <p className="text-lg font-semibold text-red-400">
              ₹{order.total}
            </p>

            <p className="text-sm text-yellow-400">
              Status: {order.status}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
