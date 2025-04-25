import React, { Suspense, lazy, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

const Navbar = lazy(() => import("./components/Navbar"));
const Footer = lazy(() => import("./components/Footer"));
const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Blog = lazy(() => import("./pages/Blog"));
const Service = lazy(() => import("./pages/Service"));




function App() {
  const testimonialsRef = useRef(null);
  const location = useLocation();

  const scrollToSection = (ref, sectionId) => {
    if (location.pathname === "/") {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${sectionId}`; // Redirect to Home and jump to section
    }
  };

  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
        <Navbar
          scrollToTestimonials={() => scrollToSection(testimonialsRef, "testimonials")}
        />
        <Routes>
          <Route path="/" element={<Home testimonialsRef={testimonialsRef}/>} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services" element={<Service />} />

        </Routes>
      </Suspense>
        <Footer />
    </>
  );
}

export default App;
