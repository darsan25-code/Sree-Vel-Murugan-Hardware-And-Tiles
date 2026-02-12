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

  const fetchOrders = async () => {
    const res = await fetch("/api/orders");
    const data = await res.json();
    setOrders(data);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const markShipped = async (id: string) => {
    await fetch(`/api/admin/orders/${id}`, {
      method: "PATCH",
    });

    fetchOrders();
  };

  const deleteOrder = async (id: string) => {
  if (!confirm("Delete this order?")) return;
  await fetch(`/api/admin/orders/${id}`, {
  method: "DELETE",
});

window.location.reload();


  const res = await fetch(`/api/admin/orders/${id}`, {
    method: "DELETE",
  });

  if (res.ok) {
    // remove from UI instantly
    setOrders((prev) => prev.filter((o) => o._id !== id));
  } else {
    alert("Delete failed");
  }
};

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-6">
        🧑‍💼 Admin – Orders
      </h1>

      {orders.map((order) => (
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
                {order.customer?.phone}
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
