import { auth } from '../util/firebaseConfig';
import useAuthRequired from '../hooks/useAuthRequired';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { collection, addDoc, onSnapshot, deleteDoc, doc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../util/firebaseConfig';
import { IoLocation } from 'react-icons/io5';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { FaClock } from 'react-icons/fa';
import CreatableSelect from 'react-select/creatable';

function Admin() {
  useAuthRequired();
  const [jobs, setJobs] = useState([]);
  const [editingJob, setEditingJob] = useState(null);


  const [formData, setFormData] = useState({
    title: '',
    shortDescription: '',
    details: '',
    experience: '',
    rolesResponsibilities: '',
    skillsRequired: '',
    location: [],
    workingMode: '',
    immediateJoiner: false,
    employmentType: '',
    qualification: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    setFormData((prev) => ({ ...prev, [name]: fieldValue }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingJob) {

        await updateDoc(doc(db, 'jobs', editingJob.id), {
          ...formData,
          updatedAt: serverTimestamp(),
        });
        toast.success("Job updated successfully!");
        setEditingJob(null);
      } else {

        await addDoc(collection(db, 'jobs'), {
          ...formData,

          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        });
        toast.success("Job created successfully!");
      }


      setFormData({
        title: '',
        shortDescription: '',
        details: '',
        experience: '',
        rolesResponsibilities: '',
        skillsRequired: '',
        location: '',
        workingMode: '',
        immediateJoiner: false,
        employmentType: '',
        qualification: '',
      });
    } catch (error) {

      toast.error("Failed to save job. Try again.");
    }
  };

  const handleLogout = () => {
    auth.signOut();
  };

  const locationOptions = [
    { value: 'Hyderabad', label: 'Hyderabad' },
    { value: 'Indore', label: 'Indore' }
  ];

  const handleEdit = (job) => {
    setEditingJob(job);
    setFormData({
      title: job.title || '',
      shortDescription: job.shortDescription || '',
      details: job.details || '',
      experience: job.experience || '',
      rolesResponsibilities: job.rolesResponsibilities || '',
      skillsRequired: job.skillsRequired || '',
      location: job.location || '',
      workingMode: job.workingMode || '',
      immediateJoiner: job.immediateJoiner || false,
      employmentType: job.employmentType || '',
      qualification: job.qualification || '',
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'jobs', id));
      toast.success("Job Deleted successfully!");
    }
    catch (err) {
      toast.error("Failed to deleted job. Try again.");
    }

  };

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'jobs'), snapshot => {
      const jobList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      setJobs(jobList);
    });
    return () => unsubscribe();
  }, []);



  return (
    <>
      <div className="p-8 bg-[#242423]">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl space-y-4 shadow-lg max-w-3xl mx-auto"
        >
          {/* Job Title */}
          <label className="block text-black font-raleway">
            Job Title
            <input
              type="text"
              name="title"
              placeholder="Job Title"
              value={formData.title}
              onChange={handleChange}
              className="w-full text-black border px-4 py-2 rounded mt-1"
              required
            />
          </label>

          {/* Short Description */}
          <label className="block text-black font-raleway">
            Short Description
            <input
              name="shortDescription"
              type="text"
              placeholder="Short Description"
              value={formData.shortDescription}
              onChange={handleChange}
              className="w-full text-black border px-4 py-2 rounded mt-1"
              required
            />
          </label>



          {/* Experience */}
          <label className="block text-black font-raleway">
            Experience Required
            <input
              type="text"
              name="experience"
              placeholder="e.g. 3 years"
              value={formData.experience}
              onChange={handleChange}
              className="w-full text-black border px-4 py-2 rounded mt-1"
              required
            />
          </label>

          {/* Qualification */}
          <label className="block text-black font-raleway">
            Qualification
            <input
              name="qualification"
              type="text"
              placeholder="Qualification"
              value={formData.qualification}
              onChange={handleChange}
              className="w-full text-black border px-4 py-2 rounded mt-1"
              required
            />
          </label>

          {/* Location */}


          {/* Working Mode */}
          <label className="block text-black font-raleway">
            Working Mode
            <select
              name="workingMode"
              value={formData.workingMode}
              onChange={handleChange}
              className={`w-full border px-4 py-2 rounded mt-1 ${formData.workingMode ? 'text-black' : 'text-gray-500'}`}
              required
            >
              <option value="" disabled hidden>Select Working Mode</option>
              <option value="Remote">Remote</option>
              <option value="Onsite">Onsite</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </label>


          <label className="block text-black font-raleway">
            Location
            <CreatableSelect
              isMulti
              options={locationOptions}
              value={formData.location}
              onChange={(selected) => {
                setFormData((prev) => ({
                  ...prev,
                  location: selected
                }));
              }}
              className="mt-1"
              placeholder="Select or create locations"
            />
          </label>

          {/* Employment Type */}
          <label className="block text-black font-raleway">
            Employment Type
            <select
              name="employmentType"
              value={formData.employmentType}
              onChange={handleChange}
              className={`w-full border px-4 py-2 rounded mt-1 ${formData.employmentType ? 'text-black' : 'text-gray-500'}`}
              required
            >
              <option value="" disabled hidden>Select Employment Type</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Part-time">Intern</option>
            </select>
          </label>

          {/* Skills Required */}
          <label className="block text-black font-raleway">
            Skills Required
            <textarea
              name="skillsRequired"
              placeholder="Skills Required"
              value={formData.skillsRequired}
              onChange={handleChange}
              className="w-full text-black border px-4 py-2 rounded mt-1"
              rows={3}
              required
            />
          </label>

          {/* Roles & Responsibilities */}
          <label className="block text-black font-raleway">
            Roles & Responsibilities
            <textarea
              name="rolesResponsibilities"
              placeholder="Roles & Responsibilities"
              value={formData.rolesResponsibilities}
              onChange={handleChange}
              className="w-full text-black border px-4 py-2 rounded mt-1"
              rows={3}
              required
            />
          </label>

          {/* Job Details */}
          <label className="block text-black font-raleway">
            Job Details
            <textarea
              name="details"
              placeholder="Job Details"
              value={formData.details}
              onChange={handleChange}
              className="w-full text-black border px-4 py-2 rounded mt-1"
              rows={4}
              required
            />
          </label>

          {/* Immediate Joiner */}
          <label className="flex items-center space-x-2 text-black">
            <input
              type="checkbox"
              name="immediateJoiner"
              checked={formData.immediateJoiner}
              onChange={handleChange}
              className="text-black"
            />
            <span className="font-raleway">Immediate Joiner Required</span>
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#af9854] text-white font-bold py-2 rounded mt-4"
          >
            {editingJob ? "Update Job" : "Create Job"}
          </button>

          {/* Cancel Edit Button */}
          {editingJob && (
            <button
              type="button"
              onClick={() => {
                setEditingJob(null);
                setFormData({
                  title: '',
                  shortDescription: '',
                  details: '',
                  experience: '',
                  rolesResponsibilities: '',
                  skillsRequired: '',
                  location: '',
                  workingMode: '',
                  immediateJoiner: false,
                  employmentType: '',
                });
              }}
              className="w-full bg-gray-400 text-white font-bold py-2 rounded mt-2"
            >
              Cancel
            </button>
          )}
        </form>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>



      <div className="mt-10 max-w-4xl mx-auto py-10">
        <h1 className="text-3xl font-bold text-black mb-6 font-raleway text-center">
          Job List
        </h1>
        <div className="space-y-4">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white p-4 rounded-lg shadow-md flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-[#242423] font-raleway">{job.title}</h3>
                <p className="text-gray-700 mt-1 font-raleway">
                  <span className="font-semibold">Experience :&nbsp;</span>{job.experience}
                </p>
                <p className="text-gray-700 mt-1 font-raleway">{job.shortDescription}</p>

                <div className="flex items-center space-x-1 mt-2 text-[#af9854] font-raleway text-sm">
                  <IoLocation />
                  <p>
                    {Array.isArray(job.location)
                      ? job.location.map((loc) => loc.label).join(', ')
                      : job.location}
                  </p>
                  <FaClock className="ml-3" />

                  <p className=''>{job.employmentType}</p>
                </div>
              </div>

              <div className="flex space-x-4 mt-1">
                {/* Edit button */}
                <button
                  onClick={() => handleEdit(job)}
                  aria-label="Edit Job"
                  className="text-[#af9854] hover:text-black focus:outline-none"
                >
                  <FiEdit size={20} />
                </button>

                {/* Delete button */}
                <button
                  onClick={() => handleDelete(job.id)}
                  aria-label="Delete Job"
                  className="text-[#af9854] hover:text-black focus:outline-none"
                >
                  <FiTrash2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Admin;
