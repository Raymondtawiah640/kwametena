import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import StudyPacks from "./StudyPacks";
import PartTimeTracks from "./PartTimeTracks";
import PackDetail from"./PackDetail";
import BuyNow from "./BuyNow"
import AnanseLab from "./AnanseLab";




function App() {
  return <AnanseLab />
}
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/study-packs" element={<StudyPacks />} />
        <Route path="/study-packs/:packId" element={<PackDetail />} />
<Route path="/buy-now" element={<BuyNow />} />
<Route path="/ananselab" element={<AnanseLab />} />


        <Route path="*" element={<NotFound />} /> {/* Catch-all route */}

      </Routes>
    </Router>
  

export default App;
