import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../util/firebaseConfig';
import JobApplyForm from './JobApplyForm';
import useAuthRequired from '../hooks/useAuthRequired';

const JobListing = () => {
  const { id } = useParams();
  const user = useAuthRequired(false);
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notAvailable, setNotAvailable] = useState(false);

  useEffect(() => {
    const fetchJob = async () => {
      setLoading(true);
      setNotAvailable(false);

      const docRef = doc(db, 'jobs', id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const jobData = docSnap.data();

        // If job is inactive, show not available
        if (jobData.status === "Draft" && !user) {
          setNotAvailable(true);
          setJob(null);
        } else {
          setNotAvailable(false);
          setJob(jobData);
        }
      } else {
        // Job not found
        setNotAvailable(true);
        setJob(null);
      }
      setLoading(false);
    };

    fetchJob();
  }, [id, user]);

  if (loading) {
    return <div className="text-white p-6">Loading...</div>;
  }

  if (notAvailable) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#242423] text-white text-2xl font-bold font-raleway">
        Job is not available
      </div>
    );
  }

  // job.status is active or inactive here
  return (
    <div className="text-white min-h-screen py-20 px-6 bg-[#242423] pb-[8.5rem]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div>
          <h1 className="text-4xl font-bold mb-6 font-Baloo 2">
            {job.title.charAt(0).toUpperCase() + job.title.slice(1)}
          </h1>

          <h2 className="text-xl font-semibold text-[#af9854]">Job Details:</h2>
          <ul className="list-disc list-inside space-y-1 font-raleway">
            {(job.details
              ?.split(/\n|(?:^|\s)[•\--\d]+\)?\.?\s+/g) || [])
              .map(s => s.trim())
              .filter(s => s.length > 0)
              .map((point, idx) => (
                <li key={idx}>{point.replace(/^-+/, '').trim()}</li>
              ))}
          </ul>
          <br />
          <h2 className="text-xl font-semibold text-[#af9854] font-Baloo 2">Experience</h2>
          <p className="mb-4 font-raleway">{job.experience}</p>

          <h2 className="text-xl font-semibold text-[#af9854] font-Baloo 2">Qualification</h2>
          <p className="mb-4 font-raleway">{job.qualification}</p>

          <h2 className="text-xl font-semibold text-[#af9854]">Roles and Responsibilites:</h2>
          <ul className="list-disc list-inside mb-4 space-y-1 font-raleway">
            {(job.rolesResponsibilities
              ?.split(/\n|(?:^|\s)[•\--\d]+\)?\.?\s+/g) || [])
              .map(s => s.trim())
              .filter(s => s.length > 0)
              .map((point, idx) => (
                <li key={idx}>{point.replace(/^-+/, '').trim()}</li>
              ))}
          </ul>

          <h2 className="text-xl font-semibold text-[#af9854]">Skill Required:</h2>
          <ul className="list-disc list-inside space-y-1 font-raleway">
            {(job.skillsRequired
              ?.split(/\n|(?:^|\s)[•\--\d]+\)?\.?\s+/g) || [])
              .map(s => s.trim())
              .filter(s => s.length > 0)
              .map((point, idx) => (
                <li key={idx}>{point.replace(/^-+/, '').trim()}</li>
              ))}
          </ul>
        </div>

        {/* Show form only if job status is Active */}
        <div>
          {job.status === "Active" ? (
            <JobApplyForm location={job.location} workingMode={job.workingMode} />
          ) : job.status.trim() === "Inactive" ? (
            <div className="text-red-600 text-center text-xl font-bold p-8 border border-red-600 rounded-md font-raleway">
              job is no longer accepting applications
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default JobListing;
