import HeroSection from "@/components/HeroSection";
import Partners from "@/components/Partners";
import Strengths from "@/components/Strengths";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export default function Home() {
  return (
    <>
      <div className="min-h-screen px-4 sm:px-8 md:px-14 lg:px-20 pt-2"
        style={{
          background: "linear-gradient(180deg, #242423 37.91%, #434342 51.86%, #545454 56.79%, #686868 62.25%, #7B7B7A 67.71%, #8B8B8B 72.59%, #B6B6B5 81.95%, #D9D9D9 88.38%, #EBEBEB 94.04%, #FFFFFF 100%)",
        }}
      >
        <HeroSection />
      </div>


      <Partners />
      <Strengths />

      <div>
        <Services />
      </div>

      {/* 👇 Pass the ref to Testimonials (Clients) Section */}
      <div id="testimonials">
        <Testimonials />
      </div>

      <div>
        <Blog />
      </div>
    </>
  );
}
