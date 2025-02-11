import React from "react";
import {BlogImage1, BlogImage2, BlogImage3, BlogImage4, BlogImage5 } from '../assets';
import { FaArrowRight } from "react-icons/fa";
import blogVideo from '../assets/blog-video.mp4';

const blogs = [
  {
    id: 1,
    title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    image: BlogImage1,
  },
  {
    id: 2,
    title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    image: BlogImage2,
  },
  {
    id: 3,
    title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    image: BlogImage3,
  },
  {
    id: 4,
    title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    image: BlogImage4,
  },
  {
    id: 5,
    title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    image: BlogImage5,
  },
];

const Blog = () => {
  return (
    <section className="py-12 bg-white">
      {/* Blog Title */}
      <h2 className="text-center text-4xl font-bold mb-8">Blog</h2>

      {/* Blog Horizontal Scroller */}
      <div className="relative">
        <div className="flex gap-6 overflow-x-auto scrollbar-hide no-scrollbar p-2">
          {blogs.map((blog) => (
            <div key={blog.id} className="w-72 flex-shrink-0">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
              <p className="mt-3 text-gray-700 ">{blog.title}</p>
              <div className="flex justify-end mt-2">
                <a
                  href="/"
                  className="text-[#AD954F] font-medium flex items-center gap-1"
                >
                  Read More <FaArrowRight className="font-medium" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Statistics Section */}
      <div className="mt-16 bg-gray-100 py-8 px-16 flex justify-between text-center">
        {[
          { value: "6+", label: "Years Experience" },
          { value: "500+", label: "Completed Projects" },
          { value: "20", label: "Team Strength" },
          { value: "700", label: "Happy Clients" },
        ].map((item, index) => (
          <div key={index} className="flex items-center gap-x-12">
            {index !== 0 && (
              <div className="relative flex flex-col items-center">
                {/* Dot */}
                <div className="w-2 h-2 bg-[#AD954F] rounded-full absolute -top-2"></div>
                {/* Divider */}
                <div className="border-l border-gray-300 h-12"></div>
              </div>
            )}
            <div className="flex flex-col items-center px-8">
              <h3 className="text-[#AD954F] text-3xl font-bold">{item.value}</h3>
              <p className="text-gray-600">{item.label}</p>
            </div>
          </div>
        ))}
      </div>




      {/* Call to Action */}
      <div className="flex justify-center mt-16">
        <div
          className="bg-cover bg-center p-10 w-[60%] rounded-lg relative flex justify-center items-center text-center mx-auto"

        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
          >
            <source src={blogVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-0 rounded-lg"></div>
          <div className="relative z-10">
            <p className="text-white text-xl font-semibold">
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
