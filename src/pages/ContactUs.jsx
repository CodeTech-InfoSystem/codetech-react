import React from "react";
import blogVideo from "../assets/blog-video.mp4";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const ContactUs = () => {
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
                <h1 className="text-3xl font-bold text-[#AF9854]">Contact Us</h1>
            </header>

            {/* Contact Section */}
            <div className="flex flex-col lg:flex-row justify-center items-center bg-[#AD954F] text-white py-8 px-6 lg:px-16">
                <div className="w-full lg:w-1/2 space-y-4">
                    <h2 className="text-2xl font-bold">Write Us at</h2>
                    <p className="w-full lg:w-[80%]">
                        Working with your design team was an absolute pleasure. The
                        attention to detail and creativity exceeded my expectations.
                    </p>
                    <div className="flex items-center gap-2">
                        <img src="/images/contact.svg" alt="Phone" className="w-6 h-6" />
                        <p>Phone: 123-456-7890</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <img src="/images/email.svg" alt="Email" className="w-6 h-6" />
                        <p>Email: contact@vpeters.org</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <img src="/images/time.svg" alt="Time" className="w-6 h-6" />
                        <p>Monday - Friday, 9 AM - 4 PM PST</p>
                    </div>

                    <div className="flex gap-3 py-2">
                        <div className="bg-white p-2 rounded-lg cursor-pointer hover:bg-gray-200">
                            <FaLinkedinIn className="text-[#AD954F]" />
                        </div>
                        <div className="bg-white p-2 rounded-lg cursor-pointer hover:bg-gray-200">
                            <FaInstagram className="text-[#AD954F]" />
                        </div>
                        <div className="bg-white p-2 rounded-lg cursor-pointer hover:bg-gray-200">
                            <FaFacebookF className="text-[#AD954F]" />
                        </div>
                        <div className="bg-white p-2 rounded-lg cursor-pointer hover:bg-gray-200">
                            <FaTwitter className="text-[#AD954F]" />
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-[40%] bg-white text-black p-6 rounded-3xl shadow-lg">
                    <h3 className="text-xl font-semibold mb-4 text-center text-[#AC964F]">Get in Touch</h3>

                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Enter Your Name"
                        className="w-full p-2 mb-3 border rounded"
                    />

                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter email address"
                        className="w-full p-2 mb-3 border rounded"
                    />

                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        id="message"
                        // placeholder="Message"
                        className="w-full p-2 mb-3 border rounded h-24"
                    ></textarea>

                    <button className="w-full bg-[#AD954F] text-white py-2 font-semibold rounded-lg">Submit</button>
                </div>

            </div>

            {/* Video Section */}
            <div className="flex justify-center my-16 px-4">
                <div className="relative w-full md:w-3/4 lg:w-1/2 rounded-lg overflow-hidden">
                    <video autoPlay loop muted playsInline className="w-full h-[200px] object-cover rounded-lg">
                        <source src={blogVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-center px-4">
                        <p className="text-white text-lg md:text-xl font-semibold w-[69%]">
                            “Some of the History of Our Company is that we are Catching up through Video”
                        </p>
                        <button className="mt-4 px-4 py-1 bg-[#AD954F] text-white rounded-md">
                            Get In Touch
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
