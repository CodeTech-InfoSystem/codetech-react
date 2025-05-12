import React, { Suspense, lazy } from "react";

const HeroSection = lazy(() => import("../components/HeroSection"));
const Partners = lazy(() => import("../components/Partners"));
const Strengths = lazy(() => import("../components/Strengths"));
const Services = lazy(() => import("../components/Services"));
const Testimonials = lazy(() => import("../components/Testimonials"));
const Blog = lazy(() => import("../components/Blog"));

function Home({ testimonialsRef }) {
  return (
    <>
      <div className="min-h-screen px-4 sm:px-8 md:px-14 lg:px-20 pt-2"
        style={{
          background: "linear-gradient(180deg, #242423 37.91%, #434342 51.86%, #545454 56.79%, #686868 62.25%, #7B7B7A 67.71%, #8B8B8B 72.59%, #B6B6B5 81.95%, #D9D9D9 88.38%, #EBEBEB 94.04%, #FFFFFF 100%)",
        }}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <HeroSection />
        </Suspense>
      </div>


      <Suspense fallback={<div>Loading...</div>}>
      <div>
        <Partners />
        <Strengths />
        </div>
        <div>
          <Services />
        </div>

        {/* 👇 Pass the ref to Testimonials (Clients) Section */}
        <div ref={testimonialsRef}>
          <Testimonials />
        </div>

        <div>
          <Blog />
        </div>
      </Suspense>
    </>
  );
}

export default Home;
