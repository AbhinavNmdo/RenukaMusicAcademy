import React from "react";
import "./App.css";
import Homepage from "./components/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/static/Navbar";
import Contact from "./components/Contact";
import Footer from "./components/static/Footer";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
