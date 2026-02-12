"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-black text-gray-300">
      
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">

        {/* BRAND */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-red-600 text-white font-bold w-12 h-12 flex items-center justify-center rounded-xl">
              SV
            </div>
            <div>
              <h3 className="text-white font-semibold">
                Sree Vel Murugan
              </h3>
              <p className="text-sm text-gray-400">
                Hardware & Tiles
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-400 mb-6">
            Your trusted partner for premium hardware, tiles and sanitaryware
            in Porur, Chennai.
          </p>

          {/* SOCIAL LINKS */}
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/sree.velmurugan.71"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center
                         rounded-lg border border-white/20
                         hover:bg-blue-600 hover:text-white transition"
            >
              f
            </a>

            <a
              href="https://www.instagram.com/sree_velmurugan_?utm_source=qr&igsh=bnUxdnpyeDNqOTJ"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center
                         rounded-lg border border-white/20
                         hover:bg-pink-600 hover:text-white transition"
            >
              ig
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Quick Links
          </h4>

          <ul className="space-y-3 text-sm">
            <li>
              <a href="#home" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#shop" className="hover:text-white transition">
                Shop
              </a>
            </li>
            <li>
              <a href="#categories" className="hover:text-white transition">
                Categories
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* PRODUCTS */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Our Products
          </h4>

          <ul className="space-y-3 text-sm">
            <li>• Pipes & Fittings</li>
            <li>• Floor & Wall Tiles</li>
            <li>• Tap Collections</li>
            <li>• Sanitaryware</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div id="contact">
          <h4 className="text-white font-semibold mb-4">
            Contact Us
          </h4>

          <ul className="space-y-3 text-sm text-gray-400">
            <li>📍 No.143, Kundrathur Main Road, Porur, Chennai – 600116</li>
            <li>📞 +91 73052 74926</li>
            <li>✉ sreevelmuruganhardwaretiles@gmail.com</li>
          </ul>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-400">
        © 2026 Sree Vel Murugan Hardware & Tiles. All rights reserved.
      </div>
    </footer>
  );
}
