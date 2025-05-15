import React from 'react';
import { FaBell, FaUserClock, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const jobData = [
  // {
  //   id: 1,
  //   title: "Node.js Developer",
  //   description: "Work on scalable backend services and RESTful APIs in a dynamic environment.",
  //   tags: ["Night", "Full Time", "Indore"],
  // },
  // {
  //   id: 2,
  //   title: "React.js Developer",
  //   description: "Develop modern user interfaces with React and maintain frontend performance.",
  //   tags: ["Night", "Full Time", "Indore"],
  // },
  // {
  //   id: 3,
  //   title: "Ruby on Rails Developer",
  //   description: "Build and maintain web applications using Ruby on Rails with a focus on code quality.",
  //   tags: ["Night", "Full Time", "Indore"],
  // },
  // {
  //   id: 4,
  //   title: "UI/UX Designer",
  //   description: "Design intuitive user experiences and stunning interfaces for web and mobile apps.",
  //   tags: ["Night", "Full Time", "Indore"],
  // },
];

export const CurrentOpnings = () => {
  const iconMap = {
    "Night": <FaBell className="mr-1" />,
    "Full Time": <FaUserClock className="mr-1" />,
    "Indore": <FaMapMarkerAlt className="mr-1" />,
  };

  return (
    <section className="bg-[#f3f4f6] py-14 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-Baloo 2">Current Openings</h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {jobData.length > 0 ? (
            jobData.map((job, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
              >
                <h3 className="text-xl font-bold mb-2 font-Baloo 2">{job.title}</h3>
                <p className="text-gray-600 text-sm mb-4 font-raleway">{job.description}</p>
                <div className="flex flex-wrap gap-2 mb-6 font-raleway">
                  {job.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center px-3 py-1 text-sm border border-gray-300 rounded-full text-gray-700"
                    >
                      {iconMap[tag]} {tag}
                    </span>
                  ))}
                </div>

                <Link to="/JobListing">
                  <button className="bg-[#ad954f] text-white px-5 py-2 rounded-md hover:bg-[#cdbf95] transition">
                    Read More
                  </button>
                </Link>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-600 font-raleway">
              No current openings available. Please check back later.
            </div>
          )}
        </div>

        <div className='text-center mb-3'>
          <p className="text-gray-600 mt-14 font-raleway">
            For any information regarding career opportunities email us:{" "}
            <a href="mailto:careers@codetechinfosystem.com" className="text-blue-600">
              careers@codetechinfosystem.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
