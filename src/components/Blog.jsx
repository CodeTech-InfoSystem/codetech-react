import React from "react";
import { BlogImage1, BlogImage2, BlogImage3, BlogImage4, BlogImage5 } from "../assets";
import { FaArrowRight } from "react-icons/fa";
import blogVideo from "../assets/blog-video.mp4";
import CountUp from "react-countup";

const blogs = [
  { id: 1, title: "How to Build a Scalable Application up to 1 Million Users on AWS", image: BlogImage1 },
  { id: 2, title: "How to Build a Scalable Application up to 1 Million Users on AWS", image: BlogImage2 },
  { id: 3, title: "How to Build a Scalable Application up to 1 Million Users on AWS", image: BlogImage3 },
  { id: 4, title: "How to Build a Scalable Application up to 1 Million Users on AWS", image: BlogImage4 },
  { id: 5, title: "How to Build a Scalable Application up to 1 Million Users on AWS", image: BlogImage5 },
];

const statsData = [
  { value: 6, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Completed Projects" },
  { value: 20, suffix: "", label: "Team Strength" },
  { value: 700, suffix: "", label: "Happy Clients" },
];

const Blog = () => {
  return (
    <section className="py-12 bg-white">
      {/* Blog Title */}
      <h2 className="text-center text-4xl font-bold mb-8">Blog</h2>

      {/* Blog Horizontal Scroller */}
      <div className="relative px-4 sm:px-4">
        <div className="flex gap-6 overflow-x-auto scrollbar-hide p-2 snap-x snap-mandatory">
          {blogs.map((blog) => (
            <div key={blog.id} className="w-72 flex-shrink-0 snap-start">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
              <p className="mt-3 text-gray-700">{blog.title}</p>
              <div className="flex justify-end mt-2">
                <a href="/" className="text-[#AD954F] font-medium flex items-center gap-1">
                  Read More <FaArrowRight className="font-medium" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Statistics Section */}
      <div className="mt-16 bg-gray-100 py-8 px-6 sm:px-8 flex flex-wrap justify-center md:justify-between text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {statsData.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center gap-x-6 md:gap-x-12">
            {index !== 0 && (
              <div className="relative flex flex-col items-center hidden md:flex">
                {/* Animated Dot */}
                <div className="w-2 h-2 bg-[#AD954F] rounded-full absolute animate-move-up-down"></div>
                {/* Divider */}
                <div className="border-l border-gray-300 h-12"></div>
              </div>
            )}
            <div className="flex flex-col items-center px-4 sm:px-8">
              <h3 className="text-[#AD954F] text-2xl sm:text-3xl font-bold">
                <CountUp start={0} end={item.value} duration={20} />{item.suffix}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">{item.label}</p>
            </div>
          </div>
        ))}
      </div>






      {/* Call to Action */}
      <div className="flex justify-center mt-16 px-4">
        <div className="relative w-full md:w-3/4 lg:w-1/2 rounded-lg overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[200px] object-cover rounded-lg"
          >
            <source src={blogVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-center px-4">
            <p className="text-white text-lg md:text-xl font-semibold">
              “Some of the History of Our Company is that we are Catching up through Video”
            </p>
            <button className="mt-4 bg-[#AD954F] text-white px-6 py-2 rounded-md transition">
              Get In Touch
            </button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Blog;
