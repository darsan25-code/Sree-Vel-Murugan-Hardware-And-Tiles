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
  items: any[];
  total: number;
  status: string;
  createdAt: string;
};

export default function AdminPage() {
  const router = useRouter();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  // 🔐 LOGIN PROTECTION
  useEffect(() => {
    const hasToken = document.cookie.includes("admin_token");

    if (!hasToken) {
      router.push("/admin/login");
    } else {
      setAuthorized(true);
    }
  }, [router]);

  // 📦 FETCH ORDERS ONLY IF AUTHORIZED
  useEffect(() => {
    if (!authorized) return;

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
      .catch(() => setLoading(false));
  }, [authorized]);

  if (!authorized || loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-4 md:px-10 py-10">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-8">
        🧑‍💼 Admin – Orders
      </h1>

      {orders.length === 0 && (
        <p className="text-gray-400">No orders found.</p>
      )}

      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order._id}
            className="bg-slate-900 rounded-2xl p-6 shadow-xl"
          >
            <div className="flex flex-col md:flex-row md:justify-between gap-4">
              <div>
                <p className="font-semibold text-lg">
                  {order.customer?.name || "No Name"}
                </p>
                <p className="text-gray-400 text-sm">
                  📞 {order.customer?.phone}
                </p>
                <p className="text-gray-400 text-sm">
                  📍 {order.customer?.address}, {order.customer?.city} –{" "}
                  {order.customer?.pincode}
                </p>
              </div>

              <div className="text-right">
                <p className="text-red-500 font-bold text-xl">
                  ₹{order.total}
                </p>
                <p className="text-sm text-yellow-400">
                  Status: {order.status}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {new Date(order.createdAt).toLocaleString()}
                </p>
              </div>
            </div>

            <div className="mt-4 border-t border-white/10 pt-4">
              <p className="font-semibold mb-2">Items:</p>
              <ul className="text-sm text-gray-300 space-y-1">
                {order.items.map((item: any, i: number) => (
                  <li key={i}>
                    • {item.name} × {item.quantity} — ₹
                    {item.price * item.quantity}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
