import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import StudyPacks from "./StudyPacks";
import PartTimeTracks from "./PartTimeTracks";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/study-packs" element={<StudyPacks />} />
      </Routes>
    </Router>
  );
}

export default App;
