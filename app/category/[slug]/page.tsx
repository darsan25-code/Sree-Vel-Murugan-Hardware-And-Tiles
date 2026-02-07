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
      price: 17250,
      img: "/products/Aquiline.png",
      type: "closet",
    },
    {
      id: "2",
      name: "Inslim C8935",
      price: 16865,
      img: "/products/Inslim1.png",
      type: "closet",
    },
    {
      id: "3",
      name: "Inslim C8905",
      price: 16865,
      img: "/products/Inslim2.png",
      type: "closet",
    },
    {
      id: "4",
      name: "Reeve",
      price: 14181,
      img: "/products/Reeve.png",
      type: "closet",
    },
    {
      id: "5",
      name: "Zest",
      price: 13030,
      img: "/products/Zest.png",
      type: "closet",
    },
    {
      id: "6",
      name: "Atlas",
      price: 13030,
      img: "/products/Atlas.png",
      type: "closet",
    },
    {
      id: "7",
      name: "Viva",
      price: 13030,
      img: "/products/Visa.png",
      type: "closet",
    },
    {
      id: "8",
      name: "Prime Plus",
      price: 12647,
      img: "/products/PrimePlus.png",
      type: "closet",
    },
    {
      id: "9",
      name: "Canvas",
      price: 12263,
      img: "/products/Canvas.png",
      type: "closet",
    },
    {
      id: "10",
      name: "Millenia",
      price: 12263,
      img: "/products/Millenia.png",
      type: "closet",
    },
    {
      id: "11",
      name: "Marvel",
      price: 11496,
      img: "/products/Marvel.png",
      type: "closet",
    },
    {
      id: "12",
      name: "Vista",
      price: 11496,
      img: "/products/Vista.png",
      type: "closet",
    },
    {
      id: "13",
      name: "Apex",
      price: 11113,
      img: "/products/Apex.png",
      type: "closet",
    },
    {
      id: "14",
      name: "Ovalo",
      price: 11113,
      img: "/products/Ovalo.png",
      type: "closet",
    },
    {
      id: "15",
      name: "Crystal",
      price: 11113,
      img: "/products/Crystal.png",
      type: "closet",
    },
    {
      id: "16",
      name: "Opal",
      price: 11113,
      img: "/products/Opal.png",
      type: "closet",
    },
    {
      id: "17",
      name: "Jeta",
      price: 11113,
      img: "/products/Jeta.png",
      type: "closet",
    },
    {
      id: "18",
      name: "Honor",
      price: 10730,
      img: "/products/Honor.png",
      type: "closet",
    },
    {
      id: "19",
      name: "Brezza",
      price: 10730,
      img: "/products/Brezza.png",
      type: "closet",
    },
    {
      id: "20",
      name: "Aster",
      price: 10730,
      img: "/products/Aster.png",
      type: "closet",
    },
    {
      id: "21",
      name: "Claret",
      price: 10346,
      img: "/products/Claret.png",
      type: "closet",
    },
    {
      id: "22",
      name: "Prime",
      price: 10346,
      img: "/products/Prime.png",
      type: "closet",
    },
    {
      id: "23",
      name: "Jupiter",
      price: 10346,
      img: "/products/Jupiter.png",
      type: "closet",
    },
    {
      id: "24",
      name: "Aura",
      price: 9962,
      img: "/products/Aura.png",
      type: "closet",
    },
    {
      id: "25",
      name: "Sutra",
      price: 9962,
      img: "/products/Sutra.png",
      type: "closet",
    },
    {
      id: "26",
      name: "Peri",
      price: 9579,
      img: "/products/Peri.png",
      type: "closet",
    },
    {
      id: "27",
      name: "Tiger",
      price: 9579,
      img: "/products/Tiger.png",
      type: "closet",
    },
    {
      id: "28",
      name: "Delta",
      price: 9579,
      img: "/products/Delta.png",
      type: "closet",
    },
    {
      id: "29",
      name: "Peri Nxt",
      price: 9195,
      img: "/products/PeriNxt.png",
      type: "closet",
    },
    {
      id: "30",
      name: "Crown Nxt",
      price: 9195,
      img: "/products/CrownNxt.png",
      type: "closet",
    },
    {
      id: "31",
      name: "Uno",
      price: 9195,
      img: "/products/Uno.png",
      type: "closet",
    },
    {
      id: "32",
      name: "Crown",
      price: 9195,
      img: "/products/Crown.png",
      type: "closet",
    },
    {
      id: "33",
      name: "Pluto",
      price: 8812,
      img: "/products/Pluto.png",
      type: "closet",
    },
    {
      id: "34",
      name: "Alpha",
      price: 8428,
      img: "/products/Alpha.png",
      type: "closet",
    },
    {
      id: "35",
      name: "Gamma",
      price: 8428,
      img: "/products/Gamma.png",
      type: "closet",
    },
    {
      id: "36",
      name: "Brive",
      price: 8244,
      img: "/products/Brive.png",
      type: "closet",
    },
    {
  id: "washbasin-1",
  name: "Rombi",
  price: 5292,
  img: "/products/Rombi.png",
  type: "washbasin",
},
    {
  id: "washbasin-2",
  name: "Imperial Neo 600 C8916",
  price: 4678,
  img: "/products/Imperial1.png",
  type: "washbasin",
},
    {
  id: "washbasin-3",
  name: "Imperial Neo 600 C8915",
  price: 4602,
  img: "/products/Imperial2.png",
  type: "washbasin",
},
{
  id: "washbasin-4",
  name: "Quad 560",
  price: 4371,
  img: "/products/Quad560.png",
  type: "washbasin",
},
{
  id: "washbasin-5",
  name: "Refine",
  price: 4371,
  img: "/products/Refine.png",
  type: "washbasin",
},
{
  id: "washbasin-6",
  name: "Camry",
  price: 4218,
  img: "/products/Camry.png",
  type: "washbasin",
},
{
  id: "washbasin-7",
  name: "Imperial Neo 500 C8914",
  price: 4295,
  img: "/products/Imperial3.png",
  type: "washbasin",
},
{
  id: "washbasin-8",
  name: "Imperial Neo 500 C8913",
  price: 4218,
  img: "/products/Imperial4.png",
  type: "washbasin",
},
{
  id: "washbasin-9",
  name: "Zest Plus",
  price: 4065,
  img: "/products/ZestPlus.png",
  type: "washbasin",
},
{
  id: "washbasin-10",
  name: "Vibgyor",
  price: 4065,
  img: "/products/Vibgyor.png",
  type: "washbasin",
},
{
  id: "washbasin-11",
  name: "Jordon",
  price: 3911,
  img: "/products/Jordon.png",
  type: "washbasin",
},
{
  id: "washbasin-12",
  name: "Pearl",
  price: 4387,
  img: "/products/Pearl.png",
  type: "washbasin",
},
{
  id: "washbasin-13",
  name: "Pristine IV",
  price: 3451,
  img: "/products/PristineIV.png",
  type: "washbasin",
},
{
  id: "washbasin-14",
  name: "Luxe",
  price: 3451,
  img: "/products/Luxe.png",
  type: "washbasin",
},
{
  id: "washbasin-15",
  name: "Elegance",
  price: 3298,
  img: "/products/Elegance.png",
  type: "washbasin",
},
{
  id: "washbasin-16",
  name: "Flair",
  price: 3144,
  img: "/products/Flair.png",
  type: "washbasin",
},
{
  id: "washbasin-17",
  name: "Cascade NXT",
  price: 2914,
  img: "/products/Cascade.png",
  type: "washbasin",
},
{
  id: "washbasin-18",
  name: "Clara",
  price: 2914,
  img: "/products/Clara.png",
  type: "washbasin",
},
{
  id: "washbasin-19",
  name: "Resolute Neo",
  price: 2684,
  img: "/products/Resolute.png",
  type: "washbasin",
},
{
  id: "washbasin-20",
  name: "Imperial Neo 400 C8912",
  price: 2301,
  img: "/products/Imperial5.png",
  type: "washbasin",
},
{
  id: "washbasin-21",
  name: "Imperial Neo 400 C89I1",
  price: 2224,
  img: "/products/Imperial6.png",
  type: "washbasin",
},
{
  id: "washbasin-22",
  name: "Aqua",
  price: 2224,
  img: "/products/Aqua.png",
  type: "washbasin",
},
{
  id: "washbasin-23",
  name: "Vallure",
  price: 1840,
  img: "/products/Vallure.png",
  type: "washbasin",
},
{
  id: "washbasin-24",
  name: "Royal",
  price: 1150,
  img: "/products/Royal.png",
  type: "washbasin",
},
{
  id: "urinal-1",
  name: "Integrated N",
  price: 15531,
  img: "/products/Integrated.png",
  type: "urinal",
},
{
  id: "urinal-2",
  name: "Sensurn",
  price: 11159,
  img: "/products/Sensurn.png",
  type: "urinal",
},
{
  id: "urinal-3",
  name: "Craft",
  price: 8437,
  img: "/products/Craft.png",
  type: "urinal",
},
{
  id: "urinal-4",
  name: "Whiz",
  price: 7163,
  img: "/products/Whiz.png",
  type: "urinal",
},
{
  id: "urinal-5",
  name: "New Magnum",
  price: 5905,
  img: "/products/New.png",
  type: "urinal",
},
{
  id: "urinal-6",
  name: "Luna",
  price: 2147,
  img: "/products/Luna.png",
  type: "urinal",
},
{
  id: "urinal-7",
  name: "Niagara N",
  price: 2108,
  img: "/products/Niagara.png",
  type: "urinal",
},
{
  id: "urinal-8",
  name: "Flat Back Urinal",
  price: 1725,
  img: "/products/Flat.png",
  type: "urinal",
},
{
  id: "urinal-9",
  name: "Squatting",
  price: 2031,
  img: "/products/Squatting.png",
  type: "urinal",
},


  ],
};

