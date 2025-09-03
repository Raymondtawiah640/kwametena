import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css"; // Ensure this path is correct or update accordingly

function BuyNow() {
  const pricePerMonth = 5;
  const [months, setMonths] = useState(1);
  const navigate = useNavigate();

  const total = pricePerMonth * months;
  const email = "godfreda938@gmail.com";
  const publicKey = "pk_test_4118a5dc32e6a36ca079e4b5d9cd251f6de25852";

  const handlePayment = () => {
    if (!window.PaystackPop) {
      alert("Payment system not loaded. Try again later.");
      return;
    }

    const handler = window.PaystackPop.setup({
      key: publicKey,
      email: email,
      amount: total * 100,
      currency: "GHS",
      ref: '' + Math.floor(Math.random() * 1000000000 + 1),
      metadata: {
        custom_fields: [
          {
            display_name: "Subscription Duration",
            variable_name: "months",
            value: `${months} month(s)`
          }
        ]
      },
      callback: function (response) {
        alert("Payment successful! Reference: " + response.reference);
        navigate("/ananselab"); // React Router redirect to AnanseLab page
        window.open("https://tenalearn.vercel.app/ananselab", "_blank");

      },
      onClose: function () {
        alert("Payment window closed.");
      }
    });

    handler.openIframe();
  };

  return (
    <div className="buy-now-page" style={{ padding: "20px", maxWidth: 800, margin: "auto" }}>
      <section className="hero" style={{ display: "flex", gap: 30, alignItems: "center" }}>
        <div className="hero-content" style={{ flex: 1 }}>
          <h1>🎓 All Access</h1>
          <p><strong>₵{pricePerMonth} per month</strong></p>
          <ul className="features-list">
            <li>✅ Unlimited tech training access</li>
            <li>✅ Access to hubs and infrastructure</li>
            <li>✅ Vast university partner network</li>
          </ul>

          <label htmlFor="months" className="months-label" style={{ display: "block", marginTop: "15px" }}>
            Choose number of months:
          </label>
          <select
            id="months"
            value={months}
            onChange={(e) => setMonths(Number(e.target.value))}
            style={{ padding: "8px", fontSize: "16px", marginTop: "5px" }}
          >
            {[...Array(12)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1} month{i === 0 ? "" : "s"}
              </option>
            ))}
          </select>

          <p className="total" style={{ marginTop: "15px", fontSize: "18px" }}>
            Total: <strong>₵{total}</strong>
          </p>

          <button
            className="btn-primary"
            style={{ marginTop: "10px", padding: "10px 20px", fontSize: "18px", cursor: "pointer" }}
            onClick={handlePayment}
          >
            Pay for monthly access
          </button>
        </div>

        <div className="hero-image" style={{ flex: 1 }}>
          <img src="/images/all-access.png" alt="All Access" style={{ width: "100%", borderRadius: 10 }} />
        </div>
      </section>

      <footer className="footer" style={{ textAlign: "center", marginTop: 40, color: "#666" }}>
        <p>© SHS Online ⋅ 2025 ⋅ All rights reserved.</p>
      </footer>
    </div>
  );
}

export default BuyNow;
