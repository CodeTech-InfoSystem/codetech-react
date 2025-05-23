import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../util/firebaseConfig';
import JobApplyForm from './JobApplyForm';

const JobListing = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      const docRef = doc(db, 'jobs', id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setJob(docSnap.data());
      }
    };

    fetchJob();
  }, [id]);

  if (!job) {
    return <div className="text-white p-6">Loading...</div>;
  }

  return (
    <div className="text-white min-h-screen py-20 px-6 bg-[#242423] pb-[8.5rem]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        <div>
          <h1 className="text-4xl font-bold mb-6 font-Baloo 2">
            {job.title.charAt(0).toUpperCase() + job.title.slice(1)}
          </h1>

          <h2 className="text-xl font-semibold text-[#af9854]">Job Details:</h2>
          <ul className="list-disc list-inside space-y-1 font-raleway">
            {job.details
              .split('. ')
              .map(s => s.trim())
              .filter(s => s.length > 0)
              .map((sentence, idx) => (
                <li key={idx}>{sentence}.</li>
              ))}
          </ul>
          <br />
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
                <li key={idx}>{sentence}.</li>
              ))}
          </ul>

          <h2 className="text-xl font-semibold text-[#af9854]">Skill Required:</h2>
          <ul className="list-disc list-inside space-y-1 font-raleway">
            {job.skillsRequired
              .split('. ')
              .map(s => s.trim())
              .filter(s => s.length > 0)
              .map((sentence, idx) => (
                <li key={idx}>{sentence}.</li>
              ))}
          </ul>
        </div>

        {/* Form */}
        <div>
          <JobApplyForm location={job.location} workingMode={job.workingMode} />
        </div>
      </div>
    </div>
  );
};

export default JobListing;
