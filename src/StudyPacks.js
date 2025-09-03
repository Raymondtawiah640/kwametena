import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function StudyPacks() {
  const packs = [
    {
      title: "JHS 1 Essentials",
      description: "Core subjects with guided practice for JHS 1 students.",
      image: "/images/jhss.png",
    },
    {
      title: "JHS 2 Mastery",
      description: "Deepen your understanding in Math, English, and Science.",
      image: "/images/jhs2.png",
    },
    {
      title: "JHS 3 Exam Prep",
      description: "WAEC and BECE focused preparation materials.",
      image: "/images/jhss.png",
    },
  ];

  return (
    <div className="study-packs-page">
      <header className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>📚 Study Packs</h1>
            <p>Explore and enroll in carefully crafted study packs by grade level.</p>
            <Link to="/buy-now" className="btn-primary hero-btn">
              Buy Now
            </Link>
          </div>
          <div className="hero-image">
            <img src="/images/jhs1.png" alt="Study Pack Hero" />
          </div>
        </div>
      </header>

      <section className="study-packs-container">
        {packs.map((pack, index) => {
          const slug = pack.title.toLowerCase().replace(/\s+/g, "-");
          return (
            <div className="study-pack-card" key={index}>
              <img src={pack.image} alt={pack.title} className="pack-image" />
              <div className="pack-content">
                <h3>{pack.title}</h3>
                <p>{pack.description}</p>
                <div className="btn-group">
                  <Link to={`/study-packs/${slug}`} className="btn-primary">
                    View Pack
                  </Link>
                  <Link to="/buy-now" className="btn-secondary">
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <footer className="footer">
        <p>© SHS Online ⋅ 2025 ⋅ All rights reserved.</p>
      </footer>
    </div>
  );
}

export default StudyPacks;
