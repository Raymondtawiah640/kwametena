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
  <Link to="/" onClick={() => setMenuOpen(false)}>
    <img
      src="/images/tenalearn.png"
      alt="TENALEARN"
      className="logo-img"
    />
  </Link>
</div>


        {/* Hamburger icon */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        {/* Responsive nav links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

        

          <li><a href="#pathways" onClick={() => setMenuOpen(false)}>Programmes</a></li>
                <li><a href="#pathways" onClick={() => setMenuOpen(false)}>Women & Tech</a></li>
          <li><a href="#pathways" onClick={() => setMenuOpen(false)}>Community</a></li>
      

          
          <li><a href="/subject-detail" className="btn-enroll" onClick={() => setMenuOpen(false)}>Subject Detail</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Learn anytime, anywhere.</h1>
            <p><b>TENALEARN brings your classroom to life, wherever you are in the Ghana.</b></p>
            <a href="#enroll" className="btn-primary">Admission 2025/2026</a>
          </div>
          <div className="hero-image">
            <img src="/images/back.png" alt="Learning Illustration" />
          </div>
        </div>
      </section>

      <section id="features" className="features">
  <h3 className="section-title">Popular Programs</h3>
  <div className="features-grid">
    
    {/* UI/UX Design Course Card */}
    <div className="feature-card">
      <div className="feature-icon">
  <img src="/images/design.png" alt="UI/UX Design" className="feature-img" />
</div>

      <h3>Graphic Design</h3>
      <p>Ignite learning passion for all class and subjects.</p>
      <a href="#enroll" className="feature-link">Enroll Now →</a>
    </div>

    {/* Web Development Course Card */}
    <div className="feature-card">
        <img src="/images/content.png" alt="UI/UX Design" className="feature-img" />
      <h3>Web Development</h3>
      <p>Build dynamic websites and applications using HTML, CSS, JavaScript, and React. Perfect for beginners and intermediates.</p>
      <a href="#enroll" className="feature-link">Start Building →</a>
    </div>

    {/* Digital Marketing Course Card */}
    <div className="feature-card">
        <img src="/images/coding.png" alt="UI/UX Design" className="feature-img" />
      <h3>Web Development</h3>
      <p>Master the art of SEO, social media, content creation, and analytics to grow businesses online in the African digital space.</p>
      <a href="#enroll" className="feature-link">Grow With Us →</a>
    </div>

  </div>
</section>

{/* CTA Section */}
<section id="cta" className="cta">
  <h2>THE TENALEARN ADVANTAGE</h2>
  
  <img 
    src="/images/campus.png" 
    alt="Students collaborating at ALX" 
    style={{ width: '100%', maxWidth: '600px', margin: '20px 0' }} 
  />
  
  <p>
    TENALEARN goes beyond technical training to prepare you for a successful career. 
    Our unique <strong>Professional Foundations</strong> program focuses on vital soft skills 
    like teamwork, communication, and time management, giving you the edge you need to stand out. 
    Combined with cutting-edge technical skills, you’ll be ready to get hired and thrive in any 
    professional environment.
  </p>
  <p>
    Join ALX to unlock your potential. Start your journey today.
  </p>
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
