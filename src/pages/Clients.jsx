import React from "react";
import { useNavigate } from "react-router-dom";
import blogVideo from "../assets/blog-video.mp4";
import { IoIosArrowRoundForward } from "react-icons/io";
import WOW from 'wowjs';
import 'animate.css';
import { useEffect } from "react";
// Sample blog data
const blogPosts = [
  {
    id: 1,
    projectName: "Surgicloud",
    description: "Surgical Coordination Platform",
    projectUrl: "https://surgicloud.com/",
    imgSrc: "/images/blog_1.svg",
  },
  {
    id: 2,
    projectName: "Reveza",
    description: "Real-Time Engagement Engine",
    projectUrl: "https://www.reveza.com/",
    imgSrc: "/images/blog_2.svg",
  },
  {
    id: 3,
    projectName: "Zenda 360",
    description: 'EduCloud',
    projectUrl: "https://elearningplus.co.uk/zanda-360-overview/",
    imgSrc: "/images/blog_3.svg",
  },
  {
    id: 4,
    projectName: "Redbud Software",
    description: "Yield-Driven Software",
    projectUrl: "https://redbudsaas.com/",
    imgSrc: "/images/blog_4.svg",
  },
  {
    id: 5,
    projectName: "Docyt",
    description: "Docyt AI Agents",
    projectUrl: "https://docyt.com/",
    imgSrc: "/images/blog_5.svg",
  },
  {
    id: 6,
    projectName: "Biomarking",
    description: "Health Empowerment Tool",
    projectUrl: "https://www.biomarking.com/",
    imgSrc: "/images/blog_6.svg",
  },
];

const Blog = () => {
  const navigate = useNavigate();
  useEffect(() => {
    new WOW.WOW().init();
  }, []);
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <header
        className="text-center py-20"
        style={{
          background:
            "linear-gradient(180deg, #242423 3.95%, #434342 23.15%, #545454 37.84%, #7B7B7A 57.04%, #B9B9B9 77.4%, #FFFFFF 100%)",
        }}
      >
        <h1 className="text-[3.5rem] font-bold text-[#AF9854] font-Baloo 2  wow animate__animated animate__slideInDown" data-wow-duration="1s">Clients</h1>
      </header>

      {/* Blog Section */}
      <div className="container mx-auto py-10 px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)]">


              <div className="relative group w-full h-60 overflow-hidden">
                <img
                  src={post.imgSrc}
                  alt="Blog Cover"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Centered Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-white text-2xl font-bold font-raleway opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 text-center px-2">
                    {post.projectName}
                  </h2>
                </div>
              </div>


              <div className="p-4 font-raleway font-bold space-y-2">
                <p className="text-[18px]">{post.projectName}</p>
                <hr />
                <div className="flex justify-between items-center py-2 rounded-md">
                  <p className="text-[16px]">{post.description}</p>
                  <a href={post.projectUrl} target="_blank" rel="noopener noreferrer">
                    <IoIosArrowRoundForward className="text-[#AD954F] text-xl" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>
     </div>

      {/* Call to Action */}
      <div className="flex justify-center my-16 px-4">
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
            <p className="text-white text-lg md:text-xl font-semibold w-[69%]">
              “Some of the History of Our Company is that we are Catching up through Video”
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <button
                className="px-4 py-1 bg-[#AD954F] text-white rounded-md"
                onClick={() => navigate("/contact-us")}
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
