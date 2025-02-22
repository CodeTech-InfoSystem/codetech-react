import React, { Suspense, lazy } from "react";

const Navbar = lazy(() => import("./components/Navbar"));
const HeroSection = lazy(() => import("./components/HeroSection"));
const Partners = lazy(() => import("./components/Partners"));
const Strengths = lazy(() => import("./components/Strengths"));
const AboutUs = lazy(() => import("./components/AboutUs"));
const Services = lazy(() => import("./components/Services"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Blog = lazy(() => import("./components/Blog"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <div className="w-full">
      <div className="min-h-screen bg-[linear-gradient(180deg,#242423_37.91%,#434342_51.86%,#545454_56.79%,#686868_62.25%,#7B7B7A_67.71%,#8B8B8B_72.59%,#B6B6B5_81.95%,#D9D9D9_88.38%,#EBEBEB_94.04%,#FFFFFF_100%)] px-4 sm:px-8 md:px-14 lg:px-20 pt-2">
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <HeroSection />
        </Suspense>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <Partners />
        <Strengths />
        <AboutUs />
        <Services />
        <Testimonials />
        <Blog />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
