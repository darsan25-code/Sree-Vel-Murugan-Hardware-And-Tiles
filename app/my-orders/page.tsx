"use client";

import { useEffect, useState } from "react";

export default function MyOrdersPage() {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  fetch("/api/orders")
    .then((res) => res.json())
    .then((data) => {
      if (Array.isArray(data)) {
        setOrders(data);
      } else {
        setOrders([]);   
      }
      setLoading(false);
    })
    .catch(() => {
      setOrders([]);    
      setLoading(false);
    });
}, []);


  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading orders...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">My Orders</h1>

      {orders.length === 0 && (
        <p className="text-gray-400">No orders found.</p>
      )}

      <div className="space-y-4">
        {Array.isArray(orders) && orders.map((order) => (
          <div
            key={order._id}
            className="bg-slate-900 rounded-xl p-4"
          >
            <p className="font-semibold">
              ₹{order.total} — {order.status}
            </p>
            <p className="text-sm text-gray-400">
              {new Date(order.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