export default function CategoryPage() {
 const params = useParams();
const slug =
  typeof params.slug === "string" ? params.slug : params.slug?.[0] ?? "";

  const router = useRouter();
const { addToCart, cartItems } = useCart();
  const [toast, setToast] = useState<string | null>(null);
    const [search, setSearch] = useState("");
  const [activeType, setActiveType] =
  useState<"all" | "closet" | "washbasin" | "urinal">("all");

  const [priceFilter, setPriceFilter] = useState("all");

  // ✅ PRICE FILTER OPTIONS BASED ON CATEGORY
const PRICE_OPTIONS: Record<
  "closet" | "washbasin" | "urinal",
  { value: string; label: string }[]
> = {
  closet: [
    { value: "all", label: "All Prices" },
    { value: "below9500", label: "Below ₹9,500" },
    { value: "9500to13000", label: "₹9,500 – ₹13,000" },
    { value: "above13000", label: "Above ₹13,000" },
  ],
  washbasin: [
    { value: "all", label: "All Prices" },
    { value: "below2000", label: "Below ₹2,000" },
    { value: "2000to5000", label: "₹2,000 – ₹5,000" },
    { value: "above5000", label: "Above ₹5,000" },
  ],
  urinal: [
    { value: "all", label: "All Prices" },
    { value: "below3000", label: "Below ₹3,000" },
    { value: "3000to6000", label: "₹3,000 – ₹6,000" },
    { value: "above6000", label: "Above ₹6,000" },
  ],
};



  const products = PRODUCTS[slug as string] || [];
   const filteredProducts = [...products]   // 👈 CLONE
  .filter((product) => {
    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchType =
      activeType === "all" || product.type === activeType;

    let matchPrice = true;
    // 🟥 Closet price filter
if (activeType === "closet") {
  if (priceFilter === "below9500") matchPrice = product.price < 9500;
  if (priceFilter === "9500to13000")
    matchPrice = product.price >= 9500 && product.price <= 13000;
  if (priceFilter === "above13000") matchPrice = product.price > 13000;
}

// 🟩 Wash Basin price filter
if (activeType === "washbasin") {
  if (priceFilter === "below2000") matchPrice = product.price < 2000;
  if (priceFilter === "2000to5000")
    matchPrice = product.price >= 2000 && product.price <= 5000;
  if (priceFilter === "above5000") matchPrice = product.price > 5000;
}

// 🟦 Urinal price filter
if (activeType === "urinal") {
  if (priceFilter === "below3000") matchPrice = product.price < 3000;
  if (priceFilter === "3000to6000")
    matchPrice = product.price >= 3000 && product.price <= 6000;
  if (priceFilter === "above6000") matchPrice = product.price > 6000;
}
    return matchSearch && matchType && matchPrice;
  })
  .sort((a, b) => a.name.localeCompare(b.name));


 return (
  <>
    {toast && (
  <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50
                  bg-green-100 text-green-800 px-6 py-3
                  rounded-xl shadow-lg flex items-center gap-2">
    ✅ {toast}
  </div>
)}


<main className="min-h-screen bg-white">

  {/* TOAST MESSAGE */}
  {toast && (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50
                    bg-green-100 text-green-800 px-6 py-3
                    rounded-xl shadow-lg flex items-center gap-2">
      ✅ {toast}
    </div>
  )}


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
  className="relative flex items-center gap-2
             bg-gray-800 text-white px-6 py-3
             rounded-full border border-white/20
             hover:bg-gray-700 transition"
>
  🛒 Cart

  {cartItems.length > 0 && (
    <span
      className="absolute -top-2 -right-2
                 bg-red-600 text-white
                 text-xs w-6 h-6
                 flex items-center justify-center
                 rounded-full font-bold"
    >
      {cartItems.length}
    </span>
  )}
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

  {/* 🟥 Closets */}
  {activeType === "closet" && (
    <>
      <option value="below9500">Below ₹9,500</option>
      <option value="9500to13000">₹9,500 – ₹13,000</option>
      <option value="above13000">Above ₹13,000</option>
    </>
  )}

  {/* 🟩 Wash Basins */}
  {activeType === "washbasin" && (
    <>
      <option value="below2000">Below ₹2,000</option>
      <option value="2000to5000">₹2,000 – ₹5,000</option>
      <option value="above5000">Above ₹5,000</option>
    </>
  )}

  {/* 🟦 Urinals */}
  {activeType === "urinal" && (
    <>
      <option value="below3000">Below ₹3,000</option>
      <option value="3000to6000">₹3,000 – ₹6,000</option>
      <option value="above6000">Above ₹6,000</option>
    </>
  )}
</select>



  </div>
</div>

{/* CATEGORY TABS */}
<div className="flex justify-center gap-4 mb-16">
  <button
    onClick={() => {
      setActiveType("closet");
      setPriceFilter("all");
    }}
    className={`px-8 py-3 rounded-xl font-semibold transition ${
      activeType === "closet"
        ? "bg-red-600 text-white shadow-lg"
        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
    }`}
  >
    Closets ({products.filter((p) => p.type === "closet").length})
  </button>

  <button
    onClick={() => {
      setActiveType("washbasin");
      setPriceFilter("all");
    }}
    className={`px-8 py-3 rounded-xl font-semibold transition ${
      activeType === "washbasin"
        ? "bg-red-600 text-white shadow-lg"
        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
    }`}
  >
    Wash Basins ({products.filter((p) => p.type === "washbasin").length})
  </button>

  <button
    onClick={() => {
      setActiveType("urinal");
      setPriceFilter("all");
    }}
    className={`px-8 py-3 rounded-xl font-semibold transition ${
      activeType === "urinal"
        ? "bg-red-600 text-white shadow-lg"
        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
    }`}
  >
    Urinals ({products.filter((p) => p.type === "urinal").length})
  </button>
</div>


      {/* ================= PRODUCTS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
  <div className="grid md:grid-cols-3 gap-12">


{filteredProducts.map((product) => (
  <motion.div
key={`${product.type}-${product.id}`}
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
                <button
  onClick={() => {
    addToCart(product);      // 1️⃣ add to cart
    router.push("/cart");   // 2️⃣ go to cart
  }}
  className="flex-1 text-center bg-red-600 py-3 rounded-full
             hover:bg-red-700 transition font-semibold"
>
  Buy Now
</button>

                <button
                  onClick={() => {
  addToCart(product);
  setToast(`${product.name} added to cart`);
  setTimeout(() => setToast(null), 2500);
}}
className="flex-1 bg-gradient-to-r from-red-600 to-red-500
           py-3 rounded-full hover:from-red-700 hover:to-red-600
           transition font-semibold shadow-lg"
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}

        </div>
      </section>
        </main>
  </>
);
}

