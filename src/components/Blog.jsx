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
      <h2 className="text-center text-4xl font-bold mb-8">Blog</h2>

      {/* Blog Horizontal Scroller */}
      <div className="relative px-4 sm:px-4">
        <div className="flex gap-6 overflow-x-auto scrollbar-hide p-2 snap-x snap-mandatory">
          {blogs.map((blog) => (
            <div key={blog.id} className="w-72 flex-shrink-0 snap-start">
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded-lg shadow-md" />
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
      <div className="mt-16 bg-gray-100 py-8 px-6 sm:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {statsData.map((item, index) => (
          <div key={index} className="flex flex-col items-center px-4 sm:px-8">
            <h3 className="text-[#AD954F] text-2xl sm:text-3xl font-bold">
              <CountUp start={0} end={item.value} duration={0.4} />{item.suffix}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="flex justify-center mt-16 px-4">
        <div className="relative w-full md:w-3/4 lg:w-1/2 rounded-lg overflow-hidden">
          <video autoPlay loop muted playsInline className="w-full h-[200px] object-cover rounded-lg">
            <source src={blogVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-center px-4">
            <p className="text-white text-lg md:text-xl font-semibold">
              “Some of the History of Our Company is that we are Catching up through Video”
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form (Netlify Form Integration) */}
      <div className="mt-16 max-w-2xl mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
        <h3 className="text-center text-2xl font-bold mb-4">Get in Touch</h3>
        <p className="text-center text-gray-600 mb-6">
          Have questions or feedback? We’re here to help. Send us a message, and we’ll respond within 24 hours.
        </p>
        <form name="contact" netlify className="grid grid-cols-1 gap-4">
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="first-name" placeholder="First Name" required className="p-3 border rounded-md" />
          <input type="text" name="last-name" placeholder="Last Name" required className="p-3 border rounded-md" />
          <input type="email" name="email" placeholder="Email" required className="p-3 border rounded-md" />
          <input type="tel" name="phone" placeholder="Phone" required className="p-3 border rounded-md" />
          <select name="service" required className="p-3 border rounded-md">
            <option value="">Choose a service</option>
            <option value="web-development">Web Development</option>
            <option value="mobile-app">Mobile App Development</option>
            <option value="seo">SEO & Marketing</option>
          </select>
          <select name="engagement" required className="p-3 border rounded-md">
            <option value="">Engagement Type</option>
            <option value="one-time">One-time Project</option>
            <option value="retainer">Ongoing Retainer</option>
          </select>
          <input type="text" name="start-time" placeholder="When to start?" required className="p-3 border rounded-md" />
          <textarea name="message" rows="4" placeholder="Brief about your project" required className="p-3 border rounded-md"></textarea>
          <button type="submit" className="w-full bg-[#AD954F] text-white py-3 rounded-md font-semibold hover:bg-[#8b7a42] transition">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Blog;
