// src/App.js
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Review from "./components/Review";
import FAQ from "./components/FAQ";

import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/review" element={<Review />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer />
    </div>
  );
}
