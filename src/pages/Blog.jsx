import React from "react";
import { useNavigate } from "react-router-dom";
import blogVideo from "../assets/blog-video.mp4";
import WOW from 'wowjs';
import 'animate.css';
import { useEffect } from "react";

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "Custom Software Development Trends 2025- For your Business growth",
    date: "July 3, 2024",
    author: "James Anderson",
    description: "Custom Software Development Trends 2025- For your Business growth Key Custom Software Development Trends Shaping.Modern businesses rest entirely on software platforms since customer relationship management (CRM) tools generated $55 billion in revenue alongside enterprise resource planning (ERP) solutions producing $107 billion. ",
    imgSrc: "/images/blog1.webp",
  },
  {
    id: 2,
    title: "Six Custom Software Development Challenges that Companies Face",
    date: "March 10, 2023",
    author: "Michael Carter",
    description: "Unlike generic off-the-shelf solutions, custom software is tailor-made to fit the unique needs and challenges of an organization. They promise enhanced efficiency, scalability, and focused alignment with business goals.  ",
    imgSrc: "/images/blog2.svg",
  },
  {
    id: 3,
    title: "Relational vs non-relational databases, querying data and what product managers really need to know",
    date: "May 12, 2022",
    description: "AI can help you start your business or help your existing business thrive.The good news is that you don’t need to spend years developing AI technology like ChatGPT on your own but only learn how to use the ChatGPT API and Customize the behavior of the chatbot, so the responses are more relevant to your customers.",
    author: "Ethan Brooks",
    imgSrc: "/images/blog3.png",
  },
  {
    id: 4,
    title: "Grid system for better Design User Interface",
    description: 'A grid system is a design tool used to arrange content on a webpage. It creates intersecting points to align and organize page elements effectively.A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.',
    date: "November 16, 2023",
    author: "William Turner",
    imgSrc: "/images/blog4.webp",
  },
  {
    id: 5,
    title: "The Role of AI in Customer Service: Enhancing Support with Chatbots and Virtual Assistants",
    description: "In today’s digital age, customer service is undergoing a significant transformation thanks to the integration of artificial intelligence (AI). Gone are the days of long wait times and frustrating interactions with customer support agents. Instead, today, IT companies in Indore and across the globe are turning to AI-powered solutions, such as chatbots and virtual assistants, to revolutionize the way they provide support to their customers. ",
    date: "january 2, 2024",
    author: "Liam Morgan",
    imgSrc: "/images/blog5.webp",
  },
  {
    id: 6,
    title: "Modern Tech Stack for Thriving Web App Development",
    description: 'The tech stack is the collection of all the tools and technologies used to build and run an application. In today’s tech environment, staying ahead of the curve is significant to building a modern-day application. Therefore, developers must be well-versed in using the technologies that can lead to project success.',
    date: "August 15, 2021",
    author: "Noah Sullivan",
    imgSrc: "/images/blog6.jpg",
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
            "linear-gradient(180deg, #242423 3.95%, #434342 23.15%, #545454 37.84%, #7B7B7A 57.04%, #B9B9B9 73.93%, #D3D3D3 86.67%, #FFFFFF 100%)",
        }}
      >
        <h1 className="text-[3.5rem] font-bold text-[#AF9854] font-Baloo 2 wow animate__animated animate__slideInUp" data-wow-duration="1s">Blog</h1>
      </header>

      {/* Blog Section */}
      <div className="container mx-auto py-10 px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)]">

              {/* Top Shadow Effect */}
              <img src={post.imgSrc} alt="Blog Cover" className="w-full h-60 object-cover p-3" />
              <div className="p-4">
                <p className="text-sm text-[#000000] flex items-center gap-2 font-outfit">
                  <img src="/images/calendar-date.svg" alt="calendar" /> {post.date}
                  <img src="/images/person.svg" alt="person" /> {post.author}
                </p>
                <h3 className="text-lg font-semibold mt-2 font-canela">{post.title}</h3>
                <p className="text-gray-600 text-sm mt-2 font-raleway">
                  {post.description}
                </p>
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
