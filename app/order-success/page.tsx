"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function OrderSuccessPage() {
  const router = useRouter();

  // ⏱ Auto redirect after 5 sec
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center px-6">
      <div className="bg-slate-900 rounded-3xl p-10 max-w-md w-full text-center shadow-2xl">
        <div className="text-5xl mb-4">✅</div>

        <h1 className="text-3xl font-bold mb-4">
          Order Placed Successfully!
        </h1>

        <p className="text-gray-400 mb-8">
          Thank you for shopping with  
          <br />
          <span className="font-semibold text-white">
            Sree Vel Murugan Hardware & Tiles
          </span>
        </p>

        <div className="space-y-4">
          <Link
            href="/my-orders"
            className="block bg-red-600 hover:bg-red-700 py-3 rounded-full font-semibold"
          >
            View My Orders
          </Link>

          <Link
            href="/"
            className="block bg-gray-700 hover:bg-gray-600 py-3 rounded-full font-semibold"
          >
            Back to Home
          </Link>
        </div>

        <p className="text-xs text-gray-500 mt-6">
          Redirecting to home in 5 seconds...
        </p>
      </div>
    </main>
  );
}
