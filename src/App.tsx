import React from "react";
import "./App.css";
import Homepage from "./components/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/static/Navbar";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Homepage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
