import { Suspense, lazy, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { ToastContainer } from 'react-toastify';

const Navbar = lazy(() => import("./components/Navbar"));
const Footer = lazy(() => import("./components/Footer"));
const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Blog = lazy(() => import("./pages/Blog"));
const Service = lazy(() => import("./pages/Service"));
const Clients = lazy(() => import("./pages/Clients"));
const Careers = lazy(()=>import("./pages/Career"));
const JobListing = lazy(()=>import("./components/JobListing"));
const Admin = lazy(() => import("./pages/Admin"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const ResumeViewer = lazy(() => import("./pages/ResumeViewer"));

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
          <Route path="/" element={<Home testimonialsRef={testimonialsRef} />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services" element={<Service />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/jobs/:id" element={<JobListing />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/admin/resume/:filename" element={<ResumeViewer />} />
        </Routes>
      </Suspense>
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
