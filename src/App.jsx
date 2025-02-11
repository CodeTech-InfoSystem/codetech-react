import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Partners from "./components/Partners";
import Strengths from "./components/Strengths";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-baloo">
      <div className="min-h-screen bg-[linear-gradient(180deg,#242423_37.91%,#434342_51.86%,#545454_56.79%,#686868_62.25%,#7B7B7A_67.71%,#8B8B8B_72.59%,#B6B6B5_81.95%,#D9D9D9_88.38%,#EBEBEB_94.04%,#FFFFFF_100%)] px-16">
        <Navbar />
        <HeroSection />
      </div>

      <Partners />
      <Strengths />
      <AboutUs />
      <Services />
      <Testimonials />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
