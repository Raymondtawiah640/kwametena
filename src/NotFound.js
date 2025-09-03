import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="savanna-404">
      <div className="savanna-content">
        <img
          src="/images/savanna-elephant.png"
          alt="Lost Elephant"
          className="savanna-image"
        />
        <h1>Lost in the Savanna</h1>
        <p>Oops! You wandered off the learning trail. This page doesn't exist.</p>
        <Link to="/" className="btn-primary">
          🏠 Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
