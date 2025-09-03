import React from "react";
import { useParams } from "react-router-dom";
import "./App.css";

function PackDetail() {
  const { packId } = useParams();

  // Simulated pack data
  const packs = {
    "jhs-1-essentials": {
      title: "JHS 1 Essentials",
      description: "Core subjects with guided practice for JHS 1 students.",
      image: "/images/jhss.png",
      price: "GHS 30",
    },
    "jhs-2-mastery": {
      title: "JHS 2 Mastery",
      description: "Deepen your understanding in Math, English, and Science.",
      image: "/images/jhs2.png",
      price: "GHS 35",
    },
    "jhs-3-exam-prep": {
      title: "JHS 3 Exam Prep",
      description: "WAEC and BECE focused preparation materials.",
      image: "/images/jhss.png",
      price: "GHS 40",
    },
  };

  const pack = packs[packId];

  if (!pack) {
    return <h2 style={{ padding: "50px", textAlign: "center" }}>❌ Pack not found</h2>;
  }

  return (
    <div className="study-pack-detail">
      <div className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>{pack.title}</h1>
            <p>{pack.description}</p>
            <p><strong>Price:</strong> {pack.price}</p>
            <button className="btn-primary">Buy Now</button>
          </div>
          <div className="hero-image">
            <img src={pack.image} alt={pack.title} />
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>© SHS Online ⋅ 2025 ⋅ All rights reserved.</p>
      </footer>
    </div>
  );
}

export default PackDetail;
