import React, { useState } from 'react';
import { FaUserClock, FaMapMarkerAlt } from "react-icons/fa";
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../util/firebaseConfig';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdLocationOn } from "react-icons/md";

export const CurrentOpnings = () => {
  const navigate = useNavigate()
  const [jobData, setJobData] = useState([])

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'jobs'), snapshot => {
      const jobData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setJobData(jobData);

    });
    return () => unsubscribe();
  }, []);

  const handleReadMore = (job) => {
    navigate(`/jobs/${job.id}`, { state: { job } });
  }
  return (
    <section className="bg-[#f3f4f6] py-14 px-4 md:px-12" id="current-openings">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-Baloo">Current Openings</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {jobData.length > 0 ? (
            jobData.map((job, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 h-full flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-bold mb-2 font-Baloo">{job.title.charAt(0).toUpperCase() + job.title.slice(1)}</h3>
                  <div className="flex flex-wrap items-center text-sm text-gray-700 gap-4 mb-3 font-raleway min-h-[3.5rem]">
                    {job.location && (
                      <div className="flex items-center">
                        <FaMapMarkerAlt className="mr-1 text-[#ad954f]" />
                        <p>
                          {Array.isArray(job.location)
                            ? job.location.map((loc) => loc.label).join(', ')
                            : job.location}
                        </p>
                      </div>
                    )}
                    {job.employmentType && (
                      <div className="flex items-center">
                        <FaUserClock className="mr-1 text-[#ad954f]" />
                        {job.employmentType}
                      </div>
                    )}
                    {job.workingMode && (
                      <div className="flex items-center">
                        <MdLocationOn className="mr-1 text-[#ad954f]" />
                        {job.workingMode
                        }
                      </div>
                    )}
                    {job.experience && (
                      <div className="flex items-center">
                        <span className="font-semibold mr-1">Experience:</span>
                        {job.experience}
                      </div>
                    )}
                    {job.immediateJoiner && (
                      <p className="text-green-600 text-sm font-semibold font-raleway">
                        Immediate Joiner Requierd
                      </p>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm mb-4 font-raleway">
                    {job.shortDescription}
                  </p>
                </div>

                {/* Button directly here */}
                <button
                  onClick={() => handleReadMore(job)}
                  className="bg-[#ad954f] text-white px-5 py-2 rounded-md hover:bg-[#cdbf95] transition self-start inline-block"
                >
                  Read More
                </button>
              </div>

            ))
          ) : (
            <div className="col-span-full text-center text-gray-600 font-raleway">
              No current openings available. Please check back later.
            </div>
          )}
        </div>
        
        <div className="text-center mb-3">
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
