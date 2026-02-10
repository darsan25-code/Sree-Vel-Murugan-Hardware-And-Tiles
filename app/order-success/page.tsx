"use client";

import Link from "next/link";

export default function OrderSuccessPage() {
  return (
    <main
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black
                 flex items-center justify-center text-white px-4"
    >
      <div className="bg-slate-900 rounded-3xl p-10 shadow-2xl
                      max-w-md w-full text-center">

        <div className="text-6xl mb-4">✅</div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-green-500 mb-4">
          Order Placed Successfully
        </h1>

        <p className="text-gray-300 mb-6 leading-relaxed">
          Thank you for your order.  
          Our team will contact you shortly for confirmation.
        </p>

        <div className="space-y-3">
          <Link
            href="/"
            className="block bg-red-600 py-3 rounded-full
                       font-semibold hover:bg-red-700 transition"
          >
            Back to Home
          </Link>

          <Link
            href="/my-orders"
            className="block border border-white/20 py-3 rounded-full
                       font-semibold hover:bg-white/10 transition"
          >
            View My Orders
          </Link>
        </div>

        <div className="mt-6 text-sm text-gray-400">
          <p className="font-semibold text-white">
            Sree Vel Murugan Hardware & Tiles
          </p>
          <p>
            No.143, Kundrathur Main Road,  
            Porur, Chennai – 600116
          </p>
          <p className="mt-2">
            📞 73052 74926 &nbsp; | &nbsp; ☎ 98404 61152
          </p>
        </div>
      </div>
    </main>
  );
}
