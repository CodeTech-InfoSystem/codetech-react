import React from "react";

const strengthsData = [
    {
        id: 1,
        title: "Research",
        description: "It is a long established fact that a reader will be distra by the readable content of a page.",
        icon: "/images/research.svg", 
    },
    {
        id: 2,
        title: "Design",
        description: "It is a long established fact that a reader will be distra by the readable content of a page.",
        icon: "/images/design.png", 
    },
    {
        id: 3,
        title: "Develop",
        description: "It is a long established fact that a reader will be distra by the readable content of a page.",
        icon: "/images/develope.svg", 
    },
    {
        id: 4,
        title: "Test",
        description: "It is a long established fact that a reader will be distra by the readable content of a page.",
        icon: "/images/test.svg", 
    },
];

const Strengths = () => {
    return (
        <>
        <section className="py-8 px-20 bg-white">
            <h2 className="text-2xl font-bold text-center mb-6">Our Strength</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {strengthsData.map((strength, index) => (
                    <div
                        key={strength.id}
                        className={`p-6 border border-[#F7F7F7] rounded-xl bg-[#F7F7F7] flex flex-col items-start relative transition-all duration-300 ease-in-out hover:border-[#AD954F]`}
                    >
                        <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center">
                            <img src={strength.icon} alt={strength.title} className="w-12 h-12" />
                        </div>
                        <h3 className="text-lg font-bold py-2">{strength.title}</h3>
                        <div className="flex items-center space-x-2 my-2">
                            <div className="h-1 w-10 bg-[#AD954F] rounded-lg"></div>
                            <div className="h-1 w-4 bg-[#AD954F] rounded-lg"></div>
                        </div>

                        <p className="text-[#000000] font-raleway">{strength.description}</p>
                        <span className="absolute top-4 right-4 text-3xl font-bold text-gray-300">
                            {`0${strength.id}`}
                        </span>
                    </div>
                ))}
            </div>
        </section>
        <section className="py-8 px-20 bg-gray-100">
        <h2 className="text-2xl font-bold text-center mb-6">About Us</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Image */}
            <img
                src="/images/about.svg"
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
                            src="/images/help.svg"
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
    </>
    );
};

export default Strengths;
