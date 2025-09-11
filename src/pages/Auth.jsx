import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="relative w-full max-w-4xl bg-white rounded-xl shadow-xl overflow-hidden flex">

        {/* Slanted Divider */}
        <div className="absolute top-0 left-1/2 h-full w-1 bg-blue-700 transform -translate-x-1/2 rotate-6 z-10"></div>

        {/* Forms Container */}
        <div className="flex w-full relative">

          {/* Login Form */}
          <div
            className={`w-1/2 p-10 transition-all duration-500 ${
              isLogin ? "opacity-100 z-20 pointer-events-auto" : "opacity-50 z-10 pointer-events-none"
            }`}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Login</h2>
            <form className="flex flex-col space-y-4">
              <input type="email" placeholder="Email" className="p-3 border border-gray-300 rounded-lg"/>
              <input type="password" placeholder="Password" className="p-3 border border-gray-300 rounded-lg"/>
              <button className="p-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
                Login
              </button>
            </form>

            <button
              className="mt-4 flex items-center justify-center p-3 border border-gray-300 rounded-lg hover:shadow-lg transition"
              onClick={() => alert("Google login clicked!")}
            >
              <FcGoogle className="w-6 h-6 mr-2" />
              Sign in with Google
            </button>

            <p className="mt-4 text-gray-600">
              Don’t have an account?{" "}
              <button
                className="text-blue-600 font-bold hover:underline"
                onClick={() => setIsLogin(false)}
              >
                Sign Up
              </button>
            </p>
          </div>

          {/* Signup Form */}
          <div
            className={`w-1/2 p-10 transition-all duration-500 ${
              isLogin ? "opacity-50 z-10 pointer-events-none" : "opacity-100 z-20 pointer-events-auto"
            }`}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Sign Up</h2>
            <form className="flex flex-col space-y-4">
              <input type="text" placeholder="Full Name" className="p-3 border border-gray-300 rounded-lg"/>
              <input type="email" placeholder="Email" className="p-3 border border-gray-300 rounded-lg"/>
              <input type="password" placeholder="Password" className="p-3 border border-gray-300 rounded-lg"/>
              <button className="p-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
                Sign Up
              </button>
            </form>

            <p className="mt-4 text-gray-600">
              Already have an account?{" "}
              <button
                className="text-blue-600 font-bold hover:underline"
                onClick={() => setIsLogin(true)}
              >
                Login
              </button>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Auth;
