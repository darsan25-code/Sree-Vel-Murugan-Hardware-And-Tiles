"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");

  const login = () => {
    if (password === "admin123") {
      localStorage.setItem("admin-auth", "true");
      router.push("/admin");
    } else {
      alert("Wrong password ❌");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-slate-900 p-8 rounded-3xl w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Admin Login
        </h1>

        <input
          type="password"
          placeholder="Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-slate-800 px-5 py-3 rounded-xl outline-none mb-6"
        />

        <button
          onClick={login}
          className="bg-red-600 w-full py-3 rounded-full font-semibold"
        >
          Login
        </button>
      </div>
    </main>
  );
}
