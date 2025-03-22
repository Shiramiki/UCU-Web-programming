import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Hobbies from "./components/Hobbies";
import Results from "./components/Results";
import Career from "./components/Career";
import Contact from "./components/Contact";
import Login from "./components/Login";


import "./App.css";


function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Login />} />  
      </Routes>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/results" element={<Results />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
