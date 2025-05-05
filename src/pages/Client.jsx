import React from "react";
import { useNavigate } from "react-router-dom";
import blogVideo from "../assets/blog-video.mp4";

// Sample client data
const clientProjects = [
    {
        id: 1,
        title: "Project Name 01",
        url: "Project Name 01.com",
        imgSrc: "/images/client_1.svg",
    },
    {
        id: 2,
        title: "Project Name 01",
        url: "Project Name 01.com",
        imgSrc: "/images/client_2.svg",
    },
    {
        id: 3,
        title: "Project Name 01",
        url: "Project Name 01.com",
        imgSrc: "/images/client_3.svg",
    },
    {
        id: 4,
        title: "Project Name 01",
        url: "Project Name 01.com",
        imgSrc: "/images/client_4.svg",
    },
    {
        id: 5,
        title: "Project Name 01",
        url: "Project Name 01.com",
        imgSrc: "/images/client_5.svg",
    },
    {
        id: 6,
        title: "Project Name 01",
        url: "Project Name 01.com",
        imgSrc: "/images/client_6.svg",
    },
];

const Client = () => {
    const navigate = useNavigate();


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
                <h1 className="text-[3.5rem] font-bold text-[#AF9854]">Clients</h1>
            </header>


            {/* Clients Grid Section */}
            <section className="container mx-auto py-10 px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {clientProjects.map((project) => (
                        <div
                            key={project.id}
                            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300"
                        >
                            <img
                                src={project.imgSrc}
                                alt={project.title}
                                className="w-full h-48 object-cover p-2 rounded-t-[15px]"
                            />
                            <div className="px-4 py-2">
                                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                                {/* Divider */}
                                <div className="-mx-4 border-t border-gray-300 my-2"></div>
                                <div className="flex justify-between items-center">
                                    <p className="text-sm font-semibold">{project.url}</p>
                                    <span className="text-[#AD954F] text-xl">&rarr;</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

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

export default Client;
