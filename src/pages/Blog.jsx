import React from "react";
import { useNavigate } from "react-router-dom";
import blogVideo from "../assets/blog-video.mp4";

// Sample blog data
const blogPosts = [
    {
        id: 1,
        title: "Career Carnival: Explore Your Professional Journey",
        date: "July 3, 2024",
        author: "Jane Cooper",
        imgSrc: "/images/blog_1.svg",
    },
    {
        id: 2,
        title: "Career Carnival: Explore Your Professional Journey",
        date: "July 3, 2024",
        author: "Jane Cooper",
        imgSrc: "/images/blog_2.svg",
    },
    {
        id: 3,
        title: "Career Carnival: Explore Your Professional Journey",
        date: "July 3, 2024",
        author: "Jane Cooper",
        imgSrc: "/images/blog_3.svg",
    },
    {
        id: 4,
        title: "Career Carnival: Explore Your Professional Journey",
        date: "July 3, 2024",
        author: "Jane Cooper",
        imgSrc: "/images/blog_4.svg",
    },
    {
        id: 5,
        title: "Career Carnival: Explore Your Professional Journey",
        date: "July 3, 2024",
        author: "Jane Cooper",
        imgSrc: "/images/blog_5.svg",
    },
    {
        id: 6,
        title: "Career Carnival: Explore Your Professional Journey",
        date: "July 3, 2024",
        author: "Jane Cooper",
        imgSrc: "/images/blog_6.svg",
    },
];

const Blog = () => {
    const navigate = useNavigate();

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
                <h1 className="text-3xl font-bold text-[#AF9854]">Blog</h1>
            </header>

            {/* Blog Section */}
            <div className="container mx-auto py-10 px-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)]">

                            {/* Top Shadow Effect */}
                            <img src={post.imgSrc} alt="Blog Cover" className="w-full h-60 object-cover p-3" />
                            <div className="p-4">
                                <p className="text-sm text-[#000000] flex items-center gap-2">
                                    <img src="/images/calendar-date.svg" alt="calendar" /> {post.date}
                                    <img src="/images/person.svg" alt="person" /> {post.author}
                                </p>
                                <h3 className="text-lg font-semibold mt-2">{post.title}</h3>
                                <p className="text-gray-600 text-sm mt-2">
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...
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
