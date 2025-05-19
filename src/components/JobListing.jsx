import React from 'react'
import JobListingForm from './JobApplyForm'
import { useParams, useLocation } from "react-router-dom";
const JobListing = () => {
  const { id } = useParams();
  const location = useLocation();
  const job = location.state?.job;
  console.log(id)
  console.log(job, "job")
  return (
    <div className="text-white min-h-screen py-20 px-6 bg-[#242423] pb-[8.5rem]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        <div>
          <h1 className="text-4xl font-bold mb-6 font-Baloo 2">
            {job.title}
          </h1>

          <h2 className="text-xl font-semibold text-[#af9854] font-Baloo 2">Experience</h2>
          <p className="mb-4 font-raleway">
            {job.experience}
          </p>

          <h2 className="text-xl font-semibold text-[#af9854] font-Baloo 2">Qualification</h2>
          <p className="mb-4 font-raleway">
            {job.qualification}
          </p>

          <h2 className="text-xl font-semibold text-[#af9854]">Roles and Responsibilites:</h2>
          <ul className="list-disc list-inside mb-4 space-y-1 font-raleway">
            {job.rolesResponsibilities
              .split('. ')
              .map(s => s.trim())
              .filter(s => s.length > 0)
              .map((sentence, idx) => (
                <li key={idx}>
                  {sentence}.
                </li>
              ))
            }
          </ul>

          <h2 className="text-xl font-semibold text-[#af9854]">Skill Required:</h2>
          <ul className="list-disc list-inside space-y-1 font-raleway">
          {job.skillsRequired
              .split('. ')
              .map(s => s.trim())
              .filter(s => s.length > 0)
              .map((sentence, idx) => (
                <li key={idx}>
                  {sentence}.
                </li>
              ))
            }
          </ul>
        </div>

        {/* Form */}
        <div>
          <JobListingForm />
        </div>
      </div>
    </div>
  )
}
export default JobListing