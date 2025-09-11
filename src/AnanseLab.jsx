import React, { useState } from "react";

const subjects = [
  {
    title: "Mathematics",
    description: "Algebra, geometry, trigonometry, and problem-solving skills.",
  },
  {
    title: "Science",
    description: "Explore biology, chemistry, and physics with real-world applications.",
  },
  {
    title: "English",
    description: "Improve reading, writing, grammar, and communication skills.",
  },
  {
    title: "History",
    description: "Understand global events, ancient civilizations, and cultures.",
  },
  {
    title: "ICT",
    description: "Learn coding, digital literacy, and modern technology tools.",
  },
  {
    title: "Creative Arts",
    description: "Unleash creativity with visual arts, music, and storytelling.",
  },
];

function AnanseLab() {
  const [completed, setCompleted] = useState([]);

  // Toggle completion state of a subject
  const toggleComplete = (title) => {
    setCompleted((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  return (
    <div style={{ padding: "30px", maxWidth: 900, margin: "auto", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: 20 }}>Welcome to AnanseLab 🧠</h1>
      <p style={{ textAlign: "center", fontSize: 18, marginBottom: 30 }}>
        Your personalized study environment. Select a subject to begin learning!
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: 20,
        }}
      >
        {subjects.map(({ title, description }) => (
          <div
            key={title}
            onClick={() => toggleComplete(title)}
            style={{
              padding: 20,
              borderRadius: 10,
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              cursor: "pointer",
              backgroundColor: completed.includes(title) ? "#d4edda" : "#fff",
              border: completed.includes(title) ? "2px solid #28a745" : "2px solid transparent",
              transition: "all 0.3s ease",
              userSelect: "none",
            }}
          >
            <h3 style={{ marginTop: 0 }}>{title}</h3>
            <p style={{ color: "#555" }}>{description}</p>
            <p style={{ fontWeight: "bold", color: completed.includes(title) ? "#28a745" : "#aaa" }}>
              {completed.includes(title) ? "✅ Completed" : "Click to mark complete"}
            </p>
          </div>
        ))}
      </div>

      <footer style={{ textAlign: "center", marginTop: 50, color: "#888" }}>
        <p>Happy learning! © AnanseLab 2025</p>
      </footer>
    </div>
  );
}

export default AnanseLab;
