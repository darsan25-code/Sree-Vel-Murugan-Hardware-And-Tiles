import type { Metadata } from "next";
import "./globals.css";
import ClientProviders from "./ClientProviders";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Sree Vel Murugan Hardware & Tiles",
  description: "Premium sanitaryware, tiles & hardware store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ClientProviders>
          <Navbar />
          {children}
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
