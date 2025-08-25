import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bg from "../../assets/images/bg.jpg";
import axios from "axios";

export default function LoginPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ Make async so we can use await
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // ✅ Use axios (simpler)
      const res = await axios.post("http://localhost:5000/api/login", formData);

      // Save token to localStorage
      localStorage.setItem("token", res.data.token);

      console.log("✅ Logged in, token saved:", res.data.token);

      // Redirect after login
      navigate("/admin/dashboard");
    } catch (err: any) {
      setError(err.response?.data?.message || "Login failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image */}
      <img
        src={bg}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full px-10 py-20 gap-10 min-h-screen">
        {/* Left Side Welcome Text */}
        <div className="text-gray-700 max-w-lg">
          <h1 className="text-4xl mb-4">
            Welcome Back to{" "}
            <span className="text-[#1D1D99] font-bold">Codedrill Infotech</span>
          </h1>
          <div className="text-lg text-black text-center font-medium flex justify-center">
            Please login to your account
          </div>
          <div className="flex justify-center mt-3">
            <div className="border-t-3 w-40"></div>
          </div>
        </div>

        {/* Right Side Login Form */}
        <div className="backdrop-blur-md bg-white/5 border border-slate-200 shadow-xl rounded-xl w-full max-w-md p-6 ring-1 ring-black/5">
          <h2 className="text-xl font-bold mb-4 text-black">Login</h2>

          <form onSubmit={handleSubmit} className="space-y-4 text-black">
            <div>
              <label className="block text-sm mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 rounded-lg bg-white/20 border border-black/30 text-black placeholder:text-black/70"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 rounded-lg bg-white/20 border border-black/30 text-black placeholder:text-black/70"
                placeholder="Enter your password"
                required
              />
            </div>

            {error && (
              <p className="text-red-600 text-sm font-medium">{error}</p>
            )}

            <div className="pt-4 flex justify-between items-center">
              <button
                type="submit"
                disabled={loading}
                className="bg-[#1D1D99] hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg w-full"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>

            <div className="text-center text-sm font-semibold text-slate-600">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="underline text-[#1D1D99] cursor-pointer font-bold"
              >
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
