"use client";
import { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useCart } from "../../context/CartContext";

/* ---------------- PRODUCTS DATA ---------------- */
const PRODUCTS: Record<string, any[]> = {
  sanitaryware: [
    {
      id: "1",
      name: "Aquiline",
      price: 2850,
      img: "/products/Aquiline.png",
      type: "closet",
    },
    {
      id: "2",
      name: "Inslim C8935",
      price: 3200,
      img: "/products/Inslim1.png",
      type: "closet",
    },
    {
      id: "3",
      name: "Inslim C8905",
      price: 1850,
      img: "/products/Inslim2.png",
      type: "closet",
    },
    {
      id: "4",
      name: "Reeve",
      price: 3200,
      img: "/products/Reeve.png",
      type: "closet",
    },
    {
      id: "5",
      name: "Zest",
      price: 3200,
      img: "/products/Zest.png",
      type: "closet",
    },
    {
      id: "6",
      name: "Atlas",
      price: 3200,
      img: "/products/Atlas.png",
      type: "closet",
    },
    {
      id: "7",
      name: "Viva",
      price: 3200,
      img: "/products/Visa.png",
      type: "closet",
    },
    {
      id: "8",
      name: "Prime Plus",
      price: 3200,
      img: "/products/PrimePlus.png",
      type: "closet",
    },
    {
      id: "9",
      name: "Canvas",
      price: 3200,
      img: "/products/Canvas.png",
      type: "closet",
    },
    {
      id: "10",
      name: "Millenia",
      price: 3200,
      img: "/products/Millenia.png",
      type: "closet",
    },
    {
      id: "11",
      name: "Marvel",
      price: 3200,
      img: "/products/Marvel.png",
      type: "closet",
    },
    {
      id: "12",
      name: "Vista",
      price: 2200,
      img: "/products/Vista.png",
      type: "closet",
    },
    {
      id: "13",
      name: "Apex",
      price: 3200,
      img: "/products/Apex.png",
      type: "closet",
    },
    {
      id: "14",
      name: "Ovalo",
      price: 3200,
      img: "/products/Ovalo.png",
      type: "closet",
    },
    {
      id: "15",
      name: "Crystal",
      price: 3200,
      img: "/products/Crystal.png",
      type: "closet",
    },
    {
      id: "16",
      name: "Opal",
      price: 3200,
      img: "/products/Opal.png",
      type: "closet",
    },
    {
      id: "17",
      name: "Jeta",
      price: 3200,
      img: "/products/Jeta.png",
      type: "closet",
    },
    {
      id: "18",
      name: "Honor",
      price: 3200,
      img: "/products/Honor.png",
      type: "closet",
    },
    {
      id: "19",
      name: "Brezza",
      price: 3200,
      img: "/products/Brezza.png",
      type: "closet",
    },
    {
      id: "20",
      name: "Aster",
      price: 3200,
      img: "/products/Aster.png",
      type: "closet",
    },
    {
      id: "21",
      name: "Claret",
      price: 3200,
      img: "/products/Claret.png",
      type: "closet",
    },
    {
      id: "22",
      name: "Prime",
      price: 3200,
      img: "/products/Prime.png",
      type: "closet",
    },
    {
      id: "23",
      name: "Jupiter",
      price: 3200,
      img: "/products/Jupiter.png",
      type: "closet",
    },
    {
      id: "24",
      name: "Aura",
      price: 3200,
      img: "/products/Aura.png",
      type: "closet",
    },
    {
      id: "25",
      name: "Sutra",
      price: 3200,
      img: "/products/Sutra.png",
      type: "closet",
    },
    {
      id: "26",
      name: "Peri",
      price: 3200,
      img: "/products/Peri.png",
      type: "closet",
    },
    {
      id: "27",
      name: "Tiger",
      price: 3200,
      img: "/products/Tiger.png",
      type: "closet",
    },
    {
      id: "28",
      name: "Delta",
      price: 3200,
      img: "/products/Delta.png",
      type: "closet",
    },
    {
      id: "29",
      name: "Peri Nxt",
      price: 3200,
      img: "/products/PeriNxt.png",
      type: "closet",
    },
    {
      id: "30",
      name: "Crown Nxt",
      price: 3200,
      img: "/products/CrownNxt.png",
      type: "closet",
    },
    {
      id: "31",
      name: "Uno",
      price: 3200,
      img: "/products/Uno.png",
      type: "closet",
    },
    {
      id: "32",
      name: "Crown",
      price: 3200,
      img: "/products/Crown.png",
      type: "closet",
    },
    {
      id: "33",
      name: "Pluto",
      price: 3200,
      img: "/products/Pluto.png",
      type: "closet",
    },
    {
      id: "34",
      name: "Alpha",
      price: 3200,
      img: "/products/Alpha.png",
      type: "closet",
    },
    {
      id: "35",
      name: "Gamma",
      price: 3200,
      img: "/products/Gamma.png",
      type: "closet",
    },
    {
      id: "36",
      name: "Brive",
      price: 3200,
      img: "/products/Brive.png",
      type: "closet",
    },
  ],
};

