"use client";

import { useEffect, useState } from "react";

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
  const [orders, setOrders] = useState<Order[]>([]);
  const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [searching, setSearching] = useState(false);

  // ✅ Fetch from ADMIN route (IMPORTANT)
  useEffect(() => {
fetch("/api/admin/orders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setFilteredOrders(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // ✅ Search function
  const handleSearch = () => {
    setSearching(true);

    setTimeout(() => {
      if (search.trim() === "") {
        setFilteredOrders(orders);
        setSearching(false);
        return;
      }

      const filtered = orders.filter((order) =>
        order.customer?.name
          ?.toLowerCase()
          .includes(search.toLowerCase()) ||
        order.customer?.phone?.includes(search) ||
        order.customer?.city
          ?.toLowerCase()
          .includes(search.toLowerCase())
      );

      setFilteredOrders(filtered);
      setSearching(false);
    }, 400);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        Loading orders...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">🧑‍💼 Admin – Orders</h1>

      {/* 🔍 Search Bar */}
      <input
        type="text"
        placeholder="Search by name, phone, city..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
        className="w-full bg-slate-800 px-5 py-4 rounded-xl mb-6 outline-none"
      />

      {searching && (
        <p className="text-gray-400 mb-4">Searching...</p>
      )}

      {!searching && filteredOrders.length === 0 && (
        <p className="text-gray-400">No matching orders found.</p>
      )}

      <div className="space-y-6">
        {filteredOrders.map((order) => (
          <div
            key={order._id}
            className="bg-slate-900 rounded-2xl p-6 shadow-lg"
          >
            <div className="flex justify-between">
              <div>
                <p className="font-semibold text-lg">
                  {order.customer?.name}
                </p>
                <p className="text-gray-400 text-sm">
                  📞 {order.customer?.phone}
                </p>
                <p className="text-gray-400 text-sm">
                  📍 {order.customer?.city}
                </p>
              </div>

              <div className="text-right">
                <p className="text-red-500 font-bold text-xl">
                  ₹{order.total}
                </p>
                <p className="text-yellow-400">
                  {order.status}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
