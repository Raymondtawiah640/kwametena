import Navbar from "./Navbar";
import Footer from "./Footer"; // optional
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-6">
        {/* This is where the current page will render */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
