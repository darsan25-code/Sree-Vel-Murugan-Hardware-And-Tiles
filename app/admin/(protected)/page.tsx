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

  // ✅ Fetch Orders
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

  // ✅ Search
  const handleSearch = () => {
    if (search.trim() === "") {
      setFilteredOrders(orders);
      return;
    }

    const filtered = orders.filter(
      (order) =>
        order.customer?.name
          ?.toLowerCase()
          .includes(search.toLowerCase()) ||
        order.customer?.phone?.includes(search) ||
        order.customer?.city
          ?.toLowerCase()
          .includes(search.toLowerCase())
    );

    setFilteredOrders(filtered);
  };

  // ✅ Mark as Shipped
  const markAsShipped = async (id: string) => {
  await fetch(`/api/admin/orders/${id}`, {
    method: "PATCH",
  });

  setFilteredOrders((prev) =>
    prev.map((order) =>
      order._id === id ? { ...order, status: "Shipped" } : order
    )
  );
};


  // ✅ Delete Order
  const deleteOrder = async (id: string) => {
  await fetch(`/api/admin/orders/${id}`, {
    method: "DELETE",
  });

  setFilteredOrders((prev) =>
    prev.filter((order) => order._id !== id)
  );
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
      <h1 className="text-3xl font-bold mb-6">
        🧑‍💼 Admin – Orders
      </h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by name, phone, city..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        className="w-full bg-slate-800 px-5 py-4 rounded-xl mb-6 outline-none"
      />

      <div className="space-y-6">
        {filteredOrders.map((order) => (
          <div
            key={order._id}
            className="bg-slate-900 rounded-2xl p-6 shadow-lg"
          >
            <div className="flex justify-between">
              {/* LEFT SIDE */}
              <div>
  <p className="font-semibold text-lg">
    {order.customer?.name}
  </p>

  <p className="text-gray-400 text-sm">
    📞 {order.customer?.phone}
  </p>

  <p className="text-gray-400 text-sm">
    🏠 {order.customer?.address}
  </p>

  <p className="text-gray-400 text-sm">
    📍 {order.customer?.city} - {order.customer?.pincode}
  </p>
</div>


              {/* RIGHT SIDE */}
              <div className="text-right">
                <p className="text-red-500 font-bold text-xl">
                  ₹{order.total}
                </p>
                <p className="text-yellow-400 mb-3">
                  {order.status}
                </p>

                <div className="flex gap-3 justify-end">
                  {order.status === "Pending" && (
                    <button
                      onClick={() =>
                        markAsShipped(order._id)
                      }
                      className="bg-green-600 px-4 py-2 rounded text-white text-sm"
                    >
                      Mark as Shipped
                    </button>
                  )}

                  <button
                    onClick={() =>
                      deleteOrder(order._id)
                    }
                    className="bg-red-600 px-4 py-2 rounded text-white text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
