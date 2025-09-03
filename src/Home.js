import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
          <img
            src="/images/tenalearn.png"
            alt="TENALEARN"
            className="logo-img"
          />
        </div>

        {/* Hamburger icon */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        {/* Responsive nav links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

        

          <li><a href="#pathways" onClick={() => setMenuOpen(false)}>Pathway</a></li>
          <li><a href="#pathways" onClick={() => setMenuOpen(false)}>Community</a></li>
          <li><Link to="/subjects" onClick={() => setMenuOpen(false)}>Subjects</Link></li>

          
          <li><a href="/study-packs" className="btn-enroll" onClick={() => setMenuOpen(false)}>Study Packs</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Learn anytime, anywhere.</h1>
            <p>Interactive courses and expert guidance at your fingertips.</p>
            <a href="#enroll" className="btn-primary">Admission</a>
          </div>
          <div className="hero-image">
            <img src="/images/jhs.png" alt="Learning Illustration" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        {/* Add feature cards here */}
      </section>

      {/* CTA Section */}
      <section id="cta" className="cta">
        <h2>Is Online learning right for my child?</h2>
        <ul>
          <li>Self-disciplined and motivated students thrive here.</li>
          <li>Safe and bully-free learning environment.</li>
          <li>Flexible learning from anywhere.</li>
        </ul>
        
      </section>

      

      {/* Enroll Section */}
      <section id="enroll" className="enroll">
        <form 
          className="signup-form" 
          action="https://formspree.io/f/xnnbjlka"
          method="POST"
          onSubmit={() => setSubmitted(true)}
        >
          <input type="text" name="firstName" placeholder="First Name" required />
          <input type="text" name="lastName" placeholder="Last Name" required />
          <input type="email" name="email" placeholder="Email Address" required />
          <input type="tel" name="phone" placeholder="Phone" required />
          <button type="submit" className="btn-primary">Register Here</button>
        </form>
      </section>

      {/* Popup Notification */}
      {submitted && (
        <div className="popup-notification">
          🙂 Thanks for contacting us! We will get back to you shortly.
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <p>© Tenalearn ⋅ 2025 ⋅ All rights reserved.</p>
      </footer>
    </>
  );
}

export default Home;
