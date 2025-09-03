import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Optional CSS file

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/images/tenalearn.png" alt="Tenalearn Logo" height="40" />
        <span>AnanseLab</span>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/subjects">Subjects</Link></li>
        <li><Link to="/tracks">Tracks</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
