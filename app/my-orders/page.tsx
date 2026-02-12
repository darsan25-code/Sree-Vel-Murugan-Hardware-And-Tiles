"use client";

import { useEffect, useState } from "react";

type Order = {
  _id: string;
  total: number;
  status: string;
  createdAt: string;
};

export default function MyOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const phone = localStorage.getItem("customer_phone");

    if (!phone) {
      setLoading(false);
      return;
    }

    fetch(`/api/orders?phone=${phone}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">My Orders</h1>

      {orders.length === 0 && (
        <p className="text-gray-400">
          No orders found for this number.
        </p>
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
