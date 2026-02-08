"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">

      {/* HERO – POSTER STYLE */}
      <section id="home" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 border border-red-200 px-4 py-1 rounded-full mb-6">
              🏅 Authorized Dealer
            </span>

            <h1 className="text-5xl font-extrabold leading-tight mb-6">
              <span className="text-yellow-500">SREE VEL MURUGAN</span><br />
              <span className="text-red-700">HARDWARE & TILES</span>
            </h1>

            <p className="text-lg text-gray-700 mb-4">
              Hardware • Tiles • Sanitaryware • Pipes & Fittings
            </p>

            <p className="flex items-center gap-2 text-gray-600 mb-8">
              📍 Premium Showroom in Porur, Chennai
            </p>

            <div className="flex flex-col gap-4 max-w-sm">
              <a
                href="tel:7305274926"
                className="flex justify-between items-center bg-red-600 text-white px-6 py-4 rounded-xl text-lg font-semibold shadow-lg hover:bg-red-700 transition"
              >
                📞 Call Us Now
                <span>73052 74926</span>
              </a>

              <a
                href="tel:9840461152"
                className="flex justify-between items-center border-2 border-red-600 text-red-700 px-6 py-4 rounded-xl text-lg font-semibold hover:bg-red-50 transition"
              >
                ☎ Alternate Number
                <span>98404 61152</span>
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <img
              src="/hero-banner.jpeg"
              alt="Sree Vel Murugan Hardware and Tiles"
              className="w-full max-w-md rounded-3xl shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/* TRUSTED BRANDS */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-500 mb-8">
            Trusted brands we deal with
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center text-lg font-semibold text-gray-600">
            <div>Parryware</div>
            <div>Finolex</div>
            <div>Jaguar</div>
            <div>Supreme</div>
            <div>KAG</div>
          </div>
        </div>
      </section>
      {/* CATEGORIES */}
<section id="categories" className="py-24 bg-white scroll-mt-28">
    <div className="max-w-7xl mx-auto px-6">
    <h3 className="text-3xl font-bold text-center text-blue-800 mb-14">
      Shop by Category
    </h3>

    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
      {[
        { title: "Sanitaryware", img: "/Sanitary.jpeg", slug: "sanitaryware" },
        { title: "Pipes & Fittings", img: "/pipes.png", slug: "pipes" },
        { title: "Tiles", img: "/tiles.jpeg", slug: "tiles" },
        {
          title: "Bathroom Accessories",
          img: "/BathroomAccessories.png",
          slug: "bathroom-accessories",
        },
      ].map((cat, i) => (
        <Link href={`/category/${cat.slug}`} key={i}>
          <motion.div
            whileHover={{ y: -10 }}
            className="w-full max-w-[220px] h-[320px] rounded-2xl overflow-hidden shadow-lg cursor-pointer group flex flex-col"
          >
            <div className="h-48 overflow-hidden flex-shrink-0">
              <img
                src={cat.img}
                alt={cat.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

              <div className="p-5 text-center bg-gray-50 flex-1 flex items-center justify-center">
              <h4 className="font-semibold text-lg text-gray-800">
                {cat.title}
              </h4>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  </div>
</section>


{/* CONTACT SECTION */}
<section
  id="contact"
  className="py-24 bg-white scroll-mt-28"
>
  <div className="max-w-4xl mx-auto px-6 text-center">

    <h3 className="text-3xl font-bold text-blue-800 mb-8">
      Contact Us
    </h3>

    <p className="text-gray-700 mb-6">
      Visit our showroom or call us for best quality hardware & tiles.
    </p>

    <div className="space-y-4 text-lg">
      <p>📍 No.143, Kundrathur Main Road, Porur, Chennai – 600116</p>
      <p>📞 <a href="tel:7305274926" className="text-red-600 font-semibold">73052 74926</a></p>
      <p>☎ <a href="tel:9840461152" className="text-red-600 font-semibold">98404 61152</a></p>
    </div>

  </div>
</section>


      {/* FOOTER */}
      <footer className="bg-blue-900 text-white py-16 text-center text-lg">
        © Sree Vel Murugan Hardware & Tiles – Porur, Chennai
      </footer>
      
      {/* WHATSAPP FLOATING BUTTON */}
<a
  href="https://wa.me/917305274926"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50"
>
  <img
    src="/whatsapp.png"
    alt="Chat on WhatsApp"
    className="w-16 h-16 rounded-full shadow-[0_0_30px_rgba(37,211,102,0.9)] hover:scale-110 transition"
  />
</a>


    </main>
  );
}
