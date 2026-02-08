"use client";

import { useParams, useRouter } from "next/navigation";
import { useCart } from "../../context/CartContext";

export default function ProductPage() {
  const { id } = useParams();
  const router = useRouter();
  const { addToCart } = useCart();

  // 🔴 Temporary product (later real data connect pannalaam)
  const product = {
    id,
    name: "Product Name",
    price: 0,
    img: "/placeholder.png",
  };

  return (
    <main className="min-h-screen bg-white px-6 py-20">
      <div className="max-w-3xl mx-auto">

        <button
          onClick={() => router.back()}
          className="mb-6 text-blue-600 hover:underline"
        >
          ← Back
        </button>

        <div className="bg-gray-100 p-10 rounded-2xl shadow-lg text-center">
          <img
            src={product.img}
            alt={product.name}
            className="mx-auto h-64 object-contain mb-6"
          />

          <h1 className="text-3xl font-bold mb-4">
            {product.name}
          </h1>

          <p className="text-2xl text-red-600 font-semibold mb-6">
            ₹{product.price}
          </p>

          <button
            onClick={() => addToCart(product)}
            className="bg-red-600 text-white px-8 py-4 rounded-full hover:bg-red-700 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}
