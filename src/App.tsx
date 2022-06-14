import React from "react";
import "./App.css";
import Homepage from "./components/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/static/Navbar";
import Contact from "./components/Contact";
import Footer from "./components/static/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Gallery from "./components/Gallery";
import Notes from "./components/Notes";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <Navbar />
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/notes" element={<Notes/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/gallery" element={<Gallery/>} />
      </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
