import React from "react";
import { About, Help } from "../assets";

const AboutUs = () => {
    return (
        <section className="py-8 px-20 bg-gray-100">
            <h2 className="text-2xl font-bold text-center mb-6">About Us</h2>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left Image */}
                <img
                    src={About}
                    alt="People working together"
                    className="rounded-xl"
                />

                {/* Right Content */}
                <div>
                    <h3 className="text-4xl font-bold text-[#000000]">
                        One of the Fastest Way to Business Growth
                    </h3>
                    <p className="text-gray-600 mt-4 w-[90%]">
                        It is a long established fact that a reader will be distracted by
                        the readable content of a page when looking at its layout. The point
                        of using Lorem Ipsum is that it has a more-or-less normal
                        distribution of letters, as opposed.
                    </p>

                    {/* Advice Box */}
                    <div className="mt-6 bg-white rounded-lg p-2  flex items-center">
                        <div className="bg-[#F7F7F7] p-3 rounded-lg">
                            <img
                                src={Help}
                                alt="Help"
                            />
                        </div>
                        <div className="ml-4">
                            <p className="font-semibold">Get Instant Professional Advice</p>
                            <p className="text-gray-600">
                                Ready to Help:{" "}
                                <a href="tel:+13566787897" className="text-[#AD954F] font-semibold">
                                    +1 356 678 7897
                                </a>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
