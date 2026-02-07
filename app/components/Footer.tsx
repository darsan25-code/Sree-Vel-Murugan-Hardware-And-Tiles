"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#1b1d21] to-[#111214] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">

        {/* BRAND */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center text-white font-bold text-xl">
              SV
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg">
                Sree Vel Murugan
              </h3>
              <p className="text-sm text-gray-400">Hardware & Tiles</p>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-gray-400">
            Your trusted partner for premium hardware, tiles, and sanitaryware
            in Porur, Chennai.
          </p>

          <div className="flex gap-3 mt-6">
            {["f", "ig", "in"].map((x) => (
              <div
                key={x}
                className="w-10 h-10 rounded-lg border border-white/10
                           flex items-center justify-center hover:bg-white/10 cursor-pointer"
              >
                {x}
              </div>
            ))}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/brands" className="hover:text-white">Brands</Link></li>
            <li><Link href="/products" className="hover:text-white">Products</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* PRODUCTS */}
        <div>
          <h4 className="text-white font-semibold mb-4">Our Products</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2 items-center">
              <span className="text-red-500">•</span> Pipes & Fittings
            </li>
            <li className="flex gap-2 items-center">
              <span className="text-red-500">•</span> Floor & Wall Tiles
            </li>
            <li className="flex gap-2 items-center">
              <span className="text-red-500">•</span> Bathroom Accessories
            </li>
            <li className="flex gap-2 items-center">
              <span className="text-red-500">•</span> Sanitaryware
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li>📍 No. 143, Kundrathur Main Road<br />Porur, Chennai – 600116</li>
            <li>📞 +91 73052 74926</li>
            <li>✉️ sreevelmuruganhardwaretiles@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
          <p>© 2026 Sree Vel Murugan Hardware & Tiles. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
      <a
  href="https://wa.me/917305274926"
  target="_blank"
  className="fixed bottom-6 right-6 w-14 h-14 bg-green-500
             rounded-full flex items-center justify-center
             text-white text-2xl shadow-2xl hover:scale-105 transition"
>
  💬
</a>
    </footer>
  );
}
