import React, { Suspense, lazy, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

const Navbar = lazy(() => import("./components/Navbar"));
const Footer = lazy(() => import("./components/Footer"));
const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Blog = lazy(() => import("./pages/Blog"));



function App() {
  const servicesRef = useRef(null);
  const testimonialsRef = useRef(null);
  const blogRef = useRef(null);
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
          scrollToServices={() => scrollToSection(servicesRef, "services")}
          scrollToTestimonials={() => scrollToSection(testimonialsRef, "testimonials")}
          scrollToBlog={() => scrollToSection(blogRef, "blog")}
        />
        <Routes>
          <Route path="/" element={<Home servicesRef={servicesRef} testimonialsRef={testimonialsRef} blogRef={blogRef} />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
