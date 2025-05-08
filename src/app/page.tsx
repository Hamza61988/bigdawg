'use client'
import { useRouter } from 'next/navigation';


import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const router = useRouter();


  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");
  
    try {
      const res = await fetch("api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await res.json();
  
      if (res.ok) {
        // Store the user data (for example, user name)
        localStorage.setItem('user', JSON.stringify({ name: email })); // You can also pass the real user data here
  
        setMessage("✅ Login successful!");
        router.push("/pages/dashbaord"); // ✅ Redirect on success
      } else {
        setMessage(`❌ ${data.error}`);
      }
    } catch (err) {
      setMessage("❌ Failed to connect to server.");
    }
  };
  

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      <div className="w-full flex items-center justify-center p-10">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8">
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white">
                <i className="fas fa-lock text-2xl"></i>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
              Login
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Enter your credentials to continue
            </p>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  placeholder="Username"
                  required
                />
              </div>

              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  placeholder="Password"
                  required
                />
              </div>

              {message && (
                <div className="text-center text-sm text-red-600">{message}</div>
              )}

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 px-4 rounded-lg font-semibold hover:opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400"
              >
                Sign In
              </button>
            </form>
          </div>


          <div className='text-center'>
            <div>
              <h2>Username: hamza</h2>
              <h2>Password: 12345678</h2>
            </div>
          </div>

          <div className="bg-gray-50 px-8 py-4 text-center text-sm text-gray-600">
            By continuing, you agree to our{" "}
            <a href="#" className="text-indigo-600 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-indigo-600 hover:underline">
              Privacy Policy
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  );
}
