import React from "react";
import { useNavigate } from "react-router-dom";
import blogVideo from "../assets/blog-video.mp4";
import Services from '../components/Services';

const Service = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen font-raleway">
            {/* Header Section */}
            <header
                className="text-center py-20"
                style={{
                    background:
                        "linear-gradient(180deg, #242423 3.95%, #434342 23.15%, #545454 37.84%, #7B7B7A 57.04%, #B9B9B9 73.93%, #D3D3D3 86.67%, #FFFFFF 100%)",
                }}
            >
                <h1 className="text-3xl font-bold text-[#AF9854]">Services</h1>
            </header>

            {/* Services Section */}

            <Services showHeading={false} />
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

export default Service;
