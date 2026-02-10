"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Order = {
  _id: string;
  customer: {
    name: string;
    phone: string;
    address: string;
    city: string;
    pincode: string;
  };
  total: number;
  status: string;
};

export default function AdminPage() {
  const router = useRouter();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  // 🔐 Simple admin auth check
  useEffect(() => {
    const isAdmin = localStorage.getItem("admin-auth");
    if (!isAdmin) {
      router.push("/admin/login");
    }
  }, [router]);

  // 📦 Fetch all orders
  useEffect(() => {
    fetch("/api/admin/orders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoading(false);
      });
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-10">
      <h1 className="text-3xl font-bold mb-8">🧑‍💼 Admin – Orders</h1>

      {loading && <p>Loading orders...</p>}

      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order._id}
            className="bg-slate-900 rounded-2xl p-6 shadow-lg"
          >
            <div className="flex justify-between mb-2">
              <p className="font-semibold">
                {order.customer?.name}
              </p>
              <p className="text-red-400 font-bold">
                ₹{order.total}
              </p>
            </div>

            <p className="text-sm text-gray-400">
              📞 {order.customer?.phone}
            </p>

            <p className="text-sm text-gray-400 mt-1">
              📍 {order.customer?.address}, {order.customer?.city} –{" "}
              {order.customer?.pincode}
            </p>

            <div className="flex justify-between items-center mt-4">
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  order.status === "Delivered"
                    ? "bg-green-600"
                    : "bg-yellow-600"
                }`}
              >
                {order.status}
              </span>

              {order.status !== "Delivered" && (
                <button
                  onClick={async () => {
                    await fetch(`/api/admin/orders/${order._id}`, {
                      method: "PATCH",
                    });
                    location.reload();
                  }}
                  className="bg-red-600 px-4 py-2 rounded-full text-sm"
                >
                  Mark Delivered
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
