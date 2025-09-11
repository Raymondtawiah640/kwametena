import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaUserPlus, FaSignInAlt, FaKey } from "react-icons/fa";
import "./styles/Auth.css";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="relative w-full max-w-4xl bg-white rounded-xl overflow-hidden ring-animation">
        {/* Forms wrapper (handles sliding animation) */}
        <div
          className={`flex w-[200%] transition-transform duration-700 ease-in-out ${
            isLogin ? "translate-x-0" : "-translate-x-1/2"
          }`}
        >
          {/* Login Form */}
          <div className="w-1/2 p-10 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Login</h2>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="p-3 border border-gray-300 rounded-lg"
              />
              <input
                type="password"
                placeholder="Password"
                className="p-3 border border-gray-300 rounded-lg"
              />

              {/* Forgot Password */}
              <button
                type="button"
                className="text-blue-600 text-sm font-semibold hover:underline flex items-center self-end"
                onClick={() => alert("Redirect to password reset page")}
              >
                <FaKey className="mr-1" /> Forgot Password?
              </button>

              <button className="p-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center">
                <FaSignInAlt className="mr-2" /> Login
              </button>
            </form>

            {/* Google Login */}
            <button
              className="mt-4 flex items-center justify-center p-3 border border-gray-300 rounded-lg hover:shadow-lg transition"
              onClick={() => alert("Google login clicked!")}
            >
              <FcGoogle className="w-6 h-6 mr-2" />
              Sign in with Google
            </button>

            <p className="mt-4 text-gray-600 flex items-center">
              Don’t have an account?
              <button
                className="text-blue-600 font-bold hover:underline flex items-center ml-2"
                onClick={() => setIsLogin(false)}
              >
                <FaUserPlus className="mr-1" /> Sign Up
              </button>
            </p>
          </div>

          {/* Signup Form */}
          <div className="w-1/2 p-10 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Sign Up</h2>
            <form className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="p-3 border border-gray-300 rounded-lg"
              />
              <input
                type="email"
                placeholder="Email"
                className="p-3 border border-gray-300 rounded-lg"
              />
              <input
                type="password"
                placeholder="Password"
                className="p-3 border border-gray-300 rounded-lg"
              />
              <button className="p-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center">
                <FaUserPlus className="mr-2" /> Sign Up
              </button>
            </form>

            <p className="mt-4 text-gray-600 flex items-center">
              Already have an account?
              <button
                className="text-blue-600 font-bold hover:underline flex items-center ml-2"
                onClick={() => setIsLogin(true)}
              >
                <FaSignInAlt className="mr-1" /> Login
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
