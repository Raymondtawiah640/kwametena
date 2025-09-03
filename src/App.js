import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import BuyNow from "./BuyNow"
import AnanseLab from "./AnanseLab";
import ResourceCenter from "./ResourceCenter"; // ✅ ADD
import SubjectDetail from "./SubjectDetail";



function App() {
  return <AnanseLab />
}
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Subjects />} />
  
<Route path="/buy-now" element={<BuyNow />} />
<Route path="/ananselab" element={<AnanseLab />} />
<Route path="/resources" element={<ResourceCenter />} /> // ✅ ADD
<Route path="/subjects/:subjectId" element={<SubjectDetail />} />

        <Route path="*" element={<NotFound />} /> {/* Catch-all route */}

      </Routes>
    </Router>
  

export default App;
