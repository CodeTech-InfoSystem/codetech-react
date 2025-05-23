import useAuthRequired from '../hooks/useAuthRequired';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { collection, addDoc, onSnapshot, deleteDoc, doc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../util/firebaseConfig';
import { IoLocation } from 'react-icons/io5';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { FaClock, FaEye } from 'react-icons/fa';
import CreatableSelect from 'react-select/creatable';
import { Link } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';
import { RxCross2 } from "react-icons/rx";

const Admin = () => {
  useAuthRequired();
  const [jobs, setJobs] = useState([]);
  const [editingJob, setEditingJob] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const [showForm, setShowForm] = useState(false);

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

  const validateForm = () => {
    const errors = {};

    if (!formData.title.trim()) errors.title = "Job Title is required.";
    if (!formData.shortDescription.trim()) errors.shortDescription = "Short Description is required.";
    if (!formData.details.trim()) errors.details = "Job Details are required.";
    if (!formData.experience.trim()) errors.experience = "Experience is required.";
    if (!formData.rolesResponsibilities.trim()) errors.rolesResponsibilities = "Roles & Responsibilities are required.";
    if (!formData.skillsRequired.trim()) errors.skillsRequired = "Skills Required is required.";
    if (!formData.qualification.trim()) errors.qualification = "Qualification is required.";
    if (!formData.workingMode) errors.workingMode = "Working Mode must be selected.";
    if (!formData.employmentType) errors.employmentType = "Employment Type must be selected.";

    if (!Array.isArray(formData.location) || formData.location.length === 0) {
      errors.location = "At least one location is required.";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    if (['shortDescription', 'experience'].includes(name)) {
      const words = fieldValue.trim().split(/\s+/).filter(Boolean);
      if (words.length > 20) {
        setFormErrors((prev) => ({
          ...prev,
          [name]: `${name === 'shortDescription' ? 'Short description' : 'Experience required'} must be 30 words or fewer.`,
        }));
        return;
      } else {
        setFormErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors[name];
          return newErrors;
        });
      }
    }

    if (name === 'title') {
      const titleLength = fieldValue.trim().length;
      if (titleLength > 50) {
        setFormErrors((prev) => ({
          ...prev,
          title: "Job Title cannot exceed 50 characters."
        }));
      } else if (titleLength < 3 && titleLength > 0) {
        setFormErrors((prev) => ({
          ...prev,
          title: "Job Title must be at least 3 characters long."
        }));
      } else {
        setFormErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors.title;
          return newErrors;
        });
      }
    }
    setFormData((prev) => ({ ...prev, [name]: fieldValue }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

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
        location: [],
        workingMode: '',
        immediateJoiner: false,
        employmentType: '',
        qualification: '',
      });
      setShowForm(false);
    } catch (error) {
      toast.error("Failed to save job. Try again.");
    }
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
      location: job.location || [],
      workingMode: job.workingMode || '',
      immediateJoiner: job.immediateJoiner || false,
      employmentType: job.employmentType || '',
      qualification: job.qualification || '',
    });
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this job?");
    if (!confirmDelete) return;

    try {
      await deleteDoc(doc(db, 'jobs', id));
      toast.success("Job Deleted successfully!");
    }
    catch (err) {
      toast.error("Failed to delete job. Try again.");
    }
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'jobs'), snapshot => {
      const jobList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setJobs(jobList);
    });
    return () => unsubscribe();
  }, []);

  const handleCreateJob = () => {
    setEditingJob(null);
    setFormData({
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
    setShowForm(true);
  }

  return (
    <>
      <div className="p-8 bg-[#242423]">
        <div className="mt-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-8">
          {/* Job List */}
          <div className={`flex-1 max-w-8xl`}>
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
              <div className="w-full sm:w-auto text-center sm:text-left">
                <h1 className="text-2xl sm:text-3xl font-bold text-white font-raleway mb-4 sm:mb-0">
                  Job List
                </h1>
              </div>

              <button
                onClick={handleCreateJob}
                className="bg-[#af9854] text-white px-4 py-2 rounded hover:bg-[#998244] transition font-raleway whitespace-nowrap"
                aria-label="Create Job"
              >
                Create Job
              </button>
            </div>

            {jobs.length === 0 ? (
              <div className="text-center text-white font-raleway text-lg">
                No jobs available.
              </div>
            ) : (
              <div className="space-y-6">
                {jobs.map((job) => (
                  <div
                    key={job.id}
                    className="bg-white p-4 rounded-lg shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center"
                  >
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg sm:text-xl font-semibold text-[#242423] font-raleway">
                          {job.title.charAt(0).toUpperCase() + job.title.slice(1)}
                        </h3>

                        <div className="flex space-x-4">
                          <Link to={`/jobs/${job.id}`}>
                            <FaEye className="text-[#af9854] hover:text-[#d5c38e]" size={26} />
                          </Link>
                          <button
                            onClick={() => handleEdit(job)}
                            aria-label="Edit Job"
                            className="text-[#af9854] hover:text-[#d5c38e] focus:outline-none"
                          >
                            <FiEdit size={22} />
                          </button>
                          <button
                            onClick={() => handleDelete(job.id)}
                            aria-label="Delete Job"
                            className="text-[#af9854] hover:text-[#d5c38e] focus:outline-none"
                          >
                            <FiTrash2 size={22} />
                          </button>
                        </div>
                      </div>

                      <p className="text-gray-700 mt-1 font-raleway text-sm sm:text-base">
                        <span className="font-semibold">Experience:&nbsp;</span>
                        {job.experience}
                      </p>
                      <p className="text-gray-700 mt-1 font-raleway text-sm sm:text-base">{job.shortDescription}</p>

                      <div className="flex flex-wrap items-center space-x-2 mt-2 text-[#af9854] font-raleway text-xs sm:text-sm">
                        <IoLocation />
                        <p>
                          {Array.isArray(job.location)
                            ? job.location.map((loc) => loc.label).join(', ')
                            : job.location}
                        </p>
                        <FaClock className="ml-3" />
                        <p>{job.employmentType}</p>
                        <MdLocationOn className="ml-3" />
                        <p>{job.workingMode}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Job Form */}
          {showForm && (
            <div className="flex-1 max-4x p-6 rounded-lg  text-[#242423]">
              <h2 className="text-2xl font-bold mb-4">{editingJob ? 'Edit Job' : 'Create Job'}</h2>
              <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-xl space-y-4 shadow-lg max-w-3xl mx-auto relative  "
              >
                <div className="absolute top-4 right-4 cursor-pointer">
                  <RxCross2 onClick={() => setShowForm(false)} />
                </div>

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

                  />
                </label>
                {formErrors.title && <p className="text-red-500 text-sm font-Baloo 2">{formErrors.title}</p>}

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
                  />
                </label>
                {formErrors.shortDescription && <p className="text-red-500 text-sm font-Baloo 2">{formErrors.shortDescription}</p>}

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

                  />
                </label>
                {formErrors.experience && <p className="text-red-500 text-sm font-Baloo 2">{formErrors.experience}</p>}

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

                  />
                </label>
                {formErrors.qualification && <p className="text-red-500 text-sm font-Baloo 2">{formErrors.qualification}</p>}

                {/* Location */}


                {/* Working Mode */}
                <label className="block text-black font-raleway">
                  Working Mode
                  <select
                    name="workingMode"
                    value={formData.workingMode}
                    onChange={handleChange}
                    className={`w-full border px-4 py-2 rounded mt-1 ${formData.workingMode ? 'text-black' : 'text-gray-500'}`}

                  >
                    <option value="" disabled hidden>Select Working Mode</option>
                    <option value="Remote">Remote</option>
                    <option value="Onsite">Onsite</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </label>
                {formErrors.workingMode && <p className="text-red-500 text-sm font-Baloo 2">{formErrors.workingMode}</p>}


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
                {formErrors.location && <p className="text-red-500 text-sm font-Baloo 2">{formErrors.location}</p>}

                {/* Employment Type */}
                <label className="block text-black font-raleway">
                  Employment Type
                  <select
                    name="employmentType"
                    value={formData.employmentType}
                    onChange={handleChange}
                    className={`w-full border px-4 py-2 rounded mt-1 ${formData.employmentType ? 'text-black' : 'text-gray-500'}`}

                  >
                    <option value="" disabled hidden>Select Employment Type</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Intern">Intern</option>
                  </select>
                </label>
                {formErrors.employmentType && <p className="text-red-500 text-sm font-Baloo 2">{formErrors.employmentType}</p>}

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

                  />
                </label>
                {formErrors.skillsRequired && <p className="text-red-500 text-sm font-Baloo 2">{formErrors.skillsRequired}</p>}

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

                  />
                </label>
                {formErrors.rolesResponsibilities && <p className="text-red-500 text-sm font-Baloo 2">{formErrors.rolesResponsibilities}</p>}

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

                  />
                </label>
                {formErrors.details && <p className="text-red-500 text-sm font-Baloo 2">{formErrors.details}</p>}

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
                      setShowForm(false)
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
                    className="w-full bg-gray-400 text-white font-bold py-2 rounded mt-2 "
                  >
                    Cancel
                  </button>
                )}
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Admin;
