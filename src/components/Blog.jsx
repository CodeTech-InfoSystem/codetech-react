import React from "react";
import { FaArrowRight } from "react-icons/fa";
import blogVideo from "../assets/blog-video.mp4";
import CountUp from "react-countup";
import { useNavigate } from "react-router-dom";

const blogs = [
  { id: 1, title: "How to Build a Scalable Application up to 1 Million Users on AWS", image: "/images/blog-image1.svg" },
  { id: 2, title: "How to Build a Scalable Application up to 1 Million Users on AWS", image: "/images/blog-image2.svg" },
  { id: 3, title: "How to Build a Scalable Application up to 1 Million Users on AWS", image: "/images/blog-image3.svg" },
  { id: 4, title: "How to Build a Scalable Application up to 1 Million Users on AWS", image: "/images/blog-image4.svg" },
  { id: 5, title: "How to Build a Scalable Application up to 1 Million Users on AWS", image: "/images/blog-image5.svg" },
];

const statsData = [
  { value: 6, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Completed Projects" },
  { value: 20, suffix: "", label: "Team Strength" },
  { value: 700, suffix: "", label: "Happy Clients" },
];

const Blog = () => {
  const navigate = useNavigate();
  return (
    <section className="py-8 bg-white">
      <h2 className="text-center text-4xl font-bold mb-8 text-4xl">Blog</h2>

      {/* Blog Horizontal Scroller */}
      <div className="relative px-4 sm:px-4">
        <div className="flex gap-6 overflow-x-auto scrollbar-hide p-2 snap-x snap-mandatory">
          {blogs.map((blog) => (
            <div key={blog.id} className="w-72 flex-shrink-0 snap-start">
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded-lg shadow-md" />
              <p className="mt-3 text-gray-700 font-raleway text-base text-[#2D3748]">{blog.title}</p>
              <div className="flex justify-end mt-2">
                <a href="/" className="text-[#AD954F] text-base flex items-center gap-1 font-inter">
                  Read More <FaArrowRight className="text-base" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Statistics Section */}
      <div className="mt-16 bg-gray-100 py-6 px-6 sm:px-8 flex justify-center text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full">
          {statsData.map((item, index) => (
            <div key={index} className="flex flex-col items-center relative">

              {/* Divider between stats with animated dot */}
              {index !== 0 && (
                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex flex-col items-center">
                  <div className="w-2 h-2 bg-[#AD954F] rounded-full absolute animate-move-up-down"></div>
                  <div className="w-px h-12 bg-gray-300"></div>
                </div>
              )}

              {/* Stats Content */}
              <h3 className="text-[#AD954F] sm:text-5xl font-bold">
                <CountUp start={0} end={item.value} duration={2.5} />{item.suffix}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base font-raleway font-bold">{item.label}</p>
            </div>
          ))}
        </div>
      </div>


      {/* Call to Action */}
      <div className="flex justify-center mt-16 px-4">
        <div className="relative w-full md:w-3/4 lg:w-1/2 rounded-lg overflow-hidden">
          <video autoPlay loop muted playsInline className="w-full h-[200px] object-cover rounded-lg">
            <source src={blogVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-center px-4">
            <p className="text-white text-lg md:text-xl font-bold font-baloo w-[69%]">
              “Some of the History of Our Company is that we are Catching up through Video”
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <button className="px-4 py-1 bg-[#AD954F] text-white rounded-md"
                onClick={() => navigate("/contact-us")}>
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
