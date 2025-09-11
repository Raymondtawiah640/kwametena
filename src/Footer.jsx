import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-blue-400">E-Learning</h2>
          <p className="mt-2 text-sm">
            Empowering students with online learning resources anytime, anywhere.
          </p>
        </div>

        {/* Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/courses" className="hover:text-blue-400 transition-colors">Courses</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-400 transition-colors">About</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-white">Contact</h3>
          <p className="mt-2 text-sm">Email: support@elearning.com</p>
          <p className="mt-1 text-sm">Phone: +123 456 7890</p>
          <p className="mt-1 text-sm">Address: Accra, Ghana</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} E-Learning. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