export default function CategoryPage() {
 const params = useParams();
const slug =
  typeof params.slug === "string" ? params.slug : params.slug?.[0] ?? "";

  const router = useRouter();
  const { addToCart } = useCart();
    const [search, setSearch] = useState("");
  //const [activeType, setActiveType] =
    //useState<"all" | "closet" | "washbasin">("all");
  const [priceFilter, setPriceFilter] = useState("all");


  const products = PRODUCTS[slug as string] || [];
    const filteredProducts = products.filter((product) => {
    // 🔍 search
    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    // 🧱 category
   const matchType = true;


    // 💰 price
    let matchPrice = true;
    if (priceFilter === "below2500") matchPrice = product.price < 2500;
    if (priceFilter === "2500to3000")
      matchPrice = product.price >= 2500 && product.price <= 3000;
    if (priceFilter === "above3000") matchPrice = product.price > 3000;

    return matchSearch && matchType && matchPrice;
  });


  return (
    <main className="min-h-screen bg-white">

      {/* ================= TOP BAR ================= */}
      <div className="bg-gradient-to-br from-black via-gray-900 to-black py-10">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

          {/* LEFT : BACK */}
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-full border border-white/20 hover:bg-gray-700 transition"
          >
            ← Back to Home
          </button>

          {/* RIGHT : CART */}
          <Link
            href="/cart"
            className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-full border border-white/20 hover:bg-gray-700 transition"
          >
            🛒 Cart
          </Link>
        </div>

        {/* TITLE */}
        <div className="text-center mt-10">
          <h1 className="text-5xl font-extrabold text-red-600 capitalize">
            {slug}
          </h1>
          <p className="text-gray-300 mt-4">
            Premium quality products from trusted brands
          </p>
        </div>
      </div>

{/* SEARCH + FILTER */}
<div className="max-w-7xl mx-auto px-6 mt-[-40px] mb-16">
  <div className="flex items-center gap-4 bg-gray-700/60 backdrop-blur-lg p-4 rounded-2xl border border-white/10">
    
    {/* SEARCH */}
    <input
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search sanitaryware products..."
      className="flex-1 px-6 py-4 rounded-xl bg-gray-600 text-white outline-none placeholder-gray-300"
    />

    {/* PRICE FILTER */}
    <select
      value={priceFilter}
      onChange={(e) => setPriceFilter(e.target.value)}
      className="px-6 py-4 rounded-xl bg-gray-600 text-white outline-none"
    >
      <option value="all">All Prices</option>
      <option value="below2500">Below ₹2500</option>
      <option value="2500to3000">₹2500 – ₹3000</option>
      <option value="above3000">Above ₹3000</option>
    </select>

  </div>
</div>

      {/* ================= PRODUCTS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
  <div
    key={slug}  
    className="grid md:grid-cols-3 gap-12"
  >

{filteredProducts.map((product) => (
  <motion.div
    key={`${slug}-${product.id}`}
    whileHover={{ y: -8 }}
    className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-6 shadow-2xl"
  >

              {/* IMAGE */}
              <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-900 rounded-xl flex items-center justify-center mb-6">
                <img
                  src={product.img}
                  alt={product.name}
                  className="max-h-full object-contain"
                />
              </div>

              {/* NAME */}
              <h3 className="text-xl font-semibold mb-2">
                {product.name}
              </h3>

              {/* PRICE */}
              <p className="text-red-500 font-bold mb-6">
                ₹{product.price} <span className="text-gray-400">/ unit</span>
              </p>

              {/* BUTTONS */}
              <div className="flex gap-4">
                <Link
                  href={`/product/${product.id}`}
                  className="flex-1 text-center bg-red-600 py-3 rounded-full hover:bg-red-700 transition"
                >
                  View Product
                </Link>

                <button
                  onClick={() => addToCart(product)}
                  className="flex-1 bg-gray-600 py-3 rounded-full hover:bg-gray-500 transition"
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}

        </div>
      </section>
    </main>
  );
}
