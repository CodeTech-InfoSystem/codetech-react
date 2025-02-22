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

                        <p className="text-[#000000] font-Raleway">{strength.description}</p>
                        <span className="absolute top-4 right-4 text-3xl font-bold text-gray-300">
                            {`0${strength.id}`}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Strengths;
