"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    if (!password) {
      alert("Enter password");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Login failed");
        setLoading(false);
        return;
      }

      router.push("/admin");
    } catch (error) {
      console.error(error);
      alert("Login error");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-black flex items-center justify-center text-white">
      <div className="bg-slate-900 p-10 rounded-3xl w-96 text-center">
        <h1 className="text-2xl font-bold mb-6">Admin Login</h1>

        <input
          type="password"
          placeholder="Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleLogin();
            }
          }}
          className="bg-slate-800 px-5 py-3 rounded-xl w-full mb-6 outline-none"
        />

        <button
          onClick={handleLogin}
          className="bg-red-600 w-full py-3 rounded-xl hover:bg-red-700 transition"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>
    </main>
  );
}
