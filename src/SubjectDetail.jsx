// src/SubjectDetail.js
import React from "react";
import { useParams } from "react-router-dom";

function SubjectDetail() {
  const { subjectId } = useParams();

  const subjectInfo = {
    math: {
      name: "Mathematics",
      description: "Dive into algebra, geometry, trigonometry, and problem-solving exercises.",
    },
    science: {
      name: "Science",
      description: "Explore interactive content on biology, chemistry, and physics.",
    },
    english: {
      name: "English",
      description: "Improve grammar, vocabulary, writing, and comprehension skills.",
    },
    ict: {
      name: "ICT",
      description: "Learn programming, digital skills, and modern technology tools.",
    },
    history: {
      name: "History",
      description: "Discover ancient civilizations, global conflicts, and historical analysis.",
    },
    creative: {
      name: "Creative Arts",
      description: "Engage in storytelling, drawing, painting, music, and more.",
    },
  };

  const subject = subjectInfo[subjectId?.toLowerCase()] || {
    name: "Subject Not Found",
    description: "We couldn’t find details for this subject.",
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>{subject.name}</h1>
      <p>{subject.description}</p>
    </div>
  );
}

export default SubjectDetail;
