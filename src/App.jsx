
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import VisitorPopup from "./components/VisitorTemp.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Skills from "./pages/Skills.jsx";
import Projects from "./pages/Projects.jsx";
import Education from "./pages/Education.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  const [showPopup, setShowPopup] = useState(
    !sessionStorage.getItem("visitorTempSeen")
  );

  function closePopup() {
    sessionStorage.setItem("visitorTempSeen", "yes");
    setShowPopup(false);
  }

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {showPopup && <VisitorPopup onClose={closePopup} />}
    </>
  );
}

export default App;
