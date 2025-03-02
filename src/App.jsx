import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";  // ✅ No need for BrowserRouter

const Navbar = lazy(() => import("./components/Navbar"));
const Footer = lazy(() => import("./components/Footer"));
const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs"));


function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
        <Navbar />
        <Routes>  {/* ✅ Just use Routes here */}
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
