import React from "react";
import { motion } from "framer-motion";
const strengthsData = [
  {
    id: 1,
    title: "Strong Technical Skills",
    description: [
      "Expert developers who know the latest technologies",
      "Ability to build apps, websites, and custom software",
      "Quick to learn and adapt to new tools"
    ],
    icon: "/images/research.svg",
  },
  {
    id: 2,
    title: "High-Quality Work",
    description: [
      "Clean and well-organized coding",
      "Regular testing to fix errors early",
      "Software that runs smoothly without issues"
    ],
    icon: "/images/design.png",
  },
  {
    id: 3,
    title: "Fast & Efficient Development",
    description: [
      "Uses Agile methods to work quickly and efficiently",
      "Delivers updates in small steps to improve the product continuously",
      "Works closely with clients to meet their needs"
    ],
    icon: "/images/develope.svg",
  },
  {
    id: 4,
    title: "Successful Projects",
    description: [
      "A strong portfolio showing past work",
      "Happy clients and good reviews",
      "Case studies proving the company’s expertise"
    ],
    icon: "/images/test.svg",
  },
  {
    id: 5,
    title: "Customer Focused",
    description: [
      "Understands what the client wants and needs",
      "Builds custom solutions for different industries",
      "Provides support even after the project is completed"
    ],
    icon: "/images/research.svg",
  },
  {
    id: 6,
    title: "Strong Security",
    description: [
      "Follows best security practices to protect data",
      "Ensures software is safe from hacking and cyber threats",
      "Meets legal requirements like GDPR & HIPAA"
    ],
    icon: "/images/design.png",
  },
  {
    id: 7,
    title: "Scalable & Cloud-Ready",
    description: [
      "Can build software that grows as the business expands",
      "Works with cloud platforms like AWS, Azure, or Google Cloud",
      "Ensures smooth performance even with more users"
    ],
    icon: "/images/develope.svg",
  },
  {
    id: 8,
    title: "Great Teamwork",
    description: [
      "Talented developers, designers, and project managers",
      "Works together using tools like Slack & Trello",
      "Encourages learning and improvement"
    ],
    icon: "/images/test.svg",
  },
];


const Strengths = () => {
  return (
    <>
      <section className="py-8 px-20 bg-white">
        <h2 className="text-4xl font-bold text-center mb-6">Our Strength</h2>
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


              <ul className="text-[#000000] font-raleway list-disc pl-5">
                {strength.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              {/* <span className="absolute top-4 right-4 text-3xl font-bold text-gray-300">
                                {`0${strength.id}`}
                            </span> */}
            </div>
          ))}
        </div>
      </section>
      <section className="py-8 px-20 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-6">About Us</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Image */}
          <motion.img
            src="/images/about.svg"
            alt="People working together"
            className="rounded-xl"
            initial={{ y: -100, opacity: 0 }}
            animate={{
              y: [0, -10, 0],  
              opacity: 1
            }}
            transition={{
              y: {
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity
              },
              opacity: { duration: 1 }
            }}
          />

          {/* Right Content */}
          <div>
            <h3 className="text-4xl font-bold text-[#000000]">
              One of the Fastest Way to Business Growth
            </h3>
            <p className="text-gray-600 mt-4 w-[90%] font-raleway">
            One of Central India's leading Web and IT solutions providers, delivering high-quality, innovative technologies that drive businesses toward their next stage of growth and success.
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
                <p className="text-gray-600 font-raleway">
                  Ready to Help:{" "}
                  <a href="tel:+13566787897" className="text-[#AD954F] font-semibold">
                    +91 7993828531
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
