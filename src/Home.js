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
      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src="/images/tenalearn.png" alt="AI Boost" className="logo-img" />
          <span>TENALEARN</span>
        </div>

        <div className="hamburger" id="hamburger">&#9776;</div>

        <ul className="nav-links" id="nav-links">
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
            <p>
              Learn anytime, anywhere with interactive courses and expert guidance.
            </p>
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
          <h3>Full-Time Study Tracks</h3>
          <p>
            Includes interactive lessons, quizzes, and assignments with teacher support.
          </p>
          <p><strong>$40/month</strong></p>
          <a href="/study-packs" className="btn-primary">Go to Study Tracks</a>
        </div>
      </section>

      {/* Call to Action */}
      <section id="cta" className="cta">
        <h2>Is Online learning right for my child?</h2>
        <p>
          <strong>
            SHS Online is the best option for your family if the following rings true:
          </strong>
        </p>
        <ul
          style={{
            textAlign: "left",
            maxWidth: "700px",
            margin: "1rem auto",
            lineHeight: "1.8",
          }}
        >
          <li>Your child is self-disciplined and self-motivated and can operate responsibly with little or no parental supervision.</li>
          <li>You want your child to be in a class devoid of intimidation, harassment, and bullying.</li>
          <li>You spend too much, financially, on your child’s high school education – travelling to and fro, buying ‘provisions’ and other expenses.</li>
          <li>Your child has a disability or medical condition that makes it difficult or dangerous to attend physical classes.</li>
          <li>Your child is an athlete or artist and requires flexibility around their training sessions and competitions.</li>
          <li>You are moving abroad and would like your child’s education to proceed uninterrupted.</li>
        </ul>
        <a href="#enroll" className="btn-primary">Sign Up Now</a>
      </section>

      {/* Enroll Section */}
      <section id="enroll" className="enroll">
        <h2>Why enroll at SHS Online?</h2>
        <ul
          style={{
            textAlign: "left",
            maxWidth: "800px",
            margin: "1rem auto",
            lineHeight: "1.8",
          }}
        >
          <li><strong>Study Now, Pay Later:</strong> Begin your studies without making any payments. Pay a month later on flexible monthly or quarterly plans.</li>
          <li><strong>Small Class Size:</strong> Classes have no more than 20 students, ensuring personal attention from teachers.</li>
          <li><strong>Real-Time Support:</strong> Ask questions live or get help during Q & A sessions.</li>
          <li><strong>Convenience:</strong> Study from anywhere at your own pace.</li>
          <li><strong>Guaranteed Child Safety:</strong> Avoid bullying, intimidation, and harassment found in traditional schools.</li>
          <li><strong>Build Relationships:</strong> Opportunities to socialize at organized events while learning online.</li>
          <li><strong>Highly Qualified Tutors:</strong> Learn from friendly, experienced lecturers with Doctorate and PhD degrees.</li>
          <li><strong>Big Savings:</strong> Pay only tuition fees, saving 50–60% compared to traditional schooling.</li>
          <li><strong>No Teacher Strikes:</strong> Learning continues uninterrupted during strikes.</li>
        </ul>

        <h2>Sign Up to Get Started</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone" required />
          <button type="submit" className="btn-primary">Create Account</button>
        </form>
      </section>

      {/* Popup Notification */}
      {submitted && (
        <div className="popup-notification">
          🙂 Thanks for contacting us! We will get back to you via email shortly.
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
