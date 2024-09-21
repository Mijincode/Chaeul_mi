import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/frontend/NavBar";
import Home from "./components/frontend/Home";
import Gallery from "./components/frontend/Gallery";
import Booking from "./components/frontend/Booking";
import Footer from "./components/frontend/Footer";
import Contact from "./components/frontend/Contact";
// import Review from "./components/Review";
import FAQs from "./components/frontend/FAQs";
import ReviewPhone from "./components/frontend/ReviewPhone";

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
        {/* <Route path="/review" element={<Review />} /> */}
        <Route path="/review-phone" element={<ReviewPhone />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<FAQs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
