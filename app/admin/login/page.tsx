"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "admin@sreevelmurugan.com",
        password: password,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      router.push("/admin");
    } else {
      alert("Wrong password ❌");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-slate-900 p-8 rounded-2xl w-80 text-white">
        <h1 className="text-xl font-bold mb-4 text-center">
          Admin Login
        </h1>

        <input
          type="password"
          placeholder="Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 rounded bg-slate-800 mb-4"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-red-600 py-2 rounded font-semibold"
        >
          Login
        </button>
      </div>
    </div>
  );
}
