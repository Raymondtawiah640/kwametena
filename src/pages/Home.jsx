import React from "react";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 w-full">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-6 bg-gray-100 gap-8 w-full">
        {/* Left: Image */}
        <img
          src="/images/back.png"
          alt="Background"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />

        {/* Right: Text */}
        <div className="md:w-1/2 flex flex-col items-start">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">
            Welcome to E-Learning
          </h1>
          <p className="text-gray-700 text-lg">
            Learn and grow with our interactive online courses. Explore
            different topics, improve your skills, and achieve your goals.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 w-full bg-white">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">
          Our Features
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
            <img src="/images/coding.png" alt="Coding" className="w-24 h-24 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Coding Courses</h3>
            <p className="text-gray-600 text-center">
              Learn programming languages and build projects.
            </p>
          </div>
          <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
            <img src="/images/design.png" alt="Design" className="w-24 h-24 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Design Courses</h3>
            <p className="text-gray-600 text-center">
              Master UI/UX and graphic design skills.
            </p>
          </div>
          <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
            <img src="/images/content.png" alt="Content" className="w-24 h-24 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Content Creation</h3>
            <p className="text-gray-600 text-center">
              Learn how to create engaging content online.
            </p>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="py-16 w-full bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">
          Programs
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
            <img src="/images/jhs.png" alt="JHS" className="w-32 h-32 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Junior High School</h3>
            <p className="text-gray-600 text-center">
              Courses designed for junior high school students.
            </p>
          </div>
          <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
            <img src="/images/TENALEARN.png" alt="Tenalearn" className="w-32 h-32 mb-4" />
            <h3 className="text-xl font-semibold mb-2">TenaLearn</h3>
            <p className="text-gray-600 text-center">
              Our flagship online learning platform for advanced students.
            </p>
          </div>
        </div>
      </div>

      {/* Campus Section */}
      <div className="py-16 w-full bg-white flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Our Campus
        </h2>
        <img
          src="/images/campus.png"
          alt="Campus"
          className="w-full max-w-4xl rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}

export default Home;
