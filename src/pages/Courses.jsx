// src/pages/Courses.jsx
import React from "react";

const jhsCourses = [
  {
    id: 1,
    title: "JHS Math Mastery",
    description: "Understand all the key topics in JHS Math with exercises.",
    image: "/assets/jhs-Cbd-QsDV.png",
  },
  {
    id: 2,
    title: "JHS Science Fundamentals",
    description: "Learn physics, chemistry, and biology basics for JHS.",
    image: "/assets/content-D2u4VqTy.png",
  },
  {
    id: 3,
    title: "JHS English Language",
    description: "Improve grammar, comprehension, and writing skills.",
    image: "/assets/design-CpegINc5.png",
  },
  {
    id: 4,
    title: "JHS ICT & Coding",
    description: "Learn basic coding and ICT skills for exams and projects.",
    image: "/assets/coding-CPPGxj1s.png",
  },
];

function Courses() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
        JHS Courses
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {jhsCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {course.title}
              </h2>
              <p className="mt-2 text-gray-600 text-sm">{course.description}</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
