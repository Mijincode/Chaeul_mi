import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Review from "./components/Review";
import FAQs from "./components/FAQs";
import ReviewPhone from "./components/ReviewPhone";

import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/review" element={<Review />} />
        <Route path="/review-phone" element={<ReviewPhone />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<FAQs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
