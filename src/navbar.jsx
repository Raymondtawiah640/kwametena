import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaEnvelope,
  FaSignInAlt,
  FaBook,
  FaLifeRing,
  FaChalkboardTeacher,
  FaUsers,
  FaClipboardList,
  FaChevronDown,
} from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // mobile popup
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // desktop Orders dropdown
  const dropdownRef = useRef(null);

  // close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const links = [
    { to: "/", label: "Home", icon: <FaHome className="inline mr-2" /> },
    { to: "/about", label: "About", icon: <FaInfoCircle className="inline mr-2" /> },
    { to: "/courses", label: "Courses", icon: <FaBook className="inline mr-2" /> },
    { to: "/contact", label: "Contact", icon: <FaEnvelope className="inline mr-2" /> },
    { to: "/technicalSupport", label: "Technical Support", icon: <FaLifeRing className="inline mr-2" /> },
    { to: "/instructors", label: "Instructors", icon: <FaChalkboardTeacher className="inline mr-2" /> },
    { to: "/community", label: "Community", icon: <FaUsers className="inline mr-2" /> },
    { to: "/orders/history", label: "Order History", icon: <FaClipboardList className="inline mr-2" /> },
    { to: "/orders/pending", label: "Pending Orders", icon: <FaClipboardList className="inline mr-2" /> },
    { to: "/auth", label: "Login / Sign Up", icon: <FaSignInAlt className="inline mr-2" /> },
  ];

  return (
    <nav className="bg-gray-900 text-white relative z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-400">E-Learning</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/about" className="hover:text-blue-400">About</Link>
          <Link to="/courses" className="hover:text-blue-400">Courses</Link>
          <Link to="/contact" className="hover:text-blue-400">Contact</Link>
          <Link to="/technicalSupport" className="hover:text-blue-400">Support</Link>
          <Link to="/instructors" className="hover:text-blue-400">Instructors</Link>
          <Link to="/community" className="hover:text-blue-400">Community</Link>

          {/* Orders Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen((v) => !v)}
              className="hover:text-blue-400 flex items-center"
              aria-expanded={isDropdownOpen}
            >
              Orders <FaChevronDown className="ml-1" />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full mt-2 bg-gray-800 rounded-lg shadow-lg w-48 py-2">
                <Link
                  to="/orders/history"
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  Order History
                </Link>
                <Link
                  to="/orders/pending"
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  Pending Orders
                </Link>
              </div>
            )}
          </div>

          {/* Auth should always be the last item */}
          <Link to="/auth" className="hover:text-blue-400">Login / Sign Up</Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Overlay + Pop-up Menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 flex justify-center items-center md:hidden"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-gray-900 text-white rounded-2xl shadow-lg w-11/12 max-w-sm h-3/4 p-6 relative z-50 animate-fadeIn flex flex-col overflow-y-auto"
            onClick={(e) => e.stopPropagation()} // don't close when clicking inside popup
          >
            {/* Close Button */}
            <button
              className="absolute top-3 right-4 text-white text-2xl font-bold focus:outline-none"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              &times;
            </button>

            {/* Menu Content */}
            <div className="flex flex-col items-start space-y-4 mt-2">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="w-full text-left text-lg hover:text-blue-400 flex items-center py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.icon} <span className="ml-1">{link.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
