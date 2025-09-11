import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaEnvelope, FaSignInAlt, FaBook } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

 const links = [
  { to: "/", label: "Home", icon: <FaHome className="inline mr-2" /> },
  { to: "/about", label: "About", icon: <FaInfoCircle className="inline mr-2" /> },
  { to: "/contact", label: "Contact", icon: <FaEnvelope className="inline mr-2" /> },
  { to: "/auth", label: "Login / Sign Up", icon: <FaSignInAlt className="inline mr-2" /> },
  { to: "/courses", label: "Courses", icon: <FaBook className="inline mr-2" /> },
];

  return (
    <nav className="bg-gray-900 text-white relative z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-400">E-Learning</div>

        {/* Desktop Menu (text only) */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/about" className="hover:text-blue-400">About</Link>
          <Link to="/courses" className="hover:text-blue-400">Courses</Link>
          <Link to="/contact" className="hover:text-blue-400">Contact</Link>
          <Link to="/auth" className="hover:text-blue-400">Login / Sign Up</Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Mobile Vertical Menu with icons */}
      <div
        className={`fixed top-0 right-0 w-1/2 h-full bg-gray-900 text-white z-50 transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-white text-2xl font-bold focus:outline-none"
          onClick={() => setIsOpen(false)}
        >
          &times;
        </button>

        {/* Adjusted links container */}
        <div className="flex flex-col items-center space-y-6 p-6 mt-[-10px]">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-lg hover:text-blue-400 flex items-center"
              onClick={() => setIsOpen(false)}
            >
              {link.icon} {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
