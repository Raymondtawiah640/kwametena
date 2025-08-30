import React, { useState, useEffect } from "react";
import "./App.css";

function Home() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src="/images/tenalearn.png" alt="AI Boost" className="logo-img" />
          <span className="logo-text">TENALEARN</span>
        </div>
        <div className="hamburger" onClick={() => document.querySelector(".nav-links").classList.toggle("active")}>
          &#9776;
        </div>
        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#cta">Get Started</a></li>
          <li><a href="/study-packs" className="btn-enroll">Study Packs</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Learn anytime, anywhere.</h1>
            <p>Interactive courses and expert guidance at your fingertips.</p>
            <a href="#enroll" className="btn-primary">Enroll Now</a>
          </div>
          <div className="hero-image">
            <img src="/images/jhs.png" alt="AI Illustration" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="feature">
          <h3>Part-Time Study Tracks</h3>
          <p>Access to standard online classes and resources.</p>
          <a href="/study-packs" className="btn-primary">Go to Study Tracks</a>
        </div>
        <div className="feature">
          <h3>Full-Time Study Tracks</h3>
          <p>Includes interactive lessons, quizzes, and assignments with teacher support.</p>
          <a href="/study-packs" className="btn-primary">Go to Study Tracks</a>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="cta">
        <h2>Is Online learning right for my child?</h2>
        <ul>
          <li>Self-disciplined and motivated students thrive here.</li>
          <li>Safe and bully-free learning environment.</li>
          <li>Flexible learning from anywhere.</li>
        </ul>
        <a href="#enroll" className="btn-primary">Sign Up Now</a>
      </section>

      {/* Enroll Section */}
      <section id="enroll" className="enroll">
        <h2>Sign Up to Get Started</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone" required />
          <button type="submit" className="btn-primary">Create Account</button>
        </form>
      </section>

      {/* Popup */}
      {submitted && (
        <div className="popup-notification">
          🙂 Thanks for contacting us! We will get back to you shortly.
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <p>© SHS Online ⋅ 2025 ⋅ All rights reserved.</p>
      </footer>
    </>
  );
}

export default Home;
