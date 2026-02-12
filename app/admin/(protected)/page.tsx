"use client";

import { useEffect, useState } from "react";

type Order = {
  _id: string;
  customer: any;
  items: any[];
  total: number;
  status: string;
  createdAt: string;
};

export default function AdminPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [search, setSearch] = useState("");

  const fetchOrders = async () => {
    const res = await fetch("/api/orders");
    const data = await res.json();
    setOrders(data);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const deleteOrder = async (id: string) => {
    if (!confirm("Delete this order?")) return;

    await fetch(`/api/admin/orders/${id}`, {
      method: "DELETE",
    });

    window.location.reload();
  };

  const markShipped = async (id: string) => {
    await fetch(`/api/admin/orders/${id}`, {
      method: "PATCH",
    });

    window.location.reload();
  };

  // 🔍 FILTER ORDERS BASED ON SEARCH
  const filteredOrders = orders.filter((order) =>
    `${order.customer?.name} ${order.customer?.phone} ${order.customer?.city}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-6">
        🧑‍💼 Admin – Orders
      </h1>

      {/* 🔍 SEARCH INPUT */}
      <input
        type="text"
        placeholder="Search by name, phone, city..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-6 w-full p-3 rounded bg-slate-800"
      />

      {filteredOrders.length === 0 && (
        <p className="text-gray-400">No matching orders found.</p>
      )}

      {filteredOrders.map((order) => (
        <div
          key={order._id}
          className="bg-slate-900 p-6 rounded-xl mb-6"
        >
          <div className="flex justify-between">
            <div>
              <p className="font-bold">
                {order.customer?.name}
              </p>
              <p className="text-sm text-gray-400">
                📞 {order.customer?.phone}
              </p>
              <p className="text-sm text-gray-400">
                📍 {order.customer?.city}
              </p>
            </div>

            <div className="text-right">
              <p className="text-red-500 font-bold">
                ₹{order.total}
              </p>
              <p className="text-yellow-400">
                {order.status}
              </p>
            </div>
          </div>

          <div className="mt-4 flex gap-3">
            {order.status !== "Shipped" && (
              <button
                onClick={() => markShipped(order._id)}
                className="bg-green-600 px-4 py-2 rounded"
              >
                Mark as Shipped
              </button>
            )}

            <button
              onClick={() => deleteOrder(order._id)}
              className="bg-red-600 px-4 py-2 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </main>
  );
}
